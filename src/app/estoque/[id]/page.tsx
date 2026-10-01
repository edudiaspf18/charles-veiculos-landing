import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { CtaLink, focusRing } from "@/components/landing/cta-link";
import { FloatingWhatsApp } from "@/components/landing/floating-whatsapp";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { VehicleBadges, VehicleSpecs, vehiclePath } from "@/components/landing/vehicle-card";
import { VehicleGallery } from "@/components/landing/vehicle-gallery";
import { VEHICLES, getVehicle, vehicleImages, vehicleMessage, vehicleName } from "@/data/vehicles";
import { currency, kilometers } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

type VehiclePageProps = PageProps<"/estoque/[id]">;

export function generateStaticParams() {
  return VEHICLES.map((vehicle) => ({ id: vehicle.id }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: VehiclePageProps): Promise<Metadata> {
  const { id } = await params;
  const vehicle = getVehicle(id);
  if (!vehicle) return {};

  const name = vehicleName(vehicle);
  const price = currency.format(vehicle.price);
  const description = `${name} por ${price}. ${vehicle.engine}, ${vehicle.transmission}. Seminovo com procedência na Charles Veículos, Anápolis - GO.`;

  return {
    title: `${name} | Charles Veículos`,
    description,
    alternates: { canonical: vehiclePath(vehicle) },
    openGraph: { title: `${name} por ${price}`, description, type: "website" },
  };
}

interface FactProps {
  label: string;
  value: string;
}

function Fact({ label, value }: FactProps) {
  return (
    <div className="flex flex-col gap-1 border-t border-white/10 py-4">
      <dt className="text-xs uppercase tracking-[0.25em] text-zinc-500">{label}</dt>
      <dd className="font-medium text-white">{value}</dd>
    </div>
  );
}

export default async function VehiclePage({ params }: VehiclePageProps) {
  const { id } = await params;
  const vehicle = getVehicle(id);
  if (!vehicle) notFound();

  const name = vehicleName(vehicle);
  const price = currency.format(vehicle.price);
  const others = VEHICLES.filter((item) => item.id !== vehicle.id && item.brand === vehicle.brand).slice(0, 3);

  return (
    <div className="min-h-screen bg-black font-sans text-zinc-100 antialiased">
      <Header />
      <main className="mx-auto max-w-7xl px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
        <Link
          href="/#estoque"
          className={cn(
            "inline-flex items-center gap-2 rounded-sm text-sm text-zinc-400 transition-all duration-200 ease-in-out hover:text-white",
            focusRing,
          )}
        >
          <ArrowLeft className="size-4" aria-hidden />
          Voltar ao estoque
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <VehicleGallery images={vehicleImages(vehicle)} alt={name} />

          <div className="lg:sticky lg:top-12 lg:self-start">
            <VehicleBadges vehicle={vehicle} />
            <p className="mt-6 text-xs uppercase tracking-[0.25em] text-zinc-500">{vehicle.brand}</p>
            <h1 className="mt-2 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">{vehicle.model}</h1>
            <p className="mt-6 text-5xl font-semibold tracking-tight text-white">{price}</p>
            <div className="mt-6">
              <VehicleSpecs vehicle={vehicle} />
            </div>
            <div className="mt-8 flex flex-col gap-3">
              <CtaLink trackSource="vehicle_page" vehicleId={vehicle.id} message={vehicleMessage(vehicle, price)}>
                Tenho interesse neste carro
              </CtaLink>
              <CtaLink
                trackSource="vehicle_page_trade_in"
                vehicleId={vehicle.id}
                variant="outline"
                message={`Olá! Tenho interesse no ${name}. Gostaria de avaliar meu usado como entrada.`}
              >
                Avaliar meu usado
              </CtaLink>
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-x-6">
              <Fact label="Marca" value={vehicle.brand} />
              <Fact label="Ano/modelo" value={vehicle.year} />
              <Fact label="Motor" value={vehicle.engine} />
              <Fact label="Câmbio" value={vehicle.transmission} />
              {vehicle.km !== undefined && <Fact label="Quilometragem" value={`${kilometers.format(vehicle.km)} km`} />}
            </dl>
            <p className="mt-6 text-xs leading-relaxed text-zinc-600">
              Preço e disponibilidade sujeitos a alteração sem aviso prévio. Confirme as condições pelo WhatsApp.
            </p>
          </div>
        </div>

        {others.length > 0 && (
          <section aria-labelledby="mais-da-marca" className="mt-24 border-t border-white/10 pt-16">
            <h2 id="mais-da-marca" className="text-2xl font-semibold tracking-tight text-white">
              Mais {vehicle.brand} no estoque
            </h2>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((other) => (
                <li key={other.id}>
                  <Link
                    href={vehiclePath(other)}
                    className={cn(
                      "group block overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 transition-all duration-200 ease-in-out hover:border-white/25",
                      focusRing,
                    )}
                  >
                    <div className="relative aspect-[5/4]">
                      <Image
                        src={other.image}
                        alt={vehicleName(other)}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <p className="font-semibold tracking-tight text-white">{other.model}</p>
                      <p className="mt-1 text-sm text-zinc-400">
                        {other.year} · {currency.format(other.price)}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
