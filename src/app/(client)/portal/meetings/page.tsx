import React from "react";
import { Video, Calendar, Clock, User, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function ClientMeetingsPage() {
  const meetings = [
    {
      title: "Pre-Submission DPR & CMA Review Call",
      advisor: "Vikram Singhania (VP, Credit)",
      dateTime: "26 Jan 2024, 03:00 PM IST",
      duration: "45 Mins",
      status: "CONFIRMED",
      meetingUrl: "https://meet.google.com/vs-advisory-session",
    },
    {
      title: "Initial Feasibility & Means of Finance Alignment",
      advisor: "Ananya Roy (Analyst)",
      dateTime: "14 Jan 2024, 11:00 AM IST",
      duration: "60 Mins",
      status: "COMPLETED",
    },
  ];

  return (
    <div className="space-y-6 max-w-5xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-navy-100 pb-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-gold-dark">
            Direct Advisor Consultations
          </span>
          <h1 className="text-2xl font-serif font-bold text-navy-dark">
            Scheduled Advisory Meetings
          </h1>
          <p className="text-xs text-navy-600 mt-0.5">
            Video conferences and strategic credit reviews with your assigned advisory team.
          </p>
        </div>
        <Link
          href="/consultation"
          className="rounded-lg bg-gold px-4 py-2 text-xs font-bold text-white hover:bg-gold-hover shadow-sm"
        >
          Request New Meeting
        </Link>
      </div>

      <div className="rounded-xl border border-navy-100 bg-white overflow-hidden shadow-sm">
        <div className="divide-y divide-navy-50 text-xs">
          {meetings.map((m, idx) => (
            <div key={idx} className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-warm-50/50">
              <div className="space-y-1">
                <span className="rounded bg-navy-50 px-2 py-0.5 text-[10px] font-bold text-navy-800">
                  {m.duration}
                </span>
                <h3 className="text-sm font-bold text-navy-dark">{m.title}</h3>
                <p className="text-[11px] text-navy-600">Advisor: {m.advisor} • {m.dateTime}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className={`rounded px-2.5 py-1 text-[10px] font-bold ${
                  m.status === "CONFIRMED" ? "bg-emerald-50 text-emerald-800 border border-emerald-200" : "bg-warm-100 text-navy-700"
                }`}>
                  {m.status}
                </span>
                {m.meetingUrl && (
                  <a
                    href={m.meetingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-navy px-3.5 py-1.5 text-xs font-bold text-white hover:bg-navy-light shadow-sm inline-flex items-center gap-1.5"
                  >
                    <Video className="h-3.5 w-3.5" />
                    <span>Join Video Call</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
