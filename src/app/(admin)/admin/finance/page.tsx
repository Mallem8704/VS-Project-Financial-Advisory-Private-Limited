import React from "react";
import { TrendingUp, Calculator, ShieldCheck } from "lucide-react";
import { RatioTable } from "@/components/finance/RatioTable";

export default function AdminFinanceUnderwritingPage() {
  const sampleRatios = [
    { name: "Current Ratio (Method II)", value: "1.35", benchmark: ">= 1.33", status: "Compliant" as const },
    { name: "Total Outside Liabilities / TNW", value: "2.14", benchmark: "<= 3.00", status: "Compliant" as const },
    { name: "Average DSCR", value: "1.84x", benchmark: ">= 1.50", status: "Strong" as const },
    { name: "Interest Service Coverage (ISCR)", value: "3.20x", benchmark: ">= 2.00", status: "Strong" as const },
    { name: "Net Profit Margin (PAT %)", value: "6.8%", benchmark: ">= 4.0%", status: "Compliant" as const },
  ];

  return (
    <div className="space-y-6 max-w-6xl">
      <div className="border-b border-navy-100 pb-4">
        <span className="text-[11px] font-bold uppercase tracking-wider text-gold-dark">Credit Underwriting</span>
        <h1 className="text-2xl font-serif font-bold text-navy-dark">Financial Appraisal & Ratios Desk</h1>
        <p className="text-xs text-navy-600 mt-0.5">Underwriting benchmarks, MPBF sensitivity testing, and credit risk evaluations.</p>
      </div>

      <div className="rounded-xl border border-navy-100 bg-white p-6 shadow-sm space-y-4">
        <h2 className="text-sm font-bold text-navy-dark">Banking Benchmark Analysis (Apex Precision Engineering)</h2>
        <RatioTable rows={sampleRatios} />
      </div>
    </div>
  );
}
