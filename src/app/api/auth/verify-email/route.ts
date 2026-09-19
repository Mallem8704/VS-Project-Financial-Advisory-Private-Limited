import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { verifyAndConsumeEmailToken } from '@/lib/auth/auth-store';

const schema = z.object({
  token: z.string().min(10, 'Valid verification token is required'),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.errors[0]?.message || 'Invalid token' },
        { status: 400 }
      );
    }

    const { token } = parsed.data;
    const ok = await verifyAndConsumeEmailToken(token);

    if (!ok) {
      return NextResponse.json(
        { success: false, error: 'Verification link is invalid or has expired.' },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Official email verified successfully. Your enterprise workspace is fully active.',
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message || 'Verification failed' },
      { status: 500 }
    );
  }
}
