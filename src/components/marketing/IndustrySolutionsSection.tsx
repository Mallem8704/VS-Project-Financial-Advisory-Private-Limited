import React from "react";
import Link from "next/link";
import { Container, SectionHeader } from "@/components/ui";
import {
  Wheat,
  Building2,
  Hotel,
  Factory,
  SunMedium,
  Zap,
  Warehouse,
  Snowflake,
  ArrowRight,
} from "lucide-react";

const selectedIndustries = [
  {
    title: "Rice Mills & Agro Processing",
    icon: Wheat,
    capexRange: "₹ 5 Cr – ₹ 40 Cr",
    focus: "Modern automated milling, grain silos, parboiling units, and paddy drying facilities.",
    schemes: "NABARD AIF • MOFPI Capital Subsidy • State Agro Policy",
  },
  {
    title: "Hospitals & Healthcare",
    icon: Building2,
    capexRange: "₹ 15 Cr – ₹ 150 Cr",
    focus: "Multi-speciality hospital setup, diagnostic equipment leasing, and brownfield bed expansion.",
    schemes: "Emergency Credit Line • NABH Priority Lending • Equipment Debt",
  },
  {
    title: "Hotels & Hospitality",
    icon: Hotel,
    capexRange: "₹ 10 Cr – ₹ 80 Cr",
    focus: "Boutique resorts, business hotels, banquet facilities, and eco-tourism infrastructure.",
    schemes: "Tourism Infrastructure Subvention • Long-term Debt Amortization",
  },
  {
    title: "Manufacturing & Engineering",
    icon: Factory,
    capexRange: "₹ 3 Cr – ₹ 100 Cr",
    focus: "CNC precision machining, auto components, fabrication units, and industrial PEB sheds.",
    schemes: "CGTMSE Collateral Free • Technology Upgradation (TUFS) • SIDBI SMILE",
  },
  {
    title: "Solar & Renewable Energy",
    icon: SunMedium,
    capexRange: "₹ 2 Cr – ₹ 50 Cr",
    focus: "Commercial & industrial rooftop solar, ground-mounted captive parks, and PM KUSUM projects.",
    schemes: "IREDA Refinance • Accelerated Depreciation • Green Energy Subsidies",
  },
  {
    title: "EV Charging Infrastructure",
    icon: Zap,
    capexRange: "₹ 1 Cr – ₹ 25 Cr",
    focus: "Highway fast-charging hubs, fleet battery swapping hubs, and dedicated grid substations.",
    schemes: "FAME II Incentives • State EV Infrastructure Capital Grants",
  },
  {
    title: "Warehouses & Logistics",
    icon: Warehouse,
    capexRange: "₹ 8 Cr – ₹ 60 Cr",
    focus: "Grade-A pre-engineered logistics parks, automated storage, and WDRA accredited godowns.",
    schemes: "Agriculture Infrastructure Fund (AIF) • 3% Interest Subvention",
  },
  {
    title: "Cold Storage & CA Facilities",
    icon: Snowflake,
    capexRange: "₹ 4 Cr – ₹ 35 Cr",
    focus: "Controlled atmosphere (CA) stores, multi-commodity cold chains, and pack-houses for perishables.",
    schemes: "National Horticulture Board (NHB) • MOFPI Scheme for Cold Chain",
  },
];

export function IndustrySolutionsSection() {
  return (
    <section className="relative py-20 bg-background">
      <Container>
        <SectionHeader
          eyebrow="Sector-Specific Project Finance"
          title="Tailored Industry Solutions"
          highlight="with Regulatory Alignment"
          description="Every industry possesses unique operating cycles, debt service dynamics, and government capital subsidy frameworks. We design bankable dossiers adapted to your sector's reality."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {selectedIndustries.map((ind) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.title}
                className="group rounded-2xl border border-border bg-surface p-6 shadow-subtle hover:shadow-institutional hover:border-gold/50 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-dark text-gold border border-gold/30 shadow-sm transition-transform duration-200 group-hover:scale-105">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] font-bold text-navy-500 font-mono">
                      {ind.capexRange}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-navy-dark font-sans tracking-tight group-hover:text-navy transition-colors">
                    {ind.title}
                  </h3>

                  <p className="mt-2 text-xs text-text-secondary leading-relaxed line-clamp-3">
                    {ind.focus}
                  </p>

                  <div className="mt-4 pt-3 border-t border-border-subtle">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gold-dark block mb-1">
                      Subsidy & Schemes:
                    </span>
                    <p className="text-[11px] font-medium text-navy-800 line-clamp-2">
                      {ind.schemes}
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-border-subtle">
                  <Link
                    href="/industries"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-gold-dark group-hover:text-gold transition-colors"
                  >
                    <span>View Sector Dossier</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 rounded-xl border border-navy-800 bg-navy px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-sm hover:bg-navy-light transition-all"
          >
            <span>Explore All Industries & Capital Schemes</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
