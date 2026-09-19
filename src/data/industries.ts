// =============================================================================
// VS Project & Financial Advisory — Industry Solutions Engine
// CMS-Ready Data Layer: 18 Industry Verticals
//
// COMPLIANCE NOTICE:
// Government scheme benefits (subsidy percentages, interest rates, CGTMSE
// quantum) are NEVER hardcoded. All scheme entries contain only name, type,
// administering body, source reference, lastVerified date, and a mandatory
// disclaimer. Financial metrics carry explicit source, asOf date, indicative
// flag, and disclaimer. This file is structured for headless CMS migration.
// =============================================================================

// ---------------------------------------------------------------------------
// Core Interfaces
// ---------------------------------------------------------------------------

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SchemeReference {
  schemeName: string;
  schemeType:
    | "Credit Guarantee"
    | "Capital Subsidy"
    | "Interest Subvention"
    | "Technology Upgrade"
    | "Working Capital Support"
    | "Grant"
    | "Tax Incentive"
    | "Other";
  administeredBy: string;
  applicability: string;
  sourceUrl?: string;
  lastVerified: string; // ISO 8601
  reviewedBy: string;
  disclaimer: string;
}

export interface FinancialMetric {
  metric: string;
  indicativeRange: string;
  basis: string;
  source: string;
  asOf: string; // ISO 8601 month-year
  disclaimer: string;
}

export interface BusinessModel {
  title: string;
  description: string;
  revenueDrivers: string[];
}

export interface ProjectComponent {
  head: string;
  description: string;
  typicalElements: string[];
}

export interface CostHead {
  category: string;
  components: string[];
  note: string;
}

export interface InfraRequirement {
  type: string;
  details: string;
}

export interface Registration {
  name: string;
  authority: string;
  mandatory: boolean;
  note?: string;
}

export interface Risk {
  category: "Operational" | "Market" | "Regulatory" | "Financial" | "Environmental" | "Technology";
  title: string;
  description: string;
}

export interface AdvisoryStep {
  step: number;
  title: string;
  description: string;
}

export interface SourceReference {
  title: string;
  url?: string;
  type:
    | "RBI"
    | "NABARD"
    | "MoFPI"
    | "NHB"
    | "MoP"
    | "Industry Report"
    | "Government Notification"
    | "SEBI"
    | "MCA"
    | "Other";
}

export interface FinancingStructureItem {
  aspect: string;
  indicativeConvention: string;
  note: string;
}

export interface DPRConsideration {
  chapter: string;
  specificNote: string;
}

export interface CMAConsideration {
  aspect: string;
  industryNote: string;
}

export interface IndustryItem {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  sector: string;
  sectorId: string;
  badge: string;
  iconName: string;

  // CMS Audit Trail
  lastReviewed: string;
  reviewedBy: string;
  sourceReferences: SourceReference[];

  // Page Content
  hero: {
    headline: string;
    subheadline: string;
    keyParameters: Array<{ label: string; value: string }>;
  };
  overview: {
    title: string;
    paragraphs: string[];
  };
  businessModels: BusinessModel[];
  projectComponents: ProjectComponent[];
  costHeads: CostHead[];
  infrastructure: InfraRequirement[];
  financingStructure: {
    title: string;
    disclaimer: string;
    items: FinancingStructureItem[];
  };
  commonDocumentation: Array<{ category: string; items: string[] }>;
  dprConsiderations: DPRConsideration[];
  cmaConsiderations: CMAConsideration[];
  financialMetrics: FinancialMetric[];
  registrationsLicenses: Registration[];
  governmentSchemes: SchemeReference[];
  potentialRisks: Risk[];
  vsAdvisoryProcess: AdvisoryStep[];
  faqs: FAQItem[];
  relatedServiceSlugs: string[];
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
}

export interface IndustrySector {
  id: string;
  name: string;
  description: string;
  iconName: string;
  industrySlugs: string[];
}

// ---------------------------------------------------------------------------
// Sector Definitions
// ---------------------------------------------------------------------------

export const INDUSTRY_SECTORS: IndustrySector[] = [
  {
    id: "agro-food",
    name: "Agro & Food Processing",
    description: "Rice mills, oil mills, dairy, poultry, cold storage, and agriculture-linked processing units.",
    iconName: "Sprout",
    industrySlugs: ["rice-mills", "oil-mills", "agriculture-projects", "poultry", "dairy-farms", "cold-storage"],
  },
  {
    id: "healthcare-education",
    name: "Healthcare & Education",
    description: "Hospitals, diagnostic centers, nursing homes, schools, colleges, and skill training institutions.",
    iconName: "HeartPulse",
    industrySlugs: ["hospitals", "schools"],
  },
  {
    id: "hospitality-retail",
    name: "Hospitality & Retail",
    description: "Hotels, resorts, restaurants, quick service restaurants, and food courts.",
    iconName: "Hotel",
    industrySlugs: ["hotels-resorts", "restaurants"],
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    description: "General manufacturing, precision engineering, textile units, and industrial production.",
    iconName: "Factory",
    industrySlugs: ["manufacturing-units", "textile-units"],
  },
  {
    id: "energy-infrastructure",
    name: "Energy & EV Infrastructure",
    description: "Solar projects, EV charging networks, renewable energy, and green infrastructure.",
    iconName: "Zap",
    industrySlugs: ["solar-projects", "ev-charging-stations"],
  },
  {
    id: "logistics-storage",
    name: "Logistics & Storage",
    description: "Warehouses, cold storage facilities, distribution centers, and logistics hubs.",
    iconName: "Warehouse",
    industrySlugs: ["warehouses"],
  },
  {
    id: "real-estate-services",
    name: "Real Estate & Services",
    description: "Commercial buildings, auto dealerships, and recreation facilities.",
    iconName: "Building2",
    industrySlugs: ["commercial-buildings", "auto-dealerships", "indoor-play-zones"],
  },
];

// ---------------------------------------------------------------------------
// Shared Constants
// ---------------------------------------------------------------------------

const SCHEME_DISCLAIMER =
  "Government scheme benefits, eligibility criteria, subsidy quantum, and application procedures are subject to periodic revision by the administering authority. All promoters must verify current scheme terms directly with the nodal agency or bank before relying on scheme support for project financing. VS Advisory does not guarantee scheme availability, approval, or quantum.";

const METRIC_DISCLAIMER =
  "Financial metrics are indicative ranges derived from publicly available sector data, NABARD/RBI publications, and industry research reports. Actual project performance depends on site conditions, promoter capability, market dynamics, and management efficiency. These ranges are not projections or guarantees and must not be used as investment benchmarks without independent feasibility verification.";

const FINANCING_DISCLAIMER =
  "Financing structure parameters are indicative industry conventions observed in Indian banking practice. Actual loan quantum, Debt:Equity ratio, moratorium, tenure, interest rates, and collateral requirements are determined solely by the lending institution based on their independent credit appraisal. VS Advisory does not guarantee any specific financing terms.";

// ---------------------------------------------------------------------------
// Industry Data — All 18 Industries
// ---------------------------------------------------------------------------

export const INDUSTRIES: IndustryItem[] = [
  // =========================================================================
  // 1. RICE MILLS
  // =========================================================================
  {
    id: "rice-mills",
    slug: "rice-mills",
    title: "Rice Mills & Paddy Processing Units",
    shortTitle: "Rice Mills",
    sector: "Agro & Food Processing",
    sectorId: "agro-food",
    badge: "Priority Sector Lending",
    iconName: "Sprout",
    lastReviewed: "2025-03-01",
    reviewedBy: "Senior Financial Analyst, VS Advisory",
    sourceReferences: [
      { title: "RBI Priority Sector Lending Master Directions", type: "RBI", url: "https://rbi.org.in" },
      { title: "NABARD Agro Processing Finance Guidelines", type: "NABARD", url: "https://nabard.org" },
      { title: "Ministry of Food Processing Industries — Rice Processing Scheme", type: "MoFPI", url: "https://mofpi.gov.in" },
    ],
    hero: {
      headline: "Finance & Project Advisory for Rice Mills & Paddy Processing Units",
      subheadline:
        "Bankable DPRs, working capital structuring, and CMA data preparation for custom milling, parboiled rice, and integrated paddy processing facilities.",
      keyParameters: [
        { label: "Lending Classification", value: "Agriculture & Allied — Priority Sector" },
        { label: "Typical Project Scale", value: "Micro (₹25L–₹5 Cr) to Large (₹50 Cr+)" },
        { label: "Working Capital Character", value: "Seasonal — Peak during Kharif & Rabi" },
      ],
    },
    overview: {
      title: "Indian Rice Milling Industry — Credit & Project Context",
      paragraphs: [
        "India is the world's second-largest producer and largest exporter of rice. The rice milling industry comprises over 1.5 lakh licensed mills ranging from small single-pass huller mills to fully integrated modern parboiling and sorting complexes with optical sorting machines (OSM) and colour sortex equipment.",
        "From a banking credit perspective, rice milling is classified under Agriculture & Allied activities and qualifies as Priority Sector Lending (PSL), which creates favourable institutional interest in financing. However, the highly seasonal nature of paddy procurement (Kharif: October-December, Rabi: April-May) creates significant cyclical cash flow challenges that require careful CMA modeling.",
        "The industry faces structural challenges including power-intensive operations, paddy procurement at Minimum Support Price (MSP) through FCI/state agencies, and high working capital requirements for raw paddy stockholding. Proper DPR and CMA formulation must reflect these operational realities to withstand bank credit committee scrutiny.",
      ],
    },
    businessModels: [
      {
        title: "Custom Milling (Government Paddy)",
        description: "Milling services on job work basis for FCI/state agencies (like MARKFED, CWC) on contracted milling charges per quintal.",
        revenueDrivers: ["Per-quintal milling charge (rate set by FCI/state government)", "By-product revenue (rice bran, husk)", "Utilization rate per operational day"],
      },
      {
        title: "Commercial Rice Milling & Branding",
        description: "Procuring market paddy at open market price, milling, and selling branded rice to retailers, wholesalers, or directly to consumers.",
        revenueDrivers: ["Net realization on branded basmati / non-basmati rice", "Product mix (raw vs parboiled vs sortex-grade)", "Export realizations (₹/MT FOB)"],
      },
      {
        title: "Integrated Parboiling & Packaging Unit",
        description: "Value-added processing involving parboiling, drying, milling, colour sorting, and consumer-pack branding for regional or national distribution.",
        revenueDrivers: ["Premium pricing on parboiled rice over raw milled rice", "Branded consumer pack margins", "Bran oil extraction potential"],
      },
    ],
    projectComponents: [
      {
        head: "Civil & Land Development",
        description: "Factory shed, paddy storage yard, drying platforms, packaging area, and staff quarters.",
        typicalElements: ["Factory shed (RCC/pre-fabricated)", "Paddy storage yard (concrete)", "Solar drying area", "Administrative block", "Staff quarters & security cabin"],
      },
      {
        head: "Plant & Machinery",
        description: "Core processing equipment from paddy cleaning to finished rice packaging.",
        typicalElements: ["Paddy cleaning & destoner", "Rubber roll huller / Engelberg sheller", "Whitener / polisher (vertical/horizontal)", "Length grader / paddy separator", "Colour sortex / optical sorting machine (OSM)", "Automatic weighing & packaging", "Rice bran extraction unit (optional)"],
      },
      {
        head: "Utilities & Infrastructure",
        description: "Power supply, boiler (for parboiling), and material handling systems.",
        typicalElements: ["HT/LT electrical connection (100–500 KVA typical)", "Boiler (steam for parboiling)", "Bucket elevators, screw conveyors, belt conveyors", "Effluent management & husk disposal"],
      },
    ],
    costHeads: [
      {
        category: "Operating Cost Components",
        components: [
          "Raw paddy procurement cost (primary cost driver — 65%–75% of total cost)",
          "Power and fuel cost (milling is electricity-intensive)",
          "Labour: skilled operators, sorters, loaders",
          "Packing material (bags, consumer packs)",
          "Freight & logistics to market",
          "Bank interest on working capital",
          "Maintenance and consumables",
        ],
        note: "Cost ratios are indicative estimates based on industry norms. Actual cost structure varies significantly based on paddy variety (basmati vs non-basmati), power tariff, and labor rates by state.",
      },
    ],
    infrastructure: [
      { type: "Power Supply", details: "Minimum 100 KVA (small), 300–500 KVA (medium), 1 MW+ (large integrated units). Continuous power supply is critical — DG backup essential." },
      { type: "Land Area", details: "Minimum 0.5 to 1 acre (small mill), 3–5 acres (medium integrated unit). Paddy storage yard typically requires 2x the built-up processing area." },
      { type: "Water", details: "Required for parboiling operations. Access to borewell or canal water with CGWA/State authority permission." },
      { type: "Road Connectivity", details: "Heavy goods vehicle access (20-tonne trucks minimum). Proximity to APMC market yard or paddy-producing villages is a locational advantage." },
      { type: "Environmental", details: "Rice husk is a non-hazardous agricultural waste but husk combustion requires State Pollution Control Board Consent (Orange/Green category). Rice bran requires proper handling to avoid spontaneous combustion." },
    ],
    financingStructure: {
      title: "Indicative Financing Structure — Rice Milling",
      disclaimer: FINANCING_DISCLAIMER,
      items: [
        { aspect: "Term Loan Debt:Equity", indicativeConvention: "Typically 65:35 to 75:25 depending on project risk and promoter track record", note: "Banks often insist on higher margin for first-time promoters. Existing units with track record may get better ratios." },
        { aspect: "Working Capital", indicativeConvention: "Cash Credit against paddy stock and finished goods (usually 75% of stock value after margin)", note: "Seasonal peak procurement requires pre-sanctioned working capital limits. Book debts from FCI are often 90%+ eligible for drawing power." },
        { aspect: "Moratorium", indicativeConvention: "6 to 12 months from machine installation to account for trial production and first seasonal procurement cycle", note: "Lenders often require at least one full milling season before EMI commencement." },
        { aspect: "Repayment Tenure", indicativeConvention: "5 to 7 years for term loan (excluding moratorium)", note: "Machinery life is typically 10–15 years, so shorter tenures are standard banking practice." },
      ],
    },
    commonDocumentation: [
      {
        category: "Technical & Site",
        items: [
          "Land title deed / long-term lease agreement with conversion order from agricultural to industrial land",
          "Factory layout drawing approved by Chartered Engineer / DIC",
          "Proforma invoices for all machinery items with technical specifications",
          "Electricity load sanction letter (DISCOM)",
          "Water source certificate (borewell permit / canal water agreement)",
        ],
      },
      {
        category: "Statutory & Regulatory",
        items: [
          "Rice Mill License under Essential Commodities Act / State Rice Mill Control Order",
          "FSSAI Food License (Central / State)",
          "State Pollution Control Board CTE (Consent to Establish)",
          "Factory License (Factories Act, 1948)",
          "Udyam MSME Registration",
          "GST Registration",
        ],
      },
      {
        category: "Financial & KYC",
        items: [
          "Promoter KYC (PAN, Aadhaar, passport-size photos)",
          "Promoter personal net worth statement certified by CA",
          "Past 3 years ITR with audited financials (for existing entities)",
          "Bank statements for the trailing 12 months",
          "Proof of margin money infusion",
        ],
      },
    ],
    dprConsiderations: [
      { chapter: "Market Demand Analysis", specificNote: "Rice milling DPRs must include state-wise rice consumption data, local APMC paddy arrival statistics, FCI custom milling procurement data for the region, and competitive mill density analysis within a 50 km radius. Inflated capacity utilization projections are a primary reason for bank rejection." },
      { chapter: "Technical Feasibility", specificNote: "Specify milling recovery percentage (raw paddy to finished rice) by paddy variety (non-basmati: typically 65–67%, basmati: varies). Optical sorting machine (OSM) output quality specifications must match export grade requirements if export orientation is claimed." },
      { chapter: "Cost of Project", specificNote: "Rice bran extraction unit must be separately itemized with estimated bran oil yield and realization. Husk utilization (own boiler, sale to brick kilns) must be explained as it materially affects EBITDA." },
      { chapter: "Financial Projections", specificNote: "Seasonal cash flow projections must model peak paddy procurement months (Oct–Dec, Apr–May) vs off-season months. Working capital interest during off-season must be explicitly accounted for." },
    ],
    cmaConsiderations: [
      { aspect: "Inventory Holding Periods", industryNote: "Raw paddy inventory: 2 to 4 months holding is standard given seasonal procurement pattern. Banks will scrutinize this heavily. Higher holding periods increase working capital requirement but also reflect genuine seasonal pattern." },
      { aspect: "Debtor Aging", industryNote: "FCI / state agency debtors are typically 30–90 days (government payment cycles). Private market debtors average 15–30 days. Forms III must accurately reflect this mix." },
      { aspect: "Seasonal Peak Working Capital", industryNote: "Peak and off-peak CC limit requirements must be separately estimated. Consider requesting a 'sub-limit' for seasonal peak procurement within the overall CC facility." },
    ],
    financialMetrics: [
      { metric: "Gross Milling Margin (Custom Milling)", indicativeRange: "₹80–₹200 per quintal (milling charge less direct costs)", basis: "FCI milling charge rates and industry cost surveys", source: "FCI Annual Reports & NABARD Agri-Finance data", asOf: "2024-03", disclaimer: METRIC_DISCLAIMER },
      { metric: "DSCR (Term Loan)", indicativeRange: "1.5x to 2.2x (for bankable projections)", basis: "Bank credit appraisal convention — minimum 1.5x required by most PSU banks", source: "IBA Credit Appraisal Norms (general)", asOf: "2024-01", disclaimer: METRIC_DISCLAIMER },
      { metric: "Project Payback Period", indicativeRange: "4 to 7 years depending on scale and business model", basis: "Sector-level benchmark from NABARD food processing project profiles", source: "NABARD Project Profiles — Rice Milling", asOf: "2023-12", disclaimer: METRIC_DISCLAIMER },
    ],
    registrationsLicenses: [
      { name: "Rice Mill License", authority: "State Food & Civil Supplies Department / DIC", mandatory: true, note: "Under state-specific rice mill control orders. Essential for milling licensed paddy from FCI/state agencies." },
      { name: "FSSAI Food Business Operator License", authority: "Food Safety and Standards Authority of India", mandatory: true, note: "Central License required for manufacturing output exceeding ₹20 Cr turnover; State License for smaller units." },
      { name: "Udyam MSME Registration", authority: "Ministry of MSME (online portal)", mandatory: false, note: "Strongly recommended — required for PSL classification, CGTMSE, and various state subsidies." },
      { name: "Factory License", authority: "State Labour Department / Factories Act Authority", mandatory: true, note: "Required when employing 10+ workers with power or 20+ workers without power." },
      { name: "State Pollution Control Board CTE & CTO", authority: "State Pollution Control Board", mandatory: true, note: "Orange category generally. Husk combustion boilers may require additional Air Act clearance." },
      { name: "Essential Commodities Act Dealer License", authority: "State Supplies / Food Department", mandatory: true, note: "Required for handling notified commodities including paddy and rice." },
    ],
    governmentSchemes: [
      {
        schemeName: "PMFME (PM Formalisation of Micro Food Processing Enterprises)",
        schemeType: "Capital Subsidy",
        administeredBy: "Ministry of Food Processing Industries (MoFPI) via State Nodal Agencies",
        applicability: "Individual micro food processing enterprise (including rice mills) meeting scheme eligibility criteria",
        sourceUrl: "https://pmfme.mofpi.gov.in",
        lastVerified: "2025-03-01",
        reviewedBy: "Senior Financial Analyst, VS Advisory",
        disclaimer: SCHEME_DISCLAIMER,
      },
      {
        schemeName: "NABARD Refinance for Agro Processing Units",
        schemeType: "Working Capital Support",
        administeredBy: "NABARD (National Bank for Agriculture and Rural Development)",
        applicability: "Banks lending to eligible agro-processing units may access NABARD refinance. Benefit passed to borrowers subject to individual bank policy.",
        sourceUrl: "https://nabard.org",
        lastVerified: "2025-03-01",
        reviewedBy: "Senior Financial Analyst, VS Advisory",
        disclaimer: SCHEME_DISCLAIMER,
      },
      {
        schemeName: "CGTMSE (Credit Guarantee Fund Trust for MSEs)",
        schemeType: "Credit Guarantee",
        administeredBy: "CGTMSE (Trust operated jointly by MoMSME and SIDBI)",
        applicability: "Eligible Micro and Small Enterprises classified under the MSMED Act with a valid Udyam registration.",
        sourceUrl: "https://cgtmse.in",
        lastVerified: "2025-03-01",
        reviewedBy: "Senior Financial Analyst, VS Advisory",
        disclaimer: SCHEME_DISCLAIMER,
      },
    ],
    potentialRisks: [
      { category: "Market", title: "MSP & Paddy Procurement Volatility", description: "Government MSP revisions directly impact paddy procurement cost. Competitive pressure from large integrated mills on market price realization." },
      { category: "Operational", title: "Seasonal Cash Flow Stress", description: "Heavy capex on paddy stock during Oct–Dec followed by 6–8 months of gradual liquidation creates cash flow mismatch that must be pre-planned with lenders." },
      { category: "Regulatory", title: "State Rice Mill Licensing Changes", description: "State governments periodically revise paddy stock limits, rice-to-paddy conversion norms, and custom milling rate structures, impacting revenue certainty." },
      { category: "Financial", title: "Working Capital Margin Pressure", description: "Banks may reduce drawing power if quality of rice stocks or debtors deteriorates. Stock audit non-compliance can freeze CC accounts." },
      { category: "Environmental", title: "Husk & Effluent Management", description: "Improper husk storage or open burning invites PCB action. Regulatory tightening on husk combustion may increase compliance costs." },
    ],
    vsAdvisoryProcess: [
      { step: 1, title: "Project Scoping & Site Assessment", description: "Review promoter profile, site location, proposed milling capacity, government procurement linkage (FCI/state), and preliminary machinery quotations." },
      { step: 2, title: "Business Model Validation", description: "Validate paddy sourcing strategy, custom vs commercial milling mix, power load requirements, and seasonal working capital quantum." },
      { step: 3, title: "DPR & CMA Formulation", description: "Prepare IBA-compliant DPR covering 8 chapters + seasonal CMA data with peak and off-peak working capital modeling." },
      { step: 4, title: "Regulatory Roadmap", description: "Identify rice mill license, FSSAI, PCB CTE, factory license, and Udyam registration sequencing." },
      { step: 5, title: "Lender Submission & Coordination", description: "Match project to optimal lender (PSU / NABARD / SFC), submit dossier, and manage technical and financial query rounds." },
    ],
    faqs: [
      {
        question: "Does a rice mill qualify for Priority Sector Lending (PSL)?",
        answer: "Yes. Rice milling and paddy processing are classified under Agriculture & Allied activities under RBI's Priority Sector Lending Master Directions. This makes the project eligible for PSL-targeted lending from commercial banks, cooperative banks, and Regional Rural Banks (RRBs), often at rates competitive with general MSME lending.",
      },
      {
        question: "How is seasonal working capital handled in rice mill CMA data?",
        answer: "CMA data for rice mills must explicitly model the seasonal working capital cycle. Typically, a peak working capital sub-limit (for the Oct–Dec and Apr–May paddy procurement windows) is negotiated within the overall CC facility, while the regular CC limit covers ongoing operations. Form III must show elevated raw paddy inventory during peak months.",
      },
    ],
    relatedServiceSlugs: ["dpr", "cma", "working-capital-advisory", "government-scheme-assistance"],
    seo: {
      metaTitle: "Rice Mill Project Finance & DPR Advisory | VS Advisory",
      metaDescription: "Expert project finance, DPR preparation, CMA data, and working capital advisory for rice mill and paddy processing unit promoters in India.",
      keywords: ["rice mill project report", "rice mill bank loan", "paddy processing unit DPR", "rice mill working capital", "PMFME scheme rice mill"],
    },
  },

  // =========================================================================
  // 2. OIL MILLS
  // =========================================================================
  {
    id: "oil-mills",
    slug: "oil-mills",
    title: "Oil Mills & Edible Oil Processing Units",
    shortTitle: "Oil Mills",
    sector: "Agro & Food Processing",
    sectorId: "agro-food",
    badge: "Agro Processing",
    iconName: "Sprout",
    lastReviewed: "2025-03-01",
    reviewedBy: "Senior Financial Analyst, VS Advisory",
    sourceReferences: [
      { title: "NABARD Project Profiles — Edible Oil Processing", type: "NABARD" },
      { title: "MoFPI PMFME Scheme Guidelines", type: "MoFPI", url: "https://pmfme.mofpi.gov.in" },
    ],
    hero: {
      headline: "Project Finance & Advisory for Oil Mills & Edible Oil Processing",
      subheadline: "Structured project appraisal, DPR preparation, and credit advisory for groundnut, mustard, sunflower, and coconut oil extraction units.",
      keyParameters: [
        { label: "Sector Classification", value: "Agro Processing — Priority Sector Lending" },
        { label: "Key Raw Materials", value: "Oilseeds: Groundnut, Mustard, Sunflower, Soybean" },
        { label: "Processing Types", value: "Cold Press, Expeller, Solvent Extraction" },
      ],
    },
    overview: {
      title: "India's Edible Oil Industry — Financial Landscape",
      paragraphs: [
        "India is one of the world's largest importers of edible oil, creating significant demand for domestic oilseed processing capacity. The industry spans small-scale village oil mills (kolhu units) to large integrated solvent extraction plants. This fragmented structure creates financing challenges that require careful structuring.",
        "Oilseed processing is highly sensitive to raw material (oilseed) price volatility, driven by monsoon performance, MSP revisions, and global palm oil prices. DPRs and CMA data for oil mills must explicitly model raw material price sensitivity and its impact on operating margins.",
        "Solvent extraction plants require specific licensing under the Solvent Extracted Oil, De-Oiled Meal and Edible Flour Control Order (SEOC), adding a critical regulatory compliance dimension to project structuring.",
      ],
    },
    businessModels: [
      {
        title: "Traditional Expeller Pressing",
        description: "Mechanical expeller pressing of oilseeds producing crude oil and oil cake (de-oiled cake). Suitable for small to medium scale.",
        revenueDrivers: ["Crude oil realization per MT", "Oil cake / de-oiled meal sales (animal feed market)", "Capacity utilization hours per day"],
      },
      {
        title: "Solvent Extraction Plant",
        description: "Commercial scale hexane-based solvent extraction for high oil recovery from oilseeds or oil cakes. Requires SEOC license.",
        revenueDrivers: ["Solvent-extracted oil premium over expeller oil (higher recovery)", "De-oiled meal export potential", "Lecithin and by-product value"],
      },
      {
        title: "Value-Added Refined Edible Oil",
        description: "Full processing from raw oilseed through crude oil extraction, refining (bleaching, deodorizing), and consumer packaging.",
        revenueDrivers: ["Refined oil retail price premium", "Branded consumer pack margins", "Oleochemicals from fatty acid fractionation"],
      },
    ],
    projectComponents: [
      {
        head: "Civil & Storage Infrastructure",
        description: "Processing shed, oilseed storage, oil storage tanks, and cake storage.",
        typicalElements: ["Processing hall / factory shed", "Oilseed storage silos or covered warehouses", "Crude oil storage tanks (SS / MS)", "Cake/DOC storage bays", "Boiler room & utilities block"],
      },
      {
        head: "Plant & Machinery",
        description: "Oilseed cleaning, conditioning, expelling or extraction, refining chain.",
        typicalElements: ["Seed cleaner / rotary screener", "Seed conditioner / heater", "Screw expeller presses", "Oil filter press", "Refinery (for refined oil units): Neutralizer, Bleacher, Deodorizer", "Filling & packaging line"],
      },
      {
        head: "Utilities",
        description: "Steam, power, cooling water system.",
        typicalElements: ["Steam boiler (solid/liquid fuel)", "HT/LT power connection (200–500 KVA)", "Cooling tower", "Effluent treatment system"],
      },
    ],
    costHeads: [
      {
        category: "Primary Operating Costs",
        components: [
          "Oilseed procurement (typically 70–80% of total operating cost)",
          "Power and fuel (steam generation and mechanical energy)",
          "Hexane / solvent cost (solvent extraction plants)",
          "Labour: operators, loaders",
          "Packaging material",
          "Freight to distribution market",
          "Working capital interest on oilseed stock",
        ],
        note: "Edible oil is a thin-margin business. Raw material cost is the dominant variable. Margins are highly sensitive to oilseed vs oil price spread.",
      },
    ],
    infrastructure: [
      { type: "Power", details: "200–500 KVA for medium expeller units. 1 MW+ for large solvent extraction plants." },
      { type: "Land", details: "Minimum 1 acre (expeller unit), 3–10 acres (solvent extraction plant with all infrastructure)." },
      { type: "Water", details: "Required for cooling and boiler. Borewell or municipal connection with adequate yield." },
      { type: "Fire Safety", details: "Solvent extraction plants are classified as hazardous due to hexane flammability. PESO (Petroleum and Explosives Safety Organisation) approval and Petroleum Act license required." },
    ],
    financingStructure: {
      title: "Indicative Financing Structure — Oil Mills",
      disclaimer: FINANCING_DISCLAIMER,
      items: [
        { aspect: "Term Loan Debt:Equity", indicativeConvention: "Typically 65:35 to 70:30", note: "Solvent extraction plants may face tighter margins from lenders due to higher operational risk (flammable solvent)." },
        { aspect: "Working Capital", indicativeConvention: "CC against oilseed stock and finished oil", note: "Oilseed is highly price-volatile — banks may apply conservative drawing power norms." },
        { aspect: "Repayment Tenure", indicativeConvention: "5 to 7 years", note: "Standard for agro-processing projects." },
      ],
    },
    commonDocumentation: [
      {
        category: "Statutory Licenses",
        items: [
          "SEOC License (for solvent extraction plants under Solvent Extracted Oil Order)",
          "FSSAI Food Business Operator License",
          "Petroleum Act License (PESO approval for hexane storage)",
          "State Pollution Control Board CTE & CTO",
          "Factory License",
          "Udyam MSME Registration",
        ],
      },
      {
        category: "Technical Documentation",
        items: [
          "Machinery proforma invoices with technical specifications",
          "Boiler manufacturer's certificate and IBR inspection compliance",
          "Civil engineering estimate and layout plan",
          "Fire NOC from State Fire Department",
        ],
      },
    ],
    dprConsiderations: [
      { chapter: "Raw Material Sourcing", specificNote: "Specify primary oilseed (groundnut, mustard, soybean, etc.), local availability assessment, seasonal procurement windows, MSP impact, and alternative sourcing from APMC market arrivals data." },
      { chapter: "Technical Feasibility", specificNote: "Oil recovery percentage is critical: groundnut oil recovery (expeller): typically 38–42%. Solvent extraction recovery is higher. These figures directly drive revenue projections and must be backed by machinery manufacturer specifications." },
      { chapter: "Risk Analysis", specificNote: "Oil and oilseed price sensitivity analysis is mandatory. Show impact on EBITDA margin for ±10% movement in oilseed price. Lenders specifically check this for solvent extraction projects." },
    ],
    cmaConsiderations: [
      { aspect: "Raw Material Price Sensitivity", industryNote: "The oilseed-to-oil price spread is the core margin driver. CMA projections must use realistic, conservative oilseed procurement prices and not peak-low historical prices." },
      { aspect: "Inventory Holding", industryNote: "Oilseed procurement is seasonal — groundnut post-harvest (Nov–Feb), mustard (Mar–May). CMA Form III must model peak oilseed stock during procurement season." },
    ],
    financialMetrics: [
      { metric: "Oil Extraction Rate (Expeller)", indicativeRange: "38–42% for groundnut; 36–40% for mustard", basis: "Industry standard machine efficiencies", source: "NABARD Project Profiles — Edible Oil", asOf: "2023-12", disclaimer: METRIC_DISCLAIMER },
      { metric: "DSCR", indicativeRange: "1.5x to 2.0x for bankable projections", basis: "Bank credit appraisal norms", source: "IBA general guidelines", asOf: "2024-01", disclaimer: METRIC_DISCLAIMER },
    ],
    registrationsLicenses: [
      { name: "FSSAI Food License", authority: "FSSAI", mandatory: true },
      { name: "SEOC License (Solvent Plants)", authority: "DPIIT / State Authority", mandatory: true, note: "Mandatory only for solvent extraction plants." },
      { name: "Petroleum Act License", authority: "PESO (Petroleum and Explosives Safety Organisation)", mandatory: true, note: "Required if hexane/solvent storage exceeds prescribed limits." },
      { name: "SPCB CTE & CTO", authority: "State Pollution Control Board", mandatory: true },
      { name: "Udyam Registration", authority: "Ministry of MSME", mandatory: false },
    ],
    governmentSchemes: [
      {
        schemeName: "PMFME — PM Formalisation of Micro Food Processing Enterprises",
        schemeType: "Capital Subsidy",
        administeredBy: "MoFPI via State Nodal Agencies",
        applicability: "Micro food processing enterprises including oil mills meeting scheme eligibility criteria.",
        sourceUrl: "https://pmfme.mofpi.gov.in",
        lastVerified: "2025-03-01",
        reviewedBy: "Senior Financial Analyst, VS Advisory",
        disclaimer: SCHEME_DISCLAIMER,
      },
      {
        schemeName: "CGTMSE Credit Guarantee",
        schemeType: "Credit Guarantee",
        administeredBy: "CGTMSE (MoMSME + SIDBI)",
        applicability: "Eligible Micro and Small Enterprises with valid Udyam registration.",
        sourceUrl: "https://cgtmse.in",
        lastVerified: "2025-03-01",
        reviewedBy: "Senior Financial Analyst, VS Advisory",
        disclaimer: SCHEME_DISCLAIMER,
      },
    ],
    potentialRisks: [
      { category: "Market", title: "Oilseed & Edible Oil Price Volatility", description: "Global palm oil price movements directly impact domestic edible oil prices. Oilseed procurement costs are MSP-linked but market prices fluctuate significantly." },
      { category: "Operational", title: "Hexane/Solvent Handling Safety", description: "Solvent extraction plants carry inherent fire and explosion risk due to hexane. A single safety incident can lead to license cancellation and total loss." },
      { category: "Regulatory", title: "SEOC Order Compliance", description: "Solvent extraction plant licenses have strict production, testing, and reporting requirements. Non-compliance leads to license suspension." },
      { category: "Financial", title: "Thin Operating Margins", description: "Edible oil processing operates on thin margins. A small adverse movement in oilseed prices or oil price realization can push DSCR below lender thresholds." },
    ],
    vsAdvisoryProcess: [
      { step: 1, title: "Project Scope & Technology Selection", description: "Evaluate cold press vs expeller vs solvent extraction based on scale, oilseed availability, and capital budget." },
      { step: 2, title: "Regulatory Compliance Roadmap", description: "Identify SEOC, PESO, FSSAI, PCB requirements and timeline for pre-operation clearances." },
      { step: 3, title: "DPR with Sensitivity Analysis", description: "Prepare IBA-compliant DPR with detailed raw material price sensitivity scenarios." },
      { step: 4, title: "CMA & Working Capital Structuring", description: "Model seasonal oilseed procurement working capital and peak CC requirements." },
      { step: 5, title: "Lender Coordination", description: "Submit dossier and manage bank technical and legal query resolution." },
    ],
    faqs: [
      {
        question: "What is SEOC license and is it required for all oil mills?",
        answer: "The Solvent Extracted Oil, De-Oiled Meal and Edible Flour Control Order (SEOC) license is required specifically for solvent extraction plants that use chemical solvents (typically hexane) for oil extraction. Traditional mechanical expeller-based oil mills typically do not require SEOC but must still comply with FSSAI, Factory Act, and state pollution control norms.",
      },
    ],
    relatedServiceSlugs: ["dpr", "cma", "project-feasibility", "government-scheme-assistance"],
    seo: {
      metaTitle: "Oil Mill Project Finance & DPR Advisory | VS Advisory",
      metaDescription: "Expert DPR, CMA, and project finance advisory for oil mill and edible oil processing units in India.",
      keywords: ["oil mill project report", "oil mill bank loan", "edible oil processing DPR", "groundnut oil mill finance", "SEOC license advisory"],
    },
  },

  // =========================================================================
  // 3. HOSPITALS
  // =========================================================================
  {
    id: "hospitals",
    slug: "hospitals",
    title: "Hospitals, Nursing Homes & Medical Centers",
    shortTitle: "Hospitals",
    sector: "Healthcare & Education",
    sectorId: "healthcare-education",
    badge: "Healthcare Infrastructure",
    iconName: "HeartPulse",
    lastReviewed: "2025-03-01",
    reviewedBy: "Senior Financial Analyst, VS Advisory",
    sourceReferences: [
      { title: "NHB (National Housing Bank) Healthcare Finance Guidelines", type: "NHB" },
      { title: "NABARD Healthcare Project Financing", type: "NABARD" },
      { title: "Ministry of Health & Family Welfare — PMAY Healthcare Component", type: "Other" },
    ],
    hero: {
      headline: "Project Finance & DPR Advisory for Hospitals & Medical Centers",
      subheadline: "Structured healthcare infrastructure finance advisory for nursing homes, multi-specialty hospitals, diagnostic centers, and specialty clinics.",
      keyParameters: [
        { label: "Sector", value: "Healthcare Infrastructure" },
        { label: "Project Scale", value: "10-bed (₹1 Cr) to 500-bed (₹200 Cr+)" },
        { label: "Key Finance Instruments", value: "Term Loan, NHB Refinance, Medical Equipment Loan" },
      ],
    },
    overview: {
      title: "Healthcare Infrastructure Financing in India",
      paragraphs: [
        "India's healthcare sector is experiencing structural undercapacity, particularly in Tier-2 and Tier-3 cities where the bed-to-population ratio remains significantly below WHO norms. This creates a sustained opportunity for private hospital investment across the spectrum from 10-bed nursing homes to multi-specialty 200+ bed hospitals.",
        "From a banking perspective, healthcare projects present a unique credit profile: high initial capex (particularly for imported medical equipment), long stabilization periods (18–36 months before full OPD/IPD utilization), and strong recurring cash flows once operational. This means DPRs for healthcare facilities must explicitly model a conservative ramp-up curve and adequately plan for interest during construction (IDC).",
        "Medical equipment financing is a specialized sub-segment where equipment-specific loans (hypothecated against the equipment) from banks and NBFCs are available alongside the main hospital term loan.",
      ],
    },
    businessModels: [
      {
        title: "Single-Specialty Hospital / Nursing Home",
        description: "Focused clinical services in one specialty (orthopedics, maternity, eye care, dental, ENT). Typically 10–75 beds.",
        revenueDrivers: ["Bed occupancy rate (BOR) × Average Revenue Per Occupied Bed (ARPOB)", "OPD consultation fees", "Surgical procedure charges", "Pharmacy & diagnostics attach rate"],
      },
      {
        title: "Multi-Specialty Hospital",
        description: "Comprehensive multi-specialty facility offering surgical, medical, pediatrics, gynecology, and diagnostic services. 75+ beds.",
        revenueDrivers: ["Bed occupancy rate across departments", "High-value surgical volumes (cardiac, neuro, oncology)", "NABH empanelment premium billing", "Government health scheme empanelment (Ayushman Bharat)"],
      },
      {
        title: "Diagnostic & Day Care Center",
        description: "Pathology, radiology (X-ray, ultrasound, CT, MRI), and minor surgical day procedures without overnight admission.",
        revenueDrivers: ["Per-test / per-scan revenue", "Radiology outsourcing contracts from small hospitals", "Home collection and tele-reporting services"],
      },
    ],
    projectComponents: [
      {
        head: "Civil & Construction",
        description: "Hospital building construction, OT complex, ICU, wards, OPD, emergency.",
        typicalElements: ["Main hospital building (multistory RCC)", "Operation Theatre (OT) complex with positive pressure systems", "ICU / NICU / SICU", "OPD block, Emergency bay", "Laundry, CSSD, Pharmacy, Admin", "Parking area", "Medical gas pipeline (O2, N2O, vacuum)"],
      },
      {
        head: "Medical Equipment",
        description: "Clinical, diagnostic, and life support medical equipment.",
        typicalElements: ["Diagnostic imaging (X-ray, Ultrasound, CT scanner, MRI)", "OT equipment (C-arm, operating lights, tables, anesthesia workstations)", "ICU equipment (ventilators, monitors, infusion pumps)", "Laboratory equipment (biochemistry, hematology, pathology)", "Patient monitoring systems"],
      },
      {
        head: "IT & Support Systems",
        description: "Hospital Information System and facility management.",
        typicalElements: ["Hospital Information System (HIS/EMR)", "CCTV, Access control, fire detection", "Backup power (DG sets)", "Medical gas pipeline system", "Laundry, kitchen, waste management systems"],
      },
    ],
    costHeads: [
      {
        category: "Hospital Operating Costs",
        components: [
          "Clinical staff: Doctors (consultant fees or salary), nursing staff, paramedics",
          "Administrative and support staff",
          "Medical consumables and drugs (high variable cost for IPD patients)",
          "Power & DG fuel (hospitals are power-intensive, 24x7)",
          "Housekeeping and laundry services",
          "Medical equipment maintenance & AMC",
          "Insurance (professional indemnity, asset insurance)",
          "Bank interest on term loan and equipment loans",
        ],
        note: "Manpower is typically the largest operating cost component (40–60% of revenue in stabilized hospitals). Medical consumables are the second largest variable cost.",
      },
    ],
    infrastructure: [
      { type: "Power Supply", details: "Hospitals require 100% uptime power. Dual power source (DISCOM + DG backup with ATS). 3-phase supply with hospital-grade earthing. Critical care areas need UPS backup." },
      { type: "Land & Building Area", details: "Minimum 250 sq ft built-up area per bed (basic), 500–750 sq ft per bed (multi-specialty with ICU, OT). Ground floor preferred for emergencies." },
      { type: "Water Supply", details: "24-hour water supply with minimum 200–500 liters per bed per day. Overhead tank with borewell backup. Softened water for CSSD and laundry." },
      { type: "Waste Management", details: "Bio-medical waste management under Bio-Medical Waste (Management & Handling) Rules. Contract with authorized CBWTF (Common Bio-Medical Waste Treatment Facility) mandatory." },
      { type: "Fire Safety", details: "Fire NOC mandatory. Fire-resistant construction material in OT zones. Sprinkler system for large buildings." },
    ],
    financingStructure: {
      title: "Indicative Financing Structure — Hospitals",
      disclaimer: FINANCING_DISCLAIMER,
      items: [
        { aspect: "Term Loan Debt:Equity", indicativeConvention: "Typically 65:35 to 70:30 for established promoters. First-time hospital projects may require 40–50% promoter equity.", note: "Banks treat greenfield hospitals as high-risk due to slow revenue ramp-up. Promoter medical qualifications and hospital management experience are key credit parameters." },
        { aspect: "Medical Equipment Loan", indicativeConvention: "Separate hypothecation-backed loan against specific equipment, typically 80–85% of equipment cost", note: "Medical equipment loans often available from specialized healthcare NBFCs." },
        { aspect: "Moratorium", indicativeConvention: "18 to 36 months for new hospitals (construction + stabilization)", note: "Extended moratorium is critical for hospitals. Revenue ramp-up to 60%+ occupancy typically takes 2–3 years." },
        { aspect: "Repayment Tenure", indicativeConvention: "7 to 12 years depending on scale and project risk", note: "Longer tenure is justified given the long useful life of hospital infrastructure (30+ years for civil)." },
      ],
    },
    commonDocumentation: [
      {
        category: "Medical Regulatory",
        items: [
          "Clinical Establishment Registration (State Clinical Establishment Act / PC-PNDT registration)",
          "NABH Pre-Accreditation Entry Level (for accreditation-targeted hospitals)",
          "Medical gas pipeline system certification",
          "Bio-Medical Waste authorization from SPCB",
          "Pharmacy license (Drug License) for in-hospital pharmacy",
          "Radiology — AERB (Atomic Energy Regulatory Board) license for CT/X-ray",
        ],
      },
      {
        category: "Civil & Structural",
        items: [
          "Building plan approval from municipal authority / DTCP",
          "Structural stability certificate from Chartered Structural Engineer",
          "Fire NOC from State Fire Department",
          "Lift installation approval (for multi-floor hospitals)",
          "Occupancy certificate / completion certificate",
        ],
      },
    ],
    dprConsiderations: [
      { chapter: "Market Demand & Catchment Area", specificNote: "Healthcare DPRs require a primary catchment area analysis (5-30 km radius) covering population, existing bed-to-population ratio vs national benchmarks, disease burden profile, and competition mapping. HMIS (Health Management Information System) state data and district health statistics are critical reference points." },
      { chapter: "Revenue Projections", specificNote: "Model Bed Occupancy Rate (BOR) conservatively — starting from 20–30% in Year 1 ramping to 60–70% by Year 3-4. Separate OPD, IPD, surgical, diagnostic, and pharmacy revenue streams. Ayushman Bharat tariff rates and private billing rates must be clearly distinguished." },
      { chapter: "Means of Finance", specificNote: "Hospital projects often combine a main term loan with separate equipment loans, promoter equity, and sometimes NHB refinance through commercial banks. Clearly segregate each funding source in the means of finance table." },
    ],
    cmaConsiderations: [
      { aspect: "Revenue Ramp-Up Modeling", industryNote: "CMA projections must model the slow hospital revenue ramp-up. Year 1 projections should be conservative (20–30% BOR). Aggressive Year 1 projections are a red flag for credit committees." },
      { aspect: "Debtor Profile", industryNote: "Ayushman Bharat / CGHS / state health scheme receivables have specific payment cycles (typically 30–90 days from claim submission). Third-party administrator (TPA) insurance claims may have 15–45 day cycles. CMA Form III must reflect realistic debtor aging." },
    ],
    financialMetrics: [
      { metric: "Average Revenue Per Occupied Bed (ARPOB) — per day", indicativeRange: "₹3,000–₹8,000 (Tier-2 non-specialty) to ₹15,000–₹30,000 (metro multi-specialty)", basis: "Published hospital sector ARPOB data from CRISIL, ICRA healthcare sector reports", source: "CRISIL Sector Report — Indian Healthcare 2024", asOf: "2024-01", disclaimer: METRIC_DISCLAIMER },
      { metric: "Bed Occupancy Rate (Stabilized)", indicativeRange: "55–70% (Tier-2, multi-specialty)", basis: "NHA (National Health Authority) and private hospital operational benchmarks", source: "NHA India — Healthcare System Data 2023", asOf: "2023-09", disclaimer: METRIC_DISCLAIMER },
      { metric: "EBITDA Margin (Stabilized)", indicativeRange: "15–25% (private multi-specialty hospitals)", basis: "Published rated hospital entity financials (ICRA/CRISIL)", source: "ICRA Healthcare Sector Study 2024", asOf: "2024-01", disclaimer: METRIC_DISCLAIMER },
    ],
    registrationsLicenses: [
      { name: "Clinical Establishment Registration", authority: "State Health Department / District Medical Officer", mandatory: true },
      { name: "Drug License (In-Hospital Pharmacy)", authority: "State Drug Controller", mandatory: true, note: "Required for selling or dispensing drugs from in-hospital pharmacy." },
      { name: "AERB Radiation Safety License", authority: "Atomic Energy Regulatory Board (AERB)", mandatory: true, note: "For X-ray, CT, and any radiation-emitting equipment." },
      { name: "PC-PNDT Registration", authority: "State Appropriate Authority", mandatory: true, note: "Mandatory for any facility performing prenatal diagnostic procedures." },
      { name: "Bio-Medical Waste Authorization", authority: "State Pollution Control Board", mandatory: true },
      { name: "NABH Accreditation", authority: "National Accreditation Board for Hospitals & Healthcare Providers", mandatory: false, note: "Not mandatory but strongly recommended — required for Ayushman Bharat panel and certain bank financing programs." },
      { name: "Fire NOC", authority: "State Fire Department", mandatory: true },
    ],
    governmentSchemes: [
      {
        schemeName: "Ayushman Bharat — PM-JAY (Empanelment)",
        schemeType: "Working Capital Support",
        administeredBy: "National Health Authority (NHA)",
        applicability: "NABH-accredited or pre-accreditation hospitals meeting facility standards. PM-JAY empanelment provides guaranteed patient inflow and government-reimbursed revenue.",
        sourceUrl: "https://pmjay.gov.in",
        lastVerified: "2025-03-01",
        reviewedBy: "Senior Financial Analyst, VS Advisory",
        disclaimer: SCHEME_DISCLAIMER,
      },
      {
        schemeName: "NHB Healthcare Finance (via commercial banks)",
        schemeType: "Interest Subvention",
        administeredBy: "National Housing Bank / RBI",
        applicability: "Affordable healthcare infrastructure projects in underserved geographies. Channeled via scheduled commercial banks.",
        sourceUrl: "https://nhb.org.in",
        lastVerified: "2025-03-01",
        reviewedBy: "Senior Financial Analyst, VS Advisory",
        disclaimer: SCHEME_DISCLAIMER,
      },
    ],
    potentialRisks: [
      { category: "Financial", title: "Slow Revenue Ramp-Up", description: "Hospitals typically take 2–3 years to reach sustainable bed occupancy. This places heavy debt servicing pressure during the stabilization phase if moratorium is insufficient." },
      { category: "Operational", title: "Physician Recruitment & Retention", description: "Quality consultants and specialists are scarce outside metros. Inability to recruit key specialists can permanently impair specialty revenue streams." },
      { category: "Regulatory", title: "Clinical Establishment Compliance", description: "The Clinical Establishments Act mandates minimum standards for equipment, staffing, records, and patient safety. Non-compliance leads to license cancellation." },
      { category: "Market", title: "Competitive Landscape — Corporate Chains", description: "Expansion of national hospital chains (Apollo, Fortis, Manipal) into Tier-2 cities creates competitive pressure on pricing and physician recruitment for independent hospitals." },
    ],
    vsAdvisoryProcess: [
      { step: 1, title: "Catchment Area & Feasibility Study", description: "Analyze population demographics, disease burden, existing hospital capacity, and demand-supply gap in the target geography." },
      { step: 2, title: "Business Plan & Revenue Model", description: "Define specialty mix, bed mix (general ward / semi-private / ICU), government vs private billing revenue ratio." },
      { step: 3, title: "DPR with Conservative Ramp-Up", description: "Build IBA-compliant DPR with realistic 3-year ramp-up curve, equipment list, and civil cost schedule." },
      { step: 4, title: "Equipment Loan & Term Loan Structuring", description: "Separate equipment financing from civil term loan, structure adequate moratorium." },
      { step: 5, title: "Regulatory Roadmap", description: "Sequence AERB, Clinical Establishment, NABH, Bio-Medical Waste, Drug License applications." },
    ],
    faqs: [
      {
        question: "How long a moratorium is typical for a new hospital project?",
        answer: "New hospital projects typically require 18 to 36 months of moratorium from term loan disbursement. This covers an 18–24 month construction and equipment installation period plus a 6–12 month trial operation and ramp-up period. An inadequate moratorium period is one of the most common causes of early debt stress in hospital projects.",
      },
      {
        question: "Is NABH accreditation required before taking a bank loan for a hospital?",
        answer: "NABH accreditation is not a universal pre-condition for hospital bank loans. However, certain banks, NHB-channeled healthcare finance programs, and government health scheme empanelment (Ayushman Bharat) do prefer or require NABH Pre-Accreditation Entry Level certification. We advise initiating the NABH pre-accreditation process during the construction phase itself.",
      },
    ],
    relatedServiceSlugs: ["dpr", "financial-modelling", "project-feasibility", "machinery-finance"],
    seo: {
      metaTitle: "Hospital Project Finance & DPR Advisory | VS Advisory",
      metaDescription: "Structured project finance, DPR preparation, and credit advisory for hospitals, nursing homes, and medical centers in India.",
      keywords: ["hospital project finance India", "nursing home bank loan", "hospital DPR preparation", "medical center term loan", "healthcare infrastructure financing India"],
    },
  },

  // =========================================================================
  // 4. SCHOOLS
  // =========================================================================
  {
    id: "schools",
    slug: "schools",
    title: "Schools & Educational Institutions",
    shortTitle: "Schools",
    sector: "Healthcare & Education",
    sectorId: "healthcare-education",
    badge: "Education Infrastructure",
    iconName: "GraduationCap",
    lastReviewed: "2025-03-01",
    reviewedBy: "Senior Financial Analyst, VS Advisory",
    sourceReferences: [
      { title: "RBI PSL Guidelines — Education Loans", type: "RBI" },
      { title: "CBSE / State Board Affiliation Requirements", type: "Other" },
    ],
    hero: {
      headline: "Project Finance & Advisory for Schools & Educational Institutions",
      subheadline: "DPR, business planning, and infrastructure finance for CBSE/ICSE/State board schools, vocational training centers, and skill development institutions.",
      keyParameters: [
        { label: "Project Types", value: "K-12 Schools, Skill Centers, Junior Colleges" },
        { label: "Revenue Model", value: "Admission fees, Annual fees, Hostel revenue" },
        { label: "Key Finance Challenge", value: "Slow student enrollment ramp-up" },
      ],
    },
    overview: {
      title: "Private School Infrastructure Finance — The Indian Context",
      paragraphs: [
        "India's private school sector has grown significantly, driven by rising middle-class aspirations and persistent demand for English-medium, CBSE or ICSE-affiliated schools in Tier-2 and Tier-3 cities. Despite this demand, school projects present unique financing challenges: they are non-commercial in regulatory terms yet function as businesses, creating an inherent tension in how banks approach their credit appraisal.",
        "Private schools structured as Section 8 Companies, Trusts, or Societies face lender reluctance in India because banking regulations typically prohibit direct profit distribution to shareholders, raising questions about debt repayment capacity. Schools structured as private limited companies (in states permitting commercial school management) have cleaner credit profiles.",
        "The key financial challenge is the multi-year student enrollment ramp-up — a new 1,000-student school will realistically achieve that enrollment only in Year 5–7. DPRs must model this trajectory conservatively.",
      ],
    },
    businessModels: [
      {
        title: "CBSE-Affiliated Day School",
        description: "Day school affiliated to Central Board of Secondary Education (CBSE) for Classes 1 to 12.",
        revenueDrivers: ["Annual tuition fees per student", "Activity and development fees", "Transport fees (if own buses)", "Canteen and stationery revenue"],
      },
      {
        title: "Residential / Boarding School",
        description: "Residential school with on-campus hostel, dining, sports, and co-curricular infrastructure.",
        revenueDrivers: ["Combined tuition + boarding fee (significantly higher per-student revenue)", "Hostel operations", "Summer camp and weekend program revenue"],
      },
      {
        title: "Vocational Training / Skill Development Center",
        description: "Industry-aligned vocational training under NSDC, ITI, or private certification offering courses in trades or technology.",
        revenueDrivers: ["Course fee per student", "NSDC / government training program contract revenue", "Corporate training contracts"],
      },
    ],
    projectComponents: [
      {
        head: "Civil & Campus Infrastructure",
        description: "Academic blocks, administrative block, laboratories, sports, and support facilities.",
        typicalElements: ["Classroom blocks (RCC / load-bearing)", "Science, Computer, Language laboratories", "Library and resource center", "Multipurpose hall / auditorium", "Sports ground, basketball / volleyball courts", "Staff quarters (for residential schools)", "Dining hall and kitchen (residential schools)"],
      },
      {
        head: "Educational Equipment & Furniture",
        description: "Classroom furniture, laboratory equipment, IT hardware, and AV systems.",
        typicalElements: ["Classroom furniture (desks, chairs, blackboards/smart boards)", "Lab equipment (Physics, Chemistry, Biology)", "Computer lab hardware (laptops, servers)", "Library books and e-learning subscriptions", "Projectors, smart classroom AV systems"],
      },
    ],
    costHeads: [
      {
        category: "School Operating Costs",
        components: [
          "Teaching staff salaries (largest cost component)",
          "Administrative and support staff",
          "Power and water (continuous supply)",
          "Maintenance of buildings and equipment",
          "Marketing and student recruitment",
          "Stationery, lab consumables",
          "Debt service on term loan",
        ],
        note: "Staff salaries typically represent 50–65% of total operating expenditure for schools.",
      },
    ],
    infrastructure: [
      { type: "Land", details: "CBSE affiliation requires minimum 1 acre in rural areas and 0.5–0.8 acres in urban locations (norms vary by Board and state). RTE norms set minimum school standards." },
      { type: "Classroom Area", details: "Minimum 1 sq m per student in classroom as per CBSE norms. Science labs and computer labs require additional area." },
      { type: "Sports & Open Area", details: "Mandatory open/play area as per CBSE norms. Residential schools require additional sports infrastructure." },
    ],
    financingStructure: {
      title: "Indicative Financing Structure — Schools",
      disclaimer: FINANCING_DISCLAIMER,
      items: [
        { aspect: "Promoter Structure for Banking", indicativeConvention: "Private Limited Companies have cleaner credit profiles than Trusts/Societies", note: "Banks prefer lending to commercially structured entities. Trust-operated schools may face lender restrictions." },
        { aspect: "Debt:Equity", indicativeConvention: "60:40 to 65:35 — banks are generally conservative on education projects", note: "Revenue ramp-up risk and perceived inability to liquidate collateral (school buildings are not easily repurposed) makes banks conservative." },
        { aspect: "Moratorium", indicativeConvention: "12 to 24 months — to account for construction and first enrollment cycle", note: "Revenue only begins after construction AND successful CBSE/board affiliation AND first enrollment cycle." },
        { aspect: "Tenure", indicativeConvention: "7 to 10 years", note: "Longer tenures justified by stable long-term cash flow nature of schools." },
      ],
    },
    commonDocumentation: [
      {
        category: "Education Board & Regulatory",
        items: [
          "CBSE / ICSE / State Board Affiliation Letter (or Application Acknowledgement)",
          "NOC from State Education Department",
          "Society / Trust / Company registration documents",
          "Land conversion from agricultural to educational/institutional use",
          "Building plan approval from municipal/panchayat authority",
          "Fire NOC",
        ],
      },
    ],
    dprConsiderations: [
      { chapter: "Market Demand Analysis", specificNote: "School DPRs require student enrollment demand analysis — population in catchment area (0–3 km radius for primary, 5–10 km for secondary), existing school capacity, school density, and affordability profile of target fee bracket." },
      { chapter: "Revenue Projections", specificNote: "Model student enrollment ramp-up class-by-class (opening only Class 1 in Year 1 and adding one class per year until full strength). Avoid projecting full enrollment from Year 1 — this is a common DPR rejection reason." },
    ],
    cmaConsiderations: [
      { aspect: "Seasonal Fee Collections", industryNote: "School fee income is received primarily in April–June (annual fee collection) and October (second term). CMA cash flow projections must reflect this seasonality and ensure adequate working capital for non-peak months." },
    ],
    financialMetrics: [
      { metric: "Annual Fee Per Student (CBSE Urban Tier-2)", indicativeRange: "₹40,000–₹1,50,000 per annum (varies significantly by location, board, and facilities)", basis: "State-level RTE fee fixation data and market survey benchmarks", source: "State Fee Regulatory Committee orders (various states)", asOf: "2024-01", disclaimer: METRIC_DISCLAIMER },
    ],
    registrationsLicenses: [
      { name: "CBSE / State Board Affiliation", authority: "Central Board of Secondary Education / State Board", mandatory: true },
      { name: "Society / Trust / Company Registration", authority: "Registrar of Societies / Registrar of Companies", mandatory: true },
      { name: "NOC from State Education Department", authority: "State Education Department / DEO", mandatory: true },
      { name: "RTE Compliance Certificate", authority: "Block Education Officer / District Education Officer", mandatory: true },
      { name: "Fire NOC", authority: "State Fire Department", mandatory: true },
    ],
    governmentSchemes: [
      {
        schemeName: "Skill Development Initiative (PMKVY) — for Skill Centers",
        schemeType: "Grant",
        administeredBy: "Ministry of Skill Development & Entrepreneurship (MSDE) via NSDC",
        applicability: "Government-recognized vocational training centers operating PMKVY training programs. Not applicable to regular K-12 schools.",
        sourceUrl: "https://pmkvyofficial.org",
        lastVerified: "2025-03-01",
        reviewedBy: "Senior Financial Analyst, VS Advisory",
        disclaimer: SCHEME_DISCLAIMER,
      },
    ],
    potentialRisks: [
      { category: "Financial", title: "Enrollment Ramp-Up Risk", description: "Revenue only starts after construction, affiliation, and first enrollment cycle. Aggressive enrollment projections in DPRs are the primary cause of early school project defaults." },
      { category: "Regulatory", title: "CBSE Affiliation Compliance", description: "CBSE performs inspections and can withdraw or suspend affiliation for infrastructure, staff qualification, or compliance violations." },
      { category: "Market", title: "Fee Regulatory Risk", description: "Multiple states have enacted fee regulatory laws that cap or restrict fee hikes, limiting revenue growth." },
    ],
    vsAdvisoryProcess: [
      { step: 1, title: "Entity Structure Advisory", description: "Advise on optimal entity structure (Pvt Ltd vs Trust) for banking credit access." },
      { step: 2, title: "Enrollment Model & Phased DPR", description: "Prepare enrollment ramp-up model and phased construction DPR." },
      { step: 3, title: "CBSE Affiliation Roadmap", description: "Document compliance requirements and timeline for CBSE affiliation." },
      { step: 4, title: "Lender Identification & Submission", description: "Identify education-friendly lenders and manage credit appraisal process." },
    ],
    faqs: [
      {
        question: "Can a Trust operate a school and take a bank loan?",
        answer: "Yes, registered Trusts and Societies can take bank loans for school infrastructure. However, many banks are cautious as Trusts/Societies cannot distribute profits (making exit and recovery difficult for lenders). Banks often prefer lending when there is strong promoter personal guarantee, tangible collateral (land and building mortgage), and clear debt service coverage from fee revenues.",
      },
    ],
    relatedServiceSlugs: ["dpr", "business-planning", "project-feasibility", "term-loan-advisory"],
    seo: {
      metaTitle: "School Project Finance & DPR Advisory | VS Advisory",
      metaDescription: "Expert DPR preparation, business planning, and project finance advisory for CBSE schools and educational institutions in India.",
      keywords: ["school project finance India", "CBSE school bank loan", "educational institution DPR", "school infrastructure loan", "private school financing"],
    },
  },

  // =========================================================================
  // 5. HOTELS & RESORTS
  // =========================================================================
  {
    id: "hotels-resorts",
    slug: "hotels-resorts",
    title: "Hotels, Resorts & Hospitality Projects",
    shortTitle: "Hotels & Resorts",
    sector: "Hospitality & Retail",
    sectorId: "hospitality-retail",
    badge: "Hospitality Infrastructure",
    iconName: "Hotel",
    lastReviewed: "2025-03-01",
    reviewedBy: "Senior Financial Analyst, VS Advisory",
    sourceReferences: [
      { title: "Ministry of Tourism — Hotel Classification Guidelines", type: "Government Notification" },
      { title: "ICRA Hospitality Sector Report 2024", type: "Industry Report" },
    ],
    hero: {
      headline: "Project Finance & Advisory for Hotels, Resorts & Hospitality Projects",
      subheadline: "Structured DPR, financial modelling, and term loan advisory for budget hotels, business hotels, eco-resorts, and destination resorts.",
      keyParameters: [
        { label: "Project Types", value: "Budget, Business, Boutique, Eco-Resort, Destination" },
        { label: "Key Metrics", value: "Occupancy Rate, ADR, RevPAR" },
        { label: "Finance Character", value: "Long moratorium, 10–15 year tenure" },
      ],
    },
    overview: {
      title: "Hotel & Resort Project Finance in India",
      paragraphs: [
        "India's hospitality sector is one of the largest and most diverse in the world, spanning budget lodges to ultra-luxury destination resorts. From a project finance perspective, hotels and resorts represent high-capex, long-gestation investments where capital recovery through RevPAR (Revenue Per Available Room) takes 7–15 years.",
        "Banks consider hotel and resort projects high-risk due to the high proportion of non-productive capex (swimming pools, restaurants, landscaping) that don't directly generate proportionate revenue. Lenders apply conservative Loan-to-Value (LTV) ratios and require substantial promoter equity contribution.",
        "Star classification from the Ministry of Tourism and FHRAI is an important operational milestone that impacts both revenue potential (star-rated hotels command premium pricing) and lender confidence.",
      ],
    },
    businessModels: [
      {
        title: "Business / Budget Hotel",
        description: "Standardized room product targeting corporate travelers, pilgrims, or transit guests. 20–100 rooms. Focus on high occupancy and consistent ADR.",
        revenueDrivers: ["Occupancy Rate × ADR (Average Daily Rate)", "Food & Beverage: restaurant, room service", "Conference / banquet hall revenue", "Ancillary: laundry, parking, minibar"],
      },
      {
        title: "Destination Resort / Eco-Resort",
        description: "Leisure resort in tourist destination (hill station, beach, heritage site). 20–80 cottages/rooms with extensive F&B and recreation.",
        revenueDrivers: ["Room revenue (premium ADR on weekends/holidays)", "Restaurant and bar revenue", "Adventure activities, spa, wellness", "Wedding and MICE events"],
      },
      {
        title: "Heritage / Boutique Hotel",
        description: "Restored heritage building or boutique property with unique character. Premium positioning in niche travel segment.",
        revenueDrivers: ["Premium pricing based on unique experience", "Luxury F&B revenue", "Cultural experience packages", "Corporate retreat revenue"],
      },
    ],
    projectComponents: [
      {
        head: "Civil & Hotel Structure",
        description: "Core hotel building, room blocks, lobby, F&B areas, and support infrastructure.",
        typicalElements: ["Main building / room blocks (RCC or heritage restoration)", "Swimming pool", "Restaurant(s), Bar, Banquet hall", "Reception lobby, guest lounge", "Spa, gym, recreation area", "Staff quarters, back-of-house areas", "Parking, landscape, boundary"],
      },
      {
        head: "Furniture, Fixtures & Equipment (FF&E)",
        description: "Complete hotel furnishing and operational equipment.",
        typicalElements: ["Room furniture, beds, bathrooms", "Restaurant furniture and kitchen equipment", "Reception and lobby FF&E", "Housekeeping equipment", "Laundry equipment", "PMS (Property Management System) software"],
      },
    ],
    costHeads: [
      {
        category: "Hotel Operating Costs",
        components: [
          "Staff salaries (typically 25–35% of revenue)",
          "Food & beverage cost of goods (30–35% of F&B revenue)",
          "Power, fuel, water (significant for pool, laundry, kitchen)",
          "Marketing, OTA commissions (OTAs charge 15–25%)",
          "Property maintenance, housekeeping supplies",
          "Term loan interest and depreciation",
        ],
        note: "Hotel economics are highly sensitive to occupancy. Fixed costs (staff, power, maintenance) continue regardless of occupancy, creating high operating leverage.",
      },
    ],
    infrastructure: [
      { type: "Power", details: "Hotels require 24/7 uninterrupted power. DG backup is mandatory. Swimming pools and HVAC are major power consumers." },
      { type: "Water", details: "Hotels require 200–400 liters per room per day. Borewell and municipal connection both required. Swimming pool refilling and landscaping add significant water demand." },
      { type: "Sewage Treatment", details: "STP (Sewage Treatment Plant) mandatory for resorts outside municipal limits. SPCB CTE required for hotels above a certain room count." },
    ],
    financingStructure: {
      title: "Indicative Financing Structure — Hotels",
      disclaimer: FINANCING_DISCLAIMER,
      items: [
        { aspect: "Debt:Equity", indicativeConvention: "50:50 to 60:40 — banks are conservative on hotels due to high non-productive capex", note: "Swimming pools, landscaping, and luxury FF&E do not generate proportionate revenue — banks often exclude these from eligible project cost." },
        { aspect: "Moratorium", indicativeConvention: "12 to 24 months (construction) + 6 to 12 months (stabilization)", note: "Hotels require 1–2 seasons to achieve stabilized occupancy." },
        { aspect: "Tenure", indicativeConvention: "10 to 15 years", note: "Long tenure reflects slow RevPAR build-up and high initial capex recovery period." },
      ],
    },
    commonDocumentation: [
      {
        category: "Hotel & Tourism Regulatory",
        items: [
          "Ministry of Tourism — Hotel Classification Certificate (Star Rating)",
          "FHRAI membership",
          "Liquor / Bar License from State Excise Department",
          "FSSAI License for restaurant/kitchen operations",
          "Police & Municipality trade license",
          "Lift installation approval",
          "Swimming pool registration (state-specific)",
        ],
      },
    ],
    dprConsiderations: [
      { chapter: "Market Demand — Occupancy & ADR", specificNote: "Hotel DPRs must include STR (Smith Travel Research) or local destination occupancy trend analysis. Seasonal occupancy patterns (peak vs off-peak months), average ADR for comparable properties in the destination, and competitive hotel inventory are critical inputs." },
      { chapter: "Revenue Modeling", specificNote: "Revenue must be projected separately for: Room revenue, F&B revenue, and Other income (banquets, spa, parking). RevPAR (Revenue Per Available Room) must be presented and benchmarked against comparable hotels." },
    ],
    cmaConsiderations: [
      { aspect: "Seasonal Revenue Cycle", industryNote: "Hotels have distinct peak and off-peak seasons. CMA projections must model month-by-month occupancy trends and resulting revenue, not just annual averages." },
      { aspect: "Debtor Profile", industryNote: "Corporate accounts and OTA (online travel agency) payments may have 15–30 day payment cycles. Government MICE and advance bookings vary. Accurate debtor aging is critical." },
    ],
    financialMetrics: [
      { metric: "Stabilized Occupancy Rate (Budget/Business Hotel)", indicativeRange: "60–75% (metro and Tier-1 destinations)", basis: "Hospitality sector STR data and FHRAI reports", source: "FHRAI Indian Hotel Industry Survey 2023–24", asOf: "2024-01", disclaimer: METRIC_DISCLAIMER },
      { metric: "Average Daily Rate (ADR) — Budget Hotel Tier-2 City", indicativeRange: "₹1,500–₹4,000 per room per night", basis: "OTA (MakeMyTrip, Booking.com) listed rates for comparable properties", source: "Industry market survey — indicative", asOf: "2024-01", disclaimer: METRIC_DISCLAIMER },
    ],
    registrationsLicenses: [
      { name: "Ministry of Tourism Star Classification", authority: "Hotel & Restaurant Approval & Classification Committee (HRACC)", mandatory: false, note: "Voluntary but strongly recommended — impacts pricing, brand positioning, and lender confidence." },
      { name: "Bar / Liquor License", authority: "State Excise Department", mandatory: false, note: "Required if hotel intends to serve alcohol. Licensing norms and fees vary significantly by state." },
      { name: "FSSAI License", authority: "FSSAI", mandatory: true },
      { name: "Fire NOC", authority: "State Fire Department", mandatory: true },
      { name: "STP Clearance from SPCB", authority: "State Pollution Control Board", mandatory: true, note: "For hotels/resorts outside municipal sewage network." },
    ],
    governmentSchemes: [
      {
        schemeName: "Ministry of Tourism — PRASHAD / SWADESH DARSHAN",
        schemeType: "Grant",
        administeredBy: "Ministry of Tourism, Government of India",
        applicability: "Tourism infrastructure projects in designated circuits / pilgrimage destinations. Specific eligibility conditions apply.",
        sourceUrl: "https://tourism.gov.in",
        lastVerified: "2025-03-01",
        reviewedBy: "Senior Financial Analyst, VS Advisory",
        disclaimer: SCHEME_DISCLAIMER,
      },
    ],
    potentialRisks: [
      { category: "Market", title: "Occupancy & Seasonal Risk", description: "Hotels in purely seasonal destinations face very low off-season occupancy. Revenue projections must account for 3–4 months of near-zero occupancy in some resort destinations." },
      { category: "Financial", title: "High Fixed Cost Base", description: "Staff, power, and maintenance costs continue during low-occupancy periods, creating potential cash flow shortfalls that require adequate working capital buffers." },
      { category: "Operational", title: "Online Travel Agency (OTA) Dependency", description: "Heavy reliance on OTA platforms exposes hotels to high commission costs (15–25%) and ranking algorithm changes." },
    ],
    vsAdvisoryProcess: [
      { step: 1, title: "Destination & Feasibility Analysis", description: "Analyze destination tourism traffic, competitive hotel supply, and RevPAR benchmarks." },
      { step: 2, title: "Hotel Concept & Revenue Model", description: "Define star category, room mix, F&B concept, and MICE capacity." },
      { step: 3, title: "DPR & Financial Modelling", description: "Prepare DPR with realistic seasonal occupancy projections and sensitivity analysis." },
      { step: 4, title: "Lender & PE Matching", description: "Match project profile to appropriate lenders or hospitality-focused NBFCs/PE funds." },
    ],
    faqs: [
      {
        question: "Why do banks require higher promoter equity for hotel projects?",
        answer: "Banks typically require 40–50% promoter equity for hotel projects (vs 25–35% for manufacturing) because: (1) a significant portion of hotel capex (swimming pool, landscaping, luxury FF&E) is 'non-productive' from a revenue generation standpoint; (2) hotel revenues are volatile (seasonal, cyclical); and (3) converting a hotel property to another use in case of default is complex, reducing effective security value.",
      },
    ],
    relatedServiceSlugs: ["dpr", "financial-modelling", "project-feasibility", "sensitivity-analysis"],
    seo: {
      metaTitle: "Hotel & Resort Project Finance Advisory | VS Advisory",
      metaDescription: "Expert DPR, financial modelling, and project finance advisory for hotels, resorts, and hospitality projects in India.",
      keywords: ["hotel project finance India", "resort bank loan DPR", "hotel financial model", "hospitality project advisory", "hotel term loan India"],
    },
  },

  // =========================================================================
  // 6. RESTAURANTS
  // =========================================================================
  {
    id: "restaurants",
    slug: "restaurants",
    title: "Restaurants, Cloud Kitchens & Food Service Businesses",
    shortTitle: "Restaurants",
    sector: "Hospitality & Retail",
    sectorId: "hospitality-retail",
    badge: "Food Service",
    iconName: "UtensilsCrossed",
    lastReviewed: "2025-03-01",
    reviewedBy: "Senior Financial Analyst, VS Advisory",
    sourceReferences: [
      { title: "FSSAI Food Business Licensing Guidelines", type: "Government Notification", url: "https://foscos.fssai.gov.in" },
      { title: "NRAI (National Restaurant Association of India) Sector Report", type: "Industry Report" },
    ],
    hero: {
      headline: "Project Finance & Business Advisory for Restaurants & Food Service",
      subheadline: "Business planning, working capital advisory, and DPR preparation for restaurants, quick service restaurants (QSR), cloud kitchens, and food courts.",
      keyParameters: [
        { label: "Project Types", value: "Full Service, QSR, Cloud Kitchen, Food Court" },
        { label: "Key Revenue Drivers", value: "Average Order Value, Cover Turns, Delivery Orders" },
        { label: "Key Challenge", value: "High attrition rates, thin margins" },
      ],
    },
    overview: {
      title: "Restaurant & Food Service Industry — Finance Context",
      paragraphs: [
        "India's food service industry is one of the fastest-growing sectors, driven by urbanization, rising disposable incomes, and the organized food delivery ecosystem (Swiggy, Zomato). However, banks generally view standalone restaurant projects as high-risk due to thin margins, high attrition, and limited tangible collateral.",
        "From a banking perspective, restaurant financing works best when structured around tangible assets (owned property, established chain franchisee), proven business models (franchise formats), or working capital facilities for established restaurants rather than fresh greenfield projects.",
        "Cloud kitchens present a distinct financing opportunity — lower capex, faster ramp-up, and lower fixed costs compared to full-service restaurants — making them more bankable at the micro-enterprise level.",
      ],
    },
    businessModels: [
      {
        title: "Full-Service Restaurant",
        description: "Dine-in restaurant with table service, full menu, bar (if licensed), and ambiance investment.",
        revenueDrivers: ["Revenue per cover × covers per day", "Average bill value × table turns", "Bar and beverage revenue (if licensed)"],
      },
      {
        title: "Quick Service Restaurant (QSR)",
        description: "Counter-service fast food format. Standardized menu, high throughput, low per-head cost.",
        revenueDrivers: ["Number of orders per hour × average ticket size", "Delivery order revenue (Swiggy/Zomato)", "Franchise royalty (if franchise format)"],
      },
      {
        title: "Cloud Kitchen / Virtual Restaurant",
        description: "Delivery-only commercial kitchen without dine-in. Multiple virtual restaurant brands from one kitchen.",
        revenueDrivers: ["Delivery orders per day × average order value", "Multi-brand revenue from single kitchen infrastructure", "Dark kitchen space rental to other brands"],
      },
    ],
    projectComponents: [
      {
        head: "Restaurant Setup Costs",
        description: "Interior, kitchen equipment, furniture, and technology.",
        typicalElements: ["Interior design and fit-out (furniture, flooring, lighting, décor)", "Commercial kitchen equipment (ranges, ovens, refrigerators, dishwashers)", "POS (Point of Sale) system and display boards", "HVAC / air conditioning", "Signage and branding"],
      },
    ],
    costHeads: [
      {
        category: "Restaurant Operating Costs",
        components: [
          "Food cost (raw material): Typically 28–35% of revenue",
          "Labor cost: 20–30% of revenue",
          "Rent (if leased premises): Can be 8–15% of revenue in high-street locations",
          "Power and utilities",
          "OTA commission (Swiggy/Zomato): 18–25% of delivery revenue",
          "Marketing and promotions",
        ],
        note: "Restaurant margins are thin — EBITDA margins of 10–20% are considered healthy. High rent locations significantly compress margins.",
      },
    ],
    infrastructure: [
      { type: "Kitchen Space", details: "Commercial kitchen requires minimum 250–500 sq ft with adequate ventilation, exhaust, and fire suppression system." },
      { type: "Power", details: "3-phase commercial power connection. Adequate load for commercial kitchen equipment (typically 15–40 KW)." },
      { type: "Water & Drainage", details: "Adequate water supply and grease trap drainage (mandatory for commercial kitchens under municipal regulations)." },
    ],
    financingStructure: {
      title: "Indicative Financing Structure — Restaurants",
      disclaimer: FINANCING_DISCLAIMER,
      items: [
        { aspect: "Typical Bank Approach", indicativeConvention: "Most banks are cautious about greenfield restaurant loans without tangible collateral", note: "Working capital loans for established restaurants are more readily available than term loans for new setups." },
        { aspect: "Equipment Finance", indicativeConvention: "Commercial kitchen equipment hypothecation-backed loans available from equipment NBFCs", note: "Some equipment vendors offer installment financing." },
        { aspect: "CGTMSE for Micro Units", indicativeConvention: "Small restaurants below ₹5 Cr project cost may qualify for CGTMSE-backed loans", note: "Subject to individual bank underwriting and scheme eligibility." },
      ],
    },
    commonDocumentation: [
      {
        category: "F&B Regulatory",
        items: [
          "FSSAI Food Business Operator License",
          "Municipal Trade License / Eating House License",
          "Fire NOC from Fire Department",
          "FSSAI hygiene and safety compliance certification",
          "Liquor License from State Excise Department (if bar)",
          "GST Registration",
        ],
      },
    ],
    dprConsiderations: [
      { chapter: "Revenue Projections", specificNote: "Restaurant DPRs must separately model dine-in covers per day (by meal period: breakfast/lunch/dinner), delivery orders per day, and average ticket size. Unrealistic cover projections are the primary rejection reason." },
    ],
    cmaConsiderations: [
      { aspect: "Weekly & Monthly Revenue Cycles", industryNote: "Restaurant revenue has strong weekly (weekend vs weekday) and monthly (festival season vs off-season) patterns. CMA projections must not use flat monthly averages." },
    ],
    financialMetrics: [
      { metric: "EBITDA Margin (Established Restaurant)", indicativeRange: "10–20% of revenue (full service); 15–25% (QSR); 20–30% (cloud kitchen)", basis: "NRAI sector survey and published restaurant chain financials", source: "NRAI Indian Restaurant Industry Report 2023", asOf: "2023-12", disclaimer: METRIC_DISCLAIMER },
    ],
    registrationsLicenses: [
      { name: "FSSAI License", authority: "Food Safety and Standards Authority of India", mandatory: true },
      { name: "Municipal Trade License / Eating House License", authority: "Municipal Corporation / Local Body", mandatory: true },
      { name: "Fire NOC", authority: "State Fire Department", mandatory: true },
      { name: "Bar / Liquor License", authority: "State Excise Department", mandatory: false, note: "Only if serving alcohol." },
      { name: "GST Registration", authority: "GSTN", mandatory: true },
    ],
    governmentSchemes: [
      {
        schemeName: "CGTMSE — Collateral-Free Credit for Micro Enterprises",
        schemeType: "Credit Guarantee",
        administeredBy: "CGTMSE",
        applicability: "Micro food service businesses meeting Udyam MSME eligibility criteria.",
        sourceUrl: "https://cgtmse.in",
        lastVerified: "2025-03-01",
        reviewedBy: "Senior Financial Analyst, VS Advisory",
        disclaimer: SCHEME_DISCLAIMER,
      },
    ],
    potentialRisks: [
      { category: "Market", title: "High Failure Rate", description: "Industry surveys indicate a significant percentage of new restaurants close within 2 years. Location selection, concept, and consistent quality are critical success factors." },
      { category: "Financial", title: "OTA Commission Burden", description: "Online food delivery platforms charge 18–25% commission, severely compressing delivery revenue margins." },
      { category: "Operational", title: "Chef & Kitchen Staff Attrition", description: "High turnover of trained chefs and kitchen staff can disrupt food quality and customer retention." },
    ],
    vsAdvisoryProcess: [
      { step: 1, title: "Business Model & Unit Economics Validation", description: "Validate revenue model, food cost ratio, and EBITDA potential before infrastructure investment." },
      { step: 2, title: "Regulatory Compliance Roadmap", description: "Identify FSSAI, trade license, fire NOC, and liquor license requirements." },
      { step: 3, title: "Working Capital & Equipment Finance Structuring", description: "Structure kitchen equipment financing and working capital for inventory." },
    ],
    faqs: [
      {
        question: "Is it possible to get a bank loan to open a restaurant in India?",
        answer: "Yes, but it is challenging for first-time restaurant owners without collateral. Banks typically prefer: (a) working capital loans for existing profitable restaurants; (b) MSME/CGTMSE-backed loans for micro restaurants below ₹50L; (c) franchise model restaurants with a proven brand (franchise agreement acts as partial comfort). Greenfield standalone full-service restaurant loans above ₹1 Cr typically require significant collateral security.",
      },
    ],
    relatedServiceSlugs: ["business-planning", "working-capital-advisory", "government-scheme-assistance", "startup-advisory"],
    seo: {
      metaTitle: "Restaurant & Cloud Kitchen Finance Advisory | VS Advisory",
      metaDescription: "Business planning, FSSAI compliance, and working capital advisory for restaurants, cloud kitchens, and food service businesses in India.",
      keywords: ["restaurant bank loan India", "cloud kitchen finance", "QSR project report", "food service business advisory", "restaurant FSSAI compliance"],
    },
  },

  // =========================================================================
  // 7. MANUFACTURING UNITS
  // =========================================================================
  {
    id: "manufacturing-units",
    slug: "manufacturing-units",
    title: "Manufacturing Units & Industrial Projects",
    shortTitle: "Manufacturing Units",
    sector: "Manufacturing",
    sectorId: "manufacturing",
    badge: "Industrial Finance",
    iconName: "Factory",
    lastReviewed: "2025-03-01",
    reviewedBy: "Senior Financial Analyst, VS Advisory",
    sourceReferences: [
      { title: "RBI MSME Lending Guidelines", type: "RBI" },
      { title: "SIDBI MSME Finance Handbook", type: "Other" },
    ],
    hero: {
      headline: "Project Finance & DPR Advisory for Manufacturing Units",
      subheadline: "End-to-end project finance and advisory for greenfield factories, industrial expansions, and manufacturing capex across sectors.",
      keyParameters: [
        { label: "Sector Coverage", value: "Auto Components, Plastics, Metal, Chemical, Consumer Goods" },
        { label: "Primary Instruments", value: "Term Loan, Machinery Finance, Working Capital CC" },
        { label: "Standard Norms", value: "IBA DPR Format, Tandon Committee MPBF" },
      ],
    },
    overview: {
      title: "Manufacturing Industry Finance — The Indian Framework",
      paragraphs: [
        "Manufacturing is the backbone of India's MSME economy and the primary target sector for PSL-aligned project lending by commercial banks. Manufacturing projects typically involve land acquisition, civil construction, plant & machinery installation, trial production, and commercial ramp-up — a process spanning 18–36 months from loan sanction to stable operations.",
        "Indian banks have well-established credit appraisal frameworks for manufacturing projects, including IBA-compliant DPR formats, Tandon Committee working capital norms (MPBF), and sector-specific DSCR benchmarks. However, project documentation quality, verified vendor quotations, and realistic capacity ramp-up projections remain persistent weak points in loan proposals.",
        "Manufacturing projects spanning specific sub-sectors (chemicals, hazardous materials, high pollution potential) require additional regulatory scrutiny including environmental impact assessment (EIA) and specialized PCB consents.",
      ],
    },
    businessModels: [
      {
        title: "Component Manufacturing (B2B / Job Work)",
        description: "Contract manufacturing of components for OEMs (automobiles, electronics, consumer goods).",
        revenueDrivers: ["Per-unit machining / conversion charge", "Long-term OEM supply agreements", "Capacity utilization and machine efficiency"],
      },
      {
        title: "Finished Goods Manufacturing (B2C / Trade)",
        description: "Manufacturing finished products for direct sale to distributors, retailers, or end consumers.",
        revenueDrivers: ["Ex-factory price × production volume", "Dealer / distributor margins", "Brand value and market penetration"],
      },
      {
        title: "Process Manufacturing (Chemicals / Pharma / Food)",
        description: "Continuous or batch process manufacturing requiring reactor vessels, process control, and quality compliance.",
        revenueDrivers: ["Batch output × realization price", "Purity / quality premium", "Export realizations"],
      },
    ],
    projectComponents: [
      {
        head: "Land & Civil Construction",
        description: "Industrial land, factory building, utility buildings.",
        typicalElements: ["Industrial plot (MIDC / GIDC / private)", "Factory shed (RCC / pre-engineered building)", "Utility building (compressor room, boiler room, ETP)", "Administrative block", "Covered storage for raw material and FG", "Security cabin, parking"],
      },
      {
        head: "Plant & Machinery",
        description: "Production equipment, material handling, and quality control.",
        typicalElements: ["Core production machinery (CNC, hydraulic press, injection molding, lathe, etc.)", "Material handling (forklifts, cranes, conveyors)", "Quality control equipment (CMM, testing machines)", "Packaging equipment", "Tooling and jigs / fixtures"],
      },
      {
        head: "Utilities & Services",
        description: "Power, water, compressed air, ETP/STP.",
        typicalElements: ["HT/LT electrical infrastructure", "Air compressor system", "Boiler / thermic fluid system", "Effluent Treatment Plant (ETP)", "Water treatment (softener, RO)", "DG set backup power"],
      },
    ],
    costHeads: [
      {
        category: "Manufacturing Operating Costs",
        components: [
          "Raw material cost (typically 45–65% of cost of production)",
          "Power and fuel (varies widely by industry: 5–20% for energy-intensive sectors)",
          "Direct labour: skilled workers, machine operators, quality inspectors",
          "Indirect labour: supervisors, maintenance, stores",
          "Factory overhead: consumables, maintenance, R&M",
          "Packing material",
          "Freight inward (raw material) and outward (finished goods)",
          "Bank interest on working capital CC",
        ],
        note: "Raw material is typically the largest cost component. Power cost is disproportionately high in energy-intensive manufacturing (metals, chemicals, rubber).",
      },
    ],
    infrastructure: [
      { type: "Power", details: "3-phase HT/LT industrial connection. Load requirement varies significantly: 100 KVA to 5 MW+ depending on industry. Connected load sanction from DISCOM mandatory before bank disbursement." },
      { type: "Land", details: "Industrial zone / MIDC / GIDC allocation preferred. Conversion order from agricultural land required for greenfield units outside designated industrial zones." },
      { type: "Water & ETP", details: "Industrial water from MIDC / borewell. ETP mandatory if process effluent is generated. Zero Liquid Discharge (ZLD) norms applicable to certain sectors (textile processing, pharma)." },
    ],
    financingStructure: {
      title: "Indicative Financing Structure — Manufacturing Units",
      disclaimer: FINANCING_DISCLAIMER,
      items: [
        { aspect: "Term Loan Debt:Equity", indicativeConvention: "65:35 to 75:25 for established promoters. 60:40 for first-time industrial ventures.", note: "Strong promoter net worth, existing banking track record, and collateral availability significantly influence debt:equity." },
        { aspect: "Working Capital (CC)", indicativeConvention: "Cash Credit against raw material stock, WIP, and debtors. MPBF assessed under Tandon Method II.", note: "Working capital CC limit sized based on operating cycle analysis. Minimum Current Ratio of 1.33 required." },
        { aspect: "Moratorium", indicativeConvention: "12 to 18 months (construction + trial production)", note: "Manufacturing projects typically take 12–18 months from commencement to commercial production." },
        { aspect: "Tenure", indicativeConvention: "5 to 8 years for term loan", note: "Standard manufacturing project loan tenure." },
      ],
    },
    commonDocumentation: [
      {
        category: "Industrial & Technical",
        items: [
          "Industrial land allotment letter / title deed with non-agricultural land use order",
          "Factory layout and civil drawing from Chartered Engineer",
          "Proforma invoices for all plant & machinery",
          "HT/LT power load sanction from DISCOM",
          "State Pollution Control Board CTE",
          "Environmental clearance (if required under EIA Notification)",
        ],
      },
      {
        category: "Business & Financial",
        items: [
          "Promoter KYC and personal net worth certificate",
          "Past 3 years audited financials (existing companies)",
          "Market survey / supply agreements / LOIs from potential customers",
          "Udyam MSME registration",
        ],
      },
    ],
    dprConsiderations: [
      { chapter: "Technical Feasibility", specificNote: "Manufacturing DPRs must clearly specify production process flow, installed capacity (in units/hour/day/year), planned capacity utilization ramp-up (Year 1: 50-60%, Year 2: 70-75%, Year 3+: 80-85%), and power load calculation." },
      { chapter: "Market Demand", specificNote: "Include customer LOIs or MoUs where available. Industry demand data from sector associations (CII, FICCI, ASSOCHAM), CMIE, or Ministry of Commerce should be cited with date and source." },
      { chapter: "Sensitivity Analysis", specificNote: "Mandatory sensitivity table showing DSCR impact for ±10% and ±15% variations in raw material cost, selling price, and capacity utilization. Breakeven capacity utilization must be explicitly stated." },
    ],
    cmaConsiderations: [
      { aspect: "Raw Material Inventory Holding", industryNote: "Raw material holding days must be realistic and aligned with industry supply chain norms. Overstating inventory to increase CC limits is a common compliance risk flagged by stock auditors." },
      { aspect: "Debtors Aging", industryNote: "B2B manufacturers often have 30–90 day debtors. Large OEM debtors may have 60–90 day payment cycles. Form III must accurately reflect the actual payment cycle, not an optimistic assumption." },
    ],
    financialMetrics: [
      { metric: "DSCR (Term Loan)", indicativeRange: "Minimum 1.50x; ideal 1.75x to 2.25x for PSU bank appraisal", basis: "IBA credit appraisal norms and SIDBI guidelines", source: "SIDBI — MSME Financing Guidelines", asOf: "2024-01", disclaimer: METRIC_DISCLAIMER },
      { metric: "Project IRR (Typical Industrial)", indicativeRange: "15–25% for competitive manufacturing sectors", basis: "NABARD and SIDBI sector project profile benchmarks", source: "NABARD Project Profiles — General Manufacturing", asOf: "2023-12", disclaimer: METRIC_DISCLAIMER },
    ],
    registrationsLicenses: [
      { name: "Factory License", authority: "State Factories Inspectorate (Directorate of Factories)", mandatory: true },
      { name: "State Pollution Control Board CTE & CTO", authority: "SPCB", mandatory: true },
      { name: "Udyam MSME Registration", authority: "Ministry of MSME", mandatory: false, note: "Strongly recommended for PSL classification and scheme access." },
      { name: "BIS Certification (Product-Specific)", authority: "Bureau of Indian Standards", mandatory: false, note: "Mandatory for products under compulsory BIS certification scheme." },
      { name: "Environmental Clearance (if applicable)", authority: "MoEFCC / State EIA Authority", mandatory: false, note: "Required for Category A and B projects under EIA Notification 2006." },
    ],
    governmentSchemes: [
      {
        schemeName: "CGTMSE — Credit Guarantee for Micro and Small Enterprises",
        schemeType: "Credit Guarantee",
        administeredBy: "CGTMSE (MoMSME + SIDBI)",
        applicability: "Micro and Small manufacturing enterprises with valid Udyam registration.",
        sourceUrl: "https://cgtmse.in",
        lastVerified: "2025-03-01",
        reviewedBy: "Senior Financial Analyst, VS Advisory",
        disclaimer: SCHEME_DISCLAIMER,
      },
      {
        schemeName: "SIDBI SMILE (SIDBI Make in India Loan for Enterprises)",
        schemeType: "Working Capital Support",
        administeredBy: "Small Industries Development Bank of India (SIDBI)",
        applicability: "Eligible MSME manufacturing enterprises meeting SIDBI lending criteria.",
        sourceUrl: "https://sidbi.in",
        lastVerified: "2025-03-01",
        reviewedBy: "Senior Financial Analyst, VS Advisory",
        disclaimer: SCHEME_DISCLAIMER,
      },
      {
        schemeName: "State Industrial Policy Capital Investment Subsidy",
        schemeType: "Capital Subsidy",
        administeredBy: "State Industries Departments / DIC (varies by state)",
        applicability: "New industrial investments in eligible states/districts meeting minimum investment and employment thresholds. Norms and quantum vary significantly by state.",
        lastVerified: "2025-03-01",
        reviewedBy: "Senior Financial Analyst, VS Advisory",
        disclaimer: SCHEME_DISCLAIMER,
      },
    ],
    potentialRisks: [
      { category: "Market", title: "Selling Price & Volume Risk", description: "Manufacturing businesses face pricing pressure from cheaper imports, domestic competitors, and commodity cycle volatility." },
      { category: "Operational", title: "Power & Utility Disruption", description: "Industrial production is highly sensitive to power outages. Inadequate DG backup capacity leads to production downtime and order delivery failures." },
      { category: "Regulatory", title: "Environmental Compliance", description: "Non-compliance with SPCB conditions leads to plant closure. ZLD norms in water-intensive industries can be capex-intensive to implement." },
      { category: "Financial", title: "Delayed Commercial Production", description: "Construction delays and machinery commissioning issues can push commercial production beyond moratorium, creating immediate debt stress." },
    ],
    vsAdvisoryProcess: [
      { step: 1, title: "Technical Scoping & Machinery Evaluation", description: "Review capacity requirements, technology selection, and obtain competitive machinery quotations." },
      { step: 2, title: "Land & Regulatory Compliance", description: "Advise on MIDC/GIDC allotment, land use conversion, PCB CTE timeline, and factory license." },
      { step: 3, title: "DPR & Sensitivity Analysis", description: "Prepare IBA-compliant 8-chapter DPR with mandatory sensitivity tables." },
      { step: 4, title: "CMA & Working Capital Structuring", description: "Model MPBF under Tandon Method II and structure CC limit." },
      { step: 5, title: "Government Scheme Identification & Lender Matching", description: "Map eligible state/central schemes and match project to optimal lender." },
    ],
    faqs: [
      {
        question: "What is the minimum promoter margin (equity contribution) required for a manufacturing project loan?",
        answer: "Most commercial banks require a minimum 25–35% promoter equity contribution (i.e., Debt:Equity ratio of 65:35 to 75:25) for manufacturing project loans. For first-time promoters without a proven business track record, banks may require higher promoter margin (35–40%). Government schemes like CGTMSE can reduce the collateral requirement but do not replace the equity contribution requirement.",
      },
    ],
    relatedServiceSlugs: ["dpr", "cma", "term-loan-advisory", "government-scheme-assistance"],
    seo: {
      metaTitle: "Manufacturing Unit Project Finance & DPR | VS Advisory",
      metaDescription: "Expert DPR, CMA, and project finance advisory for manufacturing units and industrial projects in India.",
      keywords: ["manufacturing unit DPR", "factory bank loan India", "industrial project finance", "manufacturing MSME loan", "factory term loan advisory"],
    },
  },

  // =========================================================================
  // 8. SOLAR PROJECTS
  // =========================================================================
  {
    id: "solar-projects",
    slug: "solar-projects",
    title: "Solar Power Projects & Renewable Energy",
    shortTitle: "Solar Projects",
    sector: "Energy & EV Infrastructure",
    sectorId: "energy-infrastructure",
    badge: "Green Energy Finance",
    iconName: "Sun",
    lastReviewed: "2025-03-01",
    reviewedBy: "Senior Financial Analyst, VS Advisory",
    sourceReferences: [
      { title: "MNRE Solar Rooftop Policy Guidelines", type: "Government Notification", url: "https://mnre.gov.in" },
      { title: "IREDA (Indian Renewable Energy Development Agency) Finance Guidelines", type: "Other", url: "https://ireda.gov.in" },
      { title: "RBI Priority Sector — Renewable Energy Lending", type: "RBI" },
    ],
    hero: {
      headline: "Project Finance & Advisory for Solar Power Projects",
      subheadline: "Bankable DPR, Power Purchase Agreement (PPA) review, and term loan advisory for rooftop, ground-mount, and utility-scale solar power projects.",
      keyParameters: [
        { label: "PSL Classification", value: "Renewable Energy — Priority Sector Lending" },
        { label: "Key Finance Driver", value: "Bankable PPA & energy generation model" },
        { label: "Tax Benefit", value: "Accelerated Depreciation — refer current IT Act rates" },
      ],
    },
    overview: {
      title: "Solar Project Finance in India — Banking Framework",
      paragraphs: [
        "India has one of the world's largest solar energy targets, with significant installed capacity across rooftop, distributed, and utility-scale segments. From a banking perspective, solar projects are classified under Renewable Energy in the Priority Sector Lending framework, making them attractive for institutional lending.",
        "The bankability of a solar project is primarily determined by the quality of the Power Purchase Agreement (PPA) or energy off-take arrangement. A PPA with a creditworthy counterparty (DISCOM, government body, large industrial captive consumer) is the foundation of solar project finance.",
        "Accelerated depreciation benefits under the Income Tax Act for solar assets are an important capital structure consideration. Promoters should evaluate the tax depreciation schedule against their taxable income capacity to determine whether to hold assets in a tax-paying entity.",
      ],
    },
    businessModels: [
      {
        title: "Captive / Behind-the-Meter Rooftop Solar",
        description: "Solar installation on owned or leased roof/land for self-consumption, reducing grid electricity cost.",
        revenueDrivers: ["Savings on grid electricity bill (grid tariff × units generated)", "Net metering credit for surplus export", "Accelerated depreciation tax shield in Year 1"],
      },
      {
        title: "Third-Party PPA (RESCO Model)",
        description: "Developer installs solar at client site; client purchases power at agreed PPA rate below prevailing tariff.",
        revenueDrivers: ["Monthly fixed PPA tariff × energy generated", "Escalation clause in PPA (if negotiated)", "REC (Renewable Energy Certificate) revenue"],
      },
      {
        title: "Ground-Mount Solar Farm / IPP",
        description: "Utility-scale ground-mount project selling power to DISCOM or industrial buyer under long-term PPA.",
        revenueDrivers: ["PPA tariff × annual energy production (Wh/year)", "Long-term (25-year) revenue visibility", "Green certificate / RECs"],
      },
    ],
    projectComponents: [
      {
        head: "Solar Plant Equipment (EPC)",
        description: "Solar modules, inverters, mounting structures, cabling, and monitoring systems.",
        typicalElements: ["Solar PV modules (monocrystalline / bifacial)", "String inverters or central inverters", "Mounting structure (rooftop: ballasted / clamp; ground: driven piles)", "DC cabling, AC cabling, junction boxes", "Switchgear, metering equipment", "SCADA / energy monitoring system"],
      },
      {
        head: "Grid Connection Infrastructure",
        description: "Transformer, switchyard, and grid interconnection equipment.",
        typicalElements: ["Transformer (HT/LT ratio as per DISCOM requirement)", "Switchyard equipment (for utility-scale)", "HT cable to grid connection point", "Net metering equipment (for rooftop)"],
      },
    ],
    costHeads: [
      {
        category: "Solar Project Costs",
        components: [
          "Solar modules (typically 35–45% of total EPC cost)",
          "Inverters (10–15% of EPC cost)",
          "Mounting structure (10–15% of EPC cost)",
          "Civil & electrical work (10–20% of EPC cost)",
          "Land cost or lease (ground-mount projects)",
          "Grid connectivity charges",
          "Annual O&M cost (typically 0.5–1.5% of project cost per annum)",
        ],
        note: "Solar EPC costs fluctuate with global module prices. DPR project costs must be based on firm quotations obtained close to the loan application date.",
      },
    ],
    infrastructure: [
      { type: "Land (Ground-Mount)", details: "Approximately 4–5 acres per MW of solar capacity. Fenced, level land with good solar irradiation. No shading from trees or structures." },
      { type: "Grid Connectivity", details: "DISCOM approval for grid connectivity and net metering (rooftop) or evacuation infrastructure (utility-scale). This approval process is a major timeline driver." },
      { type: "Solar Resource Assessment", details: "Solar irradiation data from MNRE SRRA or NISE databases. DNI/GHI data specific to the project site." },
    ],
    financingStructure: {
      title: "Indicative Financing Structure — Solar Projects",
      disclaimer: FINANCING_DISCLAIMER,
      items: [
        { aspect: "Debt:Equity", indicativeConvention: "70:30 to 75:25 for projects with bankable PPAs", note: "Captive solar projects (where savings = revenue) may require higher equity as lenders have less certainty on off-take." },
        { aspect: "PPA Quality", indicativeConvention: "Creditworthy off-taker (government DISCOM or large industrial) significantly improves bankability", note: "PPA with financially stressed DISCOMs may attract lender scrutiny on payment security." },
        { aspect: "Moratorium", indicativeConvention: "3 to 6 months (construction and commissioning)", note: "Solar projects have relatively short construction periods (3–6 months for rooftop; 9–18 months for utility-scale)." },
        { aspect: "Tenure", indicativeConvention: "10 to 15 years for large projects (aligned with PPA duration)", note: "Long tenure reflects 25-year PPA life and long asset useful life." },
      ],
    },
    commonDocumentation: [
      {
        category: "Solar & Grid Regulatory",
        items: [
          "DISCOM approval for net metering / grid connectivity",
          "CEIG (Chief Electrical Inspector to Government) inspection certificate",
          "MNRE registration (for eligible scheme benefits)",
          "PPA agreement (if RESCO or utility-scale)",
          "IREDA / lender-specific project appraisal documents",
          "Land title deed or registered lease (ground-mount)",
        ],
      },
      {
        category: "Technical",
        items: [
          "EPC contractor quotation with module, inverter, and structure specifications",
          "Solar simulation report (PVsyst / equivalent) showing P50/P90 energy generation",
          "CEA/CEIG-compliant single-line diagram",
          "Module and inverter technical datasheets with warranties",
        ],
      },
    ],
    dprConsiderations: [
      { chapter: "Energy Generation Model", specificNote: "Solar DPRs must include a PVsyst simulation report showing Annual Energy Production (AEP) at P50 and P90 confidence levels. The P90 estimate (generation exceeded 90% probability) is the conservative baseline used by lenders for debt-service coverage." },
      { chapter: "Financial Model", specificNote: "Solar financial model must explicitly model annual module degradation (typically 0.5–0.7% per year), O&M cost escalation, and PPA tariff escalation. Accelerated depreciation benefit must be modeled in Year 1 of the financial projections." },
    ],
    cmaConsiderations: [
      { aspect: "Revenue Recognition", industryNote: "Solar project revenue is recognized based on energy units generated (kWh) multiplied by PPA tariff. CMA must model monthly generation patterns (seasonal variation) rather than flat monthly revenue." },
    ],
    financialMetrics: [
      { metric: "Project IRR (Captive Rooftop Solar)", indicativeRange: "12–18% depending on prevailing module cost and grid tariff saved", basis: "Industry-level financial model benchmarks for rooftop solar", source: "MNRE / SECI reported financial metrics", asOf: "2024-01", disclaimer: METRIC_DISCLAIMER },
      { metric: "Levelised Cost of Energy (LCOE) — India", indicativeRange: "₹2.00–₹3.50 per kWh (utility scale)", basis: "Published MNRE and IREDA data", source: "MNRE Solar Energy Statistics 2024", asOf: "2024-03", disclaimer: METRIC_DISCLAIMER },
    ],
    registrationsLicenses: [
      { name: "DISCOM Net Metering / Grid Connectivity Approval", authority: "Distribution Company (DISCOM)", mandatory: true },
      { name: "CEIG Inspection Certificate", authority: "Chief Electrical Inspector to Government (State)", mandatory: true },
      { name: "MNRE Registration (Scheme-Specific)", authority: "Ministry of New and Renewable Energy", mandatory: false, note: "Required for specific scheme benefits." },
      { name: "AERB Clearance (if site near nuclear facility)", authority: "Atomic Energy Regulatory Board", mandatory: false, note: "Rare — only for sites near notified exclusion zones." },
    ],
    governmentSchemes: [
      {
        schemeName: "PM Surya Ghar Muft Bijli Yojana (Rooftop Solar for Households)",
        schemeType: "Capital Subsidy",
        administeredBy: "Ministry of New and Renewable Energy (MNRE)",
        applicability: "Residential consumers meeting scheme eligibility. Not applicable to commercial/industrial solar projects.",
        sourceUrl: "https://pmsuryaghar.gov.in",
        lastVerified: "2025-03-01",
        reviewedBy: "Senior Financial Analyst, VS Advisory",
        disclaimer: SCHEME_DISCLAIMER,
      },
      {
        schemeName: "IREDA — Renewable Energy Finance",
        schemeType: "Working Capital Support",
        administeredBy: "Indian Renewable Energy Development Agency Ltd. (IREDA)",
        applicability: "Renewable energy project developers meeting IREDA lending criteria. Term loan finance for solar, wind, and other RE projects.",
        sourceUrl: "https://ireda.in",
        lastVerified: "2025-03-01",
        reviewedBy: "Senior Financial Analyst, VS Advisory",
        disclaimer: SCHEME_DISCLAIMER,
      },
    ],
    potentialRisks: [
      { category: "Market", title: "Energy Generation Variability", description: "Actual energy output may vary from simulation due to irradiation variability, dust, and shading. P90 estimates mitigate but do not eliminate this risk." },
      { category: "Financial", title: "DISCOM Payment Risk", description: "Financially stressed DISCOMs may delay PPA payments, creating cash flow shortfalls for solar project developers." },
      { category: "Technology", title: "Module Performance Degradation", description: "PV module performance degrades over time. Higher-than-projected degradation rates impact long-term energy output and revenue." },
      { category: "Regulatory", title: "PPA Tariff Re-negotiation Risk", description: "Some DISCOMs have historically challenged existing PPAs. Legal enforceability of long-term PPA tariffs is a risk factor." },
    ],
    vsAdvisoryProcess: [
      { step: 1, title: "Site Assessment & PVsyst Simulation", description: "Commission PVsyst simulation for project site to establish P50/P90 energy generation estimates." },
      { step: 2, title: "PPA Review & Off-Taker Analysis", description: "Review PPA terms, tariff, escalation clauses, and creditworthiness of off-taker." },
      { step: 3, title: "Financial Model & IREDA/Bank Submission", description: "Build 25-year financial model with accelerated depreciation, LCOE, and DSCR analysis." },
      { step: 4, title: "DISCOM & CEIG Approvals", description: "Assist in obtaining grid connectivity approval and CEIG inspection coordination." },
    ],
    faqs: [
      {
        question: "What is a PPA and why is it critical for solar project financing?",
        answer: "A Power Purchase Agreement (PPA) is a long-term contract between the solar project developer and an electricity buyer (DISCOM, government body, or industrial consumer) that specifies the price, duration, and terms at which the generated electricity will be purchased. Banks consider the PPA as the primary revenue contract of a solar project — its existence, duration, counterparty creditworthiness, and tariff level are the most important factors in determining the bankability and financial viability of a solar project.",
      },
    ],
    relatedServiceSlugs: ["dpr", "financial-modelling", "term-loan-advisory", "project-feasibility"],
    seo: {
      metaTitle: "Solar Project Finance & DPR Advisory | VS Advisory",
      metaDescription: "Bankable DPR, PPA review, and term loan advisory for rooftop solar, ground-mount solar farms, and renewable energy projects in India.",
      keywords: ["solar project finance India", "solar DPR preparation", "rooftop solar bank loan", "solar PPA advisory", "IREDA solar finance"],
    },
  },

  // =========================================================================
  // 9. EV CHARGING STATIONS
  // =========================================================================
  {
    id: "ev-charging-stations",
    slug: "ev-charging-stations",
    title: "EV Charging Station Networks",
    shortTitle: "EV Charging Stations",
    sector: "Energy & EV Infrastructure",
    sectorId: "energy-infrastructure",
    badge: "EV Infrastructure Finance",
    iconName: "Zap",
    lastReviewed: "2025-03-01",
    reviewedBy: "Senior Financial Analyst, VS Advisory",
    sourceReferences: [
      { title: "MoP Revised EV Charging Guidelines 2022", type: "MoP", url: "https://powermin.gov.in" },
      { title: "BEE (Bureau of Energy Efficiency) EV Charging Standards", type: "Government Notification" },
      { title: "FAME-II Scheme — MHI Guidelines", type: "Government Notification", url: "https://fame2.heavyindustries.gov.in" },
    ],
    hero: {
      headline: "Project Finance & Advisory for EV Charging Station Networks",
      subheadline: "Business planning, DPR, and finance advisory for public EV charging stations, fleet charging depots, and highway charging corridors.",
      keyParameters: [
        { label: "Vehicle Types", value: "2W, 3W, 4W, Commercial EV Fleet" },
        { label: "Charger Types", value: "AC Slow (3.3–22 kW), DC Fast (30–200 kW)" },
        { label: "Revenue Model", value: "Energy dispensed (₹/kWh) + Session charges" },
      ],
    },
    overview: {
      title: "EV Charging Infrastructure Finance in India",
      paragraphs: [
        "India's electric vehicle adoption is growing rapidly, driven by government policy (FAME-II), state EV policies, falling battery prices, and rising fuel costs. EV charging infrastructure is a critical enabler of this transition. However, the business economics of EV charging stations remain in their early maturity stage, with utilization rates and unit economics still evolving.",
        "From a banking perspective, EV charging stations present a novel credit challenge: they lack a long historical track record of commercial operation, infrastructure cost is significant (particularly for DC fast chargers), and revenue is highly dependent on EV adoption rates in the catchment area — a market-development risk that traditional credit underwriting frameworks are not fully equipped to handle.",
        "The Ministry of Power's 2022 revised guidelines liberalized the EV charging sector, eliminating the need for a distribution license to set up public charging stations. This significantly reduced entry barriers and regulatory overhead.",
      ],
    },
    businessModels: [
      {
        title: "Public Charging Station",
        description: "Open-access charging facility for all EV types in a commercial or transit location.",
        revenueDrivers: ["Energy dispensed (₹/kWh) × charging sessions per day", "Convenience fee / session charge", "Advertising & co-branding revenue on charge points"],
      },
      {
        title: "Fleet Depot Charging",
        description: "Captive charging infrastructure for fleet operators (EV buses, EV last-mile delivery vehicles, EV auto fleets).",
        revenueDrivers: ["Monthly fleet charging contract", "Pay-per-use billing to fleet operators", "Battery swap revenue (if applicable)"],
      },
      {
        title: "Highway Charging Corridor",
        description: "DC fast charger network on national/state highways serving long-range intercity EV travelers.",
        revenueDrivers: ["DC fast charging session revenue (₹/kWh)", "Convenience F&B and retail in co-located facility", "Fleet and bus operator contracts"],
      },
    ],
    projectComponents: [
      {
        head: "EV Charging Equipment",
        description: "AC and DC chargers, network management system.",
        typicalElements: ["AC slow chargers (3.3/7.2/22 kW) for 2W and 4W", "DC fast chargers (30/60/150/240 kW) for 4W and commercial EVs", "CCS2 / CHAdeMO / Bharat DC-001 / Type 2 connectors", "Charge management network software / OCPP-compliant controller"],
      },
      {
        head: "Electrical Infrastructure",
        description: "Power connection, transformer, and switchgear.",
        typicalElements: ["HT/LT power connection from DISCOM", "Transformer (if HT connection required for DC fast chargers)", "Energy meter, switchgear, distribution panel", "Battery Energy Storage System (BESS) — optional, for demand charge reduction"],
      },
      {
        head: "Site Civil & Amenities",
        description: "Charging bays, canopy, and customer amenities.",
        typicalElements: ["EV parking bays with cable management", "Weather protection canopy", "Lighting (24/7 operation)", "Restroom and waiting area (for highway stations)", "Security CCTV"],
      },
    ],
    costHeads: [
      {
        category: "EV Charging Station Costs",
        components: [
          "EV charging equipment (major capital cost — DC fast chargers are expensive)",
          "Electrical infrastructure: transformer, HT connection, panel",
          "Civil work: site preparation, canopy, bays",
          "DISCOM demand charges (minimum load charges regardless of utilization)",
          "Network management platform subscription",
          "O&M and maintenance",
          "Power purchase cost (₹/kWh) for energy dispensed",
        ],
        note: "DISCOM demand charges are a critical fixed cost — sites with low EV charging utilization may face negative unit economics due to demand charges even during off-peak hours.",
      },
    ],
    infrastructure: [
      { type: "Power Supply", details: "3-phase power supply essential. Load requirement: 50–100 KW (AC station), 200–600 KW (DC fast charging hub). Dedicated transformer may be required." },
      { type: "Site Footprint", details: "2–3 car parking spaces per AC charger; 1–2 per DC charger. Highway stations need 10–20 charging bays." },
    ],
    financingStructure: {
      title: "Indicative Financing Structure — EV Charging Stations",
      disclaimer: FINANCING_DISCLAIMER,
      items: [
        { aspect: "Lender Appetite", indicativeConvention: "Relatively low — most traditional banks require proven cash flows. NBFCs and green finance institutions show more appetite.", note: "EV charging is a nascent sector. Lenders prefer projects with fleet contracts or FAME-II subsidy." },
        { aspect: "Equity Requirement", indicativeConvention: "Higher equity requirement (35–50%) given sector nascency and uncertain utilization", note: "FAME-II subsidy (if available) effectively reduces promoter capex requirement." },
        { aspect: "BESS-Backed Projects", indicativeConvention: "Co-located battery storage can improve bankability by reducing DISCOM demand charges and providing reliable revenue floor", note: "BESS integration improves unit economics for high-tariff DISCOM areas." },
      ],
    },
    commonDocumentation: [
      {
        category: "Regulatory & Technical",
        items: [
          "DISCOM power connection application and demand load approval",
          "BEE-certified charging equipment specifications",
          "Site plan and electrical single-line diagram",
          "NOC from site owner (if leased location)",
          "FAME-II subsidy application (if applicable)",
        ],
      },
    ],
    dprConsiderations: [
      { chapter: "EV Fleet & Utilization Analysis", specificNote: "EV charging DPRs must provide EV penetration data for the catchment geography (registered EVs, projected EV growth from state transport department data), daily vehicle traffic count at the location, and realistic charger utilization rate assumptions." },
    ],
    cmaConsiderations: [
      { aspect: "Demand Charge Management", industryNote: "Monthly DISCOM demand charges create a fixed cost burden independent of actual utilization. CMA cash flow modeling must explicitly account for demand charges in low-utilization months." },
    ],
    financialMetrics: [
      { metric: "EV Charger Utilization Rate (DC Fast Charger — Highway)", indicativeRange: "15–30% (early stage) to 40–60% (mature market)", basis: "Publicly available CPO (Charge Point Operator) utilization data", source: "MoP EV Charging Readiness Report 2024", asOf: "2024-01", disclaimer: METRIC_DISCLAIMER },
    ],
    registrationsLicenses: [
      { name: "No Distribution License Required (per MoP 2022)", authority: "Ministry of Power", mandatory: false, note: "As per MoP revised consolidated guidelines 2022, a distribution license is no longer required to operate a public EV charging station." },
      { name: "DISCOM Demand Load / LT/HT Connection", authority: "State DISCOM", mandatory: true },
      { name: "BEE-Compliant Equipment", authority: "Bureau of Energy Efficiency", mandatory: true, note: "Chargers must conform to BEE interoperability standards." },
      { name: "Fire NOC (for large stations)", authority: "State Fire Department", mandatory: false, note: "Required for stations with battery storage or DC fast chargers above certain thresholds." },
    ],
    governmentSchemes: [
      {
        schemeName: "FAME-II (Faster Adoption and Manufacturing of Electric Vehicles Phase II)",
        schemeType: "Capital Subsidy",
        administeredBy: "Ministry of Heavy Industries (MHI)",
        applicability: "Public charging station operators meeting FAME-II specifications for charger type, location, and connectivity. Status of FAME-III to be verified with MHI.",
        sourceUrl: "https://fame2.heavyindustries.gov.in",
        lastVerified: "2025-03-01",
        reviewedBy: "Senior Financial Analyst, VS Advisory",
        disclaimer: SCHEME_DISCLAIMER,
      },
    ],
    potentialRisks: [
      { category: "Market", title: "EV Adoption Rate Uncertainty", description: "Revenue is entirely dependent on EV adoption in the catchment area. Lower-than-projected EV penetration directly impacts utilization and revenue." },
      { category: "Technology", title: "Charging Technology Evolution", description: "Rapid evolution of charging standards (CCS2, CHAdeMO, proprietary) may require equipment upgrades, adding unplanned capex." },
      { category: "Financial", title: "DISCOM Demand Charges", description: "High fixed demand charges from DISCOMs during low-utilization periods can make charging station economics unviable." },
    ],
    vsAdvisoryProcess: [
      { step: 1, title: "Site Selection & EV Fleet Analysis", description: "Analyze EV traffic data, fleet operator pipeline, and DISCOM power availability at target locations." },
      { step: 2, title: "Business Model & Unit Economics", description: "Model charging session revenue, demand charges, and BESS integration economics." },
      { step: 3, title: "FAME-II & State Scheme Mapping", description: "Identify and apply for applicable central and state EV infrastructure incentives." },
      { step: 4, title: "Finance Structuring & Lender Matching", description: "Match project to green finance lenders or NBFCs with EV infrastructure appetite." },
    ],
    faqs: [
      {
        question: "Do I need a distribution license to operate an EV charging station in India?",
        answer: "No. As per the Ministry of Power's Revised Consolidated Guidelines on EV Charging Infrastructure (January 2022), any individual or entity can set up and operate an EV charging station without obtaining a distribution license under the Electricity Act, 2003. However, a power connection from the local DISCOM, BEE-compliant equipment, and DISCOM-approved metering are required.",
      },
    ],
    relatedServiceSlugs: ["dpr", "business-planning", "government-scheme-assistance", "financial-modelling"],
    seo: {
      metaTitle: "EV Charging Station Finance & Advisory | VS Advisory",
      metaDescription: "Business planning, DPR, and finance advisory for EV charging stations, fleet depots, and highway charging corridors in India.",
      keywords: ["EV charging station finance India", "FAME-II subsidy EV", "EV charging business plan", "electric vehicle charging DPR", "EV infrastructure loan"],
    },
  },

  // =========================================================================
  // 10. WAREHOUSES
  // =========================================================================
  {
    id: "warehouses",
    slug: "warehouses",
    title: "Warehouses, Logistics Parks & Storage Facilities",
    shortTitle: "Warehouses",
    sector: "Logistics & Storage",
    sectorId: "logistics-storage",
    badge: "Logistics Infrastructure",
    iconName: "Warehouse",
    lastReviewed: "2025-03-01",
    reviewedBy: "Senior Financial Analyst, VS Advisory",
    sourceReferences: [
      { title: "WDRA (Warehousing Development and Regulatory Authority) Guidelines", type: "Government Notification", url: "https://wdra.gov.in" },
      { title: "Logistics Sector — RBI PSL Classification", type: "RBI" },
    ],
    hero: {
      headline: "Project Finance & Advisory for Warehouses & Logistics Facilities",
      subheadline: "Structured term loan advisory, DPR preparation, and WDRA registration guidance for dry warehouses, temperature-controlled storage, and logistics parks.",
      keyParameters: [
        { label: "Facility Types", value: "Dry Warehouse, Cold Chain, Multi-Modal Logistics Hub" },
        { label: "Revenue Model", value: "Storage rent (₹/MT/month), Handling charges" },
        { label: "Key Regulatory", value: "WDRA Registration for commodity collateral management" },
      ],
    },
    overview: {
      title: "Warehouse Infrastructure Finance in India",
      paragraphs: [
        "India's logistics and warehousing sector has been transformed by the e-commerce explosion, GST-driven consolidation of warehousing into state hub models, and the government's PM Gati Shakti infrastructure push. Modern Grade A warehousing is a high-demand asset class with institutional investor interest (REITs, PE funds) alongside traditional bank lending.",
        "From a banking perspective, warehouses offer excellent collateral — the land and building are tangible, income-generating, and generally maintain value well. Revenue predictability (long-term warehouse lease agreements) makes warehouses attractive for term lending.",
        "WDRA-registered warehouses can issue Negotiable Warehouse Receipts (NWRs) against stored commodities, which banks can use as collateral for pledge financing to farmers and traders — a significant additional revenue and social purpose opportunity.",
      ],
    },
    businessModels: [
      {
        title: "Commercial General Warehouse (B2B Storage)",
        description: "Open-access commercial dry storage facility for FMCG, agriculture produce, e-commerce, or industrial goods.",
        revenueDrivers: ["Storage rent (₹ per square foot or ₹ per MT per month)", "Handling charges (in-handling and out-handling)", "Value-added services: repacking, palletizing, labeling"],
      },
      {
        title: "Build-to-Suit (BTS) Warehouse",
        description: "Custom-built warehouse designed for a specific anchor tenant under a long-term lease.",
        revenueDrivers: ["Long-term lease rent (10+ years) from creditworthy anchor tenant", "Rental escalation clause (typically 3–5% per annum)", "Property value appreciation"],
      },
      {
        title: "E-Commerce Fulfillment Center",
        description: "High-tech warehouse with pick-and-pack, returns management, and multi-channel fulfillment capability for e-commerce operators.",
        revenueDrivers: ["Order fulfillment fee per shipment", "Storage fee per SKU per day", "Value-added service charges"],
      },
    ],
    projectComponents: [
      {
        head: "Civil & Structural",
        description: "Warehouse building, yard, and office infrastructure.",
        typicalElements: ["PEB (Pre-Engineered Building) or RCC warehouse structure", "High clear height (12–15 meters for Grade A)", "Dock levelers and loading bays", "Material handling: forklifts, pallet racking, reach trucks", "Admin office, security cabin, labor area", "Hardstanding yard for truck maneuvering"],
      },
    ],
    costHeads: [
      {
        category: "Warehouse Operating Costs",
        components: [
          "Land acquisition or lease cost",
          "Security services (24/7)",
          "Power (lighting, MHE charging)",
          "Maintenance of structure and equipment",
          "Insurance (property, goods-in-store)",
          "IT: WMS (Warehouse Management System)",
          "Labour: warehouse staff, supervisors",
          "Term loan interest",
        ],
        note: "Warehouse operations have relatively low direct variable costs once the infrastructure is set up. The primary fixed cost is the land + construction term loan interest.",
      },
    ],
    infrastructure: [
      { type: "Land", details: "Minimum 2–5 acres for small commercial warehouse. 20–50 acres for large logistics park. Located on or near national/state highway with heavy vehicle access." },
      { type: "Power", details: "Relatively low power requirement for dry warehouses (lighting, MHE charging). Higher for cold chain. 3-phase connection with DG backup for security lighting." },
      { type: "Road Connectivity", details: "Grade A warehouses require wide access roads for 40-foot trailer movement. Proximity to NH/SH and industrial corridor preferred." },
    ],
    financingStructure: {
      title: "Indicative Financing Structure — Warehouses",
      disclaimer: FINANCING_DISCLAIMER,
      items: [
        { aspect: "Debt:Equity", indicativeConvention: "65:35 to 70:30 — warehouses are well-liked collateral assets", note: "Build-to-suit warehouses with long-term lease from creditworthy tenants may achieve better debt ratios." },
        { aspect: "Lease Rental Discounting (LRD)", indicativeConvention: "Established warehouses with long-term leases can access LRD (Lease Rental Discounting) loans", note: "LRD loans are secured against future lease rental cash flows and are distinct from project term loans." },
        { aspect: "Moratorium", indicativeConvention: "6 to 12 months for construction", note: "Warehouse construction is faster than manufacturing — PEB structures can be erected in 3–6 months." },
        { aspect: "Tenure", indicativeConvention: "7 to 12 years", note: "Long tenure aligned with warehouse asset life and lease term." },
      ],
    },
    commonDocumentation: [
      {
        category: "Site & Regulatory",
        items: [
          "Land title deed / NA order (non-agricultural land use conversion)",
          "Building plan approval from local authority",
          "Fire NOC from State Fire Department",
          "WDRA registration application (for NWR commodity storage)",
          "FSSAI license (if storing food commodities)",
        ],
      },
    ],
    dprConsiderations: [
      { chapter: "Market & Demand Analysis", specificNote: "Warehouse DPRs must include catchment area analysis covering existing warehouse supply vs demand, major industries and e-commerce volumes in the region, transportation connectivity, and average prevailing rental rates for comparable facilities." },
      { chapter: "Revenue Modeling", specificNote: "Clearly model occupancy ramp-up (capacity utilization as % of storage capacity), storage rental per square foot/MT, and handling charges. BTS warehouse DPRs should include the executed lease agreement as part of the dossier." },
    ],
    cmaConsiderations: [
      { aspect: "Seasonal Storage Revenue", industryNote: "Agricultural commodity warehouses face seasonal occupancy variation (peak post-harvest). CMA must model seasonal utilization and resulting revenue variation." },
    ],
    financialMetrics: [
      { metric: "Warehouse Lease Rental (Grade A, Tier-1 Periphery)", indicativeRange: "₹18–₹35 per sq ft per month (varies widely by city and location)", basis: "Published real estate research reports", source: "CBRE / JLL India Logistics & Warehousing Market Report 2024", asOf: "2024-01", disclaimer: METRIC_DISCLAIMER },
    ],
    registrationsLicenses: [
      { name: "WDRA Registration (Negotiable Warehouse Receipt)", authority: "Warehousing Development and Regulatory Authority (WDRA)", mandatory: false, note: "Voluntary but necessary for issuing Negotiable Warehouse Receipts (NWRs) against commodity pledges." },
      { name: "FSSAI License", authority: "FSSAI", mandatory: false, note: "Required if warehouse stores food commodities." },
      { name: "Fire NOC", authority: "State Fire Department", mandatory: true },
    ],
    governmentSchemes: [
      {
        schemeName: "PM Gati Shakti — Logistics Infrastructure",
        schemeType: "Grant",
        administeredBy: "Department for Promotion of Industry and Internal Trade (DPIIT) / State Nodal Agencies",
        applicability: "Multi-modal logistics infrastructure projects meeting scheme criteria. Primarily focused on large-scale logistics park development.",
        sourceUrl: "https://pmgatishakti.gov.in",
        lastVerified: "2025-03-01",
        reviewedBy: "Senior Financial Analyst, VS Advisory",
        disclaimer: SCHEME_DISCLAIMER,
      },
    ],
    potentialRisks: [
      { category: "Market", title: "Occupancy Risk", description: "Greenfield commercial warehouses face ramp-up risk to achieve target occupancy (typically 70–80% for bankable projections)." },
      { category: "Financial", title: "Lease Renewal Risk", description: "Anchor tenant non-renewal at end of lease term can create sudden revenue shortfall." },
    ],
    vsAdvisoryProcess: [
      { step: 1, title: "Location Analysis & Market Survey", description: "Evaluate logistics demand, competing warehouse supply, and prevailing rental rates." },
      { step: 2, title: "Grade A vs Commercial DPR", description: "Prepare appropriate DPR for Grade A institutional or commercial grade warehouse." },
      { step: 3, title: "WDRA & Regulatory Clearances", description: "Guide WDRA registration and other applicable clearances." },
    ],
    faqs: [
      {
        question: "What is a Negotiable Warehouse Receipt (NWR) and how does it benefit a WDRA-registered warehouse operator?",
        answer: "A Negotiable Warehouse Receipt (NWR) is an electronic document issued by a WDRA-registered warehouse certifying the quantity and quality of commodities stored. Banks can accept NWRs as collateral for pledge financing loans to commodity depositors (farmers, traders, FPOs). As a WDRA-registered warehouse operator, you can charge a service fee for issuing NWRs and attract depositors who need financing against their stored commodities, increasing your warehouse utilization and fee income.",
      },
    ],
    relatedServiceSlugs: ["dpr", "term-loan-advisory", "project-feasibility", "expansion-finance"],
    seo: {
      metaTitle: "Warehouse Project Finance & DPR Advisory | VS Advisory",
      metaDescription: "Term loan advisory, DPR, and WDRA registration guidance for warehouses, logistics parks, and cold chain storage facilities in India.",
      keywords: ["warehouse project finance India", "logistics park DPR", "WDRA registration advisory", "warehouse term loan", "cold storage finance"],
    },
  },

  // =========================================================================
  // 11. COMMERCIAL BUILDINGS
  // =========================================================================
  {
    id: "commercial-buildings",
    slug: "commercial-buildings",
    title: "Commercial Real Estate & Office Buildings",
    shortTitle: "Commercial Buildings",
    sector: "Real Estate & Services",
    sectorId: "real-estate-services",
    badge: "Commercial Real Estate",
    iconName: "Building2",
    lastReviewed: "2025-03-01",
    reviewedBy: "Senior Financial Analyst, VS Advisory",
    sourceReferences: [
      { title: "NHB / RBI Commercial Real Estate Lending Guidelines", type: "NHB" },
      { title: "RERA (Real Estate Regulation Authority) Act, 2016", type: "Government Notification" },
    ],
    hero: {
      headline: "Finance & Advisory for Commercial Buildings & Office Complexes",
      subheadline: "Term loan structuring, DPR preparation, and lease rental discounting advisory for commercial office buildings, retail complexes, and mixed-use developments.",
      keyParameters: [
        { label: "Asset Types", value: "Office Buildings, IT Parks, Retail Complexes" },
        { label: "Revenue Model", value: "Lease Rental (₹/sq ft/month)" },
        { label: "Key Instrument", value: "Term Loan + Lease Rental Discounting (LRD)" },
      ],
    },
    overview: {
      title: "Commercial Real Estate Finance — Indian Banking Framework",
      paragraphs: [
        "Commercial real estate (CRE) lending in India is governed by specific RBI guidelines that classify commercial real estate as a separate exposure category with higher risk weightings compared to manufacturing or infrastructure. Banks have mandated CRE exposure limits that can sometimes constrain large CRE project financing.",
        "From a project finance perspective, commercial real estate projects (office buildings, retail malls, IT parks) derive their value and debt-servicing capacity from rental income. The quality, tenure, and creditworthiness of tenants is therefore the primary bankability determinant.",
        "The Real Estate Regulation Authority (RERA) Act mandates that all commercial projects above the prescribed threshold be registered with the State RERA authority — a compliance requirement that affects project funding timelines and escrow requirements.",
      ],
    },
    businessModels: [
      {
        title: "Lease Office Building",
        description: "Commercial office building leased to corporate tenants under long-term lease agreements.",
        revenueDrivers: ["Lease rental per sq ft per month × occupied area", "Rental escalation (5–10% per annum or every 3 years)", "Maintenance charges (recovered from tenants)"],
      },
      {
        title: "Retail / High-Street Commercial Space",
        description: "Ground floor commercial units or retail mall space sold or leased to retail tenants.",
        revenueDrivers: ["Outright sale proceeds of commercial units", "Rental income from retained units", "Revenue share arrangement with anchor tenants"],
      },
    ],
    projectComponents: [
      {
        head: "Building Structure",
        description: "Multi-story commercial building structure.",
        typicalElements: ["RCC multi-story structure with basement parking", "Glass façade / curtain wall", "Central HVAC system", "Elevator shafts and elevators (OTIS, Thyssen, etc.)", "Fire sprinkler system", "BMS (Building Management System)"],
      },
    ],
    costHeads: [
      {
        category: "Commercial Building Costs",
        components: [
          "Land cost (can be 30–50% of total project cost in metro locations)",
          "Civil construction cost per sq ft (varies by specification)",
          "MEP (Mechanical, Electrical, Plumbing) works",
          "Elevator and escalator installation",
          "HVAC and building automation",
          "Interior fit-out (common areas)",
          "Pre-operative and professional fees",
        ],
        note: "Land cost is highly location-specific and represents the largest cost component in metro cities.",
      },
    ],
    infrastructure: [
      { type: "Power", details: "HT commercial connection. Adequate load for HVAC, elevators, and tenant sub-metering. 100% DG backup for Grade A commercial buildings." },
      { type: "Parking", details: "1 car parking per 100–150 sq ft of commercial space — a key tenant requirement. Basement/multi-level parking for urban sites." },
      { type: "Fire Safety", details: "Full automatic sprinkler system, fire staircase, smoke detection, fire hydrant system. NOC from fire department mandatory for occupation certificate." },
    ],
    financingStructure: {
      title: "Indicative Financing Structure — Commercial Buildings",
      disclaimer: FINANCING_DISCLAIMER,
      items: [
        { aspect: "Construction Finance (CRE Loan)", indicativeConvention: "Banks lend up to 60–70% of project cost. CRE classification attracts higher interest rates.", note: "RBI CRE classification means higher risk weights and often higher rates than manufacturing project loans." },
        { aspect: "LRD (Lease Rental Discounting)", indicativeConvention: "Post-completion, lease rental cash flows can be discounted to raise additional capital at lower rates", note: "LRD loans are typically 50–70% of total lease rental receivables discounted over remaining lease tenure." },
        { aspect: "RERA Escrow", indicativeConvention: "RERA mandates 70% of collected advance money from buyers to be kept in designated escrow account", note: "Critical compliance for commercial projects being sold to buyers." },
      ],
    },
    commonDocumentation: [
      {
        category: "Legal & Regulatory",
        items: [
          "Land title deed with clear encumbrance certificate",
          "RERA project registration certificate",
          "Municipal / Town Planning Authority approved building plan",
          "Environmental clearance (if required by EIA Notification)",
          "Fire NOC for construction and occupation",
          "Lift installation approval",
        ],
      },
    ],
    dprConsiderations: [
      { chapter: "Revenue Modeling", specificNote: "DPR must clearly distinguish between outright sale revenue (one-time) and lease rental revenue (recurring). For lease revenue projects, provide tenant covenant analysis, lease term, escalation clauses, and lock-in period." },
    ],
    cmaConsiderations: [
      { aspect: "Revenue Recognition Policy", industryNote: "For lease income projects, CMA must model lease rental accrual by period. For sale-of-units projects, Ind AS revenue recognition (over time vs at point in time) and RERA escrow release timelines must be reflected." },
    ],
    financialMetrics: [
      { metric: "Office Rental — Tier-2 City (Grade A)", indicativeRange: "₹40–₹80 per sq ft per month", basis: "JLL / CBRE market surveys", source: "JLL India Office Market Report 2024", asOf: "2024-01", disclaimer: METRIC_DISCLAIMER },
    ],
    registrationsLicenses: [
      { name: "RERA Project Registration", authority: "State RERA Authority", mandatory: true, note: "Mandatory for projects above prescribed size thresholds." },
      { name: "Environmental Clearance", authority: "MoEFCC / State EIA Authority", mandatory: false, note: "Required for large commercial projects above EIA thresholds." },
      { name: "Fire NOC", authority: "State Fire Department", mandatory: true },
      { name: "Lift NOC", authority: "State Lift Authority", mandatory: true },
    ],
    governmentSchemes: [],
    potentialRisks: [
      { category: "Market", title: "Office Vacancy Risk", description: "Work-from-home trends and economic downturns can increase commercial office vacancy rates, reducing rental income." },
      { category: "Regulatory", title: "RERA Compliance Risk", description: "Non-compliance with RERA escrow, project completion timelines, or disclosure requirements leads to significant penalties." },
      { category: "Financial", title: "Interest Rate Risk on CRE Loans", description: "CRE loans carry higher risk premiums. Rising interest rates compress development margins." },
    ],
    vsAdvisoryProcess: [
      { step: 1, title: "Feasibility & Market Study", description: "Analyze commercial office demand, rental comparables, and absorption rate in target location." },
      { step: 2, title: "RERA & Regulatory Compliance", description: "Guide RERA registration, building plan approval, and environmental clearance." },
      { step: 3, title: "CRE Finance Structuring", description: "Structure construction finance and post-completion LRD strategy." },
    ],
    faqs: [
      {
        question: "What is Lease Rental Discounting (LRD) and how does it differ from a construction loan?",
        answer: "Lease Rental Discounting (LRD) is a post-construction loan where an already-completed, tenant-occupied commercial property's future lease rental receivables are discounted at present value to provide the property owner with a lump-sum loan amount. Unlike a construction loan (which funds building), an LRD loan is secured against the revenue-generating capacity of the existing lease. LRD typically offers lower interest rates than construction finance since the project risk has been resolved.",
      },
    ],
    relatedServiceSlugs: ["project-feasibility", "dpr", "financial-modelling", "term-loan-advisory"],
    seo: {
      metaTitle: "Commercial Building Finance & Advisory | VS Advisory",
      metaDescription: "Construction finance, DPR, and lease rental discounting advisory for commercial office buildings and retail complexes in India.",
      keywords: ["commercial building finance India", "office complex bank loan", "RERA compliance advisory", "lease rental discounting India", "commercial real estate DPR"],
    },
  },

  // =========================================================================
  // 12. AGRICULTURE PROJECTS
  // =========================================================================
  {
    id: "agriculture-projects",
    slug: "agriculture-projects",
    title: "Agriculture Projects & Farm Infrastructure",
    shortTitle: "Agriculture Projects",
    sector: "Agro & Food Processing",
    sectorId: "agro-food",
    badge: "Priority Sector — Agriculture",
    iconName: "Wheat",
    lastReviewed: "2025-03-01",
    reviewedBy: "Senior Financial Analyst, VS Advisory",
    sourceReferences: [
      { title: "NABARD Kisan Credit Card & Agricultural Finance Guidelines", type: "NABARD" },
      { title: "RBI Master Directions — Priority Sector Lending to Agriculture", type: "RBI" },
    ],
    hero: {
      headline: "Finance & Advisory for Agriculture Projects & Farm Infrastructure",
      subheadline: "Project finance, business planning, and subsidy advisory for drip irrigation, greenhouse farming, orchard development, and agro-allied infrastructure.",
      keyParameters: [
        { label: "PSL Classification", value: "Agriculture — Direct & Indirect PSL" },
        { label: "Eligible Finance", value: "KCC, Farm Machinery Loan, Agri Infrastructure Fund" },
        { label: "Key Advisory", value: "NABARD & AIF scheme navigation" },
      ],
    },
    overview: {
      title: "Agricultural Finance — PSL Framework & Opportunities",
      paragraphs: [
        "Agriculture and allied activities represent the cornerstone of India's Priority Sector Lending (PSL) framework. RBI mandates that commercial banks, foreign banks, and cooperative banks lend a specified percentage of their adjusted net bank credit to agriculture (direct and indirect), creating strong institutional demand for agri-credit.",
        "From a project finance perspective, large-scale agriculture projects (commercial orchards, greenhouse complexes, integrated farms, FPO infrastructure) have distinct characteristics: long gestation periods (orchards take 4–6 years to full production), seasonal revenue patterns, crop failure risks, and collateral challenges in leased agricultural land.",
        "The Agriculture Infrastructure Fund (AIF), administered by NABARD, provides structured financing for post-harvest and farm-gate infrastructure with interest subvention support channeled through eligible financial institutions.",
      ],
    },
    businessModels: [
      {
        title: "Commercial Orcharding (Mango, Guava, Citrus, Apple)",
        description: "Large-scale plantation of fruit orchards under scientific cultivation practices for domestic sale or export.",
        revenueDrivers: ["Annual yield per hectare × per-unit selling price", "Value-added products (processed pulp, packaged fruits)", "Agri-tourism on farm (supplementary)"],
      },
      {
        title: "Protected Cultivation (Greenhouse / Polyhouse)",
        description: "Climate-controlled growing environment for year-round production of vegetables, flowers, and specialty crops.",
        revenueDrivers: ["Year-round crop production revenue (off-season premium)", "Export of high-value crops (cucumber, capsicum, tomato)", "Contract farming revenue"],
      },
      {
        title: "Integrated Farming System (IFS)",
        description: "Multi-component farm combining crops, horticulture, livestock, fishery, and agro-processing.",
        revenueDrivers: ["Multiple revenue streams from crop + livestock + agro-processing", "Organic certification premium", "Biogas / energy from farm waste"],
      },
    ],
    projectComponents: [
      {
        head: "Agri Infrastructure",
        description: "Farm infrastructure, irrigation, and storage.",
        typicalElements: ["Land development and bunding", "Drip / micro-irrigation system", "Polyhouse / greenhouse structure", "Pump house and water source (borewell / canal lift irrigation)", "Farm road and internal connectivity", "Pack house / primary processing shed"],
      },
    ],
    costHeads: [
      {
        category: "Farm Operating Costs",
        components: [
          "Seeds / planting material",
          "Fertilizers and pesticides",
          "Labour (harvesting, post-harvest handling)",
          "Power for irrigation pumps",
          "Packaging and cold chain for marketing",
          "Annual maintenance of irrigation system",
        ],
        note: "For orchards, significant investment occurs in the establishment phase (Years 1–4) with no commercial revenue. Financial planning must cover this non-productive gestation period.",
      },
    ],
    infrastructure: [
      { type: "Water / Irrigation", details: "Assured irrigation water source (borewell, canal, farm pond) is essential. Drip irrigation is a prerequisite for most AIF-supported projects." },
      { type: "Power", details: "Single-phase or 3-phase agricultural connection for irrigation pumps. Solar pump sets increasingly used for energy cost reduction." },
    ],
    financingStructure: {
      title: "Indicative Financing Structure — Agriculture Projects",
      disclaimer: FINANCING_DISCLAIMER,
      items: [
        { aspect: "Agriculture Infrastructure Fund (AIF)", indicativeConvention: "AIF-supported projects access term loans with credit guarantee and interest subvention through eligible financial institutions", note: "AIF guidelines and operational modalities must be verified with NABARD / respective FI." },
        { aspect: "NABARD Refinance", indicativeConvention: "Banks lending to eligible agri-infrastructure projects can access NABARD refinance at concessional rates", note: "Benefit passed to borrowers is at individual bank's discretion." },
      ],
    },
    commonDocumentation: [
      {
        category: "Agricultural & Land",
        items: [
          "Land records (7/12 extract, 8-A extract or equivalent state land record)",
          "Source of irrigation certificate (borewell registration, canal water entitlement)",
          "Soil test report",
          "Crop insurance coverage details",
          "Project preparation report (PPR) / DPR for AIF applications",
        ],
      },
    ],
    dprConsiderations: [
      { chapter: "Crop Production Assumptions", specificNote: "Agricultural DPRs must base yield assumptions on local agricultural university research station data, ICAR benchmark data, or district-level crop production statistics. Overstated yield projections are the primary rejection reason for agri-project loans." },
      { chapter: "Gestation Period Modeling", specificNote: "Orchard projects must explicitly model the gestation/establishment phase (Years 1–4 with minimal revenue). Financial projections must show how interest and working capital during gestation will be serviced — typically from promoter's other income or moratorium." },
    ],
    cmaConsiderations: [
      { aspect: "Seasonal Revenue & Working Capital", industryNote: "Agricultural income is seasonal. CMA projections must reflect seasonal harvest and sale patterns, peak working capital requirements during input procurement season, and loan repayment alignment with harvest calendar." },
    ],
    financialMetrics: [
      { metric: "Polyhouse Crop Yield (Tomato)", indicativeRange: "150–250 MT per acre per year (with good management)", basis: "ICAR / State Horticulture Department benchmark yields", source: "ICAR-IIHR (Indian Institute of Horticultural Research)", asOf: "2023-12", disclaimer: METRIC_DISCLAIMER },
    ],
    registrationsLicenses: [
      { name: "Land Record Compliance (7/12 / Patta)", authority: "State Revenue Department", mandatory: true },
      { name: "Organic Certification (if applicable)", authority: "APEDA accredited organic certification body", mandatory: false, note: "Required for premium organic market access." },
      { name: "Crop Insurance (PMFBY)", authority: "Insurance Company / Government", mandatory: false, note: "Strongly recommended — often a loan condition from banks." },
    ],
    governmentSchemes: [
      {
        schemeName: "Agriculture Infrastructure Fund (AIF)",
        schemeType: "Interest Subvention",
        administeredBy: "NABARD via eligible Financial Institutions",
        applicability: "Post-harvest management infrastructure, community farming assets, and primary agri-processing projects meeting AIF eligibility criteria.",
        sourceUrl: "https://agriinfra.dac.gov.in",
        lastVerified: "2025-03-01",
        reviewedBy: "Senior Financial Analyst, VS Advisory",
        disclaimer: SCHEME_DISCLAIMER,
      },
      {
        schemeName: "PM Kisan Sampada Yojana (PMKSY)",
        schemeType: "Capital Subsidy",
        administeredBy: "Ministry of Food Processing Industries (MoFPI)",
        applicability: "Integrated cold chain, agro-processing, and farm-gate infrastructure meeting PMKSY sub-scheme eligibility.",
        sourceUrl: "https://mofpi.gov.in/pmksy",
        lastVerified: "2025-03-01",
        reviewedBy: "Senior Financial Analyst, VS Advisory",
        disclaimer: SCHEME_DISCLAIMER,
      },
    ],
    potentialRisks: [
      { category: "Operational", title: "Crop Failure / Weather Risk", description: "Drought, floods, pest attacks, and unseasonal rainfall can cause complete crop failure in a given year. Crop insurance is critical mitigation." },
      { category: "Market", title: "Agricultural Price Volatility", description: "Farm commodity prices are highly volatile. A bumper harvest across the region can depress prices precisely when the farmer has the highest output." },
      { category: "Regulatory", title: "APMC Restrictions", description: "State-level APMC regulations may restrict direct marketing, e-trading, or FPO-direct retail." },
    ],
    vsAdvisoryProcess: [
      { step: 1, title: "Crop & Agri-Business Model Validation", description: "Validate crop selection, yield assumptions, and marketing linkages." },
      { step: 2, title: "AIF & NABARD Scheme Navigation", description: "Identify AIF eligibility and assist with PPR preparation for AIF application." },
      { step: 3, title: "Agri-DPR & Finance Structuring", description: "Prepare crop-specific DPR with gestation period modeling and seasonal cash flow." },
    ],
    faqs: [
      {
        question: "What is the Agriculture Infrastructure Fund (AIF) and who can apply?",
        answer: "The Agriculture Infrastructure Fund (AIF) is a central government scheme providing medium-to-long-term debt financing with credit guarantee and interest subvention for investment in viable projects for post-harvest management infrastructure and community farming assets. Eligible applicants include Farmers, FPOs (Farmer Producer Organizations), Agri-entrepreneurs, SHGs, and joint liability groups. Applications are made through eligible financial institutions (banks, NBFCs, cooperatives). Specific eligibility, quantum, and terms must be verified with the respective financial institution and NABARD.",
      },
    ],
    relatedServiceSlugs: ["dpr", "government-scheme-assistance", "subsidy-advisory", "project-feasibility"],
    seo: {
      metaTitle: "Agriculture Project Finance & Advisory | VS Advisory",
      metaDescription: "AIF scheme advisory, DPR, and project finance for agriculture projects, polyhouses, orchards, and farm infrastructure in India.",
      keywords: ["agriculture project finance India", "AIF scheme advisory", "polyhouse bank loan", "orchard project DPR", "farm infrastructure financing"],
    },
  },

  // =========================================================================
  // 13. POULTRY
  // =========================================================================
  {
    id: "poultry",
    slug: "poultry",
    title: "Poultry Farming & Layer/Broiler Operations",
    shortTitle: "Poultry",
    sector: "Agro & Food Processing",
    sectorId: "agro-food",
    badge: "Allied Agriculture",
    iconName: "Sprout",
    lastReviewed: "2025-03-01",
    reviewedBy: "Senior Financial Analyst, VS Advisory",
    sourceReferences: [
      { title: "NABARD Project Profiles — Poultry Farming", type: "NABARD" },
      { title: "NPOP (National Poultry Policy)", type: "Government Notification" },
    ],
    hero: {
      headline: "Project Finance & Advisory for Poultry Farms",
      subheadline: "Bankable project reports, working capital, and NABARD scheme advisory for broiler, layer, and integrated poultry units.",
      keyParameters: [
        { label: "Farm Types", value: "Broiler, Layer, Hatchery, Integrated" },
        { label: "PSL Classification", value: "Allied Agriculture — Priority Sector" },
        { label: "Revenue Cycle", value: "Broiler: 6-week crop cycle; Layer: 52-week lay cycle" },
      ],
    },
    overview: {
      title: "Poultry Industry Finance",
      paragraphs: [
        "India is the third-largest egg producer and among the top five broiler producers globally. The poultry sector is classified under Allied Agriculture in RBI's PSL framework, making it eligible for priority sector lending by commercial banks.",
        "Poultry farming projects have distinct financial characteristics: short production cycles (broiler: 6 weeks; layer: 18–24 months), high biological asset risk (disease outbreaks), and volatile raw material costs (poultry feed is typically 65–70% of operating cost).",
        "Integration with poultry integrators (contract farming arrangements with large poultry companies) provides a predictable input supply and buyback arrangement, significantly improving bankability for small and medium farmers.",
      ],
    },
    businessModels: [
      {
        title: "Broiler Contract Farming",
        description: "Growing broilers on a contract basis for a poultry integrator. Integrator provides chicks, feed, and veterinary support. Farmer provides shed and labour.",
        revenueDrivers: ["Per-bird growing charge from integrator", "Mortality risk sharing per contract terms", "Lower market risk compared to independent farming"],
      },
      {
        title: "Independent Broiler Farming",
        description: "Purchasing DOC (day-old chicks) and feed independently, growing, and selling live birds to poultry markets.",
        revenueDrivers: ["Live bird selling price per kg × weight per bird", "Mortality-adjusted production output", "Manure / litter sale"],
      },
      {
        title: "Commercial Layer Farming",
        description: "Growing layer pullets to 18 weeks and managing egg-producing flocks for 52+ weeks.",
        revenueDrivers: ["Egg production per bird per annum × egg selling price", "Spent hen sale revenue at end of lay cycle", "Manure sale"],
      },
    ],
    projectComponents: [
      {
        head: "Poultry Shed & Equipment",
        description: "Poultry house, ventilation, feeding and watering systems.",
        typicalElements: ["Broiler / layer shed (conventional or controlled environment / fan-pad)", "Automatic feeding and nipple drinking systems", "Egg collection belt (layers)", "Biogas plant for litter (optional)", "Feed storage area"],
      },
    ],
    costHeads: [
      {
        category: "Poultry Farm Operating Costs",
        components: [
          "Poultry feed (65–70% of total operating cost)",
          "DOC (day-old chicks) purchase cost",
          "Veterinary medicines, vaccines, biosecurity",
          "Power (ventilation fans, lighting, equipment)",
          "Labour",
          "Interest on working capital",
        ],
        note: "Feed cost is the dominant variable. Maize and soybean meal prices (primary feed ingredients) are highly volatile and directly impact profitability.",
      },
    ],
    infrastructure: [
      { type: "Shed Orientation & Ventilation", details: "East-west shed orientation. Minimum 25–30 feet width for tunnel ventilation. Fan-pad cooling essential for summer performance in most Indian states." },
      { type: "Water", details: "Clean, bacteriologically safe water is critical. Minimum 0.5 liters per bird per day for broilers. Water quality testing required." },
      { type: "Biosecurity", details: "Physical separation from other poultry operations, vehicle sanitization, bird-netting, and proper carcass disposal system." },
    ],
    financingStructure: {
      title: "Indicative Financing Structure — Poultry",
      disclaimer: FINANCING_DISCLAIMER,
      items: [
        { aspect: "Term Loan (Shed & Equipment)", indicativeConvention: "65:35 Debt:Equity for NABARD-backed poultry loans", note: "NABARD refinance eligibility enhances bank comfort for poultry term loans." },
        { aspect: "Working Capital", indicativeConvention: "Short-term crop-cycle loans or KCC for feed and chick procurement", note: "Working capital aligned to 6-week broiler crop cycle." },
      ],
    },
    commonDocumentation: [
      {
        category: "Poultry & Regulatory",
        items: [
          "Land records and NOC from Gram Panchayat / local authority",
          "Poultry shed layout and distance from residential area (minimum distances per state norms)",
          "SPCB consent (for large poultry units)",
          "Veterinary department registration",
          "Water quality test report",
        ],
      },
    ],
    dprConsiderations: [
      { chapter: "Biological Asset Risk", specificNote: "Poultry DPRs must address disease risk (AI, Newcastle Disease, IBD) mitigation through vaccination protocol, insurance, and biosecurity practices. A clearly described veterinary protocol is important for bank credit committee confidence." },
      { chapter: "Feed Cost Sensitivity", specificNote: "Sensitivity analysis showing DSCR impact for ±10% in feed cost is essential. Feed is the primary cost driver and directly affects viability." },
    ],
    cmaConsiderations: [
      { aspect: "Crop-Cycle Revenue Recognition", industryNote: "Broiler farms earn revenue in 6-week crop cycles. CMA must model 8 crops per year (typically), each cycle's chick cost, feed cost, and sale proceeds." },
    ],
    financialMetrics: [
      { metric: "Broiler Feed Conversion Ratio (FCR)", indicativeRange: "1.7–1.9 (industry standard for commercial broilers)", basis: "APEDA poultry industry data and CLFMA feed conversion benchmarks", source: "CLFMA (Compound Livestock Feed Manufacturers Association)", asOf: "2023-12", disclaimer: METRIC_DISCLAIMER },
    ],
    registrationsLicenses: [
      { name: "Veterinary Department Registration", authority: "State Animal Husbandry Department", mandatory: true },
      { name: "SPCB Consent (large units)", authority: "State Pollution Control Board", mandatory: false, note: "Required for large poultry operations above SPCB threshold capacities." },
      { name: "Drug License for Veterinary Medicine Storage", authority: "State Drug Controller", mandatory: false, note: "If veterinary medicine store operated on farm." },
    ],
    governmentSchemes: [
      {
        schemeName: "NABARD Refinance for Animal Husbandry (Poultry)",
        schemeType: "Working Capital Support",
        administeredBy: "NABARD",
        applicability: "Banks lending to eligible poultry farming enterprises. NABARD provides refinance to financial institutions for viable poultry projects meeting technical and financial standards.",
        sourceUrl: "https://nabard.org",
        lastVerified: "2025-03-01",
        reviewedBy: "Senior Financial Analyst, VS Advisory",
        disclaimer: SCHEME_DISCLAIMER,
      },
    ],
    potentialRisks: [
      { category: "Operational", title: "Disease Outbreak Risk", description: "Highly Pathogenic Avian Influenza (HPAI / Bird Flu) outbreaks lead to mandatory culling, total income loss, and sometimes regional market disruption." },
      { category: "Market", title: "Live Bird Price Volatility", description: "Broiler live bird prices are highly cyclical and unpredictable. A seasonal price crash during festival season oversupply can eliminate profit margins." },
      { category: "Financial", title: "Feed Price Risk", description: "Maize and soybean meal price volatility directly impacts operating costs and can compress or eliminate margins within a single crop cycle." },
    ],
    vsAdvisoryProcess: [
      { step: 1, title: "Business Model & Contract Arrangement Advisory", description: "Evaluate contract farming vs independent farming based on promoter experience and risk appetite." },
      { step: 2, title: "NABARD-Linked DPR Preparation", description: "Prepare NABARD-compliant poultry project report with crop-cycle financials." },
      { step: 3, title: "Working Capital & Crop Loan Structuring", description: "Structure KCC or crop loan for chick and feed procurement aligned to 6-week cycle." },
    ],
    faqs: [
      {
        question: "What is the typical loan structure for a poultry project through NABARD-linked banks?",
        answer: "Poultry projects typically access two types of finance: (1) A Term Loan for shed construction and equipment, typically repayable over 5–7 years with an initial 6–12 month moratorium, backed by mortgage of land and shed; and (2) A Kisan Credit Card (KCC) or crop loan for working capital (chick purchase + feed cost), revolving on a crop-cycle basis. NABARD provides refinance to commercial banks for both types of loans, which may allow banks to offer slightly more competitive rates.",
      },
    ],
    relatedServiceSlugs: ["dpr", "cma", "working-capital-advisory", "government-scheme-assistance"],
    seo: {
      metaTitle: "Poultry Farm Finance & DPR Advisory | VS Advisory",
      metaDescription: "NABARD-linked DPR, project finance, and scheme advisory for broiler, layer, and integrated poultry farming projects in India.",
      keywords: ["poultry farm loan India", "broiler DPR NABARD", "poultry project finance", "layer farm bank loan", "poultry NABARD advisory"],
    },
  },

  // =========================================================================
  // 14. DAIRY FARMS
  // =========================================================================
  {
    id: "dairy-farms",
    slug: "dairy-farms",
    title: "Dairy Farms & Milk Processing Units",
    shortTitle: "Dairy Farms",
    sector: "Agro & Food Processing",
    sectorId: "agro-food",
    badge: "Allied Agriculture — Dairy",
    iconName: "Sprout",
    lastReviewed: "2025-03-01",
    reviewedBy: "Senior Financial Analyst, VS Advisory",
    sourceReferences: [
      { title: "NABARD Project Profiles — Dairy Development", type: "NABARD" },
      { title: "NDP-I / NDP-III (National Dairy Plan)", type: "Government Notification" },
      { title: "DEDS (Dairy Entrepreneurship Development Scheme)", type: "Government Notification" },
    ],
    hero: {
      headline: "Project Finance & Advisory for Dairy Farms & Processing Units",
      subheadline: "NABARD-compliant DPR, DEDS scheme advisory, and milk processing unit project finance for commercial dairy farms across India.",
      keyParameters: [
        { label: "PSL Classification", value: "Animal Husbandry — Priority Sector" },
        { label: "Key Schemes", value: "DEDS, NABARD Dairy Refinance, NCDC" },
        { label: "Revenue Model", value: "Milk sale (lit/day), Value-added dairy products" },
      ],
    },
    overview: {
      title: "Indian Dairy Industry — Finance Landscape",
      paragraphs: [
        "India is the world's largest producer of milk. The dairy sector spans individual farm animals to large commercial dairy farms (100+ animals) and integrated milk processing plants. From a banking perspective, dairy farming is classified under Animal Husbandry / Allied Agriculture under PSL.",
        "The Dairy Entrepreneurship Development Scheme (DEDS), administered through NABARD, provides back-ended capital subsidy support for dairy infrastructure development. The scheme specifically targets new small dairy farm establishment and strengthening of existing farms.",
        "Commercial dairy farm projects require careful financial modeling that accounts for animal replacement cycles, milk yield per animal per day (based on breed selection), feed cost as the dominant operating cost, and the critical difference between own-brand milk processing vs bulk supply to cooperative (AMUL, Mother Dairy, state cooperatives).",
      ],
    },
    businessModels: [
      {
        title: "Bulk Milk Supply to Cooperative / Dairy Company",
        description: "Commercial dairy farm supplying raw milk to nearest cooperative chilling center or private dairy.",
        revenueDrivers: ["Liters of milk produced per day × cooperative procurement rate (FAT/SNF based)", "Animal headcount × yield per animal per day", "Calf and spent cow sale revenue"],
      },
      {
        title: "Own Brand Dairy Products (Value Addition)",
        description: "Processing and marketing own-brand dairy products (paneer, ghee, butter, flavored milk).",
        revenueDrivers: ["Value-added product margin over raw milk price", "Direct consumer sales via local distribution", "Institutional supply to restaurants and hotels"],
      },
    ],
    projectComponents: [
      {
        head: "Dairy Farm Infrastructure",
        description: "Animal shed, milking parlor, fodder storage, and manure management.",
        typicalElements: ["Loose housing / stall feeding shed (RCC)", "Milking parlor (manual or automatic)", "Fodder storage (dry and silage)", "Biogas plant (for manure / slurry)", "Bulk milk cooler / refrigeration", "Staff quarters"],
      },
    ],
    costHeads: [
      {
        category: "Dairy Farm Operating Costs",
        components: [
          "Animal purchase cost (capital or lease)",
          "Feed and fodder (typically 60–70% of operating cost): concentrate, green fodder, dry fodder",
          "Veterinary and AI (artificial insemination) services",
          "Labour: milking workers, cattle care staff",
          "Power for milking machine, cooling, biogas",
          "Insurance on animals (animal insurance is critical risk mitigation)",
        ],
        note: "Feed cost is the dominant operating cost. Green fodder cultivation on own land significantly reduces feed cost for farms with land access.",
      },
    ],
    infrastructure: [
      { type: "Land", details: "Minimum 1 acre for 20-animal unit. Fodder cultivation on adjacent land significantly improves economics. Land should not be flood-prone." },
      { type: "Water", details: "Each adult dairy cattle requires 70–100 liters of clean water per day. Reliable borewell or canal connection essential." },
    ],
    financingStructure: {
      title: "Indicative Financing Structure — Dairy Farms",
      disclaimer: FINANCING_DISCLAIMER,
      items: [
        { aspect: "DEDS Scheme", indicativeConvention: "Capital subsidy available through NABARD for eligible dairy infrastructure items — verify current operational status with NABARD", note: "DEDS operational status and subsidy quantum subject to periodic revision by NABARD / Ministry of Animal Husbandry." },
        { aspect: "Term Loan", indicativeConvention: "65:35 Debt:Equity for NABARD-backed dairy farm loans", note: "Animal purchase cost may or may not be included depending on bank policy and animal insurance." },
      ],
    },
    commonDocumentation: [
      {
        category: "Dairy & Veterinary",
        items: [
          "Animal health certificate from registered veterinarian",
          "State Animal Husbandry Department registration",
          "Milk testing report (fat, SNF) from accredited laboratory",
          "Animal insurance policy",
          "FSSAI license (for processing units)",
          "Biogas plant technical specifications and supplier certificate",
        ],
      },
    ],
    dprConsiderations: [
      { chapter: "Breed & Yield Assumptions", specificNote: "Milk yield assumptions must be based on breed-specific benchmarks: HF/Jersey crossbred: 15–20 liters/day; Murrah buffalo: 8–12 liters/day. Overstated yield assumptions are the most common reason for dairy DPR rejections." },
      { chapter: "Feed Cost & Fodder Plan", specificNote: "A detailed feed plan showing green fodder, dry fodder, and concentrate mix per animal per day, with sourcing plan and cost, is critical. Own fodder cultivation should be costed and credited in the projections." },
    ],
    cmaConsiderations: [
      { aspect: "Lactation Cycle Revenue", industryNote: "Dairy cattle produce milk for approximately 300 days per lactation cycle (with 60-65 days dry period). CMA projections must model revenue dips during dry periods and herd replenishment cycles." },
    ],
    financialMetrics: [
      { metric: "Milk Yield — HF/Jersey Crossbred", indicativeRange: "12–18 liters per animal per day (varies by feed quality and management)", basis: "ICAR-NDRI breed performance benchmarks", source: "ICAR — National Dairy Research Institute", asOf: "2024-01", disclaimer: METRIC_DISCLAIMER },
    ],
    registrationsLicenses: [
      { name: "State Animal Husbandry Department Registration", authority: "State Animal Husbandry Department", mandatory: true },
      { name: "FSSAI License (for milk processing)", authority: "FSSAI", mandatory: false, note: "Required if milk is processed or packed for sale." },
      { name: "Animal Insurance", authority: "General Insurance Company", mandatory: false, note: "Not a statutory requirement but essential risk mitigation and usually a loan condition." },
    ],
    governmentSchemes: [
      {
        schemeName: "DEDS — Dairy Entrepreneurship Development Scheme",
        schemeType: "Capital Subsidy",
        administeredBy: "NABARD (routed through participating financial institutions)",
        applicability: "New dairy farm establishment and upgradation. Individual farmers, SHG members, FPOs. Specific eligibility and quantum to be verified with NABARD.",
        sourceUrl: "https://nabard.org/content1.aspx?id=591",
        lastVerified: "2025-03-01",
        reviewedBy: "Senior Financial Analyst, VS Advisory",
        disclaimer: SCHEME_DISCLAIMER,
      },
      {
        schemeName: "NCDC (National Cooperative Development Corporation) — Dairy",
        schemeType: "Working Capital Support",
        administeredBy: "National Cooperative Development Corporation",
        applicability: "Dairy cooperatives and farmer producer organizations for dairy processing infrastructure.",
        sourceUrl: "https://ncdc.in",
        lastVerified: "2025-03-01",
        reviewedBy: "Senior Financial Analyst, VS Advisory",
        disclaimer: SCHEME_DISCLAIMER,
      },
    ],
    potentialRisks: [
      { category: "Operational", title: "Animal Disease Risk", description: "FMD (Foot and Mouth Disease), Brucellosis, and other infectious diseases can cause mass animal mortality. Animal insurance is critical risk mitigation." },
      { category: "Market", title: "Milk Price Risk", description: "Cooperative procurement prices vary by fat and SNF content. Private dairy companies may have volatile procurement policies." },
      { category: "Financial", title: "Feed Price Risk", description: "Green fodder and feed grain prices are volatile. Poor monsoon years can significantly increase feed cost." },
    ],
    vsAdvisoryProcess: [
      { step: 1, title: "Animal Selection & Breed Advisory", description: "Guide breed selection (HF, Jersey, indigenous) based on local agro-climatic conditions and feed availability." },
      { step: 2, title: "DEDS & NABARD Scheme Navigation", description: "Assess DEDS eligibility and prepare NABARD-compliant DPR." },
      { step: 3, title: "Animal Finance & Lender Matching", description: "Structure animal purchase loan + infrastructure term loan and identify animal-husbandry-friendly lenders (RRBs, cooperative banks, NABARD-linked banks)." },
    ],
    faqs: [
      {
        question: "Is animal purchase cost eligible for a bank loan in dairy farming projects?",
        answer: "Yes. Commercial banks and Regional Rural Banks (RRBs) do finance animal purchase costs under dairy farm project loans, typically as part of the total project cost (shed + equipment + animals + working capital). However, banks may apply a lower LTV (Loan-to-Value) for animals compared to fixed assets, and animal insurance is almost always mandated as a loan condition. Pure animal purchase loans (without accompanying infrastructure) may be structured as short-term cattle loans.",
      },
    ],
    relatedServiceSlugs: ["dpr", "government-scheme-assistance", "working-capital-advisory", "project-feasibility"],
    seo: {
      metaTitle: "Dairy Farm Finance & DEDS Scheme Advisory | VS Advisory",
      metaDescription: "NABARD-compliant DPR, DEDS scheme advisory, and project finance for dairy farms and milk processing units in India.",
      keywords: ["dairy farm loan NABARD", "DEDS scheme advisory", "dairy project DPR India", "milk processing unit finance", "dairy entrepreneurship scheme"],
    },
  },

  // =========================================================================
  // 15. COLD STORAGE
  // =========================================================================
  {
    id: "cold-storage",
    slug: "cold-storage",
    title: "Cold Storage & Temperature-Controlled Facilities",
    shortTitle: "Cold Storage",
    sector: "Agro & Food Processing",
    sectorId: "agro-food",
    badge: "Agri Infrastructure — Cold Chain",
    iconName: "Thermometer",
    lastReviewed: "2025-03-01",
    reviewedBy: "Senior Financial Analyst, VS Advisory",
    sourceReferences: [
      { title: "NHB Cold Storage Scheme Guidelines", type: "Government Notification", url: "https://nhb.gov.in" },
      { title: "NABARD Cold Chain Finance — Project Profiles", type: "NABARD" },
      { title: "PMKSY — MoFPI Cold Chain Component", type: "MoFPI", url: "https://mofpi.gov.in" },
    ],
    hero: {
      headline: "Project Finance & Advisory for Cold Storage Facilities",
      subheadline: "NHB scheme advisory, WDRA registration, and term loan structuring for cold storage, frozen food storage, and integrated cold chain infrastructure.",
      keyParameters: [
        { label: "PSL Classification", value: "Agriculture Infrastructure — Priority Sector" },
        { label: "Key Schemes", value: "NHB Cold Storage, PMKSY Cold Chain, AIF" },
        { label: "Key Parameter", value: "Plate capacity (MT), Temperature range maintained" },
      ],
    },
    overview: {
      title: "Cold Storage Industry Finance in India",
      paragraphs: [
        "India loses a significant proportion of its annual horticultural produce due to inadequate cold chain infrastructure. Cold storage facilities are classified as Agriculture Infrastructure and qualify as Priority Sector Lending under RBI guidelines — making them highly bankable with institutional lenders.",
        "The National Horticulture Board (NHB) and MoFPI run specific capital subsidy schemes for cold storage construction. The Agriculture Infrastructure Fund (AIF) provides interest subvention for cold chain investments. Multiple scheme benefits can potentially be layered.",
        "Cold storage projects have predictable revenue streams (seasonal storage rental + handling charges) and offer tangible collateral (land, building, and refrigeration equipment). This makes them relatively well-liked by commercial lenders.",
      ],
    },
    businessModels: [
      {
        title: "Commercial Cold Storage (Potato / Produce)",
        description: "Bulk storage of agricultural produce (primarily potato in North India) on a rental basis for farmers, traders, and FPOs.",
        revenueDrivers: ["Storage rental per MT per month × capacity utilization", "Handling charges (in + out)", "Pledge loan interest (if collateral management service provided via WDRA NWR)"],
      },
      {
        title: "Multi-Commodity Cold Chain",
        description: "Temperature-controlled facility handling multiple commodities across temperature zones (0°C, -18°C, +2°C).",
        revenueDrivers: ["Differentiated storage rental by temperature zone", "Value-added services: quick freezing (IQF), blast freezing, packaging", "Long-term contracts with food processing companies"],
      },
    ],
    projectComponents: [
      {
        head: "Civil & Insulated Structure",
        description: "Insulated cold room building, loading bays, and antechamber.",
        typicalElements: ["Prefabricated insulated PUF panel cold rooms", "Insulated loading bays and antechamber", "Hardstanding concrete floor with dock levelers", "Refrigeration machine room"],
      },
      {
        head: "Refrigeration Plant",
        description: "Core refrigeration system and controls.",
        typicalElements: ["Compressor rack (screw / semi-hermetic)", "Air coolers / evaporators", "Condenser (air-cooled or evaporative)", "Refrigerant: NH3 or HFCs (F-gas compliant)", "Temperature monitoring and SCADA"],
      },
    ],
    costHeads: [
      {
        category: "Cold Storage Operating Costs",
        components: [
          "Power cost (dominant cost — refrigeration is energy-intensive)",
          "Refrigeration plant maintenance",
          "Labour: supervisors, loading/unloading workers",
          "Refrigerant top-up (leakage related)",
          "Insurance: building, machinery, goods-in-store",
          "Term loan interest",
        ],
        note: "Power cost is the primary operating cost for cold storage, typically representing 40–55% of operating expenditure. Power tariff and reliability directly impact cold storage economics.",
      },
    ],
    infrastructure: [
      { type: "Power", details: "Refrigeration is highly power-intensive. 3-phase HT supply mandatory for medium to large cold storage. 100% DG backup is essential — power failure causes total stored produce loss." },
      { type: "Water", details: "Required for evaporative condensers and staff use." },
      { type: "Location", details: "Proximity to production zone (potato belt, horticulture cluster) critical for catchment and transportation cost optimization." },
    ],
    financingStructure: {
      title: "Indicative Financing Structure — Cold Storage",
      disclaimer: FINANCING_DISCLAIMER,
      items: [
        { aspect: "Debt:Equity", indicativeConvention: "65:35 — banks favor cold storage due to tangible collateral and PSL classification", note: "NHB / PMKSY scheme subsidy effectively reduces promoter equity requirement." },
        { aspect: "NHB Scheme Benefit", indicativeConvention: "Back-ended capital subsidy via NHB routed through lending bank — quantum to be verified with NHB", note: "NHB scheme terms, quantum, and eligibility must be verified with NHB or the lending bank." },
        { aspect: "Tenure", indicativeConvention: "7 to 10 years", note: "Cold storage refrigeration equipment has 15+ year life span — tenures are comfortably structured." },
      ],
    },
    commonDocumentation: [
      {
        category: "Cold Storage Regulatory",
        items: [
          "NHB cold storage scheme registration / application acknowledgement",
          "WDRA registration (if providing collateral management)",
          "FSSAI license (if storing food commodities for processing)",
          "State Pollution Control Board CTE (for NH3-based refrigeration — red category)",
          "Lift NOC (for multi-story cold stores)",
        ],
      },
    ],
    dprConsiderations: [
      { chapter: "Capacity Utilization Model", specificNote: "Cold storage DPRs must model occupancy (% of rated storage capacity) by month, seasonal intake and outflow pattern, and realistic ramp-up in Year 1 and Year 2. Seasonal storage for crops like potato has very predictable utilization patterns that must be explicitly modeled." },
      { chapter: "Power Cost Modeling", specificNote: "Power cost must be based on actual state DISCOM HT tariff per kWh plus demand charges. Include DG fuel cost during power cuts. This is a material cost line that banks specifically scrutinize." },
    ],
    cmaConsiderations: [
      { aspect: "Seasonal Revenue Pattern", industryNote: "Potato cold storage: intake Oct–Nov (post-harvest), storage until Jun–Jul, dispatch. CMA must model this seasonal inventory and revenue cycle explicitly." },
    ],
    financialMetrics: [
      { metric: "Cold Storage Rental Rate (Potato — North India)", indicativeRange: "₹250–₹500 per MT per season (varies by state and year)", basis: "State cold storage association rate data", source: "UP / WB Cold Storage Association published rates", asOf: "2023-11", disclaimer: METRIC_DISCLAIMER },
    ],
    registrationsLicenses: [
      { name: "NHB Registration / Accreditation", authority: "National Horticulture Board", mandatory: false, note: "Required to access NHB capital subsidy scheme." },
      { name: "WDRA Registration", authority: "Warehousing Development and Regulatory Authority", mandatory: false, note: "Required for issuing Negotiable Warehouse Receipts." },
      { name: "SPCB CTE (NH3 Plants)", authority: "State Pollution Control Board", mandatory: true, note: "Ammonia (NH3) refrigerant cold storage classified in Red category." },
      { name: "FSSAI License", authority: "FSSAI", mandatory: false, note: "Required if storing food commodities for commercial distribution." },
    ],
    governmentSchemes: [
      {
        schemeName: "NHB Cold Storage Development Scheme",
        schemeType: "Capital Subsidy",
        administeredBy: "National Horticulture Board (NHB)",
        applicability: "Construction of new cold stores or up-gradation of existing cold stores meeting NHB technical standards.",
        sourceUrl: "https://nhb.gov.in",
        lastVerified: "2025-03-01",
        reviewedBy: "Senior Financial Analyst, VS Advisory",
        disclaimer: SCHEME_DISCLAIMER,
      },
      {
        schemeName: "PMKSY — Cold Chain Component (MoFPI)",
        schemeType: "Capital Subsidy",
        administeredBy: "Ministry of Food Processing Industries via State Nodal Agencies",
        applicability: "Integrated cold chain infrastructure for horticulture and other perishable commodities.",
        sourceUrl: "https://mofpi.gov.in",
        lastVerified: "2025-03-01",
        reviewedBy: "Senior Financial Analyst, VS Advisory",
        disclaimer: SCHEME_DISCLAIMER,
      },
      {
        schemeName: "Agriculture Infrastructure Fund (AIF) — Cold Chain",
        schemeType: "Interest Subvention",
        administeredBy: "NABARD via eligible Financial Institutions",
        applicability: "Post-harvest cold storage and temperature-controlled logistics for agricultural produce.",
        sourceUrl: "https://agriinfra.dac.gov.in",
        lastVerified: "2025-03-01",
        reviewedBy: "Senior Financial Analyst, VS Advisory",
        disclaimer: SCHEME_DISCLAIMER,
      },
    ],
    potentialRisks: [
      { category: "Operational", title: "Power Failure Risk", description: "Any prolonged power outage leads to temperature excursion and potential total loss of stored produce. Comprehensive DG backup and insurance are critical." },
      { category: "Financial", title: "Low Occupancy in First Season", description: "New cold stores face market development risk in attracting farmers and traders for the first season. Occupancy below 50% in Year 1 can stress debt service." },
      { category: "Environmental", title: "NH3 Leakage Risk", description: "Ammonia refrigerant leakage is toxic and requires mandatory emergency response planning and regular maintenance." },
    ],
    vsAdvisoryProcess: [
      { step: 1, title: "NHB & PMKSY Scheme Advisory", description: "Assess eligibility for NHB and PMKSY cold chain subsidies and prepare scheme-compliant DPR." },
      { step: 2, title: "Technical Configuration", description: "Advise on temperature zones, refrigerant selection (NH3 vs HFC), and DG backup sizing." },
      { step: 3, title: "WDRA Registration & Collateral Management Advisory", description: "Guide WDRA registration to enable NWR-based pledge financing." },
      { step: 4, title: "Lender Coordination", description: "Submit scheme-linked DPR to NHB-empaneled banks and manage appraisal." },
    ],
    faqs: [
      {
        question: "Can I access both the NHB cold storage scheme AND the PMKSY cold chain scheme for the same project?",
        answer: "Generally, beneficiaries cannot access two central government capital subsidies for the same project cost components — double-dipping of subsidies is not permitted. The Agriculture Infrastructure Fund (AIF) interest subvention may potentially be layered with certain capital subsidy schemes, but the specific combinability must be verified with the respective nodal agencies (NHB, MoFPI, NABARD) and the lending bank at the time of application. Scheme terms and combinability norms are subject to change.",
      },
    ],
    relatedServiceSlugs: ["dpr", "government-scheme-assistance", "subsidy-advisory", "term-loan-advisory"],
    seo: {
      metaTitle: "Cold Storage Project Finance & NHB Scheme Advisory | VS Advisory",
      metaDescription: "NHB scheme advisory, AIF interest subvention, DPR, and project finance for cold storage and cold chain infrastructure in India.",
      keywords: ["cold storage finance India", "NHB cold storage scheme", "AIF cold chain advisory", "cold storage bank loan DPR", "WDRA cold storage registration"],
    },
  },

  // =========================================================================
  // 16. TEXTILE UNITS
  // =========================================================================
  {
    id: "textile-units",
    slug: "textile-units",
    title: "Textile Units, Garment & Apparel Manufacturing",
    shortTitle: "Textile Units",
    sector: "Manufacturing",
    sectorId: "manufacturing",
    badge: "TUFS / State Textile Policy",
    iconName: "Factory",
    lastReviewed: "2025-03-01",
    reviewedBy: "Senior Financial Analyst, VS Advisory",
    sourceReferences: [
      { title: "Ministry of Textiles — TUFS (Technology Upgradation Fund Scheme)", type: "Government Notification", url: "https://texmin.nic.in" },
      { title: "RBI PSL for Textile MSME", type: "RBI" },
    ],
    hero: {
      headline: "Project Finance & Advisory for Textile & Garment Manufacturing Units",
      subheadline: "DPR, TUFS scheme advisory, and term loan structuring for spinning, weaving, knitting, dyeing, processing, and garment export units.",
      keyParameters: [
        { label: "Sector", value: "Spinning, Weaving, Knitting, Processing, Garment" },
        { label: "Key Incentive", value: "TUFS (Technology Upgradation Fund Scheme)" },
        { label: "Export Linkage", value: "High — APEDA / Textile Export Council" },
      ],
    },
    overview: {
      title: "Textile Industry Finance — TUFS & Banking Framework",
      paragraphs: [
        "India's textile industry is the second-largest employer after agriculture and a major foreign exchange earner. The sector spans the entire value chain from ginning and spinning through weaving, processing, and garment manufacturing. The Technology Upgradation Fund Scheme (TUFS) provides interest rate reimbursement for technology modernization investments in the textile sector.",
        "Textile units qualify for MSME lending under the Priority Sector framework where they fall within MSME investment criteria. Large textile mills (medium to large scale) access project finance from commercial banks and state financial corporations.",
        "The textile industry has sector-specific challenges: capital-intensive machinery (imported looms, spinning frames, processing machinery can be expensive), water-intensive processing (ZLD norms for dyeing/processing units), and exposure to global garment trade volatility.",
      ],
    },
    businessModels: [
      {
        title: "Spinning Mill",
        description: "Converting raw cotton or synthetic fiber (polyester staple fiber) into yarn for weaving or knitting industry.",
        revenueDrivers: ["Yarn realization per kg × production volume", "By-product: cotton seed, short fiber", "Yarn count premium (finer count = higher price)"],
      },
      {
        title: "Weaving / Knitting Unit",
        description: "Converting yarn into grey fabric (woven or knitted) for processing or direct sale.",
        revenueDrivers: ["Fabric realization per meter × production volume", "Fabric quality differentiation (grey vs processed)", "Export fabric premium"],
      },
      {
        title: "Garment / Apparel Export Unit",
        description: "Cut-make-trim (CMT) or full-process garment manufacturing for domestic brands or export.",
        revenueDrivers: ["FOB export price per garment × export volume", "Domestic brand supply margin", "Labour efficiency and style change capacity"],
      },
    ],
    projectComponents: [
      {
        head: "Textile Factory Infrastructure",
        description: "Factory shed, humidification, utilities.",
        typicalElements: ["Factory shed (high-bay, RCC / PEB)", "Humidification system (for spinning mills — essential for yarn quality)", "Effluent Treatment Plant / ZLD (for dyeing/processing units)", "Power house, sub-station", "Bale godown, grey fabric storage"],
      },
      {
        head: "Textile Machinery",
        description: "Spinning, weaving, knitting, processing, or garment equipment.",
        typicalElements: ["Ring frames / rotor frames (spinning)", "Rapier looms / air-jet looms / water-jet looms (weaving)", "Circular knitting machines (knitting)", "Jigger, winch, jet dyeing machines (processing)", "Cutting tables, sewing machines, finishing equipment (garments)"],
      },
    ],
    costHeads: [
      {
        category: "Textile Unit Operating Costs",
        components: [
          "Raw material: cotton / fiber / yarn (dominant cost — 55–70%)",
          "Power (textile processing is power and water-intensive)",
          "Labour (spinning: moderately labour-intensive; garments: highly labour-intensive)",
          "Chemicals and dyes (processing units)",
          "Water and ETP/ZLD operating cost",
          "Packing and freight",
        ],
        note: "Raw material (cotton or fiber) prices are globally volatile and directly impact spinning mill margins.",
      },
    ],
    infrastructure: [
      { type: "Power", details: "Spinning mills: 1–5 MW per 10,000 spindles. Weaving: variable. Garments: relatively low power (but need 3-phase for machinery)." },
      { type: "Water & ETP/ZLD", details: "Dyeing and processing units are water-intensive. Zero Liquid Discharge (ZLD) norm mandatory for many states. ZLD plant is a significant additional capex." },
    ],
    financingStructure: {
      title: "Indicative Financing Structure — Textile Units",
      disclaimer: FINANCING_DISCLAIMER,
      items: [
        { aspect: "TUFS Interest Reimbursement", indicativeConvention: "TUFS provides interest rate reimbursement on loans for technology modernization — verify current TUFS operational status and quantum with Ministry of Textiles", note: "TUFS operational status and eligible machinery list change frequently. Always verify with Ministry of Textiles." },
        { aspect: "Debt:Equity", indicativeConvention: "65:35 for established textile MSME; 60:40 for first-time units", note: "State textile policy incentives can supplement promoter equity effectively." },
      ],
    },
    commonDocumentation: [
      {
        category: "Textile Industry Specific",
        items: [
          "Textile Manufacturers Association membership",
          "PCPIR (Petroleum, Chemical, Petrochemical Investment Region) location certificate if applicable",
          "Export Import Code (IEC) from DGFT — for export units",
          "APEDA registration — for food/agri textile exports",
          "Textile Export Council membership (AEPC, TEXPROCIL, etc.) — for export units",
        ],
      },
    ],
    dprConsiderations: [
      { chapter: "Installed Spindle / Machine Capacity", specificNote: "Textile DPRs must specify exact capacity in spindles (spinning), looms (weaving), or machines (garments), planned utilization hours/day and days/year, and production output per unit of capacity." },
      { chapter: "ZLD Compliance", specificNote: "DPRs for dyeing and processing units must include ZLD plant capex and operating cost. Banks and PCB require evidence of ZLD compliance strategy before sanctioning." },
    ],
    cmaConsiderations: [
      { aspect: "Cotton / Fiber Price Sensitivity", industryNote: "Raw cotton prices are subject to seasonal variation and global commodity cycle. CMA sensitivity analysis must show DSCR impact for ±10% cotton price variation." },
    ],
    financialMetrics: [
      { metric: "Spindle Productivity (Ring Spinning)", indicativeRange: "7,000–9,500 rpm average spindle speed for modern ring frames", basis: "ATIRA / CIRCOT textile productivity benchmarks", source: "CIRCOT (Central Institute for Research on Cotton Technology)", asOf: "2023-12", disclaimer: METRIC_DISCLAIMER },
    ],
    registrationsLicenses: [
      { name: "Factory License", authority: "State Factories Inspectorate", mandatory: true },
      { name: "SPCB CTE & CTO (ZLD for processing)", authority: "State Pollution Control Board", mandatory: true },
      { name: "IEC (Import Export Code)", authority: "DGFT", mandatory: false, note: "Required for export-oriented units." },
      { name: "TUFS Registration", authority: "Office of Textile Commissioner, Ministry of Textiles", mandatory: false, note: "Required to access TUFS interest reimbursement." },
    ],
    governmentSchemes: [
      {
        schemeName: "TUFS — Technology Upgradation Fund Scheme",
        schemeType: "Interest Subvention",
        administeredBy: "Ministry of Textiles via lending banks",
        applicability: "Textile units modernizing with eligible machinery under TUFS. Eligible machinery list, interest reimbursement terms, and scheme availability must be verified with Ministry of Textiles.",
        sourceUrl: "https://texmin.nic.in",
        lastVerified: "2025-03-01",
        reviewedBy: "Senior Financial Analyst, VS Advisory",
        disclaimer: SCHEME_DISCLAIMER,
      },
      {
        schemeName: "CGTMSE — for Textile MSMEs",
        schemeType: "Credit Guarantee",
        administeredBy: "CGTMSE",
        applicability: "Micro and Small textile enterprises with valid Udyam registration.",
        sourceUrl: "https://cgtmse.in",
        lastVerified: "2025-03-01",
        reviewedBy: "Senior Financial Analyst, VS Advisory",
        disclaimer: SCHEME_DISCLAIMER,
      },
    ],
    potentialRisks: [
      { category: "Market", title: "Global Textile Trade Volatility", description: "Export-oriented textile units face global trade policy changes, anti-dumping duties, and buyer country economic cycles." },
      { category: "Regulatory", title: "ZLD Compliance Cost", description: "Dyeing and processing units face increasing ZLD enforcement. Non-compliance leads to closure. ZLD plant capex and operating cost can be significant." },
      { category: "Financial", title: "Cotton Price Volatility", description: "Raw cotton is a globally traded commodity. Price spikes compress spinning mill margins significantly." },
    ],
    vsAdvisoryProcess: [
      { step: 1, title: "Technology & Machinery Selection", description: "Advise on modern vs second-hand machinery cost-benefit and TUFS eligibility." },
      { step: 2, title: "ZLD & Environmental Compliance Plan", description: "Develop ETP/ZLD design and compliance roadmap for PCB clearances." },
      { step: 3, title: "DPR with TUFS Benefit Modeling", description: "Prepare DPR incorporating TUFS interest reimbursement cash flow impact." },
      { step: 4, title: "Lender & State Textile Policy Navigation", description: "Identify state textile park / scheme benefits and match to appropriate lender." },
    ],
    faqs: [
      {
        question: "What is TUFS and is it still operational?",
        answer: "The Technology Upgradation Fund Scheme (TUFS) provides interest rate reimbursement for textile units investing in technology modernization (eligible new machinery). The scheme has had multiple iterations since 1999. Promoters must verify the current operational status, eligible machinery list, and reimbursement norms directly with the Office of the Textile Commissioner, Ministry of Textiles, and their lending bank, as TUFS terms change frequently.",
      },
    ],
    relatedServiceSlugs: ["dpr", "cma", "government-scheme-assistance", "term-loan-advisory"],
    seo: {
      metaTitle: "Textile Unit Finance & TUFS Advisory | VS Advisory",
      metaDescription: "DPR, TUFS scheme advisory, and project finance for spinning mills, weaving units, and garment manufacturers in India.",
      keywords: ["textile unit project finance", "TUFS scheme advisor", "spinning mill DPR bank loan", "garment factory loan India", "textile manufacturing advisory"],
    },
  },

  // =========================================================================
  // 17. AUTO DEALERSHIPS
  // =========================================================================
  {
    id: "auto-dealerships",
    slug: "auto-dealerships",
    title: "Automobile Dealerships & Service Centers",
    shortTitle: "Auto Dealerships",
    sector: "Real Estate & Services",
    sectorId: "real-estate-services",
    badge: "Automotive Retail",
    iconName: "Car",
    lastReviewed: "2025-03-01",
    reviewedBy: "Senior Financial Analyst, VS Advisory",
    sourceReferences: [
      { title: "FADA (Federation of Automobile Dealers Association) Industry Guidelines", type: "Industry Report" },
      { title: "RBI Guidelines on Vehicle Financing", type: "RBI" },
    ],
    hero: {
      headline: "Project Finance & Advisory for Automobile Dealerships",
      subheadline: "Working capital structuring, showroom/workshop DPR, and franchise advisory for two-wheeler, four-wheeler, and commercial vehicle dealerships.",
      keyParameters: [
        { label: "OEM Partners", value: "2W, 4W, CV, Tractor, EV OEMs" },
        { label: "Revenue Streams", value: "Vehicle Sales, Service, Parts, Finance & Insurance" },
        { label: "Key Finance", value: "Inventory Funding (Floor Plan Finance)" },
      ],
    },
    overview: {
      title: "Auto Dealership Finance — Structure & Challenges",
      paragraphs: [
        "Automobile dealerships in India operate under franchise agreements with Original Equipment Manufacturers (OEMs) — Maruti, Hyundai, Tata, Bajaj, Hero, etc. The dealership business model generates multiple revenue streams: vehicle sales (typically thin margins), workshop service revenue, genuine parts sales, and finance & insurance (F&I) penetration income.",
        "From a banking perspective, auto dealerships require two distinct types of finance: (1) Infrastructure/showroom term loan for the dealership facility (land, showroom building, workshop), and (2) Floor Plan Finance (inventory funding) for vehicle stock — a specialized short-term revolving credit product offered by banks and captive finance companies (Maruti Finance, Tata Capital, etc.).",
        "OEM dealership agreements are not permanent — they are renewable, and OEM satisfaction metrics (customer satisfaction scores, sales targets) can lead to dealership termination. Banks factor this into the credit risk assessment.",
      ],
    },
    businessModels: [
      {
        title: "Authorized Passenger Car Dealership",
        description: "3S (Sales, Service, Spares) dealership for a passenger car OEM brand.",
        revenueDrivers: ["New vehicle sales margin (1–3% on ex-showroom price)", "Workshop service revenue (high-margin — 45–55% gross margin)", "Genuine spare parts sales", "Finance & insurance commission income"],
      },
      {
        title: "Two-Wheeler Dealership",
        description: "Franchise dealership for a 2W OEM covering motorcycle, scooter, and EV 2W variants.",
        revenueDrivers: ["2W sales volume × dealer margin per unit", "Service workshop revenue (moderate margin)", "Accessories and genuine parts sales"],
      },
      {
        title: "Commercial Vehicle Dealership",
        description: "LCV/MCV/HCV truck and bus dealership with dedicated service bay for commercial vehicles.",
        revenueDrivers: ["CV sales margin (slightly higher % than passenger cars)", "Annual maintenance contracts (AMC) for fleet operators", "Parts and accessories for commercial vehicle fleets"],
      },
    ],
    projectComponents: [
      {
        head: "Showroom & Workshop Facility",
        description: "Branded showroom, vehicle display area, and workshop service bays.",
        typicalElements: ["Brand-compliant showroom (facade, interiors as per OEM CI norms)", "Vehicle display floor area", "Customer reception and lounge", "Workshop service bays: mechanical, electrical, body & paint", "Parts warehouse and counter", "Parking area"],
      },
    ],
    costHeads: [
      {
        category: "Dealership Operating Costs",
        components: [
          "Staff salaries: sales team, workshop technicians, admin",
          "Rent (if leased premises) — significant in prime urban locations",
          "Power for showroom lighting, workshop equipment",
          "Floor plan finance interest (inventory funding cost)",
          "Marketing and OEM co-op advertising obligations",
          "Vehicle insurance and transit costs",
        ],
        note: "The cost of floor plan finance (inventory funding) is a significant P&L item for large dealerships carrying heavy vehicle stock.",
      },
    ],
    infrastructure: [
      { type: "Land & Location", details: "OEMs specify minimum showroom area, workshop area, and location requirements (main road frontage, competitor proximity norms)." },
      { type: "Workshop Equipment", details: "Vehicle lift, wheel alignment, wheel balancing, battery tester, diagnostic scanners (OEM-specific), paint booth, dent repair equipment." },
    ],
    financingStructure: {
      title: "Indicative Financing Structure — Auto Dealerships",
      disclaimer: FINANCING_DISCLAIMER,
      items: [
        { aspect: "Showroom / Workshop Infrastructure Loan", indicativeConvention: "Term loan for facility construction — 65:35 Debt:Equity", note: "Property mortgage is the primary security. OEM dealership letter provides additional comfort to lenders." },
        { aspect: "Floor Plan Finance (Inventory Funding)", indicativeConvention: "Short-term revolving credit — vehicle stock (invoice value minus margin) against hypothecation of vehicle stock", note: "Floor plan is a specialized credit product offered by banks and OEM captive finance companies. Vehicles are hypothecated to the lender." },
        { aspect: "Working Capital CC", indicativeConvention: "For parts, accessories, and general working capital under Tandon norms", note: "Parts inventory and trade debtors drive CC limit sizing." },
      ],
    },
    commonDocumentation: [
      {
        category: "OEM & Dealer-Specific",
        items: [
          "OEM Dealership Appointment Letter / Agreement",
          "OEM letter of intent / authorization for the proposed location",
          "OEM-approved building plan (for brand-compliant showroom)",
          "FADA membership",
          "GST Registration (mandatory — vehicles are high-value GST items)",
        ],
      },
    ],
    dprConsiderations: [
      { chapter: "Revenue Projections", specificNote: "Dealership DPRs must project: number of vehicles sold per month (units) × OEM-supplied dealer margin per unit, workshop invoicing per vehicle (based on service bay utilization and average workshop RO value), and F&I penetration income. Projections must be benchmarked against OEM-provided territory potential assessment." },
    ],
    cmaConsiderations: [
      { aspect: "Floor Plan & Inventory Finance", industryNote: "Floor plan finance appears on the dealership's balance sheet as short-term borrowing against vehicle inventory. CMA Form III and Form IV must accurately reflect the nature and quantum of floor plan credit and not confuse it with working capital CC." },
    ],
    financialMetrics: [
      { metric: "Workshop Gross Profit Margin", indicativeRange: "40–55% of workshop revenue (labor + parts)", basis: "FADA industry benchmarks for 3S dealerships", source: "FADA Annual Report 2023–24", asOf: "2024-01", disclaimer: METRIC_DISCLAIMER },
    ],
    registrationsLicenses: [
      { name: "OEM Dealership Agreement", authority: "OEM (private commercial agreement)", mandatory: true, note: "Without a valid OEM agreement, no auto dealership can operate." },
      { name: "Trade License from Local Body", authority: "Municipal Corporation / Town Panchayat", mandatory: true },
      { name: "GST Registration", authority: "GSTN", mandatory: true },
      { name: "Environmental Clearance for Workshop", authority: "SPCB (for hazardous waste — used oil, solvents)", mandatory: true, note: "Vehicle workshops generate hazardous waste (used oil, waste batteries, solvents) that require SPCB authorization." },
    ],
    governmentSchemes: [],
    potentialRisks: [
      { category: "Market", title: "OEM Sales Target Risk", description: "Failure to meet OEM monthly/annual sales targets can lead to reduced margin support, reduction in stock allocation, or dealership termination." },
      { category: "Financial", title: "Floor Plan Interest During Stock Build-up", description: "High floor plan interest costs during new model launch periods (high unsold inventory) can compress profitability." },
      { category: "Operational", title: "EV Transition Risk", description: "Shift to electric vehicles may require significant showroom and workshop adaptation. ICE-specialized workshops may face declining service revenue as EV adoption grows." },
    ],
    vsAdvisoryProcess: [
      { step: 1, title: "OEM Dealership Feasibility", description: "Evaluate OEM territory potential, competition, and dealership investment payback." },
      { step: 2, title: "Infrastructure DPR & Floor Plan Advisory", description: "Prepare dealership DPR and advise on optimal floor plan finance partner (OEM captive vs bank)." },
      { step: 3, title: "Working Capital & Parts Finance Structuring", description: "Structure CC for parts and accessories working capital." },
    ],
    faqs: [
      {
        question: "What is floor plan finance and how is it different from a working capital loan?",
        answer: "Floor plan finance (also called dealer inventory funding) is a specific type of short-term revolving credit where a bank or OEM captive finance company pays the OEM on behalf of the dealer for each vehicle dispatched from the factory. The vehicle is hypothecated to the lender, and the dealer repays when the vehicle is sold to an end customer. It is fundamentally different from a general working capital Cash Credit (CC) — it is tied to specific vehicle assets, automatically drawn when stock is received, and repaid upon sale.",
      },
    ],
    relatedServiceSlugs: ["dpr", "working-capital-advisory", "business-planning", "cma"],
    seo: {
      metaTitle: "Auto Dealership Finance & Advisory | VS Advisory",
      metaDescription: "Floor plan finance advisory, showroom DPR, and working capital structuring for automobile dealerships and service centers in India.",
      keywords: ["auto dealership finance India", "floor plan finance dealership", "automobile dealership DPR", "showroom bank loan India", "car dealership finance advisory"],
    },
  },

  // =========================================================================
  // 18. INDOOR PLAY ZONES
  // =========================================================================
  {
    id: "indoor-play-zones",
    slug: "indoor-play-zones",
    title: "Indoor Play Zones & Family Entertainment Centers",
    shortTitle: "Indoor Play Zones",
    sector: "Real Estate & Services",
    sectorId: "real-estate-services",
    badge: "Recreation & FEC",
    iconName: "Gamepad2",
    lastReviewed: "2025-03-01",
    reviewedBy: "Senior Financial Analyst, VS Advisory",
    sourceReferences: [
      { title: "IAAPI (Indian Association of Amusement Parks & Industries) Guidelines", type: "Industry Report" },
      { title: "RBI MSME Guidelines — Retail Service Entities", type: "RBI" },
    ],
    hero: {
      headline: "Project Finance & Advisory for Indoor Play Zones & FECs",
      subheadline: "Business planning, DPR, and working capital advisory for indoor play zones, soft play centers, go-kart tracks, VR gaming zones, and family entertainment centers.",
      keyParameters: [
        { label: "Facility Types", value: "Soft Play, Go-Kart, Trampoline, VR Zone, FEC" },
        { label: "Revenue Model", value: "Entry fee, Ride tokens, F&B, Party packages" },
        { label: "Key Finance Challenge", value: "High initial capex, footfall-dependent revenue" },
      ],
    },
    overview: {
      title: "Indoor Entertainment Finance — Business Context",
      paragraphs: [
        "India's organized indoor entertainment sector is rapidly growing in Tier-1 and Tier-2 cities, driven by rising urban middle-class disposable incomes, nuclear family structures, and increasing awareness of structured children's recreational activities. Indoor play zones, family entertainment centers (FECs), and recreational parks offer an alternative to outdoor seasonal amusement.",
        "From a banking perspective, indoor play zones are treated as service sector businesses — not infrastructure projects. Banks are generally cautious: the primary assets (soft play equipment, go-karts, VR headsets) depreciate rapidly and have limited resale value as collateral. Revenue is footfall-dependent and seasonal (peak: school holidays, weekends).",
        "The strongest financial cases for indoor entertainment finance are those that combine a captive catchment location (mall, commercial complex) with diverse revenue streams (entry fee + F&B + birthday party packages + corporate events), proven brand partnerships, and MSME CGTMSE support.",
      ],
    },
    businessModels: [
      {
        title: "Kids Soft Play Center",
        description: "Indoor play area with foam structures, slides, ball pools, and activity zones for children under 12.",
        revenueDrivers: ["Entry fee per child / per session", "Birthday party packages (premium revenue stream)", "F&B revenue (cafe, snacks)", "Annual / monthly membership packages"],
      },
      {
        title: "Go-Kart / Motorsport Center",
        description: "Indoor or outdoor go-kart track with electric or petrol karts, timed lap sessions.",
        revenueDrivers: ["Per-race session charge", "Corporate events and group bookings", "Merchandise and simulator revenue"],
      },
      {
        title: "Multi-Attraction Family Entertainment Center",
        description: "Full-service FEC combining multiple attractions: soft play, go-kart, VR, laser tag, arcade games.",
        revenueDrivers: ["Combo ticket + à la carte token sales", "Event and party package revenue", "F&B and branded merchandise", "Franchise / license fee (if brand-operated FEC)"],
      },
    ],
    projectComponents: [
      {
        head: "Entertainment Equipment & Attractions",
        description: "Core play equipment, ride systems, and technology.",
        typicalElements: ["Soft play structure (custom fabricated / imported)", "Go-kart vehicles and track system", "VR headsets, gaming stations", "Laser tag system", "Arcade / redemption game machines", "Trampoline park (imported or custom)", "Climbing wall"],
      },
      {
        head: "Venue Infrastructure",
        description: "Interior fit-out, F&B counter, safety systems.",
        typicalElements: ["Interior design and theming", "F&B counter / cafe setup", "Safety padding and flooring (EVA / rubber)", "Air conditioning (critical for indoor zone comfort)", "Security CCTV", "POS and ticketing system"],
      },
    ],
    costHeads: [
      {
        category: "Indoor Play Zone Operating Costs",
        components: [
          "Rent (typically 8–15% of revenue for mall-located FECs)",
          "Staff: play area supervisors, counter staff, safety monitors",
          "Power: HVAC, lighting, equipment",
          "Maintenance and equipment replacement",
          "F&B raw material (for cafe)",
          "Marketing and social media advertising",
          "Liability insurance (critical for child-focused play areas)",
        ],
        note: "Rent is the dominant fixed cost for mall-located FECs. Equipment maintenance cost rises significantly as equipment ages.",
      },
    ],
    infrastructure: [
      { type: "Space", details: "Minimum 3,000 sq ft for a micro soft play center; 10,000–30,000 sq ft for a full FEC." },
      { type: "Ceiling Height", details: "Minimum 10–12 feet for soft play; 15–20 feet for trampoline parks and large go-kart tracks." },
      { type: "Power", details: "3-phase commercial connection for HVAC and gaming equipment. Load: 30–100 KW depending on attraction mix." },
      { type: "Safety Infrastructure", details: "Fire suppression, emergency lighting, clear evacuation routes. Liability insurance for child-visitor injury is essential." },
    ],
    financingStructure: {
      title: "Indicative Financing Structure — Indoor Play Zones",
      disclaimer: FINANCING_DISCLAIMER,
      items: [
        { aspect: "Bank Appetite", indicativeConvention: "Low-medium. Banks typically view this as a high-risk retail service without strong tangible collateral.", note: "CGTMSE-backed microfinance or equipment finance against specific assets are more feasible than unsecured project loans." },
        { aspect: "CGTMSE — Micro Enterprise", indicativeConvention: "Small play zones below ₹5 Cr may qualify for CGTMSE collateral-free financing", note: "Subject to Udyam eligibility and individual bank underwriting." },
        { aspect: "Promoter Equity", indicativeConvention: "Higher equity requirement (40–50%) given collateral limitations", note: "Strong business plan, location (mall lease agreement), and F&B revenue diversification improve bank comfort." },
      ],
    },
    commonDocumentation: [
      {
        category: "Regulatory & Licensing",
        items: [
          "Municipal trade license / entertainment license",
          "Fire NOC from State Fire Department",
          "FSSAI license for F&B operations",
          "Mall / premises landlord NOC and lease agreement (for mall-located FECs)",
          "Equipment safety certificate from IAAPI-empaneled inspector or manufacturer",
          "Public liability / accident insurance policy",
        ],
      },
    ],
    dprConsiderations: [
      { chapter: "Footfall Projections", specificNote: "Indoor play zone DPRs must model realistic daily visitor counts, peak vs off-peak (weekdays vs weekends vs school holidays) separately, and conversion rates from mall / commercial zone footfall. Industry survey data from similar zones in comparable cities is important evidence." },
      { chapter: "Revenue per Visitor", specificNote: "Model average revenue per visitor by channel: entry fee, F&B spend, token purchase, and party booking. Do not use a single blended average — model each stream separately." },
    ],
    cmaConsiderations: [
      { aspect: "Weekend/Holiday Revenue Concentration", industryNote: "Indoor play zones earn 60–70% of weekly revenue on Friday-Saturday-Sunday. Monthly revenue projections must reflect this weekly pattern and school holiday vs school-day seasonal variation." },
    ],
    financialMetrics: [
      { metric: "Revenue per Sq Ft (Soft Play Center — Tier-2 City)", indicativeRange: "₹250–₹600 per sq ft per month (varies widely by location and attraction mix)", basis: "Industry operator benchmarks and IAAPI data", source: "IAAPI India (indicative only)", asOf: "2023-12", disclaimer: METRIC_DISCLAIMER },
    ],
    registrationsLicenses: [
      { name: "Municipal Trade / Entertainment License", authority: "Municipal Corporation", mandatory: true },
      { name: "Fire NOC", authority: "State Fire Department", mandatory: true },
      { name: "FSSAI License", authority: "FSSAI", mandatory: true, note: "If food is served or prepared on premises." },
      { name: "IAAPI Equipment Safety Certification", authority: "Indian Association of Amusement Parks & Industries", mandatory: false, note: "Strongly recommended for liability and insurance purposes." },
      { name: "Public Liability Insurance", authority: "General Insurance Company", mandatory: false, note: "Essential risk coverage for child injury liability. Often a bank loan condition." },
    ],
    governmentSchemes: [
      {
        schemeName: "CGTMSE — Micro & Small Enterprises",
        schemeType: "Credit Guarantee",
        administeredBy: "CGTMSE",
        applicability: "Indoor play zones / FECs qualifying as Micro or Small enterprises under MSMED Act with valid Udyam registration.",
        sourceUrl: "https://cgtmse.in",
        lastVerified: "2025-03-01",
        reviewedBy: "Senior Financial Analyst, VS Advisory",
        disclaimer: SCHEME_DISCLAIMER,
      },
    ],
    potentialRisks: [
      { category: "Market", title: "Footfall & Seasonality Risk", description: "Revenue is highly dependent on footfall, which varies significantly by season (school holidays vs school year), weather, and competing entertainment options." },
      { category: "Operational", title: "Equipment Maintenance & Safety", description: "Play equipment requires regular safety inspection and maintenance. A single injury incident can trigger temporary or permanent closure and significant liability." },
      { category: "Financial", title: "Lease Renewal Risk", description: "Mall / commercial complex lease renewal at significantly higher rent can make the business unviable." },
    ],
    vsAdvisoryProcess: [
      { step: 1, title: "Location & Concept Feasibility", description: "Evaluate catchment demography, competition, and footfall potential of target location." },
      { step: 2, title: "Revenue Model & Unit Economics", description: "Build visitor volume model, revenue per visitor analysis, and EBITDA projections." },
      { step: 3, title: "Finance Structuring & CGTMSE Advisory", description: "Identify CGTMSE eligibility and structure equipment + working capital finance." },
    ],
    faqs: [
      {
        question: "What are the most important factors lenders consider for indoor play zone financing?",
        answer: "Key factors include: (1) Location — a confirmed long-term lease in a high-footfall mall or commercial complex is the strongest comfort; (2) Promoter experience in entertainment/retail management; (3) Revenue diversification — F&B, party packages, and memberships alongside entry fees; (4) Public liability insurance; (5) Realistic footfall and revenue projections backed by comparable zone data. Pure speculation-based projections are the most common reason for loan rejection.",
      },
    ],
    relatedServiceSlugs: ["business-planning", "startup-advisory", "working-capital-advisory", "project-feasibility"],
    seo: {
      metaTitle: "Indoor Play Zone Finance & Advisory | VS Advisory",
      metaDescription: "Business planning, DPR, and finance advisory for indoor play zones, family entertainment centers, and recreational businesses in India.",
      keywords: ["indoor play zone finance", "FEC business plan India", "go kart track loan", "indoor entertainment center DPR", "family entertainment finance India"],
    },
  },
];

// ---------------------------------------------------------------------------
// Helper Functions
// ---------------------------------------------------------------------------

export function getAllIndustries(): IndustryItem[] {
  return INDUSTRIES;
}

export function getIndustryBySlug(slug: string): IndustryItem | undefined {
  return INDUSTRIES.find((i) => i.slug === slug.toLowerCase().trim());
}

export function getIndustriesBySector(sectorId: string): IndustryItem[] {
  return INDUSTRIES.filter((i) => i.sectorId === sectorId);
}

export function getAllSectors(): IndustrySector[] {
  return INDUSTRY_SECTORS;
}
