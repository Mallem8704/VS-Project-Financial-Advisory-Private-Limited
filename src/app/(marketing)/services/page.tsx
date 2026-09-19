import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { RegulatoryDisclaimerBanner } from "@/components/brand/RegulatoryDisclaimerBanner";
import { ServicesDirectory } from "./ServicesDirectory";
import {
  Compass,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Layers,
  Sparkles,
  Award,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Advisory Services Directory | VS Project & Financial Advisory",
  description:
    "Explore our full suite of 23+ institutional advisory services across Project & Business Advisory, Project Finance, Project Reports (DPR & CMA), Compliance, and Government Schemes.",
  keywords: [
    "project finance services",
    "DPR preparation",
    "CMA data services",
    "MSME loan advisory",
    "CGTMSE consultant",
    "financial modelling India",
    "corporate compliance",
  ],
};

export default function ServicesOverviewPage() {
  return (
    <div className="bg-warm min-h-screen">
      {/* Page Hero Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-950 via-navy-900 to-navy-800 pt-14 pb-20 text-white sm:pt-20 sm:pb-28">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gold/10 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3.5 py-1 text-xs font-semibold text-gold">
              <Compass className="h-3.5 w-3.5" />
              <span>Comprehensive Advisory Portfolio</span>
            </div>

            <h1 className="text-3xl font-serif font-bold text-white sm:text-5xl lg:text-6xl tracking-tight leading-tight">
              Institutional Advisory Services
            </h1>

            <p className="text-base sm:text-lg text-navy-100 leading-relaxed">
              From techno-economic feasibility and bankable DPR drafting to CMA Form I–VI statements, statutory registrations, and government subsidy realization — 23 specialized advisory solutions unified under one institutional roof.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/book-consultation"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-6 py-3.5 text-sm font-bold text-navy-dark shadow-lg shadow-gold/20 hover:bg-gold-hover hover:scale-[1.02] transition-all"
              >
                <span>Book Advisory Consultation</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/finance-readiness"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/20 transition-all backdrop-blur-sm"
              >
                <span>Check Finance Readiness</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-20">
        {/* Interactive Services Directory */}
        <ServicesDirectory />

        {/* Why VS Advisory Architecture */}
        <section className="rounded-3xl border border-navy-100 bg-white p-8 sm:p-12 shadow-institutional space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-dark">
              The VS Advantage
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-navy-dark tracking-tight">
              Why an Integrated Advisory Model Matters
            </h2>
            <p className="text-sm sm:text-base text-navy-700 leading-relaxed">
              In traditional Indian corporate advisory, entrepreneurs must manage disconnected accountants, loan brokers, and technical consultants. VS replaces fragmentation with institutional coherence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-navy-100 bg-warm-50/70 p-6 space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy text-gold">
                <Layers className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-navy-dark">
                Finance + Compliance + Tech
              </h3>
              <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
                We combine financial engineering with direct statutory tax compliance and proprietary analytical tools, eliminating contradictions between tax books and loan proposals.
              </p>
            </div>

            <div className="rounded-2xl border border-navy-100 bg-warm-50/70 p-6 space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy text-gold">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-navy-dark">
                Banker-Grade Standards
              </h3>
              <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
                Our Detailed Project Reports (DPRs) and CMA data strictly follow IBA, SIDBI, and RBI Tandon/Nayak guidelines, drastically reducing lender query cycles.
              </p>
            </div>

            <div className="rounded-2xl border border-navy-100 bg-warm-50/70 p-6 space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy text-gold">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-navy-dark">
                Ethical & Impartial
              </h3>
              <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
                We provide independent, objective financial advisory. We never claim false guarantees, nor do we compromise on accounting or regulatory integrity.
              </p>
            </div>
          </div>
        </section>

        {/* Regulatory Disclaimer Banner */}
        <section className="pt-4">
          <RegulatoryDisclaimerBanner type="info" />
        </section>
      </div>
    </div>
  );
}
