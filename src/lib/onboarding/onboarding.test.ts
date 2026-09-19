import { OnboardingPayloadSchema, OnboardingPayload } from "./types";
import { generateInitialTaskChecklist } from "./checklist-generator";

function assert(condition: boolean, msg: string) {
  if (!condition) {
    console.error(`❌ Assertion Failed: ${msg}`);
    throw new Error(msg);
  }
}

async function runTests() {
  console.log("================================================================");
  console.log("Running VS Client Onboarding Architecture Verification Suite");
  console.log("================================================================");

  // Test 1: Validating a complete compliant payload
  console.log("\nTest 1: Validating complete institutional onboarding payload...");
  const validPayload: OnboardingPayload = {
    promoter: {
      fullName: "Ramesh Chandra Gupta",
      email: "ramesh@apexagro.com",
      phone: "+91 98765 43210",
      designation: "Managing Director",
      netWorthBracket: "5_TO_10_CR",
    },
    business: {
      legalName: "Apex Precision Agro & Engineering Pvt Ltd",
      city: "Hyderabad",
      state: "Telangana",
      establishmentYear: "2019",
      activityDescription: "Modern 25 TPH automated rice milling and agro processing.",
    },
    constitution: "PRIVATE_LIMITED",
    industry: "Rice Mills",
    businessStatus: "EXISTING_RUNNING",
    projectType: "EXPANSION",
    projectCostInLakhs: 2500,
    costBreakdown: {
      landAndCivilInLakhs: 680,
      plantAndMachineryInLakhs: 1120,
      contingencyInLakhs: 70,
      workingCapitalMarginInLakhs: 100,
    },
    financeRequirementInLakhs: 1875,
    promoterContributionInLakhs: 625,
    preferredFacilities: ["Term Loan (Capex)", "Cash Credit / OD"],
    registrations: ["GST Registration", "Udyam MSME Certificate"],
    financials: {
      annualTurnoverInLakhs: 4500,
      profitMarginBand: "5_TO_10_PERCENT",
      existingDebtInLakhs: 850,
      primaryBank: "State Bank of India",
    },
    documentReadiness: {
      audited_financials: "AVAILABLE",
      bank_statements: "AVAILABLE",
      machinery_quotations: "IN_PROGRESS",
      land_title_deeds: "AVAILABLE",
      promoter_kyc: "AVAILABLE",
    },
    advisoryServices: ["DPR", "CMA", "PROJECT_FINANCE", "SUBSIDY"],
    notes: "Seeking fast-track credit committee review within 60 days.",
    consentGiven: true,
  };

  const parsed = OnboardingPayloadSchema.safeParse(validPayload);
  assert(parsed.success === true, "Valid payload should pass schema validation");
  console.log("✔ Valid payload passed schema verification.");

  // Test 2: Blocking submission when statutory consent is missing
  console.log("\nTest 2: Verifying consent requirement enforcement...");
  const invalidConsentPayload = { ...validPayload, consentGiven: false };
  const consentResult = OnboardingPayloadSchema.safeParse(invalidConsentPayload);
  assert(consentResult.success === false, "Payload without consent must fail");
  console.log("✔ Consent requirement properly enforced.");

  // Test 3: Blocking submission with negative or zero financial numbers
  console.log("\nTest 3: Verifying negative financial amounts rejection...");
  const invalidNumbersPayload = { ...validPayload, projectCostInLakhs: -100 };
  const numbersResult = OnboardingPayloadSchema.safeParse(invalidNumbersPayload);
  assert(numbersResult.success === false, "Negative project cost must fail");
  console.log("✔ Non-positive amounts properly rejected.");

  // Test 4: Intelligent Task Checklist Generation for Expansion + Machinery + DPR + CMA
  console.log("\nTest 4: Testing Intelligent Initial Task Checklist Generator...");
  const tasks = generateInitialTaskChecklist(validPayload);
  assert(tasks.length >= 4, `Checklist should contain at least 4 generated tasks (got ${tasks.length})`);

  const taskTitles = tasks.map((t) => t.title);
  assert(taskTitles.some((t) => t.includes("Mandate")), "Must contain Mandate letter signing task");
  assert(taskTitles.some((t) => t.includes("Machinery") || t.includes("OEM")), "Must contain Machinery quotation task for Expansion/Machinery");
  assert(taskTitles.some((t) => t.includes("DPR")), "Must contain DPR technical scoping session");
  assert(taskTitles.some((t) => t.includes("CMA")), "Must contain CMA Form I-VI operating parameter reconciliation");
  assert(taskTitles.some((t) => t.includes("Subsidy")), "Must contain Capital Subsidy evaluation task");
  console.log(`✔ Generated ${tasks.length} initial project tasks customized to client scope.`);

  // Test 5: Greenfield Specific Tasks
  console.log("\nTest 5: Testing Greenfield Project Specific Tasks...");
  const greenfieldPayload: OnboardingPayload = {
    ...validPayload,
    businessStatus: "GREENFIELD_PROPOSED",
    projectType: "NEW_BUSINESS",
    registrations: [], // Missing Udyam
  };
  const greenfieldTasks = generateInitialTaskChecklist(greenfieldPayload);
  const greenfieldTitles = greenfieldTasks.map((t) => t.title);
  assert(greenfieldTitles.some((t) => t.includes("Land Title")), "Must contain Land title/lease task for Greenfield setup");
  assert(greenfieldTitles.some((t) => t.includes("Udyam")), "Must flag missing Udyam MSME registration for established entities");
  console.log(`✔ Greenfield and registration gap-filling verified (${greenfieldTasks.length} tasks).`);

  console.log("\n----------------------------------------------------------------");
  console.log("ALL 5 ONBOARDING ARCHITECTURE TESTS PASSED SUCCESSFULLY (100%)!");
  console.log("----------------------------------------------------------------");
}

runTests().catch((err) => {
  console.error("Test execution failed:", err);
  process.exit(1);
});
