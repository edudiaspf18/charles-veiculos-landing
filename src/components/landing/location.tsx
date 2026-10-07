import { ArrowUpRight, MapPin } from "lucide-react";

import { MAP_URL, STORE_ADDRESS } from "@/data/store";
import { cn } from "@/lib/utils";
import { CtaLink, focusRing } from "./cta-link";
import { MapEmbed } from "./map-embed";
import { OpeningHours } from "./opening-hours";

export function Location() {
  return (
    <section id="localizacao" className="border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1fr_1.4fr] lg:items-center lg:py-32">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-red-500">Visite a loja</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Venha conhecer nosso pátio em Anápolis.
          </h2>
          <p className="mt-6 flex items-start gap-3 leading-relaxed text-zinc-400">
            <MapPin className="mt-1 size-5 shrink-0 text-red-600" aria-hidden />
            {STORE_ADDRESS}
          </p>
          <div className="mt-8">
            <OpeningHours />
          </div>
          <div className="mt-10 flex flex-col items-start gap-6">
            <CtaLink trackSource="location_visit" message="Olá! Vim pelo site e quero agendar uma visita à loja.">Agendar visita</CtaLink>
            <a
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex h-11 items-center gap-1.5 rounded-sm text-sm text-zinc-400 underline-offset-4 transition-all duration-200 ease-in-out hover:text-white hover:underline",
                focusRing,
              )}
            >
              Abrir no Google Maps
              <ArrowUpRight className="size-4" aria-hidden />
            </a>
          </div>
        </div>

        {/* Sem mapa no celular: só endereço, horário e link para o Google Maps. */}
        <div className="hidden overflow-hidden rounded-3xl border border-white/10 md:block">
          <MapEmbed />
        </div>
      </div>
    </section>
  );
}
