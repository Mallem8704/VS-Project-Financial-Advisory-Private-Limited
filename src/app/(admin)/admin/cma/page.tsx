"use client";

import React from "react";
import { FileSpreadsheet, Calculator } from "lucide-react";

export default function AdminCmaWorkspacesPage() {
  const cmaList = [
    {
      id: "CMA-089",
      project: "Apex Precision Engineering Pvt Ltd",
      turnover: "₹350L (FY23)",
      method2Limit: "₹112.00 Lakhs",
      currentRatio: "1.35",
      dscr: "1.84x",
      status: "BALANCED",
    },
    {
      id: "CMA-090",
      project: "GreenVayu Solar Infrastructure LLP",
      turnover: "₹620L (FY23)",
      method2Limit: "₹185.00 Lakhs",
      currentRatio: "1.42",
      dscr: "2.10x",
      status: "BALANCED",
    },
  ];

  return (
    <div className="space-y-6 max-w-6xl">
      <div className="border-b border-navy-100 pb-4">
        <span className="text-[11px] font-bold uppercase tracking-wider text-gold-dark">Financial Engineering</span>
        <h1 className="text-2xl font-serif font-bold text-navy-dark">CMA Form I to VI Workspaces</h1>
        <p className="text-xs text-navy-600 mt-0.5">Manage Credit Monitoring Arrangement models, MPBF Method I & II, and bank ratio benchmarks.</p>
      </div>

      <div className="rounded-xl border border-navy-100 bg-white overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="border-b border-navy-100 bg-warm-50 text-[11px] font-bold text-navy-800 uppercase tracking-wider">
              <th className="p-4">CMA ID & Project</th>
              <th className="p-4">Turnover Base</th>
              <th className="p-4">MPBF Method II</th>
              <th className="p-4">Current Ratio</th>
              <th className="p-4">Avg DSCR</th>
              <th className="p-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-navy-50 text-navy-800">
            {cmaList.map((c) => (
              <tr key={c.id} className="hover:bg-warm-50/50">
                <td className="p-4 space-y-0.5">
                  <p className="font-bold text-navy-900">{c.project}</p>
                  <p className="text-[10px] text-navy-500">{c.id}</p>
                </td>
                <td className="p-4 text-navy-700">{c.turnover}</td>
                <td className="p-4 font-bold text-navy-900">{c.method2Limit}</td>
                <td className="p-4 text-emerald-700 font-bold">{c.currentRatio}</td>
                <td className="p-4 text-navy-800 font-semibold">{c.dscr}</td>
                <td className="p-4 text-right">
                  <button
                    onClick={() => alert(`Opening CMA Form I–VI Sheet for ${c.id}`)}
                    className="rounded bg-navy px-2.5 py-1 text-[10px] font-bold text-white hover:bg-navy-light"
                  >
                    Edit CMA Data
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
