import { OnboardingPayload, GeneratedTask } from "./types";

export function generateInitialTaskChecklist(payload: OnboardingPayload): GeneratedTask[] {
  const tasks: GeneratedTask[] = [];

  // 1. Mandatory Mandate Initiation Task
  tasks.push({
    title: "Review & Sign Advisory Mandate Engagement Letter",
    description: `Formalize the advisory engagement for ${payload.business.legalName} covering ${payload.advisoryServices.join(", ")}.`,
    priority: "HIGH",
    category: "ONBOARDING",
    suggestedDueDays: 3,
  });

  // 2. Document Collection Tasks based on Document Readiness
  const readiness = payload.documentReadiness;
  if (readiness["audited_financials"] === "IN_PROGRESS" || readiness["audited_financials"] === "NOT_AVAILABLE") {
    tasks.push({
      title: "Collate Last 3-Years Audited Balance Sheets & Tax Audit Reports",
      description: "Provide CA-certified balance sheets, P&L statements, auditor notes, and 3CA/3CD tax audit reports with UDIN.",
      priority: "HIGH",
      category: "DOCUMENT_COLLECTION",
      suggestedDueDays: 5,
    });
  }

  if (readiness["bank_statements"] === "IN_PROGRESS" || readiness["bank_statements"] === "NOT_AVAILABLE") {
    tasks.push({
      title: "Export 12-Month Banking Statements (PDF format)",
      description: `Download continuous bank statements for all active operative accounts (${payload.financials.primaryBank || "all bank accounts"}).`,
      priority: "MEDIUM",
      category: "DOCUMENT_COLLECTION",
      suggestedDueDays: 4,
    });
  }

  if (payload.projectType === "MACHINERY" || payload.projectType === "MODERNIZATION" || payload.projectType === "EXPANSION") {
    tasks.push({
      title: "Furnish Pro-Forma Invoices & OEM Machinery Quotations",
      description: `Gather equipment quotations with technical specifications, power consumption, warranty terms, and civil foundation guidelines for ${payload.industry}.`,
      priority: "URGENT",
      category: "PROJECT_PLANNING",
      suggestedDueDays: 7,
    });
  }

  if (payload.businessStatus === "GREENFIELD_PROPOSED" || payload.projectType === "NEW_BUSINESS") {
    tasks.push({
      title: "Verify Land Title Ownership / Registered Lease Agreement",
      description: "Provide non-agricultural land conversion (NA / CLU) order, registered lease or sale deed, and industrial zone location map.",
      priority: "HIGH",
      category: "PROJECT_PLANNING",
      suggestedDueDays: 7,
    });
  }

  // 3. DPR Specific Task
  if (payload.advisoryServices.includes("DPR")) {
    tasks.push({
      title: "Schedule DPR Technical Scoping & Feasibility Session",
      description: `Participate in a 45-minute discovery call with VS Technical Advisor to finalize capacity utilization, raw material economics, and civil works schedule for ${payload.industry}.`,
      priority: "HIGH",
      category: "DPR_PREPARATION",
      suggestedDueDays: 5,
    });
  }

  // 4. CMA Specific Task
  if (payload.advisoryServices.includes("CMA") || payload.advisoryServices.includes("PROJECT_FINANCE")) {
    tasks.push({
      title: "Reconcile Operating Parameters for CMA Modeling (Form I to VI)",
      description: `Review projected capacity utilization, debtor/creditor holding periods, and working capital cycle assumptions for the ${payload.projectCostInLakhs} Lakhs capex plan.`,
      priority: "HIGH",
      category: "CMA_PREPARATION",
      suggestedDueDays: 8,
    });
  }

  // 5. Subsidy Specific Task
  if (payload.advisoryServices.includes("SUBSIDY")) {
    tasks.push({
      title: "Evaluate Central & State Capital Subsidy Eligibility",
      description: `Assess applicable government incentive schemes (e.g. MSME, MoFPI, State Industrial Policy) prior to committing machinery purchase orders.`,
      priority: "MEDIUM",
      category: "SUBSIDY_ASSESSMENT",
      suggestedDueDays: 10,
    });
  }

  // 6. Statutory Registration Gap Fill
  const regList = payload.registrations;
  if (!regList.includes("Udyam MSME") && payload.constitution !== "PROPOSED_NEW") {
    tasks.push({
      title: "Obtain Udyam MSME Registration Certificate",
      description: "Register enterprise on government Udyam portal to unlock priority sector lending interest benefits and collateral-free CGTMSE eligibility.",
      priority: "MEDIUM",
      category: "COMPLIANCE",
      suggestedDueDays: 6,
    });
  }

  return tasks;
}
