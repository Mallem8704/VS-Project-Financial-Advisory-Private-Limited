"use client";

import React from "react";
import { FileCheck, Download, CheckCircle2, XCircle } from "lucide-react";

export default function AdminDocumentsPage() {
  const docs = [
    {
      id: "doc-1",
      project: "Apex Precision Engineering",
      title: "Audited Financials FY23",
      category: "Financials",
      uploadedDate: "18 Jan 2024",
      status: "UNDER_REVIEW",
    },
    {
      id: "doc-2",
      project: "Apex Precision Engineering",
      title: "CNC Machine Quotation Rev1",
      category: "Capex",
      uploadedDate: "22 Jan 2024",
      status: "REJECTED",
    },
    {
      id: "doc-3",
      project: "GreenVayu Solar",
      title: "Land Lease Agreement (25 Yrs)",
      category: "Property",
      uploadedDate: "20 Jan 2024",
      status: "VERIFIED",
    },
  ];

  return (
    <div className="space-y-6 max-w-6xl">
      <div className="border-b border-navy-100 pb-4">
        <span className="text-[11px] font-bold uppercase tracking-wider text-gold-dark">Underwriting Queue</span>
        <h1 className="text-2xl font-serif font-bold text-navy-dark">Document Review & Verification</h1>
        <p className="text-xs text-navy-600 mt-0.5">Audit uploaded borrower documents, verify GST/Udyam certificates, and approve files.</p>
      </div>

      <div className="rounded-xl border border-navy-100 bg-white overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="border-b border-navy-100 bg-warm-50 text-[11px] font-bold text-navy-800 uppercase tracking-wider">
              <th className="p-4">Project & Document Title</th>
              <th className="p-4">Category</th>
              <th className="p-4">Uploaded Date</th>
              <th className="p-4">Verification Status</th>
              <th className="p-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-navy-50 text-navy-800">
            {docs.map((d) => (
              <tr key={d.id} className="hover:bg-warm-50/50">
                <td className="p-4 space-y-0.5">
                  <p className="font-bold text-navy-900">{d.title}</p>
                  <p className="text-[10px] text-navy-500">{d.project}</p>
                </td>
                <td className="p-4 text-navy-600">{d.category}</td>
                <td className="p-4 text-navy-500">{d.uploadedDate}</td>
                <td className="p-4">
                  <span className={`rounded px-2 py-0.5 text-[10px] font-bold ${
                    d.status === "VERIFIED" ? "bg-emerald-50 text-emerald-800 border border-emerald-200" : d.status === "REJECTED" ? "bg-red-50 text-red-800 border border-red-200" : "bg-blue-50 text-blue-800 border border-blue-200"
                  }`}>
                    {d.status}
                  </span>
                </td>
                <td className="p-4 text-right space-x-2">
                  <button
                    onClick={() => alert(`Verified document ${d.id}`)}
                    className="rounded bg-emerald-600 px-2.5 py-1 text-[10px] font-bold text-white hover:bg-emerald-700"
                  >
                    Verify
                  </button>
                  <button
                    onClick={() => alert(`Marked document ${d.id} for revision`)}
                    className="rounded bg-red-600 px-2.5 py-1 text-[10px] font-bold text-white hover:bg-red-700"
                  >
                    Reject
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
