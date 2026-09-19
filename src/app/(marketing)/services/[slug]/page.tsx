import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getAllServices,
  getServiceBySlug,
  getRelatedServices,
  ServiceItem,
} from "@/data/services";
import { RegulatoryDisclaimerBanner } from "@/components/brand/RegulatoryDisclaimerBanner";
import {
  Compass,
  Landmark,
  FileSpreadsheet,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Building2,
  Cpu,
  Calculator,
  PieChart,
  BarChart3,
  Sliders,
  FileCheck,
  Award,
  UserCheck,
  TrendingDown,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Clock,
  Briefcase,
  HelpCircle,
  Layers,
  ChevronRight,
} from "lucide-react";

// Icon mapping helper
function getServiceIcon(iconName: string, className: string = "h-5 w-5") {
  switch (iconName) {
    case "Compass":
      return <Compass className={className} />;
    case "Landmark":
      return <Landmark className={className} />;
    case "FileSpreadsheet":
      return <FileSpreadsheet className={className} />;
    case "ShieldCheck":
      return <ShieldCheck className={className} />;
    case "Sparkles":
      return <Sparkles className={className} />;
    case "TrendingUp":
      return <TrendingUp className={className} />;
    case "Building2":
      return <Building2 className={className} />;
    case "Cpu":
      return <Cpu className={className} />;
    case "Calculator":
      return <Calculator className={className} />;
    case "PieChart":
      return <PieChart className={className} />;
    case "BarChart3":
      return <BarChart3 className={className} />;
    case "Sliders":
      return <Sliders className={className} />;
    case "FileCheck":
      return <FileCheck className={className} />;
    case "Award":
      return <Award className={className} />;
    case "UserCheck":
      return <UserCheck className={className} />;
    case "TrendingDown":
      return <TrendingDown className={className} />;
    default:
      return <FileText className={className} />;
  }
}

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const services = getAllServices();
  const paramsList: Array<{ slug: string }> = [];

  services.forEach((s) => {
    paramsList.push({ slug: s.slug });
    if (s.aliases) {
      s.aliases.forEach((alias) => {
        paramsList.push({ slug: alias });
      });
    }
  });

  return paramsList;
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | VS Advisory",
      description: "The requested advisory service could not be located.",
    };
  }

  return {
    title: `${service.title} | VS Project & Financial Advisory`,
    description: service.summary,
    keywords: service.seo.keywords,
    openGraph: {
      title: `${service.title} | VS Advisory`,
      description: service.summary,
      url: `https://vspfa.com/services/${service.slug}`,
      siteName: "VS Project & Financial Advisory Private Limited",
      type: "website",
      locale: "en_IN",
    },
    alternates: {
      canonical: `https://vspfa.com/services/${service.slug}`,
    },
  };
}

export default async function DynamicServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = getRelatedServices(service.relatedServiceSlugs);

  // Structured Data (JSON-LD)
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.categoryName,
    provider: {
      "@type": "FinancialService",
      name: "VS Project & Financial Advisory Private Limited",
      url: "https://vspfa.com",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    description: service.summary,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
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
        name: "Services",
        item: "https://vspfa.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.shortTitle,
        item: `https://vspfa.com/services/${service.slug}`,
      },
    ],
  };

  return (
    <div className="bg-warm min-h-screen">
      {/* Inject Structured Data */}
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
          SECTION 1: HERO
      ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-950 via-navy-900 to-navy-800 pt-12 pb-16 text-white sm:pt-16 sm:pb-24">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gold/10 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-gold/80 mb-6 flex-wrap">
            <Link href="/" className="hover:text-gold transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 text-white/40" />
            <Link href="/services" className="hover:text-gold transition-colors">
              Services
            </Link>
            <ChevronRight className="h-3 w-3 text-white/40" />
            <span className="text-white/60">{service.categoryName}</span>
            <ChevronRight className="h-3 w-3 text-white/40" />
            <span className="text-gold font-bold">{service.shortTitle}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3.5 py-1 text-xs font-semibold text-gold">
                {getServiceIcon(service.iconName, "h-3.5 w-3.5 text-gold")}
                <span>{service.badge}</span>
              </div>

              <h1 className="text-3xl font-serif font-bold text-white sm:text-5xl lg:text-6xl tracking-tight leading-tight">
                {service.hero.headline}
              </h1>

              <p className="text-base sm:text-lg text-navy-100 max-w-3xl leading-relaxed">
                {service.hero.subheadline}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="/book-consultation"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-6 py-3.5 text-sm font-bold text-navy-dark shadow-lg shadow-gold/20 hover:bg-gold-hover hover:scale-[1.02] transition-all"
                >
                  <span>Book Advisory Consultation</span>
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

            {/* Hero Stats */}
            <div className="lg:col-span-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-gold">
                Institutional Appraisal Metrics
              </div>
              <div className="space-y-3">
                {service.hero.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-1"
                  >
                    <div className="text-[11px] font-semibold uppercase text-navy-200">
                      {stat.label}
                    </div>
                    <div className="text-base sm:text-lg font-bold text-white">
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-20">
        {/* =========================================================================
            SECTION 2: PROBLEM
        ========================================================================= */}
        <section className="rounded-3xl border border-amber-200/80 bg-gradient-to-br from-amber-50/70 via-white to-warm p-8 sm:p-12 shadow-sm">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800">
              <AlertTriangle className="h-4 w-4 text-amber-600" />
              <span>The Industry Challenge</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-navy-dark tracking-tight">
              {service.problem.title}
            </h2>
            <p className="text-sm sm:text-base text-navy-700 leading-relaxed">
              {service.problem.description}
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.problem.painPoints.map((pain, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-xl border border-amber-200/60 bg-white p-4 shadow-sm"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700 text-xs font-bold mt-0.5">
                  !
                </div>
                <p className="text-xs sm:text-sm text-navy-800 leading-relaxed font-medium">
                  {pain}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: WHO THIS SERVICE IS FOR
        ========================================================================= */}
        <section className="space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-dark">
              Eligibility & Profile Matching
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-navy-dark tracking-tight">
              {service.targetAudience.title}
            </h2>
            <p className="text-sm sm:text-base text-navy-700 leading-relaxed">
              {service.targetAudience.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.targetAudience.profiles.map((profile, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm hover:shadow-institutional hover:border-gold/40 transition-all space-y-3"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-50 text-navy font-bold text-sm">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-navy-dark">
                  {profile.title}
                </h3>
                <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
                  {profile.criteria}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: WHAT VS PROVIDES
        ========================================================================= */}
        <section className="space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-dark">
              Advisory Architecture & Scope
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-navy-dark tracking-tight">
              {service.whatVsProvides.title}
            </h2>
            <p className="text-sm sm:text-base text-navy-700 leading-relaxed">
              {service.whatVsProvides.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.whatVsProvides.features.map((feature, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-navy-100 bg-white p-6 sm:p-8 shadow-sm hover:shadow-institutional hover:border-gold/40 transition-all space-y-3"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gold/15 text-gold-dark">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-navy-dark">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-navy-700 leading-relaxed pl-11">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 5: PROCESS
        ========================================================================= */}
        <section className="space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-dark">
              Execution Roadmap
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-navy-dark tracking-tight">
              {service.process.title}
            </h2>
            <p className="text-sm sm:text-base text-navy-700 leading-relaxed">
              A disciplined, milestone-driven execution process ensuring every technical, financial, and statutory parameter is banker-ready.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {service.process.steps.map((step) => (
              <div
                key={step.stepNumber}
                className="relative rounded-2xl border border-navy-100 bg-white p-6 shadow-sm space-y-3 hover:border-gold/40 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-navy text-white text-xs font-bold">
                      {step.stepNumber}
                    </span>
                    {step.duration && (
                      <span className="inline-flex items-center gap-1 rounded-md bg-navy-50 px-2 py-0.5 text-[11px] font-semibold text-navy-700">
                        <Clock className="h-3 w-3 text-gold-dark" />
                        <span>{step.duration}</span>
                      </span>
                    )}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-navy-dark">
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
            SECTION 6: INFORMATION/DOCUMENTS REQUIRED
        ========================================================================= */}
        <section className="rounded-3xl border border-navy-100 bg-navy-900 p-8 sm:p-12 text-white space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-gold">
              Data & Document Checklist
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              {service.documentsRequired.title}
            </h2>
            <p className="text-sm sm:text-base text-navy-200 leading-relaxed">
              To initiate your advisory engagement efficiently, our desk requires verified primary records. All documents are handled under strict non-disclosure terms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.documentsRequired.categories.map((cat, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4 backdrop-blur-sm"
              >
                <h3 className="text-sm sm:text-base font-bold text-gold uppercase tracking-wider">
                  {cat.category}
                </h3>
                <ul className="space-y-3">
                  {cat.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-navy-100"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-gold mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 7: DELIVERABLES
        ========================================================================= */}
        <section className="space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-dark">
              Tangible Assets
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-navy-dark tracking-tight">
              {service.deliverables.title}
            </h2>
            <p className="text-sm sm:text-base text-navy-700 leading-relaxed">
              Every deliverable is crafted to institutional banking standards, complete with dynamic calculation sheets, executive briefs, and certified dossiers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.deliverables.items.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm hover:shadow-institutional hover:border-gold/40 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-1.5 rounded-md bg-gold/15 px-2.5 py-1 text-[11px] font-bold text-gold-dark">
                    <FileText className="h-3 w-3" />
                    <span>{item.format}</span>
                  </div>
                  <h3 className="text-base font-bold text-navy-dark">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 8: EXPECTED WORKFLOW
        ========================================================================= */}
        <section className="space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-dark">
              Interaction & Checkpoints
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-navy-dark tracking-tight">
              {service.workflow.title}
            </h2>
            <p className="text-sm sm:text-base text-navy-700 leading-relaxed">
              Transparent, structured progression showing actions and concrete outcomes at every stage.
            </p>
          </div>

          <div className="space-y-4">
            {service.workflow.stages.map((stage, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm hover:border-gold/40 transition-all"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-4 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gold-dark">
                      Workflow Milestone 0{idx + 1}
                    </span>
                    <h3 className="text-base font-bold text-navy-dark">
                      {stage.stage}
                    </h3>
                  </div>
                  <div className="md:col-span-4 text-xs sm:text-sm text-navy-700">
                    <span className="font-semibold text-navy-900 block mb-0.5">
                      Action Taken:
                    </span>
                    {stage.action}
                  </div>
                  <div className="md:col-span-4 text-xs sm:text-sm text-navy-700">
                    <span className="font-semibold text-navy-900 block mb-0.5">
                      Target Outcome:
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-navy font-semibold">
                      <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                      {stage.outcome}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 9: FAQ
        ========================================================================= */}
        <section className="space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-dark">
              Expert Clarifications
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-navy-dark tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-navy-700 leading-relaxed">
              Institutional insights regarding appraisal standards, banking requirements, and advisory methodology.
            </p>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, idx) => (
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
            SECTION 10: RELATED SERVICES
        ========================================================================= */}
        {relatedServices.length > 0 && (
          <section className="space-y-8">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-gold-dark">
                Complementary Advisory Solutions
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-navy-dark tracking-tight">
                Related Services
              </h2>
              <p className="text-sm sm:text-base text-navy-700 leading-relaxed">
                Advisory capabilities frequently engaged alongside {service.shortTitle} for comprehensive credit and statutory readiness.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {relatedServices.map((related) => (
                <div
                  key={related.id}
                  className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm hover:shadow-institutional hover:border-gold/40 transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-50 text-navy">
                      {getServiceIcon(related.iconName, "h-5 w-5 text-navy")}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gold-dark">
                      {related.categoryName}
                    </span>
                    <h3 className="text-base font-bold text-navy-dark">
                      {related.shortTitle}
                    </h3>
                    <p className="text-xs text-navy-600 line-clamp-3 leading-relaxed">
                      {related.summary}
                    </p>
                  </div>
                  <Link
                    href={`/services/${related.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-navy hover:text-gold transition-colors pt-2 border-t border-navy-50"
                  >
                    <span>View Service</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* =========================================================================
            SECTION 11: CONSULTATION CTA
        ========================================================================= */}
        <section className="rounded-3xl border border-gold/30 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-800 p-8 sm:p-14 text-white shadow-institutional">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Ready for Institutional Advisory?</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight">
                Engage With Our Project Finance & Advisory Desk
              </h2>
              <p className="text-sm sm:text-base text-navy-200 max-w-2xl leading-relaxed">
                Connect with our senior financial analysts and advisory professionals to structure your credit proposal, review project feasibility, or prepare bankable documentation.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <Link
                href="/book-consultation"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-6 py-3.5 text-sm font-bold text-navy-dark hover:bg-gold-hover transition-all text-center"
              >
                <span>Book Advisory Session</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/finance-readiness"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/20 transition-all text-center"
              >
                <span>Take Readiness Assessment</span>
              </Link>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 12: REGULATORY DISCLAIMER
        ========================================================================= */}
        <section className="pt-4">
          <RegulatoryDisclaimerBanner
            type="warning"
            customText={service.disclaimer}
          />
        </section>
      </div>
    </div>
  );
}
