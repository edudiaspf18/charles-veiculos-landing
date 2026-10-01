import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQ } from "@/data/faq";
import { CtaLink } from "./cta-link";

export function Faq() {
  return (
    <section id="duvidas" className="border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[1fr_1.4fr] lg:py-32">
        <div className="lg:sticky lg:top-12 lg:self-start">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-red-600">Dúvidas frequentes</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Perguntas que a gente mais recebe.
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-zinc-400">Não achou sua resposta? Fale direto com a nossa equipe.</p>
          <CtaLink trackSource="faq" variant="outline" message="Olá! Vim pelo site e tenho uma dúvida." className="mt-10">
            Perguntar no WhatsApp
          </CtaLink>
        </div>

        <Accordion className="border-t border-white/10">
          {FAQ.map((item) => (
            <AccordionItem key={item.question} value={item.question} className="border-b border-white/10">
              <AccordionTrigger className="gap-6 rounded-none py-6 text-base font-medium tracking-tight text-white transition-all duration-200 ease-in-out hover:text-zinc-300 hover:no-underline focus-visible:ring-red-500 sm:text-lg">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pb-6 pr-10 leading-relaxed text-zinc-400 sm:text-base">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
