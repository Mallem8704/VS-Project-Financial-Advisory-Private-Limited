import { projectRepository } from "../repositories/project.repository";
import { logAuditEvent } from "../audit/audit-logger";
import { ProjectStage, ProjectStatus } from "@prisma/client";

export class ProjectService {
  async getProjectDetails(projectId: string) {
    const project = await projectRepository.findById(projectId);
    if (!project) {
      throw new Error(`Project with ID ${projectId} not found`);
    }
    return project;
  }

  async advanceStage(
    projectId: string,
    newStage: ProjectStage,
    actor: { id: string; email: string; role: string }
  ) {
    const updated = await projectRepository.updateStage(projectId, newStage);
    await logAuditEvent({
      actorId: actor.id,
      actorEmail: actor.email,
      actorRole: actor.role,
      action: "PROJECT_STAGE_ADVANCED",
      resource: "Project",
      resourceId: projectId,
      metadata: { previousStage: updated.currentStage, newStage },
    });
    return updated;
  }
}

export const projectService = new ProjectService();
