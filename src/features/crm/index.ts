export * from "@/server/repositories/lead.repository";
export interface CrmPipelineStage {
  stage: "NEW" | "CONTACTED" | "QUALIFIED" | "PROPOSAL_SENT" | "CONVERTED" | "CLOSED";
  count: number;
}
