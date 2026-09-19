"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export interface DashboardShellProps {
  sidebar: React.ReactNode;
  topbar?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export function DashboardShell({
  sidebar,
  topbar,
  children,
  className,
}: DashboardShellProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className={cn("min-h-screen bg-background flex flex-col md:flex-row", className)}>
      {/* Mobile Top Header */}
      <div className="md:hidden flex items-center justify-between border-b border-border bg-surface px-4 py-3 sticky top-0 z-40">
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg p-1.5 text-navy-dark hover:bg-navy-50"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
        <div className="font-bold text-xs text-navy-dark">VS Advisory Portal</div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-navy-dark/60 backdrop-blur-xs"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative w-64 max-w-[80vw] bg-surface h-full shadow-2xl p-4 overflow-y-auto border-r border-border">
            <div className="flex justify-end mb-4">
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="p-1 rounded text-navy-500 hover:bg-navy-50"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            {sidebar}
          </div>
        </div>
      )}

      {/* Desktop Persistent Sidebar */}
      <aside className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 border-r border-border bg-surface z-30">
        <div className="flex-1 flex flex-col min-h-0 overflow-y-auto p-4">
          {sidebar}
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 md:pl-64 flex flex-col min-w-0">
        {topbar && (
          <header className="sticky top-0 z-20 border-b border-border bg-surface/90 backdrop-blur-sm">
            {topbar}
          </header>
        )}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
