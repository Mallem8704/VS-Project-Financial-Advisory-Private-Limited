"use client";

import React, { useState } from "react";
import { User, Mail, Phone, Building, ArrowRight, Lock, CheckCircle2 } from "lucide-react";

export function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    businessName: "",
    industry: "Manufacturing",
    loanCategory: "TERM_LOAN_CAPEX",
    estimatedLoanAmountLakhs: "",
    preferredDate: "",
    preferredTimeSlot: "11:00 AM - 12:00 PM",
    projectNotes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-navy-100 bg-white p-8 sm:p-12 text-center shadow-institutional space-y-5">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <div className="space-y-2 max-w-md mx-auto">
          <h2 className="text-2xl font-serif font-bold text-navy-dark">Consultation Request Received</h2>
          <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
            Thank you, <strong>{formData.fullName}</strong>. A Senior Project Advisor will connect within 4 business hours.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-navy-100 bg-white p-6 sm:p-10 shadow-institutional space-y-6">
      <div className="border-b border-navy-100 pb-4">
        <h2 className="text-base font-bold text-navy-dark">1. Promoter & Enterprise Credentials</h2>
        <p className="text-xs text-navy-600">All information shared is strictly confidential under NDA.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1">Full Name *</label>
          <div className="relative">
            <User className="absolute left-3 top-3 h-4 w-4 text-navy-400" />
            <input
              type="text"
              required
              placeholder="Rajesh Sharma"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full rounded-lg border border-navy-200 pl-9 pr-3 py-2.5 text-sm focus:border-gold focus:outline-none"
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1">Official Email *</label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-4 w-4 text-navy-400" />
            <input
              type="email"
              required
              placeholder="rajesh@enterprise.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full rounded-lg border border-navy-200 pl-9 pr-3 py-2.5 text-sm focus:border-gold focus:outline-none"
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1">Phone / WhatsApp *</label>
          <div className="relative">
            <Phone className="absolute left-3 top-3 h-4 w-4 text-navy-400" />
            <input
              type="tel"
              required
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full rounded-lg border border-navy-200 pl-9 pr-3 py-2.5 text-sm focus:border-gold focus:outline-none"
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1">Business Name *</label>
          <div className="relative">
            <Building className="absolute left-3 top-3 h-4 w-4 text-navy-400" />
            <input
              type="text"
              required
              placeholder="Apex Engineering Pvt Ltd"
              value={formData.businessName}
              onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
              className="w-full rounded-lg border border-navy-200 pl-9 pr-3 py-2.5 text-sm focus:border-gold focus:outline-none"
            />
          </div>
        </div>
      </div>
      <div className="pt-2">
        <button
          type="submit"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-8 py-3 text-sm font-bold text-white hover:bg-gold-hover transition-all shadow-institutional"
        >
          <span>Confirm Consultation Request</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
}
