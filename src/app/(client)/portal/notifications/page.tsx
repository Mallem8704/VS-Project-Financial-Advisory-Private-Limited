import React from "react";
import Link from "next/link";
import { Bell, CheckCircle2, Clock, ArrowRight, ShieldCheck, AlertCircle } from "lucide-react";

export default function PortalNotificationsPage() {
  const notifications = [
    {
      id: "notif-1",
      title: "DPR Chapter 4 (Plant & Machinery) Completed",
      message: "Our financial engineering team has incorporated Satake OEM optical sorter specifications into the Detailed Project Report draft.",
      time: "2 hours ago",
      type: "PROJECT_UPDATE",
      isUnread: true,
      actionUrl: "/portal/dashboard",
    },
    {
      id: "notif-2",
      title: "Document Verified: 3-Year Audited Financial Statements",
      message: "Your CA-audited balance sheets for FY 2023–2025 have been verified with auditor UDIN confirmation.",
      time: "Yesterday, 03:15 PM",
      type: "DOCUMENT_VERIFIED",
      isUnread: false,
      actionUrl: "/portal/documents",
    },
    {
      id: "notif-3",
      title: "Upcoming Meeting Scheduled with Lead Advisor",
      message: "Technical Feasibility & Capex Structuring discussion scheduled for tomorrow at 11:30 AM with M. V. Rao (Ex-DGM SBI).",
      time: "2 days ago",
      type: "MEETING_CONFIRMED",
      isUnread: false,
      actionUrl: "/portal/meetings",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-navy-100 pb-4">
        <div>
          <h1 className="text-xl font-bold text-navy-dark">Notifications & Activity Alerts</h1>
          <p className="text-xs text-navy-500 mt-0.5">
            Real-time advisory milestones, document review approvals, and banker correspondence alerts.
          </p>
        </div>
        <button
          type="button"
          className="text-xs font-semibold text-navy hover:text-gold transition-colors"
        >
          Mark all as read
        </button>
      </div>

      <div className="space-y-3">
        {notifications.map((n) => (
          <div
            key={n.id}
            className={`rounded-2xl border p-5 transition-all flex items-start gap-4 ${
              n.isUnread
                ? "bg-white border-gold/40 shadow-sm"
                : "bg-slate-50/70 border-navy-100 hover:bg-white"
            }`}
          >
            <div
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
                n.isUnread ? "bg-gold text-navy-dark shadow-sm" : "bg-navy/5 text-navy"
              }`}
            >
              <Bell className="h-4 w-4" />
            </div>

            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-bold text-navy-dark">{n.title}</h2>
                <span className="text-[11px] text-navy-400 flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {n.time}
                </span>
              </div>
              <p className="text-xs text-navy-600 leading-relaxed">{n.message}</p>
              {n.actionUrl && (
                <div className="pt-2">
                  <Link
                    href={n.actionUrl}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-navy hover:text-gold transition-colors"
                  >
                    <span>View details</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
