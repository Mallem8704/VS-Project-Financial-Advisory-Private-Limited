import { NextRequest, NextResponse } from "next/server";
import { evaluateReadinessAssessment } from "@/lib/finance-readiness/scoring-engine";
import { prisma } from "@/lib/db/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { responses, contactDetails, saveLead } = body;

    if (!responses || typeof responses !== "object") {
      return NextResponse.json(
        { success: false, error: "Invalid responses payload." },
        { status: 400 }
      );
    }

    // Execute pure server-side scoring engine
    const evaluation = evaluateReadinessAssessment(responses);

    // Optionally save lead / assessment record if requested and DB is available
    if (saveLead && contactDetails) {
      try {
        await prisma.lead.create({
          data: {
            fullName: contactDetails.name || "Guest Lead",
            email: contactDetails.email || "guest@example.com",
            phone: contactDetails.phone || "N/A",
            businessName: contactDetails.company || "Prospective Business",
            industry: contactDetails.industry || "General Enterprise",
            notes: `Finance Readiness Score: ${evaluation.overallScore}/100 (${evaluation.bandLabel}). Missing Items: ${evaluation.missingItems.join(", ")}`,
            source: "FINANCE_READINESS_ASSESSMENT",
          },
        });
      } catch (dbError) {
        // Non-blocking for assessment return if DB is offline or mock
        console.warn("Failed to save lead record into database:", dbError);
      }
    }

    return NextResponse.json({
      success: true,
      evaluation,
    });
  } catch (error: any) {
    console.error("Evaluation API error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Scoring evaluation failed." },
      { status: 500 }
    );
  }
}
