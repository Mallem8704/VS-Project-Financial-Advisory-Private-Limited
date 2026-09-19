"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  INDUSTRIES,
  INDUSTRY_SECTORS,
  IndustryItem,
  IndustrySector,
} from "@/data/industries";
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
  Search,
  Filter,
  ArrowRight,
  ShieldCheck,
  FileText,
  Clock,
  TrendingUp,
  CheckCircle2,
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

export function IndustriesDirectory() {
  const [selectedSector, setSelectedSector] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredIndustries = useMemo(() => {
    return INDUSTRIES.filter((ind) => {
      const matchesSector =
        selectedSector === "all" || ind.sectorId === selectedSector;

      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesSector;

      const matchesSearch =
        ind.title.toLowerCase().includes(query) ||
        ind.shortTitle.toLowerCase().includes(query) ||
        ind.sector.toLowerCase().includes(query) ||
        ind.hero.subheadline.toLowerCase().includes(query) ||
        ind.seo.keywords.some((k) => k.toLowerCase().includes(query)) ||
        ind.businessModels.some((b) => b.title.toLowerCase().includes(query));

      return matchesSector && matchesSearch;
    });
  }, [selectedSector, searchQuery]);

  return (
    <div className="space-y-12">
      {/* Search & Sector Navigation Controls */}
      <div className="space-y-6">
        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto sm:mx-0">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-navy-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by industry name, sector, or keyword (e.g., Rice, Solar, Hospital, Cold Storage)..."
            className="w-full rounded-2xl border border-navy-200 bg-white pl-12 pr-4 py-3.5 text-sm text-navy-dark placeholder:text-navy-400 shadow-sm focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-navy-400 hover:text-navy-700"
            >
              Clear
            </button>
          )}
        </div>

        {/* Sector Navigation Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setSelectedSector("all")}
            className={`shrink-0 rounded-xl px-4 py-2.5 text-xs font-bold transition-all ${
              selectedSector === "all"
                ? "bg-navy text-white shadow-md shadow-navy/20"
                : "border border-navy-200 bg-white text-navy-700 hover:border-gold hover:text-navy-dark"
            }`}
          >
            All Verticals ({INDUSTRIES.length})
          </button>

          {INDUSTRY_SECTORS.map((sec) => {
            const isSelected = selectedSector === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => setSelectedSector(sec.id)}
                className={`shrink-0 inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all ${
                  isSelected
                    ? "bg-navy text-white shadow-md shadow-navy/20"
                    : "border border-navy-200 bg-white text-navy-700 hover:border-gold hover:text-navy-dark"
                }`}
              >
                {getIndustryIcon(
                  sec.iconName,
                  `h-3.5 w-3.5 ${isSelected ? "text-gold" : "text-navy-500"}`
                )}
                <span>{sec.name}</span>
                <span
                  className={`rounded-full px-1.5 py-0.2 text-[10px] ${
                    isSelected
                      ? "bg-white/20 text-white"
                      : "bg-navy-50 text-navy-600"
                  }`}
                >
                  {sec.industrySlugs.length}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Filter Indicator */}
      {(selectedSector !== "all" || searchQuery) && (
        <div className="flex items-center justify-between rounded-xl bg-navy-50/80 px-4 py-3 text-xs text-navy-800 border border-navy-100">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-gold-dark" />
            <span>
              Showing <strong>{filteredIndustries.length}</strong> of{" "}
              {INDUSTRIES.length} industry verticals
              {selectedSector !== "all" && (
                <>
                  {" "}
                  in{" "}
                  <strong>
                    {
                      INDUSTRY_SECTORS.find((s) => s.id === selectedSector)
                        ?.name
                    }
                  </strong>
                </>
              )}
              {searchQuery && (
                <>
                  {" "}
                  matching &quot;<strong>{searchQuery}</strong>&quot;
                </>
              )}
            </span>
          </div>
          <button
            onClick={() => {
              setSelectedSector("all");
              setSearchQuery("");
            }}
            className="text-xs font-bold text-gold-dark hover:underline"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Grid of Industries */}
      {filteredIndustries.length === 0 ? (
        <div className="rounded-3xl border border-navy-100 bg-white p-12 text-center space-y-4">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-50 text-navy">
            <Search className="h-7 w-7 text-navy-400" />
          </div>
          <h3 className="text-lg font-bold text-navy-dark">
            No matching industry verticals found
          </h3>
          <p className="text-xs sm:text-sm text-navy-600 max-w-md mx-auto">
            We could not locate an industry vertical matching your query. Try searching for broader terms or select a sector above.
          </p>
          <button
            onClick={() => {
              setSelectedSector("all");
              setSearchQuery("");
            }}
            className="inline-flex items-center gap-2 rounded-xl bg-navy px-5 py-2.5 text-xs font-bold text-white hover:bg-navy-light transition-all"
          >
            Clear Search & Show All
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIndustries.map((ind, idx) => (
            <div
              key={ind.id}
              className="rounded-3xl border border-navy-100 bg-white p-6 sm:p-7 shadow-institutional hover:border-gold/50 transition-all flex flex-col justify-between space-y-5 group"
            >
              <div className="space-y-4">
                {/* Header Badge & Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-navy-50 text-navy group-hover:bg-navy group-hover:text-gold transition-colors">
                    {getIndustryIcon(ind.iconName, "h-5 w-5")}
                  </div>
                  <span className="rounded-full border border-gold/40 bg-gold/10 px-2.5 py-0.5 text-[10px] font-bold text-gold-dark">
                    {ind.badge}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-navy-400 block mb-1">
                    {ind.sector}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-navy-dark group-hover:text-navy transition-colors">
                    <Link href={`/industries/${ind.slug}`}>
                      {ind.shortTitle}
                    </Link>
                  </h3>
                </div>

                <p className="text-xs text-navy-600 leading-relaxed line-clamp-3">
                  {ind.hero.subheadline}
                </p>

                {/* Key Parameters */}
                <div className="space-y-2 pt-2 border-t border-navy-50">
                  {ind.hero.keyParameters.slice(0, 2).map((param, pIdx) => (
                    <div
                      key={pIdx}
                      className="text-[11px] text-navy-700 flex items-start gap-1.5"
                    >
                      <span className="font-semibold text-navy-900 shrink-0">
                        {param.label}:
                      </span>
                      <span className="text-navy-600 truncate">
                        {param.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-3 border-t border-navy-100/60 flex items-center justify-between text-xs">
                <span className="text-[11px] text-navy-400 font-medium">
                  {ind.businessModels.length} Models &bull; {ind.potentialRisks.length} Risk Factors
                </span>
                <Link
                  href={`/industries/${ind.slug}`}
                  className="inline-flex items-center gap-1.5 font-bold text-navy group-hover:text-gold transition-colors text-xs"
                >
                  <span>Explore Blueprint</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
