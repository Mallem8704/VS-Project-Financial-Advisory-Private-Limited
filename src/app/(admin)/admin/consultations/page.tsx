import React from "react";
import { Calendar, Clock, Video, User } from "lucide-react";

export default function AdminConsultationsPage() {
  const bookings = [
    {
      id: "CON-101",
      client: "Rajesh Sharma",
      company: "Apex Precision Engineering Pvt Ltd",
      slot: "26 Jan 2024, 03:00 PM IST",
      type: "Pre-Submission Review",
      advisor: "Vikram Singhania",
      status: "CONFIRMED",
    },
    {
      id: "CON-102",
      client: "Suresh Patel",
      company: "Gujarat Polymers Industries",
      slot: "27 Jan 2024, 11:00 AM IST",
      type: "Initial Discovery",
      advisor: "Ananya Roy",
      status: "REQUESTED",
    },
  ];

  return (
    <div className="space-y-6 max-w-6xl">
      <div className="border-b border-navy-100 pb-4">
        <span className="text-[11px] font-bold uppercase tracking-wider text-gold-dark">Schedule</span>
        <h1 className="text-2xl font-serif font-bold text-navy-dark">Consultation Bookings Desk</h1>
        <p className="text-xs text-navy-600 mt-0.5">Manage advisor calendar bookings, video sessions, and discovery calls.</p>
      </div>

      <div className="rounded-xl border border-navy-100 bg-white overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="border-b border-navy-100 bg-warm-50 text-[11px] font-bold text-navy-800 uppercase tracking-wider">
              <th className="p-4">Booking ID & Promoter</th>
              <th className="p-4">Enterprise</th>
              <th className="p-4">Scheduled Slot</th>
              <th className="p-4">Advisory Focus</th>
              <th className="p-4">Assigned Advisor</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-navy-50 text-navy-800">
            {bookings.map((b) => (
              <tr key={b.id} className="hover:bg-warm-50/50">
                <td className="p-4 space-y-0.5">
                  <p className="font-bold text-navy-900">{b.client}</p>
                  <p className="text-[10px] text-navy-500">{b.id}</p>
                </td>
                <td className="p-4 font-semibold text-navy-800">{b.company}</td>
                <td className="p-4 text-navy-700">{b.slot}</td>
                <td className="p-4 text-navy-600">{b.type}</td>
                <td className="p-4 text-navy-700">{b.advisor}</td>
                <td className="p-4">
                  <span className="rounded bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 text-[10px] font-bold">
                    {b.status}
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
