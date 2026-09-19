"use client";

import React from "react";
import { FileText, Sparkles, Download } from "lucide-react";

export default function AdminDprWorkspacesPage() {
  const workspaces = [
    {
      id: "DPR-089",
      project: "Apex Precision Engineering Pvt Ltd",
      chaptersCompleted: "6 of 8 Chapters",
      aiAssisted: true,
      lastUpdated: "24 Jan 2024",
      status: "IN_PROGRESS",
    },
    {
      id: "DPR-090",
      project: "GreenVayu Solar Infrastructure LLP",
      chaptersCompleted: "8 of 8 Chapters (Ready)",
      aiAssisted: true,
      lastUpdated: "21 Jan 2024",
      status: "READY_FOR_BANK",
    },
  ];

  return (
    <div className="space-y-6 max-w-6xl">
      <div className="border-b border-navy-100 pb-4">
        <span className="text-[11px] font-bold uppercase tracking-wider text-gold-dark">Synthesis Studio</span>
        <h1 className="text-2xl font-serif font-bold text-navy-dark">AI DPR Workspaces</h1>
        <p className="text-xs text-navy-600 mt-0.5">Automated chapter drafting, technical feasibility, and capex scheduling.</p>
      </div>

      <div className="rounded-xl border border-navy-100 bg-white overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="border-b border-navy-100 bg-warm-50 text-[11px] font-bold text-navy-800 uppercase tracking-wider">
              <th className="p-4">DPR ID & Project</th>
              <th className="p-4">Progress</th>
              <th className="p-4">AI Engine</th>
              <th className="p-4">Last Updated</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-navy-50 text-navy-800">
            {workspaces.map((w) => (
              <tr key={w.id} className="hover:bg-warm-50/50">
                <td className="p-4 space-y-0.5">
                  <p className="font-bold text-navy-900">{w.project}</p>
                  <p className="text-[10px] text-navy-500">{w.id}</p>
                </td>
                <td className="p-4 font-semibold text-navy-800">{w.chaptersCompleted}</td>
                <td className="p-4">
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-gold-dark bg-gold/10 px-2 py-0.5 rounded">
                    <Sparkles className="h-3 w-3 text-gold" />
                    <span>Gemini Pro / GPT-4o</span>
                  </span>
                </td>
                <td className="p-4 text-navy-500">{w.lastUpdated}</td>
                <td className="p-4">
                  <span className="rounded bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 text-[10px] font-bold">
                    {w.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <button
                    onClick={() => alert(`Opening DPR Workspace ${w.id}`)}
                    className="rounded bg-navy px-2.5 py-1 text-[10px] font-bold text-white hover:bg-navy-light"
                  >
                    Open Workspace
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
