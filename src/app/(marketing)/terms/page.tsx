import React from "react";
import { Container, PageHeader, Card, Alert } from "@/components/ui";

export default function TermsOfEngagementPage() {
  return (
    <div className="py-12 bg-background">
      <Container size="md">
        <PageHeader
          eyebrow="Commercial Framework"
          title="Terms of Engagement"
          description="Last updated: January 2024. Governing terms for project finance advisory, financial modeling, DPR synthesis, and bank coordination services."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Terms of Engagement" },
          ]}
        />

        <Card className="space-y-6 text-sm text-text-secondary leading-relaxed p-6 sm:p-10">
          <Alert variant="warning" title="Discretion of Lending Institution">
            Loan approval and sanction are solely at the discretion of the respective bank or financial institution. VS Project & Financial Advisory provides advisory, documentation and facilitation services and does not guarantee sanction.
          </Alert>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-navy-dark">1. Scope of Advisory Services</h2>
            <p>
              VS Project & Financial Advisory Private Limited acts as an independent project finance advisor, financial modeller, and documentation specialist. We assist enterprises in structuring their business plans, compiling CMA reports, drafting Detailed Project Reports (DPR), and facilitating submission to banking institutions.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-navy-dark">2. Non-Guarantee of Credit Sanction</h2>
            <p>
              The client acknowledges and agrees that the decision to sanction, reject, modify terms, or disburse any loan, working capital facility, or government subsidy rests entirely with the lending bank or financial institution. We make no representations or warranties of guaranteed bank sanction.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-navy-dark">3. Client Representation & Warranties</h2>
            <p>
              The client warrants that all financials, project parameters, asset valuations, and statutory filings provided to us are true, accurate, and complete. We rely on the authenticity of client-provided documentation and do not conduct forensic fraud audits.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-navy-dark">4. Advisory Fees & Payment Milestones</h2>
            <p>
              Advisory and documentation fees are payable in accordance with the specific engagement letter or milestone quotation agreed between the parties. Fees cover professional time, financial engineering, and document preparation.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-navy-dark">5. Governing Law & Jurisdiction</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising hereunder shall be subject to the exclusive jurisdiction of the courts at New Delhi / Mumbai, India.
            </p>
          </section>
        </Card>
      </Container>
    </div>
  );
}
