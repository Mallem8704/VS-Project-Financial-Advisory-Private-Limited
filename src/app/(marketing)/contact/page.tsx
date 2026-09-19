import React from "react";
import { siteConfig } from "@/config/site";
import { RegulatoryDisclaimerBanner } from "@/components/brand/RegulatoryDisclaimerBanner";
import { Mail, Phone, MapPin, Clock, Building, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="bg-warm min-h-screen py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-[11px] font-bold uppercase tracking-wider text-gold-dark bg-gold/10 px-3 py-1 rounded-full border border-gold/30">
            Corporate Communications
          </span>
          <h1 className="text-3xl font-serif font-bold text-navy-dark sm:text-4xl">
            Contact VS Project & Financial Advisory
          </h1>
          <p className="text-xs sm:text-sm text-navy-700 leading-relaxed">
            Reach our senior advisory desks for project finance syndication, DPR & CMA preparation, and MSME regulatory advisory.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-navy-100 bg-white p-6 shadow-sm space-y-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-50 text-navy">
              <MapPin className="h-5 w-5 text-gold" />
            </div>
            <h3 className="text-sm font-bold text-navy-dark">Registered Office</h3>
            <p className="text-xs text-navy-600 leading-relaxed">{siteConfig.address}</p>
            <p className="text-[11px] text-navy-400 font-medium">CIN: {siteConfig.cin}</p>
          </div>

          <div className="rounded-xl border border-navy-100 bg-white p-6 shadow-sm space-y-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-50 text-navy">
              <Mail className="h-5 w-5 text-gold" />
            </div>
            <h3 className="text-sm font-bold text-navy-dark">Advisory Inquiries</h3>
            <p className="text-xs text-navy-600 leading-relaxed">{siteConfig.email}</p>
            <p className="text-[11px] text-navy-400 font-medium">Confidential NDA protected</p>
          </div>

          <div className="rounded-xl border border-navy-100 bg-white p-6 shadow-sm space-y-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-50 text-navy">
              <Phone className="h-5 w-5 text-gold" />
            </div>
            <h3 className="text-sm font-bold text-navy-dark">Direct Desk</h3>
            <p className="text-xs text-navy-600 leading-relaxed">{siteConfig.phone}</p>
            <p className="text-[11px] text-navy-400 font-medium">Mon – Sat, 10:00 AM – 7:00 PM IST</p>
          </div>
        </div>

        <div className="rounded-2xl border border-navy-100 bg-white p-8 shadow-institutional flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-bold text-navy-dark">Looking to schedule a formal discovery session?</h3>
            <p className="text-xs text-navy-600">
              Submit your project parameters and our credit team will review your mandate prior to the call.
            </p>
          </div>
          <Link
            href="/consultation"
            className="shrink-0 rounded-lg bg-gold px-6 py-3 text-xs font-bold text-white hover:bg-gold-hover shadow-sm"
          >
            Book Private Consultation
          </Link>
        </div>

        <RegulatoryDisclaimerBanner />
      </div>
    </div>
  );
}
