export interface AuthUser {
  id: string;
  email: string;
  name: string;
  role: string;
}

export const AUTH_ROLES = ["SUPER_ADMIN", "ADMIN", "LEAD_ADVISOR", "ANALYST", "CLIENT", "PARTNER_CA"] as const;
