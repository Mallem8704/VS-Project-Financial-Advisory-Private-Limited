"use client";

import React, { useState } from "react";
import { LifeBuoy, Plus, CheckCircle2, Clock, AlertCircle } from "lucide-react";

interface Ticket {
  id: string;
  ticketNumber: string;
  subject: string;
  priority: "LOW" | "MEDIUM" | "HIGH" | "URGENT";
  status: "OPEN" | "IN_PROGRESS" | "RESOLVED";
  assignedTo: string;
  createdAt: string;
}

export default function SupportTicketsPage() {
  const [tickets, setTickets] = useState<Ticket[]>([
    {
      id: "t-1",
      ticketNumber: "TCK-2024-031",
      subject: "Clarification on SBI SME Carve-out for Subsidies",
      priority: "HIGH",
      status: "IN_PROGRESS",
      assignedTo: "Vikram Singhania (VP, Credit)",
      createdAt: "22 Jan 2024",
    },
    {
      id: "t-2",
      ticketNumber: "TCK-2024-019",
      subject: "Request for Draft Copy of CMA Form IV in Excel Format",
      priority: "MEDIUM",
      status: "RESOLVED",
      assignedTo: "Ananya Roy (Financial Analyst)",
      createdAt: "18 Jan 2024",
    },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [newSubject, setNewSubject] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newPriority, setNewPriority] = useState<Ticket["priority"]>("MEDIUM");

  const handleCreateTicket = (e: React.FormEvent) => {
    e.preventDefault();
    setTickets([
      {
        id: `t-${Date.now()}`,
        ticketNumber: `TCK-2024-0${Math.floor(Math.random() * 90 + 10)}`,
        subject: newSubject,
        priority: newPriority,
        status: "OPEN",
        assignedTo: "Senior Advisory Desk",
        createdAt: "Just now",
      },
      ...tickets,
    ]);
    setModalOpen(false);
    setNewSubject("");
    setNewDescription("");
  };

  return (
    <div className="space-y-6 max-w-5xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-navy-100 pb-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-gold-dark">
            Assistance & Queries
          </span>
          <h1 className="text-2xl font-serif font-bold text-navy-dark">
            Support & Advisory Tickets
          </h1>
          <p className="text-xs text-navy-600 mt-0.5">
            Log technical, banking, or document queries with standard 4-hour SLA response.
          </p>
        </div>

        <button
          onClick={() => setModalOpen(true)}
          className="inline-flex items-center gap-1.5 rounded-lg bg-gold px-4 py-2 text-xs font-bold text-white hover:bg-gold-hover transition-all"
        >
          <Plus className="h-4 w-4" />
          <span>Raise New Query Ticket</span>
        </button>
      </div>

      {/* Tickets List */}
      <div className="rounded-xl border border-navy-100 bg-white overflow-hidden shadow-sm">
        <div className="divide-y divide-navy-50 text-xs">
          {tickets.map((t) => (
            <div key={t.id} className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-warm-50/50 transition-colors">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-navy-900">{t.ticketNumber}</span>
                  <span
                    className={`text-[9px] font-bold px-2 py-0.5 rounded border ${
                      t.priority === "URGENT" || t.priority === "HIGH"
                        ? "bg-red-50 text-red-800 border-red-200"
                        : "bg-blue-50 text-blue-800 border-blue-200"
                    }`}
                  >
                    {t.priority} PRIORITY
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-navy-dark">{t.subject}</h3>
                <p className="text-[11px] text-navy-500">
                  Assigned To: {t.assignedTo} • Logged: {t.createdAt}
                </p>
              </div>

              <div>
                <span
                  className={`inline-block text-[10px] font-bold px-2.5 py-1 rounded border ${
                    t.status === "RESOLVED"
                      ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                      : t.status === "IN_PROGRESS"
                      ? "bg-amber-50 text-amber-800 border-amber-200"
                      : "bg-navy-50 text-navy-800 border-navy-100"
                  }`}
                >
                  {t.status.replace("_", " ")}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-navy-100 pb-3">
              <h3 className="text-sm font-bold text-navy-dark">Raise Advisory Query</h3>
              <button onClick={() => setModalOpen(false)} className="text-navy-400 hover:text-navy-700">
                ✕
              </button>
            </div>
            <form onSubmit={handleCreateTicket} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-navy-900 uppercase mb-1">Subject</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Subsidy eligibility query"
                  value={newSubject}
                  onChange={(e) => setNewSubject(e.target.value)}
                  className="w-full rounded-lg border border-navy-200 p-2 text-xs focus:border-gold focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-navy-900 uppercase mb-1">Priority</label>
                <select
                  value={newPriority}
                  onChange={(e) => setNewPriority(e.target.value as Ticket["priority"])}
                  className="w-full rounded-lg border border-navy-200 p-2 text-xs focus:border-gold focus:outline-none bg-white"
                >
                  <option value="LOW">Low</option>
                  <option value="MEDIUM">Medium</option>
                  <option value="HIGH">High</option>
                  <option value="URGENT">Urgent (Credit Committee Deadline)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-navy-900 uppercase mb-1">Query Details</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Describe your question or required advisory assistance..."
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  className="w-full rounded-lg border border-navy-200 p-2 text-xs focus:border-gold focus:outline-none"
                />
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="rounded px-3 py-1.5 text-xs text-navy-600 hover:bg-warm-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded bg-gold px-4 py-1.5 text-xs font-bold text-white hover:bg-gold-hover"
                >
                  Submit Query Ticket
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
