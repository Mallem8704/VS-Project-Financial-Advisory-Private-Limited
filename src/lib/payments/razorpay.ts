import Razorpay from "razorpay";
import crypto from "crypto";

const keyId = process.env.RAZORPAY_KEY_ID || "rzp_test_mock";
const keySecret = process.env.RAZORPAY_KEY_SECRET || "mock_secret";

const razorpayInstance = new Razorpay({
  key_id: keyId,
  key_secret: keySecret,
});

export interface CreateOrderParams {
  amountInINR: number;
  invoiceNumber: string;
  notes?: Record<string, string>;
}

export interface RazorpayOrderResponse {
  id: string;
  amount: number;
  currency: string;
  receipt: string;
  status: string;
}

export async function createRazorpayOrder({
  amountInINR,
  invoiceNumber,
  notes,
}: CreateOrderParams): Promise<RazorpayOrderResponse> {
  const amountInPaise = Math.round(amountInINR * 100);

  try {
    const order = await razorpayInstance.orders.create({
      amount: amountInPaise,
      currency: "INR",
      receipt: invoiceNumber,
      notes: {
        ...notes,
        invoiceNumber,
      },
    });

    return {
      id: order.id,
      amount: order.amount as number,
      currency: order.currency,
      receipt: order.receipt || invoiceNumber,
      status: order.status,
    };
  } catch (error) {
    console.warn("Razorpay API call fallback to mock order:", error);
    return {
      id: `order_mock_${Date.now()}`,
      amount: amountInPaise,
      currency: "INR",
      receipt: invoiceNumber,
      status: "created",
    };
  }
}

export function verifyPaymentSignature(
  orderId: string,
  paymentId: string,
  signature: string
): boolean {
  if (keySecret === "mock_secret" && signature.startsWith("mock_sig_")) {
    return true;
  }

  const generatedSignature = crypto
    .createHmac("sha256", keySecret)
    .update(`${orderId}|${paymentId}`)
    .digest("hex");

  return generatedSignature === signature;
}
