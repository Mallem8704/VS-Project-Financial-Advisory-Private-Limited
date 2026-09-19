"use client";

import React from "react";
import { BookOpen, Plus, ExternalLink } from "lucide-react";

export default function AdminKnowledgeCmsPage() {
  const articles = [
    {
      id: "art-1",
      title: "Master Direction – Priority Sector Lending (PSL) – Targets and Classification",
      category: "RBI Circular",
      authority: "Reserve Bank of India (RBI)",
      published: "2024-04-01",
      reviewed: "2024-11-15",
      reviewedBy: "VS Advisory Banking Law Desk (CA / Ex-DGM PNB)",
      status: "PUBLISHED",
    },
    {
      id: "art-2",
      title: "Enhancement of Ceiling Limit for Credit Guarantee Scheme for MSEs to ₹500 Lakhs",
      category: "MSME Subsidy",
      authority: "CGTMSE Trust",
      published: "2023-04-01",
      reviewed: "2024-10-10",
      reviewedBy: "Head of Project Finance",
      status: "PUBLISHED",
    },
  ];

  return (
    <div className="space-y-6 max-w-6xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-navy-100 pb-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-gold-dark">Regulatory Content Management</span>
          <h1 className="text-2xl font-serif font-bold text-navy-dark">Knowledge Hub CMS</h1>
          <p className="text-xs text-navy-600 mt-0.5">Manage circulars, banking regulations, and subsidies with mandatory attribution metadata.</p>
        </div>
        <button
          onClick={() => alert("Open CMS Publishing modal with mandatory source URL, issuing authority, publication date, effective date, last reviewed date, reviewed by, status, and applicable audience.")}
          className="rounded-lg bg-gold px-4 py-2 text-xs font-bold text-white hover:bg-gold-hover shadow-sm inline-flex items-center gap-1.5"
        >
          <Plus className="h-4 w-4" />
          <span>Add Regulatory Circular</span>
        </button>
      </div>

      <div className="rounded-xl border border-navy-100 bg-white overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="border-b border-navy-100 bg-warm-50 text-[11px] font-bold text-navy-800 uppercase tracking-wider">
              <th className="p-4">Title & Category</th>
              <th className="p-4">Issuing Authority</th>
              <th className="p-4">Dates (Pub / Rev)</th>
              <th className="p-4">Reviewed By</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-navy-50 text-navy-800">
            {articles.map((a) => (
              <tr key={a.id} className="hover:bg-warm-50/50">
                <td className="p-4 space-y-0.5">
                  <p className="font-bold text-navy-900">{a.title}</p>
                  <span className="text-[10px] text-navy-500">{a.category}</span>
                </td>
                <td className="p-4 font-semibold text-navy-800">{a.authority}</td>
                <td className="p-4 text-navy-600">
                  <p>Pub: {a.published}</p>
                  <p className="text-[10px] text-navy-500">Rev: {a.reviewed}</p>
                </td>
                <td className="p-4 text-navy-700">{a.reviewedBy}</td>
                <td className="p-4">
                  <span className="rounded bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 text-[10px] font-bold">
                    {a.status}
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
