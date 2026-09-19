import React from "react";
import Link from "next/link";
import { Container, PageHeader, SectionHeader } from "@/components/ui";
import { ABOUT_DATA } from "@/data/about";
import { Target, Compass, Sparkles, ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { RegulatoryDisclaimerBanner } from "@/components/brand/RegulatoryDisclaimerBanner";

export default function MissionPage() {
  const { missionVision, philosophy } = ABOUT_DATA;

  return (
    <div className="min-h-screen bg-background text-text-primary pb-24">
      <section className="bg-navy-dark text-white pt-12 pb-16 border-b border-navy-800">
        <Container>
          <PageHeader
            theme="dark"
            eyebrow="Purpose & Principles"
            title="Mission, Vision & Core Values"
            description="The foundational doctrine guiding our advisory methodology, client interactions, and credit underwriting standards."
            breadcrumbs={[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Mission & Values" },
            ]}
          />
        </Container>
      </section>

      <Container className="pt-16 space-y-16">
        {/* Mission & Vision Split */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-border bg-surface p-8 sm:p-10 shadow-subtle space-y-4">
            <div className="flex items-center gap-2.5 text-gold-dark">
              <Target className="h-6 w-6" />
              <span className="text-xs font-bold uppercase tracking-wider">Our Mandate</span>
            </div>
            <h3 className="text-2xl font-bold text-navy-dark font-sans">
              The Mission
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              {missionVision.mission}
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-8 sm:p-10 shadow-subtle space-y-4">
            <div className="flex items-center gap-2.5 text-gold-dark">
              <Compass className="h-6 w-6" />
              <span className="text-xs font-bold uppercase tracking-wider">Our Destination</span>
            </div>
            <h3 className="text-2xl font-bold text-navy-dark font-sans">
              The Vision
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              {missionVision.vision}
            </p>
          </div>
        </section>

        {/* Operating Philosophy Banner */}
        <section className="space-y-6">
          <SectionHeader
            eyebrow="Core Doctrine"
            title="Our Advisory Philosophy"
            highlight="— Beyond Simple Funding"
            description="Why capital alone is never a substitute for structured planning and financial discipline."
            align="center"
          />

          <div className="rounded-3xl border border-gold/30 bg-warm p-8 sm:p-12 text-center shadow-institutional relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-gold-dark via-gold to-gold-light" />
            <blockquote className="font-serif italic text-xl sm:text-3xl text-navy-dark max-w-3xl mx-auto leading-relaxed">
              &ldquo;{philosophy.statement}&rdquo;
            </blockquote>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-4">
            {philosophy.pillars.map((p, i) => (
              <div
                key={p.title}
                className="rounded-xl border border-border bg-surface p-5 shadow-subtle space-y-2"
              >
                <span className="text-xs font-mono font-extrabold text-gold-dark block">
                  0{i + 1}
                </span>
                <h4 className="text-sm font-bold text-navy-dark font-sans">{p.title}</h4>
                <p className="text-xs text-text-secondary leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5 Core Values */}
        <section className="space-y-6">
          <SectionHeader
            eyebrow="Ethical Benchmarks"
            title="Our Core Values"
            highlight="— Non-Negotiable Standards"
            description="The principles that govern every project appraisal, financial model, and client interaction."
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {missionVision.coreValues.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-border bg-surface p-6 shadow-subtle space-y-2.5"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-gold-dark shrink-0" />
                  <h4 className="text-base font-bold text-navy-dark font-sans">{v.title}</h4>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
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
              href="/about/why-vs"
              className="inline-flex items-center gap-1.5 rounded-xl bg-navy px-5 py-2.5 text-xs font-bold text-white hover:bg-navy-light transition-all"
            >
              <span>Explore Why VS Model</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </section>

        <RegulatoryDisclaimerBanner />
      </Container>
    </div>
  );
}
