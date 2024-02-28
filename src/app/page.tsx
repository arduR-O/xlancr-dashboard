import Dashboard from "@/components/Dashboard/Dashboard";
import Projects from "@/components/Projects/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-10 p-10 bg-[#171717] w-fit">
      <Dashboard />
      <Projects/>
    </main>
  );
}
