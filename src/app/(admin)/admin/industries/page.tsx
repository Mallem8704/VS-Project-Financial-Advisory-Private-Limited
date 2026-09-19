import React from "react";
import { Factory, Plus } from "lucide-react";

export default function AdminIndustriesPage() {
  const industries = [
    { name: "Manufacturing & Engineering", activeMandates: 18, capexAdvised: "₹62.5 Cr" },
    { name: "Agro & Food Processing", activeMandates: 8, capexAdvised: "₹24.0 Cr" },
    { name: "Renewable Energy & EV", activeMandates: 6, capexAdvised: "₹38.5 Cr" },
    { name: "Healthcare & Hospitals", activeMandates: 4, capexAdvised: "₹17.5 Cr" },
  ];

  return (
    <div className="space-y-6 max-w-6xl">
      <div className="border-b border-navy-100 pb-4">
        <span className="text-[11px] font-bold uppercase tracking-wider text-gold-dark">Sectors</span>
        <h1 className="text-2xl font-serif font-bold text-navy-dark">Industry Verticals & Clusters</h1>
        <p className="text-xs text-navy-600 mt-0.5">Manage industry-specific parameters, capex benchmarks, and priority schemes.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {industries.map((ind, idx) => (
          <div key={idx} className="rounded-xl border border-navy-100 bg-white p-5 shadow-sm space-y-2">
            <Factory className="h-6 w-6 text-gold" />
            <h3 className="text-sm font-bold text-navy-dark">{ind.name}</h3>
            <div className="text-xs text-navy-600 pt-2 border-t border-navy-50">
              <p>Active Mandates: <strong>{ind.activeMandates}</strong></p>
              <p>Capex Advised: <strong>{ind.capexAdvised}</strong></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
