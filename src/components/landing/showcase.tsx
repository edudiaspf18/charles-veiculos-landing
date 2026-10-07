import { VEHICLES } from "@/data/vehicles";
import { CtaLink } from "./cta-link";
import { Inventory } from "./inventory";

export function Showcase() {
  return (
    <section id="estoque" className="scroll-mt-8 bg-black">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:py-32">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-red-600">Estoque · {VEHICLES.length} veículos</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Nosso estoque</h2>
            <p className="mt-4 leading-relaxed text-zinc-400">
              Todos os carros do nosso pátio. Toque em um carro para ver a ficha completa, ou chame no WhatsApp para mais fotos, vídeos e condições.
            </p>
          </div>
          <CtaLink
            trackSource="inventory_not_found"
            variant="outline"
            message="Olá! Vim pelo site e não encontrei o carro que procuro. Podem me ajudar?"
            className="self-start md:self-auto"
          >
            Não achou seu carro?
          </CtaLink>
        </div>

        <Inventory vehicles={VEHICLES} />
      </div>
    </section>
  );
}
