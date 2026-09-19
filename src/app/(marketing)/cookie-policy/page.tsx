import React from "react";
import { Container, PageHeader, Card } from "@/components/ui";

export default function CookiePolicyPage() {
  return (
    <div className="py-12 bg-background">
      <Container size="md">
        <PageHeader
          eyebrow="Privacy & Technical Architecture"
          title="Cookie & Session Policy"
          description="How VS Project & Financial Advisory Private Limited utilizes essential cookies, security tokens, and diagnostic session data."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Cookie Policy" },
          ]}
        />

        <Card className="space-y-6 text-sm text-text-secondary leading-relaxed p-6 sm:p-10">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-navy-dark">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files placed on your device to ensure secure portal logins, maintain diagnostic calculator sessions, and preserve user preferences.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-navy-dark">2. Essential Cookies We Use</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Authentication & Security:</strong> We use secure HTTP-only cookies to verify authenticated client portal sessions and prevent cross-site request forgery (CSRF).
              </li>
              <li>
                <strong>Session State:</strong> Temporary session cookies preserve multi-step calculator inputs (such as MPBF or Finance Readiness Score) so you don&apos;t lose data during step transitions.
              </li>
              <li>
                <strong>Performance & Preferences:</strong> Minimal functional cookies remember your interface preferences, such as collapsed sidebar navigation.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-navy-dark">3. No Invasive Tracking</h2>
            <p>
              We do not utilize invasive third-party tracking pixels or behavioral data brokers. Your financial queries and document uploads remain confidential.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-navy-dark">4. Managing Cookie Preferences</h2>
            <p>
              You can configure your browser to reject cookies. However, disabling essential cookies may impact the security and functionality of the client portal and interactive financial tools.
            </p>
          </section>
        </Card>
      </Container>
    </div>
  );
}
