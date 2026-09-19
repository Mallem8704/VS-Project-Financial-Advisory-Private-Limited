export interface LeadershipMember {
  id: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  focusAreas: string[];
  isPlaceholder: boolean;
  avatarPlaceholder: string;
  linkedInUrl?: string;
}

export interface AboutData {
  company: {
    legalName: string;
    brandName: string;
    tagline: string;
    secondaryTagline: string;
    philosophy: string;
    incorporationType: string;
    purpose: string;
    story: {
      paragraph1: string;
      paragraph2: string;
      paragraph3: string;
    };
  };
  missionVision: {
    mission: string;
    vision: string;
    coreValues: Array<{
      title: string;
      description: string;
    }>;
  };
  philosophy: {
    statement: string;
    pillars: Array<{
      title: string;
      description: string;
    }>;
  };
  triadModel: {
    title: string;
    description: string;
    components: Array<{
      title: string;
      tagline: string;
      description: string;
      deliverables: string[];
    }>;
  };
  ethics: {
    title: string;
    description: string;
    commitments: Array<{
      title: string;
      description: string;
    }>;
  };
  leadership: LeadershipMember[];
}

export const ABOUT_DATA: AboutData = {
  company: {
    legalName: "VS Project & Financial Advisory Private Limited",
    brandName: "VS Project & Financial Advisory",
    tagline: "From Business Idea to Bank Sanction — Everything Under One Roof.",
    secondaryTagline: "Empowering Businesses with Finance, Compliance & AI.",
    philosophy:
      "Strong businesses require more than funding. They require structured planning, financial discipline, compliance, documentation and the right financing strategy.",
    incorporationType: "Private Limited Company (Registered in India)",
    purpose:
      "To eliminate the information and preparation asymmetry that prevents viable Indian MSMEs and ambitious entrepreneurs from securing formal banking credit and institutional growth capital.",
    story: {
      paragraph1:
        "In the Indian economic landscape, micro, small, and medium enterprises (MSMEs) drive industrial innovation, job creation, and export potential. Yet, an overwhelming majority of viable credit applications face prolonged delays or outright rejection at bank credit committees—not due to a lack of commercial merit, but due to unstructured project documentation, flawed CMA ratios, unverified capex schedules, and incomplete statutory compliance.",
      paragraph2:
        "VS Project & Financial Advisory Private Limited was conceived to bridge this exact divide. Traditionally, entrepreneurs are forced to navigate a fragmented network of disconnected agents: chartered accountants who handle compliance but lack project engineering expertise, local loan brokers who offer no analytical depth, and technical consultants who do not understand bank credit underwriting frameworks.",
      paragraph3:
        "By bringing business advisory, project feasibility, DPR formulation, CMA data preparation, regulatory compliance, and banking coordination under one institutional roof, VS provides founders and enterprises with the disciplined financial rigor required to face commercial lenders with absolute confidence.",
    },
  },

  missionVision: {
    mission:
      "To empower Indian entrepreneurs, MSMEs, and enterprises by institutionalizing their project preparation, fortifying their credit readiness, and providing end-to-end advisory from business idea validation to bank sanction and post-sanction growth.",
    vision:
      "To become India's most trusted, rigorous, and technologically advanced MSME project finance and business advisory platform—recognized for zero-compromise compliance, transparent execution, and banker-grade financial engineering.",
    coreValues: [
      {
        title: "Financial Discipline",
        description: "Upholding rigorous accounting standards (Ind AS/GAAP) and realistic cash flow forecasting over speculative financial projections.",
      },
      {
        title: "Regulatory Integrity",
        description: "Strict adherence to RBI Master Directions, Tandon/Nayak working capital norms, and statutory tax frameworks without shortcuts.",
      },
      {
        title: "Absolute Transparency",
        description: "Clear communication of true credit readiness, zero fabricated guarantees, and unbiased lender suitability analysis.",
      },
      {
        title: "Technological Precision",
        description: "Deploying algorithmic modeling and automated DPR synthesis to deliver institutional speed without sacrificing analytical depth.",
      },
      {
        title: "Confidentiality & Stewardship",
        description: "Safeguarding proprietary business plans, financial models, and promoter assets under strict bilateral NDA protocols.",
      },
    ],
  },

  philosophy: {
    statement:
      "Strong businesses require more than funding. They require structured planning, financial discipline, compliance, documentation and the right financing strategy.",
    pillars: [
      {
        title: "Structured Planning",
        description: "Validating techno-economic feasibility, unit economics, supply chain security, and capex phasing before capital is deployed.",
      },
      {
        title: "Financial Discipline",
        description: "Maintaining sustainable debt service coverage (DSCR > 1.33x), conservative leverage (TOL/TNW), and adequate liquidity buffers.",
      },
      {
        title: "Statutory Compliance",
        description: "Ensuring 100% on-time GST reconciliations, clean MCA/ROC records, and complete regulatory clearances before bank filing.",
      },
      {
        title: "Bankable Documentation",
        description: "Formulating comprehensive 8-chapter DPRs and Form I to VI CMA sheets that directly answer credit committee risk questions.",
      },
      {
        title: "Right Financing Strategy",
        description: "Aligning project gestation periods with the appropriate debt instruments, interest subventions, and CGTMSE guarantee schemes.",
      },
    ],
  },

  triadModel: {
    title: "Finance + Compliance + Technology",
    description:
      "A unified operating framework engineered to deliver bank-ready outcomes where traditional fragmented consultancy models fail.",
    components: [
      {
        title: "Project Finance",
        tagline: "Debt Syndication & Structuring",
        description:
          "End-to-end debt structuring, term loan syndication, working capital limits (CC/OD), and letter of credit/bank guarantee lines tailored to project cash flows.",
        deliverables: [
          "Means of finance design & debt-equity optimization",
          "Bankable 8-chapter Detailed Project Report (DPR)",
          "Form I to VI CMA data with Tandon Method II MPBF",
          "Credit committee representation & query resolution",
        ],
      },
      {
        title: "Statutory Compliance",
        tagline: "Regulatory Formalization",
        description:
          "Pre-submission compliance audits, GST and tax reconciliations, Udyam registration, corporate secretarial filings, and environmental NOC clearances.",
        deliverables: [
          "Udyam MSME certification & formalization",
          "GST reconciliation & input tax credit audits",
          "MoA/AoA borrowing power alignment (Sec 180)",
          "Commercial credit scrub (CIBIL / CCR records)",
        ],
      },
      {
        title: "Intelligent Technology",
        tagline: "Algorithmic Precision",
        description:
          "Proprietary digital gateways that model cash flow sensitivities, compute MPBF thresholds, evaluate readiness scores, and accelerate DPR chapter drafting.",
        deliverables: [
          "Real-time 15-variable Finance Readiness Score",
          "Multi-scenario DCF and break-even sensitivity engines",
          "Automated financial ratio stress-testing models",
          "Secure private cloud document repository with signed URLs",
        ],
      },
    ],
  },

  ethics: {
    title: "Ethics, Governance & Confidentiality",
    description:
      "Operating with the fiduciary responsibility and rigorous standards demanded by the Indian banking and corporate advisory ecosystem.",
    commitments: [
      {
        title: "Zero Guarantee Policy",
        description:
          "We never claim guaranteed bank sanction or pre-approved funding. Sanction is at the sole discretion of the lending bank; our mandate is to deliver flawless financial preparation.",
      },
      {
        title: "Bilateral Non-Disclosure Agreements",
        description:
          "Every client engagement is executed under a legally binding bilateral Non-Disclosure Agreement (NDA). Your business concepts, patents, and financials are never shared without explicit consent.",
      },
      {
        title: "No Hidden Commissions or Undisclosed Fees",
        description:
          "Our advisory fee structure is 100% transparent and milestone-driven. We do not accept undisclosed kickbacks or compromise our fiduciary independence.",
      },
      {
        title: "Statutory & Banking Conformity",
        description:
          "All financial models, project appraisals, and CMA sheets strictly adhere to Reserve Bank of India (RBI) prudential guidelines and Indian Accounting Standards.",
      },
    ],
  },

  leadership: [
    {
      id: "leader-1",
      name: "[Founder & Managing Director - To Be Supplied]",
      role: "Managing Director & Principal Architect",
      department: "Corporate Strategy & Project Finance",
      bio: "Leads the firm's strategic vision, institutional lender relations, and credit syndication frameworks. Profile details and professional background will be updated upon formal verification.",
      focusAreas: ["Project Finance Syndication", "Bank Credit Committee Liaison", "Macroeconomic Debt Structuring"],
      isPlaceholder: true,
      avatarPlaceholder: "MD",
    },
    {
      id: "leader-2",
      name: "[Director of Financial Modelling - To Be Supplied]",
      role: "Director – Financial Modelling & CMA Systems",
      department: "Credit Appraisal & Financial Engineering",
      bio: "Oversees the formulation of CMA Form I–VI data, Tandon Method II MPBF algorithms, and multi-scenario DCF valuation models. Detailed professional credentials to be provided.",
      focusAreas: ["CMA Data Compilation", "Working Capital Gap Analysis", "Debt Service Coverage (DSCR) Modelling"],
      isPlaceholder: true,
      avatarPlaceholder: "DF",
    },
    {
      id: "leader-3",
      name: "[Head of DPR & Technical Appraisal - To Be Supplied]",
      role: "Head – Detailed Project Reports (DPR)",
      department: "Technical Feasibility & Industrial Research",
      bio: "Supervises the preparation of 8-chapter bankable DPRs, techno-economic viability studies, and capital expenditure scheduling across manufacturing and infrastructure verticals.",
      focusAreas: ["Techno-Economic Viability (TEV)", "Capex Scheduling", "Cluster & Market Potential Audits"],
      isPlaceholder: true,
      avatarPlaceholder: "HD",
    },
    {
      id: "leader-4",
      name: "[Head of Regulatory Compliance - To Be Supplied]",
      role: "Head – Statutory Compliance & Legal Governance",
      department: "Regulatory Compliance & Secretarial Audit",
      bio: "Manages statutory formalization, GST audits, corporate secretarial filings under the Companies Act, and government scheme eligibility documentation for client dockets.",
      focusAreas: ["GST & Tax Reconciliations", "ROC & Secretarial Compliance", "CGTMSE & Capital Subsidies"],
      isPlaceholder: true,
      avatarPlaceholder: "HC",
    },
  ],
};
