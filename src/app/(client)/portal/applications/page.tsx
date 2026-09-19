import React from "react";
import Link from "next/link";
import { Building2, FileCheck2, Clock, CheckCircle2, AlertCircle, ArrowUpRight, PlusCircle } from "lucide-react";

export default function PortalApplicationsPage() {
  const applications = [
    {
      id: "app-1",
      bankName: "State Bank of India",
      bankCode: "SBI",
      productName: "SBI SME Project Term Loan + MoFPI Subsidy",
      applicationNumber: "APP-SBI-2026-0042",
      branchCity: "SME City Credit Centre, Hyderabad",
      requestedAmount: 1875.0, // ₹18.75 Cr
      sanctionedAmount: null,
      status: "UNDER_APPRAISAL",
      submittedDate: "12 Sep 2026",
      lastFollowUp: "Yesterday, 04:30 PM",
      nextAction: "Credit Committee Clarification on Ancillary Solar Capex",
    },
    {
      id: "app-2",
      bankName: "HDFC Bank Limited",
      bankCode: "HDFC",
      productName: "Working Capital Cash Credit & LC Facility",
      applicationNumber: "APP-HDFC-2026-0189",
      branchCity: "Wholesale Banking Branch, Banjara Hills",
      requestedAmount: 600.0, // ₹6.00 Cr
      sanctionedAmount: null,
      status: "DOCUMENTATION_PENDING",
      submittedDate: "Draft",
      lastFollowUp: "3 days ago",
      nextAction: "Awaiting final CMA Form IV working capital submission",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-navy-100 pb-4">
        <div>
          <h1 className="text-xl font-bold text-navy-dark">Institutional Loan Applications</h1>
          <p className="text-xs text-navy-500 mt-0.5">
            Real-time status of credit applications submitted to PSU banks, private banks, and NBFCs.
          </p>
        </div>
        <Link
          href="/portal/dashboard"
          className="inline-flex items-center gap-1.5 rounded-xl bg-navy text-white px-4 py-2 text-xs font-semibold hover:bg-navy-dark transition-all"
        >
          <Building2 className="h-4 w-4 text-gold" />
          <span>Track in Journey Timeline</span>
        </Link>
      </div>

      <div className="space-y-4">
        {applications.map((app) => (
          <div
            key={app.id}
            className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm hover:border-navy-200 transition-all space-y-4"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-navy-50 pb-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy/5 font-bold text-navy text-sm border border-navy-100">
                  {app.bankCode}
                </div>
                <div>
                  <h2 className="text-sm font-bold text-navy-dark">{app.bankName}</h2>
                  <p className="text-xs text-navy-500">{app.productName}</p>
                </div>
              </div>
              <span className="rounded-full bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 text-xs font-semibold">
                {app.status === "UNDER_APPRAISAL" ? "Under Active Appraisal" : "Documentation Pending"}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div>
                <p className="text-navy-400">Application Number</p>
                <p className="font-mono font-semibold text-navy-dark mt-0.5">{app.applicationNumber}</p>
              </div>
              <div>
                <p className="text-navy-400">Requested Debt</p>
                <p className="font-semibold text-emerald-700 mt-0.5">₹{(app.requestedAmount / 100).toFixed(2)} Cr (₹{app.requestedAmount} L)</p>
              </div>
              <div>
                <p className="text-navy-400">Submission Date</p>
                <p className="font-medium text-navy-dark mt-0.5">{app.submittedDate}</p>
              </div>
              <div>
                <p className="text-navy-400">Appraisal Branch</p>
                <p className="font-medium text-navy-dark mt-0.5 truncate">{app.branchCity}</p>
              </div>
            </div>

            <div className="rounded-xl bg-slate-50 p-3.5 border border-navy-50 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-gold-dark shrink-0" />
                <span className="text-navy-700">
                  <strong>Current Focus:</strong> {app.nextAction}
                </span>
              </div>
              <span className="text-navy-400 hidden sm:inline">Last update: {app.lastFollowUp}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
