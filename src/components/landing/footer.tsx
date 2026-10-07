import Link from "next/link";
import { AtSign, MapPin, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { STORE_ADDRESS, STORE_CNPJ, STORE_NAME } from "@/data/store";
import { trackAttributes } from "@/lib/analytics";
import { INSTAGRAM_URL, WHATSAPP_DISPLAY, whatsappUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { focusRing } from "./cta-link";
import { Logo } from "./logo";

interface FooterLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

function FooterLink({ href, icon: Icon, label }: FooterLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...trackAttributes("footer")}
      className={cn("inline-flex items-center gap-2 rounded-sm text-sm text-zinc-300 transition-all duration-200 ease-in-out hover:text-white", focusRing)}
    >
      <Icon className="size-4 text-zinc-400" aria-hidden />
      {label}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Logo className="h-16" />
          <p className="mt-5 text-sm text-zinc-400">CNPJ: {STORE_CNPJ}</p>
          <Link
            href="/privacidade"
            className={cn("mt-3 inline-block rounded-sm text-sm text-zinc-400 underline underline-offset-4 transition-all duration-200 ease-in-out hover:text-white", focusRing)}
          >
            Política de Privacidade
          </Link>
          <Link
            href="/termos"
            className={cn("mt-2 block w-fit rounded-sm text-sm text-zinc-400 underline underline-offset-4 transition-all duration-200 ease-in-out hover:text-white", focusRing)}
          >
            Termos de Uso
          </Link>
        </div>
        <address className="flex items-start gap-2 text-sm not-italic leading-relaxed text-zinc-400">
          <MapPin className="mt-0.5 size-4 shrink-0 text-zinc-400" aria-hidden />
          {STORE_ADDRESS}
        </address>
        <div className="flex flex-col gap-3 md:items-end">
          <FooterLink href={INSTAGRAM_URL} icon={AtSign} label="charles_veiculos01" />
          <FooterLink href={whatsappUrl()} icon={Phone} label={WHATSAPP_DISPLAY} />
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 text-xs leading-relaxed text-zinc-400 sm:px-8 md:flex-row md:items-end md:justify-between md:gap-12">
          <p className="max-w-3xl">
            © {new Date().getFullYear()} {STORE_NAME}. Preços, condições e disponibilidade sujeitos a alteração sem aviso prévio. Consulte a loja antes de fechar negócio.
          </p>
          <p className="shrink-0">
            Desenvolvido por{" "}
            <a
              href="https://www.instagram.com/dudu_diaspf/"
              target="_blank"
              rel="noopener noreferrer"
              className={cn("rounded-sm font-medium text-zinc-400 underline-offset-4 transition-all duration-200 ease-in-out hover:text-white hover:underline", focusRing)}
            >
              Winner Tech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
