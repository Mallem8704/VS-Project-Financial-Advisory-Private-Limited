import React from "react";
import Link from "next/link";
import { RegulatoryDisclaimerBanner } from "@/components/brand/RegulatoryDisclaimerBanner";
import {
  BookOpen,
  Calendar,
  ExternalLink,
  ShieldCheck,
  Building,
  UserCheck,
  Search,
  Tag,
  Clock,
} from "lucide-react";

interface KnowledgeItem {
  id: string;
  title: string;
  category: "RBI Circular" | "MSME Subsidy" | "Banking Norm" | "Statutory Tax";
  summary: string;
  sourceUrl: string;
  issuingAuthority: string;
  publicationDate: string;
  effectiveDate: string;
  lastReviewedDate: string;
  reviewedBy: string;
  status: "ACTIVE_VALIDATED" | "SUPERSEDED" | "PROPOSED";
  applicableAudience: string;
  tags: string[];
}

const KNOWLEDGE_ARTICLES: KnowledgeItem[] = [
  {
    id: "rbi-psl-msme-2024",
    title: "Master Direction – Priority Sector Lending (PSL) – Targets and Classification",
    category: "RBI Circular",
    summary:
      "Operational guidelines for commercial banks governing mandatory 40% priority sector lending targets, sub-targets for Micro Enterprises (7.5%), and credit guarantee scheme coverage norms.",
    sourceUrl: "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx",
    issuingAuthority: "Reserve Bank of India (RBI)",
    publicationDate: "2024-04-01",
    effectiveDate: "2024-04-01",
    lastReviewedDate: "2024-11-15",
    reviewedBy: "VS Advisory Banking Law Desk (CA / Ex-DGM PNB)",
    status: "ACTIVE_VALIDATED",
    applicableAudience: "All Commercial Banks, Small Finance Banks, and MSME Borrowers",
    tags: ["PSL", "Priority Sector", "Micro Enterprises", "Commercial Banking"],
  },
  {
    id: "cgtmse-enhanced-limits-2023",
    title: "Enhancement of Ceiling Limit for Credit Guarantee Scheme for MSEs to ₹500 Lakhs",
    category: "MSME Subsidy",
    summary:
      "Circular notifying elevation of credit guarantee ceiling from ₹200 Lakhs to ₹500 Lakhs, reduction of annual guarantee fees to 0.37% for micro units, and inclusion of women/SC/ST concessional bands.",
    sourceUrl: "https://www.cgtmse.in/Files/Circulars",
    issuingAuthority: "Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE)",
    publicationDate: "2023-04-01",
    effectiveDate: "2023-04-01",
    lastReviewedDate: "2024-10-10",
    reviewedBy: "Head of Project Finance (VS Advisory)",
    status: "ACTIVE_VALIDATED",
    applicableAudience: "Micro and Small Enterprises, Member Lending Institutions (MLIs)",
    tags: ["CGTMSE", "Collateral-Free", "Credit Guarantee", "₹5 Cr Limit"],
  },
  {
    id: "tandon-nayak-mpbf-framework",
    title: "Framework on Assessment of Working Capital (Tandon & Nayak Committee Guidelines)",
    category: "Banking Norm",
    summary:
      "Standard appraisal methodology for assessing Maximum Permissible Bank Finance (MPBF). Method I vs Method II guidelines, Current Ratio benchmark (1.33), and the Turnover Method for credit limits under ₹5 Crores.",
    sourceUrl: "https://www.iba.org.in/guidelines",
    issuingAuthority: "Indian Banks' Association (IBA) & Reserve Bank of India",
    publicationDate: "2022-06-15",
    effectiveDate: "2022-06-15",
    lastReviewedDate: "2024-12-01",
    reviewedBy: "Senior Credit Underwriter (VS Advisory)",
    status: "ACTIVE_VALIDATED",
    applicableAudience: "SMEs, Corporate Borrowers, Bank Credit Officers",
    tags: ["MPBF", "Working Capital", "CMA Form IV", "Current Ratio 1.33"],
  },
  {
    id: "msmed-section-15-delayed-payments",
    title: "Section 15 to 24 of MSMED Act 2006: Delayed Payments to Micro & Small Enterprises",
    category: "Statutory Tax",
    summary:
      "Statutory provisions mandating buyers to make payment within 45 days (or agreed period) with compound interest at 3x the RBI bank rate for defaults, and Income Tax Act Section 43B(h) disallowance rules.",
    sourceUrl: "https://samadhaan.msme.gov.in/",
    issuingAuthority: "Ministry of Micro, Small and Medium Enterprises & CBDT",
    publicationDate: "2023-11-20",
    effectiveDate: "2024-04-01",
    lastReviewedDate: "2024-11-01",
    reviewedBy: "Tax & Compliance Lead (VS Advisory)",
    status: "ACTIVE_VALIDATED",
    applicableAudience: "All Buyers of Goods/Services from MSEs, Tax Auditors",
    tags: ["Section 43B(h)", "MSME Samadhaan", "Delayed Payments", "Income Tax"],
  },
];

export default function KnowledgeCentrePage() {
  return (
    <div className="bg-warm min-h-screen py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold-dark">
            <BookOpen className="h-3.5 w-3.5" />
            <span>Verifiable Regulatory & Banking Hub</span>
          </div>
          <h1 className="text-3xl font-serif font-bold text-navy-dark sm:text-5xl tracking-tight">
            Knowledge Centre & Circulars
          </h1>
          <p className="text-base text-navy-700 leading-relaxed">
            Curated repository of official RBI circulars, MSME Ministry notifications, banking norms, and statutory compliance updates — fully attributed with issuing authorities, review dates, and source URLs.
          </p>
        </div>

        {/* Articles List */}
        <div className="mt-12 space-y-6">
          {KNOWLEDGE_ARTICLES.map((article) => (
            <div
              key={article.id}
              className="rounded-2xl border border-navy-100 bg-white p-6 sm:p-8 shadow-institutional space-y-4"
            >
              {/* Top Meta Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-navy-50 pb-4 text-xs">
                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-navy-50 px-2.5 py-1 font-bold text-navy-800">
                    {article.category}
                  </span>
                  <span className="rounded-md bg-emerald-50 px-2.5 py-1 font-semibold text-emerald-800 border border-emerald-200">
                    {article.status.replace("_", " ")}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-navy-500 text-[11px]">
                  <span>Published: {article.publicationDate}</span>
                  <span>•</span>
                  <span>Effective: {article.effectiveDate}</span>
                </div>
              </div>

              {/* Title & Summary */}
              <div>
                <h2 className="text-xl font-bold text-navy-dark hover:text-gold-dark transition-colors">
                  {article.title}
                </h2>
                <p className="text-xs sm:text-sm text-navy-700 mt-2 leading-relaxed">
                  {article.summary}
                </p>
              </div>

              {/* Complete Audit & Source Metadata Grid */}
              <div className="rounded-xl bg-warm-50/70 p-4 border border-navy-50 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                <div>
                  <span className="text-navy-500 font-semibold block uppercase text-[10px]">
                    Issuing Authority:
                  </span>
                  <span className="font-bold text-navy-900">{article.issuingAuthority}</span>
                </div>
                <div>
                  <span className="text-navy-500 font-semibold block uppercase text-[10px]">
                    Last Reviewed Date:
                  </span>
                  <span className="text-navy-900">{article.lastReviewedDate}</span>
                </div>
                <div>
                  <span className="text-navy-500 font-semibold block uppercase text-[10px]">
                    Reviewed By:
                  </span>
                  <span className="text-navy-900">{article.reviewedBy}</span>
                </div>
                <div>
                  <span className="text-navy-500 font-semibold block uppercase text-[10px]">
                    Applicable Audience:
                  </span>
                  <span className="text-navy-900">{article.applicableAudience}</span>
                </div>
              </div>

              {/* Bottom Tags & Source Link */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <div className="flex flex-wrap items-center gap-1.5">
                  {article.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="rounded bg-warm-200/80 px-2 py-0.5 text-[11px] text-navy-700"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
                <a
                  href={article.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-gold-dark hover:text-navy transition-colors"
                >
                  <span>Official Issuing Authority Source</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <RegulatoryDisclaimerBanner customText="Information Accuracy Notice: Regulatory circulars and government schemes are reproduced for educational and advisory guidance. Lenders and borrowers are advised to consult the respective statutory Gazette notifications and official RBI/Ministry releases for legal and binding interpretations." />
        </div>
      </div>
    </div>
  );
}
