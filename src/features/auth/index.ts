import { UserRole } from "@/types";

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  phone?: string | null;
  isMfaEnabled?: boolean;
  emailVerified?: Date | string | null;
  companyName?: string | null;
}

export const AUTH_ROLES: readonly UserRole[] = [
  "SUPER_ADMIN",
  "DIRECTOR",
  "ADMIN",
  "ADVISOR",
  "FINANCIAL_ANALYST",
  "DOCUMENT_EXECUTIVE",
  "RELATIONSHIP_MANAGER",
  "CONTENT_MANAGER",
  "SUPPORT",
  "CLIENT",
  "LEAD_ADVISOR",
  "ANALYST",
  "PARTNER_CA",
] as const;

export const STAFF_ROLES: readonly UserRole[] = [
  "SUPER_ADMIN",
  "DIRECTOR",
  "ADMIN",
  "ADVISOR",
  "FINANCIAL_ANALYST",
  "DOCUMENT_EXECUTIVE",
  "RELATIONSHIP_MANAGER",
  "CONTENT_MANAGER",
  "SUPPORT",
  "LEAD_ADVISOR",
  "ANALYST",
  "PARTNER_CA",
] as const;
