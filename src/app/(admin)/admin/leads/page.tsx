"use client";

import React from "react";
import { Users, Search, Plus, Filter } from "lucide-react";

export default function AdminLeadsPage() {
  const leads = [
    {
      id: "LEAD-401",
      name: "Suresh Patel",
      company: "Gujarat Polymers Industries",
      phone: "+91 98250 11223",
      loanAmount: "₹200 Lakhs",
      type: "Working Capital CC",
      status: "NEW",
      createdAt: "18 Sep 2026",
    },
    {
      id: "LEAD-402",
      name: "Meenakshi Sundaram",
      company: "Coimbatore Textile Processing",
      phone: "+91 94433 88990",
      loanAmount: "₹500 Lakhs",
      type: "CGTMSE & Term Loan",
      status: "CONTACTED",
      createdAt: "17 Sep 2026",
    },
    {
      id: "LEAD-403",
      name: "Harpreet Singh",
      company: "Amritsar Agro Exports Pvt Ltd",
      phone: "+91 98140 44556",
      loanAmount: "₹350 Lakhs",
      type: "Full Advisory",
      status: "QUALIFIED",
      createdAt: "16 Sep 2026",
    },
  ];

  return (
    <div className="space-y-6 max-w-6xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-navy-100 pb-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-gold-dark">CRM & Pipeline</span>
          <h1 className="text-2xl font-serif font-bold text-navy-dark">Lead Inquiries & Intake</h1>
          <p className="text-xs text-navy-600 mt-0.5">Manage new prospective borrower mandates from website and referral channels.</p>
        </div>
      </div>

      <div className="rounded-xl border border-navy-100 bg-white overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="border-b border-navy-100 bg-warm-50 text-[11px] font-bold text-navy-800 uppercase tracking-wider">
              <th className="p-4">Lead ID & Promoter</th>
              <th className="p-4">Enterprise Name</th>
              <th className="p-4">Requested Quantum</th>
              <th className="p-4">Facility Type</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-navy-50 text-navy-800">
            {leads.map((l) => (
              <tr key={l.id} className="hover:bg-warm-50/50">
                <td className="p-4 space-y-0.5">
                  <p className="font-bold text-navy-900">{l.name}</p>
                  <p className="text-[10px] text-navy-500">{l.phone}</p>
                </td>
                <td className="p-4 font-semibold text-navy-800">{l.company}</td>
                <td className="p-4 font-bold text-navy-900">{l.loanAmount}</td>
                <td className="p-4 text-navy-600">{l.type}</td>
                <td className="p-4">
                  <span className="rounded bg-blue-50 text-blue-800 border border-blue-200 px-2 py-0.5 text-[10px] font-bold">
                    {l.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <button
                    onClick={() => alert(`Assigning lead ${l.id} to Credit Advisor.`)}
                    className="rounded bg-gold px-2.5 py-1 text-[11px] font-bold text-white hover:bg-gold-hover"
                  >
                    Assign Advisor
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
