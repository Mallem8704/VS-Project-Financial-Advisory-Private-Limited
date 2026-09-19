import React from "react";
import Link from "next/link";
import { Container, SectionHeader } from "@/components/ui";
import { BookOpen, Calendar, ExternalLink, ArrowRight, ShieldCheck } from "lucide-react";

const knowledgeArticles = [
  {
    title: "Master Direction – Priority Sector Lending (PSL) Targets for MSMEs",
    category: "RBI Regulatory Circular",
    authority: "Reserve Bank of India (RBI)",
    publicationDate: "Jan 2024",
    summary:
      "Comprehensive regulatory guidelines detailing mandatory commercial bank credit allocations to micro, small, and medium enterprises under PSL norms.",
    href: "/knowledge",
    readTime: "6 min read",
    status: "ACTIVE_REGULATION",
  },
  {
    title: "Credit Guarantee Scheme for Micro & Small Enterprises (CGTMSE Guidelines)",
    category: "Government Guarantee Scheme",
    authority: "Ministry of MSME / CGTMSE Trust",
    publicationDate: "Dec 2023",
    summary:
      "Operational framework for obtaining collateral-free credit facilities up to ₹500 Lakhs through scheduled commercial banks and eligible lending institutions.",
    href: "/knowledge",
    readTime: "8 min read",
    status: "OFFICIAL_SCHEME",
  },
  {
    title: "Formulation of Working Capital Limits: Tandon & Nayak Committee Norms",
    category: "Credit Appraisal Methodology",
    authority: "Indian Banks' Association (IBA)",
    publicationDate: "Nov 2023",
    summary:
      "Analytical breakdown of Maximum Permissible Bank Finance (MPBF) Method I and Method II calculations, current ratio thresholds, and holding period benchmarks.",
    href: "/knowledge",
    readTime: "10 min read",
    status: "BANKING_STANDARD",
  },
  {
    title: "How Bankers Appraise Debt Service Coverage Ratio (DSCR) in Term Loans",
    category: "Financial Modelling Guide",
    authority: "VS Advisory Desk",
    publicationDate: "Jan 2024",
    summary:
      "Evaluating operating cash flows against principal and interest debt commitments. Understand how banks compute gross vs. net DSCR across loan tenures.",
    href: "/knowledge",
    readTime: "7 min read",
    status: "ADVISORY_INSIGHT",
  },
];

export function KnowledgePreviewSection() {
  return (
    <section className="relative py-20 bg-surface border-y border-border">
      <Container>
        <SectionHeader
          eyebrow="Regulatory Intelligence & Insights"
          title="Knowledge Centre Preview"
          highlight="— Verified Banking Guidance"
          description="Access authentic regulatory circulars, bank appraisal methodologies, and MSME subsidy dockets curated directly from statutory sources."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {knowledgeArticles.map((art) => (
            <div
              key={art.title}
              className="group rounded-2xl border border-border bg-warm/50 p-6 shadow-subtle hover:shadow-institutional hover:border-gold/50 hover:bg-surface transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3 text-[11px] text-text-secondary">
                  <span className="rounded-full bg-gold/15 px-2.5 py-0.5 font-bold text-gold-dark border border-gold/30">
                    {art.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3 text-navy-400" />
                    <span>{art.publicationDate}</span>
                  </span>
                </div>

                <h3 className="text-sm font-bold text-navy-dark font-sans tracking-tight line-clamp-2 group-hover:text-navy transition-colors">
                  {art.title}
                </h3>

                <p className="mt-1 text-[11px] font-semibold text-gold-dark">
                  {art.authority}
                </p>

                <p className="mt-2.5 text-xs text-text-secondary leading-relaxed line-clamp-3">
                  {art.summary}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-border-subtle flex items-center justify-between text-xs">
                <span className="text-[11px] text-navy-400">{art.readTime}</span>
                <Link
                  href={art.href}
                  className="inline-flex items-center gap-1 font-bold text-gold-dark hover:text-gold transition-colors"
                >
                  <span>Read Brief</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/knowledge"
            className="inline-flex items-center gap-2 rounded-xl border border-navy-800 bg-navy px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-sm hover:bg-navy-light transition-all"
          >
            <span>Explore All Knowledge Centre Articles</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
