export interface TicketSummary {
  id: string;
  ticketNumber: string;
  subject: string;
  priority: "LOW" | "MEDIUM" | "HIGH" | "URGENT";
  status: "OPEN" | "IN_PROGRESS" | "RESOLVED";
  assignedTo: string;
}
