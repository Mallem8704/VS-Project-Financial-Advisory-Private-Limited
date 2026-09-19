export interface InvoiceSummary {
  id: string;
  invoiceNumber: string;
  milestoneTitle: string;
  totalAmount: number;
  status: "PAID" | "ISSUED" | "DRAFT";
  dueDate: string;
}
