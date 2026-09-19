"use client";

import React from "react";
import { FileText, Download, CheckCircle2, Clock } from "lucide-react";
import { RegulatoryDisclaimerBanner } from "@/components/brand/RegulatoryDisclaimerBanner";

export default function ClientReportsPage() {
  const reports = [
    {
      title: "Detailed Project Report (DPR) - Draft v1.2",
      type: "DPR Report",
      pages: "58 Pages",
      status: "UNDER_CLIENT_REVIEW",
      date: "24 Jan 2024",
    },
    {
      title: "Credit Monitoring Arrangement (CMA) - Form I to VI",
      type: "CMA Data",
      pages: "6 Statements + Ratios",
      status: "RECONCILED",
      date: "22 Jan 2024",
    },
    {
      title: "Techno-Economic Feasibility Report (TEFR)",
      type: "Feasibility Study",
      pages: "24 Pages",
      status: "APPROVED",
      date: "16 Jan 2024",
    },
  ];

  return (
    <div className="space-y-6 max-w-5xl">
      <div className="border-b border-navy-100 pb-4">
        <span className="text-[11px] font-bold uppercase tracking-wider text-gold-dark">
          Deliverables & Outputs
        </span>
        <h1 className="text-2xl font-serif font-bold text-navy-dark">
          Project Reports & Financial Statements
        </h1>
        <p className="text-xs text-navy-600 mt-0.5">
          Access compiled bankable reports, CMA statements, and techno-economic studies.
        </p>
      </div>

      <div className="rounded-xl border border-navy-100 bg-white overflow-hidden shadow-sm">
        <div className="divide-y divide-navy-50 text-xs">
          {reports.map((r, idx) => (
            <div key={idx} className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-warm-50/50">
              <div className="space-y-1">
                <span className="rounded bg-navy-50 px-2 py-0.5 text-[10px] font-bold text-navy-800">
                  {r.type}
                </span>
                <h3 className="text-sm font-bold text-navy-dark">{r.title}</h3>
                <p className="text-[11px] text-navy-500">{r.pages} • Generated: {r.date}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="rounded bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-1 text-[10px] font-bold">
                  {r.status}
                </span>
                <button
                  onClick={() => alert(`Downloading secure copy of ${r.title}`)}
                  className="rounded-lg bg-gold px-3.5 py-1.5 text-xs font-bold text-white hover:bg-gold-hover shadow-sm inline-flex items-center gap-1.5"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Download</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <RegulatoryDisclaimerBanner />
    </div>
  );
}
