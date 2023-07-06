import Dashboard from "@/components/ui/dashboard/Dashboard";

export default function Home() {
  return (
    <main className="py-6 xl:px-20 px-4 lg:px-8 space-y-4">
      <div className="dashbord">
        <h1 className="text-sm opacity-40 font-semibold">Dashboard</h1>
      </div>

      <Dashboard />
    </main>
  );
}
