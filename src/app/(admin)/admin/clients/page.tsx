import React from "react";
import { Building, Phone, Mail, FileCheck } from "lucide-react";

export default function AdminClientsPage() {
  const clients = [
    {
      id: "CLI-01",
      name: "Apex Precision Engineering Pvt Ltd",
      promoter: "Rajesh Sharma",
      sector: "Manufacturing",
      udyam: "UDYAM-MH-12-0049211",
      turnover: "₹350 Lakhs",
      activeProjects: 1,
    },
    {
      id: "CLI-02",
      name: "GreenVayu Solar Infrastructure LLP",
      promoter: "Karan Singhal",
      sector: "Renewable Energy",
      udyam: "UDYAM-GJ-01-0098231",
      turnover: "₹620 Lakhs",
      activeProjects: 1,
    },
  ];

  return (
    <div className="space-y-6 max-w-6xl">
      <div className="border-b border-navy-100 pb-4">
        <span className="text-[11px] font-bold uppercase tracking-wider text-gold-dark">Directory</span>
        <h1 className="text-2xl font-serif font-bold text-navy-dark">Client Enterprises</h1>
        <p className="text-xs text-navy-600 mt-0.5">Active MSME and corporate borrower profiles registered in the advisory system.</p>
      </div>

      <div className="rounded-xl border border-navy-100 bg-white overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="border-b border-navy-100 bg-warm-50 text-[11px] font-bold text-navy-800 uppercase tracking-wider">
              <th className="p-4">Enterprise & Promoter</th>
              <th className="p-4">Sector</th>
              <th className="p-4">Udyam Number</th>
              <th className="p-4">Turnover</th>
              <th className="p-4">Active Projects</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-navy-50 text-navy-800">
            {clients.map((c) => (
              <tr key={c.id} className="hover:bg-warm-50/50">
                <td className="p-4 space-y-0.5">
                  <p className="font-bold text-navy-900">{c.name}</p>
                  <p className="text-[10px] text-navy-500">Promoter: {c.promoter}</p>
                </td>
                <td className="p-4 text-navy-600">{c.sector}</td>
                <td className="p-4 font-mono text-[11px] text-navy-700">{c.udyam}</td>
                <td className="p-4 font-bold text-navy-900">{c.turnover}</td>
                <td className="p-4">
                  <span className="rounded bg-navy-50 px-2 py-0.5 text-[10px] font-bold text-navy-800">
                    {c.activeProjects} Mandate
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
