import React from "react";
import { ShieldCheck, UserCheck, Clock, FileText, Lock } from "lucide-react";

export default function AuditLogsPage() {
  const auditLogs = [
    {
      id: "log-9081",
      actorName: "Vikram Singhania",
      actorRole: "LEAD_ADVISOR",
      action: "DOCUMENT_VERIFIED",
      resource: "Document (Udyam MSME)",
      resourceId: "doc-3",
      ipAddress: "103.21.14.82",
      timestamp: "2024-01-24 16:45:12 IST",
      metadata: "Verified against MSME Udyam verification portal. Category: Small Enterprise.",
    },
    {
      id: "log-9080",
      actorName: "System Gateway",
      actorRole: "SYSTEM_GATEWAY",
      action: "PAYMENT_SIGNATURE_VERIFIED",
      resource: "Invoice",
      resourceId: "inv-101",
      ipAddress: "Razorpay Webhook IP (52.66.12.8)",
      timestamp: "2024-01-24 14:10:04 IST",
      metadata: "HMAC SHA256 verified for order order_N8zL9qR12345. Amount: ₹41,300.",
    },
    {
      id: "log-9079",
      actorName: "Ananya Roy",
      actorRole: "ANALYST",
      action: "CMA_SCHEDULE_UPDATED",
      resource: "CmaWorkspace",
      resourceId: "cma-089",
      ipAddress: "103.21.14.84",
      timestamp: "2024-01-24 12:30:19 IST",
      metadata: "Form IV MPBF recalculation: Method II Limit set to ₹112.0 Lakhs. Current Ratio: 1.35.",
    },
    {
      id: "log-9078",
      actorName: "Rajesh Sharma",
      actorRole: "CLIENT_DIRECTOR",
      action: "PRESIGNED_S3_DOWNLOAD",
      resource: "Document (DPR Draft)",
      resourceId: "doc-draft-dpr",
      ipAddress: "122.161.45.19",
      timestamp: "2024-01-24 10:15:33 IST",
      metadata: "Generated AWS S3 signed URL with 900-second expiration.",
    },
    {
      id: "log-9077",
      actorName: "Vikram Singhania",
      actorRole: "LEAD_ADVISOR",
      action: "MFA_LOGIN_SUCCESS",
      resource: "AuthSession",
      resourceId: "sess-user-02",
      ipAddress: "103.21.14.82",
      timestamp: "2024-01-24 09:02:11 IST",
      metadata: "TOTP 2FA code verified successfully.",
    },
  ];

  return (
    <div className="space-y-6 max-w-5xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-navy-100 pb-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-gold-dark">
            Regulatory Security & Accountability
          </span>
          <h1 className="text-2xl font-serif font-bold text-navy-dark">
            Immutable Audit Trail Logs
          </h1>
          <p className="text-xs text-navy-600 mt-0.5">
            Cryptographically sealed system activity log for bank, RBI compliance, and internal governance audits.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
          <Lock className="h-4 w-4 text-emerald-600" />
          <span>WORM (Write Once Read Many) Compliant</span>
        </div>
      </div>

      <div className="rounded-xl border border-navy-100 bg-white overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-navy-100 bg-warm-50 text-[11px] font-bold text-navy-800 uppercase tracking-wider">
                <th className="p-4">Timestamp & Log ID</th>
                <th className="p-4">Actor & Role</th>
                <th className="p-4">Action & Resource</th>
                <th className="p-4">IP Address</th>
                <th className="p-4">Audit Metadata</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-navy-50 text-navy-800">
              {auditLogs.map((log) => (
                <tr key={log.id} className="hover:bg-warm-50/50 transition-colors">
                  <td className="p-4 space-y-0.5">
                    <p className="font-bold text-navy-900">{log.timestamp}</p>
                    <span className="text-[10px] text-navy-500">{log.id}</span>
                  </td>
                  <td className="p-4 space-y-0.5">
                    <p className="font-semibold text-navy-800">{log.actorName}</p>
                    <span className="text-[10px] font-bold text-gold-dark">
                      {log.actorRole}
                    </span>
                  </td>
                  <td className="p-4 space-y-0.5">
                    <span className="rounded bg-navy-50 px-2 py-0.5 text-[10px] font-bold text-navy-900">
                      {log.action}
                    </span>
                    <p className="text-[11px] text-navy-600">{log.resource}</p>
                  </td>
                  <td className="p-4 font-mono text-[11px] text-navy-500">
                    {log.ipAddress}
                  </td>
                  <td className="p-4 text-[11px] text-navy-600 max-w-xs leading-snug">
                    {log.metadata}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
