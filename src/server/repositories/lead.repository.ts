import { prisma } from "@/lib/db/prisma";
import { LeadStatus } from "@prisma/client";

export class LeadRepository {
  async findAll() {
    return prisma.lead.findMany({
      orderBy: { createdAt: "desc" },
    });
  }

  async create(data: {
    fullName: string;
    email: string;
    phone: string;
    businessName: string;
    industry: string;
    estimatedLoanAmount?: number;
    loanType?: string;
    notes?: string;
  }) {
    return prisma.lead.create({
      data: {
        ...data,
        status: "NEW",
        source: "WEBSITE_INTAKE",
      },
    });
  }

  async updateStatus(leadId: string, status: LeadStatus, assignedAdvisorName?: string) {
    return prisma.lead.update({
      where: { id: leadId },
      data: {
        status,
        ...(assignedAdvisorName ? { assignedAdvisorName } : {}),
      },
    });
  }
}

export const leadRepository = new LeadRepository();
