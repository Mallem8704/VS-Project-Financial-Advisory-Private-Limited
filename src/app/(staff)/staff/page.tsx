import React from "react";
import { UserCheck, FolderGit2, FileText, CheckCircle2, Clock } from "lucide-react";
import Link from "next/link";

export default function StaffAdvisorDeskPage() {
  return (
    <div className="bg-warm min-h-screen p-6 sm:p-8 space-y-6 max-w-6xl mx-auto">
      <div className="border-b border-navy-100 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-gold-dark">
            Advisor Workbench
          </span>
          <h1 className="text-2xl font-serif font-bold text-navy-dark">
            Staff & Underwriter Workspace
          </h1>
          <p className="text-xs text-navy-600 mt-0.5">
            Manage assigned MSME borrower mandates, DPR drafting, and CMA reconciliations.
          </p>
        </div>
        <Link
          href="/admin/dashboard"
          className="rounded-lg bg-navy px-4 py-2 text-xs font-bold text-white hover:bg-navy-light"
        >
          Open Admin Control Desk
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
        <div className="rounded-xl border border-navy-100 bg-white p-5 shadow-sm space-y-2">
          <span className="text-navy-500 font-semibold uppercase text-[10px]">Assigned Active Mandates</span>
          <p className="text-2xl font-serif font-bold text-navy-dark">14 Projects</p>
          <p className="text-[10px] text-gold-dark font-medium">6 in DPR/CMA preparation</p>
        </div>
        <div className="rounded-xl border border-navy-100 bg-white p-5 shadow-sm space-y-2">
          <span className="text-navy-500 font-semibold uppercase text-[10px]">Pending Document Reviews</span>
          <p className="text-2xl font-serif font-bold text-navy-dark">8 Documents</p>
          <p className="text-[10px] text-amber-700 font-medium">2 priority queries</p>
        </div>
        <div className="rounded-xl border border-navy-100 bg-white p-5 shadow-sm space-y-2">
          <span className="text-navy-500 font-semibold uppercase text-[10px]">Upcoming Banker Meetings</span>
          <p className="text-2xl font-serif font-bold text-navy-dark">3 Sessions</p>
          <p className="text-[10px] text-emerald-700 font-medium">SBI SME & SIDBI branches</p>
        </div>
      </div>
    </div>
  );
}
