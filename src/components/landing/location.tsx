import { ArrowUpRight, MapPin } from "lucide-react";

import { cn } from "@/lib/utils";
import { CtaLink, focusRing } from "./cta-link";

const ADDRESS = "Av. 10, Qd. 05, Lt. 14, Nº 205, Jardim Progresso, Anápolis - GO, 75063-330";
const MAP_QUERY = encodeURIComponent("Charles Veículos, Av. 10, 205, Jardim Progresso, Anápolis - GO, 75063-330");
const MAP_EMBED_URL = `https://www.google.com/maps?q=${MAP_QUERY}&z=16&output=embed`;
const MAP_URL = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;

export function Location() {
  return (
    <section id="localizacao" className="border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[1fr_1.4fr] lg:items-center lg:py-32">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-red-600">Visite a loja</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Venha conhecer nosso pátio em Anápolis.
          </h2>
          <p className="mt-6 flex items-start gap-3 leading-relaxed text-zinc-400">
            <MapPin className="mt-1 size-5 shrink-0 text-red-600" aria-hidden />
            {ADDRESS}
          </p>
          <div className="mt-10 flex flex-col items-start gap-6">
            <CtaLink message="Olá! Vim pelo site e quero agendar uma visita à loja.">Agendar visita</CtaLink>
            <a
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-1.5 rounded-sm text-sm text-zinc-400 underline-offset-4 transition-all duration-200 ease-in-out hover:text-white hover:underline",
                focusRing,
              )}
            >
              Abrir no Google Maps
              <ArrowUpRight className="size-4" aria-hidden />
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10">
          <iframe
            title="Mapa da Charles Veículos em Anápolis"
            src={MAP_EMBED_URL}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="aspect-[4/3] w-full grayscale invert-[0.92] contrast-[0.9] lg:aspect-[16/11]"
          />
        </div>
      </div>
    </section>
  );
}
