import { NextRequest, NextResponse } from "next/server";
import { getSessionUser } from "@/lib/auth/server-guard";

// In-memory fallback draft cache
const draftCache = new Map<string, { draft: any; updatedAt: Date }>();

export async function GET(req: NextRequest) {
  try {
    const session = await getSessionUser(req);
    const userId = session?.sub || req.nextUrl.searchParams.get("email");

    if (!userId) {
      return NextResponse.json({ success: true, draft: null });
    }

    const cached = draftCache.get(userId);
    return NextResponse.json({
      success: true,
      draft: cached ? cached.draft : null,
      updatedAt: cached ? cached.updatedAt : null,
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getSessionUser(req);
    const body = await req.json();
    const userId = session?.sub || body?.email || "anonymous_draft";

    draftCache.set(userId, {
      draft: body.draft,
      updatedAt: new Date(),
    });

    return NextResponse.json({ success: true, savedAt: new Date().toISOString() });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
