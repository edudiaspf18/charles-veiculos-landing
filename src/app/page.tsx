import { Benefits } from "@/components/landing/benefits";
import { FinalCta } from "@/components/landing/final-cta";
import { FloatingWhatsApp } from "@/components/landing/floating-whatsapp";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Location } from "@/components/landing/location";
import { Showcase } from "@/components/landing/showcase";

export default function Home() {
  return (
    <div className="min-h-screen bg-black font-sans text-zinc-100 antialiased">
      <Header />
      <main>
        <Hero />
        <Showcase />
        <Benefits />
        <FinalCta />
        <Location />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
