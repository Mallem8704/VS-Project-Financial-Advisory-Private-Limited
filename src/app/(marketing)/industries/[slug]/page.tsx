import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getAllIndustries,
  getIndustryBySlug,
  IndustryItem,
} from "@/data/industries";
import { RegulatoryDisclaimerBanner } from "@/components/brand/RegulatoryDisclaimerBanner";
import {
  Sprout,
  HeartPulse,
  Hotel,
  Factory,
  Zap,
  Warehouse,
  Building2,
  GraduationCap,
  UtensilsCrossed,
  Sun,
  Wheat,
  Thermometer,
  Car,
  Gamepad2,
  Layers,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Clock,
  Briefcase,
  HelpCircle,
  ExternalLink,
  ShieldCheck,
  TrendingUp,
  Info,
  Calendar,
  UserCheck,
  BookOpen,
} from "lucide-react";

function getIndustryIcon(iconName: string, className: string = "h-5 w-5") {
  switch (iconName) {
    case "Sprout":
      return <Sprout className={className} />;
    case "HeartPulse":
      return <HeartPulse className={className} />;
    case "Hotel":
      return <Hotel className={className} />;
    case "Factory":
      return <Factory className={className} />;
    case "Zap":
      return <Zap className={className} />;
    case "Warehouse":
      return <Warehouse className={className} />;
    case "Building2":
      return <Building2 className={className} />;
    case "GraduationCap":
      return <GraduationCap className={className} />;
    case "UtensilsCrossed":
      return <UtensilsCrossed className={className} />;
    case "Sun":
      return <Sun className={className} />;
    case "Wheat":
      return <Wheat className={className} />;
    case "Thermometer":
      return <Thermometer className={className} />;
    case "Car":
      return <Car className={className} />;
    case "Gamepad2":
      return <Gamepad2 className={className} />;
    default:
      return <Layers className={className} />;
  }
}

interface IndustryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const industries = getAllIndustries();
  return industries.map((ind) => ({ slug: ind.slug }));
}

export async function generateMetadata({
  params,
}: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return {
      title: "Industry Vertical Not Found | VS Advisory",
      description: "The requested industry solutions blueprint could not be found.",
    };
  }

  return {
    title: industry.seo.metaTitle,
    description: industry.seo.metaDescription,
    keywords: industry.seo.keywords,
    openGraph: {
      title: `${industry.title} Project Finance Blueprint | VS Advisory`,
      description: industry.hero.subheadline,
      url: `https://vspfa.com/industries/${industry.slug}`,
      siteName: "VS Project & Financial Advisory Private Limited",
      type: "website",
      locale: "en_IN",
    },
    alternates: {
      canonical: `https://vspfa.com/industries/${industry.slug}`,
    },
  };
}

export default async function DynamicIndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  // JSON-LD Structured Data
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${industry.title} Project Finance & Advisory`,
    serviceType: "Financial & Business Advisory",
    provider: {
      "@type": "FinancialService",
      name: "VS Project & Financial Advisory Private Limited",
      url: "https://vspfa.com",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    description: industry.hero.subheadline,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: industry.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://vspfa.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Industries",
        item: "https://vspfa.com/industries",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: industry.shortTitle,
        item: `https://vspfa.com/industries/${industry.slug}`,
      },
    ],
  };

  return (
    <div className="bg-warm min-h-screen">
      {/* Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* =========================================================================
          SECTION 1: INDUSTRY HERO
      ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-950 via-navy-900 to-navy-800 pt-12 pb-16 text-white sm:pt-16 sm:pb-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gold/10 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-gold/80 mb-6 flex-wrap">
            <Link href="/" className="hover:text-gold transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 text-white/40" />
            <Link href="/industries" className="hover:text-gold transition-colors">
              Industries
            </Link>
            <ChevronRight className="h-3 w-3 text-white/40" />
            <span className="text-white/60">{industry.sector}</span>
            <ChevronRight className="h-3 w-3 text-white/40" />
            <span className="text-gold font-bold">{industry.shortTitle}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3.5 py-1 text-xs font-semibold text-gold">
                {getIndustryIcon(industry.iconName, "h-3.5 w-3.5 text-gold")}
                <span>{industry.badge}</span>
              </div>

              <h1 className="text-3xl font-serif font-bold text-white sm:text-5xl lg:text-6xl tracking-tight leading-tight">
                {industry.hero.headline}
              </h1>

              <p className="text-base sm:text-lg text-navy-100 max-w-3xl leading-relaxed">
                {industry.hero.subheadline}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="/book-consultation"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-6 py-3.5 text-sm font-bold text-navy-dark shadow-lg shadow-gold/20 hover:bg-gold-hover hover:scale-[1.02] transition-all"
                >
                  <span>Book Industry Consultation</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/finance-readiness"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/20 transition-all backdrop-blur-sm"
                >
                  <span>Check Finance Readiness</span>
                </Link>
              </div>
            </div>

            {/* Key Parameters Box */}
            <div className="lg:col-span-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-gold">
                Sector Appraisal Benchmarks
              </div>
              <div className="space-y-3">
                {industry.hero.keyParameters.map((param, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-1"
                  >
                    <div className="text-[11px] font-semibold uppercase text-navy-200">
                      {param.label}
                    </div>
                    <div className="text-sm sm:text-base font-bold text-white">
                      {param.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-[11px] text-navy-300 border-t border-white/10 flex items-center justify-between">
                <span>Reviewed: {industry.lastReviewed}</span>
                <span className="text-gold-light">Verified Sources</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-20">
        {/* =========================================================================
            SECTION 2: INDUSTRY OVERVIEW
        ========================================================================= */}
        <section className="rounded-3xl border border-navy-100 bg-white p-8 sm:p-12 shadow-sm space-y-6">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-dark">
              Sector Briefing
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-navy-dark tracking-tight">
              {industry.overview.title}
            </h2>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-navy-700 leading-relaxed max-w-4xl">
            {industry.overview.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: TYPICAL BUSINESS MODELS
        ========================================================================= */}
        <section className="space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-dark">
              Commercial Structures
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-navy-dark tracking-tight">
              Typical Business Models & Revenue Architecture
            </h2>
            <p className="text-sm sm:text-base text-navy-700 leading-relaxed">
              Standard commercial configurations evaluated by bank credit committees within this vertical.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industry.businessModels.map((model, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm hover:border-gold/40 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-navy text-white text-xs font-bold">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-navy-dark">
                    {model.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
                    {model.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-navy-50 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-navy-400 block">
                    Core Revenue Drivers:
                  </span>
                  <ul className="space-y-1 text-xs text-navy-700">
                    {model.revenueDrivers.map((driver, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0 mt-0.5" />
                        <span>{driver}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: PROJECT COMPONENTS (CAPEX HEADS)
        ========================================================================= */}
        <section className="rounded-3xl border border-navy-100 bg-navy-900 p-8 sm:p-12 text-white space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-gold">
              Capital Expenditure Architecture
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              Project Components & Capex Heads
            </h2>
            <p className="text-sm sm:text-base text-navy-200 leading-relaxed">
              Itemized capital expenditure heads required in the Detailed Project Report (DPR) for bank appraisal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industry.projectComponents.map((comp, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4 backdrop-blur-sm"
              >
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gold">
                    Component 0{idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-white">
                    {comp.head}
                  </h3>
                  <p className="text-xs text-navy-200">
                    {comp.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/10 space-y-2">
                  <span className="text-[10px] font-semibold uppercase text-navy-300 block">
                    Itemized Elements:
                  </span>
                  <ul className="space-y-1.5 text-xs text-navy-100">
                    {comp.typicalElements.map((el, eIdx) => (
                      <li key={eIdx} className="flex items-start gap-1.5">
                        <span className="text-gold mt-0.5">•</span>
                        <span>{el}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 5: TYPICAL COST HEADS
        ========================================================================= */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-dark">
              Operating Expenditure
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-navy-dark tracking-tight">
              Typical Operating Cost Heads
            </h2>
          </div>

          {industry.costHeads.map((cost, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-navy-100 bg-white p-6 sm:p-8 shadow-sm space-y-4"
            >
              <h3 className="text-base font-bold text-navy-dark">
                {cost.category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {cost.components.map((item, cIdx) => (
                  <div
                    key={cIdx}
                    className="flex items-start gap-2 bg-warm-50 p-3 rounded-xl border border-navy-50 text-xs text-navy-700"
                  >
                    <CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-navy-500 italic pt-2 border-t border-navy-50">
                {cost.note}
              </p>
            </div>
          ))}
        </section>

        {/* =========================================================================
            SECTION 6: INFRASTRUCTURE REQUIREMENTS
        ========================================================================= */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-dark">
              Physical & Technical Specifications
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-navy-dark tracking-tight">
              Site & Infrastructure Requirements
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industry.infrastructure.map((infra, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm space-y-2 hover:border-gold/40 transition-all"
              >
                <div className="text-xs font-bold uppercase tracking-wider text-gold-dark">
                  {infra.type}
                </div>
                <p className="text-xs sm:text-sm text-navy-700 leading-relaxed">
                  {infra.details}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 7: FINANCING STRUCTURE (INDICATIVE ONLY)
        ========================================================================= */}
        <section className="rounded-3xl border border-gold/40 bg-gradient-to-br from-gold/5 via-white to-warm-50 p-8 sm:p-12 shadow-sm space-y-6">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold-dark">
              <TrendingUp className="h-4 w-4" />
              <span>Lending Conventions</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-navy-dark tracking-tight">
              {industry.financingStructure.title}
            </h2>
            <p className="text-xs text-amber-800 bg-amber-50 p-3 rounded-xl border border-amber-200/80 leading-relaxed">
              <strong>Notice:</strong> {industry.financingStructure.disclaimer}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {industry.financingStructure.items.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm space-y-2"
              >
                <div className="text-xs font-bold uppercase tracking-wider text-navy-400">
                  {item.aspect}
                </div>
                <div className="text-sm sm:text-base font-bold text-navy-dark">
                  {item.indicativeConvention}
                </div>
                <p className="text-xs text-navy-600 leading-relaxed pt-1 border-t border-navy-50">
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 8: COMMON DOCUMENTATION
        ========================================================================= */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-dark">
              Due Diligence
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-navy-dark tracking-tight">
              Common Documentation & Bank Checklist
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industry.commonDocumentation.map((cat, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-navy-100 bg-white p-6 sm:p-7 shadow-sm space-y-4"
              >
                <h3 className="text-base font-bold text-navy-dark pb-2 border-b border-navy-50">
                  {cat.category}
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-navy-700">
                  {cat.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 9 & 10: DPR & CMA CONSIDERATIONS
        ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* DPR Considerations */}
          <section className="rounded-3xl border border-navy-100 bg-white p-6 sm:p-8 shadow-sm space-y-5">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-gold-dark">
                Report Architecture
              </span>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-navy-dark">
                Specific DPR Considerations
              </h2>
            </div>
            <div className="space-y-4">
              {industry.dprConsiderations.map((dpr, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-warm-50 p-4 border border-navy-50 space-y-1.5"
                >
                  <span className="text-xs font-bold text-navy-dark block">
                    {dpr.chapter}
                  </span>
                  <p className="text-xs text-navy-700 leading-relaxed">
                    {dpr.specificNote}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CMA Considerations */}
          <section className="rounded-3xl border border-navy-100 bg-white p-6 sm:p-8 shadow-sm space-y-5">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-gold-dark">
                Working Capital Modelling
              </span>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-navy-dark">
                Specific CMA Considerations
              </h2>
            </div>
            <div className="space-y-4">
              {industry.cmaConsiderations.map((cma, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-warm-50 p-4 border border-navy-50 space-y-1.5"
                >
                  <span className="text-xs font-bold text-navy-dark block">
                    {cma.aspect}
                  </span>
                  <p className="text-xs text-navy-700 leading-relaxed">
                    {cma.industryNote}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* =========================================================================
            SECTION 11: KEY FINANCIAL METRICS (SOURCED & DATED)
        ========================================================================= */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-dark">
              Financial Benchmarking
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-navy-dark tracking-tight">
              Key Financial Metrics (Indicative & Sourced)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {industry.financialMetrics.map((metric, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-navy-400">
                    Metric 0{idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-navy-dark">
                    {metric.metric}
                  </h3>
                  <div className="text-lg font-extrabold text-navy">
                    {metric.indicativeRange}
                  </div>
                  <p className="text-xs text-navy-600 leading-relaxed">
                    <strong>Basis:</strong> {metric.basis}
                  </p>
                </div>

                <div className="pt-3 border-t border-navy-50 text-[10px] text-navy-400 space-y-0.5">
                  <div>Source: {metric.source}</div>
                  <div>As of: {metric.asOf}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 12: POTENTIAL REGISTRATIONS / LICENSES
        ========================================================================= */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-dark">
              Statutory Clearances
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-navy-dark tracking-tight">
              Potential Registrations & Licenses
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industry.registrationsLicenses.map((reg, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                      reg.mandatory
                        ? "bg-red-50 text-red-700 border border-red-200"
                        : "bg-navy-50 text-navy-700 border border-navy-100"
                    }`}
                  >
                    {reg.mandatory ? "Mandatory" : "Conditional / Recommended"}
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-navy-dark">
                  {reg.name}
                </h3>
                <div className="text-xs text-gold-dark font-medium">
                  {reg.authority}
                </div>
                {reg.note && (
                  <p className="text-xs text-navy-600 leading-relaxed pt-1 border-t border-navy-50">
                    {reg.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 13: GOVERNMENT SCHEMES (VERIFIED REFERENCES ONLY - ZERO HARDCODED QUANTUM)
        ========================================================================= */}
        {industry.governmentSchemes.length > 0 && (
          <section className="space-y-6">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold-dark">
                <ShieldCheck className="h-4 w-4" />
                <span>Verified Policy References</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-navy-dark tracking-tight">
                Applicable Government Schemes & Support Programs
              </h2>
              <p className="text-xs text-amber-800 bg-amber-50 p-3 rounded-xl border border-amber-200/80 leading-relaxed">
                <strong>Policy Compliance Notice:</strong> Per regulatory standards, subsidy percentages, interest subvention quantum, and specific financial figures are not hardcoded. All benefits are subject to official scheme notifications and nodal agency appraisal.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {industry.governmentSchemes.map((scheme, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-navy-100 bg-white p-6 sm:p-7 shadow-sm space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-gold/15 px-2.5 py-0.5 text-[10px] font-bold text-gold-dark">
                        {scheme.schemeType}
                      </span>
                      <span className="text-[10px] text-navy-400">
                        Verified: {scheme.lastVerified}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-navy-dark">
                      {scheme.schemeName}
                    </h3>

                    <div className="text-xs text-navy-600">
                      <strong>Administered by:</strong> {scheme.administeredBy}
                    </div>

                    <p className="text-xs text-navy-700 leading-relaxed">
                      <strong>Applicability:</strong> {scheme.applicability}
                    </p>

                    <div className="text-[11px] text-navy-500 italic pt-2 border-t border-navy-50">
                      {scheme.disclaimer}
                    </div>
                  </div>

                  {scheme.sourceUrl && (
                    <div className="pt-3 border-t border-navy-50">
                      <a
                        href={scheme.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-navy hover:text-gold transition-colors"
                      >
                        <span>Official Portal Reference</span>
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* =========================================================================
            SECTION 14: POTENTIAL RISKS
        ========================================================================= */}
        <section className="rounded-3xl border border-amber-200/80 bg-gradient-to-br from-amber-50/70 via-white to-warm p-8 sm:p-12 shadow-sm space-y-6">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800">
              <AlertTriangle className="h-4 w-4 text-amber-600" />
              <span>Risk Assessment</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-navy-dark tracking-tight">
              Key Sector Risks & Mitigation Strategies
            </h2>
            <p className="text-sm text-navy-700 leading-relaxed">
              Critical risks scrutinized by bank credit committees and how VS assists in structuring mitigants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {industry.potentialRisks.map((risk, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-amber-200/60 bg-white p-6 shadow-sm space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-md bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-800 uppercase tracking-wider">
                    {risk.category} Risk
                  </span>
                </div>
                <h3 className="text-base font-bold text-navy-dark">
                  {risk.title}
                </h3>
                <p className="text-xs sm:text-sm text-navy-700 leading-relaxed">
                  {risk.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 15: VS ADVISORY PROCESS
        ========================================================================= */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-dark">
              Structured Engagement
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-navy-dark tracking-tight">
              VS Industry Advisory Roadmap
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {industry.vsAdvisoryProcess.map((step) => (
              <div
                key={step.step}
                className="rounded-2xl border border-navy-100 bg-white p-5 shadow-sm space-y-2 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-navy text-white text-xs font-bold">
                    0{step.step}
                  </span>
                  <h3 className="text-sm font-bold text-navy-dark">
                    {step.title}
                  </h3>
                  <p className="text-xs text-navy-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 16: FAQ
        ========================================================================= */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-dark">
              Expert Insights
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-navy-dark tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {industry.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm space-y-2"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="h-5 w-5 text-gold-dark shrink-0 mt-0.5" />
                  <h3 className="text-base font-bold text-navy-dark">
                    {faq.question}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-navy-700 leading-relaxed pl-8">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 17: CONSULTATION CTA + AUDIT TRAIL + REGULATORY DISCLAIMER
        ========================================================================= */}
        <section className="rounded-3xl border border-gold/30 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-800 p-8 sm:p-14 text-white shadow-institutional">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
                <Briefcase className="h-3.5 w-3.5" />
                <span>Sector Desk Engagement</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight">
                Setting Up or Expanding in {industry.shortTitle}?
              </h2>
              <p className="text-sm sm:text-base text-navy-200 max-w-2xl leading-relaxed">
                Connect with our specialized sector analysts to evaluate project feasibility, prepare bankable DPR dossiers, or structure working capital lines.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <Link
                href="/book-consultation"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-6 py-3.5 text-sm font-bold text-navy-dark hover:bg-gold-hover transition-all text-center"
              >
                <span>Book Sector Advisory</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/finance-readiness"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/20 transition-all text-center"
              >
                <span>Check Finance Readiness</span>
              </Link>
            </div>
          </div>
        </section>

        {/* CMS Audit Trail Information Box */}
        <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm space-y-3 text-xs text-navy-600">
          <div className="flex items-center justify-between flex-wrap gap-2 pb-2 border-b border-navy-50">
            <div className="flex items-center gap-2 text-navy-900 font-bold text-[11px] uppercase tracking-wider">
              <BookOpen className="h-4 w-4 text-gold-dark" />
              <span>CMS Audit Trail & Reference Log</span>
            </div>
            <div className="flex items-center gap-4 text-navy-500">
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                <span>Last Reviewed: {industry.lastReviewed}</span>
              </span>
              <span className="flex items-center gap-1">
                <UserCheck className="h-3.5 w-3.5" />
                <span>{industry.reviewedBy}</span>
              </span>
            </div>
          </div>

          <div className="space-y-1">
            <span className="font-semibold text-navy-800">
              Primary Source References:
            </span>
            <ul className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-navy-500 pt-1">
              {industry.sourceReferences.map((ref, rIdx) => (
                <li key={rIdx} className="flex items-center gap-1">
                  <span>•</span>
                  {ref.url ? (
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-navy hover:text-gold underline"
                    >
                      {ref.title}
                    </a>
                  ) : (
                    <span>{ref.title}</span>
                  )}
                  <span className="text-[10px] text-navy-400">({ref.type})</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Statutory Regulatory Disclaimer Banner */}
        <section className="pt-2">
          <RegulatoryDisclaimerBanner type="warning" />
        </section>
      </div>
    </div>
  );
}
