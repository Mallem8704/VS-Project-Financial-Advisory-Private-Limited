"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  evaluateFinanceReadiness,
  ReadinessInput,
  ReadinessOutput,
} from "@/lib/readiness/score-engine";
import { RegulatoryDisclaimerBanner } from "@/components/brand/RegulatoryDisclaimerBanner";
import {
  Award,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  Building,
  TrendingUp,
  ShieldCheck,
  RefreshCw,
  Printer,
  Sparkles,
  HelpCircle,
} from "lucide-react";

export default function FinanceReadinessScorePage() {
  const [step, setStep] = useState(1);
  const [inputs, setInputs] = useState<ReadinessInput>({
    businessVintageYears: 4,
    annualTurnoverInLakhs: 350,
    netProfitMarginPercent: 6.5,
    promoterCibilBracket: "750_PLUS",
    existingDebtInLakhs: 40,
    collateralValueInLakhs: 200,
    hasAuditedFinancials: true,
    gstFilingRegularity: "ALWAYS_ON_TIME",
    udyamRegistered: true,
    targetLoanAmountInLakhs: 150,
  });

  const [result, setResult] = useState<ReadinessOutput | null>(null);

  const handleCalculate = () => {
    const res = evaluateFinanceReadiness(inputs);
    setResult(res);
  };

  const handleReset = () => {
    setResult(null);
    setStep(1);
  };

  return (
    <div className="bg-warm min-h-screen py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3.5 py-1 text-xs font-semibold text-gold-dark">
            <Award className="h-3.5 w-3.5" />
            <span>Interactive Diagnostic Engine</span>
          </div>
          <h1 className="text-3xl font-serif font-bold text-navy-dark sm:text-4xl">
            MSME Finance Readiness Score
          </h1>
          <p className="text-xs sm:text-sm text-navy-700 leading-relaxed">
            Assess how commercial banks and credit underwriters will evaluate your business profile. Discover indicative eligibility, potential gaps, and suitable credit structures.
          </p>
        </div>

        {/* Diagnostic Form or Result */}
        {!result ? (
          <div className="mt-10 rounded-2xl border border-navy-100 bg-white p-6 sm:p-10 shadow-institutional">
            {/* Step Progress Indicator */}
            <div className="flex items-center justify-between border-b border-navy-100 pb-4 mb-8">
              <span className="text-xs font-bold text-navy-900 uppercase tracking-wider">
                Step {step} of 5:{" "}
                {step === 1 && "Business Vintage & Scale"}
                {step === 2 && "Profitability & Financial Scale"}
                {step === 3 && "Promoter CIBIL Score"}
                {step === 4 && "Debt & Collateral Coverage"}
                {step === 5 && "Statutory Compliance Hygiene"}
              </span>
              <span className="text-xs text-navy-500 font-semibold">{step * 20}% Completed</span>
            </div>

            {/* Step 1 */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                    Operating Business Vintage (In Completed Years)
                  </label>
                  <input
                    type="number"
                    min={0}
                    max={50}
                    value={inputs.businessVintageYears}
                    onChange={(e) =>
                      setInputs({ ...inputs, businessVintageYears: Number(e.target.value) })
                    }
                    className="w-full rounded-lg border border-navy-200 p-3 text-sm focus:border-gold focus:outline-none"
                  />
                  <p className="text-[11px] text-navy-500 mt-1.5">
                    Commercial banks prefer minimum 3 years vintage for unsecured facilities.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                    Target Loan Requirement (₹ in Lakhs)
                  </label>
                  <input
                    type="number"
                    min={1}
                    value={inputs.targetLoanAmountInLakhs}
                    onChange={(e) =>
                      setInputs({ ...inputs, targetLoanAmountInLakhs: Number(e.target.value) })
                    }
                    className="w-full rounded-lg border border-navy-200 p-3 text-sm focus:border-gold focus:outline-none"
                  />
                  <p className="text-[11px] text-navy-500 mt-1.5">
                    Example: ₹150 Lakhs (₹1.50 Crores)
                  </p>
                </div>
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                    Annual Turnover / Net Sales (₹ in Lakhs - Preceding Financial Year)
                  </label>
                  <input
                    type="number"
                    min={0}
                    value={inputs.annualTurnoverInLakhs}
                    onChange={(e) =>
                      setInputs({ ...inputs, annualTurnoverInLakhs: Number(e.target.value) })
                    }
                    className="w-full rounded-lg border border-navy-200 p-3 text-sm focus:border-gold focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                    Net Profit After Tax (PAT) Margin (%)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={inputs.netProfitMarginPercent}
                    onChange={(e) =>
                      setInputs({ ...inputs, netProfitMarginPercent: Number(e.target.value) })
                    }
                    className="w-full rounded-lg border border-navy-200 p-3 text-sm focus:border-gold focus:outline-none"
                  />
                  <p className="text-[11px] text-navy-500 mt-1.5">
                    Healthy MSME benchmark is typically 4% to 8% PAT margin.
                  </p>
                </div>
              </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-3">
                    Lead Promoter / Director CIBIL Score Bracket
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { key: "750_PLUS", label: "750 & Above (Excellent)" },
                      { key: "700_749", label: "700 – 749 (Good / Standard)" },
                      { key: "650_699", label: "650 – 699 (Fair / Moderate)" },
                      { key: "BELOW_650", label: "Below 650 (Adverse / High Risk)" },
                      { key: "NEW_TO_CREDIT", label: "New to Credit / -1 Score" },
                    ].map((opt) => (
                      <button
                        key={opt.key}
                        type="button"
                        onClick={() =>
                          setInputs({
                            ...inputs,
                            promoterCibilBracket: opt.key as ReadinessInput["promoterCibilBracket"],
                          })
                        }
                        className={`p-3.5 rounded-lg border text-xs font-bold text-left transition-all ${
                          inputs.promoterCibilBracket === opt.key
                            ? "border-gold bg-gold/10 text-navy-dark shadow-sm"
                            : "border-navy-100 bg-white text-navy-700 hover:border-navy-300"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 4 */}
            {step === 4 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                    Existing External Debt / Bank Borrowings (₹ in Lakhs)
                  </label>
                  <input
                    type="number"
                    min={0}
                    value={inputs.existingDebtInLakhs}
                    onChange={(e) =>
                      setInputs({ ...inputs, existingDebtInLakhs: Number(e.target.value) })
                    }
                    className="w-full rounded-lg border border-navy-200 p-3 text-sm focus:border-gold focus:outline-none"
                  />
                  <p className="text-[11px] text-navy-500 mt-1.5">
                    Include current term loans and working capital limits.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                    Estimated Tangible Collateral Property Value (₹ in Lakhs)
                  </label>
                  <input
                    type="number"
                    min={0}
                    value={inputs.collateralValueInLakhs}
                    onChange={(e) =>
                      setInputs({ ...inputs, collateralValueInLakhs: Number(e.target.value) })
                    }
                    className="w-full rounded-lg border border-navy-200 p-3 text-sm focus:border-gold focus:outline-none"
                  />
                  <p className="text-[11px] text-navy-500 mt-1.5">
                    Commercial/residential/industrial property market value. (Enter 0 if seeking collateral-free / CGTMSE).
                  </p>
                </div>
              </div>
            )}

            {/* Step 5 */}
            {step === 5 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                    Statutory Audit Status
                  </label>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setInputs({ ...inputs, hasAuditedFinancials: true })}
                      className={`flex-1 p-3 rounded-lg border text-xs font-bold ${
                        inputs.hasAuditedFinancials
                          ? "border-gold bg-gold/10 text-navy"
                          : "border-navy-100 bg-white text-navy-700"
                      }`}
                    >
                      Audited by Chartered Accountant
                    </button>
                    <button
                      type="button"
                      onClick={() => setInputs({ ...inputs, hasAuditedFinancials: false })}
                      className={`flex-1 p-3 rounded-lg border text-xs font-bold ${
                        !inputs.hasAuditedFinancials
                          ? "border-gold bg-gold/10 text-navy"
                          : "border-navy-100 bg-white text-navy-700"
                      }`}
                    >
                      Provisional / Unaudited Figures
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                    GST Return Filing Regularity (GSTR-3B & 1)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { key: "ALWAYS_ON_TIME", label: "Always On Time" },
                      { key: "OCCASIONAL_DELAY", label: "Occasional Minor Delays" },
                      { key: "FREQUENT_DEFAULTS", label: "Frequent Defaults / Open Dues" },
                    ].map((g) => (
                      <button
                        key={g.key}
                        type="button"
                        onClick={() =>
                          setInputs({
                            ...inputs,
                            gstFilingRegularity: g.key as ReadinessInput["gstFilingRegularity"],
                          })
                        }
                        className={`p-3 rounded-lg border text-xs font-bold ${
                          inputs.gstFilingRegularity === g.key
                            ? "border-gold bg-gold/10 text-navy"
                            : "border-navy-100 bg-white text-navy-700"
                        }`}
                      >
                        {g.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="udyamCheck"
                    checked={inputs.udyamRegistered}
                    onChange={(e) => setInputs({ ...inputs, udyamRegistered: e.target.checked })}
                    className="h-4 w-4 rounded border-navy-300 text-gold focus:ring-gold"
                  />
                  <label htmlFor="udyamCheck" className="text-xs text-navy-800 font-semibold cursor-pointer">
                    Enterprise holds active MSME Udyam Registration Certificate
                  </label>
                </div>
              </div>
            )}

            {/* Step Navigation Buttons */}
            <div className="mt-10 flex items-center justify-between border-t border-navy-100 pt-6">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="inline-flex items-center gap-2 rounded-lg border border-navy-200 px-4 py-2.5 text-xs font-bold text-navy-700 hover:bg-warm-100 transition-all"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Previous Step</span>
                </button>
              ) : (
                <div />
              )}

              {step < 5 ? (
                <button
                  type="button"
                  onClick={() => setStep(step + 1)}
                  className="inline-flex items-center gap-2 rounded-lg bg-navy px-5 py-2.5 text-xs font-bold text-white hover:bg-navy-light transition-all"
                >
                  <span>Next Step</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleCalculate}
                  className="inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-2.5 text-xs font-bold text-white hover:bg-gold-hover transition-all shadow-institutional"
                >
                  <Sparkles className="h-4 w-4" />
                  <span>Generate Readiness Assessment</span>
                </button>
              )}
            </div>
          </div>
        ) : (
          /* Result View */
          <div className="mt-10 space-y-8">
            {/* Scorecard Hero */}
            <div className="rounded-2xl border border-navy-100 bg-white p-8 shadow-institutional">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-navy-100 pb-6">
                <div className="text-center sm:text-left space-y-1">
                  <span className="text-xs font-bold text-gold-dark uppercase tracking-wider">
                    Indicative Diagnostic Result
                  </span>
                  <h2 className="text-2xl font-serif font-bold text-navy-dark">
                    Finance Readiness Assessment
                  </h2>
                  <p className="text-xs text-navy-600">
                    Target Loan: ₹{inputs.targetLoanAmountInLakhs} Lakhs • Turnover: ₹{inputs.annualTurnoverInLakhs} Lakhs
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center justify-center rounded-2xl bg-navy p-4 text-white min-w-[120px]">
                    <span className="text-3xl font-serif font-bold text-gold">
                      {result.indicativeScore}
                    </span>
                    <span className="text-[10px] text-warm-300 uppercase tracking-wider">
                      Out of 100
                    </span>
                  </div>
                  <div className="space-y-1 text-left">
                    <span className={`inline-block rounded-full border px-3 py-1 text-xs font-bold ${result.badgeColor}`}>
                      {result.category}
                    </span>
                    <p className="text-[11px] text-navy-500">
                      Evaluated on 5 credit dimensions
                    </p>
                  </div>
                </div>
              </div>

              {/* Strengths & Improvements */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                {/* Strengths */}
                <div className="rounded-xl bg-emerald-50/50 border border-emerald-100 p-5 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span>Identified Credit Strengths</span>
                  </div>
                  <ul className="space-y-2 text-xs text-navy-800">
                    {result.strengths.map((s, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">•</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Improvements */}
                <div className="rounded-xl bg-amber-50/50 border border-amber-100 p-5 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-800 uppercase tracking-wider">
                    <AlertTriangle className="h-4 w-4 text-amber-600" />
                    <span>Actionable Improvement Areas</span>
                  </div>
                  <ul className="space-y-2 text-xs text-navy-800">
                    {result.actionableImprovements.map((imp, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-amber-600 font-bold">•</span>
                        <span>{imp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Potentially Suitable Products */}
              <div className="mt-6 pt-6 border-t border-navy-100 space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-navy-900">
                  Potentially Suitable Credit Facilities (Indicative)
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {result.potentiallySuitableProducts.map((p, idx) => (
                    <div key={idx} className="rounded-lg border border-navy-100 bg-warm-50 p-4 space-y-1.5">
                      <h4 className="text-xs font-bold text-navy-dark">{p.title}</h4>
                      <p className="text-[11px] text-navy-600">{p.description}</p>
                      <span className="text-[10px] text-gold-dark font-medium block pt-1">
                        Institutions: {p.targetInstitutions}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-navy-100 pt-6">
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 text-xs font-bold text-navy-700 hover:text-navy-900"
                >
                  <RefreshCw className="h-4 w-4" />
                  <span>Re-test with Different Figures</span>
                </button>

                <div className="flex items-center gap-3">
                  <Link
                    href="/book-consultation"
                    className="inline-flex items-center gap-2 rounded-lg bg-gold px-5 py-2.5 text-xs font-bold text-white hover:bg-gold-hover transition-all"
                  >
                    <span>Schedule Advisory Consultation</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Regulatory Disclaimer Banner */}
            <RegulatoryDisclaimerBanner customText={result.disclaimer} />
          </div>
        )}

        {/* Informational Footer Strip */}
        <div className="mt-12 rounded-xl bg-white border border-navy-100 p-6 text-xs text-navy-600 leading-relaxed">
          <h4 className="font-bold text-navy-900 mb-1">About the Scoring Methodology</h4>
          <p>
            The Finance Readiness Score evaluates capital adequacy, promoter leverage, statutory compliance track record, and working capital cycles based on prudential standards laid out by the Reserve Bank of India and commercial banking credit underwriting models. It is strictly an advisory readiness diagnostic tool and does not guarantee sanction.
          </p>
        </div>
      </div>
    </div>
  );
}
