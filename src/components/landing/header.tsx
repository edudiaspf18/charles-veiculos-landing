import { ArrowUpRight } from "lucide-react";

import { whatsappUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { focusRing } from "./cta-link";
import { Logo } from "./logo";

const NAV = [
  { href: "#estoque", label: "Estoque" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:h-24 sm:px-8">
        <Logo className="h-11 sm:h-14" />
        <nav aria-label="Principal" className="hidden items-center gap-10 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn("rounded-sm text-sm text-zinc-300 transition-all duration-200 ease-in-out hover:text-white", focusRing)}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "inline-flex h-10 items-center gap-2 rounded-full border border-white/25 px-5 text-sm font-medium text-white transition-all duration-200 ease-in-out hover:border-white/60 hover:bg-white/5",
            focusRing,
          )}
        >
          Fale Conosco
          <ArrowUpRight className="size-4" aria-hidden />
        </a>
      </div>
    </header>
  );
}
