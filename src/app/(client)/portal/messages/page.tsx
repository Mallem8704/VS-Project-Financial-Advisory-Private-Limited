"use client";

import React, { useState } from "react";
import { Send, User, Paperclip, Clock, ShieldCheck } from "lucide-react";

interface MessageItem {
  id: string;
  sender: "client" | "advisor";
  senderName: string;
  senderRole: string;
  time: string;
  content: string;
  attachmentName?: string;
}

export default function ClientMessagesPage() {
  const [messages, setMessages] = useState<MessageItem[]>([
    {
      id: "msg-1",
      sender: "advisor",
      senderName: "Vikram Singhania",
      senderRole: "VP, Credit & Project Finance",
      time: "24 Jan, 11:30 AM",
      content:
        "Good morning Rajesh ji. We have reconciled your FY23 GSTR-1 turnover against your provisional balance sheet. The numbers align well. However, for Form IV (MPBF), we need clarification on whether the ₹18 Lakhs advance from customers is refundable or against ongoing job work.",
    },
    {
      id: "msg-2",
      sender: "client",
      senderName: "Rajesh Sharma",
      senderRole: "Managing Director (Client)",
      time: "24 Jan, 02:15 PM",
      content:
        "Hello Vikram ji. The ₹18 Lakhs is a commercial advance against supply of machined valve bodies to BHEL with 60 days delivery cycle. It is not a refundable deposit and will be adjusted in February billing.",
    },
    {
      id: "msg-3",
      sender: "advisor",
      senderName: "Vikram Singhania",
      senderRole: "VP, Credit & Project Finance",
      time: "24 Jan, 04:45 PM",
      content:
        "Understood. That allows us to classify it as a current trade advance rather than other current borrowing, which keeps your Current Ratio above 1.35 under Method II. We will reflect this in Form III notes.",
    },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        id: `msg-${Date.now()}`,
        sender: "client",
        senderName: "Rajesh Sharma",
        senderRole: "Managing Director",
        time: "Just now",
        content: newMessage,
      },
    ]);
    setNewMessage("");
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="border-b border-navy-100 pb-4">
        <span className="text-[11px] font-bold uppercase tracking-wider text-gold-dark">
          Direct Advisory Channel
        </span>
        <h1 className="text-2xl font-serif font-bold text-navy-dark">
          Advisor Messages
        </h1>
        <p className="text-xs text-navy-600 mt-0.5">
          Confidential thread with Assigned Project Team: Vikram Singhania (VP, Credit) & Ananya Roy (Analyst).
        </p>
      </div>

      {/* Messages Thread Container */}
      <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-institutional flex flex-col h-[520px]">
        {/* Messages List */}
        <div className="flex-1 overflow-y-auto space-y-4 pr-2">
          {messages.map((m) => {
            const isClient = m.sender === "client";
            return (
              <div
                key={m.id}
                className={`flex flex-col ${isClient ? "items-end" : "items-start"}`}
              >
                <div className="flex items-center gap-2 mb-1 text-[11px] text-navy-500">
                  <span className="font-bold text-navy-800">{m.senderName}</span>
                  <span>({m.senderRole})</span>
                  <span>•</span>
                  <span>{m.time}</span>
                </div>
                <div
                  className={`max-w-xl rounded-2xl p-4 text-xs leading-relaxed ${
                    isClient
                      ? "bg-navy text-white rounded-br-none"
                      : "bg-warm-100 border border-navy-100 text-navy-900 rounded-bl-none"
                  }`}
                >
                  <p>{m.content}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Input Bar */}
        <form
          onSubmit={handleSendMessage}
          className="mt-4 pt-4 border-t border-navy-100 flex items-center gap-3"
        >
          <input
            type="text"
            placeholder="Type your message or clarification to the advisory team..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1 rounded-xl border border-navy-200 px-4 py-2.5 text-xs focus:border-gold focus:outline-none"
          />
          <button
            type="submit"
            className="inline-flex items-center gap-1.5 rounded-xl bg-gold px-5 py-2.5 text-xs font-bold text-white hover:bg-gold-hover transition-all"
          >
            <Send className="h-3.5 w-3.5" />
            <span>Send</span>
          </button>
        </form>
      </div>
    </div>
  );
}
