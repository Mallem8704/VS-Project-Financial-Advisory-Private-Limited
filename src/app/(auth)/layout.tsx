import React from "react";
import { Logo } from "@/components/brand/Logo";
import { ShieldCheck, Lock } from "lucide-react";
import Link from "next/link";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col justify-center items-center bg-warm py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-subtle-grid opacity-20 pointer-events-none" />
      <div className="w-full max-w-md space-y-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-2">
          <Logo />
          <div className="inline-flex items-center gap-1.5 text-[10px] font-bold text-gold-dark bg-gold/10 px-2.5 py-0.5 rounded border border-gold/30">
            <Lock className="h-3 w-3" />
            <span>Encrypted Institutional Portal Access</span>
          </div>
        </div>
        {children}
        <div className="text-center text-[11px] text-navy-500">
          <Link href="/" className="hover:text-gold-dark font-medium">
            ← Return to Public Advisory Website
          </Link>
        </div>
      </div>
    </div>
  );
}
