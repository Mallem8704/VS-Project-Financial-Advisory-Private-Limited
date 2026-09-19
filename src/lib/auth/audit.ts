import { prisma } from '@/lib/db/prisma';

export const AUDIT_ACTIONS = {
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILED: 'LOGIN_FAILED',
  LOGOUT: 'LOGOUT',
  PASSWORD_RESET_REQUESTED: 'PASSWORD_RESET_REQUESTED',
  PASSWORD_RESET_COMPLETED: 'PASSWORD_RESET_COMPLETED',
  USER_ROLE_CHANGED: 'USER_ROLE_CHANGED',
  SENSITIVE_DOCUMENT_ACCESSED: 'SENSITIVE_DOCUMENT_ACCESSED',
  ACCOUNT_LOCKED: 'ACCOUNT_LOCKED',
  MFA_ENABLED: 'MFA_ENABLED',
  MFA_CHALLENGE_FAILED: 'MFA_CHALLENGE_FAILED',
} as const;

export type AuditAction = (typeof AUDIT_ACTIONS)[keyof typeof AUDIT_ACTIONS] | string;

export interface AuditLogInput {
  actorId: string;
  actorEmail: string;
  actorRole: string;
  action: AuditAction;
  resource: string;
  resourceId?: string | null;
  ipAddress?: string | null;
  userAgent?: string | null;
  metadata?: Record<string, unknown> | null;
}

export interface InMemAuditRecord extends AuditLogInput {
  id: string;
  metadataJson: string | null;
  createdAt: Date;
}

// In-memory buffer for real-time memory fallback
const inMemoryAuditBuffer: InMemAuditRecord[] = [];
const MAX_BUFFER = 500;

export async function logAuditEvent(input: AuditLogInput): Promise<InMemAuditRecord> {
  const metadataJson = input.metadata ? JSON.stringify(input.metadata) : null;
  const record: InMemAuditRecord = {
    id: 'audit-' + Date.now() + '-' + Math.random().toString(36).substring(2, 7),
    ...input,
    metadataJson,
    createdAt: new Date(),
  };

  inMemoryAuditBuffer.unshift(record);
  if (inMemoryAuditBuffer.length > MAX_BUFFER) {
    inMemoryAuditBuffer.pop();
  }

  // Attempt database persistence if prisma is connected
  try {
    if (process.env.DATABASE_URL && prisma && prisma.auditLog) {
      await prisma.auditLog.create({
        data: {
          actorId: input.actorId,
          actorEmail: input.actorEmail,
          actorRole: input.actorRole,
          action: input.action,
          resource: input.resource,
          resourceId: input.resourceId || null,
          ipAddress: input.ipAddress || null,
          userAgent: input.userAgent || null,
          metadataJson,
        },
      });
    }
  } catch (err) {
    // Database connection silent catch in dev/test/build
    console.warn('[AuditLog] DB write fallback to memory buffer:', (err as Error).message);
  }

  return record;
}

export function getRecentAuditLogs(limit = 50): InMemAuditRecord[] {
  return inMemoryAuditBuffer.slice(0, limit);
}
