import React from "react";
import Link from "next/link";
import { Container, SectionHeader, ProgressRing } from "@/components/ui";
import {
  ShieldCheck,
  TrendingUp,
  FileCheck,
  FolderGit2,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export function FinanceReadinessFeature() {
  const readinessPillars = [
    {
      title: "Financial Strength",
      score: 82,
      metric: "DSCR 1.48x • Current Ratio 1.38x",
      status: "Optimal",
      statusColor: "text-emerald-700 bg-emerald-50 border-emerald-200",
      icon: TrendingUp,
      details: "Operating margins and historical cash flows satisfy public and private bank benchmarks.",
    },
    {
      title: "Compliance Readiness",
      score: 85,
      metric: "100% On-Time GST • Udyam Active",
      status: "Compliant",
      statusColor: "text-emerald-700 bg-emerald-50 border-emerald-200",
      icon: ShieldCheck,
      details: "Zero statutory defaults, clean MCA/ROC record, and active MSME registration certificate.",
    },
    {
      title: "Documentation",
      score: 70,
      metric: "Audited Financials Ready • Land NOC Pending",
      status: "Action Required",
      statusColor: "text-amber-800 bg-amber-50 border-amber-200",
      icon: FileCheck,
      details: "3-year audited statements uploaded; industrial land change-of-land-use (CLU) order required.",
    },
    {
      title: "Project Readiness",
      score: 75,
      metric: "TEV Complete • 3 Machinery Quotes",
      status: "Satisfactory",
      statusColor: "text-emerald-700 bg-emerald-50 border-emerald-200",
      icon: FolderGit2,
      details: "Techno-economic viability established; civil layout blueprints awaiting municipal sign-off.",
    },
  ];

  return (
    <section className="relative py-20 bg-background overflow-hidden">
      <Container>
        <SectionHeader
          eyebrow="Algorithmic Credit Diagnostic"
          title="Know How Finance-Ready"
          highlight="Your Business Is."
          description="Banks evaluate over 25 financial, statutory, and collateral variables before sanctioning credit. Our algorithmic readiness diagnostic audits your enterprise profile across key banking parameters."
          align="center"
        />

        {/* Large Feature Showcase Card */}
        <div className="rounded-3xl border border-border bg-surface p-6 sm:p-10 lg:p-12 shadow-institutional-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Interactive UI Score Visualizer */}
            <div className="lg:col-span-5 rounded-2xl border border-navy-700 bg-navy-dark p-6 sm:p-8 text-white shadow-institutional">
              <div className="flex items-center justify-between pb-4 border-b border-navy-700">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-light">
                  Enterprise Audit Sample
                </span>
                <span className="rounded bg-gold/15 px-2 py-0.5 text-[10px] font-bold text-gold border border-gold/30">
                  Indicative Score
                </span>
              </div>

              {/* Center Gauge */}
              <div className="my-8 flex flex-col items-center justify-center">
                <ProgressRing
                  progress={78}
                  size="xl"
                  variant="gold"
                  label="78"
                />
                <span className="mt-3 text-xs font-bold uppercase tracking-widest text-gold-light">
                  Overall Score: 78 / 100
                </span>
                <span className="mt-1 rounded-full bg-emerald-500/20 px-3 py-0.5 text-xs font-bold text-emerald-300 border border-emerald-400/30">
                  Grade: Bank-Eligible
                </span>
              </div>

              {/* Assessment Summary Box */}
              <div className="rounded-xl bg-navy-800/80 border border-navy-700 p-4 space-y-2.5 text-xs">
                <div className="flex items-center gap-2 text-gold-light font-bold">
                  <Sparkles className="h-4 w-4 text-gold" />
                  <span>Key Underwriting Takeaways</span>
                </div>
                <div className="flex items-start gap-2 text-navy-200">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Strong debt service coverage (DSCR 1.48x) supports requested debt.</span>
                </div>
                <div className="flex items-start gap-2 text-navy-200">
                  <AlertCircle className="h-3.5 w-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>Uploading land conversion NOC will lift overall readiness score to 86/100.</span>
                </div>
              </div>
            </div>

            {/* Right Column: 4 Core Pillars Breakdown */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-navy-dark tracking-tight font-sans">
                  Comprehensive 4-Pillar Evaluation
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-text-secondary leading-relaxed">
                  Our credit algorithms evaluate the exact criteria scrutinized by zonal credit committees during initial appraisal.
                </p>
              </div>

              {/* 4 Pillars List */}
              <div className="space-y-3.5">
                {readinessPillars.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={pillar.title}
                      className="rounded-xl border border-border bg-warm/60 p-4 hover:bg-warm hover:border-navy-300 transition-all duration-150"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2.5">
                          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-navy-50 text-navy-dark border border-navy-100">
                            <Icon className="h-3.5 w-3.5 text-gold-dark" />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-navy-dark font-sans">
                              {pillar.title}
                            </h4>
                            <p className="text-[11px] text-text-secondary font-medium">
                              {pillar.metric}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold border ${pillar.statusColor}`}>
                            {pillar.status}
                          </span>
                          <span className="text-xs font-extrabold font-mono text-navy-dark">
                            {pillar.score}%
                          </span>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full bg-navy-100 rounded-full h-1.5 overflow-hidden">
                        <div
                          className="bg-gold h-1.5 rounded-full"
                          style={{ width: `${pillar.score}%` }}
                        />
                      </div>

                      <p className="mt-2 text-[11px] text-text-secondary">
                        {pillar.details}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Action Callout */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="/finance-readiness"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-7 py-3.5 text-xs sm:text-sm font-bold text-navy-dark shadow-institutional hover:bg-gold-light hover:shadow-gold-glow active:scale-[0.99] transition-all"
                >
                  <span>Check My Finance Readiness</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <span className="text-xs text-text-secondary">
                  ⚡ 3-minute diagnostic • Instant scorecard • 100% Confidential
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
