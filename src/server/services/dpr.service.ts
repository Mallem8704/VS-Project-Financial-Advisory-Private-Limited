import { aiGateway } from "@/lib/ai/gateway";
import { logAuditEvent } from "../audit/audit-logger";

export interface GenerateDprParams {
  projectId: string;
  projectTitle: string;
  industry: string;
  totalCostInLakhs: number;
  promoterProfile: string;
  targetMarket: string;
}

export class DprService {
  async generateExecutiveSummary(
    params: GenerateDprParams,
    actor?: { id: string; email: string; role: string }
  ) {
    const prompt = `Generate a bank-ready executive summary for a project finance proposal in India.
Industry: ${params.industry}
Project Title: ${params.projectTitle}
Total Project Cost: ₹${params.totalCostInLakhs} Lakhs
Promoter Background: ${params.promoterProfile}
Target Market: ${params.targetMarket}

Requirements:
- Emphasize debt service viability and promoter margin.
- Strictly adhere to RBI prudential lending guidelines.
- Never guarantee sanction; highlight indicative parameters.`;

    const response = await aiGateway.generateText(
      [{ role: "user", content: prompt }],
      {
        systemPrompt:
          "You are an institutional Credit Underwriting Lead and Chartered Accountant specializing in Indian MSME Project Finance.",
      }
    );

    if (actor) {
      await logAuditEvent({
        actorId: actor.id,
        actorEmail: actor.email,
        actorRole: actor.role,
        action: "AI_DPR_SUMMARY_GENERATED",
        resource: "DprWorkspace",
        resourceId: params.projectId,
        metadata: { provider: response.provider, model: response.model },
      });
    }

    return response.content;
  }
}

export const dprService = new DprService();
