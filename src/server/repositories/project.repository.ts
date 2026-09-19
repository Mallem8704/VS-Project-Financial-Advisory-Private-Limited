import { prisma } from "@/lib/db/prisma";
import { Project, ProjectStageType, ProjectStatus } from "@prisma/client";

export class ProjectRepository {
  async findById(id: string) {
    return prisma.project.findUnique({
      where: { id },
      include: {
        organization: true,
        client: true,
        assignedAdvisor: true,
        stages: { orderBy: { orderIndex: "asc" } },
        projectTasks: { orderBy: { dueDate: "asc" } },
        applications: { include: { institution: true } },
        documents: true,
        invoices: true,
      },
    });
  }

  async findByClientId(clientId: string) {
    return prisma.project.findMany({
      where: { clientId },
      include: {
        organization: true,
        assignedAdvisor: true,
        stages: { orderBy: { orderIndex: "asc" } },
      },
      orderBy: { updatedAt: "desc" },
    });
  }

  async findAllActive() {
    return prisma.project.findMany({
      include: {
        organization: true,
        client: true,
        assignedAdvisor: true,
      },
      orderBy: { updatedAt: "desc" },
    });
  }

  async updateStage(projectId: string, stage: ProjectStageType, status?: ProjectStatus) {
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
