import Activity from "@/components/ui/Activity";
import Projects from "@/components/ui/Projects";
import Stats from "@/components/ui/Stats";
import Image from "next/image";

export default function Home() {
  return (
    <main className="py-6 xl:px-20 px-4 lg:px-8 space-y-4">
      <div className="dashbord">
        <h1 className="text-sm opacity-40 font-semibold">Dashboard</h1>
      </div>

      <div className="dashboard flex flex-col md:flex-row gap-8">
        <div className="group-two md:w-2/3 space-y-8">
          <Projects />
          <Activity />
        </div>
        <div className="group-one md:w-1/3 ">
          <Stats />
        </div>
      </div>
    </main>
  );
}
