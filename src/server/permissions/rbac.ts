import { UserRole } from "@/types";

export type Permission =
  // Clients
  | "clients.view"
  | "clients.create"
  | "clients.update"
  | "clients.delete"
  // Projects
  | "projects.view"
  | "projects.create"
  | "projects.update"
  | "projects.delete"
  | "projects.assign"
  // Documents
  | "documents.view"
  | "documents.upload"
  | "documents.review"
  | "documents.verify"
  | "documents.delete"
  | "documents.download_sensitive"
  // DPR Engine
  | "dpr.view"
  | "dpr.create"
  | "dpr.update"
  | "dpr.review"
  | "dpr.export"
  // CMA Engine
  | "cma.view"
  | "cma.create"
  | "cma.calculate"
  | "cma.review"
  | "cma.export"
  // Knowledge CMS
  | "knowledge.view"
  | "knowledge.create"
  | "knowledge.update"
  | "knowledge.publish"
  | "knowledge.delete"
  // Payments & Invoices
  | "payments.view"
  | "payments.create"
  | "payments.manage"
  | "invoices.view"
  | "invoices.create"
  | "invoices.pay"
  // Leads CRM
  | "leads.view"
  | "leads.create"
  | "leads.manage"
  // Users & Staff
  | "users.view"
  | "users.manage"
  | "users.roles"
  // Audit Trail
  | "audit.view"
  | "audit.export"
  // System Settings
  | "settings.view"
  | "settings.manage"
  // Legacy colon-notation aliases for backward compatibility
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

export const ALL_PERMISSIONS: Permission[] = [
  "clients.view",
  "clients.create",
  "clients.update",
  "clients.delete",
  "projects.view",
  "projects.create",
  "projects.update",
  "projects.delete",
  "projects.assign",
  "documents.view",
  "documents.upload",
  "documents.review",
  "documents.verify",
  "documents.delete",
  "documents.download_sensitive",
  "dpr.view",
  "dpr.create",
  "dpr.update",
  "dpr.review",
  "dpr.export",
  "cma.view",
  "cma.create",
  "cma.calculate",
  "cma.review",
  "cma.export",
  "knowledge.view",
  "knowledge.create",
  "knowledge.update",
  "knowledge.publish",
  "knowledge.delete",
  "payments.view",
  "payments.create",
  "payments.manage",
  "invoices.view",
  "invoices.create",
  "invoices.pay",
  "leads.view",
  "leads.create",
  "leads.manage",
  "users.view",
  "users.manage",
  "users.roles",
  "audit.view",
  "audit.export",
  "settings.view",
  "settings.manage",
];

const ROLE_PERMISSIONS: Record<UserRole, Permission[]> = {
  SUPER_ADMIN: [...ALL_PERMISSIONS],

  DIRECTOR: [
    "clients.view",
    "projects.view",
    "projects.update",
    "documents.view",
    "documents.review",
    "documents.verify",
    "documents.download_sensitive",
    "dpr.view",
    "dpr.review",
    "dpr.export",
    "cma.view",
    "cma.review",
    "cma.export",
    "knowledge.view",
    "knowledge.publish",
    "payments.view",
    "invoices.view",
    "leads.view",
    "users.view",
    "audit.view",
    "audit.export",
    "settings.view",
  ],

  ADMIN: [
    "clients.view",
    "clients.create",
    "clients.update",
    "clients.delete",
    "projects.view",
    "projects.create",
    "projects.update",
    "projects.assign",
    "documents.view",
    "documents.upload",
    "documents.review",
    "documents.verify",
    "documents.delete",
    "documents.download_sensitive",
    "dpr.view",
    "dpr.create",
    "dpr.update",
    "dpr.review",
    "dpr.export",
    "cma.view",
    "cma.create",
    "cma.calculate",
    "cma.review",
    "cma.export",
    "knowledge.view",
    "knowledge.create",
    "knowledge.update",
    "knowledge.publish",
    "payments.view",
    "payments.create",
    "payments.manage",
    "invoices.view",
    "invoices.create",
    "leads.view",
    "leads.create",
    "leads.manage",
    "users.view",
    "users.manage",
    "audit.view",
    "settings.view",
  ],

  ADVISOR: [
    "clients.view",
    "projects.view",
    "projects.update",
    "documents.view",
    "documents.upload",
    "documents.review",
    "documents.verify",
    "documents.download_sensitive",
    "dpr.view",
    "dpr.create",
    "dpr.update",
    "dpr.review",
    "dpr.export",
    "cma.view",
    "cma.create",
    "cma.calculate",
    "cma.review",
    "cma.export",
    "leads.view",
    "leads.manage",
    "invoices.view",
    "knowledge.view",
  ],

  FINANCIAL_ANALYST: [
    "clients.view",
    "projects.view",
    "documents.view",
    "documents.review",
    "dpr.view",
    "dpr.create",
    "dpr.update",
    "dpr.export",
    "cma.view",
    "cma.create",
    "cma.calculate",
    "cma.review",
    "cma.export",
    "knowledge.view",
  ],

  DOCUMENT_EXECUTIVE: [
    "clients.view",
    "projects.view",
    "documents.view",
    "documents.upload",
    "documents.review",
    "documents.verify",
    "documents.download_sensitive",
    "knowledge.view",
  ],

  RELATIONSHIP_MANAGER: [
    "clients.view",
    "clients.create",
    "clients.update",
    "projects.view",
    "leads.view",
    "leads.create",
    "leads.manage",
    "payments.view",
    "invoices.view",
    "knowledge.view",
  ],

  CONTENT_MANAGER: [
    "knowledge.view",
    "knowledge.create",
    "knowledge.update",
    "knowledge.publish",
    "knowledge.delete",
    "settings.view",
  ],

  SUPPORT: [
    "clients.view",
    "projects.view",
    "knowledge.view",
    "settings.view",
  ],

  CLIENT: [
    "projects.view",
    "documents.view",
    "documents.upload",
    "dpr.view",
    "cma.view",
    "payments.view",
    "invoices.view",
    "invoices.pay",
    "knowledge.view",
  ],

  // Legacy compatibility mappings
  LEAD_ADVISOR: [
    "clients.view",
    "projects.view",
    "projects.update",
    "documents.view",
    "documents.upload",
    "documents.review",
    "documents.verify",
    "documents.download_sensitive",
    "dpr.view",
    "dpr.create",
    "dpr.update",
    "dpr.review",
    "dpr.export",
    "cma.view",
    "cma.create",
    "cma.calculate",
    "cma.review",
    "cma.export",
    "leads.view",
    "leads.manage",
    "invoices.view",
    "knowledge.view",
  ],
  ANALYST: [
    "clients.view",
    "projects.view",
    "documents.view",
    "documents.review",
    "dpr.view",
    "dpr.create",
    "dpr.update",
    "dpr.export",
    "cma.view",
    "cma.create",
    "cma.calculate",
    "cma.review",
    "cma.export",
    "knowledge.view",
  ],
  PARTNER_CA: [
    "clients.view",
    "projects.view",
    "projects.update",
    "documents.view",
    "documents.upload",
    "documents.review",
    "documents.verify",
    "documents.download_sensitive",
    "dpr.view",
    "dpr.create",
    "dpr.update",
    "dpr.review",
    "dpr.export",
    "cma.view",
    "cma.create",
    "cma.calculate",
    "cma.review",
    "cma.export",
    "leads.view",
    "invoices.view",
    "knowledge.view",
  ],
};

// Canonical mapping for legacy colon-separated strings
const LEGACY_ALIASES: Record<string, Permission> = {
  "projects:read": "projects.view",
  "projects:write": "projects.update",
  "projects:delete": "projects.delete",
  "documents:upload": "documents.upload",
  "documents:verify": "documents.verify",
  "documents:delete": "documents.delete",
  "dpr:generate": "dpr.create",
  "cma:calculate": "cma.calculate",
  "invoices:create": "invoices.create",
  "invoices:pay": "invoices.pay",
  "leads:manage": "leads.manage",
  "audit:view": "audit.view",
  "cms:manage": "knowledge.publish",
  "users:manage": "users.manage",
};

export function getRolePermissions(role: UserRole): Permission[] {
  return ROLE_PERMISSIONS[role] || [];
}

export function hasPermission(role: UserRole, permission: Permission | string): boolean {
  if (role === "SUPER_ADMIN") return true;

  const canonicalPerm: Permission = (LEGACY_ALIASES[permission] || permission) as Permission;
  const permissions = ROLE_PERMISSIONS[role] || [];
  
  if (permissions.includes(canonicalPerm)) return true;

  // Wildcard check e.g. "clients.*"
  const [resource] = canonicalPerm.split(".");
  if (resource && permissions.includes(`${resource}.manage` as Permission)) {
    return true;
  }

  return false;
}

export function hasAnyPermission(role: UserRole, permissions: (Permission | string)[]): boolean {
  return permissions.some((perm) => hasPermission(role, perm));
}

export function hasAllPermissions(role: UserRole, permissions: (Permission | string)[]): boolean {
  return permissions.every((perm) => hasPermission(role, perm));
}

