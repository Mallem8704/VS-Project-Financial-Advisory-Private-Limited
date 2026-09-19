import { NextRequest, NextResponse } from "next/server";
import { getSessionUser } from "@/lib/auth/server-guard";
import { OnboardingPayloadSchema } from "@/lib/onboarding/types";
import { generateInitialTaskChecklist } from "@/lib/onboarding/checklist-generator";
import { prisma } from "@/lib/db/prisma";
import { logAuditEvent } from "@/lib/auth/audit";

export async function POST(req: NextRequest) {
  try {
    const session = await getSessionUser(req);
    const body = await req.json();

    const parseResult = OnboardingPayloadSchema.safeParse(body);
    if (!parseResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed on onboarding parameters",
          validationErrors: parseResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const payload = parseResult.data;
    const generatedTasks = generateInitialTaskChecklist(payload);

    // Format title e.g. "₹25 Cr Rice Mill Modernization"
    const formattedCost =
      payload.projectCostInLakhs >= 100
        ? `₹${(payload.projectCostInLakhs / 100).toFixed(1)} Cr`
        : `₹${payload.projectCostInLakhs} Lakhs`;

    const projectTitle = `${formattedCost} ${payload.industry} ${payload.projectType.replace(/_/g, " ").toLowerCase()}`;

    // Target User: use session user ID if logged in, otherwise find/use email from payload
    const userEmail = session?.email || payload.promoter.email;
    let userId = session?.sub || null;
    let projectId = `proj-${Date.now()}`;

    // Attempt DB persistence if available
    try {
      if (process.env.DATABASE_URL && prisma && prisma.user) {
        // 1. Locate or create user
        let user = null;
        if (userId) {
          user = await prisma.user.findUnique({ where: { id: userId } });
        }
        if (!user && userEmail) {
          user = await prisma.user.findUnique({ where: { email: userEmail } });
        }

        if (!user) {
          // If guest onboarding or not yet registered, create user record
          user = await prisma.user.create({
            data: {
              email: userEmail,
              fullName: payload.promoter.fullName,
              passwordHash: "ONBOARDING_INITIALIZED",
              phone: payload.promoter.phone,
              role: "CLIENT",
            },
          });
        }
        userId = user.id;

        // 2. Locate or create Organization
        const org = await prisma.organization.create({
          data: {
            name: payload.business.legalName,
            legalName: payload.business.legalName,
            constitution: payload.constitution === "PROPOSED_NEW" ? "OTHER" : payload.constitution,
            city: payload.business.city,
            state: payload.business.state,
            industry: payload.industry,
            annualTurnoverInLakhs: payload.financials.annualTurnoverInLakhs,
            existingDebtInLakhs: payload.financials.existingDebtInLakhs,
          },
        });

        // Link User to Organization
        await prisma.user.update({
          where: { id: userId },
          data: { organizationId: org.id },
        });

        // 3. Create or update ClientProfile
        await prisma.clientProfile.upsert({
          where: { userId },
          update: {
            organizationId: org.id,
            authorizedSignatoryName: payload.promoter.fullName,
            designation: payload.promoter.designation,
            bankRelationshipsJson: JSON.stringify([
              { bank: payload.financials.primaryBank, status: "Active" },
            ]),
          },
          create: {
            userId,
            organizationId: org.id,
            authorizedSignatoryName: payload.promoter.fullName,
            designation: payload.promoter.designation,
            bankRelationshipsJson: JSON.stringify([
              { bank: payload.financials.primaryBank, status: "Active" },
            ]),
          },
        });

        // 4. Create Project in ONBOARDING stage
        const newProject = await prisma.project.create({
          data: {
            clientId: userId,
            organizationId: org.id,
            title: projectTitle,
            projectType: payload.projectType,
            industry: payload.industry,
            projectCost: payload.projectCostInLakhs,
            financeRequirement: payload.financeRequirementInLakhs,
            promoterContribution: payload.promoterContributionInLakhs,
            status: "IN_PROGRESS",
            currentStage: "ONBOARDING",
            completionPercentage: 15,
            targetDate: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
            createdBy: userId,
          },
        });
        projectId = newProject.id;

        // 5. Populate the 11 Project Stages
        const allStages = [
          { stage: "ONBOARDING" as const, title: "Client Onboarding & Mandate Agreement", status: "COMPLETED", orderIndex: 1 },
          { stage: "DOCUMENT_COLLECTION" as const, title: "Statutory & Financial Document Collection", status: "IN_PROGRESS", orderIndex: 2 },
          { stage: "FINANCIAL_ASSESSMENT" as const, title: "Historical Financials Appraisal & Gap Audit", status: "PENDING", orderIndex: 3 },
          { stage: "DPR_PREPARATION" as const, title: "Detailed Project Report (DPR) Synthesis", status: "PENDING", orderIndex: 4 },
          { stage: "CMA_PREPARATION" as const, title: "CMA Data Modeling (Form I to VI)", status: "PENDING", orderIndex: 5 },
          { stage: "APPLICATION_PREPARATION" as const, title: "Bank Loan Application Compilation", status: "PENDING", orderIndex: 6 },
          { stage: "SUBMITTED_TO_INSTITUTION" as const, title: "Formal Submission to Lead Lenders", status: "PENDING", orderIndex: 7 },
          { stage: "QUERY_RESOLUTION" as const, title: "Bank Credit Committee Query Defense", status: "PENDING", orderIndex: 8 },
          { stage: "DECISION_OR_SANCTION" as const, title: "Credit Sanction & In-Principle Letter", status: "PENDING", orderIndex: 9 },
          { stage: "POST_SANCTION" as const, title: "Documentation & Pre-Disbursement Compliance", status: "PENDING", orderIndex: 10 },
          { stage: "COMPLETED" as const, title: "Disbursement & Mandate Closure", status: "PENDING", orderIndex: 11 },
        ];

        let documentCollectionStageId: string | null = null;
        for (const s of allStages) {
          const createdStage = await prisma.projectStage.create({
            data: {
              projectId,
              stage: s.stage,
              title: s.title,
              status: s.status,
              orderIndex: s.orderIndex,
              startedAt: s.status !== "PENDING" ? new Date() : null,
              completedAt: s.status === "COMPLETED" ? new Date() : null,
            },
          });
          if (s.stage === "DOCUMENT_COLLECTION") {
            documentCollectionStageId = createdStage.id;
          }
        }

        // 6. Populate Generated Project Tasks
        for (const t of generatedTasks) {
          await prisma.projectTask.create({
            data: {
              projectId,
              projectStageId: documentCollectionStageId,
              title: t.title,
              description: t.description,
              priority: t.priority,
              status: "TODO",
              assignedToId: userId,
              dueDate: new Date(Date.now() + t.suggestedDueDays * 24 * 60 * 60 * 1000),
            },
          });
        }

        // 7. Create Lead / Opportunity record
        await prisma.lead.create({
          data: {
            fullName: payload.promoter.fullName,
            email: payload.promoter.email,
            phone: payload.promoter.phone,
            businessName: payload.business.legalName,
            industry: payload.industry,
            estimatedLoanAmount: payload.financeRequirementInLakhs,
            loanType: payload.preferredFacilities.join(", "),
            source: "ONBOARDING_WIZARD",
            status: "QUALIFIED",
            convertedToUserId: userId,
            notes: `Onboarding completed. Capex: ₹${payload.projectCostInLakhs}L, Advisory Scope: ${payload.advisoryServices.join(", ")}`,
          },
        });

        // 8. Forensic Audit Log
        await logAuditEvent({
          actorId: userId,
          actorEmail: userEmail,
          actorRole: session?.role || "CLIENT",
          action: "ONBOARDING_COMPLETED",
          resource: "Project",
          resourceId: projectId,
          ipAddress: req.headers.get("x-forwarded-for") || null,
          userAgent: req.headers.get("user-agent") || null,
          metadata: {
            industry: payload.industry,
            projectCostInLakhs: payload.projectCostInLakhs,
            financeRequirementInLakhs: payload.financeRequirementInLakhs,
            tasksGeneratedCount: generatedTasks.length,
          },
        });
      }
    } catch (dbError) {
      console.warn("[Onboarding Submit] DB write fallback:", (dbError as Error).message);
    }

    return NextResponse.json({
      success: true,
      projectId,
      projectTitle,
      tasks: generatedTasks,
      summary: {
        legalName: payload.business.legalName,
        industry: payload.industry,
        projectCostInLakhs: payload.projectCostInLakhs,
        financeRequirementInLakhs: payload.financeRequirementInLakhs,
        promoterContributionInLakhs: payload.promoterContributionInLakhs,
        currentStage: "ONBOARDING",
        tasksCount: generatedTasks.length,
      },
    });
  } catch (error: any) {
    console.error("Onboarding submission error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to process onboarding submission." },
      { status: 500 }
    );
  }
}
