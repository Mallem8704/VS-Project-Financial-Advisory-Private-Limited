import React from "react";
import Link from "next/link";
import { Container, SectionHeader } from "@/components/ui";
import {
  Building2,
  Landmark,
  FileSpreadsheet,
  ShieldCheck,
  Award,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const platformCards = [
  {
    title: "Business Advisory",
    description:
      "Entity structuring (Pvt Ltd, LLP), corporate governance, project viability, promoter equity planning, and strategic MSME scale-up roadmaps.",
    href: "/services",
    icon: Building2,
    deliverables: ["Entity Selection & Incorporation", "Business Model Validation", "Promoter Equity Structuring"],
  },
  {
    title: "Project Finance",
    description:
      "End-to-end debt syndication for greenfield setups, brownfield capex, machinery term loans, and working capital credit lines across commercial lenders.",
    href: "/project-finance",
    icon: Landmark,
    deliverables: ["Term Loan Syndication", "Working Capital (CC/OD)", "Letter of Credit & Bank Guarantees"],
  },
  {
    title: "DPR & CMA",
    description:
      "Institutional-grade 8-chapter Detailed Project Reports and Form I–VI Credit Monitoring Arrangement data formulated strictly per IBA & RBI norms.",
    href: "/dpr",
    icon: FileSpreadsheet,
    deliverables: ["Bankable 8-Chapter DPR", "CMA Form I to VI Sheets", "MPBF Tandon Method II Limits"],
  },
  {
    title: "Compliance",
    description:
      "Statutory formalization including GST audits, MCA/ROC annual compliance, Udyam registration, Pollution Control Board (PCB) clearances, and credit scrubs.",
    href: "/services",
    icon: ShieldCheck,
    deliverables: ["GST & ROC Statutory Filings", "Udyam & Regulatory Licences", "Pre-Disbursement Credit Scrub"],
  },
  {
    title: "Government Schemes",
    description:
      "Identification and end-to-end structuring of central and state credit-linked subsidies, interest subvention, and CGTMSE collateral-free guarantee dockets.",
    href: "/services",
    icon: Award,
    deliverables: ["CGTMSE up to ₹500 Lakhs", "Central Capital Subsidies", "State Industrial Policy Incentives"],
  },
  {
    title: "AI Financial Intelligence",
    description:
      "Algorithmic credit readiness diagnostics, automated DPR chapter synthesis, cash flow sensitivity modeling, and benchmark ratio stress-testing.",
    href: "/tools",
    icon: Sparkles,
    deliverables: ["Automated DPR Synthesis Engine", "DSCR & Break-Even Modelling", "Instant Finance Readiness Score"],
  },
];

export function OnePlatformSection() {
  return (
    <section className="relative py-20 bg-background">
      <Container>
        <SectionHeader
          eyebrow="Integrated Enterprise Architecture"
          title="One Platform."
          highlight="Your Complete Business Journey."
          description="From initial business conception and statutory setup to bankable credit documentation and post-sanction growth — every capability managed under one unified institutional umbrella."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {platformCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="group relative rounded-2xl border border-border bg-surface p-7 shadow-subtle hover:shadow-institutional hover:border-gold/50 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-dark text-gold border border-gold/30 shadow-sm transition-transform duration-200 group-hover:scale-105">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-navy-400">
                      Core Domain
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-navy-dark tracking-tight font-sans group-hover:text-navy transition-colors">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {card.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-border-subtle space-y-2">
                    {card.deliverables.map((d) => (
                      <div key={d} className="flex items-center gap-2 text-xs text-navy-800">
                        <span className="h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border-subtle">
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-gold-dark group-hover:text-gold transition-colors"
                  >
                    <span>Explore Solutions</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
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
