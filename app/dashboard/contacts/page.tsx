export default function ContactsDashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Contacts</h1>
        <p className="text-muted-foreground mt-1">
          No contacts yet. Add your first contact to start building relationships.
        </p>
        <div className="mt-6">
          <a
            href="#"
            className="rounded-md bg-primary text-white px-4 py-2 font-medium hover:bg-primary/90 transition"
          >
            Add Contact
          </a>
        </div>
      </div>
    </div>
  );
}