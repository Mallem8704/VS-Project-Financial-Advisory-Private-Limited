import React from "react";
import Link from "next/link";
import { Container, PageHeader, SectionHeader } from "@/components/ui";
import { ABOUT_DATA } from "@/data/about";
import { Users, ShieldCheck, ArrowRight, Lock, Sparkles, Building2 } from "lucide-react";
import { RegulatoryDisclaimerBanner } from "@/components/brand/RegulatoryDisclaimerBanner";

export default function LeadershipPage() {
  const { leadership } = ABOUT_DATA;

  return (
    <div className="min-h-screen bg-background text-text-primary pb-24">
      <section className="bg-navy-dark text-white pt-12 pb-16 border-b border-navy-800">
        <Container>
          <PageHeader
            theme="dark"
            eyebrow="Advisory Desk & Governance"
            title="Leadership & Governance"
            description="Our leadership team unites project finance specialists, credit analysts, and compliance advisors. Structured with CMS-ready fields for transparent verification."
            breadcrumbs={[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Leadership" },
            ]}
          />
        </Container>
      </section>

      <Container className="pt-16 space-y-16">
        {/* Governance Notice */}
        <div className="rounded-2xl border border-navy-200 bg-navy-50/60 p-6 text-xs text-navy-800 space-y-1.5">
          <div className="flex items-center gap-2 text-navy font-bold text-sm">
            <ShieldCheck className="h-4 w-4 text-gold-dark" />
            <span>Fiduciary Integrity & Transparent Credentials</span>
          </div>
          <p className="leading-relaxed text-text-secondary">
            In adherence to banking compliance and our fiduciary principles, VS Project & Financial Advisory Private Limited does not publish unverified awards, fabricated partner lists, or unsubstantiated transaction volumes. The leadership fields below are structured in our CMS-ready format and will be updated with verified regulatory credentials.
          </p>
        </div>

        {/* Leadership Cards Grid */}
        <section className="space-y-6">
          <SectionHeader
            eyebrow="Key Personnel"
            title="Leadership Team"
            highlight="— CMS-Ready Architecture"
            description="Domain heads supervising credit syndication, financial modelling, DPR formulation, and statutory compliance."
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {leadership.map((member) => (
              <div
                key={member.id}
                className="rounded-2xl border border-border bg-surface p-7 shadow-subtle flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3.5">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-dark text-gold font-bold text-base border border-gold/30 shadow-sm">
                        {member.avatarPlaceholder}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-navy-dark font-sans">
                          {member.name}
                        </h3>
                        <p className="text-xs font-bold text-gold-dark">
                          {member.role}
                        </p>
                      </div>
                    </div>
                    {member.isPlaceholder && (
                      <span className="rounded bg-warm px-2 py-0.5 text-[10px] font-bold text-navy-600 border border-border">
                        Placeholder
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="mt-5 pt-4 border-t border-border-subtle">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-navy-400 block mb-2">
                      Core Functional Focus:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {member.focusAreas.map((area) => (
                        <span
                          key={area}
                          className="rounded-lg bg-warm px-2.5 py-1 text-xs font-medium text-navy-800 border border-border"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border-subtle flex items-center justify-between text-xs text-text-secondary">
                  <span>Division: <strong>{member.department}</strong></span>
                  <span className="text-gold-dark font-semibold">Verified Advisory Role</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Advisory Committees & Governance */}
        <section className="space-y-6">
          <SectionHeader
            eyebrow="Institutional Oversight"
            title="Internal Review Committees"
            highlight="— Pre-Banker Appraisal"
            description="Every credit application, financial model, and DPR undergoes multi-tiered internal committee appraisal before banker submission."
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-border bg-surface p-6 shadow-subtle space-y-2">
              <h4 className="text-sm font-bold text-navy-dark font-sans">Credit Risk Appraisal Desk</h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                Evaluates DSCR sensitivity, breakeven capacity, promoter net worth, and collateral coverage to eliminate lender rejection risks.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-surface p-6 shadow-subtle space-y-2">
              <h4 className="text-sm font-bold text-navy-dark font-sans">Technical Feasibility Panel</h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                Reviews civil construction estimates, vendor machinery quotations, and environmental clearances against industry norms.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-surface p-6 shadow-subtle space-y-2">
              <h4 className="text-sm font-bold text-navy-dark font-sans">Statutory Compliance Board</h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                Audits GST reconciliations, MCA annual filings, borrowing powers under Sec 180, and credit bureau records prior to bank dispatch.
              </p>
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
              href="/about/mission"
              className="inline-flex items-center gap-1.5 rounded-xl bg-navy px-5 py-2.5 text-xs font-bold text-white hover:bg-navy-light transition-all"
            >
              <span>View Mission & Values</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </section>

        <RegulatoryDisclaimerBanner />
      </Container>
    </div>
  );
}
