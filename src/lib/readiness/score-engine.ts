import { REGULATORY_DISCLAIMERS } from "../utils";

export interface ReadinessInput {
  businessVintageYears: number;
  annualTurnoverInLakhs: number;
  netProfitMarginPercent: number;
  promoterCibilBracket: "750_PLUS" | "700_749" | "650_699" | "BELOW_650" | "NEW_TO_CREDIT";
  existingDebtInLakhs: number;
  collateralValueInLakhs: number;
  hasAuditedFinancials: boolean;
  gstFilingRegularity: "ALWAYS_ON_TIME" | "OCCASIONAL_DELAY" | "FREQUENT_DEFAULTS" | "NOT_APPLICABLE";
  udyamRegistered: boolean;
  targetLoanAmountInLakhs: number;
}

export interface ReadinessOutput {
  indicativeScore: number;
  category: "Prime Bankable" | "Structurable with Enhancements" | "Requires Pre-Application Advisory" | "Foundational Restructuring Needed";
  badgeColor: string;
  strengths: string[];
  vulnerabilities: string[];
  actionableImprovements: string[];
  potentiallySuitableProducts: Array<{
    title: string;
    description: string;
    targetInstitutions: string;
  }>;
  disclaimer: string;
}

export function evaluateFinanceReadiness(input: ReadinessInput): ReadinessOutput {
  let score = 0;
  const strengths: string[] = [];
  const vulnerabilities: string[] = [];
  const improvements: string[] = [];

  // 1. Business Vintage (Max 15 pts)
  if (input.businessVintageYears >= 5) {
    score += 15;
    strengths.push("Established business track record (> 5 years vintage).");
  } else if (input.businessVintageYears >= 3) {
    score += 12;
    strengths.push("Sufficient operating vintage (3-5 years) for commercial banking eligibility.");
  } else if (input.businessVintageYears >= 1) {
    score += 8;
    vulnerabilities.push("Relatively young operating vintage (1-2 years).");
    improvements.push("Prepare detailed project feasibility report highlighting promoter experience to compensate for shorter company vintage.");
  } else {
    score += 4;
    vulnerabilities.push("Greenfield/Startup vintage (< 1 year). Commercial bank unsecured options may be restricted.");
    improvements.push("Explore CGTMSE-backed schemes or Mudra/Stand-Up India frameworks designed for greenfield ventures.");
  }

  // 2. Financial Strength & Profitability (Max 25 pts)
  if (input.netProfitMarginPercent >= 8) {
    score += 15;
    strengths.push(`Robust operating margin (${input.netProfitMarginPercent}% PAT margin).`);
  } else if (input.netProfitMarginPercent >= 4) {
    score += 10;
    strengths.push(`Acceptable profitability margin (${input.netProfitMarginPercent}% PAT).`);
  } else if (input.netProfitMarginPercent > 0) {
    score += 5;
    vulnerabilities.push("Thin net profit margin (< 4%). Lenders scrutinize debt-service buffer.");
    improvements.push("Highlight gross contribution margins and cost-rationalization measures in the CMA explanatory notes.");
  } else {
    score += 0;
    vulnerabilities.push("Sub-zero net profitability / operating loss reported.");
    improvements.push("Demonstrate turnaround rationale and projected EBITDA inflection in the financial model.");
  }

  if (input.annualTurnoverInLakhs >= 500) {
    score += 10;
    strengths.push("Scale of operations (> ₹5 Cr turnover) qualifies for mid-corporate or SME banking desks.");
  } else if (input.annualTurnoverInLakhs >= 100) {
    score += 8;
    strengths.push("Established MSME turnover bracket (₹1 Cr - ₹5 Cr).");
  } else if (input.annualTurnoverInLakhs > 0) {
    score += 5;
  }

  // 3. Promoter CIBIL & Credit Behavior (Max 25 pts)
  if (input.promoterCibilBracket === "750_PLUS") {
    score += 25;
    strengths.push("Pristine promoter credit profile (CIBIL 750+), unlocking preferential risk-pricing.");
  } else if (input.promoterCibilBracket === "700_749") {
    score += 18;
    strengths.push("Satisfactory credit score (700-749).");
  } else if (input.promoterCibilBracket === "650_699") {
    score += 10;
    vulnerabilities.push("Moderate CIBIL score (650-699). May attract tighter loan covenants or higher interest spread.");
    improvements.push("Obtain CCR (Credit Information Report) and clear any disputed entries or high credit utilization.");
  } else if (input.promoterCibilBracket === "NEW_TO_CREDIT") {
    score += 12;
    vulnerabilities.push("Promoter is new to commercial credit bureau reporting.");
    improvements.push("Highlight personal net-worth and banking transaction volumes in credit proposal.");
  } else {
    score += 2;
    vulnerabilities.push("Adverse CIBIL score (< 650) is a major hurdle for formal banking sanction.");
    improvements.push("Conduct immediate credit bureau audit to rectify overdue records prior to formal bank submission.");
  }

  // 4. Collateral & Leverage Coverage (Max 20 pts)
  const collateralCoverageRatio = input.targetLoanAmountInLakhs > 0 
    ? (input.collateralValueInLakhs / input.targetLoanAmountInLakhs) 
    : 0;

  if (collateralCoverageRatio >= 1.0) {
    score += 20;
    strengths.push(`Fully backed with 100%+ tangible immovable collateral.`);
  } else if (collateralCoverageRatio >= 0.5) {
    score += 14;
    strengths.push(`Partial collateral cover (~${Math.round(collateralCoverageRatio * 100)}%). Hybrid CGTMSE structure applicable.`);
  } else if (input.targetLoanAmountInLakhs <= 500 && input.udyamRegistered) {
    score += 10;
    strengths.push("Eligible for consideration under CGTMSE collateral-free guarantee scheme (up to ₹5 Cr limit).");
    improvements.push("Structure credit application under CGTMSE Member Lending Institution (MLI) parameters.");
  } else {
    score += 4;
    vulnerabilities.push("Low collateral security for requested loan quantum.");
    improvements.push("Explore third-party guarantee, plant & machinery hypothecation, or CGTMSE guarantee route.");
  }

  // 5. Statutory Compliance & Banking Hygiene (Max 15 pts)
  if (input.hasAuditedFinancials) {
    score += 7;
    strengths.push("Audited statutory financial accounts available.");
  } else {
    vulnerabilities.push("Unaudited or provisional figures may require CA certification.");
    improvements.push("Complete formal CA audit / tax audit report before bank submission.");
  }

  if (input.gstFilingRegularity === "ALWAYS_ON_TIME") {
    score += 5;
    strengths.push("Consistent and timely GST filing record.");
  } else if (input.gstFilingRegularity === "OCCASIONAL_DELAY") {
    score += 2;
    vulnerabilities.push("Occasional GST return delays noted.");
  } else {
    score += 0;
    vulnerabilities.push("Irregular GST compliance is a primary rejection trigger during banker automated scorecards.");
    improvements.push("Ensure all GST returns (GSTR-1 and GSTR-3B) are reconciled and cleared up to current month.");
  }

  if (input.udyamRegistered) {
    score += 3;
    strengths.push("Udyam MSME Registration verified.");
  } else {
    improvements.push("Obtain Udyam Registration Certificate immediately to access priority sector lending benefits.");
  }

  // Clamp score
  const finalScore = Math.min(100, Math.max(10, score));

  // Category classification
  let category: ReadinessOutput["category"] = "Structurable with Enhancements";
  let badgeColor = "text-gold bg-gold/10 border-gold/30";

  if (finalScore >= 80) {
    category = "Prime Bankable";
    badgeColor = "text-emerald-700 bg-emerald-50 border-emerald-300";
  } else if (finalScore >= 60) {
    category = "Structurable with Enhancements";
    badgeColor = "text-amber-700 bg-amber-50 border-amber-300";
  } else if (finalScore >= 45) {
    category = "Requires Pre-Application Advisory";
    badgeColor = "text-orange-700 bg-orange-50 border-orange-300";
  } else {
    category = "Foundational Restructuring Needed";
    badgeColor = "text-red-700 bg-red-50 border-red-300";
  }

  // Potentially suitable products
  const products: ReadinessOutput["potentiallySuitableProducts"] = [];

  if (input.udyamRegistered && input.targetLoanAmountInLakhs <= 500) {
    products.push({
      title: "CGTMSE Collateral-Free Credit Facility",
      description: "Credit Guarantee Fund Trust for Micro and Small Enterprises covering credit facilities up to ₹500 Lakhs without third-party collateral.",
      targetInstitutions: "Public Sector Banks, Private Commercial Banks, SIDBI",
    });
  }

  products.push({
    title: "SME Working Capital (Cash Credit / Overdraft)",
    description: "Assessed via MPBF Method II or Nayak Committee Turnover method against hypothecation of stocks and book debts.",
    targetInstitutions: "Scheduled Commercial Banks",
  });

  if (collateralCoverageRatio >= 0.5 || input.targetLoanAmountInLakhs > 100) {
    products.push({
      title: "MSME Project Term Loan (Capex / Expansion)",
      description: "Structured project finance for factory land, building construction, and plant & machinery with 5 to 10 years tenure.",
      targetInstitutions: "State Financial Corporations, SIDBI, Commercial Banks",
    });
  }

  return {
    indicativeScore: finalScore,
    category,
    badgeColor,
    strengths,
    vulnerabilities,
    actionableImprovements: improvements,
    potentiallySuitableProducts: products,
    disclaimer: `${REGULATORY_DISCLAIMERS.FINANCE_READINESS} ${REGULATORY_DISCLAIMERS.INDICATIVE_ELIGIBILITY} ${REGULATORY_DISCLAIMERS.DISCRETION}`,
  };
}
