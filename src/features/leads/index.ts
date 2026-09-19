export * from "@/server/repositories/lead.repository";
export interface LeadSummary {
  id: string;
  name: string;
  businessName: string;
  loanAmount: string;
  status: string;
}
