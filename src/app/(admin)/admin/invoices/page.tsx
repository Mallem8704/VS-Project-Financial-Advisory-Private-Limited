import React from "react";
import { Receipt, Download, Plus } from "lucide-react";

export default function AdminInvoicesPage() {
  const invoices = [
    {
      invoiceNumber: "VS/2024/042",
      client: "Apex Precision Engineering Pvt Ltd",
      milestone: "Milestone 1: Inception & TEV",
      amount: "₹41,300",
      status: "PAID",
      date: "14 Jan 2024",
    },
    {
      invoiceNumber: "VS/2024/089",
      client: "Apex Precision Engineering Pvt Ltd",
      milestone: "Milestone 2: DPR & CMA",
      amount: "₹76,700",
      status: "ISSUED",
      date: "24 Jan 2024",
    },
    {
      invoiceNumber: "VS/2024/095",
      client: "GreenVayu Solar Infrastructure LLP",
      milestone: "Milestone 3: Bank Syndication",
      amount: "₹1,18,000",
      status: "PAID",
      date: "20 Jan 2024",
    },
  ];

  return (
    <div className="space-y-6 max-w-6xl">
      <div className="border-b border-navy-100 pb-4">
        <span className="text-[11px] font-bold uppercase tracking-wider text-gold-dark">Financial Accounts</span>
        <h1 className="text-2xl font-serif font-bold text-navy-dark">Invoices & GST Billing</h1>
        <p className="text-xs text-navy-600 mt-0.5">Manage milestone-linked advisory fee invoices and GST statutory reporting.</p>
      </div>

      <div className="rounded-xl border border-navy-100 bg-white overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="border-b border-navy-100 bg-warm-50 text-[11px] font-bold text-navy-800 uppercase tracking-wider">
              <th className="p-4">Invoice No & Date</th>
              <th className="p-4">Client Enterprise</th>
              <th className="p-4">Milestone</th>
              <th className="p-4">Total Amount (Incl GST)</th>
              <th className="p-4">Payment Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-navy-50 text-navy-800">
            {invoices.map((inv) => (
              <tr key={inv.invoiceNumber} className="hover:bg-warm-50/50">
                <td className="p-4 space-y-0.5">
                  <p className="font-bold text-navy-900">{inv.invoiceNumber}</p>
                  <p className="text-[10px] text-navy-500">{inv.date}</p>
                </td>
                <td className="p-4 font-semibold text-navy-800">{inv.client}</td>
                <td className="p-4 text-navy-600">{inv.milestone}</td>
                <td className="p-4 font-bold text-navy-900">{inv.amount}</td>
                <td className="p-4">
                  <span className={`rounded px-2 py-0.5 text-[10px] font-bold ${
                    inv.status === "PAID" ? "bg-emerald-50 text-emerald-800 border border-emerald-200" : "bg-amber-50 text-amber-800 border border-amber-200"
                  }`}>
                    {inv.status}
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
