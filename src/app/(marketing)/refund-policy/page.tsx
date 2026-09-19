import React from "react";
import { Container, PageHeader, Card } from "@/components/ui";

export default function RefundPolicyPage() {
  return (
    <div className="py-12 bg-background">
      <Container size="md">
        <PageHeader
          eyebrow="Commercial Terms"
          title="Refund & Cancellation Policy"
          description="Guidelines governing professional service retainer fees, advisory milestone billing, and cancellation of DPR/CMA projects."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Refund Policy" },
          ]}
        />

        <Card className="space-y-6 text-sm text-text-secondary leading-relaxed p-6 sm:p-10">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-navy-dark">1. Professional Service Fees</h2>
            <p>
              Fees charged by VS Project & Financial Advisory Private Limited represent compensation for specialized professional time, financial modeling, industry research, and document formulation. Fees are structured on milestone-based deliverables as agreed in the formal Engagement Agreement.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-navy-dark">2. Milestone Work Incurrence</h2>
            <p>
              Once project research, financial modeling, or DPR chapter drafting has commenced, retainer fees for that milestone are non-refundable, as work hours and analytical resources have already been deployed.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-navy-dark">3. Bank Decision Independence</h2>
            <p>
              The non-sanction, rejection, or modification of loan terms by a bank or financial institution does not entitle the client to a refund of advisory fees. Our professional services cover project feasibility, financial structuring, and documentation preparation, not guaranteed credit approval.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-navy-dark">4. Cancellation Prior to Work Commencement</h2>
            <p>
              If an advisory service is cancelled in writing prior to any document review or commencement of financial drafting, a full refund minus administrative processing fees (not exceeding 10%) will be processed within 7–10 business days.
            </p>
          </section>
        </Card>
      </Container>
    </div>
  );
}
