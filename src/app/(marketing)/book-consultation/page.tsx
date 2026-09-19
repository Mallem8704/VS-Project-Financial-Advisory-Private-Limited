"use client";

import React, { useState } from "react";
import { RegulatoryDisclaimerBanner } from "@/components/brand/RegulatoryDisclaimerBanner";
import {
  Calendar,
  Clock,
  Building,
  User,
  Mail,
  Phone,
  Landmark,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Lock,
} from "lucide-react";
import Link from "next/link";

export default function BookConsultationPage() {
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
    // Simulate booking capture
    setSubmitted(true);
  };

  return (
    <div className="bg-warm min-h-screen py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3.5 py-1 text-xs font-semibold text-gold-dark">
            <Calendar className="h-3.5 w-3.5" />
            <span>Private Advisory Engagement</span>
          </div>
          <h1 className="text-3xl font-serif font-bold text-navy-dark sm:text-4xl">
            Book an Advisory Consultation
          </h1>
          <p className="text-xs sm:text-sm text-navy-700 leading-relaxed">
            Schedule a confidential discovery session with our senior project finance specialists to evaluate feasibility, DPR structuring, and banking credit readiness.
          </p>
        </div>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="mt-10 rounded-2xl border border-navy-100 bg-white p-6 sm:p-10 shadow-institutional space-y-6"
          >
            <div className="border-b border-navy-100 pb-4">
              <h2 className="text-base font-bold text-navy-dark">
                1. Promoter & Enterprise Credentials
              </h2>
              <p className="text-xs text-navy-600">
                All information shared is strictly confidential and protected under bilateral non-disclosure agreements.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1">
                  Full Name of Promoter / Director *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-navy-400" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Sharma"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full rounded-lg border border-navy-200 pl-9 pr-3 py-2.5 text-sm focus:border-gold focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1">
                  Official Email Address *
                </label>
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
                <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1">
                  Direct Mobile / WhatsApp Number *
                </label>
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
                <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1">
                  Registered Business Name *
                </label>
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

            <div className="border-b border-navy-100 pb-4 pt-4">
              <h2 className="text-base font-bold text-navy-dark">
                2. Project & Credit Requirements
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1">
                  Industry Sector
                </label>
                <select
                  value={formData.industry}
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                  className="w-full rounded-lg border border-navy-200 p-2.5 text-sm focus:border-gold focus:outline-none bg-white"
                >
                  <option value="Manufacturing">Manufacturing & Engineering</option>
                  <option value="AgroProcessing">Agro & Food Processing</option>
                  <option value="RenewableEnergy">Renewable Energy / EV</option>
                  <option value="Healthcare">Healthcare & Pharma</option>
                  <option value="Logistics">Logistics & Warehousing</option>
                  <option value="Hospitality">Hospitality & Commercial</option>
                  <option value="Technology">Tech Startups / SaaS</option>
                  <option value="Other">Other Industrial / Commercial</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1">
                  Primary Advisory Requirement
                </label>
                <select
                  value={formData.loanCategory}
                  onChange={(e) => setFormData({ ...formData, loanCategory: e.target.value })}
                  className="w-full rounded-lg border border-navy-200 p-2.5 text-sm focus:border-gold focus:outline-none bg-white"
                >
                  <option value="TERM_LOAN_CAPEX">Project Term Loan / Capex Expansion</option>
                  <option value="WORKING_CAPITAL">Working Capital (CC/OD Limits)</option>
                  <option value="DPR_ONLY">Bankable DPR Preparation</option>
                  <option value="CMA_DATA">CMA Form I–VI Data Preparation</option>
                  <option value="CGTMSE_SUBSIDY">CGTMSE / Subsidy Schemes</option>
                  <option value="FULL_SUITE">Full Advisory (Idea to Sanction)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1">
                  Estimated Loan Quantum (₹ Lakhs)
                </label>
                <input
                  type="number"
                  placeholder="e.g. 250"
                  value={formData.estimatedLoanAmountLakhs}
                  onChange={(e) =>
                    setFormData({ ...formData, estimatedLoanAmountLakhs: e.target.value })
                  }
                  className="w-full rounded-lg border border-navy-200 p-2.5 text-sm focus:border-gold focus:outline-none"
                />
              </div>
            </div>

            <div className="border-b border-navy-100 pb-4 pt-4">
              <h2 className="text-base font-bold text-navy-dark">
                3. Consultation Scheduling & Details
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  required
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full rounded-lg border border-navy-200 p-2.5 text-sm focus:border-gold focus:outline-none bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1">
                  Preferred Time Slot
                </label>
                <select
                  value={formData.preferredTimeSlot}
                  onChange={(e) =>
                    setFormData({ ...formData, preferredTimeSlot: e.target.value })
                  }
                  className="w-full rounded-lg border border-navy-200 p-2.5 text-sm focus:border-gold focus:outline-none bg-white"
                >
                  <option value="11:00 AM - 12:00 PM">11:00 AM – 12:00 PM</option>
                  <option value="02:00 PM - 03:00 PM">02:00 PM – 03:00 PM</option>
                  <option value="04:00 PM - 05:00 PM">04:00 PM – 05:00 PM</option>
                  <option value="06:00 PM - 07:00 PM">06:00 PM – 07:00 PM</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1">
                Project Summary / Specific Banking Objectives
              </label>
              <textarea
                rows={3}
                placeholder="Briefly describe your expansion plans, current banking relationships, or key challenges..."
                value={formData.projectNotes}
                onChange={(e) => setFormData({ ...formData, projectNotes: e.target.value })}
                className="w-full rounded-lg border border-navy-200 p-3 text-sm focus:border-gold focus:outline-none"
              />
            </div>

            <div className="rounded-lg bg-warm-50 p-4 border border-navy-100 flex items-start gap-3 text-xs text-navy-700">
              <Lock className="h-4 w-4 text-gold shrink-0 mt-0.5" />
              <span>
                Your project documentation, formulas, and financials will be held under strict institutional confidentiality. We execute bilateral Non-Disclosure Agreements (NDAs) prior to detailed document intake.
              </span>
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
        ) : (
          /* Submission Success State */
          <div className="mt-10 rounded-2xl border border-navy-100 bg-white p-8 sm:p-12 text-center shadow-institutional space-y-5">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <div className="space-y-2 max-w-md mx-auto">
              <h2 className="text-2xl font-serif font-bold text-navy-dark">
                Consultation Request Received
              </h2>
              <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
                Thank you, <strong>{formData.fullName}</strong>. A dedicated Senior Project Advisor from VS Project & Financial Advisory Private Limited has been notified and will connect via email and phone within 4 business hours.
              </p>
            </div>

            <div className="rounded-xl bg-warm-50 p-4 border border-navy-100 max-w-md mx-auto text-left text-xs space-y-1.5 text-navy-800">
              <div className="flex justify-between">
                <span className="text-navy-500">Enterprise:</span>
                <span className="font-semibold">{formData.businessName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-navy-500">Requested Slot:</span>
                <span className="font-semibold">{formData.preferredDate} ({formData.preferredTimeSlot})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-navy-500">Advisory Focus:</span>
                <span className="font-semibold">{formData.loanCategory}</span>
              </div>
            </div>

            <div className="pt-4 flex justify-center gap-4">
              <Link
                href="/finance-readiness-score"
                className="rounded-lg bg-navy px-5 py-2.5 text-xs font-bold text-white hover:bg-navy-light transition-all"
              >
                Take Finance Readiness Diagnostic
              </Link>
              <Link
                href="/"
                className="rounded-lg border border-navy-200 px-5 py-2.5 text-xs font-bold text-navy-700 hover:bg-warm-100 transition-all"
              >
                Return to Homepage
              </Link>
            </div>
          </div>
        )}

        <div className="mt-12">
          <RegulatoryDisclaimerBanner />
        </div>
      </div>
    </div>
  );
}
