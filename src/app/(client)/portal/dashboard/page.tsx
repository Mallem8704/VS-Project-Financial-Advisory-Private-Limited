"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Briefcase,
  CheckCircle2,
  Clock,
  AlertCircle,
  ArrowRight,
  FileCheck2,
  Receipt,
  MessageSquare,
  Sparkles,
  Upload,
  Calendar,
  Layers,
  Building2,
  FileSpreadsheet,
  FileText,
  Video,
  LifeBuoy,
  PlusCircle,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  ShieldCheck,
  User,
  Info,
} from "lucide-react";
import { RegulatoryDisclaimerBanner } from "@/components/brand/RegulatoryDisclaimerBanner";

export default function ClientDashboardPage() {
  const [userName, setUserName] = useState("Ramesh Chandra Gupta");
  const [showEmptyState, setShowEmptyState] = useState(false);
  const [activeJourneyStage, setActiveJourneyStage] = useState<number>(4); // Stage 4: DPR

  // Dynamic greeting based on hour of the day
  const [greeting, setGreeting] = useState("Good Morning");
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good Morning");
    else if (hour < 17) setGreeting("Good Afternoon");
    else setGreeting("Good Evening");
  }, []);

  // 10-Stage Project Journey Sequence
  const projectJourney = [
    {
      id: 1,
      title: "Onboarding",
      shortTitle: "Onboarding",
      status: "COMPLETED",
      completedAt: "02 Sep 2026",
      deliverables: "Mandate agreement signed, enterprise constitution validated, preliminary scope formalized.",
    },
    {
      id: 2,
      title: "Documents",
      shortTitle: "Documents",
      status: "COMPLETED",
      completedAt: "08 Sep 2026",
      deliverables: "3-year CA audited financials, 12-month bank statements, and promoter KYC verified.",
    },
    {
      id: 3,
      title: "Financial Assessment",
      shortTitle: "Fin Assessment",
      status: "COMPLETED",
      completedAt: "12 Sep 2026",
      deliverables: "Historical ratio appraisal, working capital cycle analysis, and debt eligibility sizing.",
    },
    {
      id: 4,
      title: "DPR Preparation",
      shortTitle: "DPR",
      status: "IN_PROGRESS",
      completedAt: null,
      deliverables: "Technical feasibility, plant capex breakdown, civil works schedule, and revenue projections.",
    },
    {
      id: 5,
      title: "CMA Preparation",
      shortTitle: "CMA",
      status: "IN_PROGRESS",
      completedAt: null,
      deliverables: "Form I to VI preparation, Tandon MPBF Method II calculation, and DSCR sensitivity model.",
    },
    {
      id: 6,
      title: "Application Preparation",
      shortTitle: "Application",
      status: "PENDING",
      completedAt: null,
      deliverables: "Compilation of institutional bank loan dossier and compliance certifications.",
    },
    {
      id: 7,
      title: "Submission",
      shortTitle: "Submission",
      status: "PENDING",
      completedAt: null,
      deliverables: "Formal submission to lead lender credit desk (SBI SME Credit Centre).",
    },
    {
      id: 8,
      title: "Query Resolution",
      shortTitle: "Query Defense",
      status: "PENDING",
      completedAt: null,
      deliverables: "Defense of bank credit committee queries, legal title vetting, and valuation coordination.",
    },
    {
      id: 9,
      title: "Decision / Sanction",
      shortTitle: "Sanction",
      status: "PENDING",
      completedAt: null,
      deliverables: "Credit sanction letter issuance, interest rate review, and sanction covenants analysis.",
    },
    {
      id: 10,
      title: "Post-Sanction",
      shortTitle: "Post-Sanction",
      status: "PENDING",
      completedAt: null,
      deliverables: "Documentation execution, mortgage creation, pre-disbursement compliance, and disbursement.",
    },
  ];

  // 5 Essential Questions Model
  const fiveQuestions = {
    q1Status: {
      question: "1. What is my project status?",
      badge: "In Active Preparation (45%)",
      badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
      answer:
        "Your mandate is actively progressing through Stage 4 (DPR Preparation) and Stage 5 (CMA Preparation). The credit appraisal parameters and preliminary DSCR models indicate prime bankability.",
    },
    q2Completed: {
      question: "2. What has been completed?",
      badge: "3 Stages Finalized",
      badgeColor: "bg-navy/5 text-navy border-navy-100",
      items: [
        "Corporate constitution & borrowing powers verified under Companies Act",
        "Last 3 years CA-audited balance sheets (FY 2023–2025) verified with auditor UDIN",
        "Means of finance formalized: ₹25.00 Cr Capex (₹6.25 Cr Equity / ₹18.75 Cr Debt)",
        "Historical financial ratios & operating cycle benchmarks validated",
      ],
    },
    q3PendingFromMe: {
      question: "3. What does VS need from me?",
      badge: "2 Action Items",
      badgeColor: "bg-rose-50 text-rose-800 border-rose-200",
      items: [
        {
          title: "Upload CA-Certified Net Worth Certificate for Promoter 2 (Mrs. Sunita Gupta)",
          href: "/portal/documents",
          deadline: "Due in 3 days",
        },
        {
          title: "Furnish revised pro-forma quotation for Satake Optical Sorter with power specifications",
          href: "/portal/documents",
          deadline: "Due in 5 days",
        },
      ],
    },
    q4VsWorkingOn: {
      question: "4. What is VS doing now?",
      badge: "Active Advisor Task",
      badgeColor: "bg-gold/10 text-gold-dark border-gold/30",
      items: [
        "Synthesizing Chapter 4 of DPR (Plant Layout, Utility Schedules & Solar Integration)",
        "Finalizing CMA Form IV MPBF Method II calculation and Projected DSCR (1.84x average)",
        "Reviewing eligibility benchmarks under MoFPI PMKSY Capital Subsidy scheme",
      ],
    },
    q5NextMilestone: {
      question: "5. What happens next?",
      badge: "Next Target: 25 Sep",
      badgeColor: "bg-blue-50 text-blue-800 border-blue-200",
      answer:
        "Upon reconciliation of machinery quotations, our Lead Advisor will schedule a joint technical review session with your team before submitting the completed DPR and CMA dossier to State Bank of India SME Credit Centre.",
    },
  };

  const selectedStageData = projectJourney.find((s) => s.id === activeJourneyStage) || projectJourney[3];

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Top Welcome Header & View Mode Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-navy-100 pb-5">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-navy-dark tracking-tight">
            {greeting}, {userName}
          </h1>
          <p className="text-xs sm:text-sm text-navy-600 mt-1">
            Welcome to your institutional advisory workspace. Here is the real-time status of your project mandate.
          </p>
        </div>

        {/* Development / Showcase State Switcher */}
        <div className="flex items-center gap-2 rounded-xl bg-slate-100 p-1 border border-navy-100 text-xs">
          <button
            type="button"
            onClick={() => setShowEmptyState(false)}
            className={`rounded-lg px-3 py-1.5 font-semibold transition-all ${
              !showEmptyState
                ? "bg-navy text-white shadow-xs"
                : "text-navy-600 hover:text-navy"
            }`}
          >
            Active Mandate View
          </button>
          <button
            type="button"
            onClick={() => setShowEmptyState(true)}
            className={`rounded-lg px-3 py-1.5 font-semibold transition-all ${
              showEmptyState
                ? "bg-navy text-white shadow-xs"
                : "text-navy-600 hover:text-navy"
            }`}
          >
            New Client Empty State
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* EMPTY STATE (When client has no active mandate yet)                      */}
      {/* ========================================================================= */}
      {showEmptyState ? (
        <div className="space-y-8">
          <div className="rounded-3xl border border-navy-100 bg-white p-8 sm:p-12 text-center shadow-sm space-y-6">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-navy/5 text-gold border border-navy-100">
              <Briefcase className="h-8 w-8" />
            </div>

            <div className="max-w-md mx-auto space-y-2">
              <h2 className="text-xl sm:text-2xl font-bold text-navy-dark">
                No Active Project Mandate Configured
              </h2>
              <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
                You do not have an active advisory mandate in progress. Start our guided 12-step onboarding wizard to initialize your project parameters, DPR/CMA requirements, and bank syndication.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link
                href="/onboarding"
                className="inline-flex items-center gap-2 rounded-xl bg-navy hover:bg-navy-dark text-white px-6 py-3 text-xs font-semibold shadow-md transition-all"
              >
                <Sparkles className="h-4 w-4 text-gold" />
                <span>Launch Client Onboarding Wizard</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/consultation"
                className="inline-flex items-center gap-2 rounded-xl border border-navy-200 bg-white hover:bg-slate-50 text-navy-700 px-5 py-3 text-xs font-semibold transition-all"
              >
                <Video className="h-4 w-4 text-navy-500" />
                <span>Book Advisory Consultation</span>
              </Link>
            </div>
          </div>

          {/* Guided Setup Preview */}
          <div className="rounded-2xl border border-navy-100 bg-white p-6 sm:p-8 shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-navy-dark">What Happens During Onboarding?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="rounded-xl bg-slate-50 p-4 border border-navy-50 space-y-1.5">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-navy text-gold text-xs font-bold">1</span>
                <h4 className="font-bold text-navy-dark">Capture Project Parameters</h4>
                <p className="text-navy-600">Enter project cost, debt requirement, promoter equity margin, and industry sector.</p>
              </div>
              <div className="rounded-xl bg-slate-50 p-4 border border-navy-50 space-y-1.5">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-navy text-gold text-xs font-bold">2</span>
                <h4 className="font-bold text-navy-dark">Automated Action Checklist</h4>
                <p className="text-navy-600">The platform automatically analyzes regulatory requirements and generates your immediate document checklist.</p>
              </div>
              <div className="rounded-xl bg-slate-50 p-4 border border-navy-50 space-y-1.5">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-navy text-gold text-xs font-bold">3</span>
                <h4 className="font-bold text-navy-dark">Advisor Assignment</h4>
                <p className="text-navy-600">A Senior Financial Advisor (ex-banker) is assigned to lead your DPR synthesis and credit committee defense.</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* ========================================================================= */
        /* ACTIVE MANDATE DASHBOARD VIEW                                             */
        /* ========================================================================= */
        <div className="space-y-8">
          {/* 1. PRIMARY PROJECT CARD */}
          <div className="rounded-3xl border border-navy-100 bg-white p-6 sm:p-8 shadow-institutional space-y-6">
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-navy-100 pb-5">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-800 border border-emerald-200">
                    Active Mandate
                  </span>
                  <span className="text-xs text-navy-500 font-medium">#VS-2026-PRJ-0042</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-navy-dark">
                  ₹25 Cr Rice Mill Modernization & Captive Solar Unit
                </h2>
                <p className="text-xs text-navy-600 flex items-center gap-2">
                  <Building2 className="h-3.5 w-3.5 text-navy-400" />
                  <span>Apex Precision Agro & Engineering Pvt Ltd</span>
                  <span>•</span>
                  <span>Agro-Processing & Food Manufacturing</span>
                </p>
              </div>

              <div className="flex sm:flex-col items-end justify-between sm:justify-start gap-2 text-right">
                <span className="text-[11px] text-navy-400">Last Updated</span>
                <span className="font-semibold text-xs text-navy-dark bg-slate-100 px-2.5 py-1 rounded-md">
                  Today, 11:30 AM
                </span>
              </div>
            </div>

            {/* Key Project Metrics Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="rounded-2xl bg-slate-50 p-4 border border-navy-50">
                <span className="text-[11px] font-medium text-navy-500">Current Stage</span>
                <p className="text-sm font-bold text-navy-dark mt-1">Stage 4: DPR & CMA Review</p>
                <span className="inline-block text-[10px] text-emerald-700 font-semibold mt-0.5">
                  ● On Schedule
                </span>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4 border border-navy-50">
                <span className="text-[11px] font-medium text-navy-500">Overall Completion</span>
                <div className="flex items-baseline gap-2 mt-1">
                  <p className="text-xl font-extrabold text-navy-dark">45%</p>
                  <span className="text-[10px] text-navy-500">4 of 10 stages</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-slate-200 mt-2 overflow-hidden">
                  <div className="h-full bg-gold rounded-full" style={{ width: "45%" }} />
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4 border border-navy-50">
                <span className="text-[11px] font-medium text-navy-500">Assigned Advisor</span>
                <p className="text-xs font-bold text-navy-dark mt-1 truncate">M. V. Rao</p>
                <span className="text-[10px] text-navy-500">Ex-DGM, State Bank of India</span>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4 border border-navy-50">
                <span className="text-[11px] font-medium text-navy-500">Capex & Debt Mix</span>
                <p className="text-xs font-bold text-navy-dark mt-1">₹25.00 Cr Total Capex</p>
                <span className="text-[10px] text-emerald-700 font-medium">₹18.75 Cr Debt (75%)</span>
              </div>
            </div>

            {/* Next Action Callout Strip */}
            <div className="rounded-2xl bg-gradient-to-r from-navy/5 via-navy/10 to-gold/10 p-4 border border-navy-100 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gold text-navy-dark font-bold shadow-xs">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider font-bold text-gold-dark">
                    Immediate Action Required
                  </p>
                  <p className="text-xs font-bold text-navy-dark">
                    Review Chapter 4 Plant Capex & Upload Satake OEM Machinery Quotation
                  </p>
                </div>
              </div>
              <Link
                href="/portal/documents"
                className="inline-flex items-center gap-1.5 rounded-xl bg-navy hover:bg-navy-dark text-white px-4 py-2 text-xs font-semibold shadow-sm transition-all"
              >
                <span>Upload Quotation Now</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* 2. PROJECT JOURNEY: PREMIUM TIMELINE */}
          <div className="rounded-3xl border border-navy-100 bg-white p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-gold-dark bg-gold/10 px-2 py-0.5 rounded">
                  Lifecycle Tracking
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-navy-dark mt-1">Project Journey</h3>
              </div>
              <p className="text-xs text-navy-500">
                Click any milestone to inspect deliverables and review stage requirements.
              </p>
            </div>

            {/* Visual Step Timeline */}
            <div className="relative">
              <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2 sm:gap-1.5">
                {projectJourney.map((stage) => {
                  const isCompleted = stage.status === "COMPLETED";
                  const isInProgress = stage.status === "IN_PROGRESS";
                  const isSelected = stage.id === activeJourneyStage;

                  return (
                    <button
                      key={stage.id}
                      type="button"
                      onClick={() => setActiveJourneyStage(stage.id)}
                      className={`group relative flex flex-col items-center text-center p-2.5 rounded-xl transition-all ${
                        isSelected
                          ? "bg-navy text-white shadow-md ring-2 ring-gold"
                          : isCompleted
                          ? "bg-emerald-50/80 border border-emerald-200 text-emerald-900 hover:bg-emerald-100/70"
                          : isInProgress
                          ? "bg-amber-50/80 border border-amber-300 text-amber-900 hover:bg-amber-100"
                          : "bg-slate-50 border border-slate-200 text-slate-400 hover:bg-slate-100"
                      }`}
                    >
                      {/* Step Number or Status Icon */}
                      <div
                        className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold mb-1.5 transition-all ${
                          isSelected
                            ? "bg-gold text-navy-dark"
                            : isCompleted
                            ? "bg-emerald-600 text-white"
                            : isInProgress
                            ? "bg-amber-500 text-white animate-pulse"
                            : "bg-slate-200 text-slate-500"
                        }`}
                      >
                        {isCompleted ? <CheckCircle2 className="h-4 w-4" /> : stage.id}
                      </div>

                      <span className="text-[11px] font-bold leading-tight truncate w-full">
                        {stage.shortTitle}
                      </span>

                      <span
                        className={`text-[9px] font-medium mt-1 truncate ${
                          isSelected
                            ? "text-navy-200"
                            : isCompleted
                            ? "text-emerald-700"
                            : isInProgress
                            ? "text-amber-700 font-bold"
                            : "text-slate-400"
                        }`}
                      >
                        {isCompleted ? "Done" : isInProgress ? "Active" : "Pending"}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Stage Detail Drawer / Card */}
            <div className="rounded-2xl border border-navy-100 bg-slate-50 p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-xs text-navy">
                    Stage {selectedStageData.id}: {selectedStageData.title}
                  </span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${
                      selectedStageData.status === "COMPLETED"
                        ? "bg-emerald-100 text-emerald-800"
                        : selectedStageData.status === "IN_PROGRESS"
                        ? "bg-amber-100 text-amber-800"
                        : "bg-slate-200 text-slate-600"
                    }`}
                  >
                    {selectedStageData.status.replace("_", " ")}
                  </span>
                  {selectedStageData.completedAt && (
                    <span className="text-[11px] text-navy-400">
                      Completed on {selectedStageData.completedAt}
                    </span>
                  )}
                </div>
                <p className="text-xs text-navy-600 leading-relaxed">
                  {selectedStageData.deliverables}
                </p>
              </div>

              <Link
                href={
                  selectedStageData.id <= 2
                    ? "/portal/documents"
                    : selectedStageData.id <= 5
                    ? "/portal/reports"
                    : "/portal/applications"
                }
                className="inline-flex items-center gap-1 text-xs font-bold text-navy hover:text-gold transition-colors whitespace-nowrap"
              >
                <span>View Stage Assets</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* 3. THE 5 QUESTIONS DASHBOARD SECTION */}
          <div className="space-y-4">
            <div className="border-b border-navy-100 pb-2">
              <h3 className="text-lg font-bold text-navy-dark">Advisory Transparency Matrix</h3>
              <p className="text-xs text-navy-500">
                Direct answers to the five core questions every borrower needs to know.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Q1: Project Status */}
              <div className="rounded-2xl border border-navy-100 bg-white p-5 shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-navy-dark uppercase tracking-wider">
                    {fiveQuestions.q1Status.question}
                  </h4>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold border ${fiveQuestions.q1Status.badgeColor}`}
                  >
                    {fiveQuestions.q1Status.badge}
                  </span>
                </div>
                <p className="text-xs text-navy-600 leading-relaxed">
                  {fiveQuestions.q1Status.answer}
                </p>
              </div>

              {/* Q5: What Happens Next */}
              <div className="rounded-2xl border border-navy-100 bg-white p-5 shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-navy-dark uppercase tracking-wider">
                    {fiveQuestions.q5NextMilestone.question}
                  </h4>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold border ${fiveQuestions.q5NextMilestone.badgeColor}`}
                  >
                    {fiveQuestions.q5NextMilestone.badge}
                  </span>
                </div>
                <p className="text-xs text-navy-600 leading-relaxed">
                  {fiveQuestions.q5NextMilestone.answer}
                </p>
              </div>

              {/* Q2: What Has Been Completed */}
              <div className="rounded-2xl border border-navy-100 bg-white p-5 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-navy-dark uppercase tracking-wider">
                    {fiveQuestions.q2Completed.question}
                  </h4>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold border ${fiveQuestions.q2Completed.badgeColor}`}
                  >
                    {fiveQuestions.q2Completed.badge}
                  </span>
                </div>
                <ul className="space-y-1.5 text-xs text-navy-700">
                  {fiveQuestions.q2Completed.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Q3: What Does VS Need From Me */}
              <div className="rounded-2xl border border-rose-100 bg-rose-50/40 p-5 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-navy-dark uppercase tracking-wider">
                    {fiveQuestions.q3PendingFromMe.question}
                  </h4>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold border ${fiveQuestions.q3PendingFromMe.badgeColor}`}
                  >
                    {fiveQuestions.q3PendingFromMe.badge}
                  </span>
                </div>
                <div className="space-y-2">
                  {fiveQuestions.q3PendingFromMe.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl bg-white p-3 border border-rose-200 flex items-center justify-between gap-3 text-xs"
                    >
                      <div className="space-y-0.5">
                        <p className="font-semibold text-navy-dark">{item.title}</p>
                        <span className="text-[10px] text-rose-700 font-bold">{item.deadline}</span>
                      </div>
                      <Link
                        href={item.href}
                        className="rounded-lg bg-navy text-white px-3 py-1 text-[11px] font-semibold hover:bg-navy-dark transition-all whitespace-nowrap"
                      >
                        Upload
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 4. MAIN DASHBOARD CARDS (8 Essential Cards) */}
          <div className="space-y-4">
            <div className="border-b border-navy-100 pb-2">
              <h3 className="text-lg font-bold text-navy-dark">Operational Management Cards</h3>
              <p className="text-xs text-navy-500">
                Direct access to documents, reports, scheduled meetings, fee receipts, and ticket queries.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Card 1: Pending From You */}
              <div className="rounded-2xl border border-navy-100 bg-white p-5 shadow-xs space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
                      <AlertCircle className="h-4 w-4" />
                    </span>
                    <span className="rounded-full bg-rose-100 text-rose-800 text-[10px] font-bold px-2 py-0.5">
                      2 Actions
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-navy-dark">Pending From You</h4>
                  <p className="text-xs text-navy-600">
                    Net worth certificate & machinery quotation pending upload.
                  </p>
                </div>
                <Link
                  href="/portal/documents"
                  className="text-xs font-semibold text-navy hover:text-gold flex items-center gap-1 pt-2 border-t border-navy-50"
                >
                  <span>Resolve pending items</span>
                  <ChevronRight className="h-3 w-3" />
                </Link>
              </div>

              {/* Card 2: VS Is Working On */}
              <div className="rounded-2xl border border-navy-100 bg-white p-5 shadow-xs space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gold/15 text-gold-dark">
                      <Sparkles className="h-4 w-4" />
                    </span>
                    <span className="rounded-full bg-gold/15 text-gold-dark text-[10px] font-bold px-2 py-0.5">
                      In Progress
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-navy-dark">VS Is Working On</h4>
                  <p className="text-xs text-navy-600">
                    Form IV MPBF method II calculation & Chapter 4 DPR capex synthesis.
                  </p>
                </div>
                <Link
                  href="/portal/reports"
                  className="text-xs font-semibold text-navy hover:text-gold flex items-center gap-1 pt-2 border-t border-navy-50"
                >
                  <span>Inspect active draft</span>
                  <ChevronRight className="h-3 w-3" />
                </Link>
              </div>

              {/* Card 3: Next Milestone */}
              <div className="rounded-2xl border border-navy-100 bg-white p-5 shadow-xs space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Clock className="h-4 w-4" />
                    </span>
                    <span className="text-[10px] font-bold text-navy-500">25 Sep 2026</span>
                  </div>
                  <h4 className="text-sm font-bold text-navy-dark">Next Milestone</h4>
                  <p className="text-xs text-navy-600">
                    DPR & CMA Draft Submission to SBI Credit Committee.
                  </p>
                </div>
                <Link
                  href="/portal/projects"
                  className="text-xs font-semibold text-navy hover:text-gold flex items-center gap-1 pt-2 border-t border-navy-50"
                >
                  <span>View full milestone plan</span>
                  <ChevronRight className="h-3 w-3" />
                </Link>
              </div>

              {/* Card 4: Documents */}
              <div className="rounded-2xl border border-navy-100 bg-white p-5 shadow-xs space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                      <FileCheck2 className="h-4 w-4" />
                    </span>
                    <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                      8 Verified
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-navy-dark">Secure Documents</h4>
                  <p className="text-xs text-navy-600">
                    KYC, Audited balance sheets, Land lease, and GST certificates on file.
                  </p>
                </div>
                <Link
                  href="/portal/documents"
                  className="text-xs font-semibold text-navy hover:text-gold flex items-center gap-1 pt-2 border-t border-navy-50"
                >
                  <span>Open Document Centre</span>
                  <ChevronRight className="h-3 w-3" />
                </Link>
              </div>

              {/* Card 5: Reports */}
              <div className="rounded-2xl border border-navy-100 bg-white p-5 shadow-xs space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                      <FileSpreadsheet className="h-4 w-4" />
                    </span>
                    <span className="text-[10px] font-bold text-purple-800 bg-purple-50 px-2 py-0.5 rounded">
                      2 Ready
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-navy-dark">DPR & CMA Reports</h4>
                  <p className="text-xs text-navy-600">
                    Review live DPR draft v1.2 and CMA Form I-VI models.
                  </p>
                </div>
                <Link
                  href="/portal/reports"
                  className="text-xs font-semibold text-navy hover:text-gold flex items-center gap-1 pt-2 border-t border-navy-50"
                >
                  <span>Download draft PDF</span>
                  <ChevronRight className="h-3 w-3" />
                </Link>
              </div>

              {/* Card 6: Upcoming Meeting */}
              <div className="rounded-2xl border border-navy-100 bg-white p-5 shadow-xs space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                      <Video className="h-4 w-4" />
                    </span>
                    <span className="text-[10px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded">
                      Tomorrow
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-navy-dark">Advisory Review Session</h4>
                  <p className="text-xs text-navy-600">
                    11:30 AM (45 Mins) with M. V. Rao via encrypted video session.
                  </p>
                </div>
                <Link
                  href="/portal/meetings"
                  className="text-xs font-semibold text-navy hover:text-gold flex items-center gap-1 pt-2 border-t border-navy-50"
                >
                  <span>Join / reschedule meeting</span>
                  <ChevronRight className="h-3 w-3" />
                </Link>
              </div>

              {/* Card 7: Invoices */}
              <div className="rounded-2xl border border-navy-100 bg-white p-5 shadow-xs space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                      <Receipt className="h-4 w-4" />
                    </span>
                    <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                      Paid ₹3.54L
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-navy-dark">Fee Invoices & GST</h4>
                  <p className="text-xs text-navy-600">
                    Milestone 1 settled. Milestone 2 payable upon bank submission.
                  </p>
                </div>
                <Link
                  href="/portal/invoices"
                  className="text-xs font-semibold text-navy hover:text-gold flex items-center gap-1 pt-2 border-t border-navy-50"
                >
                  <span>View receipts & GST</span>
                  <ChevronRight className="h-3 w-3" />
                </Link>
              </div>

              {/* Card 8: Support */}
              <div className="rounded-2xl border border-navy-100 bg-white p-5 shadow-xs space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                      <LifeBuoy className="h-4 w-4" />
                    </span>
                    <span className="text-[10px] font-bold text-indigo-800 bg-indigo-50 px-2 py-0.5 rounded">
                      1 Ticket Active
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-navy-dark">Support & Help Desk</h4>
                  <p className="text-xs text-navy-600">
                    Query #TCK-0089: MoFPI solar capex subsidy clarification.
                  </p>
                </div>
                <Link
                  href="/portal/tickets"
                  className="text-xs font-semibold text-navy hover:text-gold flex items-center gap-1 pt-2 border-t border-navy-50"
                >
                  <span>Track ticket responses</span>
                  <ChevronRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mandatory Statutory Disclaimer Banner */}
      <RegulatoryDisclaimerBanner />
    </div>
  );
}
