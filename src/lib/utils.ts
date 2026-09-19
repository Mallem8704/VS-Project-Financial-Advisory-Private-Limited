import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatINR(amount: number, options?: { inLakhs?: boolean; inCrores?: boolean }): string {
  if (options?.inCrores) {
    return `₹${(amount / 100).toFixed(2)} Cr`;
  }
  if (options?.inLakhs) {
    return `₹${amount.toFixed(2)} Lakhs`;
  }
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatPercentage(value: number, decimals: number = 2): string {
  return `${value.toFixed(decimals)}%`;
}

export const REGULATORY_DISCLAIMERS = {
  INDICATIVE_ELIGIBILITY: "Indicative eligibility only. Actual credit appraisal, loan amount, rate of interest, and sanction terms are subject to detailed lender assessment.",
  NO_GUARANTEE: "VS Project & Financial Advisory Private Limited provides professional project advisory, financial modelling, and document readiness services. We do not claim guaranteed bank sanction or guaranteed funding.",
  DISCRETION: "Approval is solely at the discretion of the relevant financial institution, bank, NBFC, or government subsidy authority.",
  FINANCE_READINESS: "The Finance Readiness Score is an analytical diagnostic tool based on self-declared parameters and does not constitute a formal loan sanction or credit commitment.",
};
