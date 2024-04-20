import Image from "next/image";
import { Dashboard } from "@/components/dashboard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Dashboard />
    </main>
  );
}
