"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/brand/Logo";
import {
  LayoutDashboard,
  FolderGit2,
  FileCheck2,
  FileSpreadsheet,
  FileText,
  Building2,
  Receipt,
  MessageSquare,
  Video,
  LifeBuoy,
  Bell,
  User,
  Home,
  Briefcase,
  Layers,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { SignOutButton } from "@/components/auth/SignOutButton";

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const sidebarNavItems = [
    { href: "/portal/dashboard", label: "Overview", icon: LayoutDashboard },
    { href: "/portal/projects", label: "My Projects", icon: FolderGit2 },
    { href: "/portal/documents", label: "Documents", icon: FileCheck2 },
    { href: "/portal/reports?tab=dpr_cma", label: "DPR & CMA", icon: FileSpreadsheet },
    { href: "/portal/reports", label: "Reports", icon: FileText },
    { href: "/portal/applications", label: "Applications", icon: Building2 },
    { href: "/portal/invoices", label: "Invoices & Payments", icon: Receipt },
    { href: "/portal/messages", label: "Messages", icon: MessageSquare },
    { href: "/portal/meetings", label: "Meetings", icon: Video },
    { href: "/portal/tickets", label: "Support", icon: LifeBuoy },
    { href: "/portal/notifications", label: "Notifications", icon: Bell },
    { href: "/portal/profile", label: "Profile", icon: User },
  ];

  const mobileBottomNavItems = [
    { href: "/portal/dashboard", label: "Home", icon: Home },
    { href: "/portal/projects", label: "Project", icon: Briefcase },
    { href: "/portal/documents", label: "Documents", icon: FileCheck2 },
    { href: "/portal/messages", label: "Messages", icon: MessageSquare },
    { href: "/portal/profile", label: "Profile", icon: User },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50 text-navy-dark">
      {/* Desktop Portal Sidebar */}
      <aside className="w-64 shrink-0 border-r border-navy-100 bg-white flex flex-col justify-between hidden md:flex">
        <div className="p-4 space-y-5 overflow-y-auto">
          <div className="px-2 pt-1">
            <Logo />
          </div>

          {/* Active Enterprise Header Card */}
          <div className="rounded-xl bg-navy/5 p-3.5 border border-navy-100">
            <span className="text-[10px] uppercase tracking-wider text-navy-500 font-bold block">
              Active Enterprise
            </span>
            <p className="text-xs font-bold text-navy-dark mt-0.5 truncate">
              Apex Precision Agro & Engineering Pvt Ltd
            </p>
            <div className="flex items-center gap-1.5 mt-1.5">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] text-emerald-800 font-medium">Stage 4: DPR & CMA Review</span>
            </div>
          </div>

          {/* 12 Core Sidebar Navigation Links */}
          <nav className="space-y-0.5 text-xs font-semibold">
            <p className="px-3 text-[10px] font-bold text-navy-400 uppercase tracking-wider mb-2">
              Client Portal
            </p>
            {sidebarNavItems.map((item) => {
              const Icon = item.icon;
              const isActive =
                item.href === "/portal/dashboard"
                  ? pathname === "/portal/dashboard" || pathname === "/portal"
                  : pathname.startsWith(item.href.split("?")[0]);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-2.5 rounded-xl px-3 py-2 transition-all ${
                    isActive
                      ? "bg-navy text-white font-bold shadow-sm"
                      : "text-navy-700 hover:bg-slate-100 hover:text-navy-dark"
                  }`}
                >
                  <Icon
                    className={`h-4 w-4 shrink-0 ${
                      isActive ? "text-gold" : "text-navy-400"
                    }`}
                  />
                  <span className="truncate">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-navy-100 space-y-2.5 bg-white">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-navy text-gold text-xs font-bold shadow-sm">
              RG
            </div>
            <div className="truncate">
              <p className="text-xs font-bold text-navy-dark truncate">Ramesh Chandra Gupta</p>
              <p className="text-[10px] text-navy-500 truncate">Managing Director</p>
            </div>
          </div>
          <div className="pt-2 border-t border-navy-50 space-y-1">
            <SignOutButton />
            <Link
              href="/"
              className="flex items-center gap-1.5 text-[11px] font-medium text-navy-500 hover:text-navy-dark pt-0.5"
            >
              <span>Public Website</span>
              <ExternalLink className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 pb-16 md:pb-0">
        {/* Top Header */}
        <header className="h-16 border-b border-navy-100 bg-white px-4 sm:px-8 flex items-center justify-between sticky top-0 z-20 shadow-xs">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-gold-dark bg-gold/10 px-2.5 py-1 rounded-md border border-gold/20">
              VS Client Portal
            </span>
            <span className="text-xs text-navy-500 hidden sm:inline">
              Mandate: <strong className="text-navy-dark">#VS-2026-PRJ-0042</strong>
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href="/portal/notifications"
              className="relative p-2 rounded-xl border border-navy-100 text-navy-600 hover:bg-slate-50 transition-colors"
              title="Notifications"
            >
              <Bell className="h-4 w-4" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-gold animate-pulse" />
            </Link>

            <div className="text-right hidden sm:block">
              <p className="text-[11px] text-navy-400 font-medium">Assigned Lead Advisor</p>
              <p className="text-xs font-bold text-navy-dark">M. V. Rao (Ex-DGM SBI)</p>
            </div>
          </div>
        </header>

        {/* Page Content Body */}
        <main className="flex-1 p-4 sm:p-8 overflow-y-auto">{children}</main>
      </div>

      {/* Mobile Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-30 flex md:hidden items-center justify-around border-t border-navy-100 bg-white/95 backdrop-blur-md px-2 py-2 shadow-lg">
        {mobileBottomNavItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            item.href === "/portal/dashboard"
              ? pathname === "/portal/dashboard" || pathname === "/portal"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center gap-1 px-3 py-1 text-[10px] font-semibold transition-colors ${
                isActive ? "text-navy font-bold" : "text-navy-400 hover:text-navy"
              }`}
            >
              <div
                className={`flex h-7 w-7 items-center justify-center rounded-lg ${
                  isActive ? "bg-navy text-gold shadow-xs" : ""
                }`}
              >
                <Icon className="h-4 w-4" />
              </div>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
