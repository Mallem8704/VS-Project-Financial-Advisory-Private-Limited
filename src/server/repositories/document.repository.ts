import { prisma } from "@/lib/db/prisma";
import { DocumentCategory, DocumentStatus } from "@prisma/client";

export class DocumentRepository {
  async findByProjectId(projectId: string) {
    return prisma.document.findMany({
      where: { projectId },
      orderBy: { createdAt: "asc" },
    });
  }

  async create(data: {
    projectId: string;
    category: DocumentCategory;
    title: string;
    fileName: string;
    fileKey: string;
    fileSize: number;
    mimeType: string;
    uploadedByUserId?: string;
  }) {
    return prisma.document.create({
      data: {
        ...data,
        status: "UNDER_REVIEW",
      },
    });
  }

  async updateVerification(
    documentId: string,
    status: DocumentStatus,
    verifiedByUserId: string,
    rejectionRemarks?: string
  ) {
    return prisma.document.update({
      where: { id: documentId },
      data: {
        status,
        verifiedByUserId,
        verifiedAt: new Date(),
        rejectionRemarks: status === "REJECTED" ? rejectionRemarks : null,
      },
    });
  }
}

export const documentRepository = new DocumentRepository();
