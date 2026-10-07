import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { CtaLink, focusRing } from "@/components/landing/cta-link";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Página não encontrada | Charles Veículos",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black font-sans text-zinc-100 antialiased">
      <Header />
      <main className="mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-center px-5 pb-24 pt-40 sm:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-red-600">Erro 404</p>
        <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl">
          Esta página não existe
          <span className="block text-zinc-500">ou o carro já foi vendido.</span>
        </h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-zinc-400">
          Veja o estoque atualizado ou fale direto com a loja pelo WhatsApp.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <CtaLink trackSource="not_found" message="Olá! Vim pelo site e quero ver os carros disponíveis.">
            Falar no WhatsApp
          </CtaLink>
          <Link
            href="/#estoque"
            className={cn(
              "inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-medium text-white transition-all duration-200 ease-in-out hover:border-white/50",
              focusRing,
            )}
          >
            <ArrowLeft className="size-4" aria-hidden />
            Ver estoque
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
