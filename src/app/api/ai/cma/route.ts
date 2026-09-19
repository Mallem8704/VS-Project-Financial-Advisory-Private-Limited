import { NextRequest, NextResponse } from "next/server";
import { cmaService } from "@/server/services/cma.service";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const mpbf = cmaService.computeWorkingCapitalLimits({
      projectedTurnoverInLakhs: body.projectedTurnoverInLakhs || 400,
      totalCurrentAssetsInLakhs: body.totalCurrentAssetsInLakhs || 160,
      otherCurrentLiabilitiesInLakhs: body.otherCurrentLiabilitiesInLakhs || 40,
    });

    return NextResponse.json({ success: true, mpbf });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
