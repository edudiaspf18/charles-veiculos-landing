import { ArrowRight } from "lucide-react";

import { BENEFITS } from "@/data/landing";
import { trackAttributes } from "@/lib/analytics";
import { whatsappUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { focusRing } from "./cta-link";

export function Benefits() {
  return (
    <section id="diferenciais" className="border-y border-white/10 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="grid gap-8 md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-12">
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            Por que escolher a Charles Veículos?
            <span className="block text-red-600">Compra segura, sem enrolação.</span>
          </h2>
          <div className="hidden h-16 w-px bg-white/15 md:block" />
          <p className="max-w-md leading-relaxed text-zinc-400">
            Transparência do primeiro contato à entrega das chaves. Cada detalhe da negociação é conversado com você, direto no WhatsApp.
          </p>
        </div>

        <ul className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map(({ icon: Icon, title, description, message }) => (
            <li key={title}>
              <a
                href={whatsappUrl(message)}
                target="_blank"
                rel="noopener noreferrer"
                {...trackAttributes("benefit")}
                className={cn(
                  "group flex h-full flex-col rounded-2xl border border-white/10 bg-black p-7 transition-all duration-200 ease-in-out hover:border-white/25",
                  focusRing,
                )}
              >
                <Icon className="size-6 text-zinc-300" aria-hidden />
                <h3 className="mt-16 font-semibold tracking-tight text-white">{title}</h3>
                <div className="mt-2 flex items-end justify-between gap-4">
                  <p className="text-sm leading-relaxed text-zinc-500">{description}</p>
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-red-600/60 text-red-500 transition-all duration-200 ease-in-out group-hover:bg-red-600 group-hover:text-white">
                    <ArrowRight className="size-4" aria-hidden />
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
