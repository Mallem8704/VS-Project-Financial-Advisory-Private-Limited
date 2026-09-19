// =============================================================================
// Unit Tests: VS Financial Intelligence Calculators
// =============================================================================

import assert from "node:assert";
import {
  calculateEmi,
  calculateDscr,
  calculateBreakEven,
  calculateWorkingCapital,
  calculateProjectCost,
  calculatePromoterContribution,
  calculateAmortizationSchedule,
  calculateDebtEquity,
  calculateInterestCoverage,
  calculateRoi,
} from "./calculations";

console.log("----------------------------------------------------------------");
console.log("Running VS Financial Intelligence Calculators Unit Tests...");
console.log("----------------------------------------------------------------");

// 1. EMI Calculator Test
console.log("Test 1: EMI Calculator (₹10,00,000 at 10% for 60 months)...");
const emi = calculateEmi(1000000, 10, 60);
// Mathematical check: P * r * (1+r)^n / ((1+r)^n - 1)
// 1000000 * (0.10/12) * (1 + 0.10/12)^60 / ((1 + 0.10/12)^60 - 1) ≈ ₹21,247
assert(
  Math.abs(emi.monthlyEmi - 21247) <= 5,
  `Expected EMI approx ₹21,247, got ${emi.monthlyEmi}`
);
assert.strictEqual(emi.totalPrincipal, 1000000);
assert(emi.totalInterest > 0, "Total interest must be positive");
assert.strictEqual(emi.totalPayment, emi.monthlyEmi * 60);
console.log(`✔ EMI verified: ₹${emi.monthlyEmi.toLocaleString()} per month.`);

// 2. DSCR Calculator Test
console.log("Test 2: DSCR Calculator (PAT=24L, Dep=12L, Int=8L, Prin=14L)...");
const dscr = calculateDscr(24, 12, 8, 14);
// Total cash available = 24 + 12 + 8 = 44L
// Total debt service = 8 + 14 = 22L
// DSCR = 44 / 22 = 2.0x
assert.strictEqual(dscr.dscr, 2.0, `Expected DSCR 2.0x, got ${dscr.dscr}`);
assert.strictEqual(dscr.totalCashAvailable, 44);
assert.strictEqual(dscr.totalDebtService, 22);
assert.strictEqual(dscr.status, "Prime Bankable");
console.log(`✔ DSCR verified: ${dscr.dscr}x [${dscr.status}].`);

// 3. Break-Even Calculator Test
console.log("Test 3: Break-Even Calculator (Fixed=5,00,000, Var=60, Price=100)...");
const bep = calculateBreakEven(500000, 60, 100, 15000);
// Contribution margin = 100 - 60 = 40
// Break-even units = 500000 / 40 = 12,500 units
// Break-even revenue = 12500 * 100 = ₹12,50,000
// Margin of safety = (15000 - 12500) / 15000 ≈ 16.7%
assert.strictEqual(bep.breakEvenUnits, 12500);
assert.strictEqual(bep.breakEvenRevenue, 1250000);
assert.strictEqual(bep.contributionMarginPerUnit, 40);
assert.strictEqual(bep.contributionMarginRatio, 40.0);
assert(Math.abs(bep.marginOfSafetyPercent - 16.7) <= 0.2);
console.log(`✔ Break-Even verified: ${bep.breakEvenUnits.toLocaleString()} units (₹${bep.breakEvenRevenue.toLocaleString()}).`);

// 4. Working Capital Estimator Test
console.log("Test 4: Working Capital Estimator (Turnover=500L, Cost=400L, Inv=45d, Deb=45d, Cred=30d)...");
const wc = calculateWorkingCapital(50000000, 40000000, 45, 45, 30);
// Operating cycle = 45 + 45 - 30 = 60 days
assert.strictEqual(wc.operatingCycleDays, 60);
assert.strictEqual(wc.nayakTurnoverMpbf, 10000000); // 20% of 500L = 100L
assert(wc.netWorkingCapitalRequired > 0);
console.log(`✔ Working capital verified: Operating cycle = ${wc.operatingCycleDays} days, Nayak MPBF = ₹${wc.nayakTurnoverMpbf.toLocaleString()}.`);

// 5. Project Cost Planner Test
console.log("Test 5: Project Cost Planner (Land=50L, Civil=100L, Mach=200L, PreOp=15L, Cont=5%, WC Margin=20L)...");
const pc = calculateProjectCost(5000000, 10000000, 20000000, 1500000, 5, 2000000);
// Hard capex = 50 + 100 + 200 = 350L
// Contingency = 5% of (100 + 200) = 15L
// Total = 350 + 15 + 15 + 20 = 400L (4 Crores)
assert.strictEqual(pc.subtotalHardCapex, 35000000);
assert.strictEqual(pc.contingencyAmount, 1500000);
assert.strictEqual(pc.totalProjectCost, 40000000);
assert.strictEqual(pc.costBreakdown.length, 6);
console.log(`✔ Project Cost verified: Total Project Cost = ₹${(pc.totalProjectCost / 10000000).toFixed(2)} Cr.`);

// 6. Promoter Contribution Calculator Test
console.log("Test 6: Promoter Contribution Calculator (Cost=1 Cr, Margin=25%)...");
const prom = calculatePromoterContribution(10000000, 25, 3000000);
// Required promoter contribution = 25% of 1 Cr = 25 Lakhs
// Eligible debt = 75 Lakhs
// Surplus = 30L - 25L = 5 Lakhs surplus
assert.strictEqual(prom.promoterContributionAmount, 2500000);
assert.strictEqual(prom.eligibleDebtAmount, 7500000);
assert.strictEqual(prom.debtEquityRatioString, "75:25");
assert.strictEqual(prom.surplusOrShortfall, 500000);
assert.strictEqual(prom.status, "Meets Bank Norms (75:25)");
console.log(`✔ Promoter Contribution verified: ₹${prom.promoterContributionAmount.toLocaleString()} equity required (${prom.debtEquityRatioString}).`);

// 7. Amortization Schedule Test
console.log("Test 7: Loan Repayment Schedule (10 Lakhs, 12% annual, 3 years)...");
const amort = calculateAmortizationSchedule(1000000, 12, 3);
assert.strictEqual(amort.yearlySchedule.length, 3);
assert.strictEqual(amort.monthlyScheduleFirstYear.length, 12);
// After 3 years, closing balance should be approximately 0
const finalYear = amort.yearlySchedule[2];
assert.strictEqual(finalYear.closingBalance, 0);
assert(amort.totalInterestPaid > 0);
console.log(`✔ Amortization Schedule verified across 3 years. Total payment = ₹${amort.totalAmountPaid.toLocaleString()}.`);

// 8. Debt Equity Ratio Calculator Test
console.log("Test 8: Debt-to-Equity Calculator (Debt=150L, NetWorth=100L)...");
const de = calculateDebtEquity(15000000, 10000000);
assert.strictEqual(de.debtEquityRatio, 1.5);
assert.strictEqual(de.status, "Conservative / Strong");
console.log(`✔ Debt-to-Equity verified: ${de.debtEquityRatio}x [${de.status}].`);

// 9. Interest Coverage Ratio (ICR) Test
console.log("Test 9: Interest Coverage Ratio Calculator (EBIT=60L, Interest=20L)...");
const icr = calculateInterestCoverage(6000000, 2000000);
assert.strictEqual(icr.icr, 3.0);
assert.strictEqual(icr.status, "Comfortable");
console.log(`✔ Interest Coverage verified: ${icr.icr}x [${icr.status}].`);

// 10. Basic ROI Calculator Test
console.log("Test 10: Basic ROI & Payback Calculator (Investment=1 Cr, Annual Profit=25L, 5 years)...");
const roi = calculateRoi(10000000, 2500000, 5);
// Payback period = 100L / 25L = 4.0 years
// Total profit = 25L * 5 = 125L
// Total ROI = (125 - 100) / 100 = 25.0%
assert.strictEqual(roi.paybackPeriodYears, 4.0);
assert.strictEqual(roi.annualizedRoiPercent, 25.0);
assert.strictEqual(roi.roiPercent, 25.0);
console.log(`✔ Basic ROI verified: ${roi.annualizedRoiPercent}% annualized, Payback = ${roi.paybackPeriodYears} years.`);

console.log("----------------------------------------------------------------");
console.log("ALL 10 FINANCIAL CALCULATOR UNIT TESTS PASSED (100% SUCCESS)!");
console.log("----------------------------------------------------------------");
