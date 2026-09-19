import React from "react";
import { CreditCard, CheckCircle2, ShieldCheck } from "lucide-react";

export default function AdminPaymentsPage() {
  const transactions = [
    {
      paymentId: "pay_N8zL9qR12345",
      invoiceNumber: "VS/2024/042",
      client: "Apex Precision Engineering Pvt Ltd",
      amount: "₹41,300",
      gateway: "Razorpay (UPI / NetBanking)",
      settlementStatus: "SETTLED_TO_BANK",
      timestamp: "14 Jan 2024, 02:10 PM",
    },
    {
      paymentId: "pay_N7yK8pQ98765",
      invoiceNumber: "VS/2024/095",
      client: "GreenVayu Solar Infrastructure LLP",
      amount: "₹1,18,000",
      gateway: "Razorpay (Corporate NEFT)",
      settlementStatus: "SETTLED_TO_BANK",
      timestamp: "20 Jan 2024, 04:30 PM",
    },
  ];

  return (
    <div className="space-y-6 max-w-6xl">
      <div className="border-b border-navy-100 pb-4">
        <span className="text-[11px] font-bold uppercase tracking-wider text-gold-dark">Gateway & Settlement</span>
        <h1 className="text-2xl font-serif font-bold text-navy-dark">Payment Settlements & Webhook Logs</h1>
        <p className="text-xs text-navy-600 mt-0.5">Razorpay payment verification, webhook audit, and merchant bank account settlement.</p>
      </div>

      <div className="rounded-xl border border-navy-100 bg-white overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="border-b border-navy-100 bg-warm-50 text-[11px] font-bold text-navy-800 uppercase tracking-wider">
              <th className="p-4">Payment ID & Timestamp</th>
              <th className="p-4">Invoice No</th>
              <th className="p-4">Client Enterprise</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Channel</th>
              <th className="p-4">Settlement</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-navy-50 text-navy-800">
            {transactions.map((tx) => (
              <tr key={tx.paymentId} className="hover:bg-warm-50/50">
                <td className="p-4 space-y-0.5">
                  <p className="font-mono font-bold text-navy-900">{tx.paymentId}</p>
                  <p className="text-[10px] text-navy-500">{tx.timestamp}</p>
                </td>
                <td className="p-4 font-semibold text-navy-700">{tx.invoiceNumber}</td>
                <td className="p-4 font-semibold text-navy-800">{tx.client}</td>
                <td className="p-4 font-bold text-navy-900">{tx.amount}</td>
                <td className="p-4 text-navy-600">{tx.gateway}</td>
                <td className="p-4">
                  <span className="rounded bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 text-[10px] font-bold">
                    {tx.settlementStatus}
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
