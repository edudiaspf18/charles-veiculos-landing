import { Benefits } from "@/components/landing/benefits";
import { Faq } from "@/components/landing/faq";
import { FinalCta } from "@/components/landing/final-cta";
import { FloatingWhatsApp } from "@/components/landing/floating-whatsapp";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Location } from "@/components/landing/location";
import { Showcase } from "@/components/landing/showcase";
import { SITE_URL } from "@/lib/site";
import { WHATSAPP_NUMBER } from "@/lib/whatsapp";

const DEALER_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "AutoDealer",
  name: "Charles Veículos & Locadora",
  url: SITE_URL,
  telephone: `+${WHATSAPP_NUMBER}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. 10, Qd. 05, Lt. 14, Nº 205, Jardim Progresso",
    addressLocality: "Anápolis",
    addressRegion: "GO",
    postalCode: "75063-330",
    addressCountry: "BR",
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "13:00" },
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-black font-sans text-zinc-100 antialiased">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(DEALER_JSON_LD).replace(/</g, "\\u003c") }} />
      <Header />
      <main id="conteudo">
        <Hero />
        <Showcase />
        <Benefits />
        <FinalCta />
        <Faq />
        <Location />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
