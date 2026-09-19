"use client";

import React, { useState } from "react";
import Link from "next/link";
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
} from "@/lib/calculators/calculations";
import {
  LightweightDonutChart,
  LightweightProgressBar,
} from "@/components/calculators/LightweightCharts";
import { RegulatoryDisclaimerBanner } from "@/components/brand/RegulatoryDisclaimerBanner";
import {
  Calculator,
  TrendingUp,
  Percent,
  Calendar,
  Layers,
  Scale,
  ShieldCheck,
  Building,
  RotateCcw,
  Save,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ArrowRight,
  Sparkles,
  DollarSign,
  FileSpreadsheet,
  PieChart,
  Activity,
  BookmarkCheck,
} from "lucide-react";

export default function ToolsPage() {
  const [activeTab, setActiveTab] = useState<string>("emi");
  const [savedStatus, setSavedStatus] = useState<string | null>(null);

  // 1. EMI State
  const [emiPrincipal, setEmiPrincipal] = useState<number>(5000000); // 50 Lakhs
  const [emiRate, setEmiRate] = useState<number>(9.75); // 9.75%
  const [emiTenureYears, setEmiTenureYears] = useState<number>(7); // 7 years

  // 2. DSCR State
  const [dscrPat, setDscrPat] = useState<number>(2400000); // 24 Lakhs
  const [dscrDepreciation, setDscrDepreciation] = useState<number>(1200000); // 12 Lakhs
  const [dscrInterest, setDscrInterest] = useState<number>(800000); // 8 Lakhs
  const [dscrPrincipal, setDscrPrincipal] = useState<number>(1400000); // 14 Lakhs

  // 3. Break-Even State
  const [beFixedCosts, setBeFixedCosts] = useState<number>(1500000); // 15 Lakhs
  const [beVarCost, setBeVarCost] = useState<number>(65); // ₹65 per unit
  const [beSellingPrice, setBeSellingPrice] = useState<number>(100); // ₹100 per unit
  const [beCurrentUnits, setBeCurrentUnits] = useState<number>(60000); // 60k units

  // 4. Working Capital State
  const [wcTurnover, setWcTurnover] = useState<number>(40000000); // 4 Cr
  const [wcCostOfSales, setWcCostOfSales] = useState<number>(32000000); // 3.2 Cr
  const [wcInventoryDays, setWcInventoryDays] = useState<number>(45);
  const [wcDebtorDays, setWcDebtorDays] = useState<number>(60);
  const [wcCreditorDays, setWcCreditorDays] = useState<number>(30);

  // 5. Project Cost State
  const [pcLand, setPcLand] = useState<number>(5000000); // 50 Lakhs
  const [pcCivil, setPcCivil] = useState<number>(12000000); // 1.2 Cr
  const [pcMachinery, setPcMachinery] = useState<number>(20000000); // 2 Cr
  const [pcPreOp, setPcPreOp] = useState<number>(1500000); // 15 Lakhs
  const [pcContingencyPercent, setPcContingencyPercent] = useState<number>(5); // 5%
  const [pcMarginWc, setPcMarginWc] = useState<number>(2500000); // 25 Lakhs

  // 6. Promoter Contribution State
  const [promTotalCost, setPromTotalCost] = useState<number>(40000000); // 4 Cr
  const [promMarginPercent, setPromMarginPercent] = useState<number>(25); // 25%
  const [promExistingFunds, setPromExistingFunds] = useState<number>(12000000); // 1.2 Cr

  // 7. Amortization Schedule State
  const [amortPrincipal, setAmortPrincipal] = useState<number>(2500000); // 25 Lakhs
  const [amortRate, setAmortRate] = useState<number>(10.5); // 10.5%
  const [amortTenure, setAmortTenure] = useState<number>(5); // 5 years

  // 8. Debt Equity State
  const [deTotalDebt, setDeTotalDebt] = useState<number>(18000000); // 1.8 Cr
  const [deNetWorth, setDeNetWorth] = useState<number>(10000000); // 1 Cr
  const [deTotalLiab, setDeTotalLiab] = useState<number>(22000000); // 2.2 Cr

  // 9. Interest Coverage State
  const [icrEbit, setIcrEbit] = useState<number>(4500000); // 45 Lakhs
  const [icrInterest, setIcrInterest] = useState<number>(1500000); // 15 Lakhs

  // 10. ROI State
  const [roiInvestment, setRoiInvestment] = useState<number>(10000000); // 1 Cr
  const [roiAnnualProfit, setRoiAnnualProfit] = useState<number>(2200000); // 22 Lakhs
  const [roiLifespan, setRoiLifespan] = useState<number>(5); // 5 years

  // Calculation Results
  const emiResult = calculateEmi(emiPrincipal, emiRate, emiTenureYears * 12);
  const dscrResult = calculateDscr(dscrPat, dscrDepreciation, dscrInterest, dscrPrincipal);
  const beResult = calculateBreakEven(beFixedCosts, beVarCost, beSellingPrice, beCurrentUnits);
  const wcResult = calculateWorkingCapital(wcTurnover, wcCostOfSales, wcInventoryDays, wcDebtorDays, wcCreditorDays);
  const pcResult = calculateProjectCost(pcLand, pcCivil, pcMachinery, pcPreOp, pcContingencyPercent, pcMarginWc);
  const promResult = calculatePromoterContribution(promTotalCost, promMarginPercent, promExistingFunds);
  const amortResult = calculateAmortizationSchedule(amortPrincipal, amortRate, amortTenure);
  const deResult = calculateDebtEquity(deTotalDebt, deNetWorth, deTotalLiab);
  const icrResult = calculateInterestCoverage(icrEbit, icrInterest);
  const roiResult = calculateRoi(roiInvestment, roiAnnualProfit, roiLifespan);

  const handleSaveCalculation = (toolName: string) => {
    setSavedStatus(`Calculation for ${toolName} saved to your session.`);
    setTimeout(() => setSavedStatus(null), 3500);
  };

  const toolsList = [
    { id: "emi", name: "EMI Calculator", icon: Calculator, category: "Credit Facilities" },
    { id: "dscr", name: "DSCR Calculator", icon: TrendingUp, category: "Bank Appraisal" },
    { id: "break-even", name: "Break-even Calculator", icon: Scale, category: "Feasibility" },
    { id: "working-capital", name: "Working Capital Estimator", icon: Activity, category: "CMA & Liquidity" },
    { id: "project-cost", name: "Project Cost Planner", icon: Building, category: "DPR Formulation" },
    { id: "promoter-contrib", name: "Promoter Contribution", icon: Percent, category: "Capital Structure" },
    { id: "amortization", name: "Loan Repayment Schedule", icon: Calendar, category: "Credit Facilities" },
    { id: "debt-equity", name: "Debt Equity Ratio", icon: Layers, category: "Balance Sheet" },
    { id: "interest-coverage", name: "Interest Coverage (ICR)", icon: ShieldCheck, category: "Bank Appraisal" },
    { id: "roi", name: "Basic ROI Calculator", icon: Sparkles, category: "Feasibility" },
  ];

  return (
    <div className="bg-warm min-h-screen py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* =========================================================================
            HEADER
        ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1 text-xs font-semibold text-gold-dark">
            <Calculator className="h-3.5 w-3.5 text-gold-dark" />
            <span>Interactive Financial Workbench</span>
          </div>

          <h1 className="text-3xl font-serif font-bold text-navy-dark sm:text-5xl tracking-tight">
            VS Financial Intelligence Tools
          </h1>

          <p className="text-sm sm:text-base text-navy-700 leading-relaxed">
            Standardized mathematical calculators reflecting Indian banking appraisal conventions, Tandon/Nayak working capital norms, and project finance underwriting standards.
          </p>

          {/* Non-Regulated Financial Advice Notice */}
          <div className="mx-auto max-w-2xl rounded-2xl border border-amber-200/80 bg-amber-50/80 p-3.5 text-xs text-amber-900 flex items-start gap-2.5 text-left">
            <AlertCircle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong>Regulatory Notice:</strong> These calculators are intended solely for illustrative financial modeling and educational planning. They do not constitute regulated financial, legal, or investment advice and do not represent a loan sanction or interest rate commitment.
            </div>
          </div>
        </div>

        {/* =========================================================================
            CALCULATOR NAVIGATION TABS
        ========================================================================= */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {toolsList.map((tool) => {
            const Icon = tool.icon;
            const isActive = activeTab === tool.id;
            return (
              <button
                key={tool.id}
                onClick={() => setActiveTab(tool.id)}
                className={`shrink-0 inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all ${
                  isActive
                    ? "bg-navy text-white shadow-md shadow-navy/20"
                    : "border border-navy-200 bg-white text-navy-700 hover:border-gold hover:text-navy-dark"
                }`}
              >
                <Icon className={`h-4 w-4 ${isActive ? "text-gold" : "text-navy-500"}`} />
                <span>{tool.name}</span>
              </button>
            );
          })}
        </div>

        {/* Notification Banner */}
        {savedStatus && (
          <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-3 text-xs text-emerald-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BookmarkCheck className="h-4 w-4 text-emerald-600" />
              <span>{savedStatus}</span>
            </div>
            <span className="text-[10px] text-emerald-600 font-semibold">Session Cached</span>
          </div>
        )}

        {/* =========================================================================
            CALCULATOR VIEW PANELS
        ========================================================================= */}

        {/* 1. EMI CALCULATOR */}
        {activeTab === "emi" && (
          <div className="rounded-3xl border border-navy-100 bg-white p-6 sm:p-10 shadow-institutional space-y-8">
            <div className="flex items-start justify-between flex-wrap gap-4 border-b border-navy-100 pb-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-dark">
                  Credit Facility Sizing
                </span>
                <h2 className="text-2xl font-serif font-bold text-navy-dark">
                  Equated Monthly Installment (EMI) Calculator
                </h2>
                <p className="text-xs sm:text-sm text-navy-600">
                  Compute monthly debt repayment obligations based on user-entered principal and loan tenure.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setEmiPrincipal(5000000);
                    setEmiRate(9.75);
                    setEmiTenureYears(7);
                  }}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-navy-200 bg-warm px-3.5 py-2 text-xs font-bold text-navy-700 hover:bg-navy-50"
                >
                  <RotateCcw className="h-3 w-3" />
                  <span>Reset Defaults</span>
                </button>
                <button
                  onClick={() => handleSaveCalculation("EMI Calculator")}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-navy px-4 py-2 text-xs font-bold text-white hover:bg-navy-light"
                >
                  <Save className="h-3 w-3" />
                  <span>Save Calculation</span>
                </button>
              </div>
            </div>

            {/* Formula Box */}
            <div className="rounded-2xl bg-warm-50 p-4 border border-navy-100 text-xs text-navy-800 space-y-1">
              <div className="font-bold text-navy-900 flex items-center gap-1.5">
                <FileSpreadsheet className="h-4 w-4 text-gold-dark" />
                <span>Standard Reducing Balance EMI Formula:</span>
              </div>
              <div className="font-mono bg-white p-2.5 rounded-xl border border-navy-100 text-navy-dark text-xs sm:text-sm">
                EMI = P × r × (1 + r)^n / [ (1 + r)^n - 1 ]
              </div>
              <div className="text-[11px] text-navy-500">
                Where P = Principal Loan Amount, r = Monthly Interest Rate (Annual Rate / 12 / 100), n = Tenure in Months.
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Inputs */}
              <div className="lg:col-span-6 space-y-5">
                <div>
                  <div className="flex justify-between text-xs font-bold text-navy-900 mb-1.5">
                    <span>Loan Principal Amount</span>
                    <span className="text-navy">₹{emiPrincipal.toLocaleString()} ({Math.round((emiPrincipal / 100000) * 10) / 10} Lakhs)</span>
                  </div>
                  <input
                    type="number"
                    min={10000}
                    step={50000}
                    value={emiPrincipal}
                    onChange={(e) => setEmiPrincipal(Math.max(0, Number(e.target.value)))}
                    className="w-full rounded-xl border border-navy-200 px-4 py-2.5 text-sm text-navy-dark focus:border-gold focus:outline-none"
                  />
                  <input
                    type="range"
                    min={100000}
                    max={50000000}
                    step={100000}
                    value={emiPrincipal}
                    onChange={(e) => setEmiPrincipal(Number(e.target.value))}
                    className="w-full accent-navy mt-2 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-navy-900 mb-1.5">
                    <span>Annual Interest Rate (%) — User-Entered</span>
                    <span className="text-navy">{emiRate}% p.a.</span>
                  </div>
                  <input
                    type="number"
                    min={1}
                    max={30}
                    step={0.25}
                    value={emiRate}
                    onChange={(e) => setEmiRate(Math.max(0, Number(e.target.value)))}
                    className="w-full rounded-xl border border-navy-200 px-4 py-2.5 text-sm text-navy-dark focus:border-gold focus:outline-none"
                  />
                  <input
                    type="range"
                    min={5}
                    max={20}
                    step={0.1}
                    value={emiRate}
                    onChange={(e) => setEmiRate(Number(e.target.value))}
                    className="w-full accent-navy mt-2 cursor-pointer"
                  />
                  <span className="text-[10px] text-navy-400 italic">Enter the indicative rate agreed with your lender. VS does not fabricate rates.</span>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-navy-900 mb-1.5">
                    <span>Loan Tenure (Years)</span>
                    <span className="text-navy">{emiTenureYears} Years ({emiTenureYears * 12} Months)</span>
                  </div>
                  <input
                    type="number"
                    min={1}
                    max={30}
                    value={emiTenureYears}
                    onChange={(e) => setEmiTenureYears(Math.max(1, Number(e.target.value)))}
                    className="w-full rounded-xl border border-navy-200 px-4 py-2.5 text-sm text-navy-dark focus:border-gold focus:outline-none"
                  />
                  <input
                    type="range"
                    min={1}
                    max={20}
                    step={1}
                    value={emiTenureYears}
                    onChange={(e) => setEmiTenureYears(Number(e.target.value))}
                    className="w-full accent-navy mt-2 cursor-pointer"
                  />
                </div>
              </div>

              {/* Results & Visual Chart */}
              <div className="lg:col-span-6 rounded-2xl border border-navy-100 bg-warm-50/50 p-6 space-y-6">
                <div className="space-y-2 text-center pb-4 border-b border-navy-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-navy-500">
                    Monthly Repayment Commitment
                  </span>
                  <div className="text-4xl sm:text-5xl font-serif font-extrabold text-navy">
                    ₹{emiResult.monthlyEmi.toLocaleString()}
                  </div>
                  <div className="text-xs text-navy-500 font-medium">Per Month for {emiTenureYears * 12} Months</div>
                </div>

                {/* Donut Visualization */}
                <LightweightDonutChart
                  data={[
                    { label: "Principal", value: emiResult.totalPrincipal, color: "#062B49" },
                    { label: "Total Interest", value: emiResult.totalInterest, color: "#C7952D" },
                  ]}
                  centerText={`₹${Math.round(emiResult.totalPayment / 100000)}L`}
                  centerSubtext="Total Outflow"
                />

                {/* Breakdown Details */}
                <div className="space-y-2 pt-2 border-t border-navy-100 text-xs">
                  <div className="flex justify-between text-navy-700">
                    <span>Principal Amount:</span>
                    <span className="font-bold text-navy-dark">₹{emiResult.totalPrincipal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-navy-700">
                    <span>Total Interest Payable:</span>
                    <span className="font-bold text-gold-dark">₹{emiResult.totalInterest.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-navy-700">
                    <span>Total Cost of Loan:</span>
                    <span className="font-bold text-navy-dark">₹{emiResult.totalPayment.toLocaleString()}</span>
                  </div>
                </div>

                {/* Underwriter Interpretation */}
                <div className="rounded-xl bg-white p-4 border border-navy-100 text-xs text-navy-700 space-y-1">
                  <div className="font-bold text-navy-900 flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-gold-dark" />
                    <span>Bank Underwriting Perspective:</span>
                  </div>
                  <p className="leading-relaxed">
                    Lenders verify that this monthly EMI of <strong>₹{emiResult.monthlyEmi.toLocaleString()}</strong> does not exceed 40–50% of your projected average monthly Free Cash Flow (PAT + Depreciation).
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. DSCR CALCULATOR */}
        {activeTab === "dscr" && (
          <div className="rounded-3xl border border-navy-100 bg-white p-6 sm:p-10 shadow-institutional space-y-8">
            <div className="flex items-start justify-between flex-wrap gap-4 border-b border-navy-100 pb-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-dark">
                  Institutional Bankability Metric
                </span>
                <h2 className="text-2xl font-serif font-bold text-navy-dark">
                  Debt Service Coverage Ratio (DSCR) Calculator
                </h2>
                <p className="text-xs sm:text-sm text-navy-600">
                  Assess how many times your operating cash flows cover your annual principal and interest service.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setDscrPat(2400000);
                    setDscrDepreciation(1200000);
                    setDscrInterest(800000);
                    setDscrPrincipal(1400000);
                  }}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-navy-200 bg-warm px-3.5 py-2 text-xs font-bold text-navy-700 hover:bg-navy-50"
                >
                  <RotateCcw className="h-3 w-3" />
                  <span>Reset Defaults</span>
                </button>
                <button
                  onClick={() => handleSaveCalculation("DSCR Calculator")}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-navy px-4 py-2 text-xs font-bold text-white hover:bg-navy-light"
                >
                  <Save className="h-3 w-3" />
                  <span>Save Calculation</span>
                </button>
              </div>
            </div>

            {/* Formula Box */}
            <div className="rounded-2xl bg-warm-50 p-4 border border-navy-100 text-xs text-navy-800 space-y-1">
              <div className="font-bold text-navy-900 flex items-center gap-1.5">
                <FileSpreadsheet className="h-4 w-4 text-gold-dark" />
                <span>IBA Standard DSCR Formula:</span>
              </div>
              <div className="font-mono bg-white p-2.5 rounded-xl border border-navy-100 text-navy-dark text-xs sm:text-sm">
                DSCR = (PAT + Depreciation + Term Loan Interest) / (Term Loan Interest + Principal Repayments)
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Inputs */}
              <div className="lg:col-span-6 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-navy-900 mb-1">
                    Projected Annual Profit After Tax (PAT in ₹)
                  </label>
                  <input
                    type="number"
                    value={dscrPat}
                    onChange={(e) => setDscrPat(Number(e.target.value))}
                    className="w-full rounded-xl border border-navy-200 px-4 py-2.5 text-sm text-navy-dark focus:border-gold focus:outline-none"
                  />
                  <span className="text-[10px] text-navy-500">₹{(dscrPat / 100000).toFixed(2)} Lakhs</span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy-900 mb-1">
                    Annual Non-Cash Depreciation & Amortization (₹)
                  </label>
                  <input
                    type="number"
                    value={dscrDepreciation}
                    onChange={(e) => setDscrDepreciation(Number(e.target.value))}
                    className="w-full rounded-xl border border-navy-200 px-4 py-2.5 text-sm text-navy-dark focus:border-gold focus:outline-none"
                  />
                  <span className="text-[10px] text-navy-500">₹{(dscrDepreciation / 100000).toFixed(2)} Lakhs</span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy-900 mb-1">
                    Annual Term Loan Interest Expense (₹)
                  </label>
                  <input
                    type="number"
                    value={dscrInterest}
                    onChange={(e) => setDscrInterest(Number(e.target.value))}
                    className="w-full rounded-xl border border-navy-200 px-4 py-2.5 text-sm text-navy-dark focus:border-gold focus:outline-none"
                  />
                  <span className="text-[10px] text-navy-500">₹{(dscrInterest / 100000).toFixed(2)} Lakhs</span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy-900 mb-1">
                    Annual Term Loan Principal Repayment (₹)
                  </label>
                  <input
                    type="number"
                    value={dscrPrincipal}
                    onChange={(e) => setDscrPrincipal(Number(e.target.value))}
                    className="w-full rounded-xl border border-navy-200 px-4 py-2.5 text-sm text-navy-dark focus:border-gold focus:outline-none"
                  />
                  <span className="text-[10px] text-navy-500">₹{(dscrPrincipal / 100000).toFixed(2)} Lakhs</span>
                </div>
              </div>

              {/* Results */}
              <div className="lg:col-span-6 rounded-2xl border border-navy-100 bg-warm-50/50 p-6 space-y-6">
                <div className="text-center space-y-2 pb-4 border-b border-navy-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-navy-500">
                    Debt Service Coverage Ratio
                  </span>
                  <div className="text-5xl font-serif font-extrabold text-navy">
                    {dscrResult.dscr}x
                  </div>
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${
                      dscrResult.statusColor === "emerald"
                        ? "bg-emerald-100 text-emerald-800"
                        : dscrResult.statusColor === "blue"
                        ? "bg-blue-100 text-navy-800"
                        : dscrResult.statusColor === "amber"
                        ? "bg-amber-100 text-amber-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {dscrResult.status}
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex justify-between">
                    <span className="text-navy-600">Total Cash Available for Debt Service:</span>
                    <span className="font-bold text-navy-dark">₹{dscrResult.totalCashAvailable.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-navy-600">Total Annual Debt Service Obligations:</span>
                    <span className="font-bold text-navy-dark">₹{dscrResult.totalDebtService.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-navy-600">Net Surplus After Debt Service:</span>
                    <span className="font-bold text-emerald-700">
                      ₹{Math.max(0, dscrResult.totalCashAvailable - dscrResult.totalDebtService).toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="rounded-xl bg-white p-4 border border-navy-100 text-xs text-navy-700 space-y-1">
                  <div className="font-bold text-navy-900">Underwriting Assessment:</div>
                  <p className="leading-relaxed">{dscrResult.interpretation}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3. BREAK-EVEN CALCULATOR */}
        {activeTab === "break-even" && (
          <div className="rounded-3xl border border-navy-100 bg-white p-6 sm:p-10 shadow-institutional space-y-8">
            <div className="flex items-start justify-between flex-wrap gap-4 border-b border-navy-100 pb-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-dark">
                  Feasibility & Risk Threshold
                </span>
                <h2 className="text-2xl font-serif font-bold text-navy-dark">
                  Break-even & Margin of Safety Calculator
                </h2>
                <p className="text-xs sm:text-sm text-navy-600">
                  Calculate the exact sales volume and revenue required to cover all fixed overheads without loss.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setBeFixedCosts(1500000);
                    setBeVarCost(65);
                    setBeSellingPrice(100);
                    setBeCurrentUnits(60000);
                  }}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-navy-200 bg-warm px-3.5 py-2 text-xs font-bold text-navy-700 hover:bg-navy-50"
                >
                  <RotateCcw className="h-3 w-3" />
                  <span>Reset Defaults</span>
                </button>
                <button
                  onClick={() => handleSaveCalculation("Break-even Calculator")}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-navy px-4 py-2 text-xs font-bold text-white hover:bg-navy-light"
                >
                  <Save className="h-3 w-3" />
                  <span>Save Calculation</span>
                </button>
              </div>
            </div>

            {/* Formula Box */}
            <div className="rounded-2xl bg-warm-50 p-4 border border-navy-100 text-xs text-navy-800 space-y-1">
              <div className="font-bold text-navy-900 flex items-center gap-1.5">
                <FileSpreadsheet className="h-4 w-4 text-gold-dark" />
                <span>Cost-Volume-Profit Formula:</span>
              </div>
              <div className="font-mono bg-white p-2.5 rounded-xl border border-navy-100 text-navy-dark text-xs sm:text-sm">
                Break-even Units = Total Fixed Costs / (Selling Price per Unit - Variable Cost per Unit)
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-6 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-navy-900 mb-1">Total Fixed Costs (Annual in ₹)</label>
                  <input
                    type="number"
                    value={beFixedCosts}
                    onChange={(e) => setBeFixedCosts(Number(e.target.value))}
                    className="w-full rounded-xl border border-navy-200 px-4 py-2.5 text-sm text-navy-dark focus:border-gold focus:outline-none"
                  />
                  <span className="text-[10px] text-navy-500">Rent, permanent salaries, depreciation, term loan interest</span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy-900 mb-1">Variable Cost per Unit (₹)</label>
                  <input
                    type="number"
                    value={beVarCost}
                    onChange={(e) => setBeVarCost(Number(e.target.value))}
                    className="w-full rounded-xl border border-navy-200 px-4 py-2.5 text-sm text-navy-dark focus:border-gold focus:outline-none"
                  />
                  <span className="text-[10px] text-navy-500">Raw materials, direct labour, packaging, transport</span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy-900 mb-1">Selling Price per Unit (₹)</label>
                  <input
                    type="number"
                    value={beSellingPrice}
                    onChange={(e) => setBeSellingPrice(Number(e.target.value))}
                    className="w-full rounded-xl border border-navy-200 px-4 py-2.5 text-sm text-navy-dark focus:border-gold focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy-900 mb-1">Current / Projected Annual Units Sold</label>
                  <input
                    type="number"
                    value={beCurrentUnits}
                    onChange={(e) => setBeCurrentUnits(Number(e.target.value))}
                    className="w-full rounded-xl border border-navy-200 px-4 py-2.5 text-sm text-navy-dark focus:border-gold focus:outline-none"
                  />
                </div>
              </div>

              <div className="lg:col-span-6 rounded-2xl border border-navy-100 bg-warm-50/50 p-6 space-y-6">
                <div className="grid grid-cols-2 gap-4 text-center pb-4 border-b border-navy-100">
                  <div>
                    <div className="text-2xl sm:text-3xl font-serif font-extrabold text-navy">
                      {beResult.breakEvenUnits.toLocaleString()}
                    </div>
                    <div className="text-[11px] font-semibold text-navy-500 uppercase">Break-even Units</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-serif font-extrabold text-gold-dark">
                      ₹{(beResult.breakEvenRevenue / 100000).toFixed(2)}L
                    </div>
                    <div className="text-[11px] font-semibold text-navy-500 uppercase">Break-even Revenue</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <LightweightProgressBar
                    label="Margin of Safety (%)"
                    value={beResult.marginOfSafetyPercent}
                    maxValue={100}
                    displayValue={`${beResult.marginOfSafetyPercent}%`}
                    color={beResult.marginOfSafetyPercent >= 25 ? "bg-emerald-600" : "bg-amber-500"}
                    sublabel="Buffer between current sales and the zero-profit point"
                  />
                </div>

                <div className="space-y-2 text-xs border-t border-navy-100 pt-3 text-navy-700">
                  <div className="flex justify-between">
                    <span>Contribution Margin per Unit:</span>
                    <span className="font-bold text-navy-dark">₹{beResult.contributionMarginPerUnit}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Contribution Margin Ratio:</span>
                    <span className="font-bold text-navy-dark">{beResult.contributionMarginRatio}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Projected Total Revenue:</span>
                    <span className="font-bold text-navy-dark">₹{beResult.currentRevenue.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 4. WORKING CAPITAL ESTIMATOR */}
        {activeTab === "working-capital" && (
          <div className="rounded-3xl border border-navy-100 bg-white p-6 sm:p-10 shadow-institutional space-y-8">
            <div className="flex items-start justify-between flex-wrap gap-4 border-b border-navy-100 pb-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-dark">
                  CMA & Liquidity Structuring
                </span>
                <h2 className="text-2xl font-serif font-bold text-navy-dark">
                  Working Capital & MPBF Estimator
                </h2>
                <p className="text-xs sm:text-sm text-navy-600">
                  Estimate Maximum Permissible Bank Finance (MPBF) under Nayak Committee & Tandon Method II norms.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setWcTurnover(40000000);
                    setWcCostOfSales(32000000);
                    setWcInventoryDays(45);
                    setWcDebtorDays(60);
                    setWcCreditorDays(30);
                  }}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-navy-200 bg-warm px-3.5 py-2 text-xs font-bold text-navy-700 hover:bg-navy-50"
                >
                  <RotateCcw className="h-3 w-3" />
                  <span>Reset Defaults</span>
                </button>
                <button
                  onClick={() => handleSaveCalculation("Working Capital Estimator")}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-navy px-4 py-2 text-xs font-bold text-white hover:bg-navy-light"
                >
                  <Save className="h-3 w-3" />
                  <span>Save Calculation</span>
                </button>
              </div>
            </div>

            {/* Formula Box */}
            <div className="rounded-2xl bg-warm-50 p-4 border border-navy-100 text-xs text-navy-800 space-y-1">
              <div className="font-bold text-navy-900 flex items-center gap-1.5">
                <FileSpreadsheet className="h-4 w-4 text-gold-dark" />
                <span>Operating Cycle & MPBF Norms:</span>
              </div>
              <div className="font-mono bg-white p-2.5 rounded-xl border border-navy-100 text-navy-dark text-xs sm:text-sm">
                Operating Cycle (Days) = Inventory Days + Debtor Days - Creditor Days
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-6 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-navy-900 mb-1">Annual Projected Turnover (₹)</label>
                  <input
                    type="number"
                    value={wcTurnover}
                    onChange={(e) => setWcTurnover(Number(e.target.value))}
                    className="w-full rounded-xl border border-navy-200 px-4 py-2.5 text-sm text-navy-dark focus:border-gold focus:outline-none"
                  />
                  <span className="text-[10px] text-navy-500">₹{(wcTurnover / 10000000).toFixed(2)} Crores</span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy-900 mb-1">Annual Cost of Goods Sold (₹)</label>
                  <input
                    type="number"
                    value={wcCostOfSales}
                    onChange={(e) => setWcCostOfSales(Number(e.target.value))}
                    className="w-full rounded-xl border border-navy-200 px-4 py-2.5 text-sm text-navy-dark focus:border-gold focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-navy-900 mb-1">Inventory (Days)</label>
                    <input
                      type="number"
                      value={wcInventoryDays}
                      onChange={(e) => setWcInventoryDays(Number(e.target.value))}
                      className="w-full rounded-xl border border-navy-200 px-3 py-2 text-xs text-navy-dark focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-navy-900 mb-1">Debtors (Days)</label>
                    <input
                      type="number"
                      value={wcDebtorDays}
                      onChange={(e) => setWcDebtorDays(Number(e.target.value))}
                      className="w-full rounded-xl border border-navy-200 px-3 py-2 text-xs text-navy-dark focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-navy-900 mb-1">Creditors (Days)</label>
                    <input
                      type="number"
                      value={wcCreditorDays}
                      onChange={(e) => setWcCreditorDays(Number(e.target.value))}
                      className="w-full rounded-xl border border-navy-200 px-3 py-2 text-xs text-navy-dark focus:border-gold"
                    />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 rounded-2xl border border-navy-100 bg-warm-50/50 p-6 space-y-6">
                <div className="text-center space-y-2 pb-4 border-b border-navy-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-navy-500">
                    Calculated Operating Cycle
                  </span>
                  <div className="text-4xl sm:text-5xl font-serif font-extrabold text-navy">
                    {wcResult.operatingCycleDays} Days
                  </div>
                  <p className="text-xs text-navy-600 max-w-sm mx-auto">{wcResult.interpretation}</p>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex justify-between">
                    <span className="text-navy-600">Nayak Committee MPBF (20% Turnover):</span>
                    <span className="font-bold text-navy-dark">₹{wcResult.nayakTurnoverMpbf.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-navy-600">Tandon Method II Limit (75% Gap):</span>
                    <span className="font-bold text-navy-dark">₹{wcResult.tandonMethodIIMpbf.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-navy-100">
                    <span className="font-bold text-navy-900">Recommended CC Facility Range:</span>
                    <span className="font-extrabold text-gold-dark text-sm">
                      ₹{(wcResult.recommendedLimit / 100000).toFixed(2)} Lakhs
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 5. PROJECT COST PLANNER */}
        {activeTab === "project-cost" && (
          <div className="rounded-3xl border border-navy-100 bg-white p-6 sm:p-10 shadow-institutional space-y-8">
            <div className="flex items-start justify-between flex-wrap gap-4 border-b border-navy-100 pb-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-dark">
                  DPR Formulation
                </span>
                <h2 className="text-2xl font-serif font-bold text-navy-dark">
                  Project Cost Planner & Capex Breakdown
                </h2>
                <p className="text-xs sm:text-sm text-navy-600">
                  Aggregate hard capex, contingencies, pre-operative costs, and working capital margin for institutional DPR submission.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setPcLand(5000000);
                    setPcCivil(12000000);
                    setPcMachinery(20000000);
                    setPcPreOp(1500000);
                    setPcContingencyPercent(5);
                    setPcMarginWc(2500000);
                  }}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-navy-200 bg-warm px-3.5 py-2 text-xs font-bold text-navy-700 hover:bg-navy-50"
                >
                  <RotateCcw className="h-3 w-3" />
                  <span>Reset Defaults</span>
                </button>
                <button
                  onClick={() => handleSaveCalculation("Project Cost Planner")}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-navy px-4 py-2 text-xs font-bold text-white hover:bg-navy-light"
                >
                  <Save className="h-3 w-3" />
                  <span>Save Calculation</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-6 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-navy-900 mb-1">Land & Site Development (₹)</label>
                  <input
                    type="number"
                    value={pcLand}
                    onChange={(e) => setPcLand(Number(e.target.value))}
                    className="w-full rounded-xl border border-navy-200 px-4 py-2.5 text-sm text-navy-dark focus:border-gold focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy-900 mb-1">Civil Works & Factory Building (₹)</label>
                  <input
                    type="number"
                    value={pcCivil}
                    onChange={(e) => setPcCivil(Number(e.target.value))}
                    className="w-full rounded-xl border border-navy-200 px-4 py-2.5 text-sm text-navy-dark focus:border-gold focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy-900 mb-1">Plant & Machinery / Equipment (₹)</label>
                  <input
                    type="number"
                    value={pcMachinery}
                    onChange={(e) => setPcMachinery(Number(e.target.value))}
                    className="w-full rounded-xl border border-navy-200 px-4 py-2.5 text-sm text-navy-dark focus:border-gold focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-navy-900 mb-1">Pre-Operative & IDC (₹)</label>
                    <input
                      type="number"
                      value={pcPreOp}
                      onChange={(e) => setPcPreOp(Number(e.target.value))}
                      className="w-full rounded-xl border border-navy-200 px-3 py-2 text-xs text-navy-dark focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-navy-900 mb-1">Contingency (%)</label>
                    <input
                      type="number"
                      value={pcContingencyPercent}
                      onChange={(e) => setPcContingencyPercent(Number(e.target.value))}
                      className="w-full rounded-xl border border-navy-200 px-3 py-2 text-xs text-navy-dark focus:border-gold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy-900 mb-1">Margin Money for Working Capital (₹)</label>
                  <input
                    type="number"
                    value={pcMarginWc}
                    onChange={(e) => setPcMarginWc(Number(e.target.value))}
                    className="w-full rounded-xl border border-navy-200 px-4 py-2.5 text-sm text-navy-dark focus:border-gold focus:outline-none"
                  />
                </div>
              </div>

              <div className="lg:col-span-6 rounded-2xl border border-navy-100 bg-warm-50/50 p-6 space-y-6">
                <div className="text-center space-y-2 pb-4 border-b border-navy-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-navy-500">
                    Total Estimated Project Cost
                  </span>
                  <div className="text-4xl sm:text-5xl font-serif font-extrabold text-navy">
                    ₹{(pcResult.totalProjectCost / 10000000).toFixed(2)} Cr
                  </div>
                  <div className="text-xs text-navy-500 font-medium">₹{pcResult.totalProjectCost.toLocaleString()}</div>
                </div>

                <LightweightDonutChart
                  data={pcResult.costBreakdown.map((item, idx) => ({
                    label: item.head,
                    value: item.amount,
                    color: ["#062B49", "#0A4676", "#C7952D", "#E3C16F", "#888888", "#1E88E5"][idx % 6],
                  }))}
                  centerText={`₹${(pcResult.totalProjectCost / 10000000).toFixed(1)}Cr`}
                  centerSubtext="Total Cost"
                />

                <div className="space-y-2 text-xs border-t border-navy-100 pt-3">
                  {pcResult.costBreakdown.map((item, idx) => (
                    <div key={idx} className="flex justify-between text-navy-700">
                      <span>{item.head}:</span>
                      <span className="font-bold text-navy-dark">
                        ₹{item.amount.toLocaleString()} ({item.percentage}%)
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 6. PROMOTER CONTRIBUTION CALCULATOR */}
        {activeTab === "promoter-contrib" && (
          <div className="rounded-3xl border border-navy-100 bg-white p-6 sm:p-10 shadow-institutional space-y-8">
            <div className="flex items-start justify-between flex-wrap gap-4 border-b border-navy-100 pb-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-dark">
                  Equity Sizing & Leverage
                </span>
                <h2 className="text-2xl font-serif font-bold text-navy-dark">
                  Promoter Contribution & Margin Calculator
                </h2>
                <p className="text-xs sm:text-sm text-navy-600">
                  Determine the mandatory promoter equity contribution required to support bank term loan sanctions.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setPromTotalCost(40000000);
                    setPromMarginPercent(25);
                    setPromExistingFunds(12000000);
                  }}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-navy-200 bg-warm px-3.5 py-2 text-xs font-bold text-navy-700 hover:bg-navy-50"
                >
                  <RotateCcw className="h-3 w-3" />
                  <span>Reset Defaults</span>
                </button>
                <button
                  onClick={() => handleSaveCalculation("Promoter Contribution")}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-navy px-4 py-2 text-xs font-bold text-white hover:bg-navy-light"
                >
                  <Save className="h-3 w-3" />
                  <span>Save Calculation</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-6 space-y-5">
                <div>
                  <label className="block text-xs font-bold text-navy-900 mb-1">Total Project Cost (₹)</label>
                  <input
                    type="number"
                    value={promTotalCost}
                    onChange={(e) => setPromTotalCost(Number(e.target.value))}
                    className="w-full rounded-xl border border-navy-200 px-4 py-2.5 text-sm text-navy-dark focus:border-gold focus:outline-none"
                  />
                  <span className="text-[10px] text-navy-500">₹{(promTotalCost / 10000000).toFixed(2)} Crores</span>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-navy-900 mb-1">
                    <span>Target Promoter Margin (%)</span>
                    <span className="text-navy">{promMarginPercent}%</span>
                  </div>
                  <input
                    type="range"
                    min={10}
                    max={50}
                    step={5}
                    value={promMarginPercent}
                    onChange={(e) => setPromMarginPercent(Number(e.target.value))}
                    className="w-full accent-navy cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-navy-400">
                    <span>10% (Subsidized/CGTMSE)</span>
                    <span>25% (Standard Bank Norm)</span>
                    <span>50% (Conservative)</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy-900 mb-1">Currently Available Promoter Funds (₹)</label>
                  <input
                    type="number"
                    value={promExistingFunds}
                    onChange={(e) => setPromExistingFunds(Number(e.target.value))}
                    className="w-full rounded-xl border border-navy-200 px-4 py-2.5 text-sm text-navy-dark focus:border-gold focus:outline-none"
                  />
                </div>
              </div>

              <div className="lg:col-span-6 rounded-2xl border border-navy-100 bg-warm-50/50 p-6 space-y-6">
                <div className="grid grid-cols-2 gap-4 text-center pb-4 border-b border-navy-100">
                  <div>
                    <div className="text-2xl sm:text-3xl font-serif font-extrabold text-gold-dark">
                      ₹{(promResult.promoterContributionAmount / 100000).toFixed(2)}L
                    </div>
                    <div className="text-[11px] font-semibold text-navy-500 uppercase">Required Promoter Equity</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-serif font-extrabold text-navy">
                      ₹{(promResult.eligibleDebtAmount / 100000).toFixed(2)}L
                    </div>
                    <div className="text-[11px] font-semibold text-navy-500 uppercase">Eligible Bank Debt</div>
                  </div>
                </div>

                <div className="text-center">
                  <span
                    className={`inline-block rounded-full px-3.5 py-1 text-xs font-bold ${
                      promResult.statusColor === "emerald"
                        ? "bg-emerald-100 text-emerald-800"
                        : promResult.statusColor === "blue"
                        ? "bg-blue-100 text-navy-800"
                        : "bg-amber-100 text-amber-800"
                    }`}
                  >
                    {promResult.status} ({promResult.debtEquityRatioString})
                  </span>
                </div>

                <div className="space-y-2 text-xs border-t border-navy-100 pt-3 text-navy-700">
                  <div className="flex justify-between">
                    <span>Available Promoter Capital:</span>
                    <span className="font-bold text-navy-dark">₹{promExistingFunds.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Margin Gap / Surplus:</span>
                    <span
                      className={`font-bold ${
                        promResult.surplusOrShortfall >= 0 ? "text-emerald-700" : "text-red-700"
                      }`}
                    >
                      {promResult.surplusOrShortfall >= 0 ? "+ Surplus " : "- Shortfall "}
                      ₹{Math.abs(promResult.surplusOrShortfall).toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="rounded-xl bg-white p-4 border border-navy-100 text-xs text-navy-700 space-y-1">
                  <div className="font-bold text-navy-900">Appraisal Guidance:</div>
                  <p className="leading-relaxed">{promResult.interpretation}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 7. LOAN REPAYMENT SCHEDULE */}
        {activeTab === "amortization" && (
          <div className="rounded-3xl border border-navy-100 bg-white p-6 sm:p-10 shadow-institutional space-y-8">
            <div className="flex items-start justify-between flex-wrap gap-4 border-b border-navy-100 pb-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-dark">
                  Debt Servicing Schedule
                </span>
                <h2 className="text-2xl font-serif font-bold text-navy-dark">
                  Loan Repayment & Amortization Schedule
                </h2>
                <p className="text-xs sm:text-sm text-navy-600">
                  Detailed yearly and monthly schedule showing principal reduction, interest, and closing balances.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setAmortPrincipal(2500000);
                    setAmortRate(10.5);
                    setAmortTenure(5);
                  }}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-navy-200 bg-warm px-3.5 py-2 text-xs font-bold text-navy-700 hover:bg-navy-50"
                >
                  <RotateCcw className="h-3 w-3" />
                  <span>Reset Defaults</span>
                </button>
                <button
                  onClick={() => handleSaveCalculation("Amortization Schedule")}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-navy px-4 py-2 text-xs font-bold text-white hover:bg-navy-light"
                >
                  <Save className="h-3 w-3" />
                  <span>Save Calculation</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-navy-900 mb-1">Principal Amount (₹)</label>
                <input
                  type="number"
                  value={amortPrincipal}
                  onChange={(e) => setAmortPrincipal(Number(e.target.value))}
                  className="w-full rounded-xl border border-navy-200 px-4 py-2 text-sm text-navy-dark focus:border-gold"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-navy-900 mb-1">Annual Interest Rate (%)</label>
                <input
                  type="number"
                  step={0.25}
                  value={amortRate}
                  onChange={(e) => setAmortRate(Number(e.target.value))}
                  className="w-full rounded-xl border border-navy-200 px-4 py-2 text-sm text-navy-dark focus:border-gold"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-navy-900 mb-1">Tenure (Years)</label>
                <input
                  type="number"
                  value={amortTenure}
                  onChange={(e) => setAmortTenure(Math.max(1, Number(e.target.value)))}
                  className="w-full rounded-xl border border-navy-200 px-4 py-2 text-sm text-navy-dark focus:border-gold"
                />
              </div>
            </div>

            {/* Schedule Table */}
            <div className="overflow-x-auto rounded-2xl border border-navy-100">
              <table className="w-full text-left text-xs">
                <thead className="bg-navy text-white uppercase text-[10px] tracking-wider">
                  <tr>
                    <th className="px-4 py-3">Year</th>
                    <th className="px-4 py-3">Opening Balance</th>
                    <th className="px-4 py-3">EMI Paid</th>
                    <th className="px-4 py-3">Principal Repaid</th>
                    <th className="px-4 py-3">Interest Paid</th>
                    <th className="px-4 py-3">Closing Balance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-navy-50 bg-white text-navy-800">
                  {amortResult.yearlySchedule.map((row) => (
                    <tr key={row.period} className="hover:bg-warm-50/60">
                      <td className="px-4 py-3 font-bold text-navy-dark">Year {row.period}</td>
                      <td className="px-4 py-3">₹{row.openingBalance.toLocaleString()}</td>
                      <td className="px-4 py-3 font-semibold">₹{row.emi.toLocaleString()}</td>
                      <td className="px-4 py-3 text-emerald-700 font-medium">₹{row.principalPaid.toLocaleString()}</td>
                      <td className="px-4 py-3 text-gold-dark font-medium">₹{row.interestPaid.toLocaleString()}</td>
                      <td className="px-4 py-3 font-bold text-navy-dark">₹{row.closingBalance.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 8. DEBT EQUITY RATIO */}
        {activeTab === "debt-equity" && (
          <div className="rounded-3xl border border-navy-100 bg-white p-6 sm:p-10 shadow-institutional space-y-8">
            <div className="flex items-start justify-between flex-wrap gap-4 border-b border-navy-100 pb-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-dark">
                  Solvency & Capital Structure
                </span>
                <h2 className="text-2xl font-serif font-bold text-navy-dark">
                  Debt Equity & TOL/TNW Ratio Calculator
                </h2>
                <p className="text-xs sm:text-sm text-navy-600">
                  Evaluate balance sheet leverage and total outside liabilities relative to promoter net worth.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setDeTotalDebt(18000000);
                    setDeNetWorth(10000000);
                    setDeTotalLiab(22000000);
                  }}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-navy-200 bg-warm px-3.5 py-2 text-xs font-bold text-navy-700 hover:bg-navy-50"
                >
                  <RotateCcw className="h-3 w-3" />
                  <span>Reset Defaults</span>
                </button>
                <button
                  onClick={() => handleSaveCalculation("Debt-Equity Calculator")}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-navy px-4 py-2 text-xs font-bold text-white hover:bg-navy-light"
                >
                  <Save className="h-3 w-3" />
                  <span>Save Calculation</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-6 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-navy-900 mb-1">Total Funded Borrowings / Debt (₹)</label>
                  <input
                    type="number"
                    value={deTotalDebt}
                    onChange={(e) => setDeTotalDebt(Number(e.target.value))}
                    className="w-full rounded-xl border border-navy-200 px-4 py-2.5 text-sm text-navy-dark focus:border-gold"
                  />
                  <span className="text-[10px] text-navy-500">Term loans + Working capital CC/OD + Unsecured loans</span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy-900 mb-1">Tangible Net Worth (TNW in ₹)</label>
                  <input
                    type="number"
                    value={deNetWorth}
                    onChange={(e) => setDeNetWorth(Number(e.target.value))}
                    className="w-full rounded-xl border border-navy-200 px-4 py-2.5 text-sm text-navy-dark focus:border-gold"
                  />
                  <span className="text-[10px] text-navy-500">Paid-up capital + Free reserves minus intangible assets</span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy-900 mb-1">Total Outside Liabilities (TOL in ₹)</label>
                  <input
                    type="number"
                    value={deTotalLiab}
                    onChange={(e) => setDeTotalLiab(Number(e.target.value))}
                    className="w-full rounded-xl border border-navy-200 px-4 py-2.5 text-sm text-navy-dark focus:border-gold"
                  />
                  <span className="text-[10px] text-navy-500">Includes trade payables, statutory dues, and other current liabilities</span>
                </div>
              </div>

              <div className="lg:col-span-6 rounded-2xl border border-navy-100 bg-warm-50/50 p-6 space-y-6">
                <div className="grid grid-cols-2 gap-4 text-center pb-4 border-b border-navy-100">
                  <div>
                    <div className="text-4xl font-serif font-extrabold text-navy">
                      {deResult.debtEquityRatio}x
                    </div>
                    <div className="text-[11px] font-semibold text-navy-500 uppercase">Debt : Equity Ratio</div>
                  </div>
                  <div>
                    <div className="text-4xl font-serif font-extrabold text-gold-dark">
                      {deResult.tolTnwRatio}x
                    </div>
                    <div className="text-[11px] font-semibold text-navy-500 uppercase">TOL / TNW Ratio</div>
                  </div>
                </div>

                <div className="text-center">
                  <span
                    className={`inline-block rounded-full px-3.5 py-1 text-xs font-bold ${
                      deResult.statusColor === "emerald"
                        ? "bg-emerald-100 text-emerald-800"
                        : deResult.statusColor === "blue"
                        ? "bg-blue-100 text-navy-800"
                        : deResult.statusColor === "amber"
                        ? "bg-amber-100 text-amber-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {deResult.status}
                  </span>
                </div>

                <div className="rounded-xl bg-white p-4 border border-navy-100 text-xs text-navy-700 space-y-1">
                  <div className="font-bold text-navy-900">Underwriting Benchmark:</div>
                  <p className="leading-relaxed">{deResult.interpretation}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 9. INTEREST COVERAGE RATIO */}
        {activeTab === "interest-coverage" && (
          <div className="rounded-3xl border border-navy-100 bg-white p-6 sm:p-10 shadow-institutional space-y-8">
            <div className="flex items-start justify-between flex-wrap gap-4 border-b border-navy-100 pb-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-dark">
                  Operating Profit Cushion
                </span>
                <h2 className="text-2xl font-serif font-bold text-navy-dark">
                  Interest Coverage Ratio (ICR) Calculator
                </h2>
                <p className="text-xs sm:text-sm text-navy-600">
                  Measure the enterprise&apos;s ability to meet interest payment obligations from operating profits.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setIcrEbit(4500000);
                    setIcrInterest(1500000);
                  }}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-navy-200 bg-warm px-3.5 py-2 text-xs font-bold text-navy-700 hover:bg-navy-50"
                >
                  <RotateCcw className="h-3 w-3" />
                  <span>Reset Defaults</span>
                </button>
                <button
                  onClick={() => handleSaveCalculation("Interest Coverage")}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-navy px-4 py-2 text-xs font-bold text-white hover:bg-navy-light"
                >
                  <Save className="h-3 w-3" />
                  <span>Save Calculation</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-6 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-navy-900 mb-1">
                    Operating Profit Before Interest & Taxes (EBIT in ₹)
                  </label>
                  <input
                    type="number"
                    value={icrEbit}
                    onChange={(e) => setIcrEbit(Number(e.target.value))}
                    className="w-full rounded-xl border border-navy-200 px-4 py-2.5 text-sm text-navy-dark focus:border-gold"
                  />
                  <span className="text-[10px] text-navy-500">₹{(icrEbit / 100000).toFixed(2)} Lakhs</span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy-900 mb-1">
                    Total Annual Interest Expenses (₹)
                  </label>
                  <input
                    type="number"
                    value={icrInterest}
                    onChange={(e) => setIcrInterest(Number(e.target.value))}
                    className="w-full rounded-xl border border-navy-200 px-4 py-2.5 text-sm text-navy-dark focus:border-gold"
                  />
                  <span className="text-[10px] text-navy-500">₹{(icrInterest / 100000).toFixed(2)} Lakhs</span>
                </div>
              </div>

              <div className="lg:col-span-6 rounded-2xl border border-navy-100 bg-warm-50/50 p-6 space-y-6">
                <div className="text-center space-y-2 pb-4 border-b border-navy-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-navy-500">
                    Interest Coverage Ratio
                  </span>
                  <div className="text-5xl font-serif font-extrabold text-navy">
                    {icrResult.icr}x
                  </div>
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${
                      icrResult.statusColor === "emerald"
                        ? "bg-emerald-100 text-emerald-800"
                        : icrResult.statusColor === "blue"
                        ? "bg-blue-100 text-navy-800"
                        : "bg-amber-100 text-amber-800"
                    }`}
                  >
                    {icrResult.status}
                  </span>
                </div>

                <div className="rounded-xl bg-white p-4 border border-navy-100 text-xs text-navy-700 space-y-1">
                  <div className="font-bold text-navy-900">Interpretation:</div>
                  <p className="leading-relaxed">{icrResult.interpretation}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 10. BASIC ROI CALCULATOR */}
        {activeTab === "roi" && (
          <div className="rounded-3xl border border-navy-100 bg-white p-6 sm:p-10 shadow-institutional space-y-8">
            <div className="flex items-start justify-between flex-wrap gap-4 border-b border-navy-100 pb-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-dark">
                  Investment Viability
                </span>
                <h2 className="text-2xl font-serif font-bold text-navy-dark">
                  Return on Investment (ROI) & Payback Calculator
                </h2>
                <p className="text-xs sm:text-sm text-navy-600">
                  Calculate simple payback period and annualized return on capital expenditure.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setRoiInvestment(10000000);
                    setRoiAnnualProfit(2200000);
                    setRoiLifespan(5);
                  }}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-navy-200 bg-warm px-3.5 py-2 text-xs font-bold text-navy-700 hover:bg-navy-50"
                >
                  <RotateCcw className="h-3 w-3" />
                  <span>Reset Defaults</span>
                </button>
                <button
                  onClick={() => handleSaveCalculation("ROI Calculator")}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-navy px-4 py-2 text-xs font-bold text-white hover:bg-navy-light"
                >
                  <Save className="h-3 w-3" />
                  <span>Save Calculation</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-6 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-navy-900 mb-1">Total Capital Investment (₹)</label>
                  <input
                    type="number"
                    value={roiInvestment}
                    onChange={(e) => setRoiInvestment(Number(e.target.value))}
                    className="w-full rounded-xl border border-navy-200 px-4 py-2.5 text-sm text-navy-dark focus:border-gold"
                  />
                  <span className="text-[10px] text-navy-500">₹{(roiInvestment / 10000000).toFixed(2)} Crores</span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy-900 mb-1">Expected Annual Net Profit (₹)</label>
                  <input
                    type="number"
                    value={roiAnnualProfit}
                    onChange={(e) => setRoiAnnualProfit(Number(e.target.value))}
                    className="w-full rounded-xl border border-navy-200 px-4 py-2.5 text-sm text-navy-dark focus:border-gold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy-900 mb-1">Project Analysis Horizon (Years)</label>
                  <input
                    type="number"
                    value={roiLifespan}
                    onChange={(e) => setRoiLifespan(Math.max(1, Number(e.target.value)))}
                    className="w-full rounded-xl border border-navy-200 px-4 py-2.5 text-sm text-navy-dark focus:border-gold"
                  />
                </div>
              </div>

              <div className="lg:col-span-6 rounded-2xl border border-navy-100 bg-warm-50/50 p-6 space-y-6">
                <div className="grid grid-cols-2 gap-4 text-center pb-4 border-b border-navy-100">
                  <div>
                    <div className="text-4xl font-serif font-extrabold text-navy">
                      {roiResult.paybackPeriodYears} Yrs
                    </div>
                    <div className="text-[11px] font-semibold text-navy-500 uppercase">Payback Period</div>
                  </div>
                  <div>
                    <div className="text-4xl font-serif font-extrabold text-gold-dark">
                      {roiResult.annualizedRoiPercent}%
                    </div>
                    <div className="text-[11px] font-semibold text-navy-500 uppercase">Annualized ROI</div>
                  </div>
                </div>

                <div className="rounded-xl bg-white p-4 border border-navy-100 text-xs text-navy-700 space-y-1">
                  <div className="font-bold text-navy-900">Commercial Feasibility:</div>
                  <p className="leading-relaxed">{roiResult.interpretation}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            GLOBAL RESULTS SUMMARY & ADVISORY CTA
        ========================================================================= */}
        <section className="rounded-3xl border border-gold/30 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-800 p-8 sm:p-12 text-white shadow-institutional">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Professional Synthesis</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                Turn Financial Estimates into Bankable DPR Dossiers
              </h3>
              <p className="text-xs sm:text-sm text-navy-200 max-w-2xl leading-relaxed">
                Calculators provide initial ballpark estimates. Commercial bank sanction committees require multi-year audited historical reconciliations, audited CMA schedules, and sensitivity tables.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <Link
                href="/book-consultation"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-6 py-3.5 text-sm font-bold text-navy-dark hover:bg-gold-hover transition-all text-center"
              >
                <span>Book Financial Advisory</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/finance-readiness"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/20 transition-all text-center"
              >
                <span>Check Finance Readiness</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Statutory Regulatory Disclaimer Banner */}
        <section className="pt-2">
          <RegulatoryDisclaimerBanner type="warning" />
        </section>
      </div>
    </div>
  );
}
