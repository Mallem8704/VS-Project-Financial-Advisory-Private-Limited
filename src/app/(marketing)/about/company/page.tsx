import React from "react";
import Link from "next/link";
import { Container, PageHeader, SectionHeader } from "@/components/ui";
import { ABOUT_DATA } from "@/data/about";
import { Building2, ShieldCheck, ArrowRight, CheckCircle2, FileText, Target } from "lucide-react";
import { RegulatoryDisclaimerBanner } from "@/components/brand/RegulatoryDisclaimerBanner";

export default function CompanyProfilePage() {
  const { company } = ABOUT_DATA;

  return (
    <div className="min-h-screen bg-background text-text-primary pb-24">
      <section className="bg-navy-dark text-white pt-12 pb-16 border-b border-navy-800">
        <Container>
          <PageHeader
            eyebrow="Corporate Identity & Heritage"
            title="Company Profile & Purpose"
            description="The origins, corporate structure, and fundamental mandate of VS Project & Financial Advisory Private Limited."
            breadcrumbs={[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Company Profile" },
            ]}
          />
        </Container>
      </section>

      <Container className="pt-16 space-y-16">
        {/* Purpose Statement */}
        <section className="space-y-4">
          <SectionHeader
            eyebrow="Founding Mandate"
            title="Why VS Was Founded"
            highlight="— Closing the Credit Gap"
            description="A dedicated institutional platform engineered to eliminate project documentation failure points for Indian businesses."
            align="left"
          />

          <div className="rounded-2xl border border-border bg-surface p-8 sm:p-10 shadow-subtle space-y-4 text-sm sm:text-base text-text-secondary leading-relaxed">
            <p className="font-bold text-navy-dark text-lg">
              {company.purpose}
            </p>
            <p>{company.story.paragraph1}</p>
            <p>{company.story.paragraph2}</p>
            <p>{company.story.paragraph3}</p>
          </div>
        </section>

        {/* Corporate Legal Framework */}
        <section className="space-y-4">
          <SectionHeader
            eyebrow="Legal & Governance Structure"
            title="Corporate Architecture"
            highlight="— Registered Indian Advisory Entity"
            description="Operating strictly under the Companies Act and Indian corporate compliance standards."
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8 shadow-subtle space-y-4">
              <h4 className="text-base font-bold text-navy-dark font-sans flex items-center gap-2">
                <Building2 className="h-5 w-5 text-gold-dark" />
                <span>Entity Particulars</span>
              </h4>
              <div className="space-y-3 text-xs text-navy-800">
                <div className="flex justify-between border-b border-border-subtle pb-2">
                  <span className="text-text-secondary">Official Legal Name:</span>
                  <span className="font-bold">{company.legalName}</span>
                </div>
                <div className="flex justify-between border-b border-border-subtle pb-2">
                  <span className="text-text-secondary">Entity Classification:</span>
                  <span className="font-bold">{company.incorporationType}</span>
                </div>
                <div className="flex justify-between border-b border-border-subtle pb-2">
                  <span className="text-text-secondary">Primary Operating Mandate:</span>
                  <span className="font-bold text-gold-dark">{company.tagline}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Registered Offices:</span>
                  <span className="font-bold">New Delhi & Mumbai, India</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8 shadow-subtle space-y-4">
              <h4 className="text-base font-bold text-navy-dark font-sans flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-gold-dark" />
                <span>Regulatory Positioning</span>
              </h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                VS Project & Financial Advisory Private Limited operates strictly as an independent management, corporate finance, and project documentation advisory firm. We are not a bank, Non-Banking Financial Company (NBFC), or primary lending institution.
              </p>
              <div className="rounded-xl bg-warm border border-border p-4 text-xs space-y-1.5 text-navy-900">
                <p className="font-bold text-gold-dark">Prudential Banking Standards</p>
                <p className="text-text-secondary">
                  Every DPR and CMA formulated by our advisory desk is aligned with Reserve Bank of India (RBI) guidelines, Tandon Committee Method II norms, and Indian Accounting Standards (Ind AS).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation CTAs */}
        <section className="pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/about"
            className="text-xs font-bold text-navy-700 hover:text-navy transition-colors"
          >
            ← Back to About Overview
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/about/leadership"
              className="inline-flex items-center gap-1.5 rounded-xl bg-navy px-5 py-2.5 text-xs font-bold text-white hover:bg-navy-light transition-all"
            >
              <span>View Leadership Profiles</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </section>

        <RegulatoryDisclaimerBanner />
      </Container>
    </div>
  );
}
