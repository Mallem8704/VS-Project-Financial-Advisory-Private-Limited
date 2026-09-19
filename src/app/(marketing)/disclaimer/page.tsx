import React from "react";
import { Container, PageHeader, Card, Alert } from "@/components/ui";

export default function RegulatoryDisclaimerPage() {
  return (
    <div className="py-12 bg-background">
      <Container size="md">
        <PageHeader
          eyebrow="Compliance & Governance"
          title="Regulatory & Non-Guarantee Disclaimer"
          description="Mandatory statutory disclosures governing all online advisory content, diagnostic calculators, and project finance facilitation."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Disclaimer" },
          ]}
        />

        <Card className="space-y-6 text-sm text-text-secondary leading-relaxed p-6 sm:p-10">
          <Alert variant="warning" title="Primary Statutory Notice">
            &ldquo;Loan approval and sanction are solely at the discretion of the respective bank or financial institution. VS Project & Financial Advisory provides advisory, documentation and facilitation services and does not guarantee sanction.&rdquo;
          </Alert>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-navy-dark">1. Non-Banking Entity Status</h2>
            <p>
              VS Project & Financial Advisory Private Limited is an independent corporate advisory and financial modelling consultancy. We are NOT a scheduled commercial bank, Non-Banking Financial Company (NBFC), primary lending institution, or government agency. We do not accept public deposits, lend direct capital, or underwrite debt on our balance sheet.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-navy-dark">2. Indicative Nature of Calculators & Diagnostics</h2>
            <p>
              All online calculators—including the Maximum Permissible Bank Finance (MPBF) calculator, Debt Service Coverage Ratio (DSCR) tool, and Finance Readiness Score—are provided strictly for educational and indicative estimation. Output figures do not constitute a formal loan offer or guarantee of sanction. Actual credit limits and interest rates are determined exclusively by the lending bank following internal credit committee appraisal.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-navy-dark">3. Government Schemes & Subsidies</h2>
            <p>
              While we assist enterprises in preparing documentation under government credit guarantee schemes (such as CGTMSE, PMEGP, Stand-Up India, and State Industrial Policies), the ultimate approval and disbursement of subsidy claims or guarantee covers are governed solely by the respective administrative bodies and nodal lending institutions.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-navy-dark">4. No Investment or Legal Advice</h2>
            <p>
              Information on this website does not constitute legal, tax, or investment advice. Enterprises should consult qualified chartered accountants, company secretaries, and legal counsel for specific legal and tax determinations.
            </p>
          </section>
        </Card>
      </Container>
    </div>
  );
}
