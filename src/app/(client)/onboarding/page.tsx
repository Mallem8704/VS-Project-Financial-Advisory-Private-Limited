"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  User,
  Building2,
  Briefcase,
  Factory,
  Layers,
  Sparkles,
  Coins,
  IndianRupee,
  FileCheck2,
  TrendingUp,
  Files,
  HelpCircle,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  Save,
  RotateCcw,
  ShieldCheck,
  Check,
  Clock,
  ExternalLink,
} from "lucide-react";
import { OnboardingPayload, GeneratedTask } from "@/lib/onboarding/types";

const LOCAL_STORAGE_KEY = "vs_onboarding_draft_v1";

const TOTAL_STEPS = 12;

const STEP_TITLES = [
  "Promoter Details",
  "Business Details",
  "Entity Constitution",
  "Industry Sector",
  "Business Status",
  "Project Type",
  "Project Cost",
  "Finance Requirement",
  "Current Registrations",
  "Financial Track Record",
  "Document Readiness",
  "Advisory Scope & Consent",
];

const INDUSTRIES_LIST = [
  { slug: "rice-mills", label: "Rice Mills" },
  { slug: "oil-mills", label: "Oil Mills" },
  { slug: "hospitals", label: "Hospitals & Healthcare" },
  { slug: "schools", label: "Schools & Educational Institutes" },
  { slug: "hotels-resorts", label: "Hotels & Resorts" },
  { slug: "restaurants", label: "Restaurants & Food Outlets" },
  { slug: "manufacturing-units", label: "Manufacturing & Heavy Engineering" },
  { slug: "solar-projects", label: "Solar & Renewable Projects" },
  { slug: "ev-charging-stations", label: "EV Charging Stations" },
  { slug: "warehouses", label: "Warehouses & Logistics" },
  { slug: "commercial-buildings", label: "Commercial Real Estate" },
  { slug: "agriculture-projects", label: "Agriculture & Agro-Processing" },
  { slug: "poultry", label: "Poultry Farming" },
  { slug: "dairy-farms", label: "Dairy Farms & Milk Processing" },
  { slug: "cold-storage", label: "Cold Storage" },
  { slug: "textile-units", label: "Textile & Garment Units" },
  { slug: "auto-dealerships", label: "Auto Dealerships" },
  { slug: "indoor-play-zones", label: "Indoor Play Zones & Entertainment" },
  { slug: "other", label: "Other Specialized Industry" },
];

const DEFAULT_STATE: OnboardingPayload = {
  promoter: {
    fullName: "",
    email: "",
    phone: "",
    designation: "Managing Director",
    netWorthBracket: "1_TO_5_CR",
  },
  business: {
    legalName: "",
    city: "",
    state: "",
    establishmentYear: "2021",
    activityDescription: "",
  },
  constitution: "PRIVATE_LIMITED",
  industry: "Rice Mills",
  businessStatus: "EXISTING_RUNNING",
  projectType: "EXPANSION",
  projectCostInLakhs: 500,
  costBreakdown: {
    landAndCivilInLakhs: 150,
    plantAndMachineryInLakhs: 250,
    contingencyInLakhs: 25,
    workingCapitalMarginInLakhs: 75,
  },
  financeRequirementInLakhs: 375,
  promoterContributionInLakhs: 125,
  preferredFacilities: ["Term Loan", "Cash Credit"],
  registrations: ["GST Registration", "Udyam MSME"],
  financials: {
    annualTurnoverInLakhs: 850,
    profitMarginBand: "5_TO_10_PERCENT",
    existingDebtInLakhs: 120,
    primaryBank: "State Bank of India",
  },
  documentReadiness: {
    audited_financials: "AVAILABLE",
    bank_statements: "AVAILABLE",
    machinery_quotations: "IN_PROGRESS",
    land_title_deeds: "AVAILABLE",
    promoter_kyc: "AVAILABLE",
  },
  advisoryServices: ["DPR", "CMA", "PROJECT_FINANCE"],
  notes: "",
  consentGiven: true,
};

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<OnboardingPayload>(DEFAULT_STATE);
  const [isSaving, setIsSaving] = useState(false);
  const [lastSavedTime, setLastSavedTime] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [completedResult, setCompletedResult] = useState<{
    projectId: string;
    projectTitle: string;
    tasks: GeneratedTask[];
    summary: any;
  } | null>(null);

  // Load draft on initial mount
  useEffect(() => {
    try {
      const savedDraft = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (savedDraft) {
        const parsed = JSON.parse(savedDraft);
        if (parsed.data) {
          setFormData((prev) => ({ ...prev, ...parsed.data }));
          if (parsed.step) setCurrentStep(parsed.step);
          if (parsed.savedAt) setLastSavedTime(new Date(parsed.savedAt).toLocaleTimeString());
        }
      }
    } catch {
      // Ignore parse error
    }
  }, []);

  // Save to localStorage
  const saveDraft = useCallback(
    (data: OnboardingPayload, step: number) => {
      setIsSaving(true);
      try {
        const now = new Date();
        localStorage.setItem(
          LOCAL_STORAGE_KEY,
          JSON.stringify({
            data,
            step,
            savedAt: now.toISOString(),
          })
        );
        setLastSavedTime(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" }));
      } catch (err) {
        console.warn("Failed to persist draft to localStorage:", err);
      } finally {
        setTimeout(() => setIsSaving(false), 300);
      }
    },
    []
  );

  const updateFormData = (updater: (prev: OnboardingPayload) => OnboardingPayload) => {
    setFormData((prev) => {
      const updated = updater(prev);
      saveDraft(updated, currentStep);
      return updated;
    });
  };

  const handleNext = () => {
    setSubmitError(null);
    if (currentStep < TOTAL_STEPS) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      saveDraft(formData, nextStep);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    setSubmitError(null);
    if (currentStep > 1) {
      const prevStep = currentStep - 1;
      setCurrentStep(prevStep);
      saveDraft(formData, prevStep);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleResetDraft = () => {
    if (confirm("Are you sure you want to reset and start a fresh onboarding application?")) {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
      setFormData(DEFAULT_STATE);
      setCurrentStep(1);
      setLastSavedTime(null);
      setSubmitError(null);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch("/api/onboarding/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        setSubmitError(data.error || "Failed to complete onboarding. Please verify your inputs.");
        setIsSubmitting(false);
        return;
      }

      // Clear local storage upon successful completion
      localStorage.removeItem(LOCAL_STORAGE_KEY);
      setCompletedResult({
        projectId: data.projectId,
        projectTitle: data.projectTitle,
        tasks: data.tasks,
        summary: data.summary,
      });
    } catch (err: any) {
      setSubmitError(err.message || "Network error submitting onboarding application.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const progressPercent = Math.round((currentStep / TOTAL_STEPS) * 100);

  // If completed, render celebratory checklist summary screen
  if (completedResult) {
    return (
      <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-8">
          {/* Header Banner */}
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-6 sm:p-8 text-center space-y-3">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-md">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-navy-dark">
              Client Onboarding Completed & Mandate Initialized
            </h1>
            <p className="text-sm text-navy-600 max-w-2xl mx-auto">
              Your institutional advisory mandate has been configured. Our credit appraisal and financial engineering team will review your parameters and begin preliminary structuring.
            </p>
          </div>

          {/* Project Summary Card */}
          <div className="rounded-2xl border border-navy-100 bg-white p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-navy-100 pb-4">
              <div>
                <span className="inline-block rounded-full bg-navy/10 px-3 py-1 text-xs font-semibold text-navy">
                  Active Mandate
                </span>
                <h2 className="mt-1 text-xl font-bold text-navy-dark">{completedResult.projectTitle}</h2>
              </div>
              <div className="text-right">
                <p className="text-xs text-navy-500">Project ID</p>
                <p className="font-mono text-xs font-semibold text-navy-dark">{completedResult.projectId}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="rounded-xl bg-slate-50 p-4 border border-navy-50">
                <p className="text-xs text-navy-500">Enterprise</p>
                <p className="text-sm font-semibold text-navy-dark mt-1 truncate">{completedResult.summary.legalName}</p>
              </div>
              <div className="rounded-xl bg-slate-50 p-4 border border-navy-50">
                <p className="text-xs text-navy-500">Project Capex</p>
                <p className="text-sm font-semibold text-navy-dark mt-1">₹{completedResult.summary.projectCostInLakhs} L</p>
              </div>
              <div className="rounded-xl bg-slate-50 p-4 border border-navy-50">
                <p className="text-xs text-navy-500">Debt Requirement</p>
                <p className="text-sm font-semibold text-emerald-700 mt-1">₹{completedResult.summary.financeRequirementInLakhs} L</p>
              </div>
              <div className="rounded-xl bg-slate-50 p-4 border border-navy-50">
                <p className="text-xs text-navy-500">Current Stage</p>
                <p className="text-sm font-semibold text-gold-dark mt-1">Stage 1: Onboarding</p>
              </div>
            </div>
          </div>

          {/* Initial Task Checklist */}
          <div className="rounded-2xl border border-navy-100 bg-white p-6 sm:p-8 shadow-sm space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-navy-dark">Initial Action Checklist</h3>
                <p className="text-xs text-navy-500 mt-0.5">
                  Generated based on your project parameters, industry norms, and required advisory deliverables.
                </p>
              </div>
              <span className="rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold text-gold-dark">
                {completedResult.tasks.length} Action Items
              </span>
            </div>

            <div className="space-y-3">
              {completedResult.tasks.map((task, idx) => (
                <div
                  key={idx}
                  className="flex items-start justify-between gap-4 rounded-xl border border-navy-100 bg-slate-50/70 p-4 transition-all hover:bg-slate-50 hover:border-navy-200"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-navy/10 text-xs font-bold text-navy">
                        {idx + 1}
                      </span>
                      <h4 className="text-sm font-semibold text-navy-dark">{task.title}</h4>
                      <span
                        className={`rounded px-1.5 py-0.5 text-[10px] font-semibold uppercase ${
                          task.priority === "URGENT"
                            ? "bg-rose-100 text-rose-800"
                            : task.priority === "HIGH"
                            ? "bg-amber-100 text-amber-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {task.priority}
                      </span>
                    </div>
                    <p className="text-xs text-navy-600 pl-7">{task.description}</p>
                  </div>
                  <div className="text-right whitespace-nowrap text-xs text-navy-500 flex items-center gap-1 mt-0.5">
                    <Clock className="h-3.5 w-3.5 text-navy-400" />
                    <span>Due in {task.suggestedDueDays} days</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA to Enter Client Dashboard */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-navy to-navy-dark p-6 sm:p-8 text-white shadow-lg">
            <div>
              <h3 className="text-lg font-bold text-white">Ready to Track Your Mandate?</h3>
              <p className="text-xs text-navy-200 mt-1">
                Access your secure portal to upload documents, review DPR/CMA drafts, and converse with your assigned advisor.
              </p>
            </div>
            <Link
              href="/portal/dashboard"
              className="inline-flex items-center gap-2 rounded-xl bg-gold hover:bg-gold-dark text-navy-dark font-semibold px-6 py-3 text-sm transition-all shadow-md whitespace-nowrap"
            >
              <span>Enter Client Dashboard</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl space-y-6">
        {/* Top Header & Save Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-navy-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy text-gold shadow-sm font-bold">
              VS
            </div>
            <div>
              <h1 className="text-lg font-bold text-navy-dark">Client Onboarding Wizard</h1>
              <p className="text-xs text-navy-500">Institutional Mandate Setup</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs">
            {isSaving ? (
              <span className="flex items-center gap-1.5 text-navy-500">
                <Save className="h-3.5 w-3.5 animate-spin text-gold" />
                <span>Saving draft...</span>
              </span>
            ) : lastSavedTime ? (
              <span className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                <Check className="h-3 w-3" />
                <span>Saved at {lastSavedTime}</span>
              </span>
            ) : null}

            <button
              onClick={handleResetDraft}
              type="button"
              className="flex items-center gap-1 text-navy-400 hover:text-rose-600 transition-colors"
              title="Clear draft and start fresh"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* Visual Progress Bar */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-semibold text-navy-600">
            <span>
              STEP {currentStep} OF {TOTAL_STEPS}:{" "}
              <strong className="text-navy-dark">{STEP_TITLES[currentStep - 1]}</strong>
            </span>
            <span className="font-mono text-gold-dark">{progressPercent}% Completed</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
            <div
              className="h-full bg-gradient-to-r from-navy via-navy-light to-gold transition-all duration-300 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* Clickable Step Pills */}
          <div className="hidden sm:flex items-center justify-between pt-1 text-[11px] text-navy-400">
            {STEP_TITLES.map((title, idx) => {
              const stepNum = idx + 1;
              const isPast = stepNum < currentStep;
              const isCurr = stepNum === currentStep;
              return (
                <button
                  key={idx}
                  onClick={() => isPast && setCurrentStep(stepNum)}
                  disabled={!isPast}
                  type="button"
                  className={`transition-colors truncate max-w-[65px] ${
                    isCurr
                      ? "font-bold text-navy-dark"
                      : isPast
                      ? "text-navy hover:text-gold cursor-pointer"
                      : "text-slate-300 cursor-not-allowed"
                  }`}
                  title={`Step ${stepNum}: ${title}`}
                >
                  {stepNum}. {title.split(" ")[0]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Wizard Card Container */}
        <div className="rounded-2xl border border-navy-100 bg-white p-6 sm:p-8 shadow-institutional space-y-6">
          {submitError && (
            <div className="rounded-xl bg-rose-50 border border-rose-200 p-4 text-xs text-rose-800 flex items-start gap-2.5">
              <AlertCircle className="h-4 w-4 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Unable to proceed</p>
                <p className="mt-0.5">{submitError}</p>
              </div>
            </div>
          )}

          {/* STEP 1: Personal / Promoter Details */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <div className="border-b border-navy-50 pb-3">
                <h2 className="text-base font-bold text-navy-dark flex items-center gap-2">
                  <User className="h-5 w-5 text-gold" />
                  <span>Step 1: Personal / Promoter Details</span>
                </h2>
                <p className="text-xs text-navy-500 mt-1">
                  Primary promoter or authorized signatory representing the borrowing entity.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-navy-700">Full Legal Name *</label>
                  <input
                    type="text"
                    value={formData.promoter.fullName}
                    onChange={(e) =>
                      updateFormData((prev) => ({
                        ...prev,
                        promoter: { ...prev.promoter, fullName: e.target.value },
                      }))
                    }
                    placeholder="e.g. Ramesh Chandra Gupta"
                    className="w-full rounded-lg border border-navy-200 px-3.5 py-2 text-sm focus:border-navy focus:ring-1 focus:ring-navy outline-none"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-navy-700">Official Email *</label>
                  <input
                    type="email"
                    value={formData.promoter.email}
                    onChange={(e) =>
                      updateFormData((prev) => ({
                        ...prev,
                        promoter: { ...prev.promoter, email: e.target.value },
                      }))
                    }
                    placeholder="e.g. ramesh@apexagro.com"
                    className="w-full rounded-lg border border-navy-200 px-3.5 py-2 text-sm focus:border-navy focus:ring-1 focus:ring-navy outline-none"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-navy-700">Mobile Number *</label>
                  <input
                    type="tel"
                    value={formData.promoter.phone}
                    onChange={(e) =>
                      updateFormData((prev) => ({
                        ...prev,
                        promoter: { ...prev.promoter, phone: e.target.value },
                      }))
                    }
                    placeholder="e.g. +91 98765 43210"
                    className="w-full rounded-lg border border-navy-200 px-3.5 py-2 text-sm focus:border-navy focus:ring-1 focus:ring-navy outline-none"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-navy-700">Promoter Designation *</label>
                  <input
                    type="text"
                    value={formData.promoter.designation}
                    onChange={(e) =>
                      updateFormData((prev) => ({
                        ...prev,
                        promoter: { ...prev.promoter, designation: e.target.value },
                      }))
                    }
                    placeholder="e.g. Managing Director / Partner / Founder"
                    className="w-full rounded-lg border border-navy-200 px-3.5 py-2 text-sm focus:border-navy focus:ring-1 focus:ring-navy outline-none"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1 pt-2">
                <label className="text-xs font-semibold text-navy-700">
                  Promoter Net Worth Bracket (Indicative for Bank Underwriting) *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { key: "BELOW_1_CR", label: "Below ₹1 Crore" },
                    { key: "1_TO_5_CR", label: "₹1 Cr – ₹5 Cr" },
                    { key: "5_TO_10_CR", label: "₹5 Cr – ₹10 Cr" },
                    { key: "10_TO_25_CR", label: "₹10 Cr – ₹25 Cr" },
                    { key: "ABOVE_25_CR", label: "Above ₹25 Crore" },
                  ].map((bracket) => (
                    <button
                      key={bracket.key}
                      type="button"
                      onClick={() =>
                        updateFormData((prev) => ({
                          ...prev,
                          promoter: { ...prev.promoter, netWorthBracket: bracket.key as any },
                        }))
                      }
                      className={`rounded-lg border p-2.5 text-xs text-left transition-all ${
                        formData.promoter.netWorthBracket === bracket.key
                          ? "border-navy bg-navy/5 font-semibold text-navy-dark shadow-sm"
                          : "border-navy-100 bg-white text-navy-600 hover:bg-slate-50"
                      }`}
                    >
                      {bracket.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Business Details */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <div className="border-b border-navy-50 pb-3">
                <h2 className="text-base font-bold text-navy-dark flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-gold" />
                  <span>Step 2: Business Details</span>
                </h2>
                <p className="text-xs text-navy-500 mt-1">
                  Core enterprise identity and principal operating location.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1 sm:col-span-2">
                  <label className="text-xs font-semibold text-navy-700">Legal or Proposed Entity Name *</label>
                  <input
                    type="text"
                    value={formData.business.legalName}
                    onChange={(e) =>
                      updateFormData((prev) => ({
                        ...prev,
                        business: { ...prev.business, legalName: e.target.value },
                      }))
                    }
                    placeholder="e.g. Apex Precision Agro & Engineering Pvt Ltd"
                    className="w-full rounded-lg border border-navy-200 px-3.5 py-2 text-sm focus:border-navy focus:ring-1 focus:ring-navy outline-none"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-navy-700">Operating City / Industrial Area *</label>
                  <input
                    type="text"
                    value={formData.business.city}
                    onChange={(e) =>
                      updateFormData((prev) => ({
                        ...prev,
                        business: { ...prev.business, city: e.target.value },
                      }))
                    }
                    placeholder="e.g. Hyderabad / Mallapur IDA"
                    className="w-full rounded-lg border border-navy-200 px-3.5 py-2 text-sm focus:border-navy focus:ring-1 focus:ring-navy outline-none"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-navy-700">State / UT *</label>
                  <input
                    type="text"
                    value={formData.business.state}
                    onChange={(e) =>
                      updateFormData((prev) => ({
                        ...prev,
                        business: { ...prev.business, state: e.target.value },
                      }))
                    }
                    placeholder="e.g. Telangana"
                    className="w-full rounded-lg border border-navy-200 px-3.5 py-2 text-sm focus:border-navy focus:ring-1 focus:ring-navy outline-none"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-navy-700">Establishment Year *</label>
                  <input
                    type="text"
                    value={formData.business.establishmentYear}
                    onChange={(e) =>
                      updateFormData((prev) => ({
                        ...prev,
                        business: { ...prev.business, establishmentYear: e.target.value },
                      }))
                    }
                    placeholder="e.g. 2018 or 'Proposed / 2026'"
                    className="w-full rounded-lg border border-navy-200 px-3.5 py-2 text-sm focus:border-navy focus:ring-1 focus:ring-navy outline-none"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1 pt-2">
                <label className="text-xs font-semibold text-navy-700">Primary Business Activities Summary *</label>
                <textarea
                  rows={3}
                  value={formData.business.activityDescription}
                  onChange={(e) =>
                    updateFormData((prev) => ({
                      ...prev,
                      business: { ...prev.business, activityDescription: e.target.value },
                    }))
                  }
                  placeholder="Briefly describe manufacturing, trading, or service operations (e.g. 25 TPH automated paddy processing, raw material procurement from farmer groups, and wholesale supply across Telangana and Andhra Pradesh)."
                  className="w-full rounded-lg border border-navy-200 p-3 text-sm focus:border-navy focus:ring-1 focus:ring-navy outline-none"
                  required
                />
              </div>
            </div>
          )}

          {/* STEP 3: Business Entity */}
          {currentStep === 3 && (
            <div className="space-y-4">
              <div className="border-b border-navy-50 pb-3">
                <h2 className="text-base font-bold text-navy-dark flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-gold" />
                  <span>Step 3: Business Entity Constitution</span>
                </h2>
                <p className="text-xs text-navy-500 mt-1">
                  Legal form of organization determines corporate borrowing capacity, documentation, and statutory compliance.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { key: "PRIVATE_LIMITED", title: "Private Limited Company", desc: "Preferred by commercial banks for medium and large project loans." },
                  { key: "LLP", title: "Limited Liability Partnership (LLP)", desc: "Corporate body with limited liability protection and flexible governance." },
                  { key: "PARTNERSHIP", title: "Partnership Firm", desc: "Registered partnership under Indian Partnership Act." },
                  { key: "PROPRIETORSHIP", title: "Sole Proprietorship", desc: "Individual owner; best suited for MSME facilities up to ₹2 Cr." },
                  { key: "PUBLIC_LIMITED", title: "Public Limited Company", desc: "For large industrial setups with multiple equity holders." },
                  { key: "TRUST_SOCIETY", title: "Trust / Society / Section 8", desc: "For hospitals, educational institutions, and non-profits." },
                  { key: "PROPOSED_NEW", title: "Proposed New Entity", desc: "Yet to be incorporated; VS Advisory will assist in constitution selection." },
                ].map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => updateFormData((prev) => ({ ...prev, constitution: item.key as any }))}
                    className={`rounded-xl border p-4 text-left transition-all ${
                      formData.constitution === item.key
                        ? "border-navy bg-navy/5 ring-1 ring-navy shadow-sm"
                        : "border-navy-100 bg-white hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-navy-dark">{item.title}</h3>
                      {formData.constitution === item.key && <CheckCircle2 className="h-4 w-4 text-navy" />}
                    </div>
                    <p className="text-xs text-navy-600 mt-1">{item.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 4: Industry */}
          {currentStep === 4 && (
            <div className="space-y-4">
              <div className="border-b border-navy-50 pb-3">
                <h2 className="text-base font-bold text-navy-dark flex items-center gap-2">
                  <Factory className="h-5 w-5 text-gold" />
                  <span>Step 4: Industry Sector</span>
                </h2>
                <p className="text-xs text-navy-500 mt-1">
                  Select your primary sector to auto-align benchmark cost heads, debt-equity ratios, and government schemes.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-[360px] overflow-y-auto pr-1">
                {INDUSTRIES_LIST.map((ind) => (
                  <button
                    key={ind.slug}
                    type="button"
                    onClick={() => updateFormData((prev) => ({ ...prev, industry: ind.label }))}
                    className={`rounded-xl border p-3 text-left transition-all ${
                      formData.industry === ind.label
                        ? "border-navy bg-navy text-white font-semibold shadow-sm"
                        : "border-navy-100 bg-white text-navy-700 hover:bg-slate-50"
                    }`}
                  >
                    <p className="text-xs leading-snug">{ind.label}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 5: Existing or Proposed Business */}
          {currentStep === 5 && (
            <div className="space-y-4">
              <div className="border-b border-navy-50 pb-3">
                <h2 className="text-base font-bold text-navy-dark flex items-center gap-2">
                  <Layers className="h-5 w-5 text-gold" />
                  <span>Step 5: Business Status</span>
                </h2>
                <p className="text-xs text-navy-500 mt-1">
                  Indicate whether the project is rooted in an active track record or is a new venture.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  {
                    key: "EXISTING_RUNNING",
                    title: "Existing Running Business",
                    desc: "Has audited track record of operations; seeking expansion, technological upgrade or working capital enhancement.",
                  },
                  {
                    key: "GREENFIELD_PROPOSED",
                    title: "Greenfield / Proposed Setup",
                    desc: "New venture starting from ground zero. Financial appraisal relies heavily on technical feasibility and promoter strength.",
                  },
                  {
                    key: "BROWNFIELD_ACQUISITION",
                    title: "Brownfield / Acquisition",
                    desc: "Taking over, reviving, or modernizing an existing industrial unit or stressed asset.",
                  },
                ].map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => updateFormData((prev) => ({ ...prev, businessStatus: item.key as any }))}
                    className={`rounded-xl border p-4 text-left transition-all ${
                      formData.businessStatus === item.key
                        ? "border-navy bg-navy/5 ring-1 ring-navy font-semibold text-navy-dark shadow-sm"
                        : "border-navy-100 bg-white text-navy-600 hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-navy-dark">{item.title}</h3>
                      {formData.businessStatus === item.key && <CheckCircle2 className="h-4 w-4 text-navy" />}
                    </div>
                    <p className="text-xs text-navy-600 mt-1.5">{item.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 6: Project Type */}
          {currentStep === 6 && (
            <div className="space-y-4">
              <div className="border-b border-navy-50 pb-3">
                <h2 className="text-base font-bold text-navy-dark flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-gold" />
                  <span>Step 6: Project Type</span>
                </h2>
                <p className="text-xs text-navy-500 mt-1">
                  Defines the underwriting framework and lender appraisal parameters.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { key: "NEW_BUSINESS", label: "New Business", desc: "Setting up a fresh greenfield facility" },
                  { key: "EXPANSION", label: "Expansion", desc: "Scaling production or branch capacity" },
                  { key: "MODERNIZATION", label: "Modernization", desc: "Automation, process upgrade, sustainability" },
                  { key: "MACHINERY", label: "Machinery", desc: "High-capex industrial equipment procurement" },
                  { key: "WORKING_CAPITAL", label: "Working Capital", desc: "Cash credit, overdraft, inventory finance" },
                  { key: "OTHER", label: "Other", desc: "Refinancing, restructuring, or custom loan" },
                ].map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => updateFormData((prev) => ({ ...prev, projectType: item.key as any }))}
                    className={`rounded-xl border p-4 text-left transition-all ${
                      formData.projectType === item.key
                        ? "border-navy bg-navy/5 ring-1 ring-navy font-semibold text-navy-dark shadow-sm"
                        : "border-navy-100 bg-white text-navy-600 hover:bg-slate-50"
                    }`}
                  >
                    <h3 className="text-sm font-bold text-navy-dark">{item.label}</h3>
                    <p className="text-xs text-navy-500 mt-1">{item.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 7: Project Cost */}
          {currentStep === 7 && (
            <div className="space-y-4">
              <div className="border-b border-navy-50 pb-3">
                <h2 className="text-base font-bold text-navy-dark flex items-center gap-2">
                  <Coins className="h-5 w-5 text-gold" />
                  <span>Step 7: Project Cost (Total Capex)</span>
                </h2>
                <p className="text-xs text-navy-500 mt-1">
                  Estimated total capital expenditure in ₹ Lakhs. (1 Crore = 100 Lakhs).
                </p>
              </div>

              {/* Quick selector chips */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-navy-700">Quick Capex Benchmarks</label>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: "₹50 Lakhs", val: 50 },
                    { label: "₹1.00 Crore", val: 100 },
                    { label: "₹2.50 Crore", val: 250 },
                    { label: "₹5.00 Crore", val: 500 },
                    { label: "₹10.00 Crore", val: 1000 },
                    { label: "₹25.00 Crore", val: 2500 },
                    { label: "₹50.00 Crore", val: 5000 },
                  ].map((chip) => (
                    <button
                      key={chip.val}
                      type="button"
                      onClick={() =>
                        updateFormData((prev) => {
                          const cost = chip.val;
                          const debt = Math.round(cost * 0.75);
                          const equity = cost - debt;
                          return {
                            ...prev,
                            projectCostInLakhs: cost,
                            financeRequirementInLakhs: debt,
                            promoterContributionInLakhs: equity,
                          };
                        })
                      }
                      className={`rounded-lg border px-3 py-1.5 text-xs transition-all ${
                        formData.projectCostInLakhs === chip.val
                          ? "border-navy bg-navy text-white font-semibold shadow-sm"
                          : "border-navy-100 bg-white text-navy-700 hover:bg-slate-50"
                      }`}
                    >
                      {chip.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-navy-700">Total Project Cost (in ₹ Lakhs) *</label>
                  <div className="relative">
                    <input
                      type="number"
                      min={1}
                      value={formData.projectCostInLakhs || ""}
                      onChange={(e) => {
                        const val = parseFloat(e.target.value) || 0;
                        const debt = Math.round(val * 0.75);
                        const equity = val - debt;
                        updateFormData((prev) => ({
                          ...prev,
                          projectCostInLakhs: val,
                          financeRequirementInLakhs: debt,
                          promoterContributionInLakhs: equity,
                        }));
                      }}
                      className="w-full rounded-lg border border-navy-200 px-3.5 py-2 text-sm focus:border-navy focus:ring-1 focus:ring-navy outline-none font-mono"
                    />
                    <span className="absolute right-3 top-2.5 text-xs text-navy-400 font-semibold">₹ Lakhs</span>
                  </div>
                </div>

                <div className="rounded-xl bg-slate-50 p-3.5 border border-navy-50 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-navy-500">In Crores</p>
                    <p className="text-base font-bold text-navy-dark mt-0.5">
                      ₹{(formData.projectCostInLakhs / 100).toFixed(2)} Crore
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-navy-500">Typical Debt Mix (75%)</p>
                    <p className="text-xs font-semibold text-emerald-700 mt-0.5">
                      ₹{((formData.projectCostInLakhs * 0.75) / 100).toFixed(2)} Cr Debt
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 8: Finance Requirement */}
          {currentStep === 8 && (
            <div className="space-y-4">
              <div className="border-b border-navy-50 pb-3">
                <h2 className="text-base font-bold text-navy-dark flex items-center gap-2">
                  <IndianRupee className="h-5 w-5 text-gold" />
                  <span>Step 8: Finance Requirement & Margin Money</span>
                </h2>
                <p className="text-xs text-navy-500 mt-1">
                  Split between requested institutional bank debt and promoter equity contribution.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-navy-700">Requested Debt / Loan Amount (₹ Lakhs) *</label>
                  <input
                    type="number"
                    value={formData.financeRequirementInLakhs || ""}
                    onChange={(e) => {
                      const val = parseFloat(e.target.value) || 0;
                      updateFormData((prev) => ({
                        ...prev,
                        financeRequirementInLakhs: val,
                        promoterContributionInLakhs: Math.max(0, prev.projectCostInLakhs - val),
                      }));
                    }}
                    className="w-full rounded-lg border border-navy-200 px-3.5 py-2 text-sm focus:border-navy focus:ring-1 focus:ring-navy outline-none font-mono"
                  />
                  <p className="text-[11px] text-navy-500">
                    {formData.projectCostInLakhs > 0
                      ? `${Math.round((formData.financeRequirementInLakhs / formData.projectCostInLakhs) * 100)}% of total project cost`
                      : ""}
                  </p>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-navy-700">Promoter Equity Margin (₹ Lakhs) *</label>
                  <input
                    type="number"
                    value={formData.promoterContributionInLakhs || ""}
                    onChange={(e) => {
                      const val = parseFloat(e.target.value) || 0;
                      updateFormData((prev) => ({
                        ...prev,
                        promoterContributionInLakhs: val,
                      }));
                    }}
                    className="w-full rounded-lg border border-navy-200 px-3.5 py-2 text-sm focus:border-navy focus:ring-1 focus:ring-navy outline-none font-mono"
                  />
                  <p className="text-[11px] text-navy-500">
                    {formData.projectCostInLakhs > 0
                      ? `${Math.round((formData.promoterContributionInLakhs / formData.projectCostInLakhs) * 100)}% promoter margin`
                      : ""}
                  </p>
                </div>
              </div>

              <div className="space-y-1.5 pt-2">
                <label className="text-xs font-semibold text-navy-700">Preferred Debt Facilities *</label>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Term Loan (Capex)",
                    "Cash Credit / OD",
                    "CGTMSE Covered Loan",
                    "Letter of Credit (LC)",
                    "Bank Guarantee (BG)",
                    "Subsidized MSME Scheme",
                  ].map((facility) => {
                    const isSelected = formData.preferredFacilities.includes(facility);
                    return (
                      <button
                        key={facility}
                        type="button"
                        onClick={() =>
                          updateFormData((prev) => {
                            const updated = isSelected
                              ? prev.preferredFacilities.filter((f) => f !== facility)
                              : [...prev.preferredFacilities, facility];
                            return { ...prev, preferredFacilities: updated };
                          })
                        }
                        className={`rounded-lg border px-3 py-1.5 text-xs transition-all ${
                          isSelected
                            ? "border-navy bg-navy text-white font-semibold shadow-sm"
                            : "border-navy-100 bg-white text-navy-700 hover:bg-slate-50"
                        }`}
                      >
                        {facility}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* STEP 9: Current Registrations */}
          {currentStep === 9 && (
            <div className="space-y-4">
              <div className="border-b border-navy-50 pb-3">
                <h2 className="text-base font-bold text-navy-dark flex items-center gap-2">
                  <FileCheck2 className="h-5 w-5 text-gold" />
                  <span>Step 9: Current Registrations & Licences</span>
                </h2>
                <p className="text-xs text-navy-500 mt-1">
                  Select registrations currently held by your enterprise (helps identify regulatory gaps).
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  "GST Registration",
                  "Udyam MSME Certificate",
                  "PAN Card of Enterprise",
                  "CIN (Pvt / Public Ltd)",
                  "Pollution Control Board (PCB)",
                  "Factory License",
                  "Import Export Code (IEC)",
                  "FSSAI Food License",
                  "None yet (In Process)",
                ].map((reg) => {
                  const isChecked = formData.registrations.includes(reg);
                  return (
                    <button
                      key={reg}
                      type="button"
                      onClick={() =>
                        updateFormData((prev) => {
                          const updated = isChecked
                            ? prev.registrations.filter((r) => r !== reg)
                            : [...prev.registrations, reg];
                          return { ...prev, registrations: updated };
                        })
                      }
                      className={`rounded-xl border p-3.5 text-left transition-all flex items-start gap-2.5 ${
                        isChecked
                          ? "border-navy bg-navy/5 font-semibold text-navy-dark"
                          : "border-navy-100 bg-white text-navy-600 hover:bg-slate-50"
                      }`}
                    >
                      <div
                        className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border mt-0.5 ${
                          isChecked ? "border-navy bg-navy text-white" : "border-navy-300 bg-white"
                        }`}
                      >
                        {isChecked && <Check className="h-3 w-3" />}
                      </div>
                      <span className="text-xs">{reg}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 10: Existing Financial Information */}
          {currentStep === 10 && (
            <div className="space-y-4">
              <div className="border-b border-navy-50 pb-3">
                <h2 className="text-base font-bold text-navy-dark flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-gold" />
                  <span>Step 10: Existing Financial Track Record</span>
                </h2>
                <p className="text-xs text-navy-500 mt-1">
                  For running units; greenfield setups may select pre-revenue.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-navy-700">Annual Turnover Last FY (₹ Lakhs)</label>
                  <input
                    type="number"
                    value={formData.financials.annualTurnoverInLakhs || ""}
                    onChange={(e) => {
                      const val = parseFloat(e.target.value) || 0;
                      updateFormData((prev) => ({
                        ...prev,
                        financials: { ...prev.financials, annualTurnoverInLakhs: val },
                      }));
                    }}
                    placeholder="e.g. 850 (Enter 0 if Greenfield / Pre-revenue)"
                    className="w-full rounded-lg border border-navy-200 px-3.5 py-2 text-sm focus:border-navy focus:ring-1 focus:ring-navy outline-none font-mono"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-navy-700">Existing Bank Debt Outstanding (₹ Lakhs)</label>
                  <input
                    type="number"
                    value={formData.financials.existingDebtInLakhs || ""}
                    onChange={(e) => {
                      const val = parseFloat(e.target.value) || 0;
                      updateFormData((prev) => ({
                        ...prev,
                        financials: { ...prev.financials, existingDebtInLakhs: val },
                      }));
                    }}
                    placeholder="e.g. 120 (Enter 0 if debt free)"
                    className="w-full rounded-lg border border-navy-200 px-3.5 py-2 text-sm focus:border-navy focus:ring-1 focus:ring-navy outline-none font-mono"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-navy-700">Net Profit Margin Bracket</label>
                  <select
                    value={formData.financials.profitMarginBand}
                    onChange={(e) =>
                      updateFormData((prev) => ({
                        ...prev,
                        financials: { ...prev.financials, profitMarginBand: e.target.value as any },
                      }))
                    }
                    className="w-full rounded-lg border border-navy-200 px-3.5 py-2 text-sm focus:border-navy focus:ring-1 focus:ring-navy outline-none bg-white"
                  >
                    <option value="PRE_REVENUE">Pre-Revenue / New Setup</option>
                    <option value="NEGATIVE">Loss Making / Negative</option>
                    <option value="0_TO_5_PERCENT">0% – 5% Margin</option>
                    <option value="5_TO_10_PERCENT">5% – 10% Margin (Healthy)</option>
                    <option value="ABOVE_10_PERCENT">Above 10% Margin (Strong)</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-navy-700">Primary Bank Relationship</label>
                  <input
                    type="text"
                    value={formData.financials.primaryBank}
                    onChange={(e) =>
                      updateFormData((prev) => ({
                        ...prev,
                        financials: { ...prev.financials, primaryBank: e.target.value },
                      }))
                    }
                    placeholder="e.g. State Bank of India / HDFC Bank"
                    className="w-full rounded-lg border border-navy-200 px-3.5 py-2 text-sm focus:border-navy focus:ring-1 focus:ring-navy outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 11: Document Readiness */}
          {currentStep === 11 && (
            <div className="space-y-4">
              <div className="border-b border-navy-50 pb-3">
                <h2 className="text-base font-bold text-navy-dark flex items-center gap-2">
                  <Files className="h-5 w-5 text-gold" />
                  <span>Step 11: Document Availability Self-Assessment</span>
                </h2>
                <p className="text-xs text-navy-500 mt-1">
                  Helps VS Advisory generate your immediate document collection checklist.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  { key: "audited_financials", label: "Past 2-3 Years CA Audited Balance Sheets & Tax Audits" },
                  { key: "bank_statements", label: "Last 6-12 Months Bank Account Statements" },
                  { key: "machinery_quotations", label: "Machinery / Equipment Vendor Quotations & Pro-Forma" },
                  { key: "land_title_deeds", label: "Land Title Ownership / Registered Lease Deed / Site Map" },
                  { key: "promoter_kyc", label: "Promoter KYC Documents (PAN, Aadhaar, Net Worth Certificate)" },
                ].map((doc) => {
                  const status = formData.documentReadiness[doc.key] || "NOT_AVAILABLE";
                  return (
                    <div
                      key={doc.key}
                      className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-navy-100 p-3.5 bg-slate-50/70"
                    >
                      <span className="text-xs font-semibold text-navy-dark">{doc.label}</span>
                      <div className="flex items-center gap-1.5">
                        {[
                          { val: "AVAILABLE", label: "Available", bg: "hover:bg-emerald-50 text-emerald-800" },
                          { val: "IN_PROGRESS", label: "In Progress", bg: "hover:bg-amber-50 text-amber-800" },
                          { val: "NOT_AVAILABLE", label: "Not Yet", bg: "hover:bg-slate-100 text-slate-700" },
                        ].map((btn) => (
                          <button
                            key={btn.val}
                            type="button"
                            onClick={() =>
                              updateFormData((prev) => ({
                                ...prev,
                                documentReadiness: {
                                  ...prev.documentReadiness,
                                  [doc.key]: btn.val as any,
                                },
                              }))
                            }
                            className={`rounded-lg px-2.5 py-1 text-xs transition-all ${
                              status === btn.val
                                ? "bg-navy text-white font-semibold shadow-sm"
                                : `bg-white border border-navy-100 ${btn.bg}`
                            }`}
                          >
                            {btn.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 12: Advisory Requirement & Consent */}
          {currentStep === 12 && (
            <div className="space-y-5">
              <div className="border-b border-navy-50 pb-3">
                <h2 className="text-base font-bold text-navy-dark flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-gold" />
                  <span>Step 12: Advisory Requirement & Consent</span>
                </h2>
                <p className="text-xs text-navy-500 mt-1">
                  Select the specialized advisory services required for your mandate.
                </p>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-navy-700">Required VS Advisory Services *</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {[
                    { key: "DPR", label: "Detailed Project Report (DPR)" },
                    { key: "CMA", label: "CMA Data (Form I to VI)" },
                    { key: "PROJECT_FINANCE", label: "Project Finance & Syndication" },
                    { key: "SUBSIDY", label: "Central / State Subsidies" },
                    { key: "COMPLIANCE", label: "Regulatory Compliance" },
                    { key: "BUSINESS_ADVISORY", label: "Strategic Business Advisory" },
                  ].map((srv) => {
                    const isSelected = formData.advisoryServices.includes(srv.key as any);
                    return (
                      <button
                        key={srv.key}
                        type="button"
                        onClick={() =>
                          updateFormData((prev) => {
                            const updated = isSelected
                              ? prev.advisoryServices.filter((s) => s !== srv.key)
                              : [...prev.advisoryServices, srv.key as any];
                            return { ...prev, advisoryServices: updated };
                          })
                        }
                        className={`rounded-xl border p-3 text-left transition-all ${
                          isSelected
                            ? "border-navy bg-navy text-white font-semibold shadow-sm"
                            : "border-navy-100 bg-white text-navy-700 hover:bg-slate-50"
                        }`}
                      >
                        <p className="text-xs">{srv.label}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-navy-700">Additional Instructions or Lender Preferences</label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => updateFormData((prev) => ({ ...prev, notes: e.target.value }))}
                  placeholder="e.g. Seeking sanction within 60 days, prefer State Bank of India or HDFC Bank, eligible for MoFPI subsidy."
                  className="w-full rounded-lg border border-navy-200 p-2.5 text-xs focus:border-navy focus:ring-1 focus:ring-navy outline-none"
                />
              </div>

              {/* Statutory Consent Checkbox */}
              <div className="rounded-xl border border-navy-200 bg-navy/5 p-4 space-y-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.consentGiven}
                    onChange={(e) => updateFormData((prev) => ({ ...prev, consentGiven: e.target.checked as any }))}
                    className="mt-0.5 h-4 w-4 rounded border-navy-300 text-navy focus:ring-navy"
                  />
                  <span className="text-xs text-navy-700 leading-relaxed">
                    <strong>Mandate & Advisory Consent:</strong> I confirm that the information provided is true and accurate to the best of my knowledge. I consent to VS Project & Financial Advisory Private Limited reviewing this information, formulating credit appraisal documentation, and coordinating with financial institutions on our behalf.
                  </span>
                </label>
              </div>
            </div>
          )}

          {/* Navigation Controls */}
          <div className="flex items-center justify-between border-t border-navy-100 pt-5">
            <button
              type="button"
              onClick={handleBack}
              disabled={currentStep === 1 || isSubmitting}
              className={`flex items-center gap-1.5 rounded-xl border border-navy-200 px-4 py-2.5 text-xs font-semibold text-navy-700 transition-all ${
                currentStep === 1 || isSubmitting
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-slate-50 hover:border-navy-300"
              }`}
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back</span>
            </button>

            <button
              type="button"
              onClick={handleNext}
              disabled={isSubmitting || (currentStep === 12 && !formData.consentGiven)}
              className="flex items-center gap-2 rounded-xl bg-navy hover:bg-navy-dark text-white px-6 py-2.5 text-xs font-semibold transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Save className="h-4 w-4 animate-spin text-gold" />
                  <span>Processing Mandate...</span>
                </>
              ) : currentStep === TOTAL_STEPS ? (
                <>
                  <span>Complete Onboarding & Generate Checklist</span>
                  <CheckCircle2 className="h-4 w-4 text-gold" />
                </>
              ) : (
                <>
                  <span>Continue to Step {currentStep + 1}</span>
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
