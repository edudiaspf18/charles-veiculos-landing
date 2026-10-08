import Image from "next/image";

import { blurProps } from "@/data/blur";
import Link from "next/link";
import { ArrowUpRight, Calendar, Fuel, Gauge, MessageCircle, Settings2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { vehicleMessage, vehicleName, type Vehicle } from "@/data/vehicles";
import { trackAttributes } from "@/lib/analytics";
import { currency, kilometers, whatsappUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { focusRing } from "./cta-link";

interface SpecProps {
  icon: LucideIcon;
  label: string;
}

function Spec({ icon: Icon, label }: SpecProps) {
  return (
    <li className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400">
      <Icon className="size-3.5 text-zinc-400" aria-hidden />
      {label}
    </li>
  );
}

export function VehicleSpecs({ vehicle }: { vehicle: Vehicle }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {vehicle.km !== undefined && <Spec icon={Gauge} label={`${kilometers.format(vehicle.km)} km`} />}
      <Spec icon={Fuel} label={vehicle.engine} />
      <Spec icon={Settings2} label={vehicle.transmission} />
      <Spec icon={Calendar} label={vehicle.year} />
    </ul>
  );
}

export function VehicleBadges({ vehicle }: { vehicle: Vehicle }) {
  return (
    <div className="flex flex-wrap gap-2">
      <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-medium text-white">{vehicle.year}</span>
      {vehicle.tag && (
        <span className="rounded-full border border-white/20 bg-black/80 px-3 py-1 text-xs font-medium text-white">{vehicle.tag}</span>
      )}
    </div>
  );
}

export function vehiclePath(vehicle: Vehicle): string {
  return `/estoque/${vehicle.id}`;
}

export function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  const price = currency.format(vehicle.price);

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 transition-all duration-200 ease-in-out hover:border-white/25">
      <div className="relative aspect-[5/4] overflow-hidden">
        <Image
          src={vehicle.image}
          alt={vehicleName(vehicle)}
          fill
          {...blurProps(vehicle.image)}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-all duration-200 ease-in-out group-hover:scale-[1.02]"
        />
        <div className="absolute left-4 top-4">
          <VehicleBadges vehicle={vehicle} />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">{vehicle.brand}</p>
        <h3 className="mt-2 text-lg font-semibold tracking-tight text-white">
          {/* O ::after estende o link para o card inteiro; o botão de WhatsApp fica acima dele. */}
          <Link href={vehiclePath(vehicle)} className={cn("rounded-sm after:absolute after:inset-0", focusRing)}>
            {vehicle.model}
          </Link>
        </h3>
        <p className="mt-3 text-3xl font-semibold tracking-tight text-white">{price}</p>
        <div className="mt-5">
          <VehicleSpecs vehicle={vehicle} />
        </div>
        <div className="mt-auto flex items-center gap-3 pt-6">
          <a
            href={whatsappUrl(vehicleMessage(vehicle, price))}
            target="_blank"
            rel="noopener noreferrer"
            {...trackAttributes("vehicle_card", vehicle.id)}
            className={cn(
              "relative z-10 inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-red-600 text-sm font-medium text-white transition-all duration-200 ease-in-out hover:bg-red-500",
              focusRing,
            )}
          >
            <MessageCircle className="size-4" aria-hidden />
            Tenho Interesse
          </a>
          <span
            aria-hidden
            className="flex size-12 shrink-0 items-center justify-center rounded-full border border-white/15 text-zinc-300 transition-all duration-200 ease-in-out group-hover:border-white/40 group-hover:text-white"
          >
            <ArrowUpRight className="size-4" />
          </span>
        </div>
      </div>
    </article>
  );
}
