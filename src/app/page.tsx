import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { UnderConstruction } from "@/components/construction/UnderConstruction";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900 antialiased selection:bg-blue-100 selection:text-blue-900">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center">
        <UnderConstruction />
      </main>
      <Footer />
    </div>
  );
}
