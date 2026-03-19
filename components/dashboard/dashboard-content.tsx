"use client";

export function DashboardContent() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          Welcome to LeadFlow
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Your command center for managing leads, contacts, and deals.
        </p>
        <div className="mt-6 flex gap-3">
          <a
            href="/dashboard/contacts"
            className="rounded-md bg-primary text-white px-4 py-2 font-medium hover:bg-primary/90 transition"
          >
            Add Contact
          </a>
          <a
            href="/dashboard/deals"
            className="rounded-md bg-muted px-4 py-2 font-medium text-foreground hover:bg-muted/75 transition"
          >
            Add Deal
          </a>
        </div>
        <div className="mt-8 text-lg text-muted-foreground">
          No leads yet. Start by adding your first contact or deal.
        </div>
      </div>
    </div>
  );
}