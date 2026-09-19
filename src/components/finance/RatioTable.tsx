import React from "react";

export interface RatioRow {
  name: string;
  value: string;
  benchmark: string;
  status: "Compliant" | "Attention" | "Strong";
}

export function RatioTable({ rows }: { rows: RatioRow[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse text-xs">
        <thead>
          <tr className="border-b border-navy-100 bg-warm-50 text-[10px] font-bold text-navy-800 uppercase tracking-wider">
            <th className="p-3">Financial Ratio</th>
            <th className="p-3">Calculated Value</th>
            <th className="p-3">Indian Bank Benchmark</th>
            <th className="p-3">Appraisal Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-navy-50 text-navy-800">
          {rows.map((row, idx) => (
            <tr key={idx} className="hover:bg-warm-50/50">
              <td className="p-3 font-semibold text-navy-900">{row.name}</td>
              <td className="p-3 font-bold text-navy-800">{row.value}</td>
              <td className="p-3 text-navy-500">{row.benchmark}</td>
              <td className="p-3">
                <span
                  className={`inline-block rounded px-2 py-0.5 text-[10px] font-bold ${
                    row.status === "Compliant" || row.status === "Strong"
                      ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                      : "bg-amber-50 text-amber-800 border border-amber-200"
                  }`}
                >
                  {row.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
