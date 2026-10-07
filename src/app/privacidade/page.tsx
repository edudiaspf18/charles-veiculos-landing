import type { Metadata } from "next";

import { CookiePreferencesButton } from "@/components/cookie-banner";
import { focusRing } from "@/components/landing/cta-link";
import { LegalPage, LegalSection } from "@/components/landing/legal-page";
import { STORE_ADDRESS, STORE_CNPJ, STORE_NAME } from "@/data/store";
import { WHATSAPP_DISPLAY } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Política de Privacidade | Charles Veículos",
  description: "Como a Charles Veículos & Locadora trata dados pessoais neste site, conforme a LGPD (Lei 13.709/2018).",
  alternates: { canonical: "/privacidade" },
};

const UPDATED_AT = "7 de outubro de 2026";

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Política de Privacidade"
      updatedAt={UPDATED_AT}
      intro={`Esta política explica quais dados a ${STORE_NAME} coleta neste site, para que usa e quais são os seus direitos, conforme a Lei Geral de Proteção de Dados (LGPD, Lei 13.709/2018).`}
    >
      <LegalSection title="Quem é o controlador">
        <p>
          {STORE_NAME}, CNPJ {STORE_CNPJ}, {STORE_ADDRESS}.
        </p>
        <p>
          Canal do encarregado pelo tratamento de dados pessoais: WhatsApp {WHATSAPP_DISPLAY}. Envie ali qualquer pedido ou dúvida sobre
          privacidade.
        </p>
      </LegalSection>

      <LegalSection title="Quais dados coletamos">
        <p>
          <strong className="font-medium text-zinc-200">Dados de navegação.</strong> Com o Google Analytics 4 (somente se você aceitar os
          cookies), coletamos dados estatísticos de uso: páginas visitadas, cliques nos botões de WhatsApp, tipo de dispositivo,
          navegador, localização aproximada e identificadores em cookies. Não coletamos nome, telefone nem e-mail por este site.
        </p>
        <p>
          <strong className="font-medium text-zinc-200">Conversa no WhatsApp.</strong> Ao clicar em um botão, você abre uma conversa com
          a loja no WhatsApp. O número de telefone e as mensagens que você enviar ficam sob os termos do WhatsApp e são usados por nós
          apenas para atendê-lo.
        </p>
        <p>
          <strong className="font-medium text-zinc-200">Preferência de cookies.</strong> Guardamos no seu navegador (armazenamento
          local) apenas a sua escolha de aceitar ou recusar cookies de análise.
        </p>
      </LegalSection>

      <LegalSection title="Para que usamos">
        <p>
          Medir o desempenho do site, entender quais veículos despertam interesse e melhorar a experiência. Usamos os dados de conversa
          apenas para responder à sua solicitação e negociar com você. Não vendemos dados pessoais.
        </p>
        <p>
          Bases legais: consentimento (cookies de análise) e execução de procedimentos preliminares a contrato (atendimento solicitado
          por você), conforme o art. 7º da LGPD.
        </p>
      </LegalSection>

      <LegalSection title="Cookies e serviços de terceiros">
        <p>
          O Google Analytics usa cookies para distinguir visitantes e só é carregado depois que você clica em &ldquo;Aceitar&rdquo; no
          aviso de cookies. Se recusar, nenhum cookie de análise é criado.
        </p>
        <p>
          O mapa da seção de localização só é carregado quando você clica em &ldquo;Ver mapa&rdquo;. A partir daí, o Google Maps pode
          registrar o seu acesso, conforme a política do Google. Os links para WhatsApp, Instagram e Google Maps levam a serviços de
          terceiros, com políticas próprias.
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
      </LegalSection>

      <LegalSection title="Compartilhamento">
        <p>
          Não vendemos nem repassamos dados pessoais. Os dados de navegação são processados pelo Google (operador do Google Analytics),
          que pode armazená-los em servidores fora do Brasil. Podemos compartilhar dados quando a lei ou uma autoridade exigir.
        </p>
      </LegalSection>

      <LegalSection title="Por quanto tempo guardamos">
        <p>
          Os dados do Google Analytics seguem o prazo de retenção configurado na propriedade (padrão de até 14 meses). As conversas no
          WhatsApp ficam enquanto forem necessárias ao atendimento ou a obrigações legais.
        </p>
      </LegalSection>

      <LegalSection title="Seus direitos">
        <p>
          Você pode pedir confirmação de tratamento, acesso, correção, anonimização, portabilidade, eliminação dos dados e informação
          sobre compartilhamento, e pode revogar consentimentos (art. 18 da LGPD). Envie o pedido pelo WhatsApp {WHATSAPP_DISPLAY}. Se
          achar necessário, você também pode contatar a Autoridade Nacional de Proteção de Dados (ANPD).
        </p>
      </LegalSection>

      <LegalSection title="Alterações">
        <p>Podemos atualizar esta política. A data de atualização no topo da página mostra a versão vigente.</p>
      </LegalSection>
    </LegalPage>
  );
}
