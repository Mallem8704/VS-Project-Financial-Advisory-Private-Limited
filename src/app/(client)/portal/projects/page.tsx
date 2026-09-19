import React from "react";
import { JOURNEY_STAGES } from "@/data/journey-stages";
import { RegulatoryDisclaimerBanner } from "@/components/brand/RegulatoryDisclaimerBanner";
import { CheckCircle2, Clock, AlertCircle, ArrowRight, UserCheck, Building } from "lucide-react";

export default function ClientProjectTrackerPage() {
  // Mock active project state: stages 1-4 completed, stage 5 completed, stage 6 & 7 in progress
  const activeStageId = 6;

  return (
    <div className="space-y-8 max-w-5xl">
      <div className="border-b border-navy-100 pb-4">
        <span className="text-[11px] font-bold uppercase tracking-wider text-gold-dark">
          Milestone Execution
        </span>
        <h1 className="text-2xl font-serif font-bold text-navy-dark">
          14-Stage Project Status Tracker
        </h1>
        <p className="text-xs text-navy-600 mt-1">
          Tracking Apex Precision Engineering Pvt Ltd (Term Loan ₹245L + CC ₹75L)
        </p>
      </div>

      {/* Progress Metric Bar */}
      <div className="rounded-xl border border-navy-100 bg-white p-6 shadow-sm space-y-3">
        <div className="flex items-center justify-between text-xs font-bold">
          <span className="text-navy-900">Overall Advisory Completion</span>
          <span className="text-gold-dark">45% (Stages 1–5 Completed)</span>
        </div>
        <div className="h-2.5 w-full rounded-full bg-navy-50 overflow-hidden">
          <div className="h-full rounded-full bg-gold transition-all duration-500" style={{ width: "45%" }} />
        </div>
        <div className="flex items-center justify-between text-[11px] text-navy-500 pt-1">
          <span>Started: 12 Jan 2024</span>
          <span>Target Bank Sanction Submission: 28 Feb 2024</span>
        </div>
      </div>

      {/* 14 Stages Timeline List */}
      <div className="space-y-3">
        {JOURNEY_STAGES.map((stage) => {
          const isCompleted = stage.id < activeStageId;
          const isInProgress = stage.id === activeStageId;
          const isPending = stage.id > activeStageId;

          return (
            <div
              key={stage.id}
              className={`rounded-xl border p-4 sm:p-5 transition-all ${
                isInProgress
                  ? "border-gold bg-white shadow-institutional ring-1 ring-gold/40"
                  : isCompleted
                  ? "border-navy-100 bg-white shadow-sm"
                  : "border-navy-100 bg-warm-50/50 opacity-70"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-start sm:items-center gap-3">
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                      isCompleted
                        ? "bg-emerald-100 text-emerald-800"
                        : isInProgress
                        ? "bg-gold text-white animate-pulse"
                        : "bg-navy-100 text-navy-500"
                    }`}
                  >
                    {isCompleted ? <CheckCircle2 className="h-5 w-5" /> : stage.id}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-navy-900">
                        Stage {stage.id}: {stage.title}
                      </span>
                      <span className="text-[10px] text-navy-500 font-medium">
                        ({stage.phase.split(":")[0]})
                      </span>
                    </div>
                    <p className="text-xs text-navy-600 mt-0.5 line-clamp-1">
                      {stage.summary}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs shrink-0 self-end sm:self-auto">
                  <span
                    className={`text-[10px] font-bold px-2.5 py-0.5 rounded border ${
                      isCompleted
                        ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                        : isInProgress
                        ? "bg-gold/15 text-gold-dark border-gold/40"
                        : "bg-navy-50 text-navy-600 border-navy-100"
                    }`}
                  >
                    {isCompleted ? "Completed" : isInProgress ? "In Progress (Active)" : "Pending"}
                  </span>
                  <span className="text-[11px] text-navy-500 font-medium hidden sm:inline">
                    Actor: {stage.id <= 5 ? "VS Advisory / Client" : stage.id <= 11 ? "VS Advisory" : "Lender Bank"}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <RegulatoryDisclaimerBanner />
    </div>
  );
}
