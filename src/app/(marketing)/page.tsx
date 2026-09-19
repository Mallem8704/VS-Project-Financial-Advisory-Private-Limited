import React from "react";
import { Hero } from "@/components/marketing/Hero";
import { OnePlatformSection } from "@/components/marketing/OnePlatformSection";
import { IdeaToSanctionSection } from "@/components/marketing/IdeaToSanctionSection";
import { FinanceReadinessFeature } from "@/components/marketing/FinanceReadinessFeature";
import { WhatVSHelpsPrepare } from "@/components/marketing/WhatVSHelpsPrepare";
import { IndustrySolutionsSection } from "@/components/marketing/IndustrySolutionsSection";
import { VSIntelligenceSection } from "@/components/marketing/VSIntelligenceSection";
import { HowWeWorkSection } from "@/components/marketing/HowWeWorkSection";
import { KnowledgePreviewSection } from "@/components/marketing/KnowledgePreviewSection";
import { ConsultationCTASection } from "@/components/marketing/ConsultationCTASection";
import { FinalInstitutionalCTA } from "@/components/marketing/FinalInstitutionalCTA";

// Visual Gold Journey Line Connector
function JourneyLineConnector({ label }: { label: string }) {
  return (
    <div className="relative flex flex-col items-center justify-center py-2 bg-transparent pointer-events-none select-none z-10">
      <div className="h-8 w-px bg-gradient-to-b from-gold/10 via-gold/50 to-gold/20" />
      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-navy-dark border border-gold/40 text-[9px] font-bold tracking-widest uppercase text-gold-light shadow-sm">
        <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
        <span>{label}</span>
      </div>
      <div className="h-8 w-px bg-gradient-to-b from-gold/20 via-gold/50 to-gold/10" />
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="relative flex flex-col min-h-screen bg-background text-text-primary overflow-hidden">
      {/* Background Continuous Journey Watermark (Desktop Subtle Vertical Line) */}
      <div className="hidden 2xl:block absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent pointer-events-none" />
      <div className="hidden 2xl:block absolute right-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent pointer-events-none" />

      {/* Hero Section */}
      <Hero />

      {/* SECTION 1: One Platform. Your Complete Business Journey */}
      <JourneyLineConnector label="Integrated Platform" />
      <OnePlatformSection />

      {/* SECTION 2: From Idea to Sanction (Interactive Timeline) */}
      <JourneyLineConnector label="11-Stage Roadmap" />
      <IdeaToSanctionSection />

      {/* SECTION 3: Finance Readiness Score (Feature Section) */}
      <JourneyLineConnector label="Credit Diagnostics" />
      <FinanceReadinessFeature />

      {/* SECTION 4: What VS Helps You Prepare (7 Deliverables) */}
      <JourneyLineConnector label="Bankable Documentation" />
      <WhatVSHelpsPrepare />

      {/* SECTION 5: Industry Solutions (8 Selected Sectors) */}
      <JourneyLineConnector label="Sector Blueprints" />
      <IndustrySolutionsSection />

      {/* SECTION 6: VS Intelligence (Financial Tools Suite) */}
      <JourneyLineConnector label="Pre-Application Intelligence" />
      <VSIntelligenceSection />

      {/* SECTION 7: How We Work (6 Execution Steps) */}
      <JourneyLineConnector label="Execution Methodology" />
      <HowWeWorkSection />

      {/* SECTION 8: Knowledge Centre Preview */}
      <JourneyLineConnector label="Regulatory Intelligence" />
      <KnowledgePreviewSection />

      {/* SECTION 9: Consultation CTA */}
      <JourneyLineConnector label="Advisory Advisory Briefing" />
      <ConsultationCTASection />

      {/* SECTION 10: Final Institutional CTA */}
      <JourneyLineConnector label="Financial Foundation" />
      <FinalInstitutionalCTA />
    </div>
  );
}
