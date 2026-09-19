"use client";

import React, { useState } from "react";
import { LogOut } from "lucide-react";

interface SignOutButtonProps {
  className?: string;
  variant?: "minimal" | "sidebar" | "button";
}

export function SignOutButton({ className = "", variant = "sidebar" }: SignOutButtonProps) {
  const [isSigningOut, setIsSigningOut] = useState(false);

  const handleSignOut = async () => {
    setIsSigningOut(true);
    try {
      await fetch("/api/auth/logout", { method: "POST" });
    } finally {
      window.location.href = "/login";
    }
  };

  if (variant === "button") {
    return (
      <button
        type="button"
        onClick={handleSignOut}
        disabled={isSigningOut}
        className={`inline-flex items-center gap-2 rounded-lg bg-navy px-3.5 py-2 text-xs font-bold text-white hover:bg-navy-light disabled:opacity-50 ${className}`}
      >
        <LogOut className="h-3.5 w-3.5" />
        <span>{isSigningOut ? "Signing Out..." : "Sign Out"}</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleSignOut}
      disabled={isSigningOut}
      className={`flex items-center gap-2 text-[11px] font-bold text-rose-600 hover:text-rose-800 transition-all ${className}`}
    >
      <LogOut className="h-3.5 w-3.5" />
      <span>{isSigningOut ? "Signing Out..." : "Sign Out Workspace"}</span>
    </button>
  );
}

