import React from "react";
import { Container, PageHeader, Card } from "@/components/ui";

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12 bg-background">
      <Container size="md">
        <PageHeader
          eyebrow="Legal & Data Governance"
          title="Privacy Policy"
          description="Last updated: January 2024. Explains how VS Project & Financial Advisory Private Limited collects, uses, protects, and governs client financial documents and proprietary project information."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Privacy Policy" },
          ]}
        />

        <Card className="space-y-6 text-sm text-text-secondary leading-relaxed p-6 sm:p-10">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-navy-dark">1. Commitment to Financial Confidentiality</h2>
            <p>
              VS Project & Financial Advisory Private Limited (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) provides high-level project finance advisory, DPR preparation, and CMA data compilation for MSMEs and corporate enterprises. We treat all business plans, financial models, audited reports, and banking correspondence under strict Non-Disclosure Agreement (NDA) protocols.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-navy-dark">2. Information We Collect</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Corporate identifiers: Entity Name, CIN/LLPIN, PAN, Udyam Registration, GSTIN.</li>
              <li>Financial records: Audited balance sheets, P&L statements, tax audit reports, provisional numbers, bank account statements.</li>
              <li>Project documentation: Technical feasibility reports, machinery quotations, land title records, pollution control clearances.</li>
              <li>Contact details: Authorized director/promoter names, email addresses, phone numbers.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-navy-dark">3. Usage of Financial Data</h2>
            <p>
              Your financial and business information is strictly utilized to prepare bankable appraisal files, formulate CMA data, compute debt service coverage ratios (DSCR), evaluate MPBF limits, and facilitate submissions to scheduled commercial banks, SIDBI, or NBFCs upon your written authorization.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-navy-dark">4. Zero Data Monetization Guarantee</h2>
            <p>
              We never sell, rent, or trade your financial information or enterprise data to third-party marketing brokers. Data sharing is limited exclusively to authorized lending institutions participating in your project syndication.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-navy-dark">5. Contact Our Data Protection Desk</h2>
            <p>
              For questions regarding privacy, NDA execution, or data deletion requests, contact our compliance desk at{" "}
              <a href="mailto:compliance@vsprojectfinance.in" className="text-gold-dark font-semibold hover:underline">
                compliance@vsprojectfinance.in
              </a>.
            </p>
          </section>
        </Card>
      </Container>
    </div>
  );
}
