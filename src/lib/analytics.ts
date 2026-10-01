/** GA4 Measurement ID (G-XXXXXXX). Sem ele, nada de analytics é carregado. */
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const WHATSAPP_CLICK_EVENT = "whatsapp_click";

export interface TrackAttributes {
  "data-track-source": string;
  "data-vehicle-id"?: string;
}

/** Atributos lidos pelo WhatsAppClickTracker para identificar a origem do clique. */
export function trackAttributes(source: string, vehicleId?: string): TrackAttributes {
  return { "data-track-source": source, "data-vehicle-id": vehicleId };
}
