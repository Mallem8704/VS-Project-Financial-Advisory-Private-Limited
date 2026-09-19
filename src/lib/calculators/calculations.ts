// =============================================================================
// VS Financial Intelligence Tools — Pure Calculation Engine
// Tested Mathematical Calculation Functions for All 10 Calculators
// =============================================================================

export interface EmiCalculationResult {
  monthlyEmi: number;
  totalPrincipal: number;
  totalInterest: number;
  totalPayment: number;
  interestToPrincipalRatioPercent: number;
}

export interface DscrCalculationResult {
  dscr: number;
  totalCashAvailable: number; // PAT + Depreciation + Interest
  totalDebtService: number; // Principal + Interest
  status: "Prime Bankable" | "Acceptable / Standard" | "Marginal / Stressed" | "High Risk";
  statusColor: string;
  interpretation: string;
}

export interface BreakEvenCalculationResult {
  breakEvenUnits: number;
  breakEvenRevenue: number;
  contributionMarginPerUnit: number;
  contributionMarginRatio: number; // %
  marginOfSafetyPercent: number; // %
  currentRevenue: number;
}

export interface WorkingCapitalCalculationResult {
  operatingCycleDays: number;
  inventoryHoldingDays: number;
  debtorDays: number;
  creditorDays: number;
  netWorkingCapitalRequired: number; // in ₹
  nayakTurnoverMpbf: number; // 20% of turnover
  tandonMethodIIMpbf: number; // Current Assets - 25% margin - Current Liabilities
  recommendedLimit: number;
  interpretation: string;
}

export interface ProjectCostItem {
  head: string;
  amount: number;
  percentage: number;
}

export interface ProjectCostCalculationResult {
  totalProjectCost: number;
  subtotalHardCapex: number;
  contingencyAmount: number;
  preOperativeAmount: number;
  marginForWorkingCapital: number;
  costBreakdown: ProjectCostItem[];
}

export interface PromoterContributionResult {
  totalProjectCost: number;
  promoterContributionPercent: number;
  promoterContributionAmount: number;
  eligibleDebtAmount: number;
  debtEquityRatioString: string;
  surplusOrShortfall: number; // relative to available promoter funds
  status: "Exceeds Standard Norms" | "Meets Bank Norms (75:25)" | "Margin Shortfall";
  statusColor: string;
  interpretation: string;
}

export interface AmortizationScheduleRow {
  period: number; // month or year
  openingBalance: number;
  emi: number;
  principalPaid: number;
  interestPaid: number;
  closingBalance: number;
}

export interface AmortizationScheduleResult {
  monthlyEmi: number;
  totalInterestPaid: number;
  totalAmountPaid: number;
  yearlySchedule: AmortizationScheduleRow[];
  monthlyScheduleFirstYear: AmortizationScheduleRow[];
}

export interface DebtEquityCalculationResult {
  debtEquityRatio: number; // Total Debt / Tangible Net Worth
  tolTnwRatio: number; // Total Outside Liabilities / Tangible Net Worth
  totalDebt: number;
  tangibleNetWorth: number;
  status: "Conservative / Strong" | "Acceptable / Standard" | "High Leverage" | "Critical";
  statusColor: string;
  interpretation: string;
}

export interface InterestCoverageCalculationResult {
  icr: number; // EBIT / Interest
  ebit: number;
  interestExpense: number;
  status: "Comfortable" | "Acceptable" | "Stressed" | "Insolvent";
  statusColor: string;
  interpretation: string;
}

export interface RoiCalculationResult {
  roiPercent: number; // (Total Profit / Total Investment) * 100
  annualizedRoiPercent: number;
  paybackPeriodYears: number;
  netProfitTotal: number;
  status: "High Return" | "Healthy Commercial Return" | "Sub-Par Return";
  statusColor: string;
  interpretation: string;
}

// -----------------------------------------------------------------------------
// 1. EMI CALCULATOR
// -----------------------------------------------------------------------------
export function calculateEmi(
  principal: number,
  annualInterestRatePercent: number,
  tenureMonths: number
): EmiCalculationResult {
  if (principal <= 0 || tenureMonths <= 0) {
    return {
      monthlyEmi: 0,
      totalPrincipal: principal,
      totalInterest: 0,
      totalPayment: 0,
      interestToPrincipalRatioPercent: 0,
    };
  }

  // 0% interest edge case
  if (annualInterestRatePercent <= 0) {
    const monthlyEmi = Math.round(principal / tenureMonths);
    return {
      monthlyEmi,
      totalPrincipal: principal,
      totalInterest: 0,
      totalPayment: principal,
      interestToPrincipalRatioPercent: 0,
    };
  }

  const monthlyRate = annualInterestRatePercent / 12 / 100;
  const factor = Math.pow(1 + monthlyRate, tenureMonths);
  const emiExact = (principal * monthlyRate * factor) / (factor - 1);
  const monthlyEmi = Math.round(emiExact);

  const totalPayment = monthlyEmi * tenureMonths;
  const totalInterest = Math.max(0, totalPayment - principal);
  const interestRatio =
    principal > 0 ? Math.round((totalInterest / principal) * 1000) / 10 : 0;

  return {
    monthlyEmi,
    totalPrincipal: principal,
    totalInterest,
    totalPayment,
    interestToPrincipalRatioPercent: interestRatio,
  };
}

// -----------------------------------------------------------------------------
// 2. DSCR CALCULATOR
// -----------------------------------------------------------------------------
export function calculateDscr(
  pat: number,
  depreciation: number,
  annualInterest: number,
  annualPrincipal: number
): DscrCalculationResult {
  const totalCashAvailable = Math.max(0, pat) + Math.max(0, depreciation) + Math.max(0, annualInterest);
  const totalDebtService = Math.max(0, annualInterest) + Math.max(0, annualPrincipal);

  if (totalDebtService <= 0) {
    return {
      dscr: totalCashAvailable > 0 ? 99.99 : 0,
      totalCashAvailable,
      totalDebtService: 0,
      status: "Prime Bankable",
      statusColor: "emerald",
      interpretation: "Zero debt service obligations recorded. Fully debt-free capacity.",
    };
  }

  const rawDscr = totalCashAvailable / totalDebtService;
  const dscr = Math.round(rawDscr * 100) / 100;

  let status: DscrCalculationResult["status"] = "Acceptable / Standard";
  let statusColor = "blue";
  let interpretation = "";

  if (dscr >= 1.75) {
    status = "Prime Bankable";
    statusColor = "emerald";
    interpretation = "Exceptional debt coverage. Comfortably exceeds PSU and private bank appraisal cutoffs (typically 1.50x–1.75x).";
  } else if (dscr >= 1.40) {
    status = "Acceptable / Standard";
    statusColor = "blue";
    interpretation = "Healthy debt servicing capability meeting standard commercial bank term loan covenants (1.40x–1.50x benchmark).";
  } else if (dscr >= 1.15) {
    status = "Marginal / Stressed";
    statusColor = "amber";
    interpretation = "Marginal debt coverage. Lenders may insist on longer repayment tenure or higher promoter margin to improve DSCR buffer.";
  } else {
    status = "High Risk";
    statusColor = "red";
    interpretation = "Insufficient operational cash flow to service debt obligations. Term loan proposals below 1.15x typically face credit committee rejection.";
  }

  return {
    dscr,
    totalCashAvailable,
    totalDebtService,
    status,
    statusColor,
    interpretation,
  };
}

// -----------------------------------------------------------------------------
// 3. BREAK-EVEN CALCULATOR
// -----------------------------------------------------------------------------
export function calculateBreakEven(
  totalFixedCosts: number,
  variableCostPerUnit: number,
  sellingPricePerUnit: number,
  currentEstimatedUnits: number = 0
): BreakEvenCalculationResult {
  const contributionMarginPerUnit = sellingPricePerUnit - variableCostPerUnit;

  if (contributionMarginPerUnit <= 0) {
    return {
      breakEvenUnits: 0,
      breakEvenRevenue: 0,
      contributionMarginPerUnit: 0,
      contributionMarginRatio: 0,
      marginOfSafetyPercent: 0,
      currentRevenue: currentEstimatedUnits * sellingPricePerUnit,
    };
  }

  const contributionMarginRatio =
    sellingPricePerUnit > 0
      ? Math.round((contributionMarginPerUnit / sellingPricePerUnit) * 1000) / 10
      : 0;

  const breakEvenUnits = Math.ceil(totalFixedCosts / contributionMarginPerUnit);
  const breakEvenRevenue = Math.round(breakEvenUnits * sellingPricePerUnit);

  const currentRevenue = currentEstimatedUnits * sellingPricePerUnit;
  let marginOfSafetyPercent = 0;
  if (currentEstimatedUnits > breakEvenUnits) {
    marginOfSafetyPercent =
      Math.round(((currentEstimatedUnits - breakEvenUnits) / currentEstimatedUnits) * 1000) / 10;
  }

  return {
    breakEvenUnits,
    breakEvenRevenue,
    contributionMarginPerUnit: Math.round(contributionMarginPerUnit * 100) / 100,
    contributionMarginRatio,
    marginOfSafetyPercent,
    currentRevenue,
  };
}

// -----------------------------------------------------------------------------
// 4. WORKING CAPITAL ESTIMATOR
// -----------------------------------------------------------------------------
export function calculateWorkingCapital(
  annualTurnover: number,
  annualCostOfSales: number,
  inventoryHoldingDays: number,
  debtorCollectionDays: number,
  creditorPaymentDays: number
): WorkingCapitalCalculationResult {
  const operatingCycleDays =
    inventoryHoldingDays + debtorCollectionDays - creditorPaymentDays;

  // Operating cycle working capital requirement based on Cost of Sales
  const dailyCostOfSales = annualCostOfSales / 365;
  const rawRequirement = Math.max(0, dailyCostOfSales * operatingCycleDays);
  const netWorkingCapitalRequired = Math.round(rawRequirement);

  // Nayak Committee Turnover Method: 25% of turnover total WC, 20% funded by bank, 5% promoter margin
  const nayakTurnoverMpbf = Math.round(annualTurnover * 0.2);

  // Tandon Committee Method II: 75% of (Current Assets - Current Liabilities)
  const currentAssets = (annualCostOfSales / 365) * (inventoryHoldingDays + debtorCollectionDays);
  const currentLiabilities = (annualCostOfSales / 365) * creditorPaymentDays;
  const workingCapitalGap = Math.max(0, currentAssets - currentLiabilities);
  const tandonMethodIIMpbf = Math.round(workingCapitalGap * 0.75);

  const recommendedLimit = Math.max(nayakTurnoverMpbf, tandonMethodIIMpbf);

  let interpretation = "";
  if (operatingCycleDays <= 60) {
    interpretation = "Efficient operating cycle (≤ 60 days). Working capital velocity is high, minimizing interest burden.";
  } else if (operatingCycleDays <= 120) {
    interpretation = "Standard operating cycle (60–120 days). Typical for manufacturing and agro-processing SMEs.";
  } else {
    interpretation = "Extended operating cycle (> 120 days). High inventory or delayed receivables require substantial working capital finance.";
  }

  return {
    operatingCycleDays,
    inventoryHoldingDays,
    debtorDays: debtorCollectionDays,
    creditorDays: creditorPaymentDays,
    netWorkingCapitalRequired,
    nayakTurnoverMpbf,
    tandonMethodIIMpbf,
    recommendedLimit,
    interpretation,
  };
}

// -----------------------------------------------------------------------------
// 5. PROJECT COST PLANNER
// -----------------------------------------------------------------------------
export function calculateProjectCost(
  landAndSiteDevelopment: number,
  civilWorksAndBuildings: number,
  plantAndMachinery: number,
  preOperativeExpenses: number,
  contingencyPercent: number,
  marginForWorkingCapital: number
): ProjectCostCalculationResult {
  const subtotalHardCapex =
    landAndSiteDevelopment + civilWorksAndBuildings + plantAndMachinery;
  const contingencyAmount = Math.round(
    (civilWorksAndBuildings + plantAndMachinery) * (contingencyPercent / 100)
  );

  const totalProjectCost =
    subtotalHardCapex +
    contingencyAmount +
    preOperativeExpenses +
    marginForWorkingCapital;

  const costBreakdown: ProjectCostItem[] = [
    {
      head: "Land & Site Development",
      amount: landAndSiteDevelopment,
      percentage: totalProjectCost > 0 ? Math.round((landAndSiteDevelopment / totalProjectCost) * 1000) / 10 : 0,
    },
    {
      head: "Civil Works & Factory Building",
      amount: civilWorksAndBuildings,
      percentage: totalProjectCost > 0 ? Math.round((civilWorksAndBuildings / totalProjectCost) * 1000) / 10 : 0,
    },
    {
      head: "Plant & Machinery / Equipment",
      amount: plantAndMachinery,
      percentage: totalProjectCost > 0 ? Math.round((plantAndMachinery / totalProjectCost) * 1000) / 10 : 0,
    },
    {
      head: "Pre-Operative & IDC Expenses",
      amount: preOperativeExpenses,
      percentage: totalProjectCost > 0 ? Math.round((preOperativeExpenses / totalProjectCost) * 1000) / 10 : 0,
    },
    {
      head: "Contingency Provisions",
      amount: contingencyAmount,
      percentage: totalProjectCost > 0 ? Math.round((contingencyAmount / totalProjectCost) * 1000) / 10 : 0,
    },
    {
      head: "Margin Money for Working Capital",
      amount: marginForWorkingCapital,
      percentage: totalProjectCost > 0 ? Math.round((marginForWorkingCapital / totalProjectCost) * 1000) / 10 : 0,
    },
  ];

  return {
    totalProjectCost,
    subtotalHardCapex,
    contingencyAmount,
    preOperativeAmount: preOperativeExpenses,
    marginForWorkingCapital,
    costBreakdown,
  };
}

// -----------------------------------------------------------------------------
// 6. PROMOTER CONTRIBUTION CALCULATOR
// -----------------------------------------------------------------------------
export function calculatePromoterContribution(
  totalProjectCost: number,
  targetPromoterContributionPercent: number,
  existingPromoterFunds: number = 0
): PromoterContributionResult {
  const validPercent = Math.min(100, Math.max(5, targetPromoterContributionPercent));
  const promoterContributionAmount = Math.round(
    totalProjectCost * (validPercent / 100)
  );
  const eligibleDebtAmount = Math.max(
    0,
    totalProjectCost - promoterContributionAmount
  );

  const debtPercent = 100 - validPercent;
  const debtEquityRatioString = `${debtPercent}:${Math.round(validPercent)}`;

  const surplusOrShortfall = existingPromoterFunds - promoterContributionAmount;

  let status: PromoterContributionResult["status"] = "Meets Bank Norms (75:25)";
  let statusColor = "emerald";
  let interpretation = "";

  if (validPercent >= 30) {
    status = "Exceeds Standard Norms";
    statusColor = "emerald";
    interpretation = `Promoter skin-in-the-game (${validPercent}%) exceeds standard institutional requirements (25%), significantly boosting loan approval probability.`;
  } else if (validPercent >= 25) {
    status = "Meets Bank Norms (75:25)";
    statusColor = "blue";
    interpretation = `Promoter contribution aligns with the standard 75:25 debt-equity convention followed by commercial banks and SFCs.`;
  } else {
    status = "Margin Shortfall";
    statusColor = "amber";
    interpretation = `Promoter margin is below standard banking threshold (25%). May require CGTMSE, quasi-equity, or state capital subsidy support to bridge the margin gap.`;
  }

  return {
    totalProjectCost,
    promoterContributionPercent: validPercent,
    promoterContributionAmount,
    eligibleDebtAmount,
    debtEquityRatioString,
    surplusOrShortfall,
    status,
    statusColor,
    interpretation,
  };
}

// -----------------------------------------------------------------------------
// 7. LOAN REPAYMENT SCHEDULE CALCULATOR
// -----------------------------------------------------------------------------
export function calculateAmortizationSchedule(
  principal: number,
  annualInterestRatePercent: number,
  tenureYears: number
): AmortizationScheduleResult {
  const totalMonths = tenureYears * 12;
  const emiData = calculateEmi(principal, annualInterestRatePercent, totalMonths);
  const monthlyEmi = emiData.monthlyEmi;
  const monthlyRate = annualInterestRatePercent / 12 / 100;

  let currentBalance = principal;
  let totalInterestPaid = 0;

  const monthlyScheduleFirstYear: AmortizationScheduleRow[] = [];
  const yearlySchedule: AmortizationScheduleRow[] = [];

  for (let year = 1; year <= tenureYears; year++) {
    const yearOpening = currentBalance;
    let yearInterest = 0;
    let yearPrincipal = 0;

    for (let m = 1; m <= 12; m++) {
      if (currentBalance <= 0) break;
      const monthOpening = currentBalance;
      const interestForMonth = Math.round(currentBalance * monthlyRate);
      let principalForMonth = monthlyEmi - interestForMonth;

      if (currentBalance < principalForMonth || (year === tenureYears && m === 12)) {
        principalForMonth = currentBalance;
      }

      currentBalance = Math.max(0, currentBalance - principalForMonth);
      yearInterest += interestForMonth;
      yearPrincipal += principalForMonth;
      totalInterestPaid += interestForMonth;

      if (year === 1) {
        monthlyScheduleFirstYear.push({
          period: m,
          openingBalance: monthOpening,
          emi: principalForMonth + interestForMonth,
          principalPaid: principalForMonth,
          interestPaid: interestForMonth,
          closingBalance: currentBalance,
        });
      }
    }

    yearlySchedule.push({
      period: year,
      openingBalance: yearOpening,
      emi: yearPrincipal + yearInterest,
      principalPaid: yearPrincipal,
      interestPaid: yearInterest,
      closingBalance: currentBalance,
    });
  }

  return {
    monthlyEmi,
    totalInterestPaid,
    totalAmountPaid: principal + totalInterestPaid,
    yearlySchedule,
    monthlyScheduleFirstYear,
  };
}

// -----------------------------------------------------------------------------
// 8. DEBT-EQUITY RATIO CALCULATOR
// -----------------------------------------------------------------------------
export function calculateDebtEquity(
  totalDebt: number,
  tangibleNetWorth: number,
  totalOutsideLiabilities: number = totalDebt
): DebtEquityCalculationResult {
  if (tangibleNetWorth <= 0) {
    return {
      debtEquityRatio: 99.9,
      tolTnwRatio: 99.9,
      totalDebt,
      tangibleNetWorth,
      status: "Critical",
      statusColor: "red",
      interpretation: "Negative or zero tangible net worth indicates balance sheet distress. Ineligible for conventional credit.",
    };
  }

  const rawDer = totalDebt / tangibleNetWorth;
  const rawTolTnw = totalOutsideLiabilities / tangibleNetWorth;

  const debtEquityRatio = Math.round(rawDer * 100) / 100;
  const tolTnwRatio = Math.round(rawTolTnw * 100) / 100;

  let status: DebtEquityCalculationResult["status"] = "Acceptable / Standard";
  let statusColor = "blue";
  let interpretation = "";

  if (debtEquityRatio <= 1.5) {
    status = "Conservative / Strong";
    statusColor = "emerald";
    interpretation = "Conservative leverage (DER ≤ 1.5x). Substantial headroom to raise additional institutional debt.";
  } else if (debtEquityRatio <= 2.5) {
    status = "Acceptable / Standard";
    statusColor = "blue";
    interpretation = "Standard commercial gearing (1.5x to 2.5x). Well within typical bank covenants for manufacturing and trade.";
  } else if (debtEquityRatio <= 3.5) {
    status = "High Leverage";
    statusColor = "amber";
    interpretation = "Elevated leverage (2.5x to 3.5x). Banks may require subordinated promoter loans or additional collateral.";
  } else {
    status = "Critical";
    statusColor = "red";
    interpretation = "Overleveraged capital structure (> 3.5x). Credit committees usually mandate equity infusion before new sanctions.";
  }

  return {
    debtEquityRatio,
    tolTnwRatio,
    totalDebt,
    tangibleNetWorth,
    status,
    statusColor,
    interpretation,
  };
}

// -----------------------------------------------------------------------------
// 9. INTEREST COVERAGE RATIO (ICR) CALCULATOR
// -----------------------------------------------------------------------------
export function calculateInterestCoverage(
  ebit: number,
  annualInterestExpense: number
): InterestCoverageCalculationResult {
  if (annualInterestExpense <= 0) {
    return {
      icr: ebit > 0 ? 99.99 : 0,
      ebit,
      interestExpense: 0,
      status: "Comfortable",
      statusColor: "emerald",
      interpretation: "Zero interest expense. Debt servicing buffer is absolute.",
    };
  }

  const rawIcr = ebit / annualInterestExpense;
  const icr = Math.round(rawIcr * 100) / 100;

  let status: InterestCoverageCalculationResult["status"] = "Acceptable";
  let statusColor = "blue";
  let interpretation = "";

  if (icr >= 3.0) {
    status = "Comfortable";
    statusColor = "emerald";
    interpretation = "Strong operating profit cushion (ICR ≥ 3.0x). Operating earnings can absorb significant market shocks.";
  } else if (icr >= 2.0) {
    status = "Acceptable";
    statusColor = "blue";
    interpretation = "Adequate interest coverage (2.0x to 3.0x). Aligns with standard commercial bank underwriting thresholds.";
  } else if (icr >= 1.25) {
    status = "Stressed";
    statusColor = "amber";
    interpretation = "Tight interest coverage (1.25x to 2.0x). High vulnerability to interest rate increases or margin compression.";
  } else {
    status = "Insolvent";
    statusColor = "red";
    interpretation = "Insufficient operating earnings to cover interest expenses (ICR < 1.25x). Severe debt servicing risk.";
  }

  return {
    icr,
    ebit,
    interestExpense: annualInterestExpense,
    status,
    statusColor,
    interpretation,
  };
}

// -----------------------------------------------------------------------------
// 10. BASIC ROI & PAYBACK CALCULATOR
// -----------------------------------------------------------------------------
export function calculateRoi(
  totalInvestment: number,
  annualNetProfit: number,
  expectedLifespanYears: number = 5
): RoiCalculationResult {
  if (totalInvestment <= 0) {
    return {
      roiPercent: 0,
      annualizedRoiPercent: 0,
      paybackPeriodYears: 0,
      netProfitTotal: 0,
      status: "Sub-Par Return",
      statusColor: "red",
      interpretation: "Zero or negative initial investment specified.",
    };
  }

  const netProfitTotal = annualNetProfit * expectedLifespanYears;
  const roiPercent = Math.round(((netProfitTotal - totalInvestment) / totalInvestment) * 1000) / 10;
  const annualizedRoiPercent =
    expectedLifespanYears > 0
      ? Math.round((annualNetProfit / totalInvestment) * 1000) / 10
      : 0;

  const paybackPeriodYears =
    annualNetProfit > 0
      ? Math.round((totalInvestment / annualNetProfit) * 10) / 10
      : 99.9;

  let status: RoiCalculationResult["status"] = "Healthy Commercial Return";
  let statusColor = "blue";
  let interpretation = "";

  if (annualizedRoiPercent >= 25 || paybackPeriodYears <= 3) {
    status = "High Return";
    statusColor = "emerald";
    interpretation = `Excellent capital efficiency. Rapid payback within ${paybackPeriodYears} years provides strong commercial justification.`;
  } else if (annualizedRoiPercent >= 15 || paybackPeriodYears <= 6) {
    status = "Healthy Commercial Return";
    statusColor = "blue";
    interpretation = `Healthy commercial return aligned with institutional project finance norms (${paybackPeriodYears} years payback).`;
  } else {
    status = "Sub-Par Return";
    statusColor = "amber";
    interpretation = `Long capital payback (${paybackPeriodYears} years). Project may require capital subsidy or lower interest funding to be viable.`;
  }

  return {
    roiPercent,
    annualizedRoiPercent,
    paybackPeriodYears,
    netProfitTotal,
    status,
    statusColor,
    interpretation,
  };
}
