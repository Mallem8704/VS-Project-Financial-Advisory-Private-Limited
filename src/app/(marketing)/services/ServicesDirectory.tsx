"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  SERVICE_CATEGORIES,
  SERVICES,
  ServiceItem,
  ServiceCategory,
} from "@/data/services";
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
  Search,
  Filter,
  Layers,
} from "lucide-react";

// Icon mapping helper
function getCategoryIcon(iconName: string, className: string = "h-5 w-5") {
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
    default:
      return <Layers className={className} />;
  }
}

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
      return <FileCheck className={className} />;
  }
}

export function ServicesDirectory() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredServices = useMemo(() => {
    return SERVICES.filter((service) => {
      const matchesCategory =
        selectedCategory === "all" || service.categoryId === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesSearch =
        service.title.toLowerCase().includes(query) ||
        service.summary.toLowerCase().includes(query) ||
        service.categoryName.toLowerCase().includes(query) ||
        service.seo.keywords.some((k) => k.toLowerCase().includes(query)) ||
        service.deliverables.items.some((d) =>
          d.title.toLowerCase().includes(query)
        );

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="space-y-12">
      {/* Category Tabs & Search Bar */}
      <div className="space-y-6">
        {/* Search input */}
        <div className="relative max-w-xl mx-auto sm:mx-0">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-navy-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by service name, deliverable, or keyword (e.g. DPR, CMA, CGTMSE)..."
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

        {/* Category Navigation Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`shrink-0 rounded-xl px-4 py-2.5 text-xs font-bold transition-all ${
              selectedCategory === "all"
                ? "bg-navy text-white shadow-md shadow-navy/20"
                : "border border-navy-200 bg-white text-navy-700 hover:border-gold hover:text-navy-dark"
            }`}
          >
            All Services ({SERVICES.length})
          </button>

          {SERVICE_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`shrink-0 inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all ${
                  isSelected
                    ? "bg-navy text-white shadow-md shadow-navy/20"
                    : "border border-navy-200 bg-white text-navy-700 hover:border-gold hover:text-navy-dark"
                }`}
              >
                {getCategoryIcon(
                  cat.iconName,
                  `h-3.5 w-3.5 ${isSelected ? "text-gold" : "text-navy-500"}`
                )}
                <span>{cat.name}</span>
                <span
                  className={`rounded-full px-1.5 py-0.2 text-[10px] ${
                    isSelected ? "bg-white/20 text-white" : "bg-navy-50 text-navy-600"
                  }`}
                >
                  {cat.serviceSlugs.length}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Filter Summary if filtered */}
      {(selectedCategory !== "all" || searchQuery) && (
        <div className="flex items-center justify-between rounded-xl bg-navy-50/80 px-4 py-3 text-xs text-navy-800 border border-navy-100">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-gold-dark" />
            <span>
              Showing <strong>{filteredServices.length}</strong> of{" "}
              {SERVICES.length} services
              {selectedCategory !== "all" && (
                <>
                  {" "}
                  in{" "}
                  <strong>
                    {
                      SERVICE_CATEGORIES.find((c) => c.id === selectedCategory)
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
              setSelectedCategory("all");
              setSearchQuery("");
            }}
            className="text-xs font-bold text-gold-dark hover:underline"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Services Grid / List */}
      {filteredServices.length === 0 ? (
        <div className="rounded-3xl border border-navy-100 bg-white p-12 text-center space-y-4">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-50 text-navy">
            <Search className="h-7 w-7 text-navy-400" />
          </div>
          <h3 className="text-lg font-bold text-navy-dark">
            No matching services found
          </h3>
          <p className="text-xs sm:text-sm text-navy-600 max-w-md mx-auto">
            We could not find any advisory service matching your search criteria. Try a different keyword or explore our full category list.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("all");
              setSearchQuery("");
            }}
            className="inline-flex items-center gap-2 rounded-xl bg-navy px-5 py-2.5 text-xs font-bold text-white hover:bg-navy-light transition-all"
          >
            Clear Search & Show All
          </button>
        </div>
      ) : (
        <div className="space-y-8">
          {filteredServices.map((service, idx) => (
            <div
              key={service.id}
              className="rounded-3xl border border-navy-100 bg-white p-6 sm:p-8 shadow-institutional hover:border-gold/40 transition-all group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Column: Summary & Metadata */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy group-hover:bg-navy group-hover:text-gold transition-colors">
                      {getServiceIcon(service.iconName, "h-6 w-6")}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-gold-dark">
                          {service.categoryName}
                        </span>
                        <span className="text-navy-300">•</span>
                        <span className="text-[10px] font-bold text-navy-500">
                          0{idx + 1}
                        </span>
                      </div>
                      <h2 className="text-xl sm:text-2xl font-serif font-bold text-navy-dark group-hover:text-navy transition-colors">
                        <Link href={`/services/${service.slug}`}>
                          {service.title}
                        </Link>
                      </h2>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-navy-700 leading-relaxed">
                    {service.summary}
                  </p>

                  {/* Target Audience pill */}
                  <div className="rounded-xl bg-warm-50 p-3.5 text-xs text-navy-800 border border-navy-100/60 space-y-1">
                    <span className="font-bold text-navy-900 block text-[11px] uppercase tracking-wider text-gold-dark">
                      Target Entities & Eligibility:
                    </span>
                    <p className="text-navy-700 leading-relaxed">
                      {service.targetAudience.description}
                    </p>
                  </div>

                  <div className="pt-2">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-bold text-gold-dark hover:text-navy transition-colors group-hover:translate-x-1 duration-200"
                    >
                      <span>Explore Methodology, Deliverables & Scope</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                {/* Right Column: Deliverables & Key Features */}
                <div className="lg:col-span-6 rounded-2xl border border-navy-100 bg-warm-50/60 p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-navy-900">
                      Tangible Deliverables & Core Features
                    </h3>
                    <span className="rounded-md bg-gold/15 px-2 py-0.5 text-[10px] font-bold text-gold-dark">
                      {service.deliverables.items.length} Key Outputs
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    {service.deliverables.items.map((item, dIdx) => (
                      <div
                        key={dIdx}
                        className="flex items-start gap-2.5 text-xs text-navy-700 bg-white p-2.5 rounded-lg border border-navy-100/50"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-gold mt-0.5" />
                        <div>
                          <span className="font-bold text-navy-dark">
                            {item.title}{" "}
                          </span>
                          <span className="text-[10px] font-semibold text-gold-dark">
                            ({item.format}):{" "}
                          </span>
                          <span className="text-navy-600">
                            {item.description}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Quick Action Footer */}
                  <div className="pt-2 flex items-center justify-between text-xs border-t border-navy-100/60">
                    <span className="text-navy-500 font-medium text-[11px]">
                      {service.process.steps.length} Step Execution Process
                    </span>
                    <Link
                      href="/book-consultation"
                      className="text-xs font-bold text-navy hover:text-gold transition-colors"
                    >
                      Book Consultation &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
