import Image from "next/image";
import { Dashboard } from "@/components/dashboard";
import PromptGenerator from "@/components/prompt";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <PromptGenerator />
      <Dashboard />
    </main>
  );
}
