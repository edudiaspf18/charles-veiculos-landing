import Image from "next/image";

import heroPhoto from "../../../public/cars/discovery-hse.jpg";

import { STATS } from "@/data/landing";
import { CtaLink } from "./cta-link";

function StatsPanel() {
  return (
    <dl className="grid grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-black/60">
      {STATS.map((stat) => (
        <div key={stat.label} className="flex flex-col gap-1 px-5 py-4 sm:px-7">
          <dt className="text-xs leading-snug text-zinc-400">{stat.label}</dt>
          <dd className="order-first text-2xl font-semibold tracking-tight text-white sm:text-3xl">{stat.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-black pb-12 sm:pb-28">
      <div className="absolute inset-y-0 right-0 -z-10 w-full lg:w-3/4">
        <Image
          src={heroPhoto}
          alt=""
          fill
          placeholder="blur"
          priority
          sizes="(min-width: 1024px) 75vw, 100vw"
          className="object-cover object-[65%_80%] lg:object-[center_40%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/10" />
        <div className="absolute inset-0 bg-black/60 lg:hidden" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/80 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-5 pt-36 sm:px-8 sm:pt-44 lg:grid-cols-[1.2fr_1fr] lg:pt-52">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-zinc-400">Seminovos · Anápolis - GO</p>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Encontre o carro dos seus sonhos
            <span className="block text-red-600">com segurança e transparência.</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-zinc-400 sm:text-lg">
            Seminovos revisados e com procedência. Escolha, tire suas dúvidas e negocie direto pelo WhatsApp, sem burocracia.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <CtaLink trackSource="hero_offers" message="Olá! Vim pelo site e quero ver as ofertas disponíveis.">Ver Ofertas no WhatsApp</CtaLink>
            <CtaLink trackSource="hero_trade_in" variant="outline" message="Olá! Vim pelo site e quero avaliar meu carro usado como entrada.">
              Avaliar meu usado
            </CtaLink>
          </div>
        </div>
        <div className="lg:self-start lg:justify-self-end">
          <StatsPanel />
        </div>
      </div>
    </section>
  );
}
