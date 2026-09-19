import { PrismaClient } from "@prisma/client";
import { hashPassword } from "../src/lib/auth/crypto";

const prisma = new PrismaClient();

async function main() {
  console.log("==========================================================");
  console.log("Seeding VS Project & Financial Advisory Institutional Data");
  console.log("==========================================================");

  // 1. SYSTEM ROLES & PERMISSIONS
  console.log("-> Seeding Roles & Permissions...");

  const permissionsList = [
    { code: "clients.view", name: "View Clients", module: "clients", description: "View client directory and profiles" },
    { code: "clients.create", name: "Create Client", module: "clients", description: "Register new client profiles" },
    { code: "clients.update", name: "Update Client", module: "clients", description: "Update client profile information" },
    { code: "projects.view", name: "View Projects", module: "projects", description: "View advisory projects" },
    { code: "projects.create", name: "Create Project", module: "projects", description: "Initiate new advisory mandate" },
    { code: "projects.update", name: "Update Project", module: "projects", description: "Update stage, metrics and timeline" },
    { code: "documents.review", name: "Review Documents", module: "documents", description: "Approve or reject client compliance docs" },
    { code: "documents.upload", name: "Upload Documents", module: "documents", description: "Upload project documentation" },
    { code: "dpr.create", name: "Create DPR", module: "dpr", description: "Author and synthesize Detailed Project Reports" },
    { code: "cma.create", name: "Create CMA", module: "cma", description: "Prepare Credit Monitoring Arrangement models" },
    { code: "knowledge.publish", name: "Publish Knowledge", module: "knowledge", description: "Publish statutory and regulatory updates" },
    { code: "payments.view", name: "View Payments", module: "payments", description: "View invoices and fee receipts" },
    { code: "leads.manage", name: "Manage Leads", module: "leads", description: "Manage CRM pipeline and intake calls" },
    { code: "users.manage", name: "Manage Users", module: "users", description: "Manage staff accounts and assign roles" },
    { code: "audit.view", name: "View Audit Log", module: "audit", description: "Inspect forensic access and activity logs" },
    { code: "settings.manage", name: "Manage Settings", module: "settings", description: "Manage platform configurations" },
  ];

  for (const perm of permissionsList) {
    await prisma.permission.upsert({
      where: { code: perm.code },
      update: { name: perm.name, description: perm.description, module: perm.module },
      create: perm,
    });
  }

  const roleDefs = [
    { code: "SUPER_ADMIN", name: "Super Administrator", description: "Full platform root control", isSystem: true },
    { code: "DIRECTOR", name: "Director & Partner", description: "Executive management with approval authority", isSystem: true },
    { code: "ADMIN", name: "Operations Administrator", description: "Platform user and resource administrator", isSystem: true },
    { code: "ADVISOR", name: "Senior Financial Advisor", description: "Lead consultant on project mandates", isSystem: true },
    { code: "FINANCIAL_ANALYST", name: "Financial Analyst", description: "Credit modeling, CMA & DPR specialist", isSystem: true },
    { code: "DOCUMENT_EXECUTIVE", name: "Document Executive", description: "KYC and compliance verification", isSystem: true },
    { code: "RELATIONSHIP_MANAGER", name: "Relationship Manager", description: "Enterprise client coordinator", isSystem: true },
    { code: "CONTENT_MANAGER", name: "Content Manager", description: "Knowledge base and circular curator", isSystem: true },
    { code: "SUPPORT", name: "Support Executive", description: "Client support and portal ticketing", isSystem: true },
    { code: "CLIENT", name: "Corporate Client", description: "Borrower and promoter portal user", isSystem: true },
  ];

  for (const r of roleDefs) {
    await prisma.role.upsert({
      where: { code: r.code },
      update: { name: r.name, description: r.description },
      create: r,
    });
  }

  // 2. DEMO ORGANIZATION
  console.log("-> Seeding Demo Organization...");
  const demoOrg = await prisma.organization.upsert({
    where: { id: "org-apex-agro-demo" },
    update: {},
    create: {
      id: "org-apex-agro-demo",
      name: "Apex Precision Agro & Engineering Private Limited [DEMO]",
      legalName: "Apex Precision Agro & Engineering Private Limited",
      constitution: "PRIVATE_LIMITED",
      panNumber: "AAACA1234A",
      gstNumber: "36AAACA1234A1Z5",
      udyamNumber: "UDYAM-TS-02-0012345",
      cinNumber: "U15310TG2020PTC145892",
      industry: "Agro-Processing & Food Manufacturing",
      businessVintageYears: 6,
      annualTurnoverInLakhs: 4500.0, // ₹45.00 Cr
      existingDebtInLakhs: 850.0, // ₹8.50 Cr
      address: "Plot No. 42-45, Phase II, IDA Mallapur",
      city: "Hyderabad",
      state: "Telangana",
      pinCode: "500076",
      status: "ACTIVE",
    },
  });

  // 3. SEED USERS ACROSS 10 ROLES
  console.log("-> Seeding Institutional Test Users (Password: Password@123)...");
  const defaultPasswordHash = await hashPassword("Password@123");

  const institutionalUsers = [
    { email: "superadmin@vsadvisory.com", fullName: "Venkata Satyanarayana (Super Admin) [DEMO]", role: "SUPER_ADMIN" as const },
    { email: "director@vsadvisory.com", fullName: "Dr. K. R. Sharma (Director) [DEMO]", role: "DIRECTOR" as const },
    { email: "admin@vsadvisory.com", fullName: "Rajesh Varma (Operations Admin) [DEMO]", role: "ADMIN" as const },
    { email: "advisor@vsadvisory.com", fullName: "M. V. Rao, Ex-DGM SBI (Lead Advisor) [DEMO]", role: "ADVISOR" as const },
    { email: "analyst@vsadvisory.com", fullName: "Pooja Reddy, CFA (Senior Financial Analyst) [DEMO]", role: "FINANCIAL_ANALYST" as const },
    { email: "document@vsadvisory.com", fullName: "Srinivas Goud (Document Verification Officer) [DEMO]", role: "DOCUMENT_EXECUTIVE" as const },
    { email: "rm@vsadvisory.com", fullName: "Anita Deshmukh (Relationship Manager) [DEMO]", role: "RELATIONSHIP_MANAGER" as const },
    { email: "content@vsadvisory.com", fullName: "Kavita Nair (Knowledge Base Curator) [DEMO]", role: "CONTENT_MANAGER" as const },
    { email: "support@vsadvisory.com", fullName: "Vikas Chandra (Support Desk) [DEMO]", role: "SUPPORT" as const },
    { email: "client@enterprise.com", fullName: "Ramesh Chandra Gupta (Managing Director, Apex Agro) [DEMO]", role: "CLIENT" as const, organizationId: demoOrg.id },
  ];

  const userRecordMap: Record<string, string> = {};

  for (const u of institutionalUsers) {
    const user = await prisma.user.upsert({
      where: { email: u.email },
      update: {
        fullName: u.fullName,
        role: u.role,
        organizationId: u.organizationId || null,
        status: "ACTIVE",
      },
      create: {
        email: u.email,
        passwordHash: defaultPasswordHash,
        fullName: u.fullName,
        role: u.role,
        organizationId: u.organizationId || null,
        phone: "+91 98765 43210",
        emailVerified: new Date(),
        status: "ACTIVE",
      },
    });
    userRecordMap[u.role] = user.id;

    // Link normalized Role
    const roleRecord = await prisma.role.findUnique({ where: { code: u.role } });
    if (roleRecord) {
      await prisma.userRoleAssignment.upsert({
        where: { userId_roleId: { userId: user.id, roleId: roleRecord.id } },
        update: {},
        create: { userId: user.id, roleId: roleRecord.id },
      });
    }
  }

  // 4. CLIENT PROFILE
  console.log("-> Seeding Client Profile...");
  const clientUserId = userRecordMap["CLIENT"];
  await prisma.clientProfile.upsert({
    where: { userId: clientUserId },
    update: {},
    create: {
      userId: clientUserId,
      organizationId: demoOrg.id,
      authorizedSignatoryName: "Ramesh Chandra Gupta",
      designation: "Managing Director",
      netWorthInLakhs: 1850.0, // ₹18.5 Cr
      cibilScore: 785,
      directorsJson: JSON.stringify([
        { name: "Ramesh Chandra Gupta", din: "01234567", shareholdingPercent: 65 },
        { name: "Sunita Gupta", din: "08765432", shareholdingPercent: 35 },
      ]),
      bankRelationshipsJson: JSON.stringify([
        { bank: "State Bank of India", branch: "SME Hyderabad", facility: "Cash Credit", limitInLakhs: 600, conduct: "Satisfactory" },
        { bank: "HDFC Bank", branch: "Banjara Hills", facility: "Term Loan", limitInLakhs: 250, conduct: "Clean" },
      ]),
    },
  });

  // 5. FINANCIAL INSTITUTIONS
  console.log("-> Seeding Financial Institutions...");
  const institutions = [
    {
      code: "SBI",
      name: "State Bank of India",
      type: "PUBLIC_SECTOR_BANK" as const,
      category: "India's Largest Commercial & MSME Lender",
      headquartersCity: "Mumbai",
      contactPerson: "Chief Manager, SME City Credit Centre",
      email: "sme.hyderabad@sbi.co.in",
      websiteUrl: "https://sbi.co.in",
      supportedProductsJson: JSON.stringify(["SME Smart Term Loan", "Cash Credit", "Standup India", "CGTMSE Covered Facility"]),
    },
    {
      code: "HDFC",
      name: "HDFC Bank Limited",
      type: "PRIVATE_BANK" as const,
      category: "Premier Private Commercial Bank",
      headquartersCity: "Mumbai",
      contactPerson: "Cluster Head, Wholesale Banking",
      email: "sme.advisory@hdfcbank.com",
      websiteUrl: "https://hdfcbank.com",
      supportedProductsJson: JSON.stringify(["Enterprise Term Loan", "Working Capital Overdraft", "Letter of Credit"]),
    },
    {
      code: "SIDBI",
      name: "Small Industries Development Bank of India",
      type: "DEVELOPMENT_FINANCIAL_INSTITUTION" as const,
      category: "Principal Financial Institution for MSMEs",
      headquartersCity: "Lucknow / Mumbai",
      contactPerson: "Branch Manager, Green & Energy Efficiency Desk",
      email: "support@sidbi.in",
      websiteUrl: "https://sidbi.in",
      supportedProductsJson: JSON.stringify(["4E (Energy Efficiency)", "SPEED (Pragati)", "Green Climate Term Loan"]),
    },
  ];

  const institutionMap: Record<string, string> = {};
  for (const inst of institutions) {
    const record = await prisma.financialInstitution.upsert({
      where: { code: inst.code },
      update: { name: inst.name, category: inst.category, supportedProductsJson: inst.supportedProductsJson },
      create: inst,
    });
    institutionMap[inst.code] = record.id;
  }

  // 6. ADVISORY PROJECTS
  console.log("-> Seeding Advisory Projects with 11 Stages...");
  const advisorUserId = userRecordMap["ADVISOR"];
  const analystUserId = userRecordMap["FINANCIAL_ANALYST"];

  const demoProject = await prisma.project.upsert({
    where: { id: "proj-rice-mill-modernization-demo" },
    update: {},
    create: {
      id: "proj-rice-mill-modernization-demo",
      clientId: clientUserId,
      organizationId: demoOrg.id,
      title: "₹25 Cr Rice Mill Modernization & Captive Solar Unit [DEMO]",
      projectType: "TERM_LOAN_AND_SUBSIDY",
      industry: "Agro-Processing (Rice Milling)",
      projectCost: 2500.0, // ₹25.00 Cr
      financeRequirement: 1875.0, // ₹18.75 Cr (75% Debt)
      promoterContribution: 625.0, // ₹6.25 Cr (25% Equity)
      status: "IN_PROGRESS",
      currentStage: "DPR_PREPARATION",
      assignedAdvisorId: advisorUserId,
      targetDate: new Date(Date.now() + 75 * 24 * 60 * 60 * 1000), // 75 days ahead
      completionPercentage: 45,
    },
  });

  // 7. PROJECT STAGES (Tracking progression across all 11 stages)
  const allStages = [
    { stage: "ONBOARDING" as const, title: "Client Onboarding & Mandate Agreement", status: "COMPLETED", orderIndex: 1 },
    { stage: "DOCUMENT_COLLECTION" as const, title: "Statutory & Financial Document Collection", status: "COMPLETED", orderIndex: 2 },
    { stage: "FINANCIAL_ASSESSMENT" as const, title: "Historical Financials Appraisal & Gap Audit", status: "COMPLETED", orderIndex: 3 },
    { stage: "DPR_PREPARATION" as const, title: "Detailed Project Report (DPR) Synthesis", status: "IN_PROGRESS", orderIndex: 4 },
    { stage: "CMA_PREPARATION" as const, title: "CMA Data Modeling (Form I to VI)", status: "IN_PROGRESS", orderIndex: 5 },
    { stage: "APPLICATION_PREPARATION" as const, title: "Bank Loan Application Compilation", status: "PENDING", orderIndex: 6 },
    { stage: "SUBMITTED_TO_INSTITUTION" as const, title: "Formal Submission to Lead Lenders", status: "PENDING", orderIndex: 7 },
    { stage: "QUERY_RESOLUTION" as const, title: "Bank Credit Committee Query Defense", status: "PENDING", orderIndex: 8 },
    { stage: "DECISION_OR_SANCTION" as const, title: "Credit Sanction & In-Principle Letter", status: "PENDING", orderIndex: 9 },
    { stage: "POST_SANCTION" as const, title: "Documentation & Pre-Disbursement Compliance", status: "PENDING", orderIndex: 10 },
    { stage: "COMPLETED" as const, title: "Disbursement & Mandate Closure", status: "PENDING", orderIndex: 11 },
  ];

  for (const s of allStages) {
    await prisma.projectStage.create({
      data: {
        projectId: demoProject.id,
        stage: s.stage,
        title: s.title,
        status: s.status,
        orderIndex: s.orderIndex,
        assignedToId: advisorUserId,
        startedAt: s.status !== "PENDING" ? new Date(Date.now() - (12 - s.orderIndex) * 7 * 24 * 60 * 60 * 1000) : null,
        completedAt: s.status === "COMPLETED" ? new Date(Date.now() - (10 - s.orderIndex) * 7 * 24 * 60 * 60 * 1000) : null,
      },
    });
  }

  // 8. PROJECT TASKS
  console.log("-> Seeding Project Tasks...");
  const tasks = [
    { title: "Review 3-Year CA Audited Financial Statements [DEMO]", priority: "HIGH" as const, status: "COMPLETED" as const, assignedToId: analystUserId },
    { title: "Conduct Machinery Quotation Verification with OEM (Satake Corp) [DEMO]", priority: "URGENT" as const, status: "IN_PROGRESS" as const, assignedToId: advisorUserId },
    { title: "Build 7-Year Debt Service Coverage Ratio (DSCR) Model [DEMO]", priority: "HIGH" as const, status: "IN_PROGRESS" as const, assignedToId: analystUserId },
    { title: "Draft Environmental & Pollution Control Clearance Application [DEMO]", priority: "MEDIUM" as const, status: "TODO" as const, assignedToId: advisorUserId },
  ];

  for (const t of tasks) {
    await prisma.projectTask.create({
      data: {
        projectId: demoProject.id,
        title: t.title,
        priority: t.priority,
        status: t.status,
        assignedToId: t.assignedToId,
        dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
      },
    });
  }

  // 9. BANK APPLICATION
  console.log("-> Seeding Institutional Bank Application...");
  await prisma.application.create({
    data: {
      projectId: demoProject.id,
      institutionId: institutionMap["SBI"],
      applicationNumber: "APP-SBI-2026-0042 [DEMO]",
      loanProduct: "SBI SME Project Term Loan + MoFPI Capital Subsidy",
      requestedAmount: 1875.0, // ₹18.75 Cr
      sanctionedAmount: null,
      interestRate: 8.85,
      tenureMonths: 84, // 7 Years including 18 months moratorium
      status: "UNDER_APPRAISAL",
      submittedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
      notes: "Application in active credit appraisal at SME City Credit Centre. Technical DPR under review.",
    },
  });

  // 10. DOCUMENTS & VERSIONS
  console.log("-> Seeding Documents & Versions...");
  const doc1 = await prisma.document.create({
    data: {
      projectId: demoProject.id,
      category: "PAST_FINANCIALS_AUDITED",
      title: "Audited Financial Statements FY 2023-2025 [DEMO]",
      fileName: "Apex_Agro_Audited_Financials_3Yr.pdf",
      fileKey: "projects/proj-rice-mill-modernization-demo/docs/Apex_Agro_Audited_Financials_3Yr.pdf",
      fileSize: 4892010,
      mimeType: "application/pdf",
      status: "VERIFIED",
      uploadedByUserId: clientUserId,
      verifiedByUserId: userRecordMap["DOCUMENT_EXECUTIVE"],
      verifiedAt: new Date(),
    },
  });

  await prisma.documentVersion.create({
    data: {
      documentId: doc1.id,
      versionNumber: 1,
      fileName: doc1.fileName,
      fileKey: doc1.fileKey,
      fileSize: doc1.fileSize,
      mimeType: doc1.mimeType,
      uploadedByUserId: clientUserId,
      changeSummary: "Initial upload of CA certified 3-year financials with auditor UDIN.",
    },
  });

  // 11. DPR & CMA WORKSPACES
  console.log("-> Seeding DPR & CMA Engineering Entities...");
  const dpr = await prisma.dPR.create({
    data: {
      projectId: demoProject.id,
      title: "Detailed Project Report: 25 TPH Modern Rice Mill & Captive Solar [DEMO]",
      version: 1,
      status: "IN_REVIEW",
      executiveSummary: "Expansion and modernization of existing 10 TPH paddy processing facility to 25 TPH state-of-the-art automated optical color sorting mill with 500 kW captive rooftop solar power plant in Mallapur IDA.",
      promoterBackground: "Promoters possess over 22 years of active industry experience in agro-commodities milling, procurement, and South India retail distribution.",
      technicalFeasibility: "Procuring Satake optical sorters and Buhler pre-cleaners. Power sanctioned at 11KV HT line with backup captive solar installation.",
      marketAnalysis: "Basmati and non-basmati demand in Telangana and coastal Andhra Pradesh exhibits 8.4% CAGR. Captive supply tie-ups with 240+ local farmer producer groups.",
      costEstimatesJson: JSON.stringify({
        landAndSite: 350.0,
        civilAndFactoryBuildings: 680.0,
        plantAndMachinery: 1120.0,
        solarPowerPlant: 180.0,
        preOperativeContingencies: 70.0,
        marginForWorkingCapital: 100.0,
        totalCost: 2500.0,
      }),
      meansOfFinanceJson: JSON.stringify({
        promoterEquity: 625.0, // 25%
        bankTermLoan: 1875.0,  // 75%
        projectedSubsidyUnderMoFPI: 500.0, // Capital subsidy to offset term debt post-commercial ops
      }),
    },
  });

  await prisma.dPRVersion.create({
    data: {
      dprId: dpr.id,
      versionNumber: 1,
      contentJson: JSON.stringify({ status: "DRAFT_COMPLETED", pages: 48 }),
      changeNotes: "Initial draft synthesized with technical quotation annexures.",
    },
  });

  const cma = await prisma.cMA.create({
    data: {
      projectId: demoProject.id,
      title: "CMA Data (Form I to VI) - Apex Agro Expansion [DEMO]",
      version: 1,
      status: "IN_REVIEW",
      historicalYears: 3,
      projectedYears: 5,
      operatingDataJson: JSON.stringify({
        form1: "Operating Statement: Sales projected ₹58 Cr -> ₹94 Cr",
        form2: "Balance Sheet Projections",
        form3: "Comparative Current Assets & Liabilities",
        form4: "Working Capital Assessment (MPBF Method II)",
      }),
      mpbfMethod1: 890.0,
      mpbfMethod2: 745.0,
      dscrAverage: 1.84, // Strong bankable DSCR
      currentRatioAverage: 1.42,
    },
  });

  await prisma.cMAVersion.create({
    data: {
      cmaId: cma.id,
      versionNumber: 1,
      operatingDataJson: cma.operatingDataJson,
      financialSummaryJson: JSON.stringify({ dscr: 1.84, currentRatio: 1.42, breakEvenCapacityPercent: 41.2 }),
      changeNotes: "CMA Form I-VI populated with Nayak & Tandon Method II benchmarks.",
    },
  });

  // 12. INVOICE & PAYMENT
  console.log("-> Seeding Invoice & Payment...");
  const invoice = await prisma.invoice.create({
    data: {
      projectId: demoProject.id,
      organizationId: demoOrg.id,
      invoiceNumber: "INV-2026-0042 [DEMO]",
      title: "Retainer Milestone 1: DPR Preparation & CMA Modeling",
      description: "Professional fees for Detailed Project Report preparation, CMA Data Form I-VI synthesis, and SBI Credit Committee advisory.",
      subtotalAmount: 300000.0, // ₹3.00 Lakhs
      taxAmount: 54000.0,       // ₹54,000 (18% GST)
      totalAmount: 354000.0,    // ₹3.54 Lakhs
      currency: "INR",
      status: "PAID",
      dueDate: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000),
      paidAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
    },
  });

  await prisma.invoiceItem.create({
    data: {
      invoiceId: invoice.id,
      description: "DPR Preparation & Technical Feasibility Report (₹25 Cr Project)",
      quantity: 1,
      unitPrice: 200000.0,
      taxPercent: 18.0,
      totalAmount: 236000.0,
    },
  });

  await prisma.invoiceItem.create({
    data: {
      invoiceId: invoice.id,
      description: "CMA Modeling (5-Year Projections, DSCR, Sensitivity Analysis)",
      quantity: 1,
      unitPrice: 100000.0,
      taxPercent: 18.0,
      totalAmount: 118000.0,
    },
  });

  await prisma.payment.create({
    data: {
      invoiceId: invoice.id,
      amount: 354000.0,
      currency: "INR",
      paymentMethod: "NEFT_RTGS",
      gateway: "MANUAL",
      gatewayPaymentId: "UTR-SBIN002019482910 [DEMO]",
      status: "COMPLETED",
      paidAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
      notes: "Direct bank transfer credited from Apex Precision Agro current account.",
    },
  });

  // 13. SUPPORT & ADVISORY TICKET
  console.log("-> Seeding Advisory Support Ticket...");
  const ticket = await prisma.ticket.create({
    data: {
      projectId: demoProject.id,
      userId: clientUserId,
      ticketNumber: "TCK-2026-0089 [DEMO]",
      subject: "Inquiry on Margin Money Subsidy Eligibility under MoFPI Scheme",
      description: "Could the advisory team clarify whether the solar power capex of ₹1.80 Cr qualifies under the Central MoFPI capital subsidy or requires a distinct MNRE application?",
      priority: "HIGH",
      status: "IN_PROGRESS",
      category: "DPR_REVISION",
      assignedToId: advisorUserId,
      assignedToName: "M. V. Rao",
    },
  });

  await prisma.ticketMessage.create({
    data: {
      ticketId: ticket.id,
      senderId: advisorUserId,
      content: "Dear Mr. Gupta, our agro-subsidy specialist has confirmed that the captive rooftop solar is eligible under MoFPI's auxiliary modernization component provided the generated energy does not exceed 100% of mill captive consumption. We have structured this in Section 4.2 of the DPR.",
      isInternalOnly: false,
    },
  });

  // 14. KNOWLEDGE BASE & GOVERNMENT SCHEMES
  console.log("-> Seeding Knowledge Base & Government Schemes...");
  const category = await prisma.knowledgeCategory.upsert({
    where: { slug: "msme-agro-subsidies" },
    update: {},
    create: {
      name: "Agro-Processing & MSME Subsidies",
      slug: "msme-agro-subsidies",
      description: "Central and state government schemes for food processing and industrial upgrades.",
      orderIndex: 1,
    },
  });

  await prisma.knowledgeArticle.upsert({
    where: { slug: "pmksy-creation-expansion-food-processing-scheme" },
    update: {},
    create: {
      slug: "pmksy-creation-expansion-food-processing-scheme",
      categoryId: category.id,
      category: "Subsidy Scheme",
      title: "PM Kisan SAMPADA Yojana: Scheme for Creation/Expansion of Food Processing Capacities [DEMO]",
      summary: "Comprehensive breakdown of capital subsidy up to 35% (max ₹5 Cr) for setting up modern processing units and agro-infrastructure.",
      content: "The Ministry of Food Processing Industries (MoFPI) provides grant-in-aid to entrepreneurs setting up new food processing units or modernizing existing facilities. Grants range from 35% to 50% of the eligible project cost subject to a ceiling of ₹5.00 Crore.",
      sourceUrl: "https://mofpi.gov.in/schemes/pm-kisan-sampada-yojana",
      issuingAuthority: "Ministry of Food Processing Industries (MoFPI)",
      publicationDate: new Date("2024-04-01"),
      effectiveDate: new Date("2024-04-01"),
      lastReviewedDate: new Date("2026-01-15"),
      reviewedBy: "M. V. Rao (Senior Advisor)",
      applicableAudience: "Rice Mills, Cold Storage, Food Processing Units",
      status: "PUBLISHED",
      tags: "PMKSY, MoFPI, Capital Subsidy, Food Processing",
    },
  });

  await prisma.governmentScheme.upsert({
    where: { slug: "cgtmse-credit-guarantee-scheme" },
    update: {},
    create: {
      name: "Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE) [DEMO]",
      slug: "cgtmse-credit-guarantee-scheme",
      nodalMinistry: "Ministry of MSME",
      targetSector: "Micro and Small Enterprises (Manufacturing & Services)",
      eligibilityCriteria: "Collateral-free credit facilities (term loan and/or working capital) extended by MLIs up to ₹5.00 Crore per eligible borrower.",
      subsidyMechanism: "Credit Guarantee Coverage up to 85% without third-party collateral or promoter guarantee.",
      sourceUrl: "https://www.cgtmse.in",
      effectiveDate: new Date("2023-04-01"),
      verifiedAt: new Date("2026-01-10"),
      status: "VERIFIED",
    },
  });

  // 15. AUDIT LOGS
  console.log("-> Seeding Forensic Security Audit Trail...");
  await prisma.auditLog.create({
    data: {
      actorId: userRecordMap["SUPER_ADMIN"],
      actorEmail: "superadmin@vsadvisory.com",
      actorRole: "SUPER_ADMIN",
      action: "SCHEMA_MIGRATION_INITIALIZED",
      resource: "DatabaseSchema",
      resourceId: "core-institutional-schema-v1",
      ipAddress: "127.0.0.1",
      userAgent: "VS-Advisory-Seeder/1.0 (Windows NT)",
      metadataJson: JSON.stringify({
        modelsSeeded: 48,
        rolesCount: 10,
        demoProject: demoProject.id,
        timestamp: new Date().toISOString(),
      }),
    },
  });

  console.log("==========================================================");
  console.log("✔ Institutional Database Seeding Completed Successfully!");
  console.log("==========================================================");
}

main()
  .catch((e) => {
    console.error("Error during database seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
