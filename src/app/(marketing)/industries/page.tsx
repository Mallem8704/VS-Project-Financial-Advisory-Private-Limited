import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { RegulatoryDisclaimerBanner } from "@/components/brand/RegulatoryDisclaimerBanner";
import { IndustriesDirectory } from "./IndustriesDirectory";
import {
  Factory,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Layers,
  Sparkles,
  Award,
  Compass,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industry Solutions & Sector Blueprints | VS Project & Financial Advisory",
  description:
    "Explore bankable project finance blueprints, DPR considerations, and statutory guidelines across 18 key industry verticals in India.",
  keywords: [
    "industry project finance India",
    "rice mill bank loan",
    "hospital project report",
    "solar power plant DPR",
    "cold storage subsidy",
    "textile unit TUFS",
    "warehouse finance India",
  ],
};

export default function IndustriesOverviewPage() {
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
              <span>Sector Solutions Engine</span>
            </div>

            <h1 className="text-3xl font-serif font-bold text-white sm:text-5xl lg:text-6xl tracking-tight leading-tight">
              Industry Solutions & Sector Blueprints
            </h1>

            <p className="text-base sm:text-lg text-navy-100 leading-relaxed">
              Bank appraisal standards differ fundamentally between manufacturing, healthcare, agro-processing, and renewable energy. Discover detailed financial blueprints, typical capex heads, and regulatory checklists across 18 specialized industry verticals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/book-consultation"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-6 py-3.5 text-sm font-bold text-navy-dark shadow-lg shadow-gold/20 hover:bg-gold-hover hover:scale-[1.02] transition-all"
              >
                <span>Book Sector Consultation</span>
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
        {/* Interactive Industries Directory */}
        <IndustriesDirectory />

        {/* Sector-Specialized Underwriting Value Proposition */}
        <section className="rounded-3xl border border-navy-100 bg-white p-8 sm:p-12 shadow-institutional space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-dark">
              Sector Specialization
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-navy-dark tracking-tight">
              Why Generic Project Reports Fail
            </h2>
            <p className="text-sm sm:text-base text-navy-700 leading-relaxed">
              A rice mill requires seasonal working capital sub-limits; a solar farm needs a P90 energy yield model; a hospital requires an 18–36 month moratorium to absorb clinical ramp-up. We build reports tailored to the operational realities of your specific sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-navy-100 bg-warm-50/70 p-6 space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy text-gold">
                <Layers className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-navy-dark">
                Industry-Specific Financial Models
              </h3>
              <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
                We do not use generic templates. Every DPR and CMA is engineered around industry operational drivers — bed occupancy, recovery %, FCR, or irradiation data.
              </p>
            </div>

            <div className="rounded-2xl border border-navy-100 bg-warm-50/70 p-6 space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy text-gold">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-navy-dark">
                Verified Scheme Navigation
              </h3>
              <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
                We map applicable government schemes (CGTMSE, NHB, AIF, TUFS, PMFME) based on verified policy guidelines without misleading guarantee claims.
              </p>
            </div>

            <div className="rounded-2xl border border-navy-100 bg-warm-50/70 p-6 space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy text-gold">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-navy-dark">
                Bank Credit Alignment
              </h3>
              <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
                Our dossiers reflect the exact underwriting checklists used by commercial bank credit committees, SIDBI, and state financial institutions.
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
