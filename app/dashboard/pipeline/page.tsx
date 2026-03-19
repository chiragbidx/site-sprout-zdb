export default function PipelineDashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Sales Pipeline</h1>
        <p className="text-muted-foreground mt-1">
          Your sales pipeline is empty. Add deals to visualize your progress.
        </p>
        <div className="mt-6">
          <a
            href="#"
            className="rounded-md bg-primary text-white px-4 py-2 font-medium hover:bg-primary/90 transition"
          >
            Add Deal
          </a>
        </div>
      </div>
    </div>
  );
}