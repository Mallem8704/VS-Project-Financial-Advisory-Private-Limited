import React from "react";
import { FolderGit2, ArrowRight } from "lucide-react";

export default function AdminProjectsPage() {
  const projects = [
    {
      id: "PRJ-089",
      client: "Apex Precision Engineering Pvt Ltd",
      sector: "Manufacturing",
      requestedLoan: "₹320 Lakhs",
      stage: "DPR & CMA Preparation",
      leadAdvisor: "Vikram Singhania",
      status: "ON_TRACK",
    },
    {
      id: "PRJ-090",
      client: "GreenVayu Solar Infrastructure LLP",
      sector: "Renewable Energy",
      requestedLoan: "₹650 Lakhs",
      stage: "Bank Query Resolution (SBI)",
      leadAdvisor: "Vikram Singhania",
      status: "URGENT_QUERY",
    },
    {
      id: "PRJ-091",
      client: "KisanAgro Cold Chain Storage",
      sector: "Agro Processing",
      requestedLoan: "₹280 Lakhs",
      stage: "Statutory Compliance & Udyam",
      leadAdvisor: "Ananya Roy",
      status: "ON_TRACK",
    },
  ];

  return (
    <div className="space-y-6 max-w-6xl">
      <div className="border-b border-navy-100 pb-4">
        <span className="text-[11px] font-bold uppercase tracking-wider text-gold-dark">Portfolio</span>
        <h1 className="text-2xl font-serif font-bold text-navy-dark">Advisory Projects</h1>
        <p className="text-xs text-navy-600 mt-0.5">Manage 14-stage lifecycle and credit underwriting for active borrower mandates.</p>
      </div>

      <div className="rounded-xl border border-navy-100 bg-white overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="border-b border-navy-100 bg-warm-50 text-[11px] font-bold text-navy-800 uppercase tracking-wider">
              <th className="p-4">Project ID & Client</th>
              <th className="p-4">Sector</th>
              <th className="p-4">Loan Quantum</th>
              <th className="p-4">Current Stage</th>
              <th className="p-4">Lead Advisor</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-navy-50 text-navy-800">
            {projects.map((p) => (
              <tr key={p.id} className="hover:bg-warm-50/50">
                <td className="p-4 space-y-0.5">
                  <p className="font-bold text-navy-900">{p.client}</p>
                  <p className="text-[10px] text-navy-500">{p.id}</p>
                </td>
                <td className="p-4 text-navy-600">{p.sector}</td>
                <td className="p-4 font-bold text-navy-900">{p.requestedLoan}</td>
                <td className="p-4 font-medium text-navy-800">{p.stage}</td>
                <td className="p-4 text-navy-700">{p.leadAdvisor}</td>
                <td className="p-4">
                  <span className={`rounded px-2 py-0.5 text-[10px] font-bold ${
                    p.status === "ON_TRACK" ? "bg-emerald-50 text-emerald-800 border border-emerald-200" : "bg-red-50 text-red-800 border border-red-200"
                  }`}>
                    {p.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
