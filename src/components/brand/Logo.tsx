import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "light" | "dark";
  showTagline?: boolean;
  className?: string;
}

export function Logo({ variant = "dark", showTagline = true, className = "" }: LogoProps) {
  const isLight = variant === "light";

  return (
    <Link
      href="/"
      className={`group flex items-center gap-3 select-none ${className}`}
      aria-label="VS Project & Financial Advisory Private Limited - Home"
    >
      {/* Brand Logo Image */}
      <div
        className={`relative flex items-center justify-center rounded-lg transition-transform duration-200 group-hover:scale-105 ${
          isLight ? "bg-white/95 p-1 border border-gold/40 shadow-sm" : ""
        }`}
      >
        <Image
          src="/images/vs-logo.png"
          alt="VS Project and Financial Advisory Logo"
          width={180}
          height={56}
          className="h-10 sm:h-12 w-auto object-contain"
          priority
        />
      </div>

      {showTagline && (
        <div className="hidden xl:flex flex-col justify-center border-l border-border pl-3">
          <span
            className={`text-[10px] font-bold tracking-wider uppercase font-sans ${
              isLight ? "text-gold-light" : "text-navy-900"
            }`}
          >
            MSME Project Finance
          </span>
          <span
            className={`text-[9px] tracking-tight leading-tight ${
              isLight ? "text-warm-300" : "text-navy-500"
            }`}
          >
            From Idea to Bank Sanction
          </span>
        </div>
      )}
    </Link>
  );
}
