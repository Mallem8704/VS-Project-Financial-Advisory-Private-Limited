import { NextRequest, NextResponse } from "next/server";
import { dprService } from "@/server/services/dpr.service";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const summary = await dprService.generateExecutiveSummary({
      projectId: body.projectId || "temp-prj",
      projectTitle: body.projectTitle || "Proposed Expansion Project",
      industry: body.industry || "Manufacturing",
      totalCostInLakhs: body.totalCostInLakhs || 350,
      promoterProfile: body.promoterProfile || "Experienced industrial promoter",
      targetMarket: body.targetMarket || "Domestic and export markets",
    });

    return NextResponse.json({ success: true, summary });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
