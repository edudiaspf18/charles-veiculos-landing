import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  AtSign,
  Calendar,
  Fuel,
  Gauge,
  Handshake,
  Landmark,
  MapPin,
  MessageCircle,
  Phone,
  Settings2,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const WHATSAPP_NUMBER = "5562999641311";
const DEFAULT_MESSAGE = "Olá! Vim pelo site da Charles Veículos e gostaria de mais informações.";
const INSTAGRAM_URL = "https://www.instagram.com/charles_veiculos01/";

interface Vehicle {
  id: string;
  brand: string;
  model: string;
  year: string;
  km: number;
  engine: string;
  transmission: string;
  price: number;
  image: string;
}

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface WhatsAppButtonProps {
  message?: string;
  label: string;
  size?: "sm" | "lg";
  className?: string;
}

const VEHICLES: Vehicle[] = [
  { id: "discovery-hse", brand: "Land Rover", model: "Discovery TD6 HSE Blindada", year: "2019/20", km: 98631, engine: "3.0 Diesel", transmission: "Automático", price: 279900, image: "/cars/discovery-hse.jpg" },
  { id: "creta-limited", brand: "Hyundai", model: "Creta Limited", year: "2023/24", km: 39000, engine: "1.0 Turbo", transmission: "Automático", price: 122900, image: "/cars/creta-limited.jpg" },
  { id: "creta-comfort", brand: "Hyundai", model: "Creta Comfort", year: "2023/24", km: 69440, engine: "1.0 Turbo", transmission: "Automático", price: 112900, image: "/cars/creta-comfort.jpg" },
  { id: "nivus-highline", brand: "Volkswagen", model: "Nivus Highline TSI", year: "2022/22", km: 70369, engine: "1.0 Turbo TSI", transmission: "Automático", price: 109900, image: "/cars/nivus-highline.jpg" },
  { id: "argo-drive", brand: "Fiat", model: "Argo Drive 1.0", year: "2025/26", km: 43057, engine: "1.0 Flex", transmission: "Manual", price: 80900, image: "/cars/argo-drive.jpg" },
  { id: "toro-freedom", brand: "Fiat", model: "Toro Freedom 4x4", year: "2017/17", km: 103224, engine: "2.0 Turbo Diesel", transmission: "Manual", price: 79900, image: "/cars/toro-freedom.jpg" },
];

const BENEFITS: Benefit[] = [
  { icon: Wrench, title: "Veículos revisados", description: "Cada carro passa por inspeção mecânica e estética antes de chegar ao nosso pátio." },
  { icon: ShieldCheck, title: "Procedência garantida", description: "Histórico verificado, documentação em dia e transparência total na negociação." },
  { icon: Handshake, title: "Melhor avaliação do seu usado", description: "Seu carro vale como entrada, com avaliação justa e sem enrolação." },
  { icon: Landmark, title: "Financiamento facilitado", description: "Trabalhamos com os principais bancos para aprovar seu crédito com agilidade." },
];

const STATS = [
  { value: "100%", label: "Veículos inspecionados" },
  { value: "Anápolis", label: "Loja física em GO" },
  { value: "Rápido", label: "Atendimento no WhatsApp" },
];

const currency = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
const kilometers = new Intl.NumberFormat("pt-BR");

function whatsappUrl(message: string = DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function vehicleMessage(vehicle: Vehicle): string {
  return `Olá! Vim pelo site e tenho interesse no ${vehicle.brand} ${vehicle.model} ${vehicle.year} anunciado por ${currency.format(vehicle.price)}. Ainda está disponível?`;
}

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";

function WhatsAppButton({ message, label, size = "sm", className = "" }: WhatsAppButtonProps) {
  const sizing = size === "lg" ? "h-14 px-7 text-base" : "h-10 px-4 text-sm";

  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-md bg-green-500 font-semibold text-slate-950 transition-all duration-200 ease-in-out hover:bg-green-400 ${focusRing} ${sizing} ${className}`}
    >
      <MessageCircle className={size === "lg" ? "size-5" : "size-4"} aria-hidden />
      {label}
    </a>
  );
}

function Logo() {
  return (
    <a href="#inicio" className={`group flex flex-col leading-none transition-all duration-200 ease-in-out ${focusRing} rounded-sm`}>
      <span className="text-xl font-black uppercase tracking-tight text-white transition-all duration-200 ease-in-out group-hover:text-slate-300 sm:text-2xl">
        Charles
      </span>
      <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.35em] text-slate-400">Veículos & Locadora</span>
    </a>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-20 sm:px-8">
        <Logo />
        <WhatsAppButton label="Fale Conosco" />
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden border-b border-white/10">
      <Image src="/hero.jpg" alt="Carro esportivo preto estacionado" fill priority sizes="100vw" className="-z-20 object-cover object-center" />
      <div className="absolute inset-0 -z-10 bg-slate-950/75" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-slate-950 to-transparent" />

      <div className="mx-auto max-w-6xl px-5 pb-20 pt-24 sm:px-8 sm:pb-28 sm:pt-36 lg:pb-36 lg:pt-44">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-xs font-medium uppercase tracking-widest text-slate-300">
          <MapPin className="size-3.5" aria-hidden />
          Anápolis · GO
        </p>
        <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
          Encontre o carro dos seus sonhos com segurança e transparência.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
          Seminovos revisados, com procedência garantida. Escolha, tire suas dúvidas e negocie direto pelo WhatsApp, sem burocracia.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <WhatsAppButton size="lg" label="Ver Ofertas no WhatsApp" message="Olá! Vim pelo site e quero ver as ofertas disponíveis." />
          <a
            href={whatsappUrl("Olá! Vim pelo site e quero avaliar meu carro usado como entrada.")}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex h-14 items-center justify-center gap-2 rounded-md border border-white/20 px-7 text-base font-medium text-white transition-all duration-200 ease-in-out hover:border-white/40 hover:bg-white/5 ${focusRing}`}
          >
            Avaliar meu usado
            <ArrowUpRight className="size-4" aria-hidden />
          </a>
        </div>

        <dl className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <dt className="text-xs leading-relaxed text-slate-400 sm:text-sm">{stat.label}</dt>
              <dd className="order-first text-lg font-semibold tracking-tight text-white sm:text-2xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Spec({ icon: Icon, children }: { icon: LucideIcon; children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-2 text-sm text-slate-400">
      <Icon className="size-4 shrink-0 text-slate-500" aria-hidden />
      {children}
    </li>
  );
}

function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-white/10 bg-slate-900/60 transition-all duration-200 ease-in-out hover:border-white/25">
      <div className="relative aspect-[5/4] overflow-hidden bg-slate-900">
        <Image
          src={vehicle.image}
          alt={`${vehicle.brand} ${vehicle.model} ${vehicle.year}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-all duration-200 ease-in-out group-hover:scale-[1.02]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-medium uppercase tracking-widest text-slate-500">{vehicle.brand}</p>
        <h3 className="mt-1 text-lg font-semibold tracking-tight text-white">{vehicle.model}</h3>
        <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
          <Spec icon={Calendar}>{vehicle.year}</Spec>
          <Spec icon={Gauge}>{kilometers.format(vehicle.km)} km</Spec>
          <Spec icon={Fuel}>{vehicle.engine}</Spec>
          <Spec icon={Settings2}>{vehicle.transmission}</Spec>
        </ul>
        <p className="mt-6 border-t border-white/10 pt-5 text-2xl font-bold tracking-tight text-white">
          {currency.format(vehicle.price)}
        </p>
        <WhatsAppButton label="Tenho Interesse" message={vehicleMessage(vehicle)} className="mt-5 w-full" />
      </div>
    </article>
  );
}

function Showcase() {
  return (
    <section id="estoque" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-32">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <p className="text-xs font-medium uppercase tracking-widest text-green-400">Estoque</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-5xl">Veículos em destaque</h2>
          <p className="mt-4 leading-relaxed text-slate-400">
            Uma seleção do nosso pátio. Estoque atualizado diariamente: chame no WhatsApp para fotos, vídeos e condições.
          </p>
        </div>
        <WhatsAppButton label="Ver estoque completo" message="Olá! Vim pelo site e quero ver o estoque completo." />
      </div>

      <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {VEHICLES.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="border-y border-white/10 bg-slate-900/40">
      <div className="mx-auto grid max-w-6xl gap-16 px-5 py-24 sm:px-8 lg:grid-cols-[1fr_2fr] lg:py-32">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-green-400">Diferenciais</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">Por que escolher a Charles Veículos?</h2>
          <p className="mt-4 leading-relaxed text-slate-400">Compra segura começa com transparência. É assim que trabalhamos desde o primeiro contato.</p>
        </div>
        <ul className="grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-2">
          {BENEFITS.map(({ icon: Icon, title, description }) => (
            <li key={title} className="bg-slate-950 p-8">
              <Icon className="size-6 text-green-400" aria-hidden />
              <h3 className="mt-5 font-semibold tracking-tight text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-32">
      <div className="flex flex-col gap-8 border-l-2 border-green-500 pl-6 sm:pl-10 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">Seu próximo carro está a uma mensagem de distância.</h2>
          <p className="mt-4 leading-relaxed text-slate-400">Simulação de financiamento, avaliação do seu usado e agendamento de visita, tudo pelo WhatsApp.</p>
        </div>
        <WhatsAppButton size="lg" label="Chamar no WhatsApp" className="shrink-0" />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-slate-500">CNPJ: 00.000.000/0001-00</p>
        </div>
        <address className="flex items-start gap-2 text-sm not-italic leading-relaxed text-slate-400">
          <MapPin className="mt-0.5 size-4 shrink-0 text-slate-500" aria-hidden />
          Av. 10, Qd. 05, Lt. 14, Nº 205, Jardim Progresso, Anápolis - GO, 75063-330
        </address>
        <div className="flex flex-col gap-3 md:items-end">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 rounded-sm text-sm text-slate-300 transition-all duration-200 ease-in-out hover:text-white ${focusRing}`}
          >
            <AtSign className="size-4" aria-hidden />
            charles_veiculos01
          </a>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 rounded-sm text-sm text-slate-300 transition-all duration-200 ease-in-out hover:text-white ${focusRing}`}
          >
            <Phone className="size-4" aria-hidden />
            (62) 99964-1311
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-6 text-xs leading-relaxed text-slate-500 sm:px-8">
          © {new Date().getFullYear()} Charles Veículos & Locadora. Preços, condições e disponibilidade sujeitos a alteração sem aviso prévio. Consulte a loja antes de fechar negócio.
        </p>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      className={`fixed bottom-5 right-5 z-50 inline-flex size-14 items-center justify-center rounded-full bg-green-500 text-slate-950 shadow-sm transition-all duration-200 ease-in-out hover:bg-green-400 ${focusRing}`}
    >
      <MessageCircle className="size-6" aria-hidden />
    </a>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 antialiased">
      <Header />
      <main>
        <Hero />
        <Showcase />
        <Benefits />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
