"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container, SectionHeader } from "@/components/ui";
import {
  Lightbulb,
  Search,
  Building,
  Calendar,
  FileSpreadsheet,
  CheckCircle2,
  PieChart,
  FolderCheck,
  Landmark,
  Award,
  TrendingUp,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface Stage {
  id: string;
  step: string;
  title: string;
  category: string;
  description: string;
  keyOutputs: string[];
  icon: React.ElementType;
}

const elevenStages: Stage[] = [
  {
    id: "s1",
    step: "01",
    title: "Business Idea",
    category: "Conception",
    description: "Evaluating founder concept, promoter core competencies, value proposition, and commercial market window.",
    keyOutputs: ["Promoter Profile Assessment", "Concept Viability Memo", "Initial Market Gap Review"],
    icon: Lightbulb,
  },
  {
    id: "s2",
    step: "02",
    title: "Feasibility",
    category: "Validation",
    description: "Techno-Economic Viability (TEV) audit analyzing raw material supply chains, site location, power/water, and cluster advantages.",
    keyOutputs: ["Techno-Economic Study", "Site & Cluster Analysis", "Preliminary Cost Benchmark"],
    icon: Search,
  },
  {
    id: "s3",
    step: "03",
    title: "Business Setup",
    category: "Formalization",
    description: "Legal entity incorporation, capital structure, Udyam MSME certification, GST registration, and bank account onboarding.",
    keyOutputs: ["Entity Incorporation (Pvt Ltd/LLP)", "Udyam & GST Registration", "Current Account Setup"],
    icon: Building,
  },
  {
    id: "s4",
    step: "04",
    title: "Project Planning",
    category: "Engineering",
    description: "Formulating detailed capital expenditure (capex), civil works blueprints, vendor machinery quotations, and implementation schedules.",
    keyOutputs: ["Itemized Capex Schedule", "Machinery Quotations Vetting", "Gantt Implementation Chart"],
    icon: Calendar,
  },
  {
    id: "s5",
    step: "05",
    title: "DPR & CMA",
    category: "Synthesis",
    description: "Drafting the 8-chapter bankable Detailed Project Report and compiling Form I to VI CMA data with full sensitivity matrices.",
    keyOutputs: ["Bankable 8-Chapter DPR", "CMA Form I–VI Operating Statements", "Method II MPBF Calculation"],
    icon: FileSpreadsheet,
  },
  {
    id: "s6",
    step: "06",
    title: "Finance Readiness",
    category: "Pre-Audit",
    description: "Stress-testing financial ratios against commercial bank underwriting criteria (DSCR > 1.33x, TOL/TNW, Current Ratio > 1.33x).",
    keyOutputs: ["15-Point Credit Stress Test", "Ratio Benchmark Gap Analysis", "Audit Rectification Checklist"],
    icon: CheckCircle2,
  },
  {
    id: "s7",
    step: "07",
    title: "Funding Strategy",
    category: "Structuring",
    description: "Structuring the optimal means of finance, promoter margin money contribution, CGTMSE coverage, and eligible capital subsidies.",
    keyOutputs: ["Debt-Equity Ratio Design", "CGTMSE Guarantee Mapping", "Subsidies & Incentive Docket"],
    icon: PieChart,
  },
  {
    id: "s8",
    step: "08",
    title: "Application Preparation",
    category: "Documentation",
    description: "Assembling the comprehensive credit dossier, statutory annexures, KYC documents, and promoter net worth certificates.",
    keyOutputs: ["Consolidated Bank Credit Dossier", "Promoter Net Worth Statements", "Statutory Clearance Annexures"],
    icon: FolderCheck,
  },
  {
    id: "s9",
    step: "09",
    title: "Bank Coordination",
    category: "Liaison",
    description: "Facilitating structured submission to zonal/branch credit committees and providing rapid clarification on technical queries.",
    keyOutputs: ["Formal Application Submission", "Credit Committee Representation", "Technical Query Resolution"],
    icon: Landmark,
  },
  {
    id: "s10",
    step: "10",
    title: "Decision / Sanction",
    category: "Approval",
    description: "In-principle sanction letter vetting, covenant analysis, interest spread negotiation, and security charge creation.",
    keyOutputs: ["Sanction Letter Vetting", "Covenant Risk Analysis", "Security & Mortgage Formalization"],
    icon: Award,
  },
  {
    id: "s11",
    step: "11",
    title: "Growth Advisory",
    category: "Scale",
    description: "Post-sanction disbursement scheduling, compliance monitoring, working capital renewal, and long-term enterprise growth advisory.",
    keyOutputs: ["Tranche Disbursement Tracking", "Annual Limit Renewal Support", "Treasury & Virtual CFO Review"],
    icon: TrendingUp,
  },
];

export function IdeaToSanctionSection() {
  const [activeStageIndex, setActiveStageIndex] = useState(4); // Default to DPR & CMA (Stage 05)
  const currentStage = elevenStages[activeStageIndex];
  const Icon = currentStage.icon;

  return (
    <section id="journey" className="relative py-20 bg-surface border-y border-border">
      <Container>
        <SectionHeader
          eyebrow="The Structured Roadmap"
          title="From Idea to Sanction"
          highlight="— 11 Sequential Stages"
          description="Every business loan journey requires structured navigation. Explore each step of our end-to-end framework designed to ensure bankability, regulatory compliance, and transparent execution."
          align="center"
        />

        {/* Desktop: Horizontal Pathway Scroller */}
        <div className="hidden lg:block mt-10">
          {/* Scrollable Track */}
          <div className="overflow-x-auto pb-4 no-scrollbar">
            <div className="flex items-center gap-2 min-w-[1100px] border-b border-border pb-4">
              {elevenStages.map((stage, idx) => {
                const isSelected = idx === activeStageIndex;
                const isPast = idx < activeStageIndex;
                const StageIcon = stage.icon;

                return (
                  <button
                    key={stage.id}
                    type="button"
                    onClick={() => setActiveStageIndex(idx)}
                    className={`flex-1 flex flex-col items-center p-3 rounded-xl border text-center transition-all duration-200 select-none ${
                      isSelected
                        ? "bg-navy-dark border-gold text-white shadow-institutional ring-1 ring-gold/40 scale-105 z-10"
                        : isPast
                        ? "bg-warm border-border hover:border-gold/50 text-navy-800"
                        : "bg-surface border-border text-navy-600 hover:border-navy-300"
                    }`}
                  >
                    <span
                      className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded mb-1.5 ${
                        isSelected
                          ? "bg-gold text-navy-dark"
                          : "bg-navy-50 text-navy-600"
                      }`}
                    >
                      {stage.step}
                    </span>
                    <StageIcon
                      className={`h-4 w-4 mb-1.5 ${
                        isSelected ? "text-gold" : "text-navy-500"
                      }`}
                    />
                    <span
                      className={`text-[11px] font-bold truncate max-w-[90px] ${
                        isSelected ? "text-white" : "text-navy-900"
                      }`}
                    >
                      {stage.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detailed Stage Card (Desktop) */}
          <div className="mt-8 rounded-2xl border border-border bg-warm p-8 shadow-institutional flex flex-col md:flex-row items-start justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-dark text-gold border border-gold/30">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-gold-dark">
                      Stage {currentStage.step} • {currentStage.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-navy-dark font-sans">
                    {currentStage.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-text-secondary leading-relaxed">
                {currentStage.description}
              </p>

              <div className="pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-navy-900 mb-2">
                  Key Operational Deliverables:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {currentStage.keyOutputs.map((output) => (
                    <div
                      key={output}
                      className="flex items-center gap-2 rounded-lg bg-surface border border-border p-2.5 text-xs text-navy-dark font-semibold"
                    >
                      <Sparkles className="h-3.5 w-3.5 text-gold shrink-0" />
                      <span>{output}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="shrink-0 flex flex-col gap-3 sm:min-w-[200px]">
              <Link
                href="/consultation"
                className="w-full text-center rounded-xl bg-gold px-5 py-3 text-xs font-bold text-navy-dark shadow-sm hover:bg-gold-light transition-all flex items-center justify-center gap-1.5"
              >
                <span>Consult on this Stage</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/finance-readiness"
                className="w-full text-center rounded-xl border border-navy bg-navy px-5 py-2.5 text-xs font-bold text-white hover:bg-navy-light transition-all"
              >
                Assess Stage Readiness
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile: Vertical Stepper */}
        <div className="lg:hidden mt-8 space-y-4">
          {elevenStages.map((stage, idx) => {
            const isSelected = idx === activeStageIndex;
            const StageIcon = stage.icon;

            return (
              <div
                key={stage.id}
                className={`rounded-xl border p-4 transition-all duration-200 ${
                  isSelected
                    ? "border-gold bg-warm shadow-md ring-1 ring-gold/40"
                    : "border-border bg-surface"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActiveStageIndex(idx)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold ${
                        isSelected
                          ? "bg-navy-dark text-gold border border-gold/30"
                          : "bg-navy-50 text-navy-700"
                      }`}
                    >
                      {stage.step}
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-gold-dark">
                        {stage.category}
                      </p>
                      <h4 className="text-sm font-bold text-navy-dark font-sans">
                        {stage.title}
                      </h4>
                    </div>
                  </div>
                  <StageIcon
                    className={`h-4 w-4 ${
                      isSelected ? "text-gold" : "text-navy-400"
                    }`}
                  />
                </button>

                {isSelected && (
                  <div className="mt-4 pt-3 border-t border-border-subtle space-y-3">
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {stage.description}
                    </p>
                    <div className="space-y-1.5">
                      {stage.keyOutputs.map((output) => (
                        <div key={output} className="flex items-center gap-2 text-xs text-navy-800">
                          <span className="h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                          <span>{output}</span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-2">
                      <Link
                        href="/consultation"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-gold-dark hover:text-gold"
                      >
                        <span>Discuss Stage {stage.step} with Advisor</span>
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
