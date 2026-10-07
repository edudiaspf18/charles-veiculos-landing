import { MessageCircle } from "lucide-react";

import { trackAttributes } from "@/lib/analytics";
import { whatsappUrl } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  return (
    <aside aria-label="Contato rápido">
      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar no WhatsApp"
        {...trackAttributes("floating_button")}
        className="fixed bottom-5 right-5 z-50 inline-flex size-14 items-center justify-center rounded-full bg-[#25D366] text-black shadow-sm transition-all duration-200 ease-in-out hover:bg-[#3be077] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      >
        <MessageCircle className="size-6" aria-hidden />
      </a>
    </aside>
  );
}
