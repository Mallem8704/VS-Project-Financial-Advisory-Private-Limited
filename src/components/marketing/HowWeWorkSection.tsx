import React from "react";
import { Container, SectionHeader } from "@/components/ui";
import {
  Compass,
  FileSearch,
  PieChart,
  FileSpreadsheet,
  Landmark,
  ShieldCheck,
} from "lucide-react";

const workSteps = [
  {
    step: "01",
    title: "Discover",
    tagline: "Scope & Objectives",
    description:
      "We begin by understanding your business vision, capital requirements, promoter net worth, existing banking relationships, and project timelines.",
    icon: Compass,
  },
  {
    step: "02",
    title: "Assess",
    tagline: "Quantitative Diagnostic",
    description:
      "Our analytical desk audits historical financial statements, tax filings, credit scores (CIBIL/CCR), and collateral valuations to evaluate initial bankability.",
    icon: FileSearch,
  },
  {
    step: "03",
    title: "Plan",
    tagline: "Financial Engineering",
    description:
      "We structure the optimal debt-equity ratio, promoter margin contribution, debt repayment moratorium, and government subsidy/guarantee scheme mapping.",
    icon: PieChart,
  },
  {
    step: "04",
    title: "Prepare",
    tagline: "DPR & CMA Synthesis",
    description:
      "Our team synthesizes the 8-chapter Detailed Project Report and compiles Form I to VI CMA data strictly adhering to RBI and commercial bank formats.",
    icon: FileSpreadsheet,
  },
  {
    step: "05",
    title: "Coordinate",
    tagline: "Liaison & Query Resolution",
    description:
      "We facilitate submission to target lenders and provide rapid technical clarification to branch, zonal, and risk credit committees.",
    icon: Landmark,
  },
  {
    step: "06",
    title: "Support",
    tagline: "Sanction & Scale",
    description:
      "We assist in sanction letter vetting, security charge creation, disbursement tranche scheduling, and ongoing working capital limit management.",
    icon: ShieldCheck,
  },
];

export function HowWeWorkSection() {
  return (
    <section className="relative py-20 bg-background">
      <Container>
        <SectionHeader
          eyebrow="Structured Execution Methodology"
          title="How We Work"
          highlight="— Transparent & Banker-Aligned"
          description="A disciplined, milestone-driven process designed to eliminate documentation errors and align with bank credit underwriting workflows."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {workSteps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="group relative rounded-2xl border border-border bg-surface p-7 shadow-subtle hover:shadow-institutional hover:border-gold/50 transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-dark text-gold border border-gold/30 shadow-sm transition-transform duration-200 group-hover:scale-105">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-2xl font-extrabold text-navy-200 group-hover:text-gold-dark transition-colors">
                    {step.step}
                  </span>
                </div>

                <div className="mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gold-dark">
                    {step.tagline}
                  </span>
                  <h3 className="text-lg font-bold text-navy-dark font-sans tracking-tight">
                    {step.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
