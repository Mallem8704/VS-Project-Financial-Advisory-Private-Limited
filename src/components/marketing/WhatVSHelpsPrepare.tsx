import React from "react";
import Link from "next/link";
import { Container, SectionHeader } from "@/components/ui";
import {
  FileText,
  FileSpreadsheet,
  TrendingUp,
  Search,
  FolderCheck,
  Award,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const deliverables = [
  {
    title: "DPR (Detailed Project Report)",
    tagline: "40–70 Page Bank Appraisal Format",
    description:
      "Comprehensive technical, financial, and managerial dossiers aligned with Indian Bank Association (IBA) norms and commercial lender expectations.",
    features: [
      "Technical specifications & process flow",
      "Cluster analysis & raw material security",
      "Detailed means of finance & debt scheduling",
    ],
    href: "/dpr",
    icon: FileText,
  },
  {
    title: "CMA (Credit Monitoring Arrangement)",
    tagline: "Operating Statements Form I to VI",
    description:
      "Rigorous working capital assessment incorporating Tandon Committee Method II, MPBF computation, fund flow statements, and benchmark ratio analysis.",
    features: [
      "Tandon Method I & II working capital limits",
      "Current ratio & TOL/TNW optimization",
      "7-year projected balance sheet & cash flow",
    ],
    href: "/cma",
    icon: FileSpreadsheet,
  },
  {
    title: "Financial Projections",
    tagline: "Dynamic Decision & Sensitivity Models",
    description:
      "Multi-scenario financial forecasting, discounted cash flow (DCF) valuation, break-even capacity metrics, and internal rate of return (IRR) calculations.",
    features: [
      "10-year projected operating statements",
      "Sensitivity stress-testing (±10% revenue/capex)",
      "Debt Service Coverage Ratio (DSCR) schedule",
    ],
    href: "/services",
    icon: TrendingUp,
  },
  {
    title: "Project Feasibility",
    tagline: "Techno-Economic Viability (TEV)",
    description:
      "Independent technical assessment validating site selection, infrastructure access, power/water clearance, vendor machinery capacity, and market absorption.",
    features: [
      "Civil & structural cost appraisal",
      "Plant machinery capacity vetting",
      "Supply chain & demand-supply dynamics",
    ],
    href: "/services",
    icon: Search,
  },
  {
    title: "Loan Documentation",
    tagline: "Consolidated Credit Docket",
    description:
      "End-to-end assembly of the loan docket, promoter net-worth declarations, legal title vetting, board borrowing resolutions, and sanction condition clearance.",
    features: [
      "Promoter KYC & asset-liability statements",
      "Collateral security title documentation",
      "Pre-sanction compliance dossier",
    ],
    href: "/services",
    icon: FolderCheck,
  },
  {
    title: "Government Scheme Assessment",
    tagline: "CGTMSE & Capital Subsidies",
    description:
      "Strategic evaluation and documentation for central and state credit guarantee schemes, capital investment subsidies, and interest subvention benefits.",
    features: [
      "CGTMSE guarantee coverage up to ₹500 Lakhs",
      "PMEGP / Stand-Up India eligibility mapping",
      "State industrial policy capital subsidies",
    ],
    href: "/services",
    icon: Award,
  },
  {
    title: "Compliance Support",
    tagline: "Statutory Readiness & Credit Scrub",
    description:
      "Pre-submission audit to rectify GST reconciliations, MCA/ROC secretarial filings, borrowing limits under Section 180(1)(c), and CIBIL commercial credit profiles.",
    features: [
      "Udyam, GST & ROC secretarial audit",
      "MoA/AoA borrowing power alignment",
      "Commercial credit report (CCR) scrub",
    ],
    href: "/services",
    icon: ShieldCheck,
  },
];

export function WhatVSHelpsPrepare() {
  return (
    <section className="relative py-20 bg-surface border-y border-border">
      <Container>
        <SectionHeader
          eyebrow="Bank-Ready Documentation Suite"
          title="What VS Helps You Prepare"
          highlight="— Zero Ambiguity."
          description="Lenders reject applications due to incomplete documentation, flawed financial models, or statutory oversights. We formulate the exact deliverables credit committees demand."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliverables.map((item, index) => {
            const Icon = item.icon;
            const isFeatured = index === 0 || index === 1;

            return (
              <div
                key={item.title}
                className={`rounded-2xl border p-6 flex flex-col justify-between transition-all duration-200 ${
                  isFeatured
                    ? "bg-warm border-gold/40 shadow-institutional"
                    : "bg-surface border-border hover:border-navy-300 hover:shadow-subtle"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-dark text-gold border border-gold/30">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gold-dark">
                      {item.tagline}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-navy-dark font-sans tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-text-secondary leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-border-subtle space-y-1.5">
                    {item.features.map((f) => (
                      <div key={f} className="flex items-start gap-2 text-[11px] text-navy-800">
                        <CheckCircle2 className="h-3.5 w-3.5 text-gold-dark shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-border-subtle">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-gold-dark hover:text-gold transition-colors"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
