"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle, RotateCcw } from "lucide-react";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { Vehicle } from "@/data/vehicles";
import { trackAttributes } from "@/lib/analytics";
import {
  DEFAULT_FILTERS,
  SORT_OPTIONS,
  TRANSMISSION_OPTIONS,
  YEAR_RANGES,
  applyFilters,
  brandOptions,
  type InventoryFilters,
  type Option,
} from "@/lib/inventory";
import { whatsappUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { focusRing } from "./cta-link";
import { VehicleCard } from "./vehicle-card";

interface FilterSelectProps<T extends string> {
  className?: string;
  label: string;
  value: T;
  options: Option<T>[];
  onChange: (value: T) => void;
}

function FilterSelect<T extends string>({ className, label, value, options, onChange }: FilterSelectProps<T>) {
  return (
    <label className={cn("flex min-w-0 flex-col gap-2", className)}>
      <span className="text-xs uppercase tracking-[0.25em] text-zinc-500">{label}</span>
      <Select items={options} value={value} onValueChange={(next) => next !== null && onChange(next)}>
        <SelectTrigger className="h-11 w-full data-[size=default]:h-11 rounded-full border-white/15 bg-black px-4 text-zinc-100 transition-all duration-200 ease-in-out hover:border-white/40 dark:bg-black dark:hover:bg-black">
          <SelectValue />
        </SelectTrigger>
        <SelectContent
          alignItemWithTrigger={false}
          sideOffset={8}
          className="rounded-2xl border border-white/15 bg-zinc-950 p-1.5 text-zinc-300 shadow-sm ring-0"
        >
          {options.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              className="h-11 rounded-xl px-3 text-sm text-zinc-300 transition-all duration-200 ease-in-out data-highlighted:bg-white/10 data-highlighted:text-white data-selected:text-white not-data-[variant=destructive]:focus:**:text-white sm:h-10"
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </label>
  );
}

interface SegmentedProps<T extends string> {
  className?: string;
  label: string;
  value: T;
  options: Option<T>[];
  onChange: (value: T) => void;
}

function Segmented<T extends string>({ className, label, value, options, onChange }: SegmentedProps<T>) {
  return (
    <div role="group" aria-label={label} className={cn("flex min-w-0 flex-col gap-2", className)}>
      <span aria-hidden className="text-xs uppercase tracking-[0.25em] text-zinc-500">{label}</span>
      <div className="grid h-11 grid-cols-3 rounded-full border border-white/15 p-1">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            aria-pressed={option.value === value}
            onClick={() => onChange(option.value)}
            className={cn(
              "rounded-full px-2 text-sm text-zinc-400 transition-all duration-200 ease-in-out hover:text-white sm:px-3",
              option.value === value && "bg-white text-black hover:text-black",
              focusRing,
            )}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function EmptyState({ onReset }: { onReset: () => void }) {
  return (
    <div className="col-span-full flex flex-col items-start gap-6 rounded-2xl border border-dashed border-white/15 p-10">
      <div>
        <p className="text-lg font-semibold tracking-tight text-white">Nenhum carro com esses filtros.</p>
        <p className="mt-2 text-zinc-400">Ajuste a busca ou conte pra gente o que procura. Chegam carros novos toda semana.</p>
      </div>
      <div className="flex flex-wrap gap-3">
        <a
          href={whatsappUrl("Olá! Vim pelo site e não encontrei o carro que procuro. Podem me ajudar?")}
          target="_blank"
          rel="noopener noreferrer"
          {...trackAttributes("inventory_empty")}
          className={cn(
            "inline-flex h-11 items-center gap-2 rounded-full bg-red-600 px-5 text-sm font-medium text-white transition-all duration-200 ease-in-out hover:bg-red-500",
            focusRing,
          )}
        >
          <MessageCircle className="size-4" aria-hidden />
          Pedir pelo WhatsApp
        </a>
        <ResetButton onReset={onReset} />
      </div>
    </div>
  );
}

function ResetButton({ onReset }: { onReset: () => void }) {
  return (
    <button
      type="button"
      onClick={onReset}
      className={cn(
        "inline-flex h-11 items-center gap-2 rounded-full border border-white/15 px-5 text-sm text-zinc-300 transition-all duration-200 ease-in-out hover:border-white/40 hover:text-white",
        focusRing,
      )}
    >
      <RotateCcw className="size-4" aria-hidden />
      Limpar filtros
    </button>
  );
}

const PAGE_SIZE = 9;

export function Inventory({ vehicles }: { vehicles: Vehicle[] }) {
  const [filters, setFilters] = useState<InventoryFilters>(DEFAULT_FILTERS);
  const [visible, setVisible] = useState(PAGE_SIZE);
  const results = applyFilters(vehicles, filters);
  const shown = results.slice(0, visible);
  const remaining = results.length - shown.length;
  const isFiltered = JSON.stringify(filters) !== JSON.stringify(DEFAULT_FILTERS);

  function update<K extends keyof InventoryFilters>(key: K, value: InventoryFilters[K]) {
    setFilters((current) => ({ ...current, [key]: value }));
    setVisible(PAGE_SIZE);
  }

  const reset = () => {
    setFilters(DEFAULT_FILTERS);
    setVisible(PAGE_SIZE);
  };

  return (
    <>
      <div className="mt-10 grid grid-cols-2 gap-x-3 gap-y-4 border-y border-white/10 py-5 sm:mt-14 sm:gap-5 sm:py-6 lg:grid-cols-[1fr_1fr_1.3fr_1fr]">
        <FilterSelect label="Marca" value={filters.brand} options={brandOptions(vehicles)} onChange={(value) => update("brand", value)} />
        <FilterSelect label="Ano" value={filters.year} options={YEAR_RANGES} onChange={(value) => update("year", value)} />
        <Segmented className="col-span-2 sm:col-span-1" label="Câmbio" value={filters.transmission} options={TRANSMISSION_OPTIONS} onChange={(value) => update("transmission", value)} />
        <FilterSelect className="col-span-2 sm:col-span-1" label="Ordenar por" value={filters.sort} options={SORT_OPTIONS} onChange={(value) => update("sort", value)} />
      </div>

      <div className="mt-5 flex min-h-11 items-center justify-between gap-4">
        <p aria-live="polite" className="text-sm text-zinc-400">
          <span className="font-semibold text-white">{results.length}</span> {results.length === 1 ? "veículo encontrado" : "veículos encontrados"}
        </p>
        {isFiltered && <ResetButton onReset={reset} />}
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 sm:mt-6 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {results.length === 0 && <EmptyState onReset={reset} />}
        {shown.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>

      {remaining > 0 && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setVisible((count) => count + PAGE_SIZE)}
            className={cn(
              "inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-white/20 px-8 text-sm font-medium text-white transition-all duration-200 ease-in-out hover:border-white/50 sm:w-auto",
              focusRing,
            )}
          >
            Ver mais carros ({remaining})
            <ChevronDown className="size-4" aria-hidden />
          </button>
        </div>
      )}
    </>
  );
}
