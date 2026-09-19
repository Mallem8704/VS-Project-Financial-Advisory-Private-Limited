import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui";
import { ShieldCheck, ArrowRight, Lock, Landmark, CheckCircle2 } from "lucide-react";
import { RegulatoryDisclaimerBanner } from "@/components/brand/RegulatoryDisclaimerBanner";

export function FinalInstitutionalCTA() {
  return (
    <section className="relative py-20 bg-surface border-t border-border">
      <Container>
        <div className="rounded-3xl border border-border bg-warm p-8 sm:p-12 lg:p-16 text-center shadow-institutional relative overflow-hidden">
          {/* Subtle gold top line */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-gold-dark via-gold to-gold-light" />

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3.5 py-1 text-xs font-semibold text-gold-dark">
              <ShieldCheck className="h-4 w-4 text-gold-dark" />
              <span>Independent Corporate Advisory & Financial Modelling</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-sans text-navy-dark tracking-tight uppercase leading-tight">
              Build Your Business on Strong <br />
              <span className="text-gold-dark">Financial Foundations.</span>
            </h2>

            <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-2xl mx-auto">
              From business idea validation and techno-economic feasibility to bankable DPR formulation and bank credit coordination — partner with an advisory firm that speaks the language of commercial lenders.
            </p>

            {/* Trust Markers - Pure Governance & Authenticity (No Fake Numbers) */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs text-navy-800 font-semibold">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-gold-dark" />
                <span>RBI Prudential Banking Conformity</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-gold-dark" />
                <span>Tandon Committee MPBF Standards</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Lock className="h-4 w-4 text-gold-dark" />
                <span>Strict Non-Disclosure Agreement (NDA)</span>
              </span>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/finance-readiness"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-8 py-4 text-xs sm:text-sm font-bold text-navy-dark shadow-institutional hover:bg-gold-light hover:shadow-gold-glow active:scale-[0.99] transition-all"
              >
                <span>Check Finance Readiness</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/consultation"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-navy-800 bg-navy px-8 py-4 text-xs sm:text-sm font-bold text-white hover:bg-navy-light active:scale-[0.99] transition-all"
              >
                <span>Book Advisory Session</span>
              </Link>
            </div>

            <div className="pt-6 max-w-2xl mx-auto">
              <RegulatoryDisclaimerBanner
                className="border-border bg-surface text-navy-600 text-[11px]"
                customText="Statutory Notice: All credit advisory, financial modelling, and readiness diagnostics are indicative. Approvals, loan limits, and interest rates are subject to lender assessment and remain at the sole discretion of the relevant financial institution."
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
