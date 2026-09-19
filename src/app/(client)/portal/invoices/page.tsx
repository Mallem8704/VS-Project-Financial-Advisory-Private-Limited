"use client";

import React, { useState } from "react";
import { RegulatoryDisclaimerBanner } from "@/components/brand/RegulatoryDisclaimerBanner";
import {
  Receipt,
  CheckCircle2,
  Clock,
  ArrowRight,
  Download,
  CreditCard,
  ShieldCheck,
} from "lucide-react";

interface InvoiceItem {
  id: string;
  invoiceNumber: string;
  milestoneTitle: string;
  baseAmount: number;
  gstAmount: number;
  totalAmount: number;
  dueDate: string;
  status: "PAID" | "ISSUED" | "DRAFT";
  paidAt?: string;
  razorpayPaymentId?: string;
}

export default function InvoicesPage() {
  const [invoices, setInvoices] = useState<InvoiceItem[]>([
    {
      id: "inv-101",
      invoiceNumber: "VS/2024/042",
      milestoneTitle: "Milestone 1: Inception, Business Structuring & TEV Feasibility",
      baseAmount: 35000,
      gstAmount: 6300,
      totalAmount: 41300,
      dueDate: "15 Jan 2024",
      status: "PAID",
      paidAt: "14 Jan 2024",
      razorpayPaymentId: "pay_N8zL9qR12345",
    },
    {
      id: "inv-102",
      invoiceNumber: "VS/2024/089",
      milestoneTitle: "Milestone 2: Bankable DPR & CMA Form I–VI Financial Engineering",
      baseAmount: 65000,
      gstAmount: 11700,
      totalAmount: 76700,
      dueDate: "30 Jan 2024",
      status: "ISSUED",
    },
    {
      id: "inv-103",
      invoiceNumber: "VS/2024/115",
      milestoneTitle: "Milestone 3: Bank Loan Dossier Compilation & Credit Underwriting Liaison",
      baseAmount: 50000,
      gstAmount: 9000,
      totalAmount: 59000,
      dueDate: "15 Feb 2024",
      status: "DRAFT",
    },
  ]);

  const [payingInvoiceId, setPayingInvoiceId] = useState<string | null>(null);

  const handlePayWithRazorpay = (inv: InvoiceItem) => {
    setPayingInvoiceId(inv.id);
    setTimeout(() => {
      alert(
        `[Razorpay Checkout] Order created for ₹${inv.totalAmount.toLocaleString(
          "en-IN"
        )} (Invoice: ${inv.invoiceNumber}). Payment verified successfully via signature verification.`
      );
      setInvoices((prev) =>
        prev.map((i) =>
          i.id === inv.id
            ? {
                ...i,
                status: "PAID",
                paidAt: "Just now",
                razorpayPaymentId: `pay_mock_${Date.now()}`,
              }
            : i
        )
      );
      setPayingInvoiceId(null);
    }, 1000);
  };

  return (
    <div className="space-y-8 max-w-5xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-navy-100 pb-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-gold-dark">
            Billing & Milestone Accounts
          </span>
          <h1 className="text-2xl font-serif font-bold text-navy-dark">
            Invoices & Payments
          </h1>
          <p className="text-xs text-navy-600 mt-0.5">
            Transparent milestone-based fee schedules compliant with GST regulations.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold text-navy-700 bg-warm-50 px-3 py-1.5 rounded-lg border border-navy-100">
          <ShieldCheck className="h-4 w-4 text-gold" />
          <span>Razorpay 128-Bit SSL Secure Gateway</span>
        </div>
      </div>

      {/* Invoices Table */}
      <div className="rounded-xl border border-navy-100 bg-white overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-navy-100 bg-warm-50 text-[11px] font-bold text-navy-800 uppercase tracking-wider">
                <th className="p-4">Invoice No & Milestone</th>
                <th className="p-4">Taxable Base (₹)</th>
                <th className="p-4">GST (18%)</th>
                <th className="p-4">Total Amount (₹)</th>
                <th className="p-4">Status & Due Date</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-navy-50 text-navy-800">
              {invoices.map((inv) => (
                <tr key={inv.id} className="hover:bg-warm-50/50 transition-colors">
                  <td className="p-4 space-y-0.5">
                    <p className="font-bold text-navy-900">{inv.invoiceNumber}</p>
                    <p className="text-[11px] text-navy-600 max-w-xs leading-snug">
                      {inv.milestoneTitle}
                    </p>
                  </td>
                  <td className="p-4 font-medium text-navy-700">
                    ₹{inv.baseAmount.toLocaleString("en-IN")}
                  </td>
                  <td className="p-4 text-navy-500">
                    ₹{inv.gstAmount.toLocaleString("en-IN")}
                  </td>
                  <td className="p-4 font-bold text-navy-900">
                    ₹{inv.totalAmount.toLocaleString("en-IN")}
                  </td>
                  <td className="p-4 space-y-0.5">
                    <span
                      className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded border ${
                        inv.status === "PAID"
                          ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                          : inv.status === "ISSUED"
                          ? "bg-amber-50 text-amber-800 border-amber-200"
                          : "bg-navy-50 text-navy-600 border-navy-100"
                      }`}
                    >
                      {inv.status}
                    </span>
                    <p className="text-[10px] text-navy-500">
                      {inv.status === "PAID" ? `Paid: ${inv.paidAt}` : `Due: ${inv.dueDate}`}
                    </p>
                  </td>
                  <td className="p-4 text-right space-x-2">
                    {inv.status === "ISSUED" && (
                      <button
                        onClick={() => handlePayWithRazorpay(inv)}
                        disabled={payingInvoiceId === inv.id}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-gold px-3 py-1.5 text-xs font-bold text-white hover:bg-gold-hover transition-all shadow-sm"
                      >
                        <CreditCard className="h-3.5 w-3.5" />
                        <span>{payingInvoiceId === inv.id ? "Processing..." : "Pay with Razorpay"}</span>
                      </button>
                    )}
                    {inv.status === "PAID" && (
                      <button
                        onClick={() => alert(`Downloading GST-compliant Tax Invoice PDF: ${inv.invoiceNumber}`)}
                        className="inline-flex items-center gap-1 rounded bg-navy-50 px-2.5 py-1 text-xs font-semibold text-navy-700 hover:bg-navy-100 transition-all"
                      >
                        <Download className="h-3.5 w-3.5" />
                        <span>Tax Invoice PDF</span>
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <RegulatoryDisclaimerBanner />
    </div>
  );
}
