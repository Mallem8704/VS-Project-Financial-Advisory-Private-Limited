import React from "react";
import Link from "next/link";
import { Container, PageHeader, SectionHeader, Button } from "@/components/ui";
import { RegulatoryDisclaimerBanner } from "@/components/brand/RegulatoryDisclaimerBanner";
import { ABOUT_DATA } from "@/data/about";
import {
  ShieldCheck,
  Building2,
  Compass,
  Target,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Users,
  Lightbulb,
  FileSpreadsheet,
  Lock,
  Layers,
  Award,
  BookOpen,
} from "lucide-react";

export default function AboutPage() {
  const { company, missionVision, philosophy, triadModel, ethics, leadership } = ABOUT_DATA;

  const aboutNavLinks = [
    { label: "Overview", href: "/about", active: true },
    { label: "Company Purpose", href: "/about/company" },
    { label: "Leadership Profiles", href: "/about/leadership" },
    { label: "Mission & Vision", href: "/about/mission" },
    { label: "Why VS Model", href: "/about/why-vs" },
  ];

  const industryExpertise = [
    { name: "Manufacturing & Engineering", desc: "CNC tooling, automotive parts, fabrication & PEB sheds." },
    { name: "Rice Mills & Agro Processing", desc: "Automated milling, modern silos & food processing units." },
    { name: "Hospitals & Healthcare", desc: "Multi-speciality clinics, diagnostic centres & NABH bed expansion." },
    { name: "Hotels & Hospitality", desc: "Commercial hotels, boutique resorts & banquet infrastructure." },
    { name: "Solar & Renewable Energy", desc: "C&I rooftop solar, ground-mounted captive parks & green energy." },
    { name: "Warehousing & Cold Chain", desc: "Grade-A logistics parks, automated CA cold storage & WDRA sheds." },
  ];

  return (
    <div className="min-h-screen bg-background text-text-primary pb-24">
      {/* 1. HERO SECTION */}
      <section className="bg-navy-dark text-white pt-12 pb-16 border-b border-navy-800">
        <Container>
          <PageHeader
            eyebrow="Institutional Advisory Profile"
            title="About VS Project & Financial Advisory"
            description="An institutional-grade MSME Project Finance & Business Advisory Platform. We guide Indian entrepreneurs from business idea validation to formal bank sanction and sustainable post-sanction growth."
            breadcrumbs={[
              { label: "Home", href: "/" },
              { label: "About Us" },
            ]}
          />

          {/* Sub-Navigation Tabs */}
          <div className="mt-8 flex items-center gap-2 overflow-x-auto no-scrollbar border-b border-navy-700 pb-3">
            {aboutNavLinks.map((tab) => (
              <Link
                key={tab.label}
                href={tab.href}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                  tab.active
                    ? "bg-gold text-navy-dark shadow-sm"
                    : "text-warm-300 hover:text-white hover:bg-navy-800"
                }`}
              >
                {tab.label}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <Container className="pt-16 space-y-24">
        {/* 2. COMPANY PURPOSE */}
        <section className="space-y-6">
          <SectionHeader
            eyebrow="Why We Exist"
            title="Company Purpose"
            highlight="— Closing the MSME Credit Gap"
            description="Democratizing access to institutional project finance and credit readiness for Indian entrepreneurs."
            align="left"
          />

          <div className="rounded-2xl border border-border bg-surface p-8 sm:p-10 shadow-institutional space-y-4">
            <h3 className="text-xl font-bold text-navy-dark font-sans">
              Bridging the Divide Between Industrial Ambition and Banking Rigor
            </h3>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-4xl">
              {company.purpose}
            </p>
            <div className="pt-4 border-t border-border-subtle grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-warm border border-border">
                <p className="font-bold text-navy-dark uppercase text-[11px] mb-1">Information Symmetry</p>
                <p className="text-text-secondary">Providing founders with transparent insight into how bank credit risk officers underwrite debt.</p>
              </div>
              <div className="p-4 rounded-xl bg-warm border border-border">
                <p className="font-bold text-navy-dark uppercase text-[11px] mb-1">Banker-Grade Preparation</p>
                <p className="text-text-secondary">Eliminating flawed CMA ratios, unsubstantiated capex schedules, and statutory oversights.</p>
              </div>
              <div className="p-4 rounded-xl bg-warm border border-border">
                <p className="font-bold text-navy-dark uppercase text-[11px] mb-1">Unified Execution</p>
                <p className="text-text-secondary">Consolidating business setup, feasibility, DPR, CMA, and bank liaison under one roof.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. OUR STORY */}
        <section className="space-y-6">
          <SectionHeader
            eyebrow="The Genesis"
            title="Our Story"
            highlight="— From Fragmentation to Unity"
            description="Why the traditional fragmented consultancy model failed Indian founders—and how VS was built to fix it."
            align="left"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 rounded-2xl border border-border bg-surface p-8 shadow-subtle space-y-4 text-sm text-text-secondary leading-relaxed">
              <p>{company.story.paragraph1}</p>
              <p>{company.story.paragraph2}</p>
              <p>{company.story.paragraph3}</p>
            </div>

            <div className="lg:col-span-4 rounded-2xl border border-gold/30 bg-navy-dark p-6 sm:p-7 text-white shadow-institutional space-y-4">
              <div className="flex items-center gap-2 text-gold">
                <Building2 className="h-5 w-5" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-gold-light">
                  Corporate Snapshot
                </h4>
              </div>
              <div className="space-y-3 text-xs text-warm-200">
                <div className="flex justify-between border-b border-navy-700 pb-2">
                  <span className="text-navy-400">Legal Entity:</span>
                  <span className="font-semibold text-right text-white">VS Project & Financial Advisory Pvt. Ltd.</span>
                </div>
                <div className="flex justify-between border-b border-navy-700 pb-2">
                  <span className="text-navy-400">Core Mandate:</span>
                  <span className="font-semibold text-gold-light">Idea to Bank Sanction</span>
                </div>
                <div className="flex justify-between border-b border-navy-700 pb-2">
                  <span className="text-navy-400">Operational Model:</span>
                  <span className="font-semibold text-white">Finance + Compliance + Tech</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-navy-400">Jurisdiction:</span>
                  <span className="font-semibold text-white">New Delhi & Mumbai, India</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 & 5. MISSION & VISION */}
        <section className="space-y-6">
          <SectionHeader
            eyebrow="Guiding Light"
            title="Mission & Vision"
            highlight="— Strategic Horizon"
            description="Anchored in long-term enterprise sustainability, transparent execution, and financial discipline."
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-border bg-surface p-8 shadow-subtle flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Target className="h-5 w-5 text-gold-dark" />
                  <h3 className="text-lg font-bold text-navy-dark font-sans">Our Mission</h3>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {missionVision.mission}
                </p>
              </div>
              <div className="pt-4 border-t border-border-subtle text-xs font-bold text-navy-800">
                Focus: Bankability • Preparation • Sustainable Debt
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-8 shadow-subtle flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Compass className="h-5 w-5 text-gold-dark" />
                  <h3 className="text-lg font-bold text-navy-dark font-sans">Our Vision</h3>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {missionVision.vision}
                </p>
              </div>
              <div className="pt-4 border-t border-border-subtle text-xs font-bold text-navy-800">
                Standard: Zero-Compromise Compliance • Institutional Trust
              </div>
            </div>
          </div>
        </section>

        {/* 6. ADVISORY PHILOSOPHY */}
        <section className="space-y-6">
          <SectionHeader
            eyebrow="Core Doctrine"
            title="Advisory Philosophy"
            highlight="— The 5 Pillars of Financial Discipline"
            description="Why capital alone never guarantees business success—and why financial discipline must come first."
            align="left"
          />

          {/* Core Philosophy Banner */}
          <div className="rounded-2xl border border-gold/30 bg-warm p-8 sm:p-10 shadow-institutional text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-dark via-gold to-gold-light" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-gold-dark block mb-2">
              The VS Operating Philosophy
            </span>
            <blockquote className="font-serif italic text-xl sm:text-2xl lg:text-3xl text-navy-dark max-w-3xl mx-auto leading-relaxed">
              &ldquo;{philosophy.statement}&rdquo;
            </blockquote>
          </div>

          {/* 5 Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-4">
            {philosophy.pillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="rounded-xl border border-border bg-surface p-5 shadow-subtle hover:border-navy-300 transition-all space-y-2"
              >
                <span className="text-xs font-mono font-extrabold text-gold-dark block">
                  0{idx + 1}
                </span>
                <h4 className="text-sm font-bold text-navy-dark font-sans">
                  {pillar.title}
                </h4>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 7. FROM IDEA TO SANCTION METHODOLOGY */}
        <section className="space-y-6">
          <SectionHeader
            eyebrow="Structured Execution"
            title="From Idea to Sanction"
            highlight="— Execution Methodology"
            description="Our structured 11-stage advisory lifecycle designed to ensure seamless coordination with commercial lenders."
            align="left"
          />

          <div className="rounded-2xl border border-border bg-surface p-8 shadow-subtle space-y-6">
            <p className="text-sm text-text-secondary leading-relaxed max-w-3xl">
              We guide business promoters through an unbroken continuum: from conceptual techno-economic feasibility (TEV) and capex scheduling to 8-chapter DPR formulation, CMA data stress-testing, and bank credit committee liaison.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/#journey"
                className="inline-flex items-center gap-1.5 rounded-xl bg-navy px-5 py-2.5 text-xs font-bold text-white hover:bg-navy-light transition-all"
              >
                <span>Explore Interactive 11-Stage Roadmap</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/about/why-vs"
                className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-warm px-5 py-2.5 text-xs font-bold text-navy-dark hover:bg-white transition-all"
              >
                <span>Read Full Methodology Brief</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 8. LEADERSHIP PROFILES (CMS-READY PLACEHOLDERS) */}
        <section className="space-y-6">
          <SectionHeader
            eyebrow="Governance & Advisory Desk"
            title="Leadership Profiles"
            highlight="— CMS-Ready Architecture"
            description="Led by experienced project finance professionals, credit analysts, and compliance specialists. Structured placeholders configured for real data entry."
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {leadership.map((member) => (
              <div
                key={member.id}
                className="rounded-2xl border border-border bg-surface p-6 sm:p-7 shadow-subtle hover:border-navy-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-dark text-gold font-bold text-sm border border-gold/30">
                        {member.avatarPlaceholder}
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-navy-dark font-sans">
                          {member.name}
                        </h4>
                        <p className="text-xs font-bold text-gold-dark">
                          {member.role}
                        </p>
                      </div>
                    </div>
                    {member.isPlaceholder && (
                      <span className="rounded bg-navy-50 border border-navy-200 px-2 py-0.5 text-[10px] font-bold text-navy-700">
                        CMS Field
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-text-secondary leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="mt-4 pt-3 border-t border-border-subtle">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-navy-400 block mb-1.5">
                      Core Specialization:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {member.focusAreas.map((area) => (
                        <span
                          key={area}
                          className="rounded-md bg-warm px-2 py-0.5 text-[10px] font-medium text-navy-800 border border-border"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-border-subtle flex items-center justify-between text-xs text-navy-400">
                  <span>Department: {member.department}</span>
                  <Link href="/about/leadership" className="font-bold text-gold-dark hover:text-gold">
                    View Governance →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 9. INDUSTRY EXPERTISE */}
        <section className="space-y-6">
          <SectionHeader
            eyebrow="Sector Depth"
            title="Industry Expertise"
            highlight="— Tailored Debt Frameworks"
            description="Deep understanding of distinct asset lifecycles, operating margins, and government capital subsidies across key Indian industries."
            align="left"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {industryExpertise.map((ind) => (
              <div
                key={ind.name}
                className="rounded-xl border border-border bg-surface p-5 shadow-subtle space-y-1.5"
              >
                <h4 className="text-sm font-bold text-navy-dark font-sans">{ind.name}</h4>
                <p className="text-xs text-text-secondary leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 10. FINANCE + COMPLIANCE + TECHNOLOGY MODEL */}
        <section className="space-y-6">
          <SectionHeader
            eyebrow="Operating Architecture"
            title="Finance + Compliance + Technology"
            highlight="— The Triad Model"
            description="How our three interconnected capabilities guarantee bankable accuracy where single-track consultants fail."
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {triadModel.components.map((comp) => (
              <div
                key={comp.title}
                className="rounded-2xl border border-border bg-surface p-7 shadow-subtle hover:border-gold/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gold-dark block mb-1">
                    {comp.tagline}
                  </span>
                  <h3 className="text-lg font-bold text-navy-dark font-sans mb-2">
                    {comp.title}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed mb-4">
                    {comp.description}
                  </p>

                  <div className="pt-3 border-t border-border-subtle space-y-2">
                    {comp.deliverables.map((d) => (
                      <div key={d} className="flex items-start gap-2 text-xs text-navy-800">
                        <CheckCircle2 className="h-3.5 w-3.5 text-gold-dark shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-border-subtle">
                  <Link
                    href="/about/why-vs"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-gold-dark hover:text-gold"
                  >
                    <span>Explore Triad Advantage</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 11. ETHICS AND CONFIDENTIALITY */}
        <section className="space-y-6">
          <SectionHeader
            eyebrow="Fiduciary Standards"
            title="Ethics & Confidentiality"
            highlight="— Uncompromising Governance"
            description="Operating with strict adherence to bilateral NDAs, zero false guarantees, and transparent milestone fee structures."
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ethics.commitments.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-surface p-6 shadow-subtle space-y-2"
              >
                <div className="flex items-center gap-2 text-navy-dark font-bold text-sm">
                  <Lock className="h-4 w-4 text-gold-dark shrink-0" />
                  <span>{item.title}</span>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 12. CALL TO ACTION (CTA) */}
        <section className="rounded-3xl border border-gold/30 bg-gradient-to-br from-navy-900 via-navy-dark to-navy-950 p-8 sm:p-12 text-white shadow-institutional-lg text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-light">
              Begin Your Financial Journey
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-sans text-white uppercase">
              Partner with VS Project & Financial Advisory
            </h2>
            <p className="text-xs sm:text-sm text-warm-200 leading-relaxed">
              Whether you are planning a greenfield industrial setup, brownfield expansion, or working capital enhancement, our advisory desk is ready to evaluate your project.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/consultation"
              className="inline-flex items-center gap-2 rounded-xl bg-gold px-7 py-3.5 text-xs sm:text-sm font-bold text-navy-dark shadow-institutional hover:bg-gold-light active:scale-[0.99] transition-all"
            >
              <span>Schedule Advisory Briefing</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/finance-readiness"
              className="inline-flex items-center gap-2 rounded-xl border border-gold/40 bg-navy/60 px-7 py-3.5 text-xs sm:text-sm font-bold text-warm-100 hover:bg-navy active:scale-[0.99] transition-all"
            >
              <span>Check Finance Readiness</span>
            </Link>
          </div>
        </section>

        {/* Statutory Regulatory Disclaimer */}
        <div>
          <RegulatoryDisclaimerBanner />
        </div>
      </Container>
    </div>
  );
}
