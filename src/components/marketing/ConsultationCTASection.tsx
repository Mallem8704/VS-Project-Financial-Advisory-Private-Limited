import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui";
import { ArrowRight, Calendar, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";

export function ConsultationCTASection() {
  return (
    <section className="relative py-20 bg-background overflow-hidden">
      <Container>
        <div className="relative rounded-3xl border border-gold/30 bg-gradient-to-br from-navy-900 via-navy-dark to-navy-950 p-8 sm:p-12 lg:p-16 text-white shadow-institutional-lg overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-gold/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-navy-500/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3.5 py-1 text-xs font-semibold text-gold-light">
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              <span>Direct Project Finance Advisory</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-sans tracking-tight text-white uppercase leading-[1.15]">
              Planning a New Business, <br />
              <span className="bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent">
                Expansion or Project?
              </span>
            </h2>

            <p className="text-sm sm:text-base text-warm-200 leading-relaxed font-sans max-w-2xl">
              Speak with a dedicated project finance advisor to evaluate debt eligibility, DPR requirements, and government subsidy schemes before presenting your file to commercial lenders.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-warm-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                <span>30-Min Confidential Briefing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                <span>Preliminary Means of Finance Review</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                <span>Subsidy & Scheme Mapping</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/consultation"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-6 py-3.5 text-xs sm:text-sm font-bold text-navy-dark shadow-institutional hover:bg-gold-light hover:shadow-gold-glow active:scale-[0.99] transition-all"
              >
                <Calendar className="h-4 w-4" />
                <span>Book Consultation</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/finance-readiness"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-gold/40 bg-navy/60 px-6 py-3.5 text-xs sm:text-sm font-bold text-warm-100 hover:bg-navy-light hover:border-gold active:scale-[0.99] transition-all"
              >
                <span>Start Finance Assessment</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
