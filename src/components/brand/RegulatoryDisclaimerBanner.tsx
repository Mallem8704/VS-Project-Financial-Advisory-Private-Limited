import React from "react";
import { ShieldAlert, Info } from "lucide-react";
import { REGULATORY_DISCLAIMERS } from "@/lib/utils";

interface DisclaimerProps {
  type?: "info" | "warning";
  className?: string;
  customText?: string;
}

export function RegulatoryDisclaimerBanner({
  type = "info",
  className = "",
  customText,
}: DisclaimerProps) {
  const Icon = type === "warning" ? ShieldAlert : Info;

  return (
    <div
      role="note"
      className={`rounded-lg border p-4 text-xs leading-relaxed transition-all ${
        type === "warning"
          ? "border-amber-200 bg-amber-50/80 text-amber-900"
          : "border-navy-100 bg-navy-50/70 text-navy-800"
      } ${className}`}
    >
      <div className="flex items-start gap-3">
        <Icon className={`mt-0.5 h-4 w-4 shrink-0 ${type === "warning" ? "text-amber-700" : "text-navy-700"}`} />
        <div className="space-y-1">
          <p className="font-semibold tracking-wide uppercase text-[10px]">
            Statutory & Regulatory Notice
          </p>
          <p>
            {customText || REGULATORY_DISCLAIMERS.INDICATIVE_ELIGIBILITY}{" "}
            {REGULATORY_DISCLAIMERS.NO_GUARANTEE}{" "}
            <span className="font-medium">{REGULATORY_DISCLAIMERS.DISCRETION}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
