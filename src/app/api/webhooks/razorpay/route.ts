import { NextRequest, NextResponse } from "next/server";
import { verifyPaymentSignature } from "@/lib/payments/razorpay";
import { logAuditEvent } from "@/server/audit/audit-logger";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const signature = req.headers.get("x-razorpay-signature") || "";

    const orderId = body.payload?.payment?.entity?.order_id || "";
    const paymentId = body.payload?.payment?.entity?.id || "";

    const isValid = verifyPaymentSignature(orderId, paymentId, signature);

    await logAuditEvent({
      actorId: "system-razorpay-webhook",
      actorEmail: "webhook@razorpay.com",
      actorRole: "SYSTEM_GATEWAY",
      action: isValid ? "WEBHOOK_PAYMENT_VERIFIED" : "WEBHOOK_SIGNATURE_FAILED",
      resource: "PaymentTransaction",
      resourceId: paymentId,
      metadata: { orderId, paymentId, status: body.event },
    });

    return NextResponse.json({ success: true, verified: isValid });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
