import { prisma } from "@/lib/db/prisma";

export interface LogAuditParams {
  actorId: string;
  actorEmail: string;
  actorRole: string;
  action: string;
  resource: string;
  resourceId?: string;
  ipAddress?: string;
  userAgent?: string;
  metadata?: Record<string, unknown>;
}

export async function logAuditEvent(params: LogAuditParams): Promise<void> {
  try {
    await prisma.auditLog.create({
      data: {
        actorId: params.actorId,
        actorEmail: params.actorEmail,
        actorRole: params.actorRole,
        action: params.action,
        resource: params.resource,
        resourceId: params.resourceId,
        ipAddress: params.ipAddress,
        userAgent: params.userAgent,
        metadataJson: params.metadata ? JSON.stringify(params.metadata) : null,
      },
    });
  } catch (error) {
    console.error("Failed to persist audit log:", error);
    // In production, fallback to structured console or secondary stream so audit is never lost
  }
}
