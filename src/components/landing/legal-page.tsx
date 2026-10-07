import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { focusRing } from "./cta-link";
import { FloatingWhatsApp } from "./floating-whatsapp";
import { Footer } from "./footer";
import { Header } from "./header";

interface SectionProps {
  title: string;
  children: ReactNode;
}

export function LegalSection({ title, children }: SectionProps) {
  return (
    <section className="border-t border-white/10 py-10">
      <h2 className="text-xl font-semibold tracking-tight text-white">{title}</h2>
      <div className="mt-4 space-y-4 text-base leading-relaxed text-zinc-400">{children}</div>
    </section>
  );
}

interface LegalPageProps {
  title: string;
  updatedAt: string;
  intro: string;
  children: ReactNode;
}

export function LegalPage({ title, updatedAt, intro, children }: LegalPageProps) {
  return (
    <div className="min-h-screen bg-black font-sans text-zinc-100 antialiased">
      <Header />
      <main id="conteudo" className="mx-auto max-w-3xl px-5 pb-24 pt-36 sm:px-8 sm:pt-44">
        <Link
          href="/"
          className={cn(
            "inline-flex h-11 items-center gap-2 rounded-sm text-sm text-zinc-400 transition-all duration-200 ease-in-out hover:text-white",
            focusRing,
          )}
        >
          <ArrowLeft className="size-4" aria-hidden />
          Voltar
        </Link>
        <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl">{title}</h1>
        <p className="mt-4 text-sm text-zinc-400">Atualizada em {updatedAt}</p>
        <p className="mt-8 text-base leading-relaxed text-zinc-400">{intro}</p>
        <div className="mt-10">{children}</div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
