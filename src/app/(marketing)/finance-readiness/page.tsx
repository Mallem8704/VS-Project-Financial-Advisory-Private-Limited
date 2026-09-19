"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import {
  ASSESSMENT_CATEGORIES,
} from "@/lib/finance-readiness/questions-data";
import {
  AssessmentCategoryDef,
  AssessmentQuestionDef,
  ReadinessEvaluationResult,
} from "@/lib/finance-readiness/types";
import { READINESS_DISCLAIMER } from "@/lib/finance-readiness/scoring-engine";
import { RegulatoryDisclaimerBanner } from "@/components/brand/RegulatoryDisclaimerBanner";
import {
  Award,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Clock,
  Briefcase,
  Printer,
  Sparkles,
  HelpCircle,
  RotateCcw,
  Download,
  ShieldCheck,
  TrendingUp,
  Building,
  UserCheck,
  Percent,
  CheckSquare,
  AlertCircle,
  Send,
  Lock,
} from "lucide-react";

const STORAGE_KEY = "vs_finance_readiness_draft_v1";

export default function FinanceReadinessPage() {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [responses, setResponses] = useState<Record<string, string>>({});
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [evaluationResult, setEvaluationResult] = useState<ReadinessEvaluationResult | null>(null);
  const [savedAt, setSavedAt] = useState<string | null>(null);

  // Lead capture state
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactCompany, setContactCompany] = useState("");
  const [leadSaved, setLeadSaved] = useState(false);
  const [leadSubmitting, setLeadSubmitting] = useState(false);

  const categories: AssessmentCategoryDef[] = ASSESSMENT_CATEGORIES;
  const currentCategory = categories[currentCategoryIndex];

  // 1. Load draft from localStorage on mount (Autosave retrieval)
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.responses && Object.keys(parsed.responses).length > 0) {
          setResponses(parsed.responses);
          setSavedAt(parsed.savedAt || "Recently");
        }
      }
    } catch (e) {
      console.warn("Failed to load draft assessment from localStorage", e);
    }
  }, []);

  // 2. Save responses to localStorage on every change (Autosave)
  const handleAnswer = (questionKey: string, value: string) => {
    const updated = { ...responses, [questionKey]: value };
    setResponses(updated);
    const now = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    setSavedAt(now);
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ responses: updated, savedAt: now })
      );
    } catch (e) {
      console.warn("Failed to save draft assessment to localStorage", e);
    }
  };

  const handleClearDraft = () => {
    if (window.confirm("Are you sure you want to clear your current answers and start fresh?")) {
      setResponses({});
      setSavedAt(null);
      setCurrentCategoryIndex(0);
      setEvaluationResult(null);
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch (e) {}
    }
  };

  // Progress metrics
  const totalQuestionsCount = useMemo(() => {
    return categories.reduce((acc, cat) => acc + cat.questions.length, 0);
  }, [categories]);

  const answeredCount = useMemo(() => {
    return Object.keys(responses).length;
  }, [responses]);

  const overallProgressPercent = Math.round(
    (answeredCount / totalQuestionsCount) * 100
  );

  // Check if current category is completed
  const currentCategoryAnsweredCount = useMemo(() => {
    return currentCategory.questions.filter((q) => responses[q.questionKey] !== undefined)
      .length;
  }, [currentCategory, responses]);

  const isCurrentCategoryComplete =
    currentCategoryAnsweredCount === currentCategory.questions.length;

  // 3. Submit for Server-Side Scoring
  const handleEvaluate = async () => {
    setIsEvaluating(true);
    try {
      const res = await fetch("/api/finance-readiness/evaluate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ responses }),
      });

      const data = await res.json();
      if (data.success && data.evaluation) {
        setEvaluationResult(data.evaluation);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        alert("Evaluation failed: " + (data.error || "Please check your answers."));
      }
    } catch (err: any) {
      alert("Error contacting scoring server. Please check your internet connection.");
    } finally {
      setIsEvaluating(false);
    }
  };

  // 4. Save Lead / Contact Details
  const handleSaveLead = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !contactPhone) {
      alert("Please enter Name, Email, and Phone number.");
      return;
    }

    setLeadSubmitting(true);
    try {
      const res = await fetch("/api/finance-readiness/evaluate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          responses,
          saveLead: true,
          contactDetails: {
            name: contactName,
            email: contactEmail,
            phone: contactPhone,
            company: contactCompany,
          },
        }),
      });

      const data = await res.json();
      if (data.success) {
        setLeadSaved(true);
      }
    } catch (err) {
      console.warn("Lead save error", err);
    } finally {
      setLeadSubmitting(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-warm min-h-screen py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* =========================================================================
            HEADER & STATUTORY CLARIFICATION
        ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1 text-xs font-semibold text-gold-dark">
            <Award className="h-3.5 w-3.5 text-gold-dark" />
            <span>VS Finance Readiness Engine V1</span>
          </div>

          <h1 className="text-3xl font-serif font-bold text-navy-dark sm:text-5xl tracking-tight">
            Finance Readiness Assessment
          </h1>

          <p className="text-sm sm:text-base text-navy-700 leading-relaxed">
            Assess how prepared your enterprise is before presenting to commercial banks and lending institutions across 9 underwriting dimensions.
          </p>

          {/* Mandatory Non-Credit Score Notice */}
          <div className="mx-auto max-w-2xl rounded-2xl border border-amber-200/80 bg-amber-50/80 p-4 text-xs text-amber-900 flex items-start gap-3 text-left">
            <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-1 leading-relaxed">
              <strong>Statutory Disclosure:</strong> This diagnostic tool is an institutional preparation framework —{" "}
              <strong>it is not a credit score, sanction decision, or loan approval guarantee</strong>. Loan sanctions rest exclusively with individual lending financial institutions based on their independent risk criteria.
            </div>
          </div>
        </div>

        {/* =========================================================================
            DIAGNOSTIC QUESTIONNAIRE (IF NOT COMPLETED)
        ========================================================================= */}
        {!evaluationResult ? (
          <div className="rounded-3xl border border-navy-100 bg-white shadow-institutional p-6 sm:p-10 space-y-8">
            {/* Top Stepper Navigation & Autosave Badge */}
            <div className="space-y-4 border-b border-navy-100 pb-6">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy-dark">
                  <span>Category {currentCategoryIndex + 1} of {categories.length}:</span>
                  <span className="text-gold-dark">{currentCategory.name}</span>
                  <span className="rounded-full bg-navy-50 px-2 py-0.5 text-[10px] text-navy-600 font-bold border border-navy-100">
                    Weight: {Math.round(currentCategory.weight * 100)}%
                  </span>
                </div>

                <div className="flex items-center gap-4 text-xs text-navy-500">
                  {savedAt && (
                    <span className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 text-[11px] font-medium">
                      <CheckCircle2 className="h-3 w-3" />
                      <span>Draft Autosaved ({savedAt})</span>
                    </span>
                  )}
                  {answeredCount > 0 && (
                    <button
                      onClick={handleClearDraft}
                      className="text-navy-400 hover:text-red-600 transition-colors text-[11px] font-semibold flex items-center gap-1"
                    >
                      <RotateCcw className="h-3 w-3" />
                      <span>Start Fresh</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs text-navy-600 font-medium">
                  <span>Overall Diagnostic Progress</span>
                  <span>
                    {answeredCount} of {totalQuestionsCount} questions answered ({overallProgressPercent}%)
                  </span>
                </div>
                <div className="h-2 w-full rounded-full bg-navy-100/60 overflow-hidden">
                  <div
                    className="h-full bg-navy rounded-full transition-all duration-300"
                    style={{ width: `${overallProgressPercent}%` }}
                  />
                </div>
              </div>

              {/* Category Pills Slider */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none pt-2">
                {categories.map((cat, idx) => {
                  const isCurrent = idx === currentCategoryIndex;
                  const isPast = idx < currentCategoryIndex;
                  const isAnswered = cat.questions.every(
                    (q) => responses[q.questionKey] !== undefined
                  );

                  return (
                    <button
                      key={cat.id}
                      onClick={() => setCurrentCategoryIndex(idx)}
                      className={`shrink-0 inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-[11px] font-bold transition-all ${
                        isCurrent
                          ? "bg-navy text-white shadow-sm"
                          : isAnswered
                          ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                          : "bg-warm text-navy-600 hover:bg-navy-50"
                      }`}
                    >
                      <span>0{idx + 1}</span>
                      <span className="hidden md:inline">{cat.name}</span>
                      {isAnswered && (
                        <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Category Description */}
            <div className="rounded-2xl bg-warm-50/80 p-4 border border-navy-50 text-xs text-navy-700 leading-relaxed">
              <strong>Category Objective:</strong> {currentCategory.description}
            </div>

            {/* Category Questions List */}
            <div className="space-y-8">
              {currentCategory.questions.map((q, qIdx) => {
                const currentVal = responses[q.questionKey];

                return (
                  <div
                    key={q.id}
                    className="rounded-2xl border border-navy-100/80 bg-white p-6 space-y-4 hover:border-gold/40 transition-all shadow-sm"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-gold-dark">
                          Question 0{qIdx + 1}
                        </span>
                        <h3 className="text-sm sm:text-base font-bold text-navy-dark">
                          {q.questionText}
                        </h3>
                        {q.helpText && (
                          <p className="text-xs text-navy-500 leading-relaxed">
                            {q.helpText}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Radio Options Tile Grid */}
                    {q.options && q.options.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        {q.options.map((opt) => {
                          const isSelected = currentVal === opt.value;
                          return (
                            <button
                              key={opt.value}
                              type="button"
                              onClick={() => handleAnswer(q.questionKey, opt.value)}
                              className={`text-left rounded-xl p-4 border text-xs sm:text-sm font-medium transition-all flex items-start gap-3 ${
                                isSelected
                                  ? "border-navy bg-navy/5 text-navy-dark shadow-sm ring-1 ring-navy"
                                  : "border-navy-100 bg-white text-navy-700 hover:border-gold hover:bg-warm-50/50"
                              }`}
                            >
                              <div
                                className={`mt-0.5 h-4 w-4 rounded-full border flex items-center justify-center shrink-0 ${
                                  isSelected
                                    ? "border-navy bg-navy text-white"
                                    : "border-navy-300 bg-white"
                                }`}
                              >
                                {isSelected && (
                                  <div className="h-1.5 w-1.5 rounded-full bg-white" />
                                )}
                              </div>
                              <span className="leading-snug">{opt.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Stepper Buttons (Back / Next / Calculate) */}
            <div className="flex items-center justify-between border-t border-navy-100 pt-6 flex-wrap gap-4">
              <button
                type="button"
                disabled={currentCategoryIndex === 0}
                onClick={() => setCurrentCategoryIndex((prev) => Math.max(0, prev - 1))}
                className="inline-flex items-center gap-2 rounded-xl border border-navy-200 px-5 py-2.5 text-xs font-bold text-navy-700 hover:bg-navy-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                <span>Previous Category</span>
              </button>

              {currentCategoryIndex < categories.length - 1 ? (
                <button
                  type="button"
                  onClick={() =>
                    setCurrentCategoryIndex((prev) =>
                      Math.min(categories.length - 1, prev + 1)
                    )
                  }
                  className="inline-flex items-center gap-2 rounded-xl bg-navy px-6 py-2.5 text-xs font-bold text-white hover:bg-navy-light shadow-md shadow-navy/20 transition-all"
                >
                  <span>Next Category</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              ) : (
                <button
                  type="button"
                  disabled={isEvaluating}
                  onClick={handleEvaluate}
                  className="inline-flex items-center gap-2 rounded-xl bg-gold px-8 py-3 text-xs sm:text-sm font-bold text-navy-dark hover:bg-gold-hover shadow-lg shadow-gold/20 hover:scale-[1.02] transition-all disabled:opacity-50"
                >
                  {isEvaluating ? (
                    <span>Evaluating Server-Side Score...</span>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4" />
                      <span>Generate Full Readiness Diagnostic</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        ) : (
          /* =========================================================================
              COMPREHENSIVE RESULT DASHBOARD
          ========================================================================= */
          <div className="space-y-12">
            {/* Action Bar (Print / Retake) */}
            <div className="flex items-center justify-between flex-wrap gap-4 bg-white p-4 rounded-2xl border border-navy-100 shadow-sm print:hidden">
              <div className="text-xs text-navy-600">
                Diagnostic generated on <strong>{new Date().toLocaleDateString()}</strong> &bull; Guest Evaluation
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-navy-200 bg-white px-3.5 py-2 text-xs font-bold text-navy-700 hover:bg-navy-50 transition-all"
                >
                  <Printer className="h-3.5 w-3.5 text-navy-500" />
                  <span>Print Report</span>
                </button>
                <button
                  onClick={() => setEvaluationResult(null)}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-navy px-4 py-2 text-xs font-bold text-white hover:bg-navy-light transition-all"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  <span>Revise Answers</span>
                </button>
              </div>
            </div>

            {/* Score Overview Card */}
            <div className="rounded-3xl border border-navy-100 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-850 p-8 sm:p-12 text-white shadow-institutional">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Score Gauge Ring */}
                <div className="lg:col-span-4 flex flex-col items-center justify-center text-center space-y-3">
                  <div className="relative flex h-40 w-40 items-center justify-center rounded-full border-8 border-white/10 bg-white/5">
                    <div className="text-center">
                      <div className="text-5xl font-serif font-extrabold text-gold tracking-tight">
                        {evaluationResult.overallScore}
                      </div>
                      <div className="text-[11px] font-semibold text-navy-200 uppercase tracking-wider">
                        Out of 100
                      </div>
                    </div>
                  </div>
                  <span
                    className={`rounded-full px-3.5 py-1 text-xs font-bold border ${evaluationResult.badgeColor}`}
                  >
                    {evaluationResult.bandLabel}
                  </span>
                </div>

                {/* Score Meaning & Guidance */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-gold">
                    Institutional Appraisal Analysis
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                    {evaluationResult.bandLabel} Assessment
                  </h2>
                  <p className="text-sm sm:text-base text-navy-100 leading-relaxed">
                    {evaluationResult.bandDescription}
                  </p>
                  <div className="pt-2 flex items-center gap-6 text-xs text-navy-300">
                    <div>
                      <strong>9</strong> Underwriting Categories
                    </div>
                    <div>&bull;</div>
                    <div>
                      <strong>{evaluationResult.strengths.length}</strong> Strengths Identified
                    </div>
                    <div>&bull;</div>
                    <div>
                      <strong>{evaluationResult.missingItems.length}</strong> Action Gaps
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 9 Category Score Breakdown */}
            <div className="rounded-3xl border border-navy-100 bg-white p-8 sm:p-10 shadow-sm space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-dark">
                  Component Analysis
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-navy-dark">
                  Readiness by Underwriting Category
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {evaluationResult.categoryScores.map((cat, idx) => (
                  <div
                    key={cat.categorySlug}
                    className="rounded-2xl border border-navy-100 bg-warm-50/50 p-5 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-navy-dark">
                        {cat.categoryName}
                      </span>
                      <span
                        className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                          cat.status === "Strong"
                            ? "bg-emerald-100 text-emerald-800"
                            : cat.status === "Acceptable"
                            ? "bg-blue-100 text-navy-800"
                            : "bg-amber-100 text-amber-800"
                        }`}
                      >
                        {cat.status}
                      </span>
                    </div>

                    <div className="flex items-baseline justify-between text-xs">
                      <span className="text-2xl font-bold text-navy">
                        {cat.rawScore}%
                      </span>
                      <span className="text-navy-500 text-[11px]">
                        Contributes {cat.weightedScore} / {cat.maxWeightContribution} pts
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-1.5 w-full rounded-full bg-navy-100 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          cat.rawScore >= 75
                            ? "bg-emerald-600"
                            : cat.rawScore >= 50
                            ? "bg-navy"
                            : "bg-amber-500"
                        }`}
                        style={{ width: `${cat.rawScore}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Strengths, Weaknesses & Missing Items Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Identified Strengths */}
              <div className="rounded-3xl border border-emerald-100 bg-white p-6 sm:p-7 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                  <span>Demonstrated Strengths ({evaluationResult.strengths.length})</span>
                </div>
                <ul className="space-y-2.5 text-xs text-navy-700">
                  {evaluationResult.strengths.length > 0 ? (
                    evaluationResult.strengths.map((str, idx) => (
                      <li key={idx} className="flex items-start gap-2 bg-emerald-50/50 p-2.5 rounded-xl border border-emerald-100/60">
                        <span className="text-emerald-600 font-bold mt-0.5">•</span>
                        <span>{str}</span>
                      </li>
                    ))
                  ) : (
                    <li className="text-navy-500 italic">No significant strengths recorded.</li>
                  )}
                </ul>
              </div>

              {/* Identified Weaknesses */}
              <div className="rounded-3xl border border-amber-100 bg-white p-6 sm:p-7 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-amber-800 font-bold text-sm">
                  <AlertTriangle className="h-5 w-5 text-amber-600" />
                  <span>Vulnerability Areas ({evaluationResult.weaknesses.length})</span>
                </div>
                <ul className="space-y-2.5 text-xs text-navy-700">
                  {evaluationResult.weaknesses.length > 0 ? (
                    evaluationResult.weaknesses.map((wk, idx) => (
                      <li key={idx} className="flex items-start gap-2 bg-amber-50/50 p-2.5 rounded-xl border border-amber-100/60">
                        <span className="text-amber-600 font-bold mt-0.5">•</span>
                        <span>{wk}</span>
                      </li>
                    ))
                  ) : (
                    <li className="text-navy-500 italic">No major vulnerabilities identified.</li>
                  )}
                </ul>
              </div>

              {/* Missing Items Alert */}
              <div className="rounded-3xl border border-red-100 bg-white p-6 sm:p-7 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-red-800 font-bold text-sm">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                  <span>Missing Action Items ({evaluationResult.missingItems.length})</span>
                </div>
                <ul className="space-y-2 text-xs text-navy-700">
                  {evaluationResult.missingItems.length > 0 ? (
                    evaluationResult.missingItems.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 bg-red-50/50 p-2.5 rounded-xl border border-red-100/60 font-medium text-red-900">
                        <span className="text-red-500 font-bold mt-0.5">✕</span>
                        <span>{item}</span>
                      </li>
                    ))
                  ) : (
                    <li className="text-emerald-700 font-medium">All mandatory statutory items present.</li>
                  )}
                </ul>
              </div>
            </div>

            {/* Actionable Strategic Roadmap */}
            <div className="rounded-3xl border border-navy-100 bg-white p-8 sm:p-10 shadow-sm space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-dark">
                  Enhancement Roadmap
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-navy-dark">
                  Recommended Actions to Improve Credit Standing
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {evaluationResult.recommendedActions.map((action) => (
                  <div
                    key={action.step}
                    className="rounded-2xl border border-navy-100 bg-warm-50 p-6 space-y-2 flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-navy text-white text-xs font-bold">
                          0{action.step}
                        </span>
                        <span
                          className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                            action.priority === "High"
                              ? "bg-red-100 text-red-800"
                              : action.priority === "Medium"
                              ? "bg-amber-100 text-amber-800"
                              : "bg-blue-100 text-navy-800"
                          }`}
                        >
                          {action.priority} Priority
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-navy-dark">
                        {action.title}
                      </h4>
                      <p className="text-xs text-navy-600 leading-relaxed">
                        {action.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Suggested VS Advisory Services */}
            <div className="rounded-3xl border border-navy-100 bg-white p-8 sm:p-10 shadow-sm space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-dark">
                  Targeted Advisory
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-navy-dark">
                  Suggested VS Advisory Solutions
                </h3>
                <p className="text-xs sm:text-sm text-navy-600">
                  Services directly address the documentation and financial gaps flagged in your assessment.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {evaluationResult.suggestedServices.map((svc) => (
                  <div
                    key={svc.slug}
                    className="rounded-2xl border border-navy-100 bg-white p-5 shadow-sm hover:border-gold transition-all flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-2">
                      <span className="rounded-full bg-gold/15 px-2 py-0.5 text-[10px] font-bold text-gold-dark">
                        {svc.badge}
                      </span>
                      <h4 className="text-base font-bold text-navy-dark">
                        {svc.title}
                      </h4>
                      <p className="text-xs text-navy-600 leading-relaxed">
                        {svc.summary}
                      </p>
                    </div>
                    <Link
                      href={`/services/${svc.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-navy hover:text-gold transition-colors pt-2 border-t border-navy-50"
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Tailored Document Checklist */}
            <div className="rounded-3xl border border-navy-100 bg-white p-8 sm:p-10 shadow-sm space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-gold-dark">
                    Lender Verification Dossier
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-navy-dark">
                    Tailored Document Checklist
                  </h3>
                </div>
                <button
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-navy-200 bg-warm px-3.5 py-2 text-xs font-bold text-navy-700 hover:bg-navy-50"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Download Checklist</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {evaluationResult.documentChecklist.map((cat, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-navy-100 bg-warm-50/50 p-6 space-y-3"
                  >
                    <h4 className="text-sm font-bold text-navy-dark pb-2 border-b border-navy-100">
                      {cat.category}
                    </h4>
                    <ul className="space-y-2 text-xs text-navy-700">
                      {cat.items.map((item, iIdx) => (
                        <li key={iIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-gold-dark shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Optional Lead Capture / Save Results Form */}
            <div className="rounded-3xl border border-gold/40 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-850 p-8 sm:p-12 text-white shadow-institutional print:hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-gold">
                    Save Your Assessment
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                    Receive Your Detailed Diagnostic Report
                  </h3>
                  <p className="text-xs sm:text-sm text-navy-200 leading-relaxed">
                    Provide your contact details to save this assessment to your profile, receive a PDF copy via email, or request a complimentary 15-minute credit analyst consultation.
                  </p>
                </div>

                <div className="lg:col-span-6">
                  {leadSaved ? (
                    <div className="rounded-2xl bg-white/10 p-6 text-center space-y-3 border border-emerald-400/40">
                      <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-400" />
                      <h4 className="text-base font-bold text-white">
                        Assessment Saved Successfully!
                      </h4>
                      <p className="text-xs text-navy-200">
                        Our advisory team will review your diagnostic and reach out with tailored next steps.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSaveLead} className="space-y-3">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <input
                          type="text"
                          required
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                          placeholder="Your Full Name *"
                          className="rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-xs text-white placeholder:text-navy-300 focus:outline-none focus:border-gold"
                        />
                        <input
                          type="email"
                          required
                          value={contactEmail}
                          onChange={(e) => setContactEmail(e.target.value)}
                          placeholder="Business Email *"
                          className="rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-xs text-white placeholder:text-navy-300 focus:outline-none focus:border-gold"
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <input
                          type="tel"
                          required
                          value={contactPhone}
                          onChange={(e) => setContactPhone(e.target.value)}
                          placeholder="Mobile / WhatsApp *"
                          className="rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-xs text-white placeholder:text-navy-300 focus:outline-none focus:border-gold"
                        />
                        <input
                          type="text"
                          value={contactCompany}
                          onChange={(e) => setContactCompany(e.target.value)}
                          placeholder="Enterprise / Entity Name"
                          className="rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-xs text-white placeholder:text-navy-300 focus:outline-none focus:border-gold"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={leadSubmitting}
                        className="w-full rounded-xl bg-gold py-3 text-xs sm:text-sm font-bold text-navy-dark hover:bg-gold-hover transition-all flex items-center justify-center gap-2"
                      >
                        {leadSubmitting ? (
                          <span>Submitting...</span>
                        ) : (
                          <>
                            <Send className="h-3.5 w-3.5" />
                            <span>Save Assessment & Request Advisory</span>
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>

            {/* Mandatory Regulatory Disclaimer */}
            <div className="pt-2">
              <RegulatoryDisclaimerBanner type="warning" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
