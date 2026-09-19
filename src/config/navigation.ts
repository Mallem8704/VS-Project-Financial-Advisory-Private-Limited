export interface NavItem {
  title: string;
  href: string;
  description?: string;
  icon?: string;
  badge?: string;
}

export const publicNavigation = {
  main: [
    { title: "14-Stage Journey", href: "/#journey" },
    { title: "Services", href: "/services" },
    { title: "Industries", href: "/industries" },
    { title: "Knowledge Hub", href: "/knowledge" },
    { title: "Readiness Score", href: "/finance-readiness" },
    { title: "Tools & Calculators", href: "/tools" },
  ],
  services: [
    { title: "Project Finance Syndication", href: "/project-finance" },
    { title: "Bankable DPR Preparation", href: "/dpr" },
    { title: "CMA Data Preparation", href: "/cma" },
    { title: "Financial Modelling & DCF", href: "/services/financial-modelling" },
    { title: "MSME Strategic Advisory", href: "/services/msme-advisory" },
    { title: "Government Schemes & Subsidies", href: "/services/government-schemes" },
    { title: "Registrations & Compliance", href: "/services/compliance" },
  ],
};

export const clientNavigation = [
  { title: "Dashboard", href: "/portal/dashboard", icon: "LayoutDashboard" },
  { title: "14-Stage Tracker", href: "/portal/projects", icon: "FolderGit2" },
  { title: "Secure Documents", href: "/portal/documents", icon: "FileCheck" },
  { title: "DPR & CMA Reports", href: "/portal/reports", icon: "FileText" },
  { title: "Invoices & Payments", href: "/portal/invoices", icon: "Receipt" },
  { title: "Advisor Messages", href: "/portal/messages", icon: "MessageSquare" },
  { title: "Support Tickets", href: "/portal/tickets", icon: "LifeBuoy" },
  { title: "Consultation Meetings", href: "/portal/meetings", icon: "Video" },
  { title: "Enterprise Profile", href: "/portal/profile", icon: "Building" },
];

export const adminNavigation = [
  { title: "Admin Overview", href: "/admin/dashboard", icon: "LayoutDashboard" },
  { title: "Lead Inquiries (CRM)", href: "/admin/leads", icon: "Users" },
  { title: "Client Directory", href: "/admin/clients", icon: "Building" },
  { title: "Advisory Projects", href: "/admin/projects", icon: "FolderGit2" },
  { title: "Document Vault", href: "/admin/documents", icon: "FileCheck" },
  { title: "DPR Workspaces", href: "/admin/dpr", icon: "FileText" },
  { title: "CMA Workspaces", href: "/admin/cma", icon: "FileSpreadsheet" },
  { title: "Finance & Underwriting", href: "/admin/finance", icon: "TrendingUp" },
  { title: "Consultations", href: "/admin/consultations", icon: "Calendar" },
  { title: "Invoices", href: "/admin/invoices", icon: "Receipt" },
  { title: "Payments & Settlement", href: "/admin/payments", icon: "CreditCard" },
  { title: "Knowledge CMS", href: "/admin/knowledge", icon: "BookOpen" },
  { title: "Industry Verticals", href: "/admin/industries", icon: "Factory" },
  { title: "Staff & User Roles", href: "/admin/users", icon: "UserCheck" },
  { title: "System Settings", href: "/admin/settings", icon: "Settings" },
  { title: "Audit Trail", href: "/admin/audit", icon: "ShieldCheck" },
];
