"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";

import { MAP_EMBED_URL } from "@/data/store";
import { cn } from "@/lib/utils";
import { focusRing } from "./cta-link";

const FRAME = "aspect-[4/3] w-full lg:aspect-[16/11]";

// O Google Maps só é carregado depois do clique: antes disso nenhum dado sai do navegador (LGPD).
export function MapEmbed() {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        title="Mapa da Charles Veículos em Anápolis"
        src={MAP_EMBED_URL}
        referrerPolicy="no-referrer-when-downgrade"
        className={cn(FRAME, "grayscale invert-[0.92] contrast-[0.9]")}
      />
    );
  }

  return (
    <div className={cn(FRAME, "flex flex-col items-center justify-center gap-5 bg-zinc-950 p-8 text-center")}>
      <MapPin className="size-8 text-red-600" aria-hidden />
      <p className="max-w-xs text-sm leading-relaxed text-zinc-400">
        O mapa é fornecido pelo Google. Ao carregá-lo, o Google pode coletar dados do seu acesso.
      </p>
      <button
        type="button"
        onClick={() => setLoaded(true)}
        className={cn(
          "inline-flex h-11 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-medium text-white transition-all duration-200 ease-in-out hover:border-white/50",
          focusRing,
        )}
      >
        Ver mapa
      </button>
    </div>
  );
}
