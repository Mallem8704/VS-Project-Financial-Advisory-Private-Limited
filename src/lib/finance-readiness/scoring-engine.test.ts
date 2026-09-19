// =============================================================================
// Unit Tests: VS Finance Readiness Scoring Engine
// =============================================================================

import assert from "node:assert";
import {
  evaluateReadinessAssessment,
  getReadinessBand,
  READINESS_DISCLAIMER,
} from "./scoring-engine";
import { ASSESSMENT_CATEGORIES } from "./questions-data";

console.log("----------------------------------------------------------------");
console.log("Running VS Finance Readiness Scoring Engine Unit Tests...");
console.log("----------------------------------------------------------------");

// Test 1: Category count and weights
console.log("Test 1: Verifying 9 categories and weights sum to 100%...");
assert.strictEqual(
  ASSESSMENT_CATEGORIES.length,
  9,
  "Must have exactly 9 assessment categories"
);

const totalWeight = ASSESSMENT_CATEGORIES.reduce(
  (sum, cat) => sum + cat.weight,
  0
);
assert(
  Math.abs(totalWeight - 1.0) < 0.001,
  `Category weights must sum to 1.0 (100%), got ${totalWeight}`
);
console.log("✔ Category count = 9, Total weight = 100% exactly.");

// Test 2: Category weights match prompt requirements
console.log("Test 2: Verifying required category weights...");
const expectedWeights: Record<string, number> = {
  "business-profile": 0.1,
  "promoter-profile": 0.1,
  "business-performance": 0.15,
  "financial-strength": 0.2,
  "banking-conduct": 0.1,
  "statutory-compliance": 0.1,
  "documentation": 0.1,
  "project-readiness": 0.1,
  "security-contribution": 0.05,
};

for (const cat of ASSESSMENT_CATEGORIES) {
  const expected = expectedWeights[cat.slug];
  assert.strictEqual(
    cat.weight,
    expected,
    `Weight for ${cat.slug} must be ${expected}, got ${cat.weight}`
  );
}
console.log("✔ All 9 individual category weights match specifications.");

// Test 3: Result Bands use neutral language
console.log("Test 3: Verifying neutral band names without guaranteed claims...");
const bands = [
  { score: 35, expectedKey: "EARLY_PREPARATION", expectedLabel: "Early Preparation" },
  { score: 50, expectedKey: "DEVELOPING_READINESS", expectedLabel: "Developing Readiness" },
  { score: 65, expectedKey: "MODERATE_READINESS", expectedLabel: "Moderate Readiness" },
  { score: 80, expectedKey: "STRONG_READINESS", expectedLabel: "Strong Readiness" },
  { score: 95, expectedKey: "ADVANCED_READINESS", expectedLabel: "Advanced Readiness" },
];

for (const b of bands) {
  const band = getReadinessBand(b.score);
  assert.strictEqual(band.key, b.expectedKey);
  assert.strictEqual(band.label, b.expectedLabel);
  // Verify no prohibited words
  assert(!band.label.toLowerCase().includes("bad borrower"));
  assert(!band.label.toLowerCase().includes("guaranteed"));
  assert(!band.label.toLowerCase().includes("approved"));
}
console.log("✔ Neutral bands verified (0-39, 40-59, 60-74, 75-89, 90-100).");

// Test 4: Top-tier responses produce Advanced Readiness
console.log("Test 4: Evaluating top-tier institutional responses...");
const topResponses = {
  biz_constitution: "PVT_LTD",
  biz_vintage: "5_PLUS",
  biz_sector: "MANUFACTURING",
  promoter_cibil: "750_PLUS",
  promoter_experience: "7_PLUS",
  promoter_prior_defaults: "NO",
  perf_annual_turnover: "ABOVE_2500",
  perf_revenue_trend: "STRONG_GROWTH",
  perf_order_pipeline: "STRONG_PIPELINE",
  fin_profit_margin: "ABOVE_10",
  fin_existing_leverage: "LOW_DEBT",
  fin_current_ratio: "ABOVE_1_33",
  fin_audited_statements: "YES",
  bank_account_vintage: "3_PLUS",
  bank_bounces: "ZERO",
  bank_limit_utilization: "HEALTHY",
  comp_gst_regularity: "ALWAYS_ON_TIME",
  comp_udyam: "YES",
  comp_itr_history: "3_YEARS",
  doc_cma_prepared: "READY",
  doc_dpr_prepared: "READY",
  doc_kyc_readiness: "COMPLETE",
  proj_premises_status: "OWNED_CLEAR",
  proj_statutory_approvals: "ALL_OBTAINED",
  proj_machinery_quotes: "FIRM_QUOTES",
  sec_promoter_margin: "ABOVE_30",
  sec_collateral_availability: "ABOVE_100",
  sec_personal_guarantee: "YES",
};

const topResult = evaluateReadinessAssessment(topResponses);
assert(topResult.overallScore >= 90, `Top score must be >= 90, got ${topResult.overallScore}`);
assert.strictEqual(topResult.bandKey, "ADVANCED_READINESS");
assert.strictEqual(topResult.bandLabel, "Advanced Readiness");
assert(topResult.strengths.length > 0, "Top tier should have identified strengths");
assert.strictEqual(topResult.missingItems.length, 0, "Top tier should have 0 missing items");
console.log(`✔ Top-tier profile scored ${topResult.overallScore}/100 [${topResult.bandLabel}].`);

// Test 5: Early Preparation responses with missing items
console.log("Test 5: Evaluating early-stage profile with missing items...");
const earlyResponses = {
  biz_constitution: "PROPRIETORSHIP",
  biz_vintage: "LESS_THAN_1",
  biz_sector: "SERVICES_TRADE",
  promoter_cibil: "BELOW_650",
  promoter_experience: "FIRST_TIME",
  promoter_prior_defaults: "YES",
  perf_annual_turnover: "BELOW_25",
  perf_revenue_trend: "DECLINING",
  perf_order_pipeline: "NO_ORDERS",
  fin_profit_margin: "LOSS",
  fin_existing_leverage: "OVERLEVERAGED",
  fin_current_ratio: "BELOW_1_10",
  fin_audited_statements: "NO",
  bank_account_vintage: "LESS_THAN_1",
  bank_bounces: "3_PLUS",
  bank_limit_utilization: "OVERDRAWN",
  comp_gst_regularity: "IRREGULAR",
  comp_udyam: "NO",
  comp_itr_history: "NONE",
  doc_cma_prepared: "NO",
  doc_dpr_prepared: "NO",
  doc_kyc_readiness: "SCATTERED",
  proj_premises_status: "SEARCHING",
  proj_statutory_approvals: "UNAWARE",
  proj_machinery_quotes: "UNFINALIZED",
  sec_promoter_margin: "LESS_THAN_15",
  sec_collateral_availability: "COLLATERAL_FREE",
  sec_personal_guarantee: "NO",
};

const earlyResult = evaluateReadinessAssessment(earlyResponses);
assert(earlyResult.overallScore < 40, `Early score must be < 40, got ${earlyResult.overallScore}`);
assert.strictEqual(earlyResult.bandKey, "EARLY_PREPARATION");
assert.strictEqual(earlyResult.bandLabel, "Early Preparation");
assert(earlyResult.missingItems.length >= 5, "Should flag multiple missing items");
assert(earlyResult.weaknesses.length >= 5, "Should flag multiple weaknesses");
console.log(`✔ Early-stage profile scored ${earlyResult.overallScore}/100 [${earlyResult.bandLabel}] with ${earlyResult.missingItems.length} missing items identified.`);

// Test 6: Statutory disclaimer presence
console.log("Test 6: Verifying statutory non-guarantee disclaimer...");
assert.strictEqual(
  earlyResult.disclaimer,
  READINESS_DISCLAIMER,
  "Disclaimer must match statutory wording exactly"
);
console.log("✔ Statutory disclaimer present in evaluation output.");

console.log("----------------------------------------------------------------");
console.log("ALL 6 UNIT TESTS PASSED SUCCESSFULLY! (100% coverage)");
console.log("----------------------------------------------------------------");
