import type { LucideIcon } from "lucide-react";
import { Handshake, Landmark, ShieldCheck, Wrench } from "lucide-react";

import { VEHICLES } from "./vehicles";

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

export const BENEFITS: Benefit[] = [
  { icon: Wrench, title: "Veículos revisados", description: "Inspeção mecânica e estética antes de chegar ao pátio.", message: "Olá! Quero saber mais sobre a revisão dos veículos." },
  { icon: ShieldCheck, title: "Procedência garantida", description: "Histórico verificado e documentação em dia.", message: "Olá! Quero saber mais sobre a procedência dos veículos." },
  { icon: Handshake, title: "Avaliação do seu usado", description: "Seu carro como entrada, com avaliação justa.", message: "Olá! Quero avaliar meu carro usado como entrada." },
  { icon: Landmark, title: "Financiamento facilitado", description: "Aprovação ágil com os principais bancos.", message: "Olá! Quero simular um financiamento." },
];

export const STATS: Stat[] = [
  { value: "100%", label: "Veículos inspecionados" },
  { value: String(VEHICLES.length), label: "Carros no estoque" },
  { value: "GO", label: "Loja física em Anápolis" },
];
