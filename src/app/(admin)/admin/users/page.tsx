import React from "react";
import { UserCheck, ShieldCheck, Plus } from "lucide-react";

export default function AdminUsersPage() {
  const users = [
    {
      name: "Vikram Singhania",
      email: "vikram@vsprojectfinance.in",
      role: "LEAD_ADVISOR",
      mfaEnabled: true,
      activeProjects: 14,
    },
    {
      name: "Ananya Roy",
      email: "ananya@vsprojectfinance.in",
      role: "ANALYST",
      mfaEnabled: true,
      activeProjects: 18,
    },
    {
      name: "Admin System",
      email: "admin@vsprojectfinance.in",
      role: "SUPER_ADMIN",
      mfaEnabled: true,
      activeProjects: 0,
    },
  ];

  return (
    <div className="space-y-6 max-w-6xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-navy-100 pb-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-gold-dark">Security & Staff</span>
          <h1 className="text-2xl font-serif font-bold text-navy-dark">Staff, Roles & MFA Management</h1>
          <p className="text-xs text-navy-600 mt-0.5">Manage advisor roles, TOTP 2-factor authentication, and underwriting permissions.</p>
        </div>
      </div>

      <div className="rounded-xl border border-navy-100 bg-white overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="border-b border-navy-100 bg-warm-50 text-[11px] font-bold text-navy-800 uppercase tracking-wider">
              <th className="p-4">Staff Member & Email</th>
              <th className="p-4">Assigned Role</th>
              <th className="p-4">MFA Status</th>
              <th className="p-4">Active Projects</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-navy-50 text-navy-800">
            {users.map((u) => (
              <tr key={u.email} className="hover:bg-warm-50/50">
                <td className="p-4 space-y-0.5">
                  <p className="font-bold text-navy-900">{u.name}</p>
                  <p className="text-[10px] text-navy-500">{u.email}</p>
                </td>
                <td className="p-4">
                  <span className="rounded bg-navy-50 px-2 py-0.5 text-[10px] font-bold text-navy-900">
                    {u.role}
                  </span>
                </td>
                <td className="p-4">
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    <ShieldCheck className="h-3 w-3 text-emerald-600" />
                    <span>TOTP Active</span>
                  </span>
                </td>
                <td className="p-4 font-semibold text-navy-800">{u.activeProjects}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
