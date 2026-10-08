import Image from "next/image";

import toroPhoto from "../../../public/cars/toro-freedom-2022.jpg";

import { CtaLink } from "./cta-link";

export function FinalCta() {
  return (
    <section id="contato" className="bg-black">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:py-32">
        <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 lg:grid-cols-2">
          <div className="flex flex-col justify-center p-8 sm:p-14">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-red-500">Fale com a gente</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              Seu próximo carro está a uma mensagem de distância.
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-zinc-400">
              Simulação de financiamento, avaliação do seu usado e agendamento de visita, tudo pelo WhatsApp.
            </p>
            <CtaLink trackSource="final_cta" className="mt-10 self-start">Chamar no WhatsApp</CtaLink>
          </div>
          <div className="relative min-h-72 lg:min-h-full">
            <Image
              src={toroPhoto}
              alt="Fiat Toro no showroom da Charles Veículos"
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/20 to-transparent max-lg:bg-gradient-to-t" />
          </div>
        </div>
      </div>
    </section>
  );
}
