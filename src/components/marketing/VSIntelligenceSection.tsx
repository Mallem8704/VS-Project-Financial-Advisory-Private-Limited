import React from "react";
import Link from "next/link";
import { Container, SectionHeader } from "@/components/ui";
import {
  Sparkles,
  Calculator,
  TrendingUp,
  Percent,
  Scale,
  FolderKanban,
  CheckSquare,
  ArrowRight,
} from "lucide-react";

const intelligenceTools = [
  {
    title: "Finance Readiness Diagnostic",
    description: "Audit your business profile across 15 bank appraisal variables to receive an instant readiness score (0–100).",
    href: "/finance-readiness",
    icon: Sparkles,
    badge: "AI Diagnostic",
    output: "Instant Score & Gap Report",
  },
  {
    title: "Term Loan EMI & Amortization",
    description: "Model monthly debt repayments, total interest burden, and annual principal amortization curves across tenures.",
    href: "/tools",
    icon: Percent,
    badge: "Debt Tool",
    output: "Yearly Debt Amortization",
  },
  {
    title: "DSCR Coverage Calculator",
    description: "Calculate Debt Service Coverage Ratio against commercial banking benchmark norms (>1.33x average required).",
    href: "/tools",
    icon: TrendingUp,
    badge: "Ratio Tool",
    output: "5-Year Coverage Matrix",
  },
  {
    title: "Working Capital (MPBF) Estimator",
    description: "Determine Maximum Permissible Bank Finance limits using Tandon Committee Method I & Method II algorithms.",
    href: "/tools",
    icon: Scale,
    badge: "Tandon Method",
    output: "Assessed Working Capital Limit",
  },
  {
    title: "Break-Even Capacity Analyzer",
    description: "Analyze fixed versus variable cost structures to identify the exact capacity utilization required for profitability.",
    href: "/tools",
    icon: Calculator,
    badge: "Operating Tool",
    output: "Break-Even Turnover (₹ Cr)",
  },
  {
    title: "Project Cost Estimator",
    description: "Itemize land, PEB civil structures, plant machinery, preliminary expenses, and contingencies into bankable capex.",
    href: "/tools",
    icon: FolderKanban,
    badge: "Capex Tool",
    output: "Means of Finance Structure",
  },
  {
    title: "Document Checklist Generator",
    description: "Generate an industry-specific checklist of mandatory KYC, statutory, and financial documents required by lenders.",
    href: "/tools",
    icon: CheckSquare,
    badge: "Compliance Tool",
    output: "Tailored Bank Checklist",
  },
];

export function VSIntelligenceSection() {
  return (
    <section className="relative py-20 bg-surface border-y border-border">
      <Container>
        <SectionHeader
          eyebrow="Algorithmic Pre-Application Modelling"
          title="VS Financial Intelligence"
          highlight="— Real-Time Digital Tools"
          description="Test your project viability, assess debt capacity, and eliminate common banker rejection triggers before formally applying to commercial lenders."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {intelligenceTools.map((tool, idx) => {
            const Icon = tool.icon;
            const isFeatured = idx === 0;

            return (
              <div
                key={tool.title}
                className={`rounded-2xl border p-6 flex flex-col justify-between transition-all duration-200 ${
                  isFeatured
                    ? "bg-navy-dark border-gold text-white shadow-institutional lg:col-span-2 xl:col-span-2"
                    : "bg-surface border-border hover:border-navy-300 hover:shadow-subtle text-navy-dark"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl border ${
                        isFeatured
                          ? "bg-navy text-gold border-gold/40 shadow-gold-glow"
                          : "bg-warm text-navy border-border"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                        isFeatured
                          ? "bg-gold/15 text-gold-light border-gold/30"
                          : "bg-navy-50 text-navy-700 border-navy-100"
                      }`}
                    >
                      {tool.badge}
                    </span>
                  </div>

                  <h3
                    className={`text-base font-bold tracking-tight font-sans ${
                      isFeatured ? "text-white text-lg" : "text-navy-dark"
                    }`}
                  >
                    {tool.title}
                  </h3>

                  <p
                    className={`mt-2 text-xs leading-relaxed ${
                      isFeatured ? "text-navy-200" : "text-text-secondary"
                    }`}
                  >
                    {tool.description}
                  </p>

                  <div
                    className={`mt-4 pt-3 border-t text-xs font-semibold flex items-center justify-between ${
                      isFeatured
                        ? "border-navy-700 text-gold-light"
                        : "border-border-subtle text-navy-800"
                    }`}
                  >
                    <span className="text-[11px]">Primary Output:</span>
                    <span className="font-bold">{tool.output}</span>
                  </div>
                </div>

                <div
                  className={`mt-6 pt-3 border-t ${
                    isFeatured ? "border-navy-700" : "border-border-subtle"
                  }`}
                >
                  <Link
                    href={tool.href}
                    className={`inline-flex items-center gap-1.5 text-xs font-bold transition-colors ${
                      isFeatured
                        ? "text-gold hover:text-gold-light"
                        : "text-gold-dark hover:text-gold"
                    }`}
                  >
                    <span>Launch Financial Tool</span>
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
