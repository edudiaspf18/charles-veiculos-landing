import Image from "next/image";
import { Calendar, Fuel, Gauge, MessageCircle, Settings2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { VEHICLES, vehicleMessage, type Vehicle } from "@/data/vehicles";
import { currency, kilometers, whatsappUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { CtaLink, focusRing } from "./cta-link";

interface SpecProps {
  icon: LucideIcon;
  label: string;
}

function Spec({ icon: Icon, label }: SpecProps) {
  return (
    <li className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400">
      <Icon className="size-3.5 text-zinc-500" aria-hidden />
      {label}
    </li>
  );
}

function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  const price = currency.format(vehicle.price);

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 transition-all duration-200 ease-in-out hover:border-white/25">
      <div className="relative aspect-[5/4] overflow-hidden">
        <Image
          src={vehicle.image}
          alt={`${vehicle.brand} ${vehicle.model} ${vehicle.year}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-all duration-200 ease-in-out group-hover:scale-[1.02]"
        />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-medium text-white">{vehicle.year}</span>
          {vehicle.tag && (
            <span className="rounded-full border border-white/20 bg-black/80 px-3 py-1 text-xs font-medium text-white">{vehicle.tag}</span>
          )}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">{vehicle.brand}</p>
        <h3 className="mt-2 text-lg font-semibold tracking-tight text-white">{vehicle.model}</h3>
        <p className="mt-3 text-3xl font-semibold tracking-tight text-white">{price}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {vehicle.km !== undefined && <Spec icon={Gauge} label={`${kilometers.format(vehicle.km)} km`} />}
          <Spec icon={Fuel} label={vehicle.engine} />
          <Spec icon={Settings2} label={vehicle.transmission} />
          <Spec icon={Calendar} label={vehicle.year} />
        </ul>
        <a
          href={whatsappUrl(vehicleMessage(vehicle, price))}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-red-600 text-sm font-medium text-white transition-all duration-200 ease-in-out hover:bg-red-500",
            focusRing,
          )}
        >
          <MessageCircle className="size-4" aria-hidden />
          Tenho Interesse
        </a>
      </div>
    </article>
  );
}

export function Showcase() {
  return (
    <section id="estoque" className="bg-black">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-red-600">Estoque · {VEHICLES.length} veículos</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Nosso estoque</h2>
            <p className="mt-4 leading-relaxed text-zinc-400">
              Todos os carros do nosso pátio. Chame no WhatsApp para mais fotos, vídeos e condições de pagamento.
            </p>
          </div>
          <CtaLink variant="outline" message="Olá! Vim pelo site e não encontrei o carro que procuro. Podem me ajudar?" className="self-start md:self-auto">
            Não achou seu carro?
          </CtaLink>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VEHICLES.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </section>
  );
}
