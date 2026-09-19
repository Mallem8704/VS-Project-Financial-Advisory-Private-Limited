import { prisma } from "@/lib/db/prisma";
import { Project, ProjectStage, ProjectStatus } from "@prisma/client";

export class ProjectRepository {
  async findById(id: string) {
    return prisma.project.findUnique({
      where: { id },
      include: {
        company: true,
        client: true,
        leadAdvisor: true,
        milestones: { orderBy: { orderIndex: "asc" } },
        documents: true,
        invoices: true,
      },
    });
  }

  async findByClientId(clientId: string) {
    return prisma.project.findMany({
      where: { clientId },
      include: {
        company: true,
        milestones: { orderBy: { orderIndex: "asc" } },
      },
      orderBy: { updatedAt: "desc" },
    });
  }

  async findAllActive() {
    return prisma.project.findMany({
      include: {
        company: true,
        client: true,
        leadAdvisor: true,
      },
      orderBy: { updatedAt: "desc" },
    });
  }

  async updateStage(projectId: string, stage: ProjectStage, status?: ProjectStatus) {
    return prisma.project.update({
      where: { id: projectId },
      data: {
        currentStage: stage,
        ...(status ? { status } : {}),
      },
    });
  }
}

export const projectRepository = new ProjectRepository();
