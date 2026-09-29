import type { LucideIcon } from "lucide-react";
import { Handshake, Landmark, ShieldCheck, Wrench } from "lucide-react";

export interface Vehicle {
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

export interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
  message: string;
}

export interface Stat {
  value: string;
  label: string;
}

export const VEHICLES: Vehicle[] = [
  { id: "discovery-hse", brand: "Land Rover", model: "Discovery TD6 HSE Blindada", year: "2019/20", km: 98631, engine: "3.0 Diesel", transmission: "Automático", price: 279900, image: "/cars/discovery-hse.jpg" },
  { id: "creta-limited", brand: "Hyundai", model: "Creta Limited", year: "2023/24", km: 39000, engine: "1.0 Turbo", transmission: "Automático", price: 122900, image: "/cars/creta-limited.jpg" },
  { id: "creta-comfort", brand: "Hyundai", model: "Creta Comfort", year: "2023/24", km: 69440, engine: "1.0 Turbo", transmission: "Automático", price: 112900, image: "/cars/creta-comfort.jpg" },
  { id: "nivus-highline", brand: "Volkswagen", model: "Nivus Highline TSI", year: "2022/22", km: 70369, engine: "1.0 Turbo TSI", transmission: "Automático", price: 109900, image: "/cars/nivus-highline.jpg" },
  { id: "argo-drive", brand: "Fiat", model: "Argo Drive 1.0", year: "2025/26", km: 43057, engine: "1.0 Flex", transmission: "Manual", price: 80900, image: "/cars/argo-drive.jpg" },
  { id: "toro-freedom", brand: "Fiat", model: "Toro Freedom 4x4", year: "2017/17", km: 103224, engine: "2.0 Turbo Diesel", transmission: "Manual", price: 79900, image: "/cars/toro-freedom.jpg" },
];

export const BENEFITS: Benefit[] = [
  { icon: Wrench, title: "Veículos revisados", description: "Inspeção mecânica e estética antes de chegar ao pátio.", message: "Olá! Quero saber mais sobre a revisão dos veículos." },
  { icon: ShieldCheck, title: "Procedência garantida", description: "Histórico verificado e documentação em dia.", message: "Olá! Quero saber mais sobre a procedência dos veículos." },
  { icon: Handshake, title: "Avaliação do seu usado", description: "Seu carro como entrada, com avaliação justa.", message: "Olá! Quero avaliar meu carro usado como entrada." },
  { icon: Landmark, title: "Financiamento facilitado", description: "Aprovação ágil com os principais bancos.", message: "Olá! Quero simular um financiamento." },
];

export const STATS: Stat[] = [
  { value: "100%", label: "Veículos inspecionados" },
  { value: "+20", label: "Carros no estoque" },
  { value: "GO", label: "Loja física em Anápolis" },
];

export function vehicleMessage(vehicle: Vehicle, price: string): string {
  return `Olá! Vim pelo site e tenho interesse no ${vehicle.brand} ${vehicle.model} ${vehicle.year} anunciado por ${price}. Ainda está disponível?`;
}
