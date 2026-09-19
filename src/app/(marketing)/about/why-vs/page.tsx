import React from "react";
import Link from "next/link";
import { Container, PageHeader, SectionHeader } from "@/components/ui";
import { ABOUT_DATA } from "@/data/about";
import {
  Layers,
  ShieldCheck,
  Zap,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Lock,
  Sparkles,
} from "lucide-react";
import { RegulatoryDisclaimerBanner } from "@/components/brand/RegulatoryDisclaimerBanner";

export default function WhyVSPage() {
  const { triadModel, ethics } = ABOUT_DATA;

  const comparisonPoints = [
    {
      feature: "Project Scope & Coverage",
      fragmented: "Fragmented: CA files tax, broker shops loans, third-party writes generic DPR.",
      vsApproach: "Unified: Feasibility, DPR, CMA, statutory compliance & bank liaison under one roof.",
    },
    {
      feature: "Financial Modeling Rigor",
      fragmented: "Static spreadsheets with fabricated turnover projections and unverified ratios.",
      vsApproach: "Dynamic DCF models, Tandon Method II MPBF computation, and DSCR stress-testing.",
    },
    {
      feature: "Credit Committee Alignment",
      fragmented: "Unaware of lender risk underwriting parameters, leading to rejection loops.",
      vsApproach: "DPRs and CMA sheets formatted strictly per IBA guidelines and bank appraisal formats.",
    },
    {
      feature: "Regulatory & Scheme Mapping",
      fragmented: "Ignores CGTMSE guarantee schemes and state capital subsidies.",
      vsApproach: "Strategic mapping of CGTMSE collateral-free covers and eligible central/state subsidies.",
    },
    {
      feature: "Confidentiality & Security",
      fragmented: "Business plans circulated openly on messaging apps with zero NDA protection.",
      vsApproach: "Legally binding bilateral NDAs and private cloud document repositories.",
    },
    {
      feature: "Transparency on Sanctions",
      fragmented: "False promises of '100% guaranteed loan sanction' to collect upfront fees.",
      vsApproach: "Strict zero-guarantee compliance policy: pure merit-based credit readiness.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-text-primary pb-24">
      <section className="bg-navy-dark text-white pt-12 pb-16 border-b border-navy-800">
        <Container>
          <PageHeader
            eyebrow="The Institutional Advantage"
            title="Why VS Project & Financial Advisory"
            description="How our integrated Finance + Compliance + Technology triad model delivers bank-ready outcomes where fragmented consultancy fails."
            breadcrumbs={[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Why VS" },
            ]}
          />
        </Container>
      </section>

      <Container className="pt-16 space-y-16">
        {/* The Triad Operating Model */}
        <section className="space-y-6">
          <SectionHeader
            eyebrow="Integrated Architecture"
            title="Finance + Compliance + Technology"
            highlight="— The Triad Model"
            description="Three essential disciplines working in synchronized harmony to ensure total bankability."
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {triadModel.components.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-border bg-surface p-7 shadow-subtle flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gold-dark block mb-1">
                    {c.tagline}
                  </span>
                  <h3 className="text-lg font-bold text-navy-dark font-sans mb-2">
                    {c.title}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed mb-4">
                    {c.description}
                  </p>
                  <div className="pt-3 border-t border-border-subtle space-y-2">
                    {c.deliverables.map((d) => (
                      <div key={d} className="flex items-start gap-2 text-xs text-navy-800">
                        <CheckCircle2 className="h-3.5 w-3.5 text-gold-dark shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Institutional Comparison Table */}
        <section className="space-y-6">
          <SectionHeader
            eyebrow="Comparative Analysis"
            title="VS Model vs. Fragmented Consultants"
            highlight="— Why Unity Matters"
            description="Comparing the VS institutional methodology against disconnected local agents and generic DPR writers."
            align="left"
          />

          <div className="rounded-2xl border border-border bg-surface overflow-hidden shadow-subtle">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-border bg-warm text-[11px] font-bold uppercase tracking-wider text-navy-900">
                    <th className="p-4 sm:p-5">Dimension</th>
                    <th className="p-4 sm:p-5 text-text-secondary">Fragmented Consultants / Local Agents</th>
                    <th className="p-4 sm:p-5 text-navy-dark bg-gold/10">VS Institutional Model</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-subtle text-navy-800">
                  {comparisonPoints.map((row) => (
                    <tr key={row.feature} className="hover:bg-warm/50">
                      <td className="p-4 sm:p-5 font-bold text-navy-dark whitespace-nowrap">
                        {row.feature}
                      </td>
                      <td className="p-4 sm:p-5 text-text-secondary">
                        <div className="flex items-start gap-2">
                          <XCircle className="h-4 w-4 text-error shrink-0 mt-0.5" />
                          <span>{row.fragmented}</span>
                        </div>
                      </td>
                      <td className="p-4 sm:p-5 font-semibold text-navy-900 bg-gold/5">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-700 shrink-0 mt-0.5" />
                          <span>{row.vsApproach}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Fiduciary Governance & Ethics */}
        <section className="space-y-6">
          <SectionHeader
            eyebrow="Governance Standards"
            title="Ethics & Client Confidentiality"
            highlight="— Uncompromised Trust"
            description="Operating with the strict fiduciary protocols required by institutional finance."
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ethics.commitments.map((e) => (
              <div
                key={e.title}
                className="rounded-2xl border border-border bg-surface p-6 shadow-subtle space-y-2"
              >
                <div className="flex items-center gap-2 text-navy-dark font-bold text-sm">
                  <Lock className="h-4 w-4 text-gold-dark shrink-0" />
                  <span>{e.title}</span>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {e.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="rounded-3xl border border-gold/30 bg-gradient-to-br from-navy-900 via-navy-dark to-navy-950 p-8 sm:p-12 text-white shadow-institutional-lg text-center space-y-5">
          <h3 className="text-2xl sm:text-3xl font-extrabold font-sans text-white uppercase">
            Experience the VS Institutional Advantage
          </h3>
          <p className="text-xs sm:text-sm text-warm-200 max-w-xl mx-auto">
            Get an objective, algorithmic evaluation of your project finance readiness in under 3 minutes.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/finance-readiness"
              className="inline-flex items-center gap-2 rounded-xl bg-gold px-6 py-3 text-xs sm:text-sm font-bold text-navy-dark shadow-institutional hover:bg-gold-light transition-all"
            >
              <span>Check Finance Readiness</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/consultation"
              className="inline-flex items-center gap-2 rounded-xl border border-gold/40 bg-navy/60 px-6 py-3 text-xs sm:text-sm font-bold text-warm-100 hover:bg-navy transition-all"
            >
              <span>Book Consultation</span>
            </Link>
          </div>
        </section>

        <RegulatoryDisclaimerBanner />
      </Container>
    </div>
  );
}
