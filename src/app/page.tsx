import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { UnderConstruction } from "@/components/construction/UnderConstruction";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50/50 text-zinc-900 transition-colors dark:bg-zinc-950 dark:text-zinc-100">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center">
        <UnderConstruction />
      </main>
      <Footer />
    </div>
  );
}
