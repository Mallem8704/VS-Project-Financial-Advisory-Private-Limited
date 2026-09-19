import { NextRequest, NextResponse } from 'next/server';
import { requirePermission, canAccessDocument, handleAuthError } from '@/lib/auth/server-guard';
import { logAuditEvent, AUDIT_ACTIONS } from '@/lib/auth/audit';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || '127.0.0.1';
  const userAgent = req.headers.get('user-agent') || 'unknown';

  try {
    const { id } = await params;
    // Enforce permission: documents.view
    const user = await requirePermission('documents.view', req);

    // Mock document metadata check
    const mockDoc = {
      id,
      fileName: 'Audited_Financial_Statement_FY24.pdf',
      category: 'PAST_FINANCIALS_AUDITED',
      uploadedByUserId: 'usr-client',
      projectId: 'PRJ-089',
      isSensitive: true,
    };

    if (!canAccessDocument(user, mockDoc)) {
      return NextResponse.json(
        { success: false, error: 'Forbidden: You do not have authorization to view this client document.' },
        { status: 403 }
      );
    }

    // Record forensic audit event
    await logAuditEvent({
      actorId: user.sub,
      actorEmail: user.email,
      actorRole: user.role,
      action: AUDIT_ACTIONS.SENSITIVE_DOCUMENT_ACCESSED,
      resource: 'Document',
      resourceId: id,
      ipAddress: ip,
      userAgent,
      metadata: {
        documentName: mockDoc.fileName,
        category: mockDoc.category,
      },
    });

    return NextResponse.json({
      success: true,
      document: mockDoc,
      downloadUrl: '/api/documents/file?id=' + id,
      expiresIn: 300,
    });
  } catch (error) {
    return handleAuthError(error);
  }
}
