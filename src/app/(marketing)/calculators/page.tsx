"use client";

import React, { useState } from "react";
import {
  calculateMpbf,
  calculateDscr,
  calculateEmi,
  MpbfInputs,
  DscrInputs,
  EmiInputs,
} from "@/lib/cma-engine/calculator";
import { RegulatoryDisclaimerBanner } from "@/components/brand/RegulatoryDisclaimerBanner";
import {
  Calculator,
  TrendingUp,
  FileSpreadsheet,
  Building2,
  PieChart,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";

export default function CalculatorsPage() {
  const [activeTab, setActiveTab] = useState<"mpbf" | "dscr" | "emi" | "cgtmse">("mpbf");

  // MPBF State
  const [mpbfInputs, setMpbfInputs] = useState<MpbfInputs>({
    projectedTurnoverInLakhs: 400,
    totalCurrentAssetsInLakhs: 160,
    otherCurrentLiabilitiesInLakhs: 40,
  });

  // DSCR State
  const [dscrInputs, setDscrInputs] = useState<DscrInputs>({
    patInLakhs: 24,
    depreciationInLakhs: 12,
    termLoanInterestInLakhs: 8,
    principalRepaymentInLakhs: 14,
  });

  // EMI State
  const [emiInputs, setEmiInputs] = useState<EmiInputs>({
    loanAmountInLakhs: 100,
    annualInterestRatePercent: 9.5,
    tenureYears: 7,
  });

  // CGTMSE State
  const [cgtmseLoanAmount, setCgtmseLoanAmount] = useState<number>(150);

  const mpbfResult = calculateMpbf(mpbfInputs);
  const dscrResult = calculateDscr(dscrInputs);
  const emiResult = calculateEmi(emiInputs);

  // CGTMSE Calculation
  const cgtmseCoveragePercent = cgtmseLoanAmount <= 5 ? 85 : 75;
  const cgtmseCoverageAmount = (cgtmseLoanAmount * cgtmseCoveragePercent) / 100;
  const cgtmseFeeRate = cgtmseLoanAmount <= 100 ? 0.37 : 0.75;
  const cgtmseAnnualFee = (cgtmseLoanAmount * cgtmseFeeRate) / 100;

  return (
    <div className="bg-warm min-h-screen py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3.5 py-1 text-xs font-semibold text-gold-dark">
            <Calculator className="h-3.5 w-3.5" />
            <span>Indian Banking Financial Suite</span>
          </div>
          <h1 className="text-3xl font-serif font-bold text-navy-dark sm:text-4xl">
            Financial & Credit Appraisal Calculators
          </h1>
          <p className="text-xs sm:text-sm text-navy-700 leading-relaxed">
            Professional calculators calibrated to RBI guidelines, Tandon Committee norms, and Nayak Committee recommendations.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="mt-10 flex flex-wrap justify-center gap-2 border-b border-navy-100 pb-4">
          {[
            { id: "mpbf", label: "MPBF Working Capital", icon: FileSpreadsheet },
            { id: "dscr", label: "DSCR Coverage", icon: TrendingUp },
            { id: "emi", label: "Term Loan EMI", icon: Calculator },
            { id: "cgtmse", label: "CGTMSE Guarantee Fee", icon: ShieldCheck },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`flex items-center gap-2 rounded-lg px-4 py-2.5 text-xs font-bold transition-all ${
                activeTab === tab.id
                  ? "bg-navy text-white shadow-sm"
                  : "bg-white text-navy-700 hover:bg-warm-100 border border-navy-100"
              }`}
            >
              <tab.icon className="h-4 w-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* TAB 1: MPBF Calculator */}
        {activeTab === "mpbf" && (
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 rounded-2xl border border-navy-100 bg-white p-6 shadow-institutional space-y-4">
              <h2 className="text-lg font-bold text-navy-dark">
                Working Capital Parameters (Tandon / Nayak Norms)
              </h2>
              <p className="text-xs text-navy-600">
                Enter your projected turnover, total current assets (stocks + debtors), and non-bank current liabilities.
              </p>

              <div className="space-y-4 pt-2">
                <div>
                  <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1">
                    Projected Annual Turnover (₹ in Lakhs)
                  </label>
                  <input
                    type="number"
                    value={mpbfInputs.projectedTurnoverInLakhs}
                    onChange={(e) =>
                      setMpbfInputs({
                        ...mpbfInputs,
                        projectedTurnoverInLakhs: Number(e.target.value),
                      })
                    }
                    className="w-full rounded-lg border border-navy-200 p-2.5 text-sm focus:border-gold focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1">
                    Total Current Assets - TCA (₹ in Lakhs)
                  </label>
                  <input
                    type="number"
                    value={mpbfInputs.totalCurrentAssetsInLakhs}
                    onChange={(e) =>
                      setMpbfInputs({
                        ...mpbfInputs,
                        totalCurrentAssetsInLakhs: Number(e.target.value),
                      })
                    }
                    className="w-full rounded-lg border border-navy-200 p-2.5 text-sm focus:border-gold focus:outline-none"
                  />
                  <span className="text-[11px] text-navy-500">Raw materials, WIP, finished goods, sundry debtors, and bank balances.</span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1">
                    Other Current Liabilities - OCL (₹ in Lakhs)
                  </label>
                  <input
                    type="number"
                    value={mpbfInputs.otherCurrentLiabilitiesInLakhs}
                    onChange={(e) =>
                      setMpbfInputs({
                        ...mpbfInputs,
                        otherCurrentLiabilitiesInLakhs: Number(e.target.value),
                      })
                    }
                    className="w-full rounded-lg border border-navy-200 p-2.5 text-sm focus:border-gold focus:outline-none"
                  />
                  <span className="text-[11px] text-navy-500">Trade creditors, statutory payables, advances (excluding bank borrowings).</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-institutional space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gold-dark bg-gold/10 px-2 py-0.5 rounded">
                  Calculated Working Capital Eligibility
                </span>
                
                {/* Method 2 (Standard Commercial Bank) */}
                <div className="rounded-xl bg-navy p-5 text-white space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-warm-300 uppercase font-semibold">
                      Tandon Method II (Standard Commercial Norm)
                    </span>
                    <span className="text-xs font-bold text-gold-light">
                      Current Ratio: {mpbfResult.method2.projectedCurrentRatio}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-serif font-bold text-gold">
                      ₹{mpbfResult.method2.maximumPermissibleBankFinance}
                    </span>
                    <span className="text-xs text-warm-300">Lakhs MPBF</span>
                  </div>
                  <div className="text-xs text-warm-300 border-t border-navy-700 pt-2 flex justify-between">
                    <span>Promoter Margin (25% of TCA):</span>
                    <span className="font-semibold text-white">₹{mpbfResult.method2.minimumMarginInLakhs} Lakhs</span>
                  </div>
                </div>

                {/* Method 1 & Nayak */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="rounded-lg bg-warm-50 p-3.5 border border-navy-50 space-y-1">
                    <span className="text-[10px] font-bold text-navy-500 uppercase">Tandon Method I</span>
                    <p className="text-lg font-bold text-navy-dark">₹{mpbfResult.method1.maximumPermissibleBankFinance} L</p>
                    <p className="text-[10px] text-navy-500">75% of Working Capital Gap</p>
                  </div>
                  <div className="rounded-lg bg-warm-50 p-3.5 border border-navy-50 space-y-1">
                    <span className="text-[10px] font-bold text-navy-500 uppercase">Nayak Turnover Method</span>
                    <p className="text-lg font-bold text-navy-dark">₹{mpbfResult.turnoverMethodNayak.bankFinance} L</p>
                    <p className="text-[10px] text-navy-500">20% of Projected Turnover</p>
                  </div>
                </div>

                {/* Remarks */}
                <div className="border-t border-navy-100 pt-4 space-y-1.5 text-xs text-navy-700">
                  {mpbfResult.remarks.map((rem, idx) => (
                    <p key={idx} className="flex items-start gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0 mt-0.5" />
                      <span>{rem}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: DSCR Calculator */}
        {activeTab === "dscr" && (
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 rounded-2xl border border-navy-100 bg-white p-6 shadow-institutional space-y-4">
              <h2 className="text-lg font-bold text-navy-dark">
                Debt Service Coverage Ratio (DSCR) Parameters
              </h2>
              <p className="text-xs text-navy-600">
                Evaluates net cash flows available to service annual term loan principal repayments and interest charges.
              </p>

              <div className="space-y-4 pt-2">
                <div>
                  <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1">
                    Profit After Tax - PAT (₹ in Lakhs)
                  </label>
                  <input
                    type="number"
                    value={dscrInputs.patInLakhs}
                    onChange={(e) =>
                      setDscrInputs({ ...dscrInputs, patInLakhs: Number(e.target.value) })
                    }
                    className="w-full rounded-lg border border-navy-200 p-2.5 text-sm focus:border-gold focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1">
                    Annual Depreciation (₹ in Lakhs)
                  </label>
                  <input
                    type="number"
                    value={dscrInputs.depreciationInLakhs}
                    onChange={(e) =>
                      setDscrInputs({ ...dscrInputs, depreciationInLakhs: Number(e.target.value) })
                    }
                    className="w-full rounded-lg border border-navy-200 p-2.5 text-sm focus:border-gold focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1">
                    Annual Term Loan Interest (₹ in Lakhs)
                  </label>
                  <input
                    type="number"
                    value={dscrInputs.termLoanInterestInLakhs}
                    onChange={(e) =>
                      setDscrInputs({
                        ...dscrInputs,
                        termLoanInterestInLakhs: Number(e.target.value),
                      })
                    }
                    className="w-full rounded-lg border border-navy-200 p-2.5 text-sm focus:border-gold focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1">
                    Annual Term Loan Principal Repayment (₹ in Lakhs)
                  </label>
                  <input
                    type="number"
                    value={dscrInputs.principalRepaymentInLakhs}
                    onChange={(e) =>
                      setDscrInputs({
                        ...dscrInputs,
                        principalRepaymentInLakhs: Number(e.target.value),
                      })
                    }
                    className="w-full rounded-lg border border-navy-200 p-2.5 text-sm focus:border-gold focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-institutional space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gold-dark bg-gold/10 px-2 py-0.5 rounded">
                  DSCR Assessment
                </span>
                <div className="rounded-xl bg-navy p-6 text-white text-center space-y-2">
                  <span className="text-xs text-warm-300 uppercase tracking-wider">Calculated DSCR</span>
                  <div className="text-4xl font-serif font-bold text-gold">
                    {dscrResult.dscr}x
                  </div>
                  <span className="inline-block rounded-full bg-gold/20 text-gold-light px-3 py-1 text-xs font-semibold">
                    Category: {dscrResult.category}
                  </span>
                </div>

                <div className="rounded-lg bg-warm-50 p-4 border border-navy-50 space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-navy-500">Benchmark Requirement:</span>
                    <span className="font-bold text-navy-900">{dscrResult.benchmark}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-navy-500">Compliance Status:</span>
                    <span className={`font-bold ${dscrResult.isCompliant ? "text-emerald-700" : "text-amber-700"}`}>
                      {dscrResult.isCompliant ? "Meets Bank Norm" : "Requires Structuring"}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-navy-600 leading-relaxed pt-2">
                  {dscrResult.observation}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: EMI Calculator */}
        {activeTab === "emi" && (
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 rounded-2xl border border-navy-100 bg-white p-6 shadow-institutional space-y-4">
              <h2 className="text-lg font-bold text-navy-dark">Term Loan EMI Parameters</h2>
              <div className="space-y-4 pt-2">
                <div>
                  <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1">
                    Loan Amount (₹ in Lakhs)
                  </label>
                  <input
                    type="number"
                    value={emiInputs.loanAmountInLakhs}
                    onChange={(e) =>
                      setEmiInputs({ ...emiInputs, loanAmountInLakhs: Number(e.target.value) })
                    }
                    className="w-full rounded-lg border border-navy-200 p-2.5 text-sm focus:border-gold focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1">
                    Annual Interest Rate (%)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={emiInputs.annualInterestRatePercent}
                    onChange={(e) =>
                      setEmiInputs({
                        ...emiInputs,
                        annualInterestRatePercent: Number(e.target.value),
                      })
                    }
                    className="w-full rounded-lg border border-navy-200 p-2.5 text-sm focus:border-gold focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1">
                    Tenure (Years)
                  </label>
                  <input
                    type="number"
                    value={emiInputs.tenureYears}
                    onChange={(e) =>
                      setEmiInputs({ ...emiInputs, tenureYears: Number(e.target.value) })
                    }
                    className="w-full rounded-lg border border-navy-200 p-2.5 text-sm focus:border-gold focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-institutional space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gold-dark bg-gold/10 px-2 py-0.5 rounded">
                  Repayment Breakdown
                </span>
                <div className="rounded-xl bg-navy p-6 text-white text-center space-y-1">
                  <span className="text-xs text-warm-300 uppercase tracking-wider">Monthly EMI</span>
                  <div className="text-4xl font-serif font-bold text-gold">
                    ₹{emiResult.monthlyEmi.toLocaleString("en-IN")}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs pt-2">
                  <div className="p-3.5 rounded-lg bg-warm-50 border border-navy-50">
                    <span className="text-navy-500">Total Interest Payable:</span>
                    <p className="text-base font-bold text-navy-dark mt-0.5">₹{emiResult.totalInterestPayableInLakhs} L</p>
                  </div>
                  <div className="p-3.5 rounded-lg bg-warm-50 border border-navy-50">
                    <span className="text-navy-500">Total Amount Payable:</span>
                    <p className="text-base font-bold text-navy-dark mt-0.5">₹{emiResult.totalAmountPayableInLakhs} L</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: CGTMSE Calculator */}
        {activeTab === "cgtmse" && (
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 rounded-2xl border border-navy-100 bg-white p-6 shadow-institutional space-y-4">
              <h2 className="text-lg font-bold text-navy-dark">CGTMSE Guarantee Fee Estimator</h2>
              <p className="text-xs text-navy-600">
                Under the Credit Guarantee Fund Trust for Micro and Small Enterprises, loans up to ₹500 Lakhs are eligible for collateral-free coverage.
              </p>
              <div className="pt-2">
                <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1">
                  Proposed Credit Facility (₹ in Lakhs - Max 500)
                </label>
                <input
                  type="number"
                  max={500}
                  min={1}
                  value={cgtmseLoanAmount}
                  onChange={(e) => setCgtmseLoanAmount(Number(e.target.value))}
                  className="w-full rounded-lg border border-navy-200 p-2.5 text-sm focus:border-gold focus:outline-none"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-institutional space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gold-dark bg-gold/10 px-2 py-0.5 rounded">
                  CGTMSE Coverage Breakdown
                </span>
                <div className="rounded-xl bg-navy p-5 text-white space-y-2">
                  <span className="text-xs text-warm-300 uppercase">Guarantee Coverage Amount ({cgtmseCoveragePercent}%)</span>
                  <div className="text-3xl font-serif font-bold text-gold">
                    ₹{cgtmseCoverageAmount.toFixed(2)} Lakhs
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div className="p-3.5 rounded-lg bg-warm-50 border border-navy-50">
                    <span className="text-navy-500">Applicable Fee Slab:</span>
                    <p className="text-sm font-bold text-navy-dark mt-0.5">{cgtmseFeeRate}% per annum</p>
                  </div>
                  <div className="p-3.5 rounded-lg bg-warm-50 border border-navy-50">
                    <span className="text-navy-500">Annual Guarantee Fee:</span>
                    <p className="text-sm font-bold text-navy-dark mt-0.5">₹{cgtmseAnnualFee.toFixed(2)} Lakhs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-12">
          <RegulatoryDisclaimerBanner />
        </div>
      </div>
    </div>
  );
}
