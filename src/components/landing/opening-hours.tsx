"use client";

import { useSyncExternalStore } from "react";
import { Clock } from "lucide-react";

import { CLOSED_LABEL, OPENING_HOURS, formatMinutes, openStatus, type OpenStatus } from "@/data/store";
import { cn } from "@/lib/utils";

const STATUS_LABEL: Record<OpenStatus, string> = {
  open: "Aberto agora",
  "closing-soon": "Fecha em breve",
  closed: "Fechado agora",
};

const STATUS_DOT: Record<OpenStatus, string> = {
  open: "bg-emerald-500",
  "closing-soon": "bg-amber-400",
  closed: "bg-zinc-500",
};

function subscribe(onChange: () => void) {
  const id = window.setInterval(onChange, 60_000);
  return () => window.clearInterval(id);
}

// No servidor o horário é desconhecido (página estática): o selo só aparece no navegador.
function useOpenStatus(): OpenStatus | null {
  return useSyncExternalStore(subscribe, () => openStatus(new Date()), () => null);
}

function StatusBadge() {
  const status = useOpenStatus();
  if (!status) return <span className="h-7" aria-hidden />;

  return (
    <span className="inline-flex h-7 shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-white/15 px-3 text-xs font-medium text-white">
      <span className={cn("size-2 rounded-full", STATUS_DOT[status])} aria-hidden />
      {STATUS_LABEL[status]}
    </span>
  );
}

export function OpeningHours() {
  return (
    <div className="rounded-2xl border border-white/10 p-6">
      <div className="flex items-center justify-between gap-4">
        <p className="inline-flex items-center gap-2 text-sm font-medium text-white">
          <Clock className="size-4 text-red-600" aria-hidden />
          Horário de funcionamento
        </p>
        <StatusBadge />
      </div>
      <dl className="mt-5 grid gap-2 text-sm">
        {OPENING_HOURS.map((period) => (
          <div key={period.label} className="flex justify-between gap-4">
            <dt className="text-zinc-400">{period.label}</dt>
            <dd className="font-medium tabular-nums text-zinc-100">
              {formatMinutes(period.opens)} às {formatMinutes(period.closes)}
            </dd>
          </div>
        ))}
        <div className="flex justify-between gap-4">
          <dt className="text-zinc-400">{CLOSED_LABEL}</dt>
          <dd className="text-zinc-500">Fechado</dd>
        </div>
      </dl>
    </div>
  );
}
