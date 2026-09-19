import React from "react";
import Link from "next/link";
import { RegulatoryDisclaimerBanner } from "@/components/brand/RegulatoryDisclaimerBanner";
import {
  Activity,
  CheckCircle2,
  AlertCircle,
  Clock,
  ArrowRight,
  FileCheck,
  Receipt,
  MessageSquare,
  Sparkles,
  Upload,
  Calendar,
} from "lucide-react";

export default function ClientDashboardPage() {
  const fiveQuestions = {
    whatIsHappening: {
      title: "What is happening?",
      badge: "Stage 6 & 7 Active",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      content:
        "Your project is currently in the DPR (Detailed Project Report) and CMA Data Preparation phase. Our financial engineering team is reconciling your past 2 years audited balance sheets with projected turnover figures.",
    },
    whatHasBeenCompleted: {
      title: "What has been completed?",
      badge: "4 Stages Finalized",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      items: [
        "Business Idea & Techno-Economic Feasibility validated",
        "Pvt Ltd Corporate constitution & MoA borrowing clauses verified",
        "Udyam MSME registration category formalized",
        "Means of finance (₹350L Capex: ₹105L Equity / ₹245L Debt) approved",
      ],
    },
    whatIsPendingFromMe: {
      title: "What is pending from me (Client)?",
      badge: "2 Action Items",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
      items: [
        "Upload CA Certified Net Worth Certificate for Promoter 2 (Mrs. Anjali Sharma)",
        "Furnish revised quotation for CNC Milling Machine from Lakshmi Machine Works",
      ],
      actionHref: "/portal/client/documents",
      actionText: "Upload Pending Documents Now",
    },
    whatIsVsWorkingOn: {
      title: "What is VS Advisory working on?",
      badge: "Active Advisor Task",
      badgeColor: "bg-gold/10 text-gold-dark border-gold/30",
      items: [
        "Synthesizing Chapter 5 of DPR (Raw Material & Power Utility Schedules)",
        "Finalizing Form IV MPBF Method II calculation and Current Ratio sensitivity",
        "Scheduling pre-submission review call with Lead Credit Advisor",
      ],
    },
    whatHappensNext: {
      title: "What happens next?",
      badge: "Upcoming Milestone",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
      content:
        "Once the draft DPR & CMA data are locked and approved by you, we compile the full loan dossier and initiate formal submission to target banks (SBI SME Branch & SIDBI) for credit appraisal.",
      targetDate: "Target Submission: Within 5 Business Days",
    },
  };

  return (
    <div className="space-y-8 max-w-6xl">
      {/* Welcome & Overview Strip */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-navy-100 pb-6">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-gold-dark">
            Enterprise Client Workspace
          </span>
          <h1 className="text-2xl font-serif font-bold text-navy-dark">
            Apex Precision Engineering Pvt Ltd
          </h1>
          <p className="text-xs text-navy-600 mt-0.5">
            Facility Requirement: ₹245.00 Lakhs Term Loan + ₹75.00 Lakhs Cash Credit (Total: ₹320.00 Lakhs)
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/portal/client/documents"
            className="inline-flex items-center gap-1.5 rounded-lg bg-gold px-4 py-2 text-xs font-bold text-white hover:bg-gold-hover transition-all shadow-sm"
          >
            <Upload className="h-3.5 w-3.5" />
            <span>Upload Document</span>
          </Link>
          <Link
            href="/portal/client/messages"
            className="inline-flex items-center gap-1.5 rounded-lg border border-navy-200 bg-white px-4 py-2 text-xs font-bold text-navy-800 hover:bg-warm-100 transition-all"
          >
            <MessageSquare className="h-3.5 w-3.5 text-navy-500" />
            <span>Message Advisor</span>
          </Link>
        </div>
      </div>

      {/* Flagship Section: The 5 Core UX Answers */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-navy-dark">
            Project Status Snapshot (The 5 Fundamental Questions)
          </h2>
          <Link
            href="/portal/client/projects"
            className="text-xs font-bold text-gold-dark hover:underline flex items-center gap-1"
          >
            <span>View 14-Stage Interactive Timeline</span>
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* 1. What is happening? */}
          <div className="rounded-xl border border-navy-100 bg-white p-5 shadow-sm space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-navy-900">{fiveQuestions.whatIsHappening.title}</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${fiveQuestions.whatIsHappening.badgeColor}`}>
                  {fiveQuestions.whatIsHappening.badge}
                </span>
              </div>
              <p className="text-xs text-navy-700 leading-relaxed">
                {fiveQuestions.whatIsHappening.content}
              </p>
            </div>
            <div className="pt-2 border-t border-navy-50 text-[11px] text-navy-500 flex items-center gap-1.5">
              <Activity className="h-3.5 w-3.5 text-blue-600 shrink-0" />
              <span>DPR Draft 65% Complete</span>
            </div>
          </div>

          {/* 2. What has been completed? */}
          <div className="rounded-xl border border-navy-100 bg-white p-5 shadow-sm space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-navy-900">{fiveQuestions.whatHasBeenCompleted.title}</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${fiveQuestions.whatHasBeenCompleted.badgeColor}`}>
                  {fiveQuestions.whatHasBeenCompleted.badge}
                </span>
              </div>
              <ul className="space-y-1.5 text-xs text-navy-700">
                {fiveQuestions.whatHasBeenCompleted.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-2 border-t border-navy-50 text-[11px] text-emerald-700 font-semibold">
              Milestone 1–4 Sign-Off Executed
            </div>
          </div>

          {/* 3. What is pending from me? */}
          <div className="rounded-xl border border-amber-200 bg-amber-50/40 p-5 shadow-sm space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-900">{fiveQuestions.whatIsPendingFromMe.title}</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${fiveQuestions.whatIsPendingFromMe.badgeColor}`}>
                  {fiveQuestions.whatIsPendingFromMe.badge}
                </span>
              </div>
              <ul className="space-y-2 text-xs text-amber-950">
                {fiveQuestions.whatIsPendingFromMe.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <AlertCircle className="h-3.5 w-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-2 border-t border-amber-200">
              <Link
                href={fiveQuestions.whatIsPendingFromMe.actionHref}
                className="text-xs font-bold text-amber-800 hover:underline flex items-center gap-1"
              >
                <span>{fiveQuestions.whatIsPendingFromMe.actionText}</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>

          {/* 4. What is VS working on? */}
          <div className="rounded-xl border border-navy-100 bg-white p-5 shadow-sm space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-navy-900">{fiveQuestions.whatIsVsWorkingOn.title}</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${fiveQuestions.whatIsVsWorkingOn.badgeColor}`}>
                  {fiveQuestions.whatIsVsWorkingOn.badge}
                </span>
              </div>
              <ul className="space-y-1.5 text-xs text-navy-700">
                {fiveQuestions.whatIsVsWorkingOn.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-gold shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-2 border-t border-navy-50 text-[11px] text-navy-500">
              Assigned Analyst: Ananya Roy (Financial Analyst)
            </div>
          </div>

          {/* 5. What happens next? */}
          <div className="rounded-xl border border-navy-100 bg-white p-5 shadow-sm space-y-3 flex flex-col justify-between md:col-span-2 lg:col-span-2">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-navy-900">{fiveQuestions.whatHappensNext.title}</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${fiveQuestions.whatHappensNext.badgeColor}`}>
                  {fiveQuestions.whatHappensNext.badge}
                </span>
              </div>
              <p className="text-xs text-navy-700 leading-relaxed">
                {fiveQuestions.whatHappensNext.content}
              </p>
            </div>
            <div className="pt-2 border-t border-navy-50 flex items-center justify-between text-xs">
              <span className="text-navy-500 font-medium">{fiveQuestions.whatHappensNext.targetDate}</span>
              <span className="font-bold text-gold-dark">Stage 10: Bank Application Packet</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Access Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <Link
          href="/portal/client/documents"
          className="rounded-xl border border-navy-100 bg-white p-5 shadow-sm hover:border-gold/40 hover:shadow-institutional transition-all space-y-2"
        >
          <div className="flex items-center justify-between">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-50 text-navy">
              <FileCheck className="h-5 w-5 text-gold" />
            </div>
            <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
              2 Pending
            </span>
          </div>
          <h3 className="text-sm font-bold text-navy-dark">Secure Document Vault</h3>
          <p className="text-xs text-navy-600">
            12 of 14 mandatory banking documents verified by advisor.
          </p>
        </Link>

        <Link
          href="/portal/client/invoices"
          className="rounded-xl border border-navy-100 bg-white p-5 shadow-sm hover:border-gold/40 hover:shadow-institutional transition-all space-y-2"
        >
          <div className="flex items-center justify-between">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-50 text-navy">
              <Receipt className="h-5 w-5 text-gold" />
            </div>
            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              Paid Up to Date
            </span>
          </div>
          <h3 className="text-sm font-bold text-navy-dark">Invoices & Razorpay</h3>
          <p className="text-xs text-navy-600">
            Milestone 2 invoice cleared. Milestone 3 due upon final DPR sign-off.
          </p>
        </Link>

        <Link
          href="/portal/client/messages"
          className="rounded-xl border border-navy-100 bg-white p-5 shadow-sm hover:border-gold/40 hover:shadow-institutional transition-all space-y-2"
        >
          <div className="flex items-center justify-between">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-50 text-navy">
              <MessageSquare className="h-5 w-5 text-gold" />
            </div>
            <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
              1 Unread
            </span>
          </div>
          <h3 className="text-sm font-bold text-navy-dark">Advisor Communications</h3>
          <p className="text-xs text-navy-600">
            Direct secure communication with assigned Credit VP.
          </p>
        </Link>
      </div>

      {/* Regulatory Notice Banner */}
      <RegulatoryDisclaimerBanner />
    </div>
  );
}
