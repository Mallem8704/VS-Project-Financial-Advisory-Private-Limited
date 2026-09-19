"use client";

import React, { useState } from "react";
import {
  Lightbulb,
  Search,
  Building,
  ShieldCheck,
  Target,
  FileText,
  FileSpreadsheet,
  TrendingUp,
  Award,
  Compass,
  FileCheck,
  Send,
  HelpCircle,
  CheckCircle2,
  Banknote,
  Rocket,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { JOURNEY_STAGES, JourneyStage } from "@/data/journey-stages";

export function FourteenStageJourney() {
  const [selectedStage, setSelectedStage] = useState<JourneyStage>(JOURNEY_STAGES[5]); // Default to DPR

  return (
    <section id="journey" className="relative py-20 bg-warm-100/60 border-y border-navy-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3.5 py-1 text-xs font-semibold text-gold-dark">
            <Rocket className="h-3.5 w-3.5" />
            <span>The Complete 14-Stage Advisory Pathway</span>
          </div>
          <h2 className="text-3xl font-serif font-bold text-navy-dark sm:text-4xl tracking-tight">
            From Business Idea to Bank Sanction
          </h2>
          <p className="text-sm text-navy-700 leading-relaxed">
            Every business loan journey requires structured navigation. Explore each step of our end-to-end framework designed to ensure bankability, regulatory compliance, and transparent execution.
          </p>
        </div>

        {/* 14 Stages Horizontal Interactive Scroller */}
        <div className="mt-12 overflow-x-auto pb-4 pt-2 scrollbar-thin">
          <div className="flex gap-2.5 min-w-[1200px] border-b border-navy-200/70 pb-4">
            {JOURNEY_STAGES.map((stage) => {
              const Icon = stage.icon;
              const isSelected = selectedStage.id === stage.id;
              return (
                <button
                  key={stage.id}
                  onClick={() => setSelectedStage(stage)}
                  className={`flex flex-1 flex-col items-center p-3 rounded-lg border text-center transition-all duration-200 ${
                    isSelected
                      ? "border-gold bg-navy text-white shadow-institutional"
                      : "border-navy-100 bg-white text-navy-800 hover:border-gold/50 hover:bg-warm-50"
                  }`}
                >
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full mb-1.5 text-xs font-bold ${
                      isSelected
                        ? "bg-gold text-white"
                        : "bg-navy-50 text-navy-700"
                    }`}
                  >
                    {stage.id}
                  </div>
                  <span className="text-[11px] font-bold line-clamp-1">
                    {stage.title}
                  </span>
                  <span
                    className={`text-[9px] mt-0.5 uppercase tracking-wider ${
                      isSelected ? "text-gold-light" : "text-navy-500"
                    }`}
                  >
                    {stage.stageKey}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Detail Panel */}
        <div className="mt-8 rounded-2xl border border-navy-100 bg-white p-6 sm:p-8 shadow-institutional">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Header */}
            <div className="lg:col-span-4 space-y-4 border-b lg:border-b-0 lg:border-r border-navy-100 pb-6 lg:pb-0 lg:pr-8">
              <div className="inline-block rounded-md bg-navy-50 px-2.5 py-1 text-[11px] font-semibold text-navy-700">
                {selectedStage.phase}
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold-dark">
                  <selectedStage.icon className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-gold uppercase tracking-wider">
                    Stage {selectedStage.id} of 14
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-navy-dark">
                    {selectedStage.title}
                  </h3>
                </div>
              </div>
              <p className="text-xs text-navy-700 leading-relaxed">
                {selectedStage.summary}
              </p>
              <div className="pt-2">
                <Link
                  href="/book-consultation"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-gold-dark hover:text-navy transition-colors"
                >
                  <span>Inquire about this specific stage</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Detailed Columns */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Deliverables */}
              <div className="space-y-2.5 rounded-xl border border-navy-100 bg-warm-50/50 p-4">
                <div className="flex items-center gap-2 text-xs font-bold text-navy-900 uppercase tracking-wider">
                  <FileCheck className="h-4 w-4 text-gold" />
                  <span>Key Deliverables</span>
                </div>
                <ul className="space-y-2 text-xs text-navy-700">
                  {selectedStage.keyDeliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <ChevronRight className="h-3.5 w-3.5 text-gold shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* VS Advisor Role */}
              <div className="space-y-2.5 rounded-xl border border-navy-100 bg-warm-50/50 p-4">
                <div className="flex items-center gap-2 text-xs font-bold text-navy-900 uppercase tracking-wider">
                  <ShieldCheck className="h-4 w-4 text-navy-700" />
                  <span>VS Advisory Role</span>
                </div>
                <p className="text-xs text-navy-700 leading-relaxed">
                  {selectedStage.vsAdvisorRole}
                </p>
              </div>

              {/* Client Action */}
              <div className="space-y-2.5 rounded-xl border border-navy-100 bg-warm-50/50 p-4">
                <div className="flex items-center gap-2 text-xs font-bold text-navy-900 uppercase tracking-wider">
                  <Award className="h-4 w-4 text-gold-dark" />
                  <span>What You Provide</span>
                </div>
                <p className="text-xs text-navy-700 leading-relaxed">
                  {selectedStage.clientAction}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
