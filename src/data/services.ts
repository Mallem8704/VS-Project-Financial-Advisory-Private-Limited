export interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
  duration?: string;
}

export interface DocumentRequirement {
  category: string;
  items: string[];
}

export interface DeliverableItem {
  title: string;
  format: string;
  description: string;
}

export interface WorkflowStage {
  stage: string;
  action: string;
  outcome: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TargetProfile {
  title: string;
  criteria: string;
}

export interface FeatureHighlight {
  title: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  aliases?: string[];
  title: string;
  shortTitle: string;
  categoryId: string;
  categoryName: string;
  summary: string;
  iconName: string;
  badge: string;
  hero: {
    headline: string;
    subheadline: string;
    stats: Array<{ label: string; value: string; helper?: string }>;
  };
  problem: {
    title: string;
    description: string;
    painPoints: string[];
  };
  targetAudience: {
    title: string;
    description: string;
    profiles: TargetProfile[];
  };
  whatVsProvides: {
    title: string;
    description: string;
    features: FeatureHighlight[];
  };
  process: {
    title: string;
    steps: ProcessStep[];
  };
  documentsRequired: {
    title: string;
    categories: DocumentRequirement[];
  };
  deliverables: {
    title: string;
    items: DeliverableItem[];
  };
  workflow: {
    title: string;
    stages: WorkflowStage[];
  };
  faqs: FAQItem[];
  relatedServiceSlugs: string[];
  disclaimer: string;
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
}

export interface ServiceCategory {
  id: string;
  name: string;
  badge: string;
  description: string;
  iconName: string;
  serviceSlugs: string[];
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "project-business-advisory",
    name: "Project & Business Advisory",
    badge: "Strategic Foundation",
    description:
      "End-to-end commercial feasibility, strategic planning, entity structuring, and operational turnaround for startups and established MSMEs.",
    iconName: "Compass",
    serviceSlugs: [
      "project-feasibility",
      "business-planning",
      "startup-advisory",
      "msme-advisory",
    ],
  },
  {
    id: "project-finance",
    name: "Project Finance",
    badge: "Debt Syndication & Structuring",
    description:
      "Institutional debt advisory for greenfield plants, capex expansions, working capital limits, and machinery procurement.",
    iconName: "Landmark",
    serviceSlugs: [
      "term-loan-advisory",
      "working-capital-advisory",
      "expansion-finance",
      "machinery-finance",
      "project-finance-documentation",
    ],
  },
  {
    id: "project-reports",
    name: "Project Reports",
    badge: "Banker-Grade Documentation",
    description:
      "IBA and SIDBI compliant Detailed Project Reports (DPR), CMA Form I to VI statements, dynamic financial models, and stress testing.",
    iconName: "FileSpreadsheet",
    serviceSlugs: [
      "dpr",
      "cma",
      "financial-projections",
      "financial-modelling",
      "ratio-analysis",
      "sensitivity-analysis",
    ],
  },
  {
    id: "compliance",
    name: "Compliance",
    badge: "Statutory & Banking Readiness",
    description:
      "Comprehensive GST reconciliation, corporate tax optimization, entity registration, and MCA statutory secretarial compliance.",
    iconName: "ShieldCheck",
    serviceSlugs: [
      "gst-support",
      "income-tax-support",
      "business-registrations",
      "corporate-compliance",
    ],
  },
  {
    id: "specialized-advisory",
    name: "Specialized Advisory",
    badge: "Subsidies & Treasury",
    description:
      "Central and state government subsidy schemes (CGTMSE, PMEGP), Virtual CFO leadership, and balance sheet debt restructuring.",
    iconName: "Sparkles",
    serviceSlugs: [
      "government-scheme-assistance",
      "subsidy-advisory",
      "virtual-cfo",
      "financial-restructuring",
    ],
  },
];

export const SERVICES: ServiceItem[] = [
  // =========================================================================
  // CATEGORY 1: PROJECT & BUSINESS ADVISORY
  // =========================================================================
  {
    id: "project-feasibility",
    slug: "project-feasibility",
    title: "Project Feasibility & Techno-Economic Viability (TEV)",
    shortTitle: "Project Feasibility",
    categoryId: "project-business-advisory",
    categoryName: "Project & Business Advisory",
    summary:
      "Rigorous Techno-Economic Viability (TEV) assessments evaluating market demand, technical execution, raw material sustainability, and financial viability before capital commitment.",
    iconName: "Compass",
    badge: "Banker-Grade TEV",
    hero: {
      headline: "Independent Techno-Economic Viability (TEV) Studies",
      subheadline:
        "Evaluate engineering viability, market demand elasticity, supply chain reliability, and cash flow resilience before deploying capital or submitting proposals to commercial lenders.",
      stats: [
        { label: "Technical Appraisal", value: "Civil, Machinery, Utilities" },
        { label: "Market Viability", value: "Cluster & Demand Analysis" },
        { label: "Financial Metrics", value: "IRR, NPV, Payback, DSCR" },
      ],
    },
    problem: {
      title: "Why Capital Projects Face Feasibility Failures",
      description:
        "Entrepreneurs often invest significant capital based on optimism rather than stress-tested data. When unverified projects reach bank credit committees, lenders reject proposals due to unverified raw material availability, lack of utility clearances, or flawed market absorption assumptions.",
      painPoints: [
        "Unverified capital expenditure schedules leading to mid-project cost overruns",
        "Overestimated product selling prices and aggressive capacity ramp-up schedules",
        "Overlooked environmental clearances, grid power allocations, and effluent treatment norms",
        "Absence of independent cluster benchmarking to substantiate sales projections to banks",
      ],
    },
    targetAudience: {
      title: "Who Needs a Techno-Economic Viability Study?",
      description:
        "Designed for industrial promoters, infrastructure developers, and institutional lenders seeking objective risk validation.",
      profiles: [
        {
          title: "Greenfield Manufacturing Promoters",
          criteria: "Setting up new industrial facilities requiring formal bank debt appraisal.",
        },
        {
          title: "Expanding Industrial Units",
          criteria: "Adding new production lines or diversifying into allied industrial sectors.",
        },
        {
          title: "Institutional Lenders & NBFCs",
          criteria: "Requiring independent third-party techno-economic due diligence before sanction.",
        },
      ],
    },
    whatVsProvides: {
      title: "What VS Delivers in a TEV Study",
      description:
        "A multi-disciplinary study combining technical engineering vetting, market demand surveys, and rigorous financial stress testing.",
      features: [
        {
          title: "Engineering & Technical Appraisal",
          description:
            "Vetting of plant layout, civil structural designs, machinery technical specifications, and utility requirements (power, water, effluent).",
        },
        {
          title: "Market Demand & Cluster Benchmarking",
          description:
            "Analysis of historical consumption patterns, competitor capacities, export potential, and geographical freight cost advantages.",
        },
        {
          title: "Supply Chain & Raw Material Audit",
          description:
            "Identification of key feedstock suppliers, price volatility trends, alternative sourcing, and inventory holding requirements.",
        },
        {
          title: "Financial Viability & Sensitivity Modelling",
          description:
            "Computation of Project IRR, Equity IRR, Net Present Value (NPV), and Debt Service Coverage Ratio (DSCR) under varying utilization rates.",
        },
      ],
    },
    process: {
      title: "Our Structured TEV Study Process",
      steps: [
        {
          stepNumber: 1,
          title: "Preliminary Scope & Data Intake",
          description:
            "Collection of project concept notes, promoter profiles, site survey data, and proposed equipment vendor quotes.",
          duration: "Days 1–3",
        },
        {
          stepNumber: 2,
          title: "Technical & Regulatory Assessment",
          description:
            "Engineering review of civil drawings, plant layouts, connected electrical load sanctions, and statutory environmental clearances.",
          duration: "Days 4–7",
        },
        {
          stepNumber: 3,
          title: "Market & Financial Synthesis",
          description:
            "Market demand validation, raw material pricing stress tests, and dynamic financial model creation for 7 to 10 years.",
          duration: "Days 8–11",
        },
        {
          stepNumber: 4,
          title: "Final TEV Dossier & Banker Briefing",
          description:
            "Comprehensive 50+ page TEV report delivery, executive summary presentation, and advisory support during lender technical query sessions.",
          duration: "Days 12–14",
        },
      ],
    },
    documentsRequired: {
      title: "Information & Documents Required",
      categories: [
        {
          category: "Project & Site Details",
          items: [
            "Land title deed / long-term lease agreement and zoning certificate",
            "Site layout plan, contour survey, and civil construction estimates",
            "Electricity connection approval / HT power allocation letter",
            "State Pollution Control Board (Consent to Establish) application/NOC",
          ],
        },
        {
          category: "Technical & Commercial Quotations",
          items: [
            "Proforma invoices and technical datasheets for plant & machinery",
            "Raw material supplier contracts or indicative quotation letters",
            "Target market distribution channel agreements or letters of intent (LOI)",
            "Promoter entity KYC and past 3 years audited financials (if existing entity)",
          ],
        },
      ],
    },
    deliverables: {
      title: "Tangible Study Deliverables",
      items: [
        {
          title: "Comprehensive TEV Report",
          format: "PDF (50–80 pages)",
          description:
            "Institutional-grade report covering technical feasibility, market analysis, financial viability, and SWOT matrix.",
        },
        {
          title: "Interactive Sensitivity Model",
          format: "Excel (.xlsx)",
          description:
            "Full financial model with scenario toggle (capacity utilization, raw material prices, power tariffs, selling price).",
        },
        {
          title: "Lender Appraisal Executive Brief",
          format: "PDF (8–10 pages)",
          description:
            "Concise executive summary specifically formatted for Bank Credit Committee review.",
        },
      ],
    },
    workflow: {
      title: "Expected Engagement Workflow",
      stages: [
        {
          stage: "Stage 1: Kickoff & Checklist",
          action: "Execute bilateral NDA, define study scope, and issue technical document checklist.",
          outcome: "Baseline data repository established.",
        },
        {
          stage: "Stage 2: Technical & Market Analysis",
          action: "Conduct secondary market research, benchmark competitor pricing, and audit civil/machinery quotes.",
          outcome: "Engineering and commercial parameters finalized.",
        },
        {
          stage: "Stage 3: Draft Review & Stress Testing",
          action: "Share draft financial model and key sensitivity results with promoters for alignment.",
          outcome: "Scenario consensus reached.",
        },
        {
          stage: "Stage 4: Final Sign-off & Bank Defense",
          action: "Deliver signed institutional TEV report and provide technical query support for lenders.",
          outcome: "Report ready for credit appraisal submission.",
        },
      ],
    },
    faqs: [
      {
        question: "What is the difference between a TEV study and a DPR?",
        answer:
          "A Detailed Project Report (DPR) is an operational and financial blueprint of your project used by lenders to understand the implementation schedule and costs. A Techno-Economic Viability (TEV) study is an independent, objective evaluation that critically tests whether the project's technical parameters and financial assumptions can withstand operational stress and market competition.",
      },
      {
        question: "Is a TEV study mandatory for bank loans?",
        answer:
          "For large ticket loans (typically above ₹10 Cr to ₹25 Cr depending on the bank's internal credit policy), commercial banks and consortium lenders frequently mandate an independent TEV study prepared by empaneled or reputed technical consultants before sanctioning credit.",
      },
      {
        question: "How long does it take to complete a comprehensive TEV study?",
        answer:
          "A standard industrial TEV study typically requires 2 to 3 weeks, contingent upon the timely availability of machinery proforma invoices, civil estimates, and statutory permissions.",
      },
    ],
    relatedServiceSlugs: [
      "dpr",
      "financial-modelling",
      "term-loan-advisory",
      "sensitivity-analysis",
    ],
    disclaimer:
      "A Techno-Economic Viability (TEV) study represents an independent analytical assessment based on data and assumptions provided by the promoter and prevailing market conditions. It does not constitute a loan sanction, financial underwriting, or guarantee of project commercial success.",
    seo: {
      metaTitle: "Project Feasibility & TEV Study Advisory | VS Advisory",
      metaDescription:
        "Institutional Techno-Economic Viability (TEV) studies and project feasibility reports for MSMEs and industrial promoters seeking commercial bank credit appraisal.",
      keywords: [
        "techno economic viability study",
        "TEV report India",
        "project feasibility study",
        "bank loan feasibility report",
        "industrial capex appraisal",
      ],
    },
  },

  {
    id: "business-planning",
    slug: "business-planning",
    title: "Institutional Business Planning & Growth Strategy",
    shortTitle: "Business Planning",
    categoryId: "project-business-advisory",
    categoryName: "Project & Business Advisory",
    summary:
      "Structured business plans synthesizing market positioning, go-to-market execution, organizational hierarchy, and 5-year financial forecasts for lenders and strategic stakeholders.",
    iconName: "FileText",
    badge: "Strategic Advisory",
    hero: {
      headline: "Banker & Investor-Ready Business Plans",
      subheadline:
        "Transform raw commercial ideas and operational expansion strategies into structured, institutional business plans that articulate value proposition, unit economics, and capital requirements.",
      stats: [
        { label: "Strategic Scope", value: "5-Year Strategic Horizon" },
        { label: "Financial Integration", value: "Integrated P&L, BS & CF" },
        { label: "Execution Roadmap", value: "Milestones, Capex, Opex" },
      ],
    },
    problem: {
      title: "The Pitfall of Superficial Pitch Decks",
      description:
        "Most entrepreneurs attempt to secure formal banking debt or growth capital using high-level pitch decks that lack operational depth. Commercial bankers and institutional committees require detailed unit economics, working capital cycle modeling, and clear risk mitigation strategies.",
      painPoints: [
        "Superficial market sizing numbers without defensible pricing or distribution models",
        "Unrealistic margin expansion assumptions unsupported by cost-of-production breakdowns",
        "Vague capital deployment schedules that leave lenders uncertain about fund utilization",
        "Failure to explain how the business will service debt during market downturns",
      ],
    },
    targetAudience: {
      title: "Who Needs Institutional Business Planning?",
      description:
        "Essential for emerging enterprises transitioning from unstructured operations to formalized corporate governance.",
      profiles: [
        {
          title: "Growth-Stage MSMEs",
          criteria: "Scaling operational capacity and seeking external debt or equity capital.",
        },
        {
          title: "New Venture Promoters",
          criteria: "Structuring an institutional roadmap for angel, seed, or government grant evaluation.",
        },
        {
          title: "Family Businesses Modernizing Operations",
          criteria: "Codifying operational processes, governance, and multi-year succession strategies.",
        },
      ],
    },
    whatVsProvides: {
      title: "Comprehensive Strategic Deliverables",
      description:
        "We build end-to-end business plans that unite commercial reality with financial discipline.",
      features: [
        {
          title: "Market Opportunity & Competitive Moat",
          description:
            "Deep-dive analysis of addressable market (TAM, SAM, SOM), competitor moats, and customer acquisition cost dynamics.",
        },
        {
          title: "Operational & Manufacturing Architecture",
          description:
            "Detailed operational workflows, facility planning, supply chain dependencies, and manpower headcount scaling.",
        },
        {
          title: "Unit Economics & Pricing Strategy",
          description:
            "Granular breakdown of gross contribution margin per product line, variable costs, and fixed overhead absorption.",
        },
        {
          title: "Integrated Financial Projections",
          description:
            "5-year monthly and annual cash flow projections, working capital cycle modeling, and breakeven milestones.",
        },
      ],
    },
    process: {
      title: "Our Business Planning Methodology",
      steps: [
        {
          stepNumber: 1,
          title: "Discovery & Promoter Interview",
          description:
            "In-depth consultation covering business vision, historical milestones, product roadmap, and capital expenditure priorities.",
          duration: "Days 1–2",
        },
        {
          stepNumber: 2,
          title: "Market Research & Competitive Mapping",
          description:
            "Industry benchmarking, pricing comparison, customer segmentation, and supply chain audit.",
          duration: "Days 3–5",
        },
        {
          stepNumber: 3,
          title: "Financial Architecture & Unit Economics",
          description:
            "Building dynamic revenue models, cost schedules, headcount budgets, and debt repayment schedules.",
          duration: "Days 6–9",
        },
        {
          stepNumber: 4,
          title: "Institutional Synthesis & Review",
          description:
            "Final editorial compilation, executive summary crafting, and review with leadership team.",
          duration: "Days 10–12",
        },
      ],
    },
    documentsRequired: {
      title: "Information Required",
      categories: [
        {
          category: "Commercial & Operational",
          items: [
            "Company profile, promoter CVs, and organizational chart",
            "Product/service pricing sheets and product catalog",
            "Historical sales data (by product, customer, and geography)",
            "Key vendor and customer agreements (if existing)",
          ],
        },
        {
          category: "Financial & Projections",
          items: [
            "Past 2–3 years audited balance sheets (for existing entities)",
            "Current year provisional financial statements and bank statements",
            "Projected capital expenditure quotations and timelines",
          ],
        },
      ],
    },
    deliverables: {
      title: "Plan Deliverables",
      items: [
        {
          title: "Full Business Plan Document",
          format: "PDF (35–50 pages)",
          description:
            "Structured document with executive summary, market analysis, operations, and financial plan.",
        },
        {
          title: "Executive Presentation Deck",
          format: "PowerPoint / PDF (15–20 slides)",
          description:
            "High-impact slide deck formatted for stakeholder, board, and lender presentations.",
        },
        {
          title: "Integrated Financial Forecast Model",
          format: "Excel (.xlsx)",
          description:
            "Fully dynamic financial model with assumptions sheet and sensitivity switches.",
        },
      ],
    },
    workflow: {
      title: "Workflow & Governance",
      stages: [
        {
          stage: "Stage 1: Discovery",
          action: "Conduct discovery sessions and gather baseline operational data.",
          outcome: "Project charter and financial assumption sheet signed off.",
        },
        {
          stage: "Stage 2: Model Drafting",
          action: "Construct dynamic 5-year forecast model and validate with promoter.",
          outcome: "Financial viability and unit economics locked.",
        },
        {
          stage: "Stage 3: Narrative Synthesis",
          action: "Author strategic chapters, competitive analysis, and operational plans.",
          outcome: "Full draft business plan generated.",
        },
        {
          stage: "Stage 4: Finalization",
          action: "Deliver final PDF, slide deck, and Excel model with presentation advisory.",
          outcome: "Stakeholder-ready strategic asset.",
        },
      ],
    },
    faqs: [
      {
        question: "How is a business plan different from a Detailed Project Report (DPR)?",
        answer:
          "A business plan focuses broadly on commercial strategy, go-to-market positioning, organizational scaling, and overall enterprise growth. A DPR is specifically tailored to banking and credit appraisal guidelines, focusing on techno-economic viability, project cost breakdown, civil/machinery schedules, and loan security.",
      },
      {
        question: "Can this business plan be submitted to commercial banks?",
        answer:
          "While banks primarily evaluate DPRs and CMA data for debt sanctions, an institutional business plan serves as an excellent foundational document for bank relationship managers, strategic equity partners, and government grant committees.",
      },
    ],
    relatedServiceSlugs: [
      "startup-advisory",
      "msme-advisory",
      "dpr",
      "financial-modelling",
    ],
    disclaimer:
      "Business planning services provide strategic analysis and financial modeling based on promoter-provided inputs and market estimates. They do not guarantee business revenues, profitability, or external funding sanctions.",
    seo: {
      metaTitle: "Business Planning & Strategic Growth Advisory | VS Advisory",
      metaDescription:
        "Professional, institutional-grade business plans with 5-year financial models and operational roadmaps for Indian MSMEs, startups, and growing enterprises.",
      keywords: [
        "business plan India",
        "MSME strategic planning",
        "startup business plan",
        "financial forecast model",
        "corporate growth strategy",
      ],
    },
  },

  {
    id: "startup-advisory",
    slug: "startup-advisory",
    title: "Startup Advisory & Credit Readiness",
    shortTitle: "Startup Advisory",
    categoryId: "project-business-advisory",
    categoryName: "Project & Business Advisory",
    summary:
      "Specialized advisory for early-stage and growth startups navigating DPIIT recognition, tax exemptions (Section 80-IAC), seed debt, venture debt readiness, and structured unit economics.",
    iconName: "Sparkles",
    badge: "Startup India Aligned",
    hero: {
      headline: "Institutional Advisory for High-Growth Startups",
      subheadline:
        "Bridge the gap between equity fundraising and formal banking debt. We help startups secure DPIIT recognition, structure bankable unit economics, and prepare for venture debt and government innovation schemes.",
      stats: [
        { label: "Regulatory Support", value: "DPIIT & 80-IAC Advisory" },
        { label: "Credit Readiness", value: "Venture Debt & CGTMSE" },
        { label: "Financial Rigor", value: "Burn Rate & Runway Modeling" },
      ],
    },
    problem: {
      title: "Why Startups Struggle with Banking Credit",
      description:
        "Indian commercial banks evaluate credit through collateral, historical profits, and tangible cash flows—frameworks that traditional startups lack. Without structured guidance, founders either dilute excessive equity or fail to tap into startup-friendly credit guarantee schemes.",
      painPoints: [
        "Excessive equity dilution for working capital needs that could be financed via collateral-free debt",
        "Lack of DPIIT recognition preventing access to tax exemptions and SIDBI Fund of Funds programs",
        "Unstructured burn rate and runway metrics that confuse commercial bank underwriters",
        "Inability to qualify for CGTMSE or Stand-Up India schemes due to incorrect documentation",
      ],
    },
    targetAudience: {
      title: "Who This Service Is For",
      description:
        "Engineered for technology, manufacturing, and D2C startups seeking financial discipline and debt readiness.",
      profiles: [
        {
          title: "Early-Stage Founders",
          criteria: "Seeking DPIIT recognition, initial seed debt, or government grant navigation.",
        },
        {
          title: "Revenue-Generating Startups",
          criteria: "Looking for venture debt, working capital lines, or collateral-free loans up to ₹5 Cr.",
        },
        {
          title: "D2C & Manufacturing Startups",
          criteria: "Needing machinery capex financing and inventory credit lines without heavy equity dilution.",
        },
      ],
    },
    whatVsProvides: {
      title: "Our Startup Advisory Capabilities",
      description:
        "Combining startup agility with banking-grade compliance and financial engineering.",
      features: [
        {
          title: "DPIIT Recognition & Section 80-IAC Guidance",
          description:
            "End-to-end advisory on DPIIT registration and preparation of documentation for Inter-Ministerial Board (IMB) tax holiday certification.",
        },
        {
          title: "Venture Debt & Non-Dilutive Capital Readiness",
          description:
            "Structuring debt proposals tailored for venture debt funds and specialized startup credit desks at major banks.",
        },
        {
          title: "Unit Economics & Cash Burn Optimization",
          description:
            "Granular modeling of Customer Acquisition Cost (CAC), Lifetime Value (LTV), gross margin per SKU, and cash runway projections.",
        },
        {
          title: "Government Innovation Grants & Credit Schemes",
          description:
            "Advisory on eligibility under Startup India Seed Fund Scheme (SISFS), CGTMSE startup credit windows, and state innovation subsidies.",
        },
      ],
    },
    process: {
      title: "Structured Advisory Methodology",
      steps: [
        {
          stepNumber: 1,
          title: "Diagnostic & Incorporation Audit",
          description:
            "Review of entity structure (Pvt Ltd / LLP), cap table, intellectual property ownership, and DPIIT eligibility.",
          duration: "Days 1–3",
        },
        {
          stepNumber: 2,
          title: "Financial Architecture & Runway Analysis",
          description:
            "Cleaning up management accounts, restructuring chart of accounts, and modeling 24-month runway projections.",
          duration: "Days 4–7",
        },
        {
          stepNumber: 3,
          title: "Scheme & Debt Matching",
          description:
            "Identifying eligible bank schemes (CGTMSE, SIDBI Smile, Startup Credit Lines) and venture debt partners.",
          duration: "Days 8–11",
        },
        {
          stepNumber: 4,
          title: "Dossier Preparation & Underwriting Support",
          description:
            "Drafting institutional pitch book, CMA statements, and DPR for lenders.",
          duration: "Days 12–15",
        },
      ],
    },
    documentsRequired: {
      title: "Required Information",
      categories: [
        {
          category: "Corporate & IP",
          items: [
            "Certificate of Incorporation, MoA & AoA",
            "PAN, GSTIN, and current DPIIT certificate (if already registered)",
            "Trademark/Patent registration certificates (if applicable)",
            "Cap table and shareholding pattern summary",
          ],
        },
        {
          category: "Financials & Metrics",
          items: [
            "Audited or provisional P&L and Balance Sheet",
            "12 months bank statements for all operational accounts",
            "Monthly MIS showcasing CAC, LTV, churn, and revenue growth",
            "Customer contracts, enterprise MSAs, or purchase orders",
          ],
        },
      ],
    },
    deliverables: {
      title: "Tangible Advisory Deliverables",
      items: [
        {
          title: "Startup Credit Readiness Assessment",
          format: "PDF (15–20 pages)",
          description:
            "Comprehensive evaluation of debt capacity, DSCR feasibility, and scheme eligibility.",
        },
        {
          title: "Bankable Financial Forecast Model",
          format: "Excel (.xlsx)",
          description:
            "Runway, burn rate, and working capital model formatted for banker and venture debt review.",
        },
        {
          title: "DPIIT & Scheme Compliance Dossier",
          format: "ZIP Archive",
          description:
            "Completed application filings, resolution drafts, and justification write-ups.",
        },
      ],
    },
    workflow: {
      title: "Engagement Workflow",
      stages: [
        {
          stage: "Stage 1: Assessment",
          action: "Analyze business model, revenue traction, and existing cap table.",
          outcome: "Credit readiness diagnostic report.",
        },
        {
          stage: "Stage 2: Structuring",
          action: "Formulate non-dilutive financing strategy and prepare financial models.",
          outcome: "Financial architecture locked.",
        },
        {
          stage: "Stage 3: Application",
          action: "Prepare documentation for DPIIT, CGTMSE, or venture debt desks.",
          outcome: "Dossier ready for submission.",
        },
      ],
    },
    faqs: [
      {
        question: "Can a pre-revenue startup get a bank loan in India?",
        answer:
          "Traditional bank loans require historical cash flows and profitability. However, early-stage startups can explore government grant schemes (such as SISFS), incubator funding, or collateral-backed greenfield project finance where promoter capital and tangible assets are pledged.",
      },
      {
        question: "What is the maximum collateral-free loan available under CGTMSE for startups?",
        answer:
          "Under the CGTMSE framework, eligible credit facilities up to ₹5 Cr can be covered without third-party guarantee or collateral security, subject to individual bank appraisal and underwriting criteria.",
      },
    ],
    relatedServiceSlugs: [
      "business-planning",
      "government-scheme-assistance",
      "financial-modelling",
      "cma",
    ],
    disclaimer:
      "Startup advisory provides strategic structuring and document preparation. Credit facilities, scheme approvals, and venture debt sanctions are solely at the discretion of respective financial institutions and regulatory bodies.",
    seo: {
      metaTitle: "Startup Advisory & Credit Readiness | VS Advisory",
      metaDescription:
        "Specialized advisory for Indian startups: DPIIT recognition, 80-IAC tax holiday, venture debt preparation, and CGTMSE collateral-free loan readiness.",
      keywords: [
        "startup advisory India",
        "DPIIT recognition consultant",
        "venture debt readiness",
        "startup bank loan India",
        "CGTMSE for startups",
      ],
    },
  },

  {
    id: "msme-advisory",
    slug: "msme-advisory",
    title: "MSME Strategic Advisory & Turnaround",
    shortTitle: "MSME Advisory",
    categoryId: "project-business-advisory",
    categoryName: "Project & Business Advisory",
    summary:
      "Comprehensive advisory for established MSMEs facing working capital bottlenecks, debtor delays, credit rating stagnation, or operational expansion challenges.",
    iconName: "Building2",
    badge: "MSME Growth Desk",
    hero: {
      headline: "Strategic & Financial Turnaround for Indian MSMEs",
      subheadline:
        "Overcome working capital constraints, optimize your debtor-creditor cycle, enhance bank credit ratings, and structure sustainable debt for business expansion.",
      stats: [
        { label: "Working Capital", value: "Debtor & Inventory Cycle Audit" },
        { label: "Credit Health", value: "CIBIL / CCR Dispute Advisory" },
        { label: "Balance Sheet", value: "Net-Worth & Ratio Enhancement" },
      ],
    },
    problem: {
      title: "The MSME Credit Squeeze in India",
      description:
        "MSMEs form the backbone of Indian manufacturing and commerce, yet they constantly battle delayed payments from large corporates, high working capital interest rates, and rigid banking covenants. Without strategic financial intervention, viable enterprises get trapped in liquidity crises.",
      painPoints: [
        "Debtor collection cycles exceeding 90 to 120 days, draining operational cash flows",
        "Sub-optimal bank limit utilization leading to penal interest and lower credit ratings",
        "Disputes on commercial credit bureau reports (CIBIL / Experian) blocking fresh sanctions",
        "Unprepared balance sheets with low current ratios failing bank renewal tests",
      ],
    },
    targetAudience: {
      title: "Who Needs MSME Advisory?",
      description:
        "Designed for micro, small, and medium business owners looking to scale responsibly and optimize banking relationships.",
      profiles: [
        {
          title: "Manufacturing MSMEs",
          criteria: "Operating at 60%+ capacity and seeking capital for machinery addition or raw material stock.",
        },
        {
          title: "Trading & Distribution Entities",
          criteria: "Needing enhanced Cash Credit / Overdraft limits to support growing turnover.",
        },
        {
          title: "Enterprises in SMA-0 / SMA-1 Stress",
          criteria: "Needing proactive financial restructuring to avoid non-performing asset (NPA) classification.",
        },
      ],
    },
    whatVsProvides: {
      title: "What VS Delivers for MSMEs",
      description:
        "We act as an outsourced strategic finance department, identifying bottlenecks and unlocking liquidity.",
      features: [
        {
          title: "Working Capital Cycle Optimization",
          description:
            "Auditing raw material inventory holding periods, WIP conversion, and receivables aging to reduce cash conversion days.",
        },
        {
          title: "Bank Limit Sizing & Renewal Advisory",
          description:
            "Re-computing Maximum Permissible Bank Finance (MPBF) under Tandon & Nayak norms to negotiate higher limits or lower margins.",
        },
        {
          title: "Balance Sheet Strengthening",
          description:
            "Guidance on capital injection, quasi-equity structuring, and debtor cleanup to improve Current Ratio and TOL/TNW.",
        },
        {
          title: "Credit Bureau & Rating Advisory",
          description:
            "Identifying reporting discrepancies in commercial CCR reports and advising on external credit rating improvement strategies.",
        },
      ],
    },
    process: {
      title: "Our MSME Engagement Methodology",
      steps: [
        {
          stepNumber: 1,
          title: "Financial & Operational Diagnostic",
          description:
            "Comprehensive review of past 3 years audited financials, sanction letters, bank statements, and stock statements.",
          duration: "Days 1–4",
        },
        {
          stepNumber: 2,
          title: "Bottleneck Identification",
          description:
            "Pinpointing root causes of liquidity strain: debtor delays, excess inventory, or high interest debt burden.",
          duration: "Days 5–8",
        },
        {
          stepNumber: 3,
          title: "Restructuring & Enhancement Plan",
          description:
            "Drafting a concrete roadmap: working capital limit enhancement proposal, debt tenure elongation, or subsidy claim.",
          duration: "Days 9–12",
        },
        {
          stepNumber: 4,
          title: "Lender Negotiation & Implementation",
          description:
            "Assisting promoter in presenting enhanced CMA data and business projections to current or new banking partners.",
          duration: "Days 13–18",
        },
      ],
    },
    documentsRequired: {
      title: "Documents Required",
      categories: [
        {
          category: "Financials & Banking",
          items: [
            "Audited financial statements for the past 3 fiscal years with Tax Audit reports",
            "Existing bank sanction letters, security schedules, and interest rate letters",
            "Latest 12 months bank statements for all CC/OD and current accounts",
            "Latest stock and book debt statement submitted to current lenders",
          ],
        },
        {
          category: "Operational & Compliance",
          items: [
            "Udyam MSME Registration certificate",
            "GSTR-1 and GSTR-3B filings for the trailing 12 months",
            "Age-wise debtor and creditor aging schedules",
          ],
        },
      ],
    },
    deliverables: {
      title: "Advisory Deliverables",
      items: [
        {
          title: "MSME Diagnostic & Health Report",
          format: "PDF (25–35 pages)",
          description:
            "Detailed analysis of liquidity ratios, cash conversion cycle, and banking health indicators.",
        },
        {
          title: "Bank Limit Enhancement Dossier",
          format: "PDF + Excel",
          description:
            "Justification note with projected CMA Form I–VI statements ready for banking committee review.",
        },
        {
          title: "Turnaround Action Roadmap",
          format: "PDF (10–15 pages)",
          description:
            "Quarterly milestones for debtor recovery, inventory control, and balance sheet deleveraging.",
        },
      ],
    },
    workflow: {
      title: "Engagement Workflow",
      stages: [
        {
          stage: "Stage 1: Health Audit",
          action: "Analyze balance sheets and banking conduct.",
          outcome: "Diagnostic score and gap analysis.",
        },
        {
          stage: "Stage 2: Strategy",
          action: "Formulate debt optimization and working capital plan.",
          outcome: "Action roadmap approved by management.",
        },
        {
          stage: "Stage 3: Bank Engagement",
          action: "Prepare documentation for credit enhancements and renewals.",
          outcome: "Lender-ready proposal package.",
        },
      ],
    },
    faqs: [
      {
        question: "How can VS help if my existing bank is refusing to enhance my CC limit?",
        answer:
          "We analyze whether the refusal is due to non-compliance with MPBF guidelines, poor financial ratios, or the bank's internal sectoral lending caps. We then either restructure your CMA data and financial presentation to address the bank's concerns or assist you in preparing a proposal to take over the credit facility to a lender with greater appetite for your industry.",
      },
      {
        question: "Can you help resolve errors on our company's commercial CIBIL report?",
        answer:
          "Yes. We review your Commercial Credit Report (CCR), identify incorrect NPA flags, un-updated closed accounts, or wrong suit-filed statuses, and guide you through the formal dispute resolution mechanism with the credit bureau and member banks.",
      },
    ],
    relatedServiceSlugs: [
      "cma",
      "working-capital-advisory",
      "financial-restructuring",
      "government-scheme-assistance",
    ],
    disclaimer:
      "MSME advisory services provide financial diagnosis, ratio improvement strategies, and document restructuring. We do not act as money lenders, nor do we guarantee credit limit enhancements or credit score upgrades.",
    seo: {
      metaTitle: "MSME Strategic Advisory & Turnaround | VS Advisory",
      metaDescription:
        "Specialized MSME financial advisory in India: working capital optimization, debtor cycle reduction, credit rating enhancement, and bank limit renewal support.",
      keywords: [
        "MSME advisory India",
        "working capital optimization",
        "CC limit enhancement",
        "MSME financial restructuring",
        "commercial CIBIL dispute advisory",
      ],
    },
  },

  // =========================================================================
  // CATEGORY 2: PROJECT FINANCE
  // =========================================================================
  {
    id: "term-loan-advisory",
    slug: "term-loan-advisory",
    aliases: ["project-finance"],
    title: "Project Term Loan Advisory & Debt Syndication",
    shortTitle: "Term Loan Advisory",
    categoryId: "project-finance",
    categoryName: "Project Finance",
    summary:
      "End-to-end debt advisory for greenfield industrial plants, brownfield expansions, and infrastructure capex, structuring optimum Debt:Equity ratios and managing lender appraisal.",
    iconName: "Landmark",
    badge: "Capex Syndication",
    hero: {
      headline: "Institutional Term Loan Advisory & Capex Debt Structuring",
      subheadline:
        "From preliminary capital structuring (Debt:Equity) to Detailed Project Report (DPR) synthesis, lender risk matching, and sanction covenant vetting — structured execution for loans up to ₹250 Cr.",
      stats: [
        { label: "Appraisal Framework", value: "PSU, Private & SIDBI" },
        { label: "Capital Structuring", value: "Optimal Debt:Equity Ratio" },
        { label: "Tenure Alignment", value: "Moratorium & Amortization" },
      ],
    },
    problem: {
      title: "Why Industrial Term Loans Face Delays and Rejections",
      description:
        "Large capital expenditure projects require multi-layered lender scrutiny. When proposals lack robust means of finance, verified vendor quotations, or realistic debt service coverage schedules, banks reject or indefinitely stall applications.",
      painPoints: [
        "Incorrect Debt-Equity sizing resulting in excessive promoter equity demands from banks",
        "Inadequate moratorium periods that trigger debt repayment pressure before plant commissioning",
        "Unjustified civil and plant & machinery estimates without architect or supplier backing",
        "Mismatch between project cash flows and repayment amortization schedules",
      ],
    },
    targetAudience: {
      title: "Who Needs Term Loan Advisory?",
      description:
        "Tailored for industrial enterprises, infrastructure developers, and commercial project promoters undertaking major capital expenditure.",
      profiles: [
        {
          title: "Greenfield Manufacturing Units",
          criteria: "Establishing new factories, processing plants, or fabrication facilities.",
        },
        {
          title: "Brownfield Modernization & Capex",
          criteria: "Upgrading existing machinery, adding production lines, or setting up captive solar.",
        },
        {
          title: "Commercial & Healthcare Infrastructure",
          criteria: "Constructing hospitals, logistics warehouses, cold chains, or educational campuses.",
        },
      ],
    },
    whatVsProvides: {
      title: "Our Term Loan Advisory Scope",
      description:
        "We guide promoters through the entire institutional debt journey, ensuring financial structures meet lender risk appetites.",
      features: [
        {
          title: "Means of Finance & Debt-Equity Structuring",
          description:
            "Determining the sustainable mix of promoter contribution, term debt, unsecured promoter loans, and government capital subsidies.",
        },
        {
          title: "Lender Risk Profiling & Matching",
          description:
            "Identifying appropriate financial institutions (Public Sector Banks, Private Commercial Banks, SIDBI, State Financial Corporations) aligned with project size.",
        },
        {
          title: "Comprehensive Credit Appraisal Dossier",
          description:
            "Compiling the complete loan application dossier: DPR, TEV study, CMA statements, statutory clearance checklist, and legal title documents.",
        },
        {
          title: "Sanction Covenant Vetting",
          description:
            "Reviewing sanction letters for onerous terms: interest reset clauses, prepayment penalties, restrictive financial covenants, and personal guarantee scopes.",
        },
      ],
    },
    process: {
      title: "Our Project Finance Methodology",
      steps: [
        {
          stepNumber: 1,
          title: "Project Financial Architecture",
          description:
            "Sizing total project cost (land, civil, machinery, contingencies, margin money) and designing the debt-equity model.",
          duration: "Days 1–4",
        },
        {
          stepNumber: 2,
          title: "DPR & CMA Data Formulation",
          description:
            "Synthesizing the bankable DPR, 10-year projected financials, DSCR schedules, and sensitivity analyses.",
          duration: "Days 5–10",
        },
        {
          stepNumber: 3,
          title: "Lender Submission & Query Coordination",
          description:
            "Submitting the structured dossier to selected lenders and managing technical and financial clarification rounds.",
          duration: "Days 11–20",
        },
        {
          stepNumber: 4,
          title: "Sanction Vetting & Pre-Disbursement Compliance",
          description:
            "Vetting sanction letter terms, assisting with ROC charge creation (CHG-1), and assembling disbursement conditions.",
          duration: "Days 21–30",
        },
      ],
    },
    documentsRequired: {
      title: "Documents Required",
      categories: [
        {
          category: "Project & Capex",
          items: [
            "Land purchase deed / lease agreement and conversion order",
            "Civil construction estimate certified by a registered Chartered Engineer/Architect",
            "Firm proforma invoices for all indigenous and imported plant & machinery",
            "Statutory environmental clearances (SPCB CTE) and building plan approvals",
          ],
        },
        {
          category: "Promoter & Financials",
          items: [
            "Past 3 years audited financials and income tax returns of promoter entities",
            "Promoter personal net-worth statements certified by a Chartered Accountant",
            "Proof of promoter margin money infusion (bank statements / fixed deposits)",
            "Details of existing banking facilities across all associate entities",
          ],
        },
      ],
    },
    deliverables: {
      title: "Advisory Deliverables",
      items: [
        {
          title: "Bankable Project Dossier",
          format: "PDF + Hardcopy Binder",
          description:
            "Complete institutional credit proposal containing DPR, CMA, statutory permissions, and promoter profiles.",
        },
        {
          title: "Dynamic Debt Service Model",
          format: "Excel (.xlsx)",
          description:
            "Monthly and annual cash flow projections, debt amortization schedules, and DSCR computations.",
        },
        {
          title: "Sanction Letter Covenant Analysis",
          format: "PDF (5–8 pages)",
          description:
            "Clause-by-clause legal and financial vetting of sanction terms, highlighting negotiable conditions.",
        },
      ],
    },
    workflow: {
      title: "Workflow & Governance",
      stages: [
        {
          stage: "Stage 1: Structuring",
          action: "Finalize project capex and debt-equity ratio.",
          outcome: "Approved means of finance.",
        },
        {
          stage: "Stage 2: Documentation",
          action: "Prepare DPR, CMA, and credit appraisal file.",
          outcome: "Complete lender dossier.",
        },
        {
          stage: "Stage 3: Appraisal",
          action: "Coordinate lender credit appraisal and query resolution.",
          outcome: "Credit committee review.",
        },
        {
          stage: "Stage 4: Sanction",
          action: "Vet sanction conditions and assist with pre-disbursement compliance.",
          outcome: "Disbursement-ready credit facility.",
        },
      ],
    },
    faqs: [
      {
        question: "What is the typical Debt-to-Equity ratio banks expect for industrial term loans?",
        answer:
          "In Indian banking, standard debt-to-equity ratios for industrial manufacturing projects typically range between 2:1 and 3:1 (i.e., 65% to 75% debt and 25% to 35% promoter equity). For high-risk or specialized sectors, banks may require a higher promoter contribution of 35% to 40%.",
      },
      {
        question: "What is a moratorium period and how is it structured?",
        answer:
          "A moratorium (repayment holiday) is a period during which the borrower is not required to repay the principal loan amount, though interest is usually serviced. It is structured to cover the project implementation and construction phase plus an additional 3 to 6 months of trial commercial production.",
      },
      {
        question: "Does VS guarantee loan sanction from banks?",
        answer:
          "No. As an institutional advisory platform, VS does not provide loan guarantees. Credit sanction and disbursement are the exclusive prerogative of the lending bank's credit committee, based on their independent appraisal and risk policies.",
      },
    ],
    relatedServiceSlugs: [
      "dpr",
      "cma",
      "project-feasibility",
      "expansion-finance",
    ],
    disclaimer:
      "VS Project & Financial Advisory Private Limited is an independent financial advisory firm. Loan approval, terms, interest rates, and sanction are solely at the discretion of the lending institutions based on their credit policies. VS does not charge success fees contingent on loan approval.",
    seo: {
      metaTitle: "Project Term Loan Advisory & Debt Syndication | VS Advisory",
      metaDescription:
        "Institutional project finance and term loan advisory for Indian MSMEs: means of finance structuring, DPR preparation, lender matching, and sanction covenant vetting.",
      keywords: [
        "project finance India",
        "term loan advisory",
        "capex debt syndication",
        "industrial loan consultant",
        "DPR for bank loan",
      ],
    },
  },

  {
    id: "working-capital-advisory",
    slug: "working-capital-advisory",
    title: "Working Capital Advisory (CC / OD / LC / BG)",
    shortTitle: "Working Capital Advisory",
    categoryId: "project-finance",
    categoryName: "Project Finance",
    summary:
      "Strategic structuring and enhancement of fund-based (Cash Credit, Overdraft) and non-fund-based (Letters of Credit, Bank Guarantees) working capital facilities.",
    iconName: "TrendingUp",
    badge: "Liquidity Advisory",
    hero: {
      headline: "Working Capital Structuring & Limit Enhancement",
      subheadline:
        "Optimize your operational liquidity. We size and structure Cash Credit (CC), Overdraft (OD), Letters of Credit (LC), and Bank Guarantee (BG) limits aligned with your operating cycle and RBI Tandon/Nayak norms.",
      stats: [
        { label: "Fund-Based Limits", value: "CC / OD / EPC / FBD" },
        { label: "Non-Fund Limits", value: "LC / BG / SBLC" },
        { label: "Assessment Method", value: "Tandon Method II & Nayak" },
      ],
    },
    problem: {
      title: "The Working Capital Trap for Growing Enterprises",
      description:
        "As businesses scale turnover, their working capital requirements expand exponentially. When bank limits fail to keep pace with sales growth, companies face cash flow choking, supplier payment delays, and inability to fulfill new purchase orders.",
      painPoints: [
        "Arbitrary CC limit cuts due to inadequate drawing power or aging book debts over 90 days",
        "High collateral margin demands from lenders due to sub-optimal financial presentation",
        "Underutilization of non-fund limits (LCs) that could reduce cash borrowing costs",
        "Struggling to calculate Maximum Permissible Bank Finance (MPBF) under banking formulas",
      ],
    },
    targetAudience: {
      title: "Who Needs Working Capital Advisory?",
      description:
        "Vital for manufacturing, wholesale trading, contracting, and export entities with cyclical or expanding cash needs.",
      profiles: [
        {
          title: "Manufacturing Enterprises",
          criteria: "Holding raw material inventory and extending 60–90 days credit to distributors.",
        },
        {
          title: "EPC & Infrastructure Contractors",
          criteria: "Needing heavy non-fund Bank Guarantees (Performance & Mobilization) and overdrafts.",
        },
        {
          title: "Exporters & Import Houses",
          criteria: "Requiring Export Packing Credit (EPC), Foreign Bill Discounting, and Letters of Credit.",
        },
      ],
    },
    whatVsProvides: {
      title: "Our Working Capital Solutions",
      description:
        "We optimize the structure and pricing of your operational credit facilities.",
      features: [
        {
          title: "Operating Cycle & MPBF Computation",
          description:
            "Rigorous computation of working capital gap, drawing power, and MPBF using Tandon Committee Method II (minimum 1.33 current ratio) or Nayak Committee turnover method.",
        },
        {
          title: "Fund-Based & Non-Fund Blend Optimization",
          description:
            "Balancing Cash Credit with Letters of Credit (LCs) and supplier credit to lower effective borrowing costs.",
        },
        {
          title: "Drawing Power & Stock Audit Preparation",
          description:
            "Structuring inventory and book debt statements to maximize drawing power while ensuring compliance with bank stock audit norms.",
        },
        {
          title: "Consortium & Multiple Banking Alignment",
          description:
            "Coordinating limit renewals, pro-rata collateral allocation, and Pari-Passu charge creation across multiple lenders.",
        },
      ],
    },
    process: {
      title: "Our Working Capital Process",
      steps: [
        {
          stepNumber: 1,
          title: "Operating Cycle Diagnostic",
          description:
            "Measuring exact cash conversion cycle: Raw Material holding + WIP + Finished Goods + Debtor days less Creditor days.",
          duration: "Days 1–3",
        },
        {
          stepNumber: 2,
          title: "CMA Form I–VI Formulation",
          description:
            "Drafting institutional CMA statements reflecting projected sales growth and working capital requirements.",
          duration: "Days 4–7",
        },
        {
          stepNumber: 3,
          title: "Proposal Dossier & Bank Submission",
          description:
            "Compiling enhancement application, stock statements, GST reconciliation, and submitting to current or new banks.",
          duration: "Days 8–12",
        },
        {
          stepNumber: 4,
          title: "Sanction Vetting & Limit Activation",
          description:
            "Vetting sanction terms, interest rate spreads, margin requirements, and assisting with charge registration.",
          duration: "Days 13–18",
        },
      ],
    },
    documentsRequired: {
      title: "Documents Required",
      categories: [
        {
          category: "Financial & Operating",
          items: [
            "Audited financials for past 3 years with complete schedules and notes to accounts",
            "Provisional financials for the current financial year",
            "Monthly sales, purchases, and GST returns (GSTR-1, GSTR-3B) for the trailing 12 months",
            "Month-wise stock and debtors statement for the past 6 months",
          ],
        },
        {
          category: "Banking & Security",
          items: [
            "Existing bank sanction letters, renewal letters, and interest rate certificates",
            "12 months bank statements for all operational and CC/OD accounts",
            "Details of collateral properties (valuation report, legal search report)",
          ],
        },
      ],
    },
    deliverables: {
      title: "Working Capital Deliverables",
      items: [
        {
          title: "Bankable CMA Data Dossier",
          format: "Excel + PDF (Form I to VI)",
          description:
            "Standardized CMA data with detailed MPBF calculations and ratio schedules.",
        },
        {
          title: "Working Capital Justification Note",
          format: "PDF (10–15 pages)",
          description:
            "Credit memorandum explaining turnover growth, order book position, and rationale for limit enhancement.",
        },
        {
          title: "Drawing Power Optimization Template",
          format: "Excel (.xlsx)",
          description:
            "Custom template for monthly stock and debtor statement calculation adhering to bank margin norms.",
        },
      ],
    },
    workflow: {
      title: "Workflow & Governance",
      stages: [
        {
          stage: "Stage 1: Cycle Analysis",
          action: "Evaluate cash conversion days and determine optimal limit size.",
          outcome: "Target credit structure approved.",
        },
        {
          stage: "Stage 2: CMA Modeling",
          action: "Prepare Form I to VI with audited past and forward projections.",
          outcome: "CMA package ready.",
        },
        {
          stage: "Stage 3: Bank Submission",
          action: "Submit enhancement dossier and coordinate with relationship managers.",
          outcome: "Credit proposal in underwriting.",
        },
      ],
    },
    faqs: [
      {
        question: "What is MPBF and why do banks use it?",
        answer:
          "Maximum Permissible Bank Finance (MPBF) is an RBI-recommended formula (originally established by the Tandon Committee) used by banks to determine the maximum working capital finance a borrower is eligible for. It ensures that borrowers contribute a minimum percentage (typically 25%) of their current assets from long-term sources.",
      },
      {
        question: "Can debtor balances older than 90 days be included in Drawing Power?",
        answer:
          "Generally, Indian commercial banks exclude book debts exceeding 90 days (or 120 days for select capital goods industries) when calculating Drawing Power. We help you structure your sales ledger and credit terms to maintain healthy, bank-eligible receivables.",
      },
    ],
    relatedServiceSlugs: [
      "cma",
      "term-loan-advisory",
      "financial-projections",
      "msme-advisory",
    ],
    disclaimer:
      "Working capital advisory assists in analyzing cash flows, calculating MPBF, and preparing credit enhancement dossiers. Approval of Cash Credit, Overdraft, LC, or BG facilities is at the sole discretion of the lending bank.",
    seo: {
      metaTitle: "Working Capital Advisory (CC / OD / LC / BG) | VS Advisory",
      metaDescription:
        "Comprehensive working capital advisory for Indian MSMEs: MPBF calculations under Tandon/Nayak norms, CC/OD limit enhancement, and LC/BG facility structuring.",
      keywords: [
        "working capital advisory",
        "CC limit enhancement",
        "cash credit loan India",
        "MPBF calculation",
        "letter of credit structuring",
      ],
    },
  },

  {
    id: "expansion-finance",
    slug: "expansion-finance",
    title: "Expansion Finance & Capex Advisory",
    shortTitle: "Expansion Finance",
    categoryId: "project-finance",
    categoryName: "Project Finance",
    summary:
      "Capital structuring and debt advisory for growing enterprises undertaking brownfield plant expansions, secondary manufacturing units, or retail network scale-up.",
    iconName: "Building2",
    badge: "Growth Capex",
    hero: {
      headline: "Strategic Debt Advisory for Brownfield Expansions",
      subheadline:
        "Scale your operating capacity without destabilizing existing cash flows. We structure expansion debt that leverages your existing balance sheet while protecting ongoing operations.",
      stats: [
        { label: "Expansion Type", value: "Brownfield & Line Addition" },
        { label: "Leverage Modeling", value: "Existing + Incremental Debt" },
        { label: "Security Structuring", value: "Pari-Passu / Second Charge" },
      ],
    },
    problem: {
      title: "The Complexity of Financing Brownfield Growth",
      description:
        "Unlike greenfield projects, brownfield expansions must seamlessly integrate incremental debt into an already active operational balance sheet. If debt service is miscalculated or existing lenders refuse second charges, the entire expansion stalls.",
      painPoints: [
        "Existing consortium lenders delaying No Objection Certificates (NOCs) for new capex",
        "Over-leveraging the current balance sheet, resulting in cash flow crunches during construction",
        "Difficulty isolating cash flows between legacy operations and new expansion lines",
        "Failure to structure flexible drawdowns aligned with machinery delivery milestones",
      ],
    },
    targetAudience: {
      title: "Who Needs Expansion Finance Advisory?",
      description:
        "Designed for established enterprises scaling up to meet growing market demand.",
      profiles: [
        {
          title: "Established Manufacturers",
          criteria: "Adding high-speed automated production lines or doubling factory shed space.",
        },
        {
          title: "Regional Brands Going National",
          criteria: "Setting up regional warehousing hubs, distribution centers, or retail outlets.",
        },
        {
          title: "Companies Investing in Backward Integration",
          criteria: "Setting up captive component manufacturing or raw material processing plants.",
        },
      ],
    },
    whatVsProvides: {
      title: "Our Expansion Finance Scope",
      description:
        "We safeguard existing operations while securing cost-effective expansion capital.",
      features: [
        {
          title: "Consolidated & Segmental Cash Flow Modeling",
          description:
            "Separating cash flows of existing operations from incremental expansion revenues to demonstrate clear debt servicing capability to lenders.",
        },
        {
          title: "Lender NOC & Pari-Passu Security Coordination",
          description:
            "Managing security sharing and second-charge negotiations with existing banking consortium members.",
        },
        {
          title: "Staged Disbursement & Milestone Alignment",
          description:
            "Structuring debt drawdowns to match vendor mobilization advances, civil construction stages, and machinery commissioning.",
        },
        {
          title: "Government Expansion Subsidies Integration",
          description:
            "Identifying eligible state industrial policy capital subsidies and interest subvention for brownfield modernization.",
        },
      ],
    },
    process: {
      title: "Expansion Financing Methodology",
      steps: [
        {
          stepNumber: 1,
          title: "Existing Debt & Capacity Audit",
          description:
            "Evaluating current debt repayment schedules, unencumbered assets, and existing lender covenants.",
          duration: "Days 1–3",
        },
        {
          stepNumber: 2,
          title: "Expansion DPR & Financial Feasibility",
          description:
            "Drafting brownfield DPR detailing incremental capacity, civil capex, and projected revenue growth.",
          duration: "Days 4–8",
        },
        {
          stepNumber: 3,
          title: "Lender Syndication & Existing Bank Negotiations",
          description:
            "Presenting expansion proposal to existing lenders or introducing new consortium partners.",
          duration: "Days 9–16",
        },
        {
          stepNumber: 4,
          title: "Sanction Vetting & NOC Execution",
          description:
            "Finalizing sanction terms, obtaining formal NOCs, and structuring disbursement schedules.",
          duration: "Days 17–24",
        },
      ],
    },
    documentsRequired: {
      title: "Documents Required",
      categories: [
        {
          category: "Expansion Capex",
          items: [
            "Architect civil estimate and municipal building approvals for expansion",
            "Vendor proforma invoices for new machinery and equipment",
            "Projected timeline and milestone schedule for expansion rollout",
            "Environmental clearance amendment (if expanding production capacity)",
          ],
        },
        {
          category: "Historical Financials & Existing Debt",
          items: [
            "Past 3 years audited financials and latest management accounts",
            "Existing bank sanction letters, charge details, and outstanding loan balances",
            "Proof of promoter contribution for the expansion project",
          ],
        },
      ],
    },
    deliverables: {
      title: "Advisory Deliverables",
      items: [
        {
          title: "Brownfield Expansion DPR",
          format: "PDF (40–60 pages)",
          description:
            "Comprehensive report covering existing operational capacity, expansion scope, and financial viability.",
        },
        {
          title: "Consolidated Financial Model",
          format: "Excel (.xlsx)",
          description:
            "Model with separate tabs for legacy operations, incremental expansion, and consolidated debt service.",
        },
        {
          title: "Security & NOC Strategy Note",
          format: "PDF (5–8 pages)",
          description:
            "Framework for sharing security charges among existing and new lenders.",
        },
      ],
    },
    workflow: {
      title: "Engagement Workflow",
      stages: [
        {
          stage: "Stage 1: Capacity & Debt Audit",
          action: "Analyze balance sheet capacity and existing lender terms.",
          outcome: "Borrowing capacity established.",
        },
        {
          stage: "Stage 2: Model & DPR",
          action: "Construct combined cash flow model and author expansion DPR.",
          outcome: "Bank-ready expansion dossier.",
        },
        {
          stage: "Stage 3: Lender Alignment",
          action: "Coordinate with existing lenders for NOCs or fresh sanction.",
          outcome: "Consortium approval.",
        },
      ],
    },
    faqs: [
      {
        question: "Do I need permission from my existing bank before taking a loan for expansion?",
        answer:
          "Yes. Almost all bank loan agreements contain negative covenants requiring the borrower to obtain written NOC prior to undertaking any major capital expenditure or availing additional debt from another financial institution.",
      },
      {
        question: "Can my existing factory land be used as security for the expansion loan?",
        answer:
          "Yes, provided the market value of the property offers adequate security coverage (typically 1.33x to 1.5x) and your existing lender agrees to create a Pari-Passu (equal footing) or second charge in favor of the new lender.",
      },
    ],
    relatedServiceSlugs: [
      "term-loan-advisory",
      "dpr",
      "machinery-finance",
      "subsidy-advisory",
    ],
    disclaimer:
      "Expansion finance advisory assists in financial structuring and lender presentation. Approvals, interest rates, and NOC issuances are governed strictly by the lending institutions involved.",
    seo: {
      metaTitle: "Expansion Finance & Brownfield Capex Advisory | VS Advisory",
      metaDescription:
        "Structured debt advisory for brownfield plant expansions, machinery additions, and capacity scaling for Indian manufacturing and MSME enterprises.",
      keywords: [
        "expansion finance India",
        "brownfield capex loan",
        "machinery expansion debt",
        "lender NOC coordination",
        "MSME capacity expansion loan",
      ],
    },
  },

  {
    id: "machinery-finance",
    slug: "machinery-finance",
    title: "Machinery & Equipment Finance Advisory",
    shortTitle: "Machinery Finance",
    categoryId: "project-finance",
    categoryName: "Project Finance",
    summary:
      "Targeted financing solutions for industrial machinery, automated equipment, medical devices, and technology procurement, including supplier credit and leasing structures.",
    iconName: "Cpu",
    badge: "Equipment Finance",
    hero: {
      headline: "Machinery & Equipment Procurement Financing",
      subheadline:
        "Acquire state-of-the-art production machinery without straining your working capital. We structure equipment loans, buyer's credit, and technology upgradation schemes with competitive tenures.",
      stats: [
        { label: "Loan Coverage", value: "Up to 80%–85% of Machinery Cost" },
        { label: "Tenure Structure", value: "3 to 7 Years Amortization" },
        { label: "Equipment Scope", value: "Indigenous & Imported Capex" },
      ],
    },
    problem: {
      title: "The Dilemma of Capital-Intensive Equipment",
      description:
        "Modern manufacturing demands automated, high-precision machinery to compete globally. However, committing operational cash reserves to purchase heavy machinery starves the company of working capital, while traditional lenders take months to appraise equipment loans.",
      painPoints: [
        "Depleting liquid working capital reserves to pay machinery supplier advances",
        "Navigating complex import documentation (LCs, Buyer's Credit, customs duties)",
        "Missing out on central government technology upgradation subsidies (CLCSS / TUFS)",
        "Lengthy bank appraisal cycles resulting in missed machinery delivery schedules",
      ],
    },
    targetAudience: {
      title: "Who Needs Machinery Finance Advisory?",
      description:
        "Essential for enterprises investing in specialized manufacturing, engineering, or medical technology.",
      profiles: [
        {
          title: "Precision Engineering & Auto Ancillaries",
          criteria: "Purchasing CNC machines, robotic welding cells, or stamping presses.",
        },
        {
          title: "Textile & Garment Manufacturers",
          criteria: "Upgrading to automated spinning, weaving, or garment finishing lines.",
        },
        {
          title: "Hospitals & Diagnostic Centers",
          criteria: "Procuring MRI scanners, CT systems, cath labs, or robotic surgical systems.",
        },
      ],
    },
    whatVsProvides: {
      title: "Our Machinery Finance Capabilities",
      description:
        "Fast-track equipment debt structuring with optimal margin requirements.",
      features: [
        {
          title: "Vendor Quotation & Asset Life Appraisal",
          description:
            "Vetting supplier commercial terms, delivery lead times, and economic asset lifespan to match repayment tenure with depreciation schedules.",
        },
        {
          title: "Import Machinery Financing (LC / Trade Credit)",
          description:
            "Structuring foreign currency Letters of Credit, Trade Credit, and hedging strategies for imported equipment.",
        },
        {
          title: "Technology Upgradation Subsidy Mapping",
          description:
            "Identifying eligible central and state capital subsidies for technology adoption, energy efficiency, and modernization.",
        },
        {
          title: "Hypothecation & Insurance Structuring",
          description:
            "Assisting with equipment hypothecation registration (ROC Form CHG-1) and comprehensive transit and operational insurance policies.",
        },
      ],
    },
    process: {
      title: "Machinery Financing Process",
      steps: [
        {
          stepNumber: 1,
          title: "Machinery Scope & Quotation Review",
          description:
            "Reviewing technical datasheets, supplier proforma invoices, and installation cost schedules.",
          duration: "Days 1–2",
        },
        {
          stepNumber: 2,
          title: "Financial Viability & DSCR Analysis",
          description:
            "Modeling incremental output, revenue potential, and debt service coverage generated by the new machinery.",
          duration: "Days 3–5",
        },
        {
          stepNumber: 3,
          title: "Lender & NBFC Selection",
          description:
            "Presenting proposal to specialized equipment finance divisions of banks and asset-backed NBFCs.",
          duration: "Days 6–10",
        },
        {
          stepNumber: 4,
          title: "Sanction, LC Issuance & Disbursement",
          description:
            "Vetting sanction letter, facilitating margin money deposit, and coordinating direct payment to the equipment vendor.",
          duration: "Days 11–16",
        },
      ],
    },
    documentsRequired: {
      title: "Documents Required",
      categories: [
        {
          category: "Machinery Information",
          items: [
            "Proforma invoices with detailed technical specifications from approved vendors",
            "Civil foundation and installation cost estimates (if applicable)",
            "Import license and shipping quotes (for imported machinery)",
            "Expected capacity addition and product output calculations",
          ],
        },
        {
          category: "Company Financials",
          items: [
            "Past 2–3 years audited balance sheets and tax returns",
            "Trailing 12 months bank statements",
            "Existing loan schedule and KYC of promoters",
          ],
        },
      ],
    },
    deliverables: {
      title: "Advisory Deliverables",
      items: [
        {
          title: "Machinery Finance Appraisal Note",
          format: "PDF (15–20 pages)",
          description:
            "Techno-financial appraisal covering equipment specifications, cost justification, and payback period.",
        },
        {
          title: "Equipment Debt Service Schedule",
          format: "Excel (.xlsx)",
          description:
            "Detailed monthly amortization schedule factoring in moratorium and depreciation benefits.",
        },
      ],
    },
    workflow: {
      title: "Engagement Workflow",
      stages: [
        {
          stage: "Stage 1: Appraisal",
          action: "Validate vendor quotations and economic asset life.",
          outcome: "Machinery appraisal sheet.",
        },
        {
          stage: "Stage 2: Lender Matching",
          action: "Approach equipment finance lenders with structured proposal.",
          outcome: "Indicative term sheets.",
        },
        {
          stage: "Stage 3: Disbursement",
          action: "Assist with documentation, hypothecation, and vendor payout.",
          outcome: "Machine delivered and commissioned.",
        },
      ],
    },
    faqs: [
      {
        question: "Can machinery loan be availed without giving collateral property?",
        answer:
          "Yes. Many commercial banks, SIDBI, and asset-backed NBFCs provide equipment loans secured solely by the primary hypothecation of the machinery being purchased, especially if the borrower has a strong credit track record or qualifies under the CGTMSE scheme.",
      },
      {
        question: "What is the typical promoter margin required for machinery loans?",
        answer:
          "Standard promoter margin required by lenders ranges from 15% to 25% of the total machinery invoice value (including GST). For imported machinery, additional margin may be required to cover currency fluctuations.",
      },
    ],
    relatedServiceSlugs: [
      "term-loan-advisory",
      "expansion-finance",
      "cma",
      "subsidy-advisory",
    ],
    disclaimer:
      "Machinery finance advisory assists in proposal structuring and lender coordination. Loan sanction, interest rates, and loan-to-value (LTV) ratios are determined solely by lending institutions.",
    seo: {
      metaTitle: "Machinery & Equipment Finance Advisory | VS Advisory",
      metaDescription:
        "Fast-track equipment financing and machinery loan advisory for Indian MSMEs: low margin requirements, tenure alignment, and import LC structuring.",
      keywords: [
        "machinery loan India",
        "equipment finance advisory",
        "industrial machinery debt",
        "SIDBI machinery loan",
        "medical equipment financing",
      ],
    },
  },

  {
    id: "project-finance-documentation",
    slug: "project-finance-documentation",
    title: "Project Finance Documentation & Covenant Compliance",
    shortTitle: "Finance Documentation",
    categoryId: "project-finance",
    categoryName: "Project Finance",
    summary:
      "Meticulous preparation and vetting of project finance documentation: means of finance dossiers, sanction compliance, mortgage creation, ROC charges, and disbursement clearance.",
    iconName: "ShieldCheck",
    badge: "Sanction Compliance",
    hero: {
      headline: "Institutional Loan Documentation & Covenant Compliance",
      subheadline:
        "Overcome the final hurdle between loan sanction and actual fund disbursement. We manage pre-disbursement compliance, title verification, ROC charge filings, and mortgage creation.",
      stats: [
        { label: "Compliance Scope", value: "Pre-Disbursement Conditions" },
        { label: "ROC Filings", value: "Form CHG-1 & CHG-9" },
        { label: "Security Creation", value: "Equitable Mortgage & Hypothecation" },
      ],
    },
    problem: {
      title: "The Post-Sanction Disbursement Bottleneck",
      description:
        "Receiving a loan sanction letter is only half the battle. Sanction letters often contain 30 to 50 complex pre-disbursement conditions, legal title clearance requirements, and restrictive covenants. Promoters frequently face weeks or months of disbursement delays due to incomplete documentation.",
      painPoints: [
        "Disbursement halted due to pending statutory clearances or incomplete title search reports",
        "Inability to create Pari-Passu or second charges due to inter-creditor disagreements",
        "Delays in filing ROC Form CHG-1 leading to penal fees or lender refusal to release funds",
        "Overlooking restrictive covenants regarding dividend distribution or management change",
      ],
    },
    targetAudience: {
      title: "Who Needs Documentation Advisory?",
      description:
        "Crucial for borrowers who have received a bank sanction letter and need fast, compliant disbursement.",
      profiles: [
        {
          title: "Sanctioned Borrowers",
          criteria: "Entities holding in-principle or formal sanction letters needing disbursement clearance.",
        },
        {
          title: "Multi-Banking / Consortium Borrowers",
          criteria: "Businesses navigating complex inter-creditor agreements and security sharing.",
        },
        {
          title: "Corporate Borrowers Refinancing Debt",
          criteria: "Replacing high-cost debt and requiring simultaneous charge satisfaction (CHG-4) and creation.",
        },
      ],
    },
    whatVsProvides: {
      title: "What VS Delivers in Documentation",
      description:
        "End-to-end management of bank legal and compliance checklists to accelerate disbursement.",
      features: [
        {
          title: "Pre-Disbursement Checklist Management",
          description:
            "Systematic compilation and clearance of every condition precedent (CP) listed in the bank sanction letter.",
        },
        {
          title: "Legal Title & Search Report Coordination",
          description:
            "Coordinating with bank-empaneled advocates for 30-year non-encumbrance search reports and title clearance.",
        },
        {
          title: "ROC Charge Filings (CHG-1 / CHG-9)",
          description:
            "Drafting board resolutions, filing charge creation forms on the MCA portal within statutory timelines, and obtaining Certificate of Registration of Charge.",
        },
        {
          title: "Mortgage & Hypothecation Execution",
          description:
            "Assisting with Memorandum of Entry for Equitable Mortgage, deed of hypothecation, and personal guarantee agreements.",
        },
      ],
    },
    process: {
      title: "Our Documentation Process",
      steps: [
        {
          stepNumber: 1,
          title: "Sanction Letter Audit & Gap Analysis",
          description:
            "Reviewing every clause of the sanction letter and creating an itemized Condition Precedent (CP) tracker.",
          duration: "Days 1–2",
        },
        {
          stepNumber: 2,
          title: "Legal & Statutory Assembling",
          description:
            "Gathering title deeds, tax receipts, architect certificates, and promoter contribution proof.",
          duration: "Days 3–6",
        },
        {
          stepNumber: 3,
          title: "Security Creation & MCA Filings",
          description:
            "Executing loan agreements, completing equitable mortgage, and filing ROC Form CHG-1.",
          duration: "Days 7–10",
        },
        {
          stepNumber: 4,
          title: "Disbursement Order Clearance",
          description:
            "Submitting complete compliance dossier to the bank's Credit Administration Department (CAD) for fund release.",
          duration: "Days 11–14",
        },
      ],
    },
    documentsRequired: {
      title: "Documents Required",
      categories: [
        {
          category: "Sanction & Legal",
          items: [
            "Original bank sanction letter accepted by authorized signatories",
            "Draft loan agreements, deed of hypothecation, and guarantee forms",
            "Original property title deeds and non-encumbrance certificates",
            "Board resolutions approving borrowing under Section 179/180 of Companies Act",
          ],
        },
        {
          category: "Financial & Equity Margin",
          items: [
            "Bank statements showing upfront infusion of promoter margin money",
            "Chartered Accountant certificate of fund utilization",
            "Proforma invoices and vendor bank details for direct RTGS payment",
          ],
        },
      ],
    },
    deliverables: {
      title: "Deliverables",
      items: [
        {
          title: "Pre-Disbursement Compliance Dossier",
          format: "Structured Folder + PDF",
          description:
            "Comprehensive dossier indexed exactly according to bank credit administration requirements.",
        },
        {
          title: "ROC Charge Filing Pack",
          format: "PDF (Form CHG-1 & Challan)",
          description:
            "Certified copy of MCA charge creation filing and ROC registration certificate.",
        },
        {
          title: "Covenant Monitoring Schedule",
          format: "Excel (.xlsx)",
          description:
            "Calendar tracking quarterly stock statements, insurance renewals, and annual CMA submission deadlines.",
        },
      ],
    },
    workflow: {
      title: "Engagement Workflow",
      stages: [
        {
          stage: "Stage 1: Sanction Audit",
          action: "Parse all sanction terms and build CP checklist.",
          outcome: "Compliance tracker active.",
        },
        {
          stage: "Stage 2: Execution",
          action: "Complete legal documentation, mortgage, and ROC charges.",
          outcome: "Security created and registered.",
        },
        {
          stage: "Stage 3: Fund Release",
          action: "Submit dossier to bank CAD and track disbursement.",
          outcome: "Loan funds credited.",
        },
      ],
    },
    faqs: [
      {
        question: "Why do banks delay disbursement even after sanctioning a loan?",
        answer:
          "Banks operate separate Credit Sanction and Credit Administration Departments (CAD). While the sanction committee approves the loan in principle, CAD cannot disburse a single rupee until every single Condition Precedent (CP), such as promoter margin proof, ROC charge creation, and clear title search, is 100% verified.",
      },
      {
        question: "What is the time limit for filing ROC Form CHG-1 in India?",
        answer:
          "Under Section 77 of the Companies Act, 2013, a company must file Form CHG-1 within 30 days of the creation of the charge. While delayed filing is permitted up to 60 days with additional fees, banks generally mandate proof of filing before releasing the first loan tranche.",
      },
    ],
    relatedServiceSlugs: [
      "term-loan-advisory",
      "working-capital-advisory",
      "corporate-compliance",
      "dpr",
    ],
    disclaimer:
      "Documentation advisory provides legal and compliance coordination for loan disbursement. Final fund release is subject to the verification and approval of the lending institution's legal and credit administration departments.",
    seo: {
      metaTitle: "Project Finance Documentation & Covenant Compliance | VS Advisory",
      metaDescription:
        "Fast-track your bank loan disbursement. We handle pre-disbursement compliance, ROC charge filings (CHG-1), mortgage creation, and legal vetting for Indian enterprises.",
      keywords: [
        "project finance documentation",
        "pre-disbursement compliance",
        "ROC charge creation CHG-1",
        "bank loan disbursement consultant",
        "mortgage creation for bank loan",
      ],
    },
  },

  // =========================================================================
  // CATEGORY 3: PROJECT REPORTS
  // =========================================================================
  {
    id: "dpr",
    slug: "dpr",
    aliases: ["detailed-project-report"],
    title: "Detailed Project Report (DPR) Preparation",
    shortTitle: "DPR Preparation",
    categoryId: "project-reports",
    categoryName: "Project Reports",
    summary:
      "Bankable, institutional-grade 40 to 70 page Detailed Project Reports (DPR) prepared in strict compliance with IBA, SIDBI, and commercial bank credit appraisal standards.",
    iconName: "FileSpreadsheet",
    badge: "IBA & SIDBI Compliant",
    hero: {
      headline: "Bankable Detailed Project Reports (DPR)",
      subheadline:
        "Prepared in strict adherence to Indian Banks' Association (IBA) and SIDBI appraisal formats. Comprehensive 8-chapter project reports engineered to withstand rigorous bank credit committee examination.",
      stats: [
        { label: "Report Standard", value: "8 Standard Chapters" },
        { label: "Depth & Scope", value: "40 to 70 Comprehensive Pages" },
        { label: "Financial Horizon", value: "7 to 10 Years Dynamic Forecasts" },
      ],
    },
    problem: {
      title: "Why Generic Project Reports Fail at Bank Committees",
      description:
        "Most local consultants provide copy-paste project reports that rely on boilerplate text and arbitrary financial numbers. When bank credit officers cross-examine technical specifications, means of finance, or market cluster data, flawed reports lead to immediate rejection.",
      painPoints: [
        "Inadequate technical feasibility details regarding civil works, plant layout, and power load",
        "Unsubstantiated cost of project without architect certificates or vendor proforma invoices",
        "Unrealistic capacity utilization curves that fail standard debt-service stress tests",
        "Absence of risk mitigation strategies, environmental clearance statuses, and sensitivity modeling",
      ],
    },
    targetAudience: {
      title: "Who Needs a Bankable DPR?",
      description:
        "Essential for any entrepreneur or corporate entity seeking term loans, capex financing, or government industrial subsidies.",
      profiles: [
        {
          title: "Greenfield Project Promoters",
          criteria: "Setting up new manufacturing, agro-processing, or industrial units.",
        },
        {
          title: "Expansion & Modernization Capex",
          criteria: "Established units scaling installed capacity or adopting new automated technology.",
        },
        {
          title: "Government Subsidy Applicants",
          criteria: "Applying for PMEGP, Stand-Up India, or State Industrial Policy capital subsidies.",
        },
      ],
    },
    whatVsProvides: {
      title: "The 8 Standard Chapters in a VS DPR",
      description:
        "Every DPR we draft is synthesized with institutional rigor across 8 comprehensive chapters.",
      features: [
        {
          title: "Chapter 1: Executive Summary & Promoter Profile",
          description:
            "Synthesis of business model, promoter credentials, net worth, and past entrepreneurial track record.",
        },
        {
          title: "Chapter 2: Technical Feasibility & Production Process",
          description:
            "Production flowcharts, technology specifications, plant layout, and installed capacity vs target utilization curves.",
        },
        {
          title: "Chapter 3: Land, Civil Works & Plant & Machinery",
          description:
            "Itemized capital cost estimates backed by verified supplier proforma invoices and registered architect civil estimates.",
        },
        {
          title: "Chapter 4: Market Demand & Cluster Competitiveness",
          description:
            "Target customer segments, distribution channels, substitute threats, export potential, and geographical cluster advantages.",
        },
        {
          title: "Chapter 5: Raw Materials, Utilities & Manpower",
          description:
            "Supply chain mapping, vendor concentration risks, connected electrical power load (HT/LT), water, and staffing budgets.",
        },
        {
          title: "Chapter 6: Cost of Project & Means of Finance",
          description:
            "Strict debt-equity sizing, promoter contribution breakdown, working capital margin money, and contingency provisions.",
        },
        {
          title: "Chapter 7: Financial Schedules & Viability Ratios",
          description:
            "10-year projected P&L, balance sheets, cash flows, DSCR, break-even point (BEP), payback period, and internal rate of return (IRR).",
        },
        {
          title: "Chapter 8: Risk Analysis & Statutory Clearances",
          description:
            "SWOT analysis, regulatory clearances (Pollution SPCB CTE, Fire NOC, Factory License), and sensitivity scenarios.",
        },
      ],
    },
    process: {
      title: "Our Structured DPR Workflow",
      steps: [
        {
          stepNumber: 1,
          title: "Data Intake & Engineering Scope",
          description:
            "Intake of promoter KYC, plant layout, machinery quotations, civil estimates, and site survey data.",
          duration: "Days 1–3",
        },
        {
          stepNumber: 2,
          title: "Financial Model & Schedule Formulation",
          description:
            "Building dynamic 10-year financial schedules, depreciation matrices, and debt repayment amortization.",
          duration: "Days 4–7",
        },
        {
          stepNumber: 3,
          title: "Editorial Synthesis & Chapter Drafting",
          description:
            "Drafting all 8 institutional chapters, market research analysis, and regulatory checklists.",
          duration: "Days 8–11",
        },
        {
          stepNumber: 4,
          title: "Chartered Accountant Vetting & Delivery",
          description:
            "Internal technical review, CA vetting of financial statements, and delivery of final bound and digital dossier.",
          duration: "Days 12–14",
        },
      ],
    },
    documentsRequired: {
      title: "Information Required for DPR",
      categories: [
        {
          category: "Technical & Land",
          items: [
            "Land title documents / long lease deed with conversion order",
            "Plant layout drawing and civil construction estimate from Chartered Engineer",
            "Proforma invoices for all major plant & machinery items",
            "Electricity load sanction letter and water supply availability proof",
          ],
        },
        {
          category: "Financial & Statutory",
          items: [
            "Promoter personal net worth statements and past 3 years tax returns",
            "Past 3 years audited financials (for existing operating entities)",
            "Pollution Control Board CTE status or application details",
          ],
        },
      ],
    },
    deliverables: {
      title: "Tangible DPR Deliverables",
      items: [
        {
          title: "Institutional DPR Dossier",
          format: "PDF (40–70 pages)",
          description:
            "Complete 8-chapter bankable project report formatted to IBA and SIDBI standards.",
        },
        {
          title: "Dynamic Financial Projection Model",
          format: "Excel (.xlsx)",
          description:
            "Integrated financial model containing monthly and 10-year annual projections, DSCR, and ratio schedules.",
        },
        {
          title: "Bank Appraisal Executive Summary",
          format: "PDF (8–10 pages)",
          description:
            "Concise executive summary specifically designed for quick review by bank branch heads and credit officers.",
        },
      ],
    },
    workflow: {
      title: "Expected Engagement Workflow",
      stages: [
        {
          stage: "Stage 1: Intake",
          action: "Collect technical and financial data through structured intake forms.",
          outcome: "Baseline data repository verified.",
        },
        {
          stage: "Stage 2: Modeling",
          action: "Engineer financial model and stress-test DSCR and sensitivity.",
          outcome: "Financial schedules locked.",
        },
        {
          stage: "Stage 3: Drafting",
          action: "Author technical, market, and regulatory chapters.",
          outcome: "Full DPR draft compiled.",
        },
        {
          stage: "Stage 4: Delivery",
          action: "Final CA review, formatting, and delivery with bank defense support.",
          outcome: "Banker-ready report in hand.",
        },
      ],
    },
    faqs: [
      {
        question: "Can I use this DPR to apply for loans at any bank in India?",
        answer:
          "Yes. Our DPRs are synthesized in strict compliance with the standardized appraisal guidelines issued by the Indian Banks' Association (IBA) and SIDBI, making them acceptable across all Public Sector Banks (SBI, PNB, BoB, Canara, etc.), Private Commercial Banks (HDFC, ICICI, Axis), and State Financial Corporations.",
      },
      {
        question: "How is the Debt Service Coverage Ratio (DSCR) calculated in the DPR?",
        answer:
          "DSCR is calculated as (Net Profit After Tax + Depreciation + Interest on Term Debt) divided by (Interest on Term Debt + Annual Principal Repayment). Banks look for an average DSCR between 1.50 and 2.00 to ensure adequate safety margin for debt servicing.",
      },
    ],
    relatedServiceSlugs: [
      "cma",
      "term-loan-advisory",
      "financial-modelling",
      "project-feasibility",
    ],
    disclaimer:
      "A Detailed Project Report (DPR) is an analytical project blueprint and financial projection based on information and assumptions provided by the promoter. Preparation of a DPR does not constitute loan sanction or funding approval by banks.",
    seo: {
      metaTitle: "Detailed Project Report (DPR) Preparation | VS Advisory",
      metaDescription:
        "Bankable 40–70 page Detailed Project Reports (DPR) meeting IBA and SIDBI standards. Complete 8-chapter project feasibility and financial modeling for bank loans.",
      keywords: [
        "DPR preparation India",
        "detailed project report for bank loan",
        "bankable DPR consultant",
        "IBA compliant project report",
        "SIDBI project report format",
      ],
    },
  },

  {
    id: "cma",
    slug: "cma",
    aliases: ["cma-data"],
    title: "Credit Monitoring Arrangement (CMA) Data Preparation",
    shortTitle: "CMA Data",
    categoryId: "project-reports",
    categoryName: "Project Reports",
    summary:
      "Form I to Form VI preparation containing audited historicals, provisional statements, and 5 to 7 years forward projections meeting RBI Tandon and Nayak committee norms.",
    iconName: "Calculator",
    badge: "Form I to VI Standard",
    hero: {
      headline: "Banker-Grade Credit Monitoring Arrangement (CMA) Data",
      subheadline:
        "Form I to Form VI preparation containing audited past actuals, current year provisional figures, and 5 to 7 years forward projections engineered to satisfy commercial bank credit committees.",
      stats: [
        { label: "Standard Forms", value: "Form I through Form VI" },
        { label: "Assessment Norms", value: "Tandon Method I & II / Nayak" },
        { label: "Ratio Testing", value: "Current Ratio, DSCR, TOL/TNW" },
      ],
    },
    problem: {
      title: "Why CMA Data Rejections Stall Working Capital Limits",
      description:
        "CMA data is the mathematical language of Indian banking credit underwriting. When borrowers submit CMA sheets with mathematical discrepancies between Form I and Form II, unrealistic inventory holding days, or current ratios below 1.33, credit officers immediately decline limit renewals or enhancements.",
      painPoints: [
        "Mathematical discrepancies between Profit & Loss (Form I) and Balance Sheet (Form II)",
        "Failure to maintain the minimum 1.33 Current Ratio required under Tandon Committee Method II",
        "Unexplained spikes in projected turnover that violate bank turnover growth caps",
        "Inability to justify working capital gap, leading to heavy deductions from drawing power",
      ],
    },
    targetAudience: {
      title: "Who Needs CMA Data Preparation?",
      description:
        "Mandatory for all business borrowers applying for or renewing credit limits above ₹25 Lakhs.",
      profiles: [
        {
          title: "Cash Credit & Overdraft Borrowers",
          criteria: "Applying for fresh CC/OD limits or annual renewal of existing banking facilities.",
        },
        {
          title: "Enterprises Seeking Limit Enhancement",
          criteria: "Expanding sales turnover and requiring proportional enhancement in working capital.",
        },
        {
          title: "Borrowers Under Multiple Banking / Consortium",
          criteria: "Requiring synchronized CMA data submission across multiple member banks.",
        },
      ],
    },
    whatVsProvides: {
      title: "The Six Standard Indian Banking CMA Forms",
      description:
        "We engineer fully integrated Form I to VI statements with zero mathematical inconsistencies.",
      features: [
        {
          title: "Form I: Operating Statement",
          description:
            "Gross sales, excise/GST deductions, net sales, cost of production (raw materials, power, wages), gross profit, SGA expenses, depreciation, interest, and profit before & after tax.",
        },
        {
          title: "Form II: Analysis of Balance Sheet",
          description:
            "Detailed categorization of Liabilities (Net Worth, Term Liabilities, Current Liabilities, Bank Borrowings) and Assets (Fixed Assets, Non-Current Assets, Current Assets).",
        },
        {
          title: "Form III: Comparative Statement of CA & CL",
          description:
            "Granular breakdown of Raw Materials, WIP, Finished Goods, Sundry Debtors, Cash/Bank, and Sundry Creditors with holding period in months.",
        },
        {
          title: "Form IV: Calculation of MPBF (Method I & II)",
          description:
            "Working Capital Gap calculation under Tandon Committee Method I (75% of WCG) and Method II (75% of Current Assets less other current liabilities) with minimum 1.33 current ratio.",
        },
        {
          title: "Form V: Fund Flow Statement",
          description:
            "Long-term and short-term sources of funds vs. deployment/utilization of funds, highlighting diversion of short-term funds for long-term purposes.",
        },
        {
          title: "Form VI: Key Financial Ratios",
          description:
            "Computation of Current Ratio, Quick Ratio, Debt-Equity Ratio, TOL/TNW, DSCR, Interest Coverage Ratio (ISCR), Gross & Net Profit Margins, and ROCE.",
        },
      ],
    },
    process: {
      title: "Our CMA Preparation Process",
      steps: [
        {
          stepNumber: 1,
          title: "Historical Financials Ingestion",
          description:
            "Auditing past 2 to 3 years audited balance sheets, profit & loss accounts, and tax audit reports.",
          duration: "Days 1–2",
        },
        {
          stepNumber: 2,
          title: "Operating Cycle & Ratio Benchmarking",
          description:
            "Analyzing historical debtor, creditor, and inventory holding days to establish realistic projection baselines.",
          duration: "Days 3–4",
        },
        {
          stepNumber: 3,
          title: "Form I–VI Mathematical Engineering",
          description:
            "Formulating integrated financial schedules, MPBF calculations, and fund flow statements in Excel.",
          duration: "Days 5–6",
        },
        {
          stepNumber: 4,
          title: "CA Review & Final Dossier",
          description:
            "Chartered Accountant cross-verification, ratio testing, and delivery of final print-ready and Excel formats.",
          duration: "Day 7",
        },
      ],
    },
    documentsRequired: {
      title: "Documents Required for CMA",
      categories: [
        {
          category: "Past Actuals & Audits",
          items: [
            "Audited balance sheets, P&L statements, and audit reports for the past 2 to 3 years",
            "Provisional financial statements for the current financial year (if year-end is pending)",
            "GSTR-3B filings for the trailing 12 months (to verify sales figures)",
          ],
        },
        {
          category: "Current Limits & Projections",
          items: [
            "Existing bank sanction letter specifying current limits and margin conditions",
            "Estimated sales growth and capex plans for the next 5 years",
            "Current stock and book debt position with aging analysis",
          ],
        },
      ],
    },
    deliverables: {
      title: "CMA Deliverables",
      items: [
        {
          title: "Complete CMA Data Dossier",
          format: "PDF (20–30 pages)",
          description:
            "Standardized Form I to Form VI with comparative historicals and 5 to 7 years forward projections.",
        },
        {
          title: "Dynamic CMA Calculation Sheet",
          format: "Excel (.xlsx)",
          description:
            "Fully linked Excel workbook with zero hardcoded formula errors, ready for bank credit analyst review.",
        },
        {
          title: "Financial Ratio Analysis Report",
          format: "PDF (5–8 pages)",
          description:
            "Executive summary explaining ratio movements, MPBF justification, and fund flow movements.",
        },
      ],
    },
    workflow: {
      title: "Engagement Workflow",
      stages: [
        {
          stage: "Stage 1: Ingestion",
          action: "Extract historical audited data into standard banking formats.",
          outcome: "Historicals validated.",
        },
        {
          stage: "Stage 2: Modeling",
          action: "Build forward projections and calculate MPBF under Method I & II.",
          outcome: "Form I to VI drafted.",
        },
        {
          stage: "Stage 3: CA Verification",
          action: "Perform ratio checks and balance sheet reconciliation.",
          outcome: "CMA signed off for bank submission.",
        },
      ],
    },
    faqs: [
      {
        question: "Why do banks mandate a Current Ratio of at least 1.33:1 in CMA data?",
        answer:
          "Under Tandon Committee Method II, borrowers are required to finance at least 25% of their total Current Assets from long-term funds (Net Working Capital). Mathematically, (Current Assets) / (Current Liabilities) must be at least 1.33:1 to satisfy this condition and demonstrate liquidity safety.",
      },
      {
        question: "Can I use CMA data to apply for a term loan as well as working capital?",
        answer:
          "Yes. CMA data contains comprehensive balance sheet projections, fund flow statements, and debt service coverage ratios (DSCR), making it an integral component of both term loan and working capital credit appraisal dossiers.",
      },
    ],
    relatedServiceSlugs: [
      "dpr",
      "working-capital-advisory",
      "ratio-analysis",
      "financial-projections",
    ],
    disclaimer:
      "CMA Data preparation represents a mathematical and financial compilation based on borrower-provided historical accounts and future estimates. It does not constitute an audit, loan sanction, or guarantee of credit facility renewal by banks.",
    seo: {
      metaTitle: "CMA Data Preparation (Form I to VI) | VS Advisory",
      metaDescription:
        "Institutional CMA data preparation for bank loans in India: Form I to VI, MPBF calculations under Tandon Method II, and financial ratio benchmarking.",
      keywords: [
        "CMA data preparation",
        "CMA report for bank loan",
        "Form I to VI CMA data",
        "MPBF calculation Tandon Method",
        "working capital CMA format",
      ],
    },
  },

  {
    id: "financial-projections",
    slug: "financial-projections",
    title: "Financial Projections & Multi-Scenario Forecasting",
    shortTitle: "Financial Projections",
    categoryId: "project-reports",
    categoryName: "Project Reports",
    summary:
      "Integrated 5 to 10-year dynamic financial projections (P&L, Balance Sheet, Cash Flow) with variable capacity utilization, inflation adjustments, and tax modeling.",
    iconName: "TrendingUp",
    badge: "Multi-Scenario Modeling",
    hero: {
      headline: "Multi-Year Dynamic Financial Projections",
      subheadline:
        "Rigorous 5 to 10-year dynamic financial projections integrating Profit & Loss, Balance Sheet, and Cash Flow statements. Built with dynamic operational drivers, capacity curves, and tax schedules.",
      stats: [
        { label: "Projection Horizon", value: "5 to 10 Years Annual/Monthly" },
        { label: "Integration", value: "3-Statement Fully Linked" },
        { label: "Scenario Testing", value: "Base, Optimistic & Conservative" },
      ],
    },
    problem: {
      title: "The Problem with Static Spreadsheet Projections",
      description:
        "Most financial projections are created with hardcoded formulas that break as soon as a single variable changes. When lenders or investors ask what happens if sales drop by 15% or raw material costs rise by 10%, static spreadsheets fail to provide answers, destroying credibility.",
      painPoints: [
        "Unlinked financial statements where balance sheets do not automatically balance",
        "Hardcoded growth percentages without underlying operational capacity constraints",
        "Failure to account for working capital drag during rapid revenue expansion",
        "Inaccurate tax and depreciation modeling (mixing up Companies Act vs Income Tax Act rules)",
      ],
    },
    targetAudience: {
      title: "Who Needs Financial Projections?",
      description:
        "Essential for enterprises undertaking strategic planning, raising capital, or fulfilling bank requirements.",
      profiles: [
        {
          title: "Corporate Borrowers",
          criteria: "Submitting multi-year financial forecasts to bank consortiums or credit rating agencies.",
        },
        {
          title: "Growth Companies Raising Equity/Debt",
          criteria: "Demonstrating future earnings potential and cash flow generation to institutional investors.",
        },
        {
          title: "Business Promoters Planning Capex",
          criteria: "Evaluating the return on investment (ROI) and payback period of large projects.",
        },
      ],
    },
    whatVsProvides: {
      title: "Our Financial Projection Capabilities",
      description:
        "We build fully dynamic, linked financial models that reflect real-world operational complexities.",
      features: [
        {
          title: "3-Statement Integrated Model",
          description:
            "Profit & Loss, Balance Sheet, and Cash Flow statements dynamically linked so changes in operational drivers immediately cascade across all statements.",
        },
        {
          title: "Operational Driver Architecture",
          description:
            "Projections driven by realistic physical metrics: installed capacity, machine hours, employee headcount, raw material yields, and power consumption rates.",
        },
        {
          title: "Dual Depreciation & Tax Schedules",
          description:
            "Accurate computation of book depreciation (Companies Act 2013, Schedule II) vs tax depreciation (Income Tax Act, 1961, Section 32) and MAT/Corporate Tax calculations.",
        },
        {
          title: "Multi-Scenario Toggle",
          description:
            "Built-in scenario manager allowing instant switching between Base Case, Optimistic Case, and Stress/Conservative Case.",
        },
      ],
    },
    process: {
      title: "Our Projection Formulation Process",
      steps: [
        {
          stepNumber: 1,
          title: "Assumption Matrix Formulation",
          description:
            "Documenting every operational, pricing, cost, and tax assumption with management sign-off.",
          duration: "Days 1–2",
        },
        {
          stepNumber: 2,
          title: "Revenue & Cost Engine Construction",
          description:
            "Building capacity utilization curves, product-wise price realization, and variable cost schedules.",
          duration: "Days 3–4",
        },
        {
          stepNumber: 3,
          title: "Balance Sheet & Cash Flow Integration",
          description:
            "Modeling working capital cycles, debt amortization, capex deployment, and equity schedules.",
          duration: "Days 5–6",
        },
        {
          stepNumber: 4,
          title: "Stress Testing & Final Model Audit",
          description:
            "Verifying formula integrity, running error-check macros, and delivering the finalized model.",
          duration: "Day 7",
        },
      ],
    },
    documentsRequired: {
      title: "Information Required",
      categories: [
        {
          category: "Historical Data",
          items: [
            "Past 2–3 years audited financial statements with schedules",
            "Detailed breakdown of historical cost of goods sold (COGS) and overheads",
            "Current debt repayment schedules with interest rates and maturity dates",
          ],
        },
        {
          category: "Future Operational Plans",
          items: [
            "Target production volume, selling prices, and market expansion plans",
            "Planned capital expenditure quotations and implementation schedules",
            "Anticipated manpower additions and salary structure",
          ],
        },
      ],
    },
    deliverables: {
      title: "Projection Deliverables",
      items: [
        {
          title: "Integrated Financial Model",
          format: "Excel (.xlsx)",
          description:
            "Dynamic 5 to 10-year model with scenario toggles, error checks, and driver-based architecture.",
        },
        {
          title: "Financial Projection Report",
          format: "PDF (20–30 pages)",
          description:
            "Executive narrative explaining assumptions, financial statements, and key ratio trends.",
        },
      ],
    },
    workflow: {
      title: "Engagement Workflow",
      stages: [
        {
          stage: "Stage 1: Assumptions",
          action: "Formulate and lock assumption sheet with client leadership.",
          outcome: "Assumptions sheet approved.",
        },
        {
          stage: "Stage 2: Model Build",
          action: "Construct integrated 3-statement forecast model in Excel.",
          outcome: "Model v1.0 generated.",
        },
        {
          stage: "Stage 3: Review",
          action: "Run scenario toggles and deliver finalized projection dossier.",
          outcome: "Lender/investor-ready forecast package.",
        },
      ],
    },
    faqs: [
      {
        question: "Why must balance sheet depreciation differ from tax depreciation in financial projections?",
        answer:
          "Under Indian corporate law, companies must compute depreciation using the useful life method under Schedule II of the Companies Act, 2013 for their audited P&L. However, for income tax calculation, depreciation must be computed using written-down value (WDV) block rates under Section 32 of the Income Tax Act, 1961. Our models accurately reflect both schedules.",
      },
      {
        question: "Can these projections be customized for specific bank formats?",
        answer:
          "Yes. Our projection models are designed to easily export data into standard bank CMA formats, SIDBI appraisal sheets, or investor presentation formats.",
      },
    ],
    relatedServiceSlugs: [
      "financial-modelling",
      "cma",
      "dpr",
      "sensitivity-analysis",
    ],
    disclaimer:
      "Financial projections are forward-looking estimates based on assumptions provided by management. They do not constitute a guarantee of future operational performance, revenues, or profitability.",
    seo: {
      metaTitle: "Financial Projections & Multi-Scenario Modeling | VS Advisory",
      metaDescription:
        "Dynamic 5 to 10-year integrated financial projections (P&L, Balance Sheet, Cash Flow) with multi-scenario toggles for Indian MSMEs and corporate borrowers.",
      keywords: [
        "financial projections India",
        "3 statement financial model",
        "projected balance sheet",
        "cash flow forecasting MSME",
        "multi scenario financial model",
      ],
    },
  },

  {
    id: "financial-modelling",
    slug: "financial-modelling",
    title: "Financial Modelling & DCF Valuation",
    shortTitle: "Financial Modelling",
    categoryId: "project-reports",
    categoryName: "Project Reports",
    summary:
      "Institutional-grade financial models featuring Discounted Cash Flow (DCF) valuation, Internal Rate of Return (IRR), Weighted Average Cost of Capital (WACC), and debt sizing.",
    iconName: "BarChart3",
    badge: "DCF & Valuation",
    hero: {
      headline: "Institutional Financial Modelling & DCF Valuation",
      subheadline:
        "Dynamic, audit-ready financial models incorporating Discounted Cash Flow (DCF) valuation, Project and Equity IRR, Weighted Average Cost of Capital (WACC), and debt sculpting.",
      stats: [
        { label: "Valuation Methods", value: "DCF, NAV, Comparable Multiples" },
        { label: "Capital Metrics", value: "WACC, Project IRR, Equity IRR" },
        { label: "Architecture", value: "Modular, Audit-Ready, Scalable" },
      ],
    },
    problem: {
      title: "The Danger of Flawed Financial Models",
      description:
        "Financial models are decision-making instruments for multi-crore capital allocations. Models riddled with circular references, hardcoded assumptions, or incorrect discounting formulas lead to catastrophic capital misallocation or immediate rejection by institutional investors and credit funds.",
      painPoints: [
        "Circular calculation errors that crash spreadsheets when debt sculpting is attempted",
        "Incorrect WACC computation using arbitrary cost of equity instead of CAPM models",
        "Failure to separate Project IRR (unlevered cash flows) from Equity IRR (levered cash flows)",
        "Unclear assumption sheets making it impossible for lenders or auditors to verify inputs",
      ],
    },
    targetAudience: {
      title: "Who Needs Institutional Financial Modelling?",
      description:
        "Crucial for enterprises raising structured debt, mezzanine finance, private equity, or undertaking joint ventures.",
      profiles: [
        {
          title: "Infrastructure & Industrial Promoters",
          criteria: "Evaluating large-scale capital projects requiring complex debt sculpting and IRR benchmarks.",
        },
        {
          title: "Enterprises Raising Private Equity or Venture Debt",
          criteria: "Needing defensible DCF valuations and cap table models for investor negotiations.",
        },
        {
          title: "Mergers, Acquisitions & Joint Ventures",
          criteria: "Valuing target business entities and analyzing post-merger accretion/dilution.",
        },
      ],
    },
    whatVsProvides: {
      title: "Our Financial Modelling Standards",
      description:
        "Every model we engineer adheres to international financial modeling best practices (FAST standard).",
      features: [
        {
          title: "Discounted Cash Flow (DCF) Valuation",
          description:
            "Rigorous computation of Free Cash Flow to Firm (FCFF) and Free Cash Flow to Equity (FCFE) with terminal value modeling (perpetual growth and exit multiple methods).",
        },
        {
          title: "Project IRR & Equity IRR Computation",
          description:
            "Precise calculation of unlevered project return vs levered equity returns to ensure appropriate risk-reward balance.",
        },
        {
          title: "WACC & Capital Asset Pricing Model (CAPM)",
          description:
            "Cost of equity computation incorporating risk-free rates (10-year Indian G-Sec), industry beta, and equity risk premiums.",
        },
        {
          title: "Debt Sculpting & Amortization Schedules",
          description:
            "Custom debt sizing algorithms that adjust principal repayments to match seasonal or ramping cash flows.",
        },
      ],
    },
    process: {
      title: "Our Financial Modelling Workflow",
      steps: [
        {
          stepNumber: 1,
          title: "Model Architecture & Scope",
          description:
            "Defining model structure, timeline granularity (monthly vs quarterly vs annual), and key valuation objectives.",
          duration: "Days 1–2",
        },
        {
          stepNumber: 2,
          title: "Core Operational Engine Build",
          description:
            "Building modular tabs: revenue drivers, operating costs, working capital, capex, and tax schedules.",
          duration: "Days 3–5",
        },
        {
          stepNumber: 3,
          title: "Valuation, Returns & Debt Sizing",
          description:
            "Integrating WACC calculation, DCF tables, Project/Equity IRR matrices, and debt service coverage.",
          duration: "Days 6–8",
        },
        {
          stepNumber: 4,
          title: "Stress Testing, Sensitivity & Documentation",
          description:
            "Building 2D sensitivity data tables, conducting audit checks, and writing model user documentation.",
          duration: "Days 9–11",
        },
      ],
    },
    documentsRequired: {
      title: "Information Required",
      categories: [
        {
          category: "Operational & Commercial",
          items: [
            "Historical audited financials (P&L, Balance Sheet, Cash Flow) for past 3–5 years",
            "Detailed business plan, market research, and management guidance",
            "Itemized capital expenditure quotes and delivery schedules",
          ],
        },
        {
          category: "Debt & Equity Parameters",
          items: [
            "Existing loan terms, interest rates, and covenant limits",
            "Target debt-equity ratio and expected cost of debt",
            "Target investor return thresholds or hurdle rates",
          ],
        },
      ],
    },
    deliverables: {
      title: "Modelling Deliverables",
      items: [
        {
          title: "Institutional Financial Model",
          format: "Excel (.xlsx)",
          description:
            "Fully dynamic, audit-ready model built to FAST standards with zero hardcoded formulas in calculation blocks.",
        },
        {
          title: "Valuation & Feasibility Report",
          format: "PDF (25–35 pages)",
          description:
            "Executive documentation explaining methodology, DCF valuation results, WACC derivation, and IRR metrics.",
        },
      ],
    },
    workflow: {
      title: "Engagement Workflow",
      stages: [
        {
          stage: "Stage 1: Architecture",
          action: "Design model tabs, assumption structure, and valuation logic.",
          outcome: "Architecture approved.",
        },
        {
          stage: "Stage 2: Construction",
          action: "Build integrated 3-statement and valuation modules in Excel.",
          outcome: "Model v1.0 ready for review.",
        },
        {
          stage: "Stage 3: Validation",
          action: "Stress-test formulas, run sensitivity tables, and finalize documentation.",
          outcome: "Institutional model delivered.",
        },
      ],
    },
    faqs: [
      {
        question: "What is the difference between Project IRR and Equity IRR?",
        answer:
          "Project IRR (Unlevered IRR) measures the return generated by the project's overall cash flows before considering how it is financed (debt vs equity). Equity IRR (Levered IRR) measures the return specifically earned by the equity shareholders after accounting for debt service (principal and interest payments).",
      },
      {
        question: "How do you determine the Cost of Equity for an Indian private company?",
        answer:
          "We use the Capital Asset Pricing Model (CAPM): Cost of Equity = Risk-Free Rate (from current 10-year Indian Government Bond yields) + (Beta * Equity Risk Premium) + Size/Illiquidity Premium appropriate for the enterprise.",
      },
    ],
    relatedServiceSlugs: [
      "financial-projections",
      "sensitivity-analysis",
      "dpr",
      "ratio-analysis",
    ],
    disclaimer:
      "Financial models and DCF valuations are analytical tools based on mathematical logic and user-provided assumptions. They do not constitute formal fairness opinions, statutory audit certificates, or guarantees of valuation realization in market transactions.",
    seo: {
      metaTitle: "Financial Modelling & DCF Valuation | VS Advisory",
      metaDescription:
        "Institutional financial models with DCF valuation, Project IRR, Equity IRR, WACC calculations, and debt sizing for Indian enterprises and investors.",
      keywords: [
        "financial modelling India",
        "DCF valuation model",
        "project IRR calculation",
        "WACC computation India",
        "financial model consultant",
      ],
    },
  },

  {
    id: "ratio-analysis",
    slug: "ratio-analysis",
    title: "Financial Ratio Analysis & Bank Covenant Benchmarking",
    shortTitle: "Ratio Analysis",
    categoryId: "project-reports",
    categoryName: "Project Reports",
    summary:
      "Comprehensive diagnostic benchmarking of key credit and operational ratios (DSCR, ISCR, Current Ratio, TOL/TNW, ROCE) against Indian commercial banking standards.",
    iconName: "PieChart",
    badge: "Credit Ratio Benchmarking",
    hero: {
      headline: "Bank Covenant Benchmarking & Ratio Diagnostics",
      subheadline:
        "Analyze your enterprise's financial health through the exact lens of a bank credit underwriter. We evaluate liquidity, leverage, debt servicing, and profitability ratios against standard banking tolerance thresholds.",
      stats: [
        { label: "Core Ratios", value: "DSCR, ISCR, TOL/TNW, CR" },
        { label: "Benchmarking", value: "Public & Private Bank Norms" },
        { label: "Diagnostics", value: "Early Warning Signals (EWS)" },
      ],
    },
    problem: {
      title: "Why Inadequate Financial Ratios Trigger Loan Rejections",
      description:
        "Commercial bank credit committees operate with strict risk-rating matrices. If a company's Debt Service Coverage Ratio (DSCR) dips below 1.33 or Total Outside Liabilities to Tangible Net Worth (TOL/TNW) exceeds 3.5:1, the loan application is rejected or downgraded, even if the business is profitable.",
      painPoints: [
        "Failure to meet bank minimum DSCR (1.50–1.75x) leading to loan rejection or increased margin demands",
        "Excessive TOL/TNW ratios caused by high trade payables or low equity capital base",
        "Current ratios falling below 1.33:1 resulting in penal interest on working capital limits",
        "Lack of awareness of Early Warning Signals (EWS) monitored by bank credit rating systems",
      ],
    },
    targetAudience: {
      title: "Who Needs Financial Ratio Analysis?",
      description:
        "Essential for business promoters preparing for bank appraisals, credit rating reviews, or financial restructuring.",
      profiles: [
        {
          title: "Loan Applicants",
          criteria: "Pre-testing their financial statements before submitting proposals to bank credit committees.",
        },
        {
          title: "Enterprises with Credit Rating Reviews",
          criteria: "Preparing for annual surveillance by CRISIL, ICRA, CARE, or India Ratings.",
        },
        {
          title: "Companies Facing Penal Interest",
          criteria: "Identifying specific covenant breaches causing penal rates from current lenders.",
        },
      ],
    },
    whatVsProvides: {
      title: "Comprehensive Ratio Benchmarking",
      description:
        "We analyze all 4 pillars of banking credit evaluation.",
      features: [
        {
          title: "Debt Service & Solvency Ratios",
          description:
            "Computation and stress testing of Gross DSCR, Net DSCR, and Interest Service Coverage Ratio (ISCR).",
        },
        {
          title: "Liquidity & Working Capital Ratios",
          description:
            "Evaluation of Current Ratio, Quick Ratio, Cash Ratio, and Defensive Interval Ratio against RBI Tandon norms.",
        },
        {
          title: "Leverage & Capital Structure Ratios",
          description:
            "Granular analysis of Debt-Equity Ratio, TOL/TNW, Total Debt to EBITDA, and Fixed Asset Coverage Ratio (FACR).",
        },
        {
          title: "Profitability & Asset Turnover Ratios",
          description:
            "Benchmarking Operating Profit Margin (EBIDTA %), Net Profit Margin (PAT %), Return on Capital Employed (ROCE), and Return on Net Worth (RONW).",
        },
      ],
    },
    process: {
      title: "Our Ratio Diagnostic Process",
      steps: [
        {
          stepNumber: 1,
          title: "Financial Statement Ingestion",
          description:
            "Parsing past 3 years audited balance sheets, P&L statements, and notes to accounts.",
          duration: "Day 1",
        },
        {
          stepNumber: 2,
          title: "Ratio Calculation & Normalization",
          description:
            "Computing standardized ratios, adjusting for non-operating items, revaluation reserves, and unsecured promoter loans.",
          duration: "Days 2–3",
        },
        {
          stepNumber: 3,
          title: "Banking Norm Comparison",
          description:
            "Benchmarking client metrics against standard Indian banking criteria and industry cluster medians.",
          duration: "Day 4",
        },
        {
          stepNumber: 4,
          title: "Remediation & Action Plan",
          description:
            "Delivering a concrete action plan to improve weak ratios prior to formal bank submission.",
          duration: "Day 5",
        },
      ],
    },
    documentsRequired: {
      title: "Documents Required",
      categories: [
        {
          category: "Financial Statements",
          items: [
            "Audited financial statements for the past 3 fiscal years",
            "Latest provisional financial statements and bank statements",
            "Existing bank sanction letters containing covenant thresholds",
          ],
        },
      ],
    },
    deliverables: {
      title: "Ratio Analysis Deliverables",
      items: [
        {
          title: "Credit Ratio Diagnostic Report",
          format: "PDF (15–20 pages)",
          description:
            "Comprehensive report showing historical ratio trends, banking benchmark comparisons, and red flag warnings.",
        },
        {
          title: "Ratio Improvement Action Plan",
          format: "PDF (5–8 pages)",
          description:
            "Strategic recommendations to restructure debt, inject quasi-equity, and clean up receivables to meet lender thresholds.",
        },
      ],
    },
    workflow: {
      title: "Engagement Workflow",
      stages: [
        {
          stage: "Stage 1: Calculation",
          action: "Calculate full suite of 25+ credit and operating ratios.",
          outcome: "Ratio matrix generated.",
        },
        {
          stage: "Stage 2: Benchmarking",
          action: "Compare ratios against bank credit scoring models.",
          outcome: "Gap analysis completed.",
        },
        {
          stage: "Stage 3: Remediation",
          action: "Provide concrete accounting and financial restructuring advice.",
          outcome: "Remediation roadmap delivered.",
        },
      ],
    },
    faqs: [
      {
        question: "How do banks treat unsecured loans from promoters when calculating TOL/TNW?",
        answer:
          "If unsecured loans from promoters are subordinated to bank debt (i.e., promoters give a written undertaking not to withdraw the funds during the loan tenure), most banks treat these loans as 'Quasi-Equity', adding them to Tangible Net Worth (TNW) rather than outside liabilities, dramatically improving the TOL/TNW ratio.",
      },
      {
        question: "What is an acceptable ISCR for bank financing?",
        answer:
          "Banks generally require an Interest Service Coverage Ratio (ISCR = EBITDA / Interest) of at least 2.0x to 2.5x. An ISCR below 1.5x indicates significant risk that operating profit may be insufficient to service interest obligations.",
      },
    ],
    relatedServiceSlugs: [
      "cma",
      "financial-modelling",
      "sensitivity-analysis",
      "working-capital-advisory",
    ],
    disclaimer:
      "Financial ratio analysis provides analytical diagnostics based on financial data. It does not constitute an audit or guarantee of favorable credit rating or bank loan approval.",
    seo: {
      metaTitle: "Financial Ratio Analysis & Bank Benchmarking | VS Advisory",
      metaDescription:
        "Comprehensive credit ratio analysis for Indian MSMEs: DSCR, ISCR, TOL/TNW, and Current Ratio benchmarking against commercial bank underwriting standards.",
      keywords: [
        "financial ratio analysis India",
        "DSCR calculation for bank loan",
        "TOL TNW ratio MSME",
        "bank covenant benchmarking",
        "credit appraisal ratios",
      ],
    },
  },

  {
    id: "sensitivity-analysis",
    slug: "sensitivity-analysis",
    title: "Sensitivity & Scenario Stress Testing",
    shortTitle: "Sensitivity Analysis",
    categoryId: "project-reports",
    categoryName: "Project Reports",
    summary:
      "Multi-variable stress testing evaluating the resilience of project cash flows against raw material price shocks, capacity underutilization, and interest rate hikes.",
    iconName: "Sliders",
    badge: "Risk Stress Testing",
    hero: {
      headline: "Multi-Variable Sensitivity & Stress Testing",
      subheadline:
        "Test your project's financial resilience before commercial lenders do. We simulate the impact of raw material price hikes, revenue shocks, delay in commissioning, and interest rate volatility on your debt service capacity.",
      stats: [
        { label: "Stress Variables", value: "Sales, Costs, Capex, Rates" },
        { label: "Testing Range", value: "±5%, ±10%, ±15% Variances" },
        { label: "Output Metric", value: "Breakeven Point & Minimum DSCR" },
      ],
    },
    problem: {
      title: "Why Unstressed Project Plans Fail in Reality",
      description:
        "Real-world business environments are volatile: commodity prices fluctuate, supply chains face disruptions, and project commissioning gets delayed. When financial models only show optimistic base-case scenarios, lenders lose confidence in the promoter's risk awareness.",
      painPoints: [
        "Unawareness of the exact Breakeven Point (BEP) capacity utilization percentage",
        "Vulnerability to a 5% increase in key raw material costs wiping out debt service ability",
        "Lack of contingency planning for 6-month delays in commercial operations (COD)",
        "Rejection by bank risk committees due to absence of institutional sensitivity tables",
      ],
    },
    targetAudience: {
      title: "Who Needs Sensitivity Analysis?",
      description:
        "Crucial for manufacturing units with volatile raw material inputs, commodity businesses, and capital-intensive infrastructure.",
      profiles: [
        {
          title: "Manufacturing Units with Commodity Feedstock",
          criteria: "Businesses dependent on steel, chemicals, polymers, or agricultural commodities.",
        },
        {
          title: "Project Promoters Submitting to Bank Committees",
          criteria: "Fulfilling mandatory lender requirements for sensitivity matrices in DPRs.",
        },
        {
          title: "Enterprises Evaluating Capex Expansion",
          criteria: "Testing how much downside risk the enterprise can absorb without defaulting on debt.",
        },
      ],
    },
    whatVsProvides: {
      title: "Our Stress Testing Capabilities",
      description:
        "We subject your financial models to rigorous multi-variable stress testing.",
      features: [
        {
          title: "Raw Material & Power Cost Sensitivity",
          description:
            "Simulating the impact of +5%, +10%, and +15% increases in major input costs on Gross Profit and EBITDA.",
        },
        {
          title: "Sales Realization & Capacity Underutilization",
          description:
            "Stress-testing cash flows at 40%, 50%, 60%, and 70% capacity utilization to identify the operational cash breakeven point.",
        },
        {
          title: "Interest Rate Shock Testing",
          description:
            "Modeling the impact of 100 bps to 250 bps interest rate hikes on annual debt service and net profitability.",
        },
        {
          title: "Project Delay & Cost Overrun Scenarios",
          description:
            "Simulating a 6 to 12-month delay in Commercial Operation Date (COD) and a 10% capex overrun to verify adequacy of interest during construction (IDC).",
        },
      ],
    },
    process: {
      title: "Our Sensitivity Testing Process",
      steps: [
        {
          stepNumber: 1,
          title: "Baseline Model Audit",
          description:
            "Reviewing underlying financial model logic and ensuring all inputs are dynamic.",
          duration: "Day 1",
        },
        {
          stepNumber: 2,
          title: "Stress Factor Definition",
          description:
            "Selecting critical risk variables (feedstock costs, sales price realization, interest rates).",
          duration: "Day 2",
        },
        {
          stepNumber: 3,
          title: "2D Data Table & Matrix Simulation",
          description:
            "Executing Excel multi-variable data tables to compute DSCR, IRR, and payback under 20+ scenario combinations.",
          duration: "Days 3–4",
        },
        {
          stepNumber: 4,
          title: "Risk Report & Mitigants Formulation",
          description:
            "Compiling the sensitivity report and drafting actionable risk mitigants for bank presentation.",
          duration: "Day 5",
        },
      ],
    },
    documentsRequired: {
      title: "Documents Required",
      categories: [
        {
          category: "Financial Model & Inputs",
          items: [
            "Current dynamic financial model or project cost breakdown",
            "Historical price volatility data for key raw materials",
            "Proposed debt repayment terms and interest rates",
          ],
        },
      ],
    },
    deliverables: {
      title: "Deliverables",
      items: [
        {
          title: "Sensitivity Analysis Matrix",
          format: "PDF + Excel (.xlsx)",
          description:
            "2D sensitivity tables showing DSCR and Project IRR variations across multiple operational stresses.",
        },
        {
          title: "Breakeven & Downside Risk Report",
          format: "PDF (10–15 pages)",
          description:
            "Executive summary detailing operational breakeven utilization and proposed risk mitigants for lenders.",
        },
      ],
    },
    workflow: {
      title: "Engagement Workflow",
      stages: [
        {
          stage: "Stage 1: Setup",
          action: "Identify key risk drivers and define stress testing boundaries.",
          outcome: "Testing parameters locked.",
        },
        {
          stage: "Stage 2: Simulation",
          action: "Run multi-variable sensitivity tables and calculate breakeven.",
          outcome: "Sensitivity matrices generated.",
        },
        {
          stage: "Stage 3: Reporting",
          action: "Author risk mitigation commentary for lender presentation.",
          outcome: "Dossier ready for bank review.",
        },
      ],
    },
    faqs: [
      {
        question: "Why do commercial banks require a sensitivity analysis in the DPR?",
        answer:
          "Bank credit committees need to know the 'margin of safety' before project cash flows become inadequate to service debt. A sensitivity analysis proves to the bank that even if raw material costs rise by 10% or sales volume drops by 10%, the project will still maintain a DSCR above 1.15 to 1.25.",
      },
      {
        question: "What is cash breakeven point vs financial breakeven point?",
        answer:
          "Cash breakeven point is the level of production where revenue covers all cash operating expenses. Financial breakeven point is the higher production level where revenue covers cash operating expenses plus term loan principal and interest payments.",
      },
    ],
    relatedServiceSlugs: [
      "financial-modelling",
      "dpr",
      "ratio-analysis",
      "project-feasibility",
    ],
    disclaimer:
      "Sensitivity analysis simulates hypothetical financial scenarios based on mathematical variations. It does not predict future market outcomes or guarantee project viability under adverse economic conditions.",
    seo: {
      metaTitle: "Sensitivity Analysis & Stress Testing | VS Advisory",
      metaDescription:
        "Multi-variable financial sensitivity analysis and scenario stress testing for Indian MSMEs and project finance loan applications.",
      keywords: [
        "sensitivity analysis India",
        "financial stress testing",
        "DSCR sensitivity matrix",
        "breakeven analysis project report",
        "downside risk modeling",
      ],
    },
  },

  // =========================================================================
  // CATEGORY 4: COMPLIANCE
  // =========================================================================
  {
    id: "gst-support",
    slug: "gst-support",
    title: "GST Advisory & Bank Reconciliation Support",
    shortTitle: "GST Support",
    categoryId: "compliance",
    categoryName: "Compliance",
    summary:
      "Comprehensive GST reconciliation (GSTR-1 vs GSTR-3B vs GSTR-2B), turnover verification for bank loans, input tax credit (ITC) audits, and departmental representation.",
    iconName: "ShieldCheck",
    badge: "GST Reconciliation",
    hero: {
      headline: "GST Advisory & Bank-Ready Turnover Reconciliation",
      subheadline:
        "Ensure your GST filings match your audited books and bank statements. In today's digital lending environment, a single mismatch between GSTR-3B and GSTR-1 can trigger instant loan rejection.",
      stats: [
        { label: "Reconciliation", value: "GSTR-1 vs GSTR-3B vs 2B" },
        { label: "Audit Readiness", value: "Input Tax Credit (ITC) Clean-up" },
        { label: "Turnover Verification", value: "Bank & Income Tax Alignment" },
      ],
    },
    problem: {
      title: "Why GST Mismatches Halt Bank Credit Sanctions",
      description:
        "Modern Indian banks and underwriting algorithms automatically cross-verify a borrower's declared turnover against GST portal data. Discrepancies between GSTR-1, GSTR-3B, bank credits, and audited financials raise immediate fraud and tax evasion red flags.",
      painPoints: [
        "Discrepancies between reported turnover in audited P&L and GST filings",
        "Blocked Input Tax Credit (ITC) due to non-compliant vendors (GSTR-2B mismatches)",
        "Under-reporting of sales in GSTR-3B compared to GSTR-1 resulting in tax notices",
        "Departmental show-cause notices (ASMT-10) causing banks to halt credit disbursement",
      ],
    },
    targetAudience: {
      title: "Who Needs GST Advisory Support?",
      description:
        "Essential for all GST-registered enterprises preparing for credit assessment or resolving tax notices.",
      profiles: [
        {
          title: "Loan Applicants",
          criteria: "Reconciling trailing 12 months GST returns with bank statements prior to loan submission.",
        },
        {
          title: "Manufacturing & Trading MSMEs",
          criteria: "Maximizing eligible Input Tax Credit (ITC) and resolving vendor reconciliation gaps.",
        },
        {
          title: "Enterprises Facing GST Departmental Inquiries",
          criteria: "Drafting technical replies to ASMT-10, DRC-01, or audit intimations.",
        },
      ],
    },
    whatVsProvides: {
      title: "Our GST Advisory Services",
      description:
        "We align your indirect tax compliance with banking and statutory standards.",
      features: [
        {
          title: "Tri-Way Turnover Reconciliation",
          description:
            "Reconciling GSTR-1 (outward supplies), GSTR-3B (monthly tax paid), and bank statement credits to eliminate discrepancies.",
        },
        {
          title: "Input Tax Credit (ITC) Audit & Recovery",
          description:
            "Auditing GSTR-2B against purchase registers to identify unclaimed ITC and prevent ineligible credit claims.",
        },
        {
          title: "Bank Turnover Certification Dossier",
          description:
            "Preparing a clean, reconciled turnover summary ready for bank credit underwriting inspection.",
        },
        {
          title: "Departmental Notice Response Advisory",
          description:
            "Drafting detailed technical replies for ASMT-10 scrutiny notices, ITC mismatch notices, and audit findings.",
        },
      ],
    },
    process: {
      title: "Our GST Support Methodology",
      steps: [
        {
          stepNumber: 1,
          title: "Data Extraction & Portal Sync",
          description:
            "Downloading GSTR-1, GSTR-3B, GSTR-2B, and electronic cash/credit ledgers for the target period.",
          duration: "Days 1–2",
        },
        {
          stepNumber: 2,
          title: "Reconciliation & Discrepancy Identification",
          description:
            "Running automated comparison scripts to detect invoice-level tax and turnover variations.",
          duration: "Days 3–4",
        },
        {
          stepNumber: 3,
          title: "Adjustment & Rectification Filing",
          description:
            "Guiding client through DRC-03 voluntary payments, credit notes, or amendment filings.",
          duration: "Days 5–6",
        },
        {
          stepNumber: 4,
          title: "Final Bank Reconciled Certificate",
          description:
            "Issuing comprehensive turnover reconciliation certificate for credit appraisal.",
          duration: "Day 7",
        },
      ],
    },
    documentsRequired: {
      title: "Documents Required",
      categories: [
        {
          category: "GST & Books Data",
          items: [
            "GST portal login credentials or downloaded JSON/Excel filings (GSTR-1, 3B, 2B)",
            "Sales and purchase registers exported from accounting software (Tally, Zoho, etc.)",
            "Audited financial statements and tax audit reports for the relevant years",
            "Bank statements for all current accounts for the trailing 12 months",
          ],
        },
      ],
    },
    deliverables: {
      title: "Deliverables",
      items: [
        {
          title: "Tri-Way GST Reconciliation Report",
          format: "Excel + PDF",
          description:
            "Granular reconciliation of GSTR-1 vs 3B vs 2B with identified variance explanations.",
        },
        {
          title: "Bank Turnover Compliance Dossier",
          format: "PDF (10–15 pages)",
          description:
            "Certified turnover summary matching bank credits with GST returns for credit appraisal.",
        },
      ],
    },
    workflow: {
      title: "Engagement Workflow",
      stages: [
        {
          stage: "Stage 1: Audit",
          action: "Ingest GST returns and purchase/sales registers.",
          outcome: "Mismatch report generated.",
        },
        {
          stage: "Stage 2: Rectification",
          action: "Advise on corrective filings and ITC adjustments.",
          outcome: "Discrepancies reconciled.",
        },
        {
          stage: "Stage 3: Bank Certification",
          action: "Deliver reconciled turnover report for credit underwriters.",
          outcome: "Bank-ready GST dossier.",
        },
      ],
    },
    faqs: [
      {
        question: "Why do banks compare my bank statement deposits with my GSTR-3B turnover?",
        answer:
          "Banks use this comparison to verify whether the business's actual cash receipts match its declared tax sales. A significant gap suggests either unrecorded cash sales (tax evasion) or inflated bank turnover (money circulation), both of which trigger red flags in credit algorithms.",
      },
      {
        question: "Can an unresolved GST notice stop my loan disbursement?",
        answer:
          "Yes. Bank credit administration departments routinely perform public portal checks. An active demand notice or pending tax recovery proceedings can freeze disbursement until a formal reply or stay order is submitted.",
      },
    ],
    relatedServiceSlugs: [
      "income-tax-support",
      "cma",
      "working-capital-advisory",
      "corporate-compliance",
    ],
    disclaimer:
      "GST advisory services provide reconciliation, compliance guidance, and document preparation. They do not constitute formal legal representation before statutory tax authorities or a guarantee against departmental audit assessments.",
    seo: {
      metaTitle: "GST Advisory & Bank Reconciliation Support | VS Advisory",
      metaDescription:
        "Comprehensive GST reconciliation (GSTR-1 vs 3B vs 2B) and bank turnover verification for MSMEs and corporate borrowers in India.",
      keywords: [
        "GST reconciliation for bank loan",
        "GSTR-1 vs GSTR-3B mismatch",
        "GST turnover verification",
        "input tax credit audit",
        "GST advisory India",
      ],
    },
  },

  {
    id: "income-tax-support",
    slug: "income-tax-support",
    title: "Corporate Income Tax Support & Debt Structuring",
    shortTitle: "Income Tax Support",
    categoryId: "compliance",
    categoryName: "Compliance",
    summary:
      "Strategic corporate tax advisory aligning income tax filings with bank credit requirements, depreciation scheduling, Section 43B compliance, and tax-efficient capital structuring.",
    iconName: "FileCheck",
    badge: "Corporate Tax Strategy",
    hero: {
      headline: "Corporate Income Tax Support & Credit Alignment",
      subheadline:
        "Harmonize your corporate tax filings with your banking and credit aspirations. We ensure depreciation schedules, interest deductions, and promoter remuneration are structured for maximum tax efficiency and bankability.",
      stats: [
        { label: "Depreciation Strategy", value: "Section 32 WDV Optimization" },
        { label: "Interest Deductibility", value: "Section 43B & 94B Compliance" },
        { label: "Tax Filing Alignment", value: "ITR-5 / ITR-6 Credit Readiness" },
      ],
    },
    problem: {
      title: "The Conflict Between Tax Minimization and Bank Credit",
      description:
        "Many business owners aggressively minimize declared profits on their tax returns to reduce income tax liabilities. However, when they approach banks for large project loans, the same depressed profits result in poor Debt Service Coverage Ratios (DSCR) and immediate loan rejection.",
      painPoints: [
        "Artificially low profits on ITRs failing bank debt-servicing thresholds",
        "Disallowed interest deductions under Section 43B due to delayed statutory payments",
        "Unreconciled differences between Tax Audit Report (Form 3CD) and financial statements",
        "Tax assessment demands on MCA portal blocking bank credit clearances",
      ],
    },
    targetAudience: {
      title: "Who Needs Corporate Income Tax Advisory?",
      description:
        "Vital for private limited companies, LLPs, and partnerships balancing tax efficiency with credit readiness.",
      profiles: [
        {
          title: "Enterprises Planning Major Debt Raising",
          criteria: "Structuring balance sheets to show legitimate financial strength for bank appraisal.",
        },
        {
          title: "Manufacturing Companies with High Capex",
          criteria: "Maximizing additional depreciation benefits under Section 32(1)(iia).",
        },
        {
          title: "Promoter-Driven Entities",
          criteria: "Optimizing the mix between promoter salary, interest on capital, and retained earnings.",
        },
      ],
    },
    whatVsProvides: {
      title: "Our Corporate Tax Advisory Scope",
      description:
        "We unite tax optimization with institutional banking readiness.",
      features: [
        {
          title: "Depreciation & Capex Tax Shield Optimization",
          description:
            "Structuring plant & machinery investments to claim 20% additional depreciation under Section 32, maximizing cash retention while maintaining healthy book profits.",
        },
        {
          title: "Section 43B Statutory Payment Compliance",
          description:
            "Ensuring interest on bank loans, employee benefits, and MSME vendor payments are deposited before filing deadlines to prevent tax disallowances.",
        },
        {
          title: "Tax Audit (Form 3CD) & ITR Reconciliation",
          description:
            "Cross-verifying Form 3CD clauses with audited balance sheets to ensure zero inconsistencies during bank credit review.",
        },
        {
          title: "Quasi-Equity & Promoter Loan Structuring",
          description:
            "Structuring unsecured promoter loans to comply with Section 269SS/T while satisfying bank net-worth criteria.",
        },
      ],
    },
    process: {
      title: "Our Corporate Tax Methodology",
      steps: [
        {
          stepNumber: 1,
          title: "Tax Return & 3CD Diagnostic",
          description:
            "Reviewing past 3 years ITR filings, Form 3CD reports, and pending assessment orders.",
          duration: "Days 1–3",
        },
        {
          stepNumber: 2,
          title: "Strategic Profit & Tax Harmonization",
          description:
            "Balancing allowable deductions with required DSCR targets for upcoming loan applications.",
          duration: "Days 4–6",
        },
        {
          stepNumber: 3,
          title: "Depreciation & Section 43B Alignment",
          description:
            "Formulating optimal depreciation schedules and verifying timely discharge of statutory liabilities.",
          duration: "Days 7–9",
        },
        {
          stepNumber: 4,
          title: "Credit-Aligned Tax Dossier",
          description:
            "Compiling reconciled tax returns and CA certificates for bank credit underwriting.",
          duration: "Days 10–12",
        },
      ],
    },
    documentsRequired: {
      title: "Documents Required",
      categories: [
        {
          category: "Tax Filings & Accounts",
          items: [
            "Past 3 years ITR acknowledgments and complete computation of income",
            "Form 3CA/3CB and Form 3CD Tax Audit reports for past 3 years",
            "Fixed asset registers showing historical WDV and additions",
            "Details of pending tax demands or rectification applications on the IT portal",
          ],
        },
      ],
    },
    deliverables: {
      title: "Deliverables",
      items: [
        {
          title: "Corporate Tax & Credit Alignment Plan",
          format: "PDF (15–20 pages)",
          description:
            "Strategic advisory document detailing tax-saving opportunities while maintaining optimal banking ratios.",
        },
        {
          title: "Depreciation & Tax Shield Schedule",
          format: "Excel (.xlsx)",
          description:
            "Detailed multi-year model tracking Companies Act vs Income Tax depreciation and cash tax liabilities.",
        },
      ],
    },
    workflow: {
      title: "Engagement Workflow",
      stages: [
        {
          stage: "Stage 1: Review",
          action: "Analyze past ITR computations and 3CD reports.",
          outcome: "Diagnostic review delivered.",
        },
        {
          stage: "Stage 2: Strategy",
          action: "Design tax-efficient capital and depreciation structure.",
          outcome: "Tax strategy locked.",
        },
        {
          stage: "Stage 3: Bank Alignment",
          action: "Prepare documentation reconciling tax accounts with bank proposals.",
          outcome: "Bank-ready tax package.",
        },
      ],
    },
    faqs: [
      {
        question: "Can a manufacturing company claim additional depreciation in the first year of machinery commissioning?",
        answer:
          "Yes. Under Section 32(1)(iia) of the Income Tax Act, a new manufacturing enterprise or an expanding unit acquiring new plant and machinery is eligible to claim an additional 20% depreciation in the year of commissioning (or 10% if used for less than 180 days, with the balance allowed in the subsequent year).",
      },
      {
        question: "How does Section 43B(h) affect payments to MSME suppliers?",
        answer:
          "Section 43B(h) mandates that any sum payable to a micro or small enterprise beyond the time limit specified in the MSMED Act (within 15 days or maximum 45 days under written agreement) will be disallowed as an expense in the current financial year and taxed as income. We help you establish automated payment workflows to ensure complete compliance.",
      },
    ],
    relatedServiceSlugs: [
      "gst-support",
      "corporate-compliance",
      "cma",
      "financial-modelling",
    ],
    disclaimer:
      "Corporate income tax advisory provides strategic analysis and accounting recommendations. It does not replace statutory audit opinions or represent guarantees against tax department scrutiny or reassessment.",
    seo: {
      metaTitle: "Corporate Income Tax Support & Debt Structuring | VS Advisory",
      metaDescription:
        "Corporate income tax advisory for Indian MSMEs: Section 32 additional depreciation, Section 43B compliance, and tax-efficient bank loan preparation.",
      keywords: [
        "corporate income tax advisory",
        "Section 32 additional depreciation",
        "Section 43B MSME compliance",
        "income tax for bank loans",
        "tax audit Form 3CD reconciliation",
      ],
    },
  },

  {
    id: "business-registrations",
    slug: "business-registrations",
    title: "Business Registrations & Statutory Licensing",
    shortTitle: "Business Registrations",
    categoryId: "compliance",
    categoryName: "Compliance",
    summary:
      "End-to-end statutory registration services: Private Limited / LLP incorporation, Udyam MSME registration, Factory Licenses, Pollution Control Board (SPCB) clearances, and Trade Licenses.",
    iconName: "Building2",
    badge: "Statutory Licensing",
    hero: {
      headline: "End-to-End Business Registrations & Industrial Licensing",
      subheadline:
        "Establish your business on solid statutory foundations. We handle corporate entity incorporation, Udyam MSME certification, state industrial licenses, and environmental consents required for formal banking.",
      stats: [
        { label: "Entity Types", value: "Pvt Ltd, LLP, Section 8, OPC" },
        { label: "MSME Recognition", value: "Udyam & GeM Registration" },
        { label: "Industrial Clearances", value: "Factory License, SPCB CTE/CTO" },
      ],
    },
    problem: {
      title: "Why Incomplete Registrations Paralyze Business Setup",
      description:
        "Operating without the appropriate statutory licenses exposes promoters to severe regulatory fines and operational shutdowns. More critically, commercial banks will not disburse loans or open credit facilities without verified entity incorporation, Udyam certificates, and industrial permits.",
      painPoints: [
        "Incorrect incorporation drafting (narrow MoA object clauses preventing future business expansion)",
        "Missing or incorrectly categorized Udyam registration forfeiting Priority Sector Lending (PSL) benefits",
        "Delays in obtaining State Pollution Control Board (SPCB) Consent to Establish (CTE)",
        "Lack of Factory License halting commercial bank loan disbursement for industrial capex",
      ],
    },
    targetAudience: {
      title: "Who Needs Business Registration Advisory?",
      description:
        "Designed for entrepreneurs setting up new ventures and existing businesses formalizing operations.",
      profiles: [
        {
          title: "New Venture Promoters",
          criteria: "Incorporating Private Limited companies or LLPs with bank-compliant MoA/AoA structures.",
        },
        {
          title: "Industrial & Manufacturing Units",
          criteria: "Securing industrial land allotment, SPCB environmental consents, and factory licenses.",
        },
        {
          title: "Proprietorships Converting to Corporate Entities",
          criteria: "Transitioning to Pvt Ltd or LLP to attract bank debt, equity, or government tenders.",
        },
      ],
    },
    whatVsProvides: {
      title: "Our Comprehensive Registration Portfolio",
      description:
        "We handle all primary corporate, industrial, and tax registrations.",
      features: [
        {
          title: "Corporate Incorporation (Pvt Ltd / LLP)",
          description:
            "Name reservation (RUN/SPICe+), DSC/DIN generation, drafting comprehensive MoA & AoA with borrowing power clauses, and Certificate of Incorporation (COI).",
        },
        {
          title: "Udyam MSME & GeM Registration",
          description:
            "Obtaining Udyam registration under correct NIC codes to qualify for Priority Sector Lending (PSL) and government e-Marketplace (GeM) public procurement.",
        },
        {
          title: "State Pollution Control Board (SPCB) Consents",
          description:
            "Advisory and documentation for Consent to Establish (CTE) and Consent to Operate (CTO) under White, Green, Orange, or Red industrial categories.",
        },
        {
          title: "Industrial & Municipal Clearances",
          description:
            "Coordinating Factory Licenses, Fire Department NOC, Local Trade Licenses, and Labour Department registrations.",
        },
      ],
    },
    process: {
      title: "Our Registration Process",
      steps: [
        {
          stepNumber: 1,
          title: "Entity Structure & Name Approval",
          description:
            "Advising on optimal corporate vehicle and reserving corporate name on MCA portal.",
          duration: "Days 1–3",
        },
        {
          stepNumber: 2,
          title: "Documentation & Digital Signatures",
          description:
            "Obtaining Class 3 DSCs, drafting MoA/AoA, and compiling promoter identity and address KYC.",
          duration: "Days 4–6",
        },
        {
          stepNumber: 3,
          title: "Statutory Incorporation & Tax Allotment",
          description:
            "Filing SPICe+ forms for Certificate of Incorporation, PAN, TAN, and bank account opening.",
          duration: "Days 7–10",
        },
        {
          stepNumber: 4,
          title: "Industrial & Auxiliary Licensing",
          description:
            "Executing Udyam registration, GST registration, SPCB CTE applications, and municipal licenses.",
          duration: "Days 11–20",
        },
      ],
    },
    documentsRequired: {
      title: "Documents Required",
      categories: [
        {
          category: "Promoter KYC",
          items: [
            "PAN card and Aadhaar card of all proposed directors/partners",
            "Latest bank statement or utility bill (not older than 2 months) as address proof",
            "Passport-size photographs and specimen signatures",
          ],
        },
        {
          category: "Registered Office & Premises",
          items: [
            "Electricity bill / property tax receipt for registered office premises",
            "NOC from property owner and signed rent/lease agreement",
          ],
        },
      ],
    },
    deliverables: {
      title: "Deliverables",
      items: [
        {
          title: "Corporate Incorporation Dossier",
          format: "PDF + Hardcopy Folder",
          description:
            "Certificate of Incorporation, MoA, AoA, PAN, TAN, and master data certificate.",
        },
        {
          title: "Udyam MSME Certificate",
          format: "PDF",
          description:
            "Government of India Udyam MSME registration certificate with verified NIC codes.",
        },
        {
          title: "Statutory Compliance Register",
          format: "Excel (.xlsx)",
          description:
            "Calendar tracking license renewal dates, ROC annual filings, and statutory deposit deadlines.",
        },
      ],
    },
    workflow: {
      title: "Engagement Workflow",
      stages: [
        {
          stage: "Stage 1: Setup",
          action: "Select entity type, reserve name, and draft constitutional documents.",
          outcome: "SPICe+ application ready.",
        },
        {
          stage: "Stage 2: Incorporation",
          action: "Submit MCA filing and obtain Certificate of Incorporation.",
          outcome: "Entity legally born.",
        },
        {
          stage: "Stage 3: Licensing",
          action: "Process GST, Udyam, and environmental industrial clearances.",
          outcome: "Full operational licensing complete.",
        },
      ],
    },
    faqs: [
      {
        question: "Why is Udyam registration crucial for bank loan applications?",
        answer:
          "Under RBI guidelines, commercial banks have mandatory targets to lend a specific percentage of their credit to the Priority Sector (PSL). Having a valid Udyam certificate categorizes your business as an eligible MSME, giving you access to lower interest rate concessions, collateral-free credit under CGTMSE, and protection against delayed payments under the MSMED Act.",
      },
      {
        question: "What is the difference between SPCB CTE and CTO?",
        answer:
          "Consent to Establish (CTE) is required from the State Pollution Control Board *before* starting factory construction or installing machinery. Consent to Operate (CTO) is applied for *after* plant construction is complete and is required before starting commercial production.",
      },
    ],
    relatedServiceSlugs: [
      "corporate-compliance",
      "gst-support",
      "government-scheme-assistance",
      "msme-advisory",
    ],
    disclaimer:
      "Business registration services assist in statutory documentation, application drafting, and liaison with government portals. Issuance of licenses is subject to regulatory approval by the Ministry of Corporate Affairs, State Pollution Control Boards, and relevant municipal authorities.",
    seo: {
      metaTitle: "Business Registrations & Industrial Licensing | VS Advisory",
      metaDescription:
        "Company incorporation (Pvt Ltd / LLP), Udyam MSME registration, SPCB pollution consents, and factory licenses for Indian entrepreneurs.",
      keywords: [
        "company registration India",
        "Pvt Ltd incorporation",
        "Udyam registration consultant",
        "SPCB CTE CTO consent",
        "factory license consultant",
      ],
    },
  },

  {
    id: "corporate-compliance",
    slug: "corporate-compliance",
    aliases: ["compliance"],
    title: "Corporate Governance & MCA Secretarial Compliance",
    shortTitle: "Corporate Compliance",
    categoryId: "compliance",
    categoryName: "Compliance",
    summary:
      "Ongoing secretarial compliance, annual MCA filings (AOC-4, MGT-7), borrowing power resolutions (Section 179/180), director KYC, and statutory register maintenance.",
    iconName: "ShieldCheck",
    badge: "MCA Secretarial",
    hero: {
      headline: "Corporate Governance & MCA Secretarial Compliance",
      subheadline:
        "Maintain pristine corporate legal standing. We manage annual MCA filings, board resolutions for bank borrowings, director KYC, and statutory registers to prevent compliance defaults.",
      stats: [
        { label: "Annual Filings", value: "AOC-4, MGT-7, DIR-3 KYC" },
        { label: "Borrowing Governance", value: "Section 179 / 180 Resolutions" },
        { label: "Charge Filings", value: "CHG-1, CHG-4, CHG-9" },
      ],
    },
    problem: {
      title: "The Severe Consequences of Secretarial Defaults",
      description:
        "The Ministry of Corporate Affairs (MCA) imposes hefty per-day penalties for delayed statutory filings, while non-compliant companies face director disqualification, frozen bank accounts, and complete disqualification from bank lending.",
      painPoints: [
        "Per-day MCA additional fees of ₹100 per day accumulating on delayed AOC-4 and MGT-7 filings",
        "Director DIN deactivation due to missed annual DIR-3 KYC filings",
        "Missing board and shareholder resolutions for bank borrowing under Section 180(1)(c)",
        "Unsatisfied old bank charges lingering on the MCA portal (defective Form CHG-4)",
      ],
    },
    targetAudience: {
      title: "Who Needs Corporate Compliance Support?",
      description:
        "Essential for all registered Private Limited companies, Public Limited entities, and LLPs in India.",
      profiles: [
        {
          title: "Operating Private Limited Companies",
          criteria: "Requiring annual statutory compliance, board governance, and MCA filing management.",
        },
        {
          title: "Borrowing Entities",
          criteria: "Needing formal board resolutions and special shareholder resolutions to borrow from banks.",
        },
        {
          title: "Companies Clearing Historical Deficiencies",
          criteria: "Regularizing past non-filings, updating director KYC, and filing charge satisfactions.",
        },
      ],
    },
    whatVsProvides: {
      title: "Our Secretarial Compliance Portfolio",
      description:
        "Comprehensive management of all Companies Act, 2013 secretarial mandates.",
      features: [
        {
          title: "Annual Financial & Secretarial Filings",
          description:
            "Preparation and filing of Form AOC-4 (Financial Statements), Form MGT-7/7A (Annual Return), and Form DIR-3 KYC on the MCA21 portal.",
        },
        {
          title: "Bank Borrowing Resolutions & Vetting",
          description:
            "Drafting board resolutions under Section 179 and special shareholder resolutions under Section 180(1)(c) approving credit limits beyond company net worth.",
        },
        {
          title: "Charge Creation & Satisfaction (CHG-1 / CHG-4)",
          description:
            "Filing charges for bank loans within 30 days and securing charge satisfaction certificates upon full loan repayment.",
        },
        {
          title: "Statutory Registers & Minute Book Maintenance",
          description:
            "Maintaining registers of members, debenture holders, directors, loans & investments, and formalizing board meeting minutes.",
        },
      ],
    },
    process: {
      title: "Our Secretarial Compliance Process",
      steps: [
        {
          stepNumber: 1,
          title: "MCA Portal & Secretarial Audit",
          description:
            "Inspecting company master data, charge index, active DINs, and historical filing status on MCA21.",
          duration: "Days 1–2",
        },
        {
          stepNumber: 2,
          title: "Documentation & Resolution Drafting",
          description:
            "Drafting directors' reports, notice of AGM, minutes, and borrowing power resolutions.",
          duration: "Days 3–5",
        },
        {
          stepNumber: 3,
          title: "Form Upload & Professional Certification",
          description:
            "Signing forms with director DSCs, PCS certification, and filing on MCA portal with challan generation.",
          duration: "Days 6–8",
        },
        {
          stepNumber: 4,
          title: "Compliance Certificate & Archive",
          description:
            "Archiving approved SRNs, updated statutory registers, and issuing an annual Secretarial Compliance Certificate.",
          duration: "Day 9",
        },
      ],
    },
    documentsRequired: {
      title: "Documents Required",
      categories: [
        {
          category: "Financials & Governance",
          items: [
            "Audited balance sheet, P&L, and auditor's report signed by statutory auditors",
            "Notice of Annual General Meeting (AGM) and Directors' Report",
            "Valid Class 3 Digital Signature Certificates (DSC) of active directors",
            "Details of existing bank loans, sanctions, and charge satisfaction letters",
          ],
        },
      ],
    },
    deliverables: {
      title: "Deliverables",
      items: [
        {
          title: "MCA Annual Filing Pack",
          format: "PDF + Challans",
          description:
            "Filed copies of AOC-4, MGT-7, and MCA payment receipts with approved SRN status.",
        },
        {
          title: "Statutory Secretarial Register",
          format: "Structured PDF / Binder",
          description:
            "Updated statutory registers under Section 88, 186, 189, and 170 of Companies Act, 2013.",
        },
        {
          title: "Borrowing Power Resolutions Pack",
          format: "PDF (Certified Copies)",
          description:
            "Certified true copies of Section 179/180 resolutions ready for bank credit committees.",
        },
      ],
    },
    workflow: {
      title: "Engagement Workflow",
      stages: [
        {
          stage: "Stage 1: Diagnostic",
          action: "Check MCA master data for pending filings and active charges.",
          outcome: "Compliance health report.",
        },
        {
          stage: "Stage 2: Preparation",
          action: "Draft board reports, resolutions, and compile e-forms.",
          outcome: "Forms ready for DSC signing.",
        },
        {
          stage: "Stage 3: Filing",
          action: "Upload to MCA21 and secure approved SRN challans.",
          outcome: "Company in 100% good standing.",
        },
      ],
    },
    faqs: [
      {
        question: "What is the consequence of failing to pass a Section 180(1)(c) resolution for bank borrowing?",
        answer:
          "Under Section 180(1)(c) of the Companies Act, 2013, if the total money to be borrowed by a company (together with existing debt) exceeds the aggregate of its paid-up share capital, free reserves, and securities premium, the directors cannot borrow without a Special Resolution passed by shareholders in a general meeting. Lending banks will reject loan disbursements without this resolution.",
      },
      {
        question: "How do I remove an old, repaid loan from my company's MCA master data?",
        answer:
          "Upon full repayment of a loan, the company must obtain a No Objection Certificate (NOC) or satisfaction letter from the bank and file Form CHG-4 with the Registrar of Companies (ROC) within 30 days. The ROC will then issue a Certificate of Registration of Satisfaction of Charge, removing the charge from public records.",
      },
    ],
    relatedServiceSlugs: [
      "business-registrations",
      "project-finance-documentation",
      "income-tax-support",
      "gst-support",
    ],
    disclaimer:
      "Corporate compliance advisory assists with secretarial drafting, documentation, and filing coordination. Filings are subject to verification and approval by the Registrar of Companies and Ministry of Corporate Affairs.",
    seo: {
      metaTitle: "Corporate Governance & MCA Secretarial Compliance | VS Advisory",
      metaDescription:
        "Annual MCA filings (AOC-4, MGT-7), borrowing power resolutions (Section 179/180), director KYC, and ROC charge filings for Indian companies.",
      keywords: [
        "MCA annual filing India",
        "AOC-4 MGT-7 filing",
        "borrowing resolution Section 180",
        "ROC charge satisfaction CHG-4",
        "company secretarial compliance",
      ],
    },
  },

  // =========================================================================
  // CATEGORY 5: SPECIALIZED ADVISORY
  // =========================================================================
  {
    id: "government-scheme-assistance",
    slug: "government-scheme-assistance",
    aliases: ["government-schemes"],
    title: "Government Credit Guarantee & Subsidy Scheme Advisory",
    shortTitle: "Government Schemes",
    categoryId: "specialized-advisory",
    categoryName: "Specialized Advisory",
    summary:
      "Identification, structuring, and execution of eligible Central & State government credit guarantee schemes (CGTMSE up to ₹5 Cr, PMEGP, Stand-Up India) and capital subsidies.",
    iconName: "ShieldCheck",
    badge: "Government Schemes",
    hero: {
      headline: "Government Credit Guarantees & Subsidy Schemes",
      subheadline:
        "Leverage government initiatives to secure collateral-free debt and capital subsidies. We guide eligible MSMEs, manufacturing units, and women/SC/ST entrepreneurs through CGTMSE, PMEGP, Stand-Up India, and state industrial policies.",
      stats: [
        { label: "CGTMSE Guarantee", value: "Collateral-Free up to ₹5 Cr" },
        { label: "PMEGP Subsidy", value: "15% to 35% Capital Margin" },
        { label: "Stand-Up India", value: "₹10 Lakh to ₹1 Cr for Women/SC/ST" },
      ],
    },
    problem: {
      title: "Why Promoters Miss Out on Eligible Government Schemes",
      description:
        "The Government of India and various state governments offer substantial credit guarantees and investment subsidies to stimulate industrialization. However, due to convoluted application portals, rigid scheme guidelines, and lack of bank branch familiarity, over 70% of eligible entrepreneurs fail to benefit.",
      painPoints: [
        "Pledging precious personal real estate when the business is eligible for collateral-free CGTMSE loans",
        "Applying under wrong PMEGP agency categories leading to disqualification or margin forfeiture",
        "Missing strict post-commissioning deadlines for claiming state capital and power subsidies",
        "Bank branches claiming unfamiliarity with specialized scheme guidelines and asking for collateral",
      ],
    },
    targetAudience: {
      title: "Who Needs Government Scheme Advisory?",
      description:
        "Designed for micro and small enterprises, greenfield promoters, and priority sector borrowers.",
      profiles: [
        {
          title: "Collateral-Constrained MSMEs",
          criteria: "Businesses with viable models requiring loans up to ₹5 Cr without third-party collateral.",
        },
        {
          title: "First-Time Entrepreneurs (PMEGP)",
          criteria: "Setting up micro manufacturing (up to ₹50 Lakhs) or service units (up to ₹20 Lakhs).",
        },
        {
          title: "Women & SC/ST Entrepreneurs",
          criteria: "Establishing greenfield enterprises under the Stand-Up India scheme.",
        },
      ],
    },
    whatVsProvides: {
      title: "Our Government Scheme Expertise",
      description:
        "We guide you through the exact regulatory frameworks to unlock eligible benefits.",
      features: [
        {
          title: "CGTMSE Collateral-Free Structuring",
          description:
            "Structuring term loans and working capital facilities up to ₹5 Cr under the Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE) with hybrid collateral options.",
        },
        {
          title: "PMEGP Application & Margin Money Processing",
          description:
            "End-to-end DPR preparation, online portal filing through KVIC/DIC, and bank branch coordination to secure 15% to 35% government margin money subsidy.",
        },
        {
          title: "Stand-Up India Loan Advisory",
          description:
            "Structuring composite loan proposals (term loan + working capital) between ₹10 Lakhs and ₹1 Crore for women and SC/ST promoters.",
        },
        {
          title: "State Industrial Policy Subsidies",
          description:
            "Mapping state-specific incentives: capital investment subsidies, interest subvention, electricity duty exemptions, and stamp duty waivers.",
        },
      ],
    },
    process: {
      title: "Our Scheme Advisory Process",
      steps: [
        {
          stepNumber: 1,
          title: "Eligibility & Scheme Mapping",
          description:
            "Auditing enterprise activity (NIC code), promoter category, capex size, and location against central and state scheme guidelines.",
          duration: "Days 1–2",
        },
        {
          stepNumber: 2,
          title: "Scheme-Specific DPR & Financials",
          description:
            "Drafting customized project reports formatted exactly to KVIC, Stand-Up India, or CGTMSE norms.",
          duration: "Days 3–6",
        },
        {
          stepNumber: 3,
          title: "Portal Submission & Agency Coordination",
          description:
            "Filing digital applications on official government portals (PMEGP e-portal, Stand-Up Mitra) and clearing scrutiny.",
          duration: "Days 7–10",
        },
        {
          stepNumber: 4,
          title: "Lender Appraisal & Guarantee Activation",
          description:
            "Guiding bank branch officials through guarantee fee calculation, sanction letter formatting, and subsidy claim release.",
          duration: "Days 11–20",
        },
      ],
    },
    documentsRequired: {
      title: "Documents Required",
      categories: [
        {
          category: "Promoter & Scheme Eligibility",
          items: [
            "Aadhaar, PAN, and Caste/Community certificate (for SC/ST quota or affirmative schemes)",
            "Educational qualification certificates and EDP (Entrepreneurship Development Programme) certificate",
            "Udyam MSME registration certificate",
            "Rural area certificate from Gram Panchayat (if applying for rural PMEGP higher subsidy)",
          ],
        },
        {
          category: "Project & Financial",
          items: [
            "Project feasibility note and machinery proforma invoices",
            "Land title deed or registered rent agreement for unit premises",
            "Promoter bank account details and KYC",
          ],
        },
      ],
    },
    deliverables: {
      title: "Deliverables",
      items: [
        {
          title: "Scheme Eligibility Matrix",
          format: "PDF (8–10 pages)",
          description:
            "Comparative breakdown of eligible central and state incentives, subsidy percentages, and compliance rules.",
        },
        {
          title: "Scheme-Compliant DPR Dossier",
          format: "PDF + Excel",
          description:
            "Project report formatted specifically for PMEGP / Stand-Up India portal scrutiny.",
        },
        {
          title: "Portal Application & Acknowledgement Pack",
          format: "PDF Archive",
          description:
            "Digital portal submission receipts, application tracking IDs, and agency communication records.",
        },
      ],
    },
    workflow: {
      title: "Engagement Workflow",
      stages: [
        {
          stage: "Stage 1: Eligibility",
          action: "Match business project with optimal central/state schemes.",
          outcome: "Target scheme identified.",
        },
        {
          stage: "Stage 2: Preparation",
          action: "Draft scheme-specific DPR and upload to government portals.",
          outcome: "Application submitted and tracked.",
        },
        {
          stage: "Stage 3: Bank Coordination",
          action: "Liaise with nodal agencies and bank branch for credit sanction and subsidy release.",
          outcome: "Credit guarantee / subsidy sanctioned.",
        },
      ],
    },
    faqs: [
      {
        question: "Can an existing business apply for a PMEGP loan?",
        answer:
          "PMEGP is primarily designed for greenfield (new) micro-enterprises. However, existing well-performing PMEGP/MUDRA units can apply for a second loan of up to ₹1 Crore for manufacturing expansion (up to ₹25 Lakhs for service) with an eligible subsidy of 15% to 20%, subject to certain operational criteria.",
      },
      {
        question: "Who pays the CGTMSE guarantee fee: the borrower or the bank?",
        answer:
          "The annual guarantee fee charged by the Trust is typically paid by the lending bank and passed on to the borrower as an annual debit to their credit account. Certain state industrial policies reimburse this annual guarantee fee to MSMEs.",
      },
    ],
    relatedServiceSlugs: [
      "subsidy-advisory",
      "dpr",
      "term-loan-advisory",
      "msme-advisory",
    ],
    disclaimer:
      "Government scheme assistance provides guidance, eligibility appraisal, and portal documentation. Final loan sanction, subsidy release, and guarantee coverage are solely determined by the nodal agencies (KVIC, DIC, SIDBI) and lending banks.",
    seo: {
      metaTitle: "Government Schemes & Subsidy Advisory | VS Advisory",
      metaDescription:
        "Expert advisory on CGTMSE collateral-free loans up to ₹5 Cr, PMEGP subsidies, Stand-Up India loans, and state industrial policy incentives for Indian MSMEs.",
      keywords: [
        "CGTMSE loan consultant",
        "PMEGP subsidy advisory",
        "Stand Up India loan consultant",
        "collateral free MSME loan",
        "government subsidy for business",
      ],
    },
  },

  {
    id: "subsidy-advisory",
    slug: "subsidy-advisory",
    title: "Industrial Subsidy Advisory & Incentive Claims",
    shortTitle: "Subsidy Advisory",
    categoryId: "specialized-advisory",
    categoryName: "Specialized Advisory",
    summary:
      "Comprehensive advisory for claiming Central and State Industrial Policy incentives: capital investment subsidies, interest subvention, power tariff concessions, and stamp duty reimbursements.",
    iconName: "Award",
    badge: "Incentive Claims",
    hero: {
      headline: "Industrial Subsidy Advisory & Incentive Realization",
      subheadline:
        "Do not leave entitled government money on the table. We identify, structure, and claim state industrial policy capital subsidies, interest subventions, and tax reimbursements for new and expanding manufacturing units.",
      stats: [
        { label: "Capital Subsidies", value: "10% to 30% of Eligible Capex" },
        { label: "Interest Subvention", value: "3% to 7% Interest Reimbursement" },
        { label: "Operational Relief", value: "Power Tariff & Stamp Duty Waivers" },
      ],
    },
    problem: {
      title: "Why Industrial Subsidies Get Disallowed or Delayed",
      description:
        "Every state in India provides attractive industrial packages to woo manufacturing investments. However, subsidy rules contain strict pre-registration deadlines, machinery eligibility exclusions, and complicated verification audits that catch promoters off guard.",
      painPoints: [
        "Failing to submit preliminary registration *before* taking commercial production steps",
        "Disallowance of second-hand or unapproved machinery from eligible capital cost calculations",
        "Inability to navigate multi-tiered physical inspections by District Industries Centers (DIC)",
        "Delays of 2 to 4 years in subsidy disbursement due to procedural document deficiencies",
      ],
    },
    targetAudience: {
      title: "Who Needs Industrial Subsidy Advisory?",
      description:
        "Vital for all industrial enterprises setting up new manufacturing plants or undertaking substantial expansions.",
      profiles: [
        {
          title: "Manufacturing Units Setting Up in Backward / Tier-2/3 Areas",
          criteria: "Eligible for highest-slab state capital subsidies and SGST reimbursements.",
        },
        {
          title: "Food Processing & Agro Industries",
          criteria: "Qualifying under MoFPI (Ministry of Food Processing Industries) PMKSY schemes.",
        },
        {
          title: "Textile, Solar & Green Energy Projects",
          criteria: "Eligible for specialized sectoral interest subventions and capital incentives.",
        },
      ],
    },
    whatVsProvides: {
      title: "Our Industrial Subsidy Capabilities",
      description:
        "We manage the entire subsidy lifecycle from pre-capex planning to fund realization.",
      features: [
        {
          title: "Industrial Policy Mapping & Pre-Registration",
          description:
            "Benchmarking state industrial policies (e.g., Maharashtra, Gujarat, Karnataka, UP, Tamil Nadu) and filing required pre-investment intimations.",
        },
        {
          title: "Eligible Capex Sizing & Chartered Engineer Vetting",
          description:
            "Itemizing civil works, plant, and machinery costs in compliance with DIC exclusion lists and securing Chartered Engineer certifications.",
        },
        {
          title: "Interest Subvention & Power Tariff Claims",
          description:
            "Filing quarterly and annual claims for 3% to 7% interest subvention on term loans and industrial electricity tariff concessions.",
        },
        {
          title: "DIC Physical Inspection & Audit Defense",
          description:
            "Preparing the plant site, machine asset tagging, and documentation for District Industries Center (DIC) physical verification committees.",
        },
      ],
    },
    process: {
      title: "Our Subsidy Claim Methodology",
      steps: [
        {
          stepNumber: 1,
          title: "Pre-Investment Policy Audit",
          description:
            "Analyzing project location, proposed capex, and filing mandatory preliminary scheme registration before machinery purchase.",
          duration: "Days 1–3",
        },
        {
          stepNumber: 2,
          title: "Commercial Commissioning & Asset Documentation",
          description:
            "Compiling Chartered Engineer certificates, bank disbursement proofs, and invoice vouchers upon Commercial Operation Date (COD).",
          duration: "Post-COD",
        },
        {
          stepNumber: 3,
          title: "Formal Claim Dossier Submission",
          description:
            "Submitting complete claim dossier to the District Industries Center (DIC) or nodal state authority.",
          duration: "Within 30–60 days of COD",
        },
        {
          stepNumber: 4,
          title: "Inspection Defense & Sanction Release",
          description:
            "Facilitating physical inspection, answering committee queries, and tracking treasury disbursement.",
          duration: "Ongoing",
        },
      ],
    },
    documentsRequired: {
      title: "Documents Required",
      categories: [
        {
          category: "Project & Capex Vouchers",
          items: [
            "Chartered Engineer certificate of plant & machinery and civil expenditure",
            "Paid invoices, e-way bills, and bank payment vouchers for all machinery items",
            "Factory License, SPCB Consent to Operate (CTO), and electricity power release letter",
            "Bank term loan sanction letter and disbursement certificate",
          ],
        },
      ],
    },
    deliverables: {
      title: "Deliverables",
      items: [
        {
          title: "State Incentive Optimization Matrix",
          format: "PDF (12–15 pages)",
          description:
            "Detailed map of all eligible capital, interest, power, and SGST reimbursement schemes.",
        },
        {
          title: "Complete Subsidy Claim Dossier",
          format: "PDF + Certified Hardcopy Pack",
          description:
            "Fully indexed claim dossier meeting all state industrial department guidelines.",
        },
      ],
    },
    workflow: {
      title: "Engagement Workflow",
      stages: [
        {
          stage: "Stage 1: Pre-Investment",
          action: "File preliminary registration before machinery purchase.",
          outcome: "Eligibility locked.",
        },
        {
          stage: "Stage 2: Post-COD",
          action: "Assemble vouchers, CE certificates, and submit claim dossier.",
          outcome: "Claim lodged with DIC.",
        },
        {
          stage: "Stage 3: Disbursement",
          action: "Coordinate inspection and track state treasury sanction.",
          outcome: "Subsidy funds released.",
        },
      ],
    },
    faqs: [
      {
        question: "Can I claim a state capital subsidy if I did not take a bank loan?",
        answer:
          "In many state industrial policies, availing a formal term loan from a financial institution (bank or SFC) is a mandatory eligibility condition to claim capital subsidies. Self-financed projects are often excluded or eligible for lower incentives. We verify your state's exact policy rules before you finalize your means of finance.",
      },
      {
        question: "What happens to the capital subsidy if the business closes or sells machinery?",
        answer:
          "Almost all government subsidy schemes mandate a 'lock-in period' (typically 5 to 7 years from commercial operations) during which the plant must remain operational and subsidized machinery cannot be sold, disposed of, or relocated. Breach of this condition leads to subsidy recovery with penal interest.",
      },
    ],
    relatedServiceSlugs: [
      "government-scheme-assistance",
      "term-loan-advisory",
      "expansion-finance",
      "dpr",
    ],
    disclaimer:
      "Subsidy advisory services assist in policy interpretation, documentation, and claim filing. Actual subsidy sanction, amount, and disbursement timelines are at the sole discretion of state and central government nodal departments and are subject to state budget allocations.",
    seo: {
      metaTitle: "Industrial Subsidy Advisory & Incentive Claims | VS Advisory",
      metaDescription:
        "Claim your entitled state and central industrial subsidies: capital investment subsidies, interest subvention, and power tariff relief for Indian manufacturing plants.",
      keywords: [
        "industrial subsidy consultant",
        "state industrial policy subsidies",
        "capital investment subsidy India",
        "interest subvention claim",
        "DIC subsidy consultant",
      ],
    },
  },

  {
    id: "virtual-cfo",
    slug: "virtual-cfo",
    title: "Virtual CFO & Strategic Treasury Leadership",
    shortTitle: "Virtual CFO",
    categoryId: "specialized-advisory",
    categoryName: "Specialized Advisory",
    summary:
      "High-caliber outsourced CFO leadership for growing enterprises: strategic treasury management, banking relationship management, monthly MIS, cash flow governance, and investor reporting.",
    iconName: "UserCheck",
    badge: "Strategic CFO Desk",
    hero: {
      headline: "Virtual CFO & Strategic Financial Leadership",
      subheadline:
        "Get institutional-grade CFO expertise without the cost of a full-time executive. We take charge of your treasury, banking relationships, monthly MIS reporting, cash flow forecasting, and board governance.",
      stats: [
        { label: "Leadership Scope", value: "Treasury, Banking, MIS, Governance" },
        { label: "Cadence", value: "Weekly Review & Monthly Board MIS" },
        { label: "Cost Advantage", value: "Fraction of Full-Time Executive Cost" },
      ],
    },
    problem: {
      title: "The Growing Enterprise Without Financial Leadership",
      description:
        "As companies grow past ₹10 Cr to ₹100 Cr in turnover, simple bookkeeping by traditional accountants is no longer enough. Promoters find themselves overwhelmed managing daily cash flows, negotiating with aggressive bank managers, and making uninformed pricing decisions.",
      painPoints: [
        "Flying blind without accurate, real-time monthly Management Information Systems (MIS)",
        "Overpaying interest rates and bank processing fees due to unmanaged banking relations",
        "Cash crunches caused by poor working capital visibility and lack of rolling 13-week forecasts",
        "Inability to afford a full-time senior CFO (which costs ₹40L to ₹80L+ annually)",
      ],
    },
    targetAudience: {
      title: "Who Needs a Virtual CFO?",
      description:
        "Designed for scaling MSMEs, funded startups, and family-owned enterprises transitioning to corporate management.",
      profiles: [
        {
          title: "Mid-Market MSMEs (₹10 Cr to ₹150 Cr Turnover)",
          criteria: "Needing institutional financial governance, treasury optimization, and bank coordination.",
        },
        {
          title: "Venture-Backed / Funded Startups",
          criteria: "Requiring rigorous cash runway management, board deck preparation, and audit readiness.",
        },
        {
          title: "Family Businesses Scaling to the Next Level",
          criteria: "Establishing professional financial reporting and separating personal and business finances.",
        },
      ],
    },
    whatVsProvides: {
      title: "Our Virtual CFO Capabilities",
      description:
        "We act as an integrated member of your executive leadership team.",
      features: [
        {
          title: "Strategic Treasury & Cash Flow Management",
          description:
            "Instituting rolling 13-week cash flow forecasts, optimizing bank balance deployment, and managing liquidity cushions.",
        },
        {
          title: "Proactive Banking Relationship Management",
          description:
            "Managing relationships with consortium banks, negotiating interest rate spreads, reviewing quarterly stock audits, and overseeing covenant compliance.",
        },
        {
          title: "Monthly MIS & Board Performance Dashboards",
          description:
            "Delivering institutional monthly MIS: product-level contribution margins, customer profitability, departmental budget variances, and KPI tracking.",
        },
        {
          title: "Strategic Decision Support & Capital Allocation",
          description:
            "Advising leadership on pricing models, major capex acquisitions, debt vs equity choices, and strategic vendor negotiations.",
        },
      ],
    },
    process: {
      title: "Our Virtual CFO Engagement Process",
      steps: [
        {
          stepNumber: 1,
          title: "Financial Architecture & Systems Audit",
          description:
            "Auditing existing chart of accounts, accounting software, banking facilities, and internal financial controls.",
          duration: "Weeks 1–2",
        },
        {
          stepNumber: 2,
          title: "MIS & Reporting System Setup",
          description:
            "Designing custom MIS dashboards, budget templates, and automated 13-week cash flow forecast models.",
          duration: "Weeks 3–4",
        },
        {
          stepNumber: 3,
          title: "Active Governance & Weekly Cadence",
          description:
            "Initiating weekly cash reviews, accounts receivable collections monitoring, and monthly leadership meetings.",
          duration: "Ongoing Monthly",
        },
        {
          stepNumber: 4,
          title: "Strategic Banking & Growth Initiatives",
          description:
            "Leading annual bank renewals, limit enhancements, credit rating presentations, and strategic capital structuring.",
          duration: "Ongoing Quarterly",
        },
      ],
    },
    documentsRequired: {
      title: "Information Required for Onboarding",
      categories: [
        {
          category: "Internal Systems Access",
          items: [
            "Access to accounting software (Tally, Zoho Books, SAP, QuickBooks, etc.)",
            "Past 2 years audited balance sheets and current year management accounts",
            "Existing bank sanction letters, loan schedules, and credit facility details",
            "Current organizational chart and key stakeholder contact matrix",
          ],
        },
      ],
    },
    deliverables: {
      title: "Ongoing Deliverables",
      items: [
        {
          title: "Monthly Institutional MIS Pack",
          format: "PDF (15–25 pages)",
          description:
            "Comprehensive monthly review of P&L, balance sheet, cash flows, unit economics, and budget variances.",
        },
        {
          title: "Rolling 13-Week Cash Flow Forecast",
          format: "Excel (.xlsx)",
          description:
            "Dynamic weekly cash management model updated continuously to predict and prevent liquidity shortfalls.",
        },
        {
          title: "Quarterly Banking & Covenant Health Review",
          format: "PDF (8–10 pages)",
          description:
            "Review of all bank covenants, drawing power optimization, and credit rating surveillance notes.",
        },
      ],
    },
    workflow: {
      title: "Engagement Workflow",
      stages: [
        {
          stage: "Stage 1: Diagnostic",
          action: "Assess financial systems, cash flows, and banking health.",
          outcome: "CFO diagnostic roadmap.",
        },
        {
          stage: "Stage 2: Implementation",
          action: "Deploy 13-week cash forecasting and institutional MIS templates.",
          outcome: "Real-time visibility achieved.",
        },
        {
          stage: "Stage 3: Executive Governance",
          action: "Provide ongoing CFO leadership, bank negotiations, and board reviews.",
          outcome: "Sustained financial discipline and growth.",
        },
      ],
    },
    faqs: [
      {
        question: "How does a Virtual CFO differ from our existing Chartered Accountant or Bookkeeper?",
        answer:
          "Your bookkeeper or CA focuses on backward-looking historical compliance: recording past transactions, filing GST returns, and auditing tax accounts. A Virtual CFO is forward-looking and strategic: managing future cash flows, negotiating with banks, optimizing unit economics, and guiding executive business decisions.",
      },
      {
        question: "How much time does the Virtual CFO spend with our team?",
        answer:
          "Depending on the tier of engagement, our Virtual CFO engagement includes dedicated weekly working sessions, continuous oversight of your internal finance team, on-demand strategic consultation, and participation in executive board meetings.",
      },
    ],
    relatedServiceSlugs: [
      "msme-advisory",
      "working-capital-advisory",
      "financial-modelling",
      "business-planning",
    ],
    disclaimer:
      "Virtual CFO services provide strategic advisory, management consulting, and financial analysis. They do not replace statutory auditors or assume legal officer liability under company law.",
    seo: {
      metaTitle: "Virtual CFO & Strategic Treasury Leadership | VS Advisory",
      metaDescription:
        "Outsourced Virtual CFO services for Indian MSMEs and scaling startups: cash flow management, banking negotiations, monthly MIS, and board governance.",
      keywords: [
        "virtual CFO India",
        "outsourced CFO MSME",
        "strategic financial leadership",
        "treasury management services",
        "monthly MIS reporting consultant",
      ],
    },
  },

  {
    id: "financial-restructuring",
    slug: "financial-restructuring",
    title: "Financial Restructuring & Debt Realignment",
    shortTitle: "Financial Restructuring",
    categoryId: "specialized-advisory",
    categoryName: "Specialized Advisory",
    summary:
      "Strategic advisory for stressed and sub-optimal balance sheets: SMA-0/1/2 regularisation, loan tenure extension, interest rate realignment, and One Time Settlement (OTS) appraisal.",
    iconName: "TrendingDown",
    badge: "Debt Realignment",
    hero: {
      headline: "Financial Restructuring & Debt Realignment Advisory",
      subheadline:
        "Proactive intervention for enterprises experiencing cash flow stress or unsustainable debt servicing burdens. We restructure loan repayment tenures, convert short-term debt, and prevent NPA classification under RBI prudential frameworks.",
      stats: [
        { label: "Stress Resolution", value: "SMA-0, SMA-1, SMA-2 Regularization" },
        { label: "Debt Realignment", value: "Tenure Extension & Moratorium" },
        { label: "Framework", value: "RBI Prudential Framework Aligned" },
      ],
    },
    problem: {
      title: "The Rapid Descent from Liquidity Stress to NPA",
      description:
        "External economic shocks, client default, or prolonged project delays can quickly derail an enterprise's debt repayment ability. Under strict RBI norms, an account overdue by just 31 days is flagged as SMA-1, and at 91 days, it is classified as a Non-Performing Asset (NPA), triggering immediate legal action and credit freezing.",
      painPoints: [
        "Drastic downgrade in credit bureau rating once an account touches SMA-1 or SMA-2 status",
        "High penal interest rates compounding the existing debt burden",
        "Banks threatening SARFAESI action, asset attachment, or debt recovery proceedings",
        "Promoters attempting informal restructuring without institutional financial presentation",
      ],
    },
    targetAudience: {
      title: "Who Needs Financial Restructuring?",
      description:
        "Essential for enterprises experiencing debt servicing friction or temporary cash flow disruption.",
      profiles: [
        {
          title: "Enterprises in SMA-0 / SMA-1 / SMA-2 Categories",
          criteria: "Facing temporary liquidity crunches and needing debt repayment re-profiling before NPA.",
        },
        {
          title: "Over-Leveraged Manufacturing Units",
          criteria: "Carrying high-cost short-term debt that needs conversion into structured long-term loans.",
        },
        {
          title: "Promoters Exploring One Time Settlement (OTS)",
          criteria: "Entities with legacy stressed accounts seeking an orderly, negotiated settlement with lenders.",
        },
      ],
    },
    whatVsProvides: {
      title: "Our Restructuring Solutions",
      description:
        "We craft bankable restructuring proposals that protect enterprise viability.",
      features: [
        {
          title: "RBI Prudential Framework Realignment",
          description:
            "Structuring debt resolution plans strictly adhering to RBI's Prudential Framework for Resolution of Stressed Assets, incorporating tenure extensions and interest rationalization.",
        },
        {
          title: "Short-Term Debt to Long-Term Conversion (WCTL)",
          description:
            "Converting accumulated cash credit overdues and unpaid interest into a Working Capital Term Loan (WCTL) with a structured repayment amortization.",
        },
        {
          title: "Non-Core Asset Monetization Strategy",
          description:
            "Identifying surplus land, non-operational machinery, or investments that can be liquidated to inject equity and reduce bank liabilities.",
        },
        {
          title: "One Time Settlement (OTS) Financial Appraisal",
          description:
            "Analyzing underlying asset security valuation and drafting structured compromise settlement proposals aligned with bank OTS policies.",
        },
      ],
    },
    process: {
      title: "Our Restructuring Process",
      steps: [
        {
          stepNumber: 1,
          title: "Immediate Liquidity & Debt Audit",
          description:
            "Reviewing outstanding bank facilities, interest overdue, SMA status, and immediate cash generation capacity.",
          duration: "Days 1–3",
        },
        {
          stepNumber: 2,
          title: "Techno-Economic Viability (TEV) & Cash Modeling",
          description:
            "Building a realistic cash flow model demonstrating sustainable debt-servicing capacity under restructured terms.",
          duration: "Days 4–8",
        },
        {
          stepNumber: 3,
          title: "Restructuring Proposal Formulation",
          description:
            "Drafting institutional restructuring dossier: WCTL conversion, revised moratorium, and proposed repayment schedule.",
          duration: "Days 9–14",
        },
        {
          stepNumber: 4,
          title: "Lender Negotiations & Implementation",
          description:
            "Assisting promoter in presenting the resolution plan to the bank's Stressed Assets Management branch or Consortium.",
          duration: "Days 15–30",
        },
      ],
    },
    documentsRequired: {
      title: "Documents Required",
      categories: [
        {
          category: "Debt & Banking",
          items: [
            "All existing bank sanction letters, modification letters, and loan account statements",
            "Bank notices received (recall notices, 13(2) notices under SARFAESI, or legal summons)",
            "Audited balance sheets for past 3 years and current provisional financial statements",
            "Schedule of collateral properties with latest valuation reports",
          ],
        },
        {
          category: "Operational",
          items: [
            "Age-wise debtor and creditor aging reports",
            "Order book position and confirmed customer contracts",
            "Itemized list of all movable and immovable company assets",
          ],
        },
      ],
    },
    deliverables: {
      title: "Deliverables",
      items: [
        {
          title: "Debt Restructuring & Resolution Dossier",
          format: "PDF (30–45 pages)",
          description:
            "Institutional proposal detailing root causes of stress, viability analysis, and proposed restructured repayment terms.",
        },
        {
          title: "Restructured Cash Flow Model",
          format: "Excel (.xlsx)",
          description:
            "Monthly cash flow model showing revised debt servicing and sustainable DSCR under restructured terms.",
        },
        {
          title: "OTS Feasibility Note (if applicable)",
          format: "PDF (10–15 pages)",
          description:
            "Benchmarking compromise offer against distress asset valuation and bank settlement policy guidelines.",
        },
      ],
    },
    workflow: {
      title: "Engagement Workflow",
      stages: [
        {
          stage: "Stage 1: Crisis Assessment",
          action: "Analyze default timelines, legal notices, and immediate cash needs.",
          outcome: "Urgent defense strategy active.",
        },
        {
          stage: "Stage 2: Model & Dossier",
          action: "Construct restructured cash flow model and draft resolution plan.",
          outcome: "Bankable restructuring package ready.",
        },
        {
          stage: "Stage 3: Bank Negotiations",
          action: "Support promoter in discussions with bank recovery committees.",
          outcome: "Restructuring plan sanctioned.",
        },
      ],
    },
    faqs: [
      {
        question: "What is the difference between SMA-0, SMA-1, and SMA-2?",
        answer:
          "Special Mention Accounts (SMA) are categorized by the RBI based on overdue duration: SMA-0: Principal or interest payment overdue between 1 and 30 days. SMA-1: Overdue between 31 and 60 days. SMA-2: Overdue between 61 and 90 days. At 91 days, the account is classified as a Non-Performing Asset (NPA).",
      },
      {
        question: "Can an MSME restructure its debt without being taken to NCLT / IBC?",
        answer:
          "Yes. Under the RBI's Prudential Framework and the MSME restructuring framework, viable enterprises can negotiate bilateral or consortium debt resolution directly with their lenders without going through the National Company Law Tribunal (NCLT) or insolvency proceedings.",
      },
    ],
    relatedServiceSlugs: [
      "msme-advisory",
      "working-capital-advisory",
      "financial-modelling",
      "cma",
    ],
    disclaimer:
      "Financial restructuring advisory provides diagnostic modeling, resolution plan drafting, and negotiation support. Decisions regarding loan tenure extensions, interest concessions, or One Time Settlements are solely at the discretion of the lending institutions and their competent recovery committees.",
    seo: {
      metaTitle: "Financial Restructuring & Debt Realignment | VS Advisory",
      metaDescription:
        "Strategic debt restructuring and financial realignment for Indian MSMEs: SMA regularization, loan tenure extension, WCTL conversion, and OTS appraisal.",
      keywords: [
        "debt restructuring India",
        "MSME loan restructuring",
        "SMA-1 SMA-2 resolution",
        "one time settlement OTS consultant",
        "WCTL conversion",
      ],
    },
  },
];

// Helper Functions
export function getAllServices(): ServiceItem[] {
  return SERVICES;
}

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  const normalized = slug.toLowerCase().trim();
  return SERVICES.find(
    (s) => s.slug === normalized || s.aliases?.includes(normalized)
  );
}

export function getServicesByCategory(categoryId: string): ServiceItem[] {
  return SERVICES.filter((s) => s.categoryId === categoryId);
}

export function getAllCategories(): ServiceCategory[] {
  return SERVICE_CATEGORIES;
}

export function getRelatedServices(slugs: string[]): ServiceItem[] {
  return slugs
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is ServiceItem => s !== undefined);
}
