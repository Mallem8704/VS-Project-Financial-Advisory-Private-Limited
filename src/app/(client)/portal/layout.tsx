import React from "react";
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import {
  LayoutDashboard,
  FolderGit2,
  FileCheck,
  Receipt,
  MessageSquare,
  LifeBuoy,
  Video,
  ShieldAlert,
  Sparkles,
  Users,
  Settings,
  LogOut,
  Bell,
  Search,
} from "lucide-react";

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-warm-100/70 text-navy-dark">
      {/* Portal Sidebar */}
      <aside className="w-64 shrink-0 border-r border-navy-100 bg-white flex flex-col justify-between hidden md:flex">
        <div className="p-4 space-y-6">
          <Logo />

          <div className="rounded-lg bg-navy-50 p-3 border border-navy-100">
            <span className="text-[10px] uppercase tracking-wider text-navy-500 font-bold block">
              Active Enterprise
            </span>
            <p className="text-xs font-bold text-navy-900 mt-0.5 truncate">
              Apex Precision Engineering Pvt Ltd
            </p>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span className="text-[10px] text-emerald-800 font-medium">Stage: DPR & CMA Review</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1 text-xs font-semibold">
            <p className="px-3 text-[10px] font-bold text-navy-400 uppercase tracking-wider mb-2">
              Client Advisory Desk
            </p>
            <Link
              href="/portal/client"
              className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-navy-800 hover:bg-warm-100 hover:text-gold-dark transition-all"
            >
              <LayoutDashboard className="h-4 w-4 text-navy-500" />
              <span>Dashboard (5 Answers)</span>
            </Link>
            <Link
              href="/portal/client/projects"
              className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-navy-800 hover:bg-warm-100 hover:text-gold-dark transition-all"
            >
              <FolderGit2 className="h-4 w-4 text-navy-500" />
              <span>14-Stage Project Tracker</span>
            </Link>
            <Link
              href="/portal/client/documents"
              className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-navy-800 hover:bg-warm-100 hover:text-gold-dark transition-all"
            >
              <FileCheck className="h-4 w-4 text-navy-500" />
              <span>Secure Document Centre</span>
            </Link>
            <Link
              href="/portal/client/invoices"
              className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-navy-800 hover:bg-warm-100 hover:text-gold-dark transition-all"
            >
              <Receipt className="h-4 w-4 text-navy-500" />
              <span>Invoices & Razorpay</span>
            </Link>
            <Link
              href="/portal/client/messages"
              className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-navy-800 hover:bg-warm-100 hover:text-gold-dark transition-all"
            >
              <MessageSquare className="h-4 w-4 text-navy-500" />
              <span>Advisor Messages</span>
            </Link>
            <Link
              href="/portal/client/tickets"
              className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-navy-800 hover:bg-warm-100 hover:text-gold-dark transition-all"
            >
              <LifeBuoy className="h-4 w-4 text-navy-500" />
              <span>Support & Queries</span>
            </Link>

            <p className="px-3 text-[10px] font-bold text-navy-400 uppercase tracking-wider mb-2 pt-4">
              Management & Admin
            </p>
            <Link
              href="/portal/admin"
              className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-navy-800 hover:bg-warm-100 hover:text-gold-dark transition-all"
            >
              <ShieldAlert className="h-4 w-4 text-gold-dark" />
              <span>Admin & Advisor Control</span>
            </Link>
            <Link
              href="/portal/admin/audit-logs"
              className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-navy-800 hover:bg-warm-100 hover:text-gold-dark transition-all"
            >
              <Settings className="h-4 w-4 text-navy-500" />
              <span>Immutable Audit Logs</span>
            </Link>
            <Link
              href="/portal/admin/ca-partners"
              className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-navy-800 hover:bg-warm-100 hover:text-gold-dark transition-all"
            >
              <Users className="h-4 w-4 text-gold" />
              <span>CA SaaS Partner Network</span>
            </Link>
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-navy-100 space-y-2">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-navy text-white text-xs font-bold">
              RS
            </div>
            <div className="truncate">
              <p className="text-xs font-bold text-navy-900 truncate">Rajesh Sharma</p>
              <p className="text-[10px] text-navy-500">Managing Director</p>
            </div>
          </div>
          <Link
            href="/"
            className="flex items-center gap-2 text-[11px] font-semibold text-navy-600 hover:text-navy-900 pt-2"
          >
            <LogOut className="h-3.5 w-3.5" />
            <span>Return to Public Website</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="h-16 border-b border-navy-100 bg-white px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-dark bg-gold/10 px-2 py-0.5 rounded">
              Institutional Client Portal
            </span>
            <span className="text-xs text-navy-500 hidden sm:inline">
              Project ID: VS-2024-PRJ-089
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/portal/client/messages"
              className="relative p-2 rounded-lg border border-navy-100 text-navy-600 hover:bg-warm-50"
            >
              <Bell className="h-4 w-4" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-gold" />
            </Link>
            <div className="text-right">
              <p className="text-xs font-bold text-navy-900">Assigned Advisor</p>
              <p className="text-[11px] text-gold-dark font-medium">Vikram Singhania (VP, Credit)</p>
            </div>
          </div>
        </header>

        {/* Content Body */}
        <div className="flex-1 p-6 sm:p-8 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
