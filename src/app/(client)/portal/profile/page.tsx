import React from "react";
import { Building, User, FileText, CheckCircle2, ShieldCheck } from "lucide-react";

export default function ClientProfilePage() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div className="border-b border-navy-100 pb-4">
        <span className="text-[11px] font-bold uppercase tracking-wider text-gold-dark">
          Corporate Credentials
        </span>
        <h1 className="text-2xl font-serif font-bold text-navy-dark">
          Enterprise Profile & Constitution
        </h1>
        <p className="text-xs text-navy-600 mt-0.5">
          Statutory company parameters registered with VS Project & Financial Advisory.
        </p>
      </div>

      <div className="rounded-2xl border border-navy-100 bg-white p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center justify-between border-b border-navy-50 pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-gold font-bold text-lg">
              AP
            </div>
            <div>
              <h2 className="text-base font-bold text-navy-dark">Apex Precision Engineering Pvt Ltd</h2>
              <p className="text-xs text-navy-500">Incorporated: 18 May 2019 • CIN: U28910MH2019PTC325411</p>
            </div>
          </div>
          <span className="rounded bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 text-xs font-bold">
            KYC Verified
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-warm-50 border border-navy-50 space-y-1">
            <span className="text-navy-500 font-semibold uppercase text-[10px]">Constitution</span>
            <p className="font-bold text-navy-900">Private Limited Company</p>
          </div>
          <div className="p-4 rounded-xl bg-warm-50 border border-navy-50 space-y-1">
            <span className="text-navy-500 font-semibold uppercase text-[10px]">Udyam Registration</span>
            <p className="font-bold text-navy-900">UDYAM-MH-12-0049211 (Small)</p>
          </div>
          <div className="p-4 rounded-xl bg-warm-50 border border-navy-50 space-y-1">
            <span className="text-navy-500 font-semibold uppercase text-[10px]">GSTIN</span>
            <p className="font-bold text-navy-900">27AAACA9012F1Z8 (Active - Maharashtra)</p>
          </div>
          <div className="p-4 rounded-xl bg-warm-50 border border-navy-50 space-y-1">
            <span className="text-navy-500 font-semibold uppercase text-[10px]">Annual Turnover (FY23)</span>
            <p className="font-bold text-navy-900">₹350.00 Lakhs</p>
          </div>
        </div>

        <div className="pt-2 border-t border-navy-50 flex items-center gap-2 text-xs text-navy-600">
          <ShieldCheck className="h-4 w-4 text-gold" />
          <span>Statutory parameters are verified against MCA21 and GSTN portal databases.</span>
        </div>
      </div>
    </div>
  );
}
