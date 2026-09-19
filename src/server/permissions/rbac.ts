import { UserRole } from "@/types";

export type Permission =
  | "projects:read"
  | "projects:write"
  | "projects:delete"
  | "documents:upload"
  | "documents:verify"
  | "documents:delete"
  | "dpr:generate"
  | "cma:calculate"
  | "invoices:create"
  | "invoices:pay"
  | "leads:manage"
  | "audit:view"
  | "cms:manage"
  | "users:manage";

const ROLE_PERMISSIONS: Record<UserRole, Permission[]> = {
  SUPER_ADMIN: [
    "projects:read",
    "projects:write",
    "projects:delete",
    "documents:upload",
    "documents:verify",
    "documents:delete",
    "dpr:generate",
    "cma:calculate",
    "invoices:create",
    "invoices:pay",
    "leads:manage",
    "audit:view",
    "cms:manage",
    "users:manage",
  ],
  ADMIN: [
    "projects:read",
    "projects:write",
    "documents:upload",
    "documents:verify",
    "dpr:generate",
    "cma:calculate",
    "invoices:create",
    "leads:manage",
    "audit:view",
    "cms:manage",
  ],
  LEAD_ADVISOR: [
    "projects:read",
    "projects:write",
    "documents:upload",
    "documents:verify",
    "dpr:generate",
    "cma:calculate",
    "leads:manage",
  ],
  ANALYST: [
    "projects:read",
    "documents:upload",
    "dpr:generate",
    "cma:calculate",
  ],
  CLIENT: [
    "projects:read",
    "documents:upload",
    "invoices:pay",
  ],
  PARTNER_CA: [
    "projects:read",
    "projects:write",
    "documents:upload",
    "dpr:generate",
    "cma:calculate",
  ],
};

export function hasPermission(role: UserRole, permission: Permission): boolean {
  const permissions = ROLE_PERMISSIONS[role] || [];
  return permissions.includes(permission);
}
