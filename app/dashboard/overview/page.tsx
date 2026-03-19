export default function OverviewDashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Overview</h1>
        <p className="text-muted-foreground mt-1">
          Get a quick snapshot of your leads and deals. Start by adding contacts or deals.
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
      </div>
    </div>
  );
}