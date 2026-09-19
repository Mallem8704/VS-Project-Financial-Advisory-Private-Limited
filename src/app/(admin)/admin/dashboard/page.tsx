"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Users,
  ShieldCheck,
  TrendingUp,
  FolderGit2,
  FileCheck,
  AlertCircle,
  Clock,
  ArrowRight,
  Sparkles,
  Search,
  CheckCircle2,
} from "lucide-react";

export default function AdminPortalPage() {
  const [activeTab, setActiveTab] = useState<"projects" | "leads">("projects");

  const stats = [
    { title: "Total Project Capex Advised", value: "₹142.50 Cr", subtitle: "Across 42 active mandates" },
    { title: "Active MSME Client Files", value: "38 Projects", subtitle: "12 in DPR/CMA stage" },
    { title: "Avg. DPR Turnaround Time", value: "5.8 Days", subtitle: "AI-assisted drafting with CA review" },
    { title: "Bank Submission Success", value: "88.4%", subtitle: "High credit appraisal compliance" },
  ];

  const projects = [
    {
      id: "PRJ-089",
      clientName: "Apex Precision Engineering Pvt Ltd",
      sector: "Manufacturing",
      requestedLoan: "₹320 Lakhs",
      stage: "DPR & CMA Preparation",
      assignedAdvisor: "Vikram Singhania (VP)",
      status: "ON_TRACK",
    },
    {
      id: "PRJ-090",
      clientName: "GreenVayu Solar Infrastructure LLP",
      sector: "Renewable Energy",
      requestedLoan: "₹650 Lakhs",
      stage: "Bank Query Resolution (SBI)",
      assignedAdvisor: "Vikram Singhania (VP)",
      status: "URGENT_QUERY",
    },
    {
      id: "PRJ-091",
      clientName: "KisanAgro Cold Chain Storage",
      sector: "Agro Processing",
      requestedLoan: "₹280 Lakhs",
      stage: "Statutory Compliance & Udyam",
      assignedAdvisor: "Ananya Roy (Analyst)",
      status: "ON_TRACK",
    },
    {
      id: "PRJ-092",
      clientName: "Sanjeevani Diagnostic Hospitals",
      sector: "Healthcare",
      requestedLoan: "₹450 Lakhs",
      stage: "Finance Readiness Diagnostic",
      assignedAdvisor: "Dr. Arvind Mehta (Advisor)",
      status: "PENDING_CLIENT_DOCS",
    },
  ];

  const leads = [
    {
      id: "LEAD-401",
      name: "Suresh Patel",
      company: "Gujarat Polymers Industries",
      phone: "+91 98250 11223",
      loanAmount: "₹200 Lakhs",
      type: "Working Capital CC",
      status: "NEW",
    },
    {
      id: "LEAD-402",
      name: "Meenakshi Sundaram",
      company: "Coimbatore Textile Processing",
      phone: "+91 94433 88990",
      loanAmount: "₹500 Lakhs",
      type: "CGTMSE & Term Loan",
      status: "CONTACTED",
    },
    {
      id: "LEAD-403",
      name: "Harpreet Singh",
      company: "Amritsar Agro Exports Pvt Ltd",
      phone: "+91 98140 44556",
      loanAmount: "₹350 Lakhs",
      type: "Full Advisory",
      status: "QUALIFIED",
    },
  ];

  return (
    <div className="space-y-8 max-w-6xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-navy-100 pb-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-gold-dark">
            Executive Operations Desk
          </span>
          <h1 className="text-2xl font-serif font-bold text-navy-dark">
            Admin & Advisor Control Portal
          </h1>
          <p className="text-xs text-navy-600 mt-0.5">
            Portfolio monitoring, project assignments, lead pipeline, and compliance oversight.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/portal/admin/audit-logs"
            className="rounded-lg border border-navy-200 bg-white px-3.5 py-2 text-xs font-bold text-navy-800 hover:bg-warm-100 transition-all"
          >
            Audit Logs
          </Link>
          <Link
            href="/portal/admin/ca-partners"
            className="rounded-lg bg-navy px-4 py-2 text-xs font-bold text-white hover:bg-navy-light transition-all"
          >
            CA Partner Network
          </Link>
        </div>
      </div>

      {/* Analytics Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-navy-100 bg-white p-5 shadow-sm space-y-1.5"
          >
            <span className="text-[11px] font-semibold text-navy-500 uppercase">{s.title}</span>
            <p className="text-2xl font-serif font-bold text-navy-dark">{s.value}</p>
            <p className="text-[10px] text-gold-dark font-medium">{s.subtitle}</p>
          </div>
        ))}
      </div>

      {/* Switcher & Table */}
      <div className="rounded-2xl border border-navy-100 bg-white overflow-hidden shadow-institutional">
        <div className="flex items-center justify-between border-b border-navy-100 p-4">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab("projects")}
              className={`rounded-lg px-4 py-1.5 text-xs font-bold transition-all ${
                activeTab === "projects"
                  ? "bg-navy text-white"
                  : "bg-warm-100 text-navy-700 hover:bg-warm-200"
              }`}
            >
              Active Advisory Projects ({projects.length})
            </button>
            <button
              onClick={() => setActiveTab("leads")}
              className={`rounded-lg px-4 py-1.5 text-xs font-bold transition-all ${
                activeTab === "leads"
                  ? "bg-navy text-white"
                  : "bg-warm-100 text-navy-700 hover:bg-warm-200"
              }`}
            >
              Lead Inquiries CRM ({leads.length})
            </button>
          </div>
        </div>

        {/* Projects Tab */}
        {activeTab === "projects" && (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-navy-100 bg-warm-50 text-[11px] font-bold text-navy-800 uppercase tracking-wider">
                  <th className="p-4">Project ID & Client</th>
                  <th className="p-4">Sector</th>
                  <th className="p-4">Loan Quantum</th>
                  <th className="p-4">Active Stage</th>
                  <th className="p-4">Lead Advisor</th>
                  <th className="p-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-navy-50 text-navy-800">
                {projects.map((p) => (
                  <tr key={p.id} className="hover:bg-warm-50/50 transition-colors">
                    <td className="p-4 space-y-0.5">
                      <span className="font-bold text-navy-900">{p.clientName}</span>
                      <p className="text-[10px] text-navy-500">{p.id}</p>
                    </td>
                    <td className="p-4 text-navy-600">{p.sector}</td>
                    <td className="p-4 font-bold text-navy-900">{p.requestedLoan}</td>
                    <td className="p-4">
                      <span className="rounded bg-navy-50 px-2 py-0.5 text-[11px] font-semibold text-navy-800">
                        {p.stage}
                      </span>
                    </td>
                    <td className="p-4 text-navy-700">{p.assignedAdvisor}</td>
                    <td className="p-4">
                      <span
                        className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded border ${
                          p.status === "ON_TRACK"
                            ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                            : p.status === "URGENT_QUERY"
                            ? "bg-red-50 text-red-800 border-red-200 animate-pulse"
                            : "bg-amber-50 text-amber-800 border-amber-200"
                        }`}
                      >
                        {p.status.replace("_", " ")}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Leads Tab */}
        {activeTab === "leads" && (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-navy-100 bg-warm-50 text-[11px] font-bold text-navy-800 uppercase tracking-wider">
                  <th className="p-4">Lead ID & Contact</th>
                  <th className="p-4">Business Entity</th>
                  <th className="p-4">Estimated Loan</th>
                  <th className="p-4">Advisory Category</th>
                  <th className="p-4">CRM Status</th>
                  <th className="p-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-navy-50 text-navy-800">
                {leads.map((l) => (
                  <tr key={l.id} className="hover:bg-warm-50/50 transition-colors">
                    <td className="p-4 space-y-0.5">
                      <p className="font-bold text-navy-900">{l.name}</p>
                      <p className="text-[10px] text-navy-500">{l.phone}</p>
                    </td>
                    <td className="p-4 font-semibold text-navy-800">{l.company}</td>
                    <td className="p-4 font-bold text-navy-900">{l.loanAmount}</td>
                    <td className="p-4 text-navy-600">{l.type}</td>
                    <td className="p-4">
                      <span
                        className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded border ${
                          l.status === "NEW"
                            ? "bg-blue-50 text-blue-800 border-blue-200"
                            : l.status === "QUALIFIED"
                            ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                            : "bg-warm-100 text-navy-700 border-navy-200"
                        }`}
                      >
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
        )}
      </div>
    </div>
  );
}
