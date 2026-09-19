"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Lightbulb,
  Compass,
  FileText,
  ShieldCheck,
  Calculator,
  Landmark,
  CheckCircle2,
  TrendingUp,
  Building2,
  Lock,
} from "lucide-react";
import { RegulatoryDisclaimerBanner } from "@/components/brand/RegulatoryDisclaimerBanner";

const journeyNodes = [
  { id: "idea", label: "IDEA", subtext: "Feasibility & Concept", icon: Lightbulb, stage: 1 },
  { id: "plan", label: "PLAN", subtext: "Capex & Implementation", icon: Compass, stage: 2 },
  { id: "dpr", label: "DPR", subtext: "Bankable Project Report", icon: FileText, stage: 3 },
  { id: "compliance", label: "COMPLIANCE", subtext: "Statutory & ROC Clearances", icon: ShieldCheck, stage: 4 },
  { id: "finance", label: "FINANCE", subtext: "CMA Data & MPBF Modelling", icon: Calculator, stage: 5 },
  { id: "bank", label: "BANK", subtext: "Syndicate Coordination", icon: Landmark, stage: 6 },
  { id: "sanction", label: "SANCTION", subtext: "Formal Bank Sanction", icon: CheckCircle2, stage: 7 },
  { id: "growth", label: "GROWTH", subtext: "Disbursement & Scale", icon: TrendingUp, stage: 8 },
];

const trustPillars = [
  {
    title: "Business Advisory",
    description: "Entity structuring, techno-economic feasibility & strategic MSME growth roadmap.",
    icon: Building2,
  },
  {
    title: "Project Finance",
    description: "Term loan syndication, capex debt structuring & working capital limit optimization.",
    icon: Landmark,
  },
  {
    title: "Compliance",
    description: "Statutory ROC filings, GST reconciliation, Udyam formalization & credit scrub.",
    icon: ShieldCheck,
  },
  {
    title: "Financial Intelligence",
    description: "IBA-compliant DPR synthesis, CMA Form I–VI models & debt ratio stress-testing.",
    icon: TrendingUp,
  },
];

export function Hero() {
  const [activeStep, setActiveStep] = useState(0);

  // Subtle automated progression indicator along the pathway
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % journeyNodes.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-navy-dark text-white pt-12 pb-16 lg:pt-16 lg:pb-24">
      {/* Background Texture & Ambient Glows */}
      <div className="absolute inset-0 bg-subtle-grid opacity-20 pointer-events-none" />
      <div className="absolute -top-48 -right-48 h-[550px] w-[550px] rounded-full bg-gold/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 -left-48 h-[500px] w-[500px] rounded-full bg-navy-500/15 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Hero Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-6 space-y-6">
            {/* Mission Tag / Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3.5 py-1 text-xs font-semibold text-gold-light">
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              <span>Institutional MSME Project Finance Platform</span>
            </div>

            {/* Primary Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight font-sans text-white uppercase leading-[1.1]">
              From Business Idea <br />
              <span className="bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent">
                To Bank Sanction.
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-warm-200 leading-relaxed max-w-xl font-sans">
              &ldquo;Project finance, DPRs, financial modelling, compliance and intelligent advisory — brought together through one structured business journey.&rdquo;
            </p>

            {/* Micro value reinforcement */}
            <div className="flex items-center gap-4 text-xs text-warm-300">
              <span className="flex items-center gap-1.5">
                <Lock className="h-3.5 w-3.5 text-gold" />
                <span>NDA & Confidentiality</span>
              </span>
              <span>•</span>
              <span>RBI / IBA Conformity</span>
              <span>•</span>
              <span>End-to-End Coordination</span>
            </div>

            {/* CTA Group */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                href="/finance-readiness"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-6 py-3.5 text-xs sm:text-sm font-bold text-navy-dark shadow-institutional hover:bg-gold-light hover:shadow-gold-glow active:scale-[0.99] transition-all duration-200"
              >
                <span>Check Finance Readiness</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/consultation"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-navy-600 bg-navy/80 px-5 py-3.5 text-xs sm:text-sm font-semibold text-white hover:bg-navy hover:border-gold/50 active:scale-[0.99] transition-all duration-200"
              >
                <span>Book Consultation</span>
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-bold text-warm-300 hover:text-gold transition-colors ml-1"
              >
                <span>Explore Services</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Statutory Disclaimer Notice */}
            <div className="pt-2">
              <RegulatoryDisclaimerBanner
                className="border-navy-700/80 bg-navy/40 text-[11px] text-warm-300"
                customText="Statutory Notice: All credit advisory, financial modelling, and readiness diagnostics are indicative. Approvals, loan limits, and interest rates are subject to lender assessment and remain at the sole discretion of the relevant financial institution."
              />
            </div>
          </div>

          {/* Right Column: Custom Journey Visualization (SVG/CSS) */}
          <div className="lg:col-span-6 w-full">
            <div className="relative mx-auto max-w-lg lg:max-w-none rounded-2xl border border-gold/30 bg-gradient-to-br from-navy-900/90 via-navy-dark to-navy-950 p-5 sm:p-7 shadow-institutional-lg overflow-hidden">
              {/* Top Visual Header / HUD */}
              <div className="flex items-center justify-between pb-4 border-b border-navy-700/80 mb-6">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gold-light">
                    The VS Structured Journey
                  </span>
                  <p className="text-xs font-bold text-white">8-Stage Finance Pathway</p>
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-gold/15 px-2.5 py-0.5 text-[10px] font-bold text-gold-light border border-gold/30">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
                  <span>Interactive Flow</span>
                </div>
              </div>

              {/* Pathway Visual Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 relative">
                {journeyNodes.map((node, index) => {
                  const isCurrent = index === activeStep;
                  const isPast = index < activeStep;
                  const Icon = node.icon;

                  return (
                    <div
                      key={node.id}
                      onClick={() => setActiveStep(index)}
                      className={`group cursor-pointer rounded-xl p-3 border transition-all duration-200 relative ${
                        isCurrent
                          ? "bg-navy-800 border-gold shadow-gold-glow ring-1 ring-gold/40 scale-[1.03]"
                          : isPast
                          ? "bg-navy/70 border-gold/40 text-warm-200"
                          : "bg-navy-900/50 border-navy-700 text-warm-400 hover:border-navy-500 hover:bg-navy-800/40"
                      }`}
                    >
                      {/* Step Indicator */}
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className={`text-[9px] font-extrabold px-1.5 py-0.2 rounded ${
                            isCurrent
                              ? "bg-gold text-navy-dark"
                              : isPast
                              ? "bg-gold/20 text-gold-light"
                              : "bg-navy-800 text-navy-400"
                          }`}
                        >
                          0{node.stage}
                        </span>
                        <Icon
                          className={`h-4 w-4 transition-colors ${
                            isCurrent
                              ? "text-gold animate-pulse"
                              : isPast
                              ? "text-gold-light"
                              : "text-navy-400 group-hover:text-warm-300"
                          }`}
                        />
                      </div>

                      {/* Title & Subtitle */}
                      <p
                        className={`text-xs font-bold tracking-tight uppercase ${
                          isCurrent ? "text-white" : isPast ? "text-warm-100" : "text-warm-300"
                        }`}
                      >
                        {node.label}
                      </p>
                      <p className="text-[10px] text-warm-400 leading-tight line-clamp-2 mt-0.5">
                        {node.subtext}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Connecting Pathway Ribbon (SVG) */}
              <div className="mt-6 pt-4 border-t border-navy-700/80">
                <div className="flex items-center justify-between text-[11px] text-warm-300 mb-2">
                  <span className="flex items-center gap-1.5 font-semibold text-gold-light">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold" />
                    <span>Current Stage: {journeyNodes[activeStep].label}</span>
                  </span>
                  <span className="text-warm-400 font-mono">
                    Stage {activeStep + 1} of {journeyNodes.length}
                  </span>
                </div>

                {/* Progress Track */}
                <div className="w-full bg-navy-800 rounded-full h-2 overflow-hidden p-0.5 border border-navy-700">
                  <div
                    className="bg-gradient-to-r from-gold-dark via-gold to-gold-light h-full rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${((activeStep + 1) / journeyNodes.length) * 100}%` }}
                  />
                </div>

                {/* Milestone Detail Callout */}
                <div className="mt-3 rounded-lg bg-navy/80 border border-navy-700 p-2.5 text-[11px] text-warm-200 flex items-center justify-between">
                  <span className="font-semibold text-white">
                    {journeyNodes[activeStep].subtext}
                  </span>
                  <Link
                    href="/finance-readiness"
                    className="text-[10px] font-bold text-gold hover:text-gold-light flex items-center gap-1"
                  >
                    <span>Assess Readiness</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Below Hero Trust Statements (4 Pillars - No Fake Stats) */}
        <div className="mt-16 pt-10 border-t border-navy-800/80">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gold-light">
              End-to-End Enterprise Governance
            </span>
            <h2 className="text-lg sm:text-xl font-bold text-white font-sans mt-1">
              VS manages the entire journey from business idea to finance readiness and bank process.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {trustPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="rounded-xl border border-navy-700/80 bg-navy/60 p-5 hover:border-gold/40 hover:bg-navy-800/60 transition-all duration-200 space-y-2.5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-800 text-gold border border-gold/30">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white font-sans">{pillar.title}</h3>
                  <p className="text-xs text-warm-300 leading-relaxed">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
