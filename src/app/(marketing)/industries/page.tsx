import React from "react";
import Link from "next/link";
import { RegulatoryDisclaimerBanner } from "@/components/brand/RegulatoryDisclaimerBanner";
import {
  Factory,
  Sprout,
  SunMedium,
  HeartPulse,
  Truck,
  Hotel,
  Laptop,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export default function IndustriesPage() {
  const industries = [
    {
      title: "Manufacturing & Heavy Engineering",
      icon: Factory,
      tag: "Capital Intensive Capex",
      description: "Automobile components, precision engineering, plastics, packaging, and textiles.",
      keyAspects: [
        "Machinery procurement & imported equipment LC structuring",
        "Raw material and work-in-progress holding period optimization",
        "Power load (HT) and effluent treatment plant capex budgeting",
      ],
      schemes: "CGTMSE, State Capital Investment Subsidies, TUFS (Textiles)",
    },
    {
      title: "Agro & Food Processing Units",
      icon: Sprout,
      tag: "Priority Sector Lending",
      description: "Grain milling, dairy processing, horticulture packaging, cold extraction, and bakeries.",
      keyAspects: [
        "Seasonal working capital limit structuring (peak vs non-peak)",
        "APMC compliance and raw material procurement channels",
        "FSSAI standards, cold storage, and spoilage buffer provisions",
      ],
      schemes: "NABARD Food Processing Fund, PMFME Scheme, MoFPI Subsidies",
    },
    {
      title: "Renewable Energy & EV Infrastructure",
      icon: SunMedium,
      tag: "Green Transition Finance",
      description: "Rooftop solar, utility-scale ground mount, EV battery swapping, and charging hubs.",
      keyAspects: [
        "Power Purchase Agreement (PPA) bankability review",
        "Accelerated depreciation (40%) tax shields and generation modeling",
        "Long tenure term loans (10-15 years) aligned with solar tariff curves",
      ],
      schemes: "IREDA Loan Frameworks, State Solar Policies, PM Surya Ghar",
    },
    {
      title: "Healthcare, Hospitals & Pharma",
      icon: HeartPulse,
      tag: "Social Infrastructure",
      description: "Super-specialty hospitals, diagnostic centres, medical equipment, and formulations.",
      keyAspects: [
        "Medical equipment leasing vs term loan cost comparison",
        "Average Revenue Per Occupied Bed (ARPOB) financial modeling",
        "AERB, NABH, and biomedical waste statutory checklist clearance",
      ],
      schemes: "SIDBI Healthcare Financing, CGTMSE up to ₹5 Cr",
    },
    {
      title: "Logistics, Warehousing & Cold Chain",
      icon: Truck,
      tag: "Supply Chain Infrastructure",
      description: "Dry warehouses, controlled atmosphere cold stores, 3PL logistics, and transport fleets.",
      keyAspects: [
        "Floor space utilization and pallet revenue yield modeling",
        "Integrated multi-modal logistics hub land development DPRs",
        "Fleet financing cash-sweep and asset-backed credit structures",
      ],
      schemes: "National Logistics Policy Incentives, NABARD Warehousing Fund",
    },
    {
      title: "Hospitality & Commercial Real Estate",
      icon: Hotel,
      tag: "Asset Backed Real Estate",
      description: "Hotels, resorts, banquets, and commercial rental property capex.",
      keyAspects: [
        "Average Daily Rate (ADR) and RevPAR sensitivity projections",
        "Lease Rental Discounting (LRD) debt structuring against anchor tenants",
        "Construction milestone-linked disbursement drawdowns",
      ],
      schemes: "State Tourism Policy Subsidies, Hospitality ECLGS",
    },
    {
      title: "Technology Startups & SaaS",
      icon: Laptop,
      tag: "Growth & Working Capital",
      description: "B2B SaaS, IT services, enterprise software, and electronics manufacturing.",
      keyAspects: [
        "Venture debt and bridge loan structuring alongside equity rounds",
        "Software export receivable financing (EDPMS compliance)",
        "DPIIT startup recognition and Section 80-IAC tax exemption filings",
      ],
      schemes: "Credit Guarantee Scheme for Startups (CGSS), SIDBI Fund of Funds",
    },
  ];

  return (
    <div className="bg-warm min-h-screen py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold-dark">
            <Factory className="h-3.5 w-3.5" />
            <span>Tailored Sector Expertise</span>
          </div>
          <h1 className="text-3xl font-serif font-bold text-navy-dark sm:text-5xl tracking-tight">
            Industry-Specific Project Finance Solutions
          </h1>
          <p className="text-base text-navy-700 leading-relaxed">
            Every industrial sector has unique working capital cycles, regulatory clearances, and credit underwriting norms. We structure debt proposals aligned with your sector&apos;s specific operating economics.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {industries.map((ind, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-navy-100 bg-white p-6 shadow-sm hover:shadow-institutional transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy-50 text-navy">
                    <ind.icon className="h-5 w-5 text-gold" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gold-dark bg-gold/10 px-2 py-0.5 rounded">
                    {ind.tag}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy-dark">{ind.title}</h3>
                  <p className="text-xs text-navy-600 mt-1">{ind.description}</p>
                </div>
                <div className="rounded-lg bg-warm-50 p-3 text-xs space-y-1.5 border border-navy-50">
                  <span className="font-bold text-navy-900 block uppercase text-[10px]">
                    Sector Advisory Focus:
                  </span>
                  {ind.keyAspects.map((k, kIdx) => (
                    <p key={kIdx} className="text-navy-700 text-xs">
                      • {k}
                    </p>
                  ))}
                </div>
              </div>
              <div className="pt-2 border-t border-navy-50 flex items-center justify-between text-xs">
                <span className="text-navy-500">Key Schemes: <strong className="text-navy-800">{ind.schemes}</strong></span>
                <Link
                  href="/book-consultation"
                  className="text-gold-dark font-bold hover:underline shrink-0"
                >
                  Consult Desk →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <RegulatoryDisclaimerBanner />
        </div>
      </div>
    </div>
  );
}
