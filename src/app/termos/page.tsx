import type { Metadata } from "next";
import Link from "next/link";

import { LegalPage, LegalSection } from "@/components/landing/legal-page";
import { STORE_ADDRESS, STORE_CNPJ, STORE_NAME } from "@/data/store";
import { WHATSAPP_DISPLAY } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Termos de Uso | Charles Veículos",
  description: "Regras de uso do site da Charles Veículos & Locadora.",
  alternates: { canonical: "/termos" },
};

const UPDATED_AT = "7 de outubro de 2026";

export default function TermsPage() {
  return (
    <LegalPage
      title="Termos de Uso"
      updatedAt={UPDATED_AT}
      intro="Ao navegar neste site, você concorda com as regras abaixo. Se não concordar, pedimos que não use o site."
    >
      <LegalSection title="Quem somos">
        <p>
          Este site é de responsabilidade de {STORE_NAME}, CNPJ {STORE_CNPJ}, {STORE_ADDRESS}. Contato: WhatsApp {WHATSAPP_DISPLAY}.
        </p>
      </LegalSection>

      <LegalSection title="O que o site oferece">
        <p>
          O site apresenta os veículos do estoque da loja e leva você ao atendimento pelo WhatsApp. Não é uma loja virtual: nenhuma
          compra, reserva ou pagamento é feito pelo site. A negociação acontece diretamente com a loja.
        </p>
      </LegalSection>

      <LegalSection title="Preços, fotos e disponibilidade">
        <p>
          Preços, condições e disponibilidade dos veículos podem mudar sem aviso prévio, e um veículo anunciado pode já ter sido
          vendido. As fotos são ilustrativas do veículo e podem conter peças gráficas de divulgação. Confirme sempre os dados e as
          condições com a loja antes de fechar negócio.
        </p>
        <p>
          A oferta só se confirma com a proposta formalizada pela loja. Financiamento está sujeito à análise de crédito da instituição
          financeira, e a avaliação de veículo usado depende de vistoria.
        </p>
      </LegalSection>

      <LegalSection title="Propriedade intelectual">
        <p>
          Textos, marca, logotipo, layout e fotos deste site pertencem à {STORE_NAME} ou são usados com autorização. Não é permitido
          copiar, reproduzir ou usar esse conteúdo para fins comerciais sem autorização.
        </p>
      </LegalSection>

      <LegalSection title="Uso adequado">
        <p>
          Não é permitido usar o site para atividades ilícitas, tentar acessar áreas restritas, sobrecarregar o serviço ou interferir
          no funcionamento dele.
        </p>
      </LegalSection>

      <LegalSection title="Links e serviços de terceiros">
        <p>
          O site contém links para WhatsApp, Instagram e Google Maps. Esses serviços têm termos e políticas próprios, e a loja não se
          responsabiliza por eles.
        </p>
      </LegalSection>

      <LegalSection title="Privacidade">
        <p>
          O tratamento de dados pessoais segue a nossa{" "}
          <Link href="/privacidade" className="rounded-sm text-zinc-200 underline underline-offset-4 transition-all duration-200 hover:text-white">
            Política de Privacidade
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection title="Alterações e lei aplicável">
        <p>
          Podemos atualizar estes termos a qualquer momento. A data no topo mostra a versão vigente. Estes termos seguem a legislação
          brasileira, inclusive o Código de Defesa do Consumidor, e o foro é o do domicílio do consumidor.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
