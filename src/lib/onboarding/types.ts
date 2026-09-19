import { z } from "zod";

export const OnboardingPayloadSchema = z.object({
  // STEP 1: Personal / promoter details
  promoter: z.object({
    fullName: z.string().min(2, "Full name must be at least 2 characters"),
    email: z.string().email("Valid email address is required"),
    phone: z.string().min(10, "Valid 10-digit mobile number is required"),
    designation: z.string().min(2, "Designation / role is required"),
    netWorthBracket: z.enum([
      "BELOW_1_CR",
      "1_TO_5_CR",
      "5_TO_10_CR",
      "10_TO_25_CR",
      "ABOVE_25_CR",
    ]),
  }),

  // STEP 2: Business details
  business: z.object({
    legalName: z.string().min(2, "Business / enterprise name is required"),
    city: z.string().min(2, "City is required"),
    state: z.string().min(2, "State is required"),
    establishmentYear: z.string().min(4, "Establishment year or 'Proposed' is required"),
    activityDescription: z.string().min(10, "Please briefly describe your primary business activities"),
  }),

  // STEP 3: Business entity
  constitution: z.enum([
    "PROPRIETORSHIP",
    "PARTNERSHIP",
    "LLP",
    "PRIVATE_LIMITED",
    "PUBLIC_LIMITED",
    "TRUST_SOCIETY",
    "PROPOSED_NEW",
  ]),

  // STEP 4: Industry
  industry: z.string().min(2, "Industry selection is required"),

  // STEP 5: Existing or proposed business
  businessStatus: z.enum([
    "EXISTING_RUNNING",
    "GREENFIELD_PROPOSED",
    "BROWNFIELD_ACQUISITION",
  ]),

  // STEP 6: Project type
  projectType: z.enum([
    "NEW_BUSINESS",
    "EXPANSION",
    "MODERNIZATION",
    "MACHINERY",
    "WORKING_CAPITAL",
    "OTHER",
  ]),

  // STEP 7: Project cost (in ₹ Lakhs)
  projectCostInLakhs: z.number().positive("Project cost must be greater than 0"),
  costBreakdown: z.object({
    landAndCivilInLakhs: z.number().default(0),
    plantAndMachineryInLakhs: z.number().default(0),
    contingencyInLakhs: z.number().default(0),
    workingCapitalMarginInLakhs: z.number().default(0),
  }).optional(),

  // STEP 8: Finance requirement (in ₹ Lakhs)
  financeRequirementInLakhs: z.number().positive("Finance requirement must be greater than 0"),
  promoterContributionInLakhs: z.number().nonnegative("Promoter contribution cannot be negative"),
  preferredFacilities: z.array(z.string()).min(1, "Select at least one preferred loan facility"),

  // STEP 9: Current registrations
  registrations: z.array(z.string()).default([]),

  // STEP 10: Existing financial information
  financials: z.object({
    annualTurnoverInLakhs: z.number().nonnegative().default(0),
    profitMarginBand: z.enum(["NEGATIVE", "0_TO_5_PERCENT", "5_TO_10_PERCENT", "ABOVE_10_PERCENT", "PRE_REVENUE"]),
    existingDebtInLakhs: z.number().nonnegative().default(0),
    primaryBank: z.string().default("None / In Discussion"),
  }),

  // STEP 11: Document availability
  documentReadiness: z.record(z.enum(["AVAILABLE", "IN_PROGRESS", "NOT_AVAILABLE", "NOT_APPLICABLE"])),

  // STEP 12: Advisory requirement & consent
  advisoryServices: z.array(z.enum([
    "DPR",
    "CMA",
    "PROJECT_FINANCE",
    "COMPLIANCE",
    "SUBSIDY",
    "BUSINESS_ADVISORY",
    "OTHER",
  ])).min(1, "Please select at least one advisory requirement"),
  notes: z.string().optional(),
  consentGiven: z.literal(true, {
    errorMap: () => ({ message: "You must confirm and consent before submitting" }),
  }),
});

export type OnboardingPayload = z.infer<typeof OnboardingPayloadSchema>;

export interface GeneratedTask {
  title: string;
  description: string;
  priority: "LOW" | "MEDIUM" | "HIGH" | "URGENT";
  category: string;
  suggestedDueDays: number;
}
