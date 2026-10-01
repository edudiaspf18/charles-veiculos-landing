"use client";

import { useEffect } from "react";
import { GoogleAnalytics, sendGAEvent } from "@next/third-parties/google";

import { GA_ID, WHATSAPP_CLICK_EVENT } from "@/lib/analytics";

const WHATSAPP_LINK = 'a[href^="https://wa.me/"]';

// Um único listener delegado no document mantém os links de WhatsApp como Server Components.
function WhatsAppClickTracker() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest<HTMLAnchorElement>(WHATSAPP_LINK);
      if (!link) return;

      sendGAEvent("event", WHATSAPP_CLICK_EVENT, {
        source: link.dataset.trackSource ?? "unknown",
        vehicle_id: link.dataset.vehicleId,
        page_path: window.location.pathname,
      });
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}

export function Analytics() {
  if (!GA_ID) return null;

  return (
    <>
      <GoogleAnalytics gaId={GA_ID} />
      <WhatsAppClickTracker />
    </>
  );
}
