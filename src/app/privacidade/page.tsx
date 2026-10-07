import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";

import { CookiePreferencesButton } from "@/components/cookie-banner";
import { focusRing } from "@/components/landing/cta-link";
import { FloatingWhatsApp } from "@/components/landing/floating-whatsapp";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { STORE_ADDRESS } from "@/data/store";
import { WHATSAPP_DISPLAY } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Política de Privacidade | Charles Veículos",
  description: "Como a Charles Veículos & Locadora trata dados pessoais neste site, conforme a LGPD (Lei 13.709/2018).",
  alternates: { canonical: "/privacidade" },
};

const UPDATED_AT = "7 de outubro de 2026";

interface SectionProps {
  title: string;
  children: ReactNode;
}

function Section({ title, children }: SectionProps) {
  return (
    <section className="border-t border-white/10 py-10">
      <h2 className="text-xl font-semibold tracking-tight text-white">{title}</h2>
      <div className="mt-4 space-y-4 text-base leading-relaxed text-zinc-400">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black font-sans text-zinc-100 antialiased">
      <Header />
      <main className="mx-auto max-w-3xl px-5 pb-24 pt-36 sm:px-8 sm:pt-44">
        <Link
          href="/"
          className={cn(
            "inline-flex items-center gap-2 rounded-sm text-sm text-zinc-400 transition-all duration-200 ease-in-out hover:text-white",
            focusRing,
          )}
        >
          <ArrowLeft className="size-4" aria-hidden />
          Voltar
        </Link>
        <h1 className="mt-8 text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl">
          Política de Privacidade
        </h1>
        <p className="mt-4 text-sm text-zinc-500">Atualizada em {UPDATED_AT}</p>
        <p className="mt-8 text-base leading-relaxed text-zinc-400">
          Esta política explica quais dados a Charles Veículos & Locadora coleta neste site, para que usa e quais são os seus
          direitos, conforme a Lei Geral de Proteção de Dados (LGPD, Lei 13.709/2018).
        </p>

        <div className="mt-10">
          <Section title="Quem é o controlador">
            <p>
              Charles Veículos & Locadora, {STORE_ADDRESS}. Contato para assuntos de privacidade: WhatsApp {WHATSAPP_DISPLAY}.
            </p>
          </Section>

          <Section title="Quais dados coletamos">
            <p>
              <strong className="font-medium text-zinc-200">Dados de navegação.</strong> Com o Google Analytics 4 (somente se você aceitar os cookies), coletamos
              dados estatísticos de uso: páginas visitadas, cliques nos botões de WhatsApp, tipo de dispositivo, navegador,
              localização aproximada e identificadores em cookies. Não coletamos nome, telefone nem e-mail por este site.
            </p>
            <p>
              <strong className="font-medium text-zinc-200">Conversa no WhatsApp.</strong> Ao clicar em um botão, você abre
              uma conversa com a loja no WhatsApp. O número de telefone e as mensagens que você enviar ficam sob os termos do
              WhatsApp e são usados por nós apenas para atendê-lo.
            </p>
          </Section>

          <Section title="Para que usamos">
            <p>
              Medir o desempenho do site, entender quais veículos despertam interesse e melhorar a experiência. Usamos os dados
              de conversa apenas para responder a sua solicitação e negociar com você. Não vendemos dados pessoais.
            </p>
            <p>
              Bases legais: legítimo interesse (estatísticas de uso) e execução de procedimentos preliminares a contrato
              (atendimento solicitado por você), conforme o art. 7º da LGPD.
            </p>
          </Section>

          <Section title="Cookies e serviços de terceiros">
            <p>
              O Google Analytics usa cookies para distinguir visitantes e só é carregado depois que você clica em "Aceitar" no
              aviso de cookies. Se recusar, nenhum cookie de análise é criado. O mapa da seção de localização é incorporado do
              Google Maps, que pode registrar o seu acesso. Os links para WhatsApp e Instagram levam a sites de terceiros, com
              políticas próprias.
            </p>
            <p>
              Você pode bloquear ou apagar cookies nas configurações do navegador ou instalar o{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className={cn("rounded-sm text-zinc-200 underline underline-offset-4 transition-all duration-200 hover:text-white", focusRing)}
              >
                complemento de desativação do Google Analytics
              </a>
              .
            </p>
            <CookiePreferencesButton />
          </Section>

          <Section title="Por quanto tempo guardamos">
            <p>
              Os dados do Google Analytics seguem o prazo de retenção configurado na propriedade (padrão de até 14 meses). As
              conversas no WhatsApp ficam enquanto forem necessárias ao atendimento ou a obrigações legais.
            </p>
          </Section>

          <Section title="Seus direitos">
            <p>
              Você pode pedir confirmação de tratamento, acesso, correção, anonimização, portabilidade, eliminação dos dados e
              informação sobre compartilhamento, e pode revogar consentimentos (art. 18 da LGPD). Envie o pedido pelo WhatsApp{" "}
              {WHATSAPP_DISPLAY}. Se achar necessário, você também pode contatar a Autoridade Nacional de Proteção de Dados (ANPD).
            </p>
          </Section>

          <Section title="Alterações">
            <p>Podemos atualizar esta política. A data de atualização no topo da página mostra a versão vigente.</p>
          </Section>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
