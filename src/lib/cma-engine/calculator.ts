/**
 * Indian Banking Financial Ratios & Working Capital (CMA) Calculation Engine
 * Grounded in RBI guidelines, Tandon Committee, and Nayak Committee recommendations.
 */

export interface MpbfInputs {
  projectedTurnoverInLakhs: number;
  totalCurrentAssetsInLakhs: number;
  otherCurrentLiabilitiesInLakhs: number; // excluding bank borrowing (e.g. sundry creditors, statutory dues)
}

export interface MpbfResult {
  workingCapitalGapInLakhs: number;
  method1: {
    minimumMarginInLakhs: number; // 25% of WCG
    maximumPermissibleBankFinance: number; // 75% of WCG
  };
  method2: {
    minimumMarginInLakhs: number; // 25% of Current Assets
    maximumPermissibleBankFinance: number; // 75% of CA - OCL
    projectedCurrentRatio: number; // CA / (OCL + MPBF)
  };
  turnoverMethodNayak: {
    totalRequirement: number; // 25% of Turnover
    promoterMargin: number; // 5% of Turnover
    bankFinance: number; // 20% of Turnover
  };
  recommendedBankFinanceInLakhs: number;
  remarks: string[];
}

export function calculateMpbf(inputs: MpbfInputs): MpbfResult {
  const { projectedTurnoverInLakhs, totalCurrentAssetsInLakhs, otherCurrentLiabilitiesInLakhs } = inputs;
  
  const wcg = Math.max(0, totalCurrentAssetsInLakhs - otherCurrentLiabilitiesInLakhs);
  
  // Method 1: 75% of WCG
  const m1Margin = wcg * 0.25;
  const m1Mpbf = Math.max(0, wcg * 0.75);

  // Method 2: 75% of CA minus OCL
  const m2Margin = totalCurrentAssetsInLakhs * 0.25;
  const m2Mpbf = Math.max(0, totalCurrentAssetsInLakhs * 0.75 - otherCurrentLiabilitiesInLakhs);
  
  const totalClWithM2 = otherCurrentLiabilitiesInLakhs + m2Mpbf;
  const m2CurrentRatio = totalClWithM2 > 0 ? totalCurrentAssetsInLakhs / totalClWithM2 : 1.33;

  // Nayak Committee Turnover Method
  const nayakTotal = projectedTurnoverInLakhs * 0.25;
  const nayakMargin = projectedTurnoverInLakhs * 0.05;
  const nayakMpbf = projectedTurnoverInLakhs * 0.20;

  const remarks: string[] = [];
  if (m2CurrentRatio < 1.33) {
    remarks.push("Method II Current Ratio is below standard benchmark 1.33. Margin enhancement recommended.");
  } else {
    remarks.push("Current Ratio under Method II satisfies standard Indian banking benchmark (>= 1.33).");
  }

  if (projectedTurnoverInLakhs <= 500) {
    remarks.push("Turnover is under ₹5 Cr; MSME Nayak Committee Turnover Method (20% of turnover) may be considered by lenders.");
  }

  return {
    workingCapitalGapInLakhs: Number(wcg.toFixed(2)),
    method1: {
      minimumMarginInLakhs: Number(m1Margin.toFixed(2)),
      maximumPermissibleBankFinance: Number(m1Mpbf.toFixed(2)),
    },
    method2: {
      minimumMarginInLakhs: Number(m2Margin.toFixed(2)),
      maximumPermissibleBankFinance: Number(m2Mpbf.toFixed(2)),
      projectedCurrentRatio: Number(m2CurrentRatio.toFixed(2)),
    },
    turnoverMethodNayak: {
      totalRequirement: Number(nayakTotal.toFixed(2)),
      promoterMargin: Number(nayakMargin.toFixed(2)),
      bankFinance: Number(nayakMpbf.toFixed(2)),
    },
    recommendedBankFinanceInLakhs: Number(m2Mpbf.toFixed(2)),
    remarks,
  };
}

export interface DscrInputs {
  patInLakhs: number; // Profit After Tax
  depreciationInLakhs: number;
  termLoanInterestInLakhs: number;
  principalRepaymentInLakhs: number;
}

export interface DscrResult {
  dscr: number;
  isCompliant: boolean;
  benchmark: string;
  category: "Weak" | "Acceptable" | "Strong" | "Excellent";
  observation: string;
}

export function calculateDscr(inputs: DscrInputs): DscrResult {
  const { patInLakhs, depreciationInLakhs, termLoanInterestInLakhs, principalRepaymentInLakhs } = inputs;
  
  const cashAccruals = patInLakhs + depreciationInLakhs + termLoanInterestInLakhs;
  const totalDebtObligation = termLoanInterestInLakhs + principalRepaymentInLakhs;

  if (totalDebtObligation <= 0) {
    return {
      dscr: 99.9,
      isCompliant: true,
      benchmark: ">= 1.50",
      category: "Excellent",
      observation: "No current debt obligations indicated.",
    };
  }

  const dscr = Number((cashAccruals / totalDebtObligation).toFixed(2));
  let category: DscrResult["category"] = "Acceptable";
  let observation = "";

  if (dscr < 1.20) {
    category = "Weak";
    observation = "DSCR is below acceptable lender thresholds (< 1.20). Higher promoter equity or tenure extension advised.";
  } else if (dscr < 1.50) {
    category = "Acceptable";
    observation = "DSCR is marginally bankable (1.20 - 1.49). Additional collateral or cash sweep covenants may be required by banks.";
  } else if (dscr <= 2.20) {
    category = "Strong";
    observation = "Healthy debt-service capacity (1.50 - 2.20). Fully aligned with standard commercial bank risk appetite.";
  } else {
    category = "Excellent";
    observation = "Exceptional debt coverage (> 2.20). High headroom for debt servicing.";
  }

  return {
    dscr,
    isCompliant: dscr >= 1.50,
    benchmark: ">= 1.50 (Standard Indian Banking Norm)",
    category,
    observation,
  };
}

export interface EmiInputs {
  loanAmountInLakhs: number;
  annualInterestRatePercent: number;
  tenureYears: number;
}

export interface EmiResult {
  monthlyEmi: number;
  totalInterestPayableInLakhs: number;
  totalAmountPayableInLakhs: number;
  annualSchedule: Array<{
    year: number;
    openingBalance: number;
    principalPaid: number;
    interestPaid: number;
    closingBalance: number;
  }>;
}

export function calculateEmi(inputs: EmiInputs): EmiResult {
  const principal = inputs.loanAmountInLakhs * 100000;
  const monthlyRate = inputs.annualInterestRatePercent / 12 / 100;
  const totalMonths = inputs.tenureYears * 12;

  let monthlyEmi = 0;
  if (monthlyRate === 0) {
    monthlyEmi = principal / totalMonths;
  } else {
    monthlyEmi =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1);
  }

  const totalAmountPayable = monthlyEmi * totalMonths;
  const totalInterestPayable = totalAmountPayable - principal;

  // Annual schedule
  let balance = principal;
  const annualSchedule = [];

  for (let year = 1; year <= inputs.tenureYears; year++) {
    let yearlyPrincipal = 0;
    let yearlyInterest = 0;
    const openingBalance = balance;

    for (let m = 0; m < 12; m++) {
      const interest = balance * monthlyRate;
      const principalPart = monthlyEmi - interest;
      yearlyInterest += interest;
      yearlyPrincipal += principalPart;
      balance = Math.max(0, balance - principalPart);
    }

    annualSchedule.push({
      year,
      openingBalance: Number((openingBalance / 100000).toFixed(2)),
      principalPaid: Number((yearlyPrincipal / 100000).toFixed(2)),
      interestPaid: Number((yearlyInterest / 100000).toFixed(2)),
      closingBalance: Number((balance / 100000).toFixed(2)),
    });
  }

  return {
    monthlyEmi: Math.round(monthlyEmi),
    totalInterestPayableInLakhs: Number((totalInterestPayable / 100000).toFixed(2)),
    totalAmountPayableInLakhs: Number((totalAmountPayable / 100000).toFixed(2)),
    annualSchedule,
  };
}
