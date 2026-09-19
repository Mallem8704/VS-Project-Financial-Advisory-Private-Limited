"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/brand/Logo";
import { adminNavigation } from "@/config/navigation";
import {
  LayoutDashboard,
  Users,
  Building,
  FolderGit2,
  FileCheck,
  FileText,
  FileSpreadsheet,
  TrendingUp,
  Calendar,
  Receipt,
  CreditCard,
  BookOpen,
  Factory,
  UserCheck,
  Settings,
  ShieldCheck,
  LogOut,
  Bell,
} from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  LayoutDashboard,
  Users,
  Building,
  FolderGit2,
  FileCheck,
  FileText,
  FileSpreadsheet,
  TrendingUp,
  Calendar,
  Receipt,
  CreditCard,
  BookOpen,
  Factory,
  UserCheck,
  Settings,
  ShieldCheck,
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [currentUser, setCurrentUser] = React.useState<{ fullName: string; role: string; email: string } | null>(null);

  React.useEffect(() => {
    fetch("/api/auth/me")
      .then((res) => res.json())
      .then((data) => {
        if (data.authenticated && data.user) {
          setCurrentUser(data.user);
        }
      })
      .catch(() => {});
  }, []);

  const handleSignOut = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
    } finally {
      window.location.href = "/login";
    }
  };

  return (
    <div className="flex min-h-screen bg-warm-100/70 text-navy-dark">
      {/* Admin Sidebar */}
      <aside className="w-64 shrink-0 border-r border-navy-100 bg-white flex flex-col justify-between hidden md:flex">
        <div className="p-4 space-y-5">
          <Logo />
          <div className="rounded-lg bg-navy p-3 text-white border border-navy-800">
            <span className="text-[10px] uppercase tracking-wider text-gold font-bold block">
              Management & Underwriting
            </span>
            <p className="text-xs font-bold text-white mt-0.5 truncate">
              {currentUser?.fullName || "Admin & Advisor Desk"}
            </p>
            <span className="inline-block mt-1 text-[9px] font-semibold bg-gold/20 text-gold-light px-2 py-0.5 rounded">
              Role: {currentUser?.role || "SUPER_ADMIN"}
            </span>
          </div>

          <nav className="space-y-0.5 text-xs font-semibold max-h-[calc(100vh-320px)] overflow-y-auto pr-1">
            {adminNavigation.map((item) => {
              const Icon = ICON_MAP[item.icon || "LayoutDashboard"] || LayoutDashboard;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2.5 rounded-lg px-3 py-2 transition-all ${
                    isActive
                      ? "bg-navy text-white shadow-sm"
                      : "text-navy-800 hover:bg-warm-100 hover:text-gold-dark"
                  }`}
                >
                  <Icon className={`h-4 w-4 ${isActive ? "text-gold" : "text-navy-500"}`} />
                  <span>{item.title}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="p-4 border-t border-navy-100 space-y-2">
          <button
            type="button"
            onClick={handleSignOut}
            className="w-full flex items-center gap-2 text-[11px] font-bold text-rose-600 hover:text-rose-800 px-2 py-1.5 rounded hover:bg-rose-50 transition-all text-left"
          >
            <LogOut className="h-3.5 w-3.5" />
            <span>Sign Out Workspace</span>
          </button>
          <Link
            href="/"
            className="flex items-center gap-2 text-[11px] font-semibold text-navy-600 hover:text-navy-900 px-2 py-1"
          >
            <span>Return to Public Site</span>
          </Link>
        </div>
      </aside>

      {/* Content Area */}
      <div className="flex-1 flex flex-col">
        <header className="h-16 border-b border-navy-100 bg-white px-6 flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-gold-dark bg-gold/10 px-2 py-0.5 rounded">
            Institutional Admin Operations Desk
          </span>
          <div className="flex items-center gap-3 text-xs">
            <span className="text-navy-500">System Time: 19 Sep 2026</span>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-navy text-gold font-bold">
              VS
            </div>
          </div>
        </header>

        <div className="flex-1 p-6 sm:p-8 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
