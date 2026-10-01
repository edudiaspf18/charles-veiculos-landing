"use client";

import { useState } from "react";
import { MessageCircle, RotateCcw } from "lucide-react";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { Vehicle } from "@/data/vehicles";
import { trackAttributes } from "@/lib/analytics";
import {
  DEFAULT_FILTERS,
  PRICE_RANGES,
  SORT_OPTIONS,
  TRANSMISSION_OPTIONS,
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
  label: string;
  value: T;
  options: Option<T>[];
  onChange: (value: T) => void;
}

function FilterSelect<T extends string>({ label, value, options, onChange }: FilterSelectProps<T>) {
  return (
    <label className="flex min-w-0 flex-col gap-2">
      <span className="text-xs uppercase tracking-[0.25em] text-zinc-500">{label}</span>
      <Select items={options} value={value} onValueChange={(next) => next !== null && onChange(next)}>
        <SelectTrigger className="h-11 w-full rounded-full border-white/15 bg-black px-4 text-zinc-100 transition-all duration-200 ease-in-out hover:border-white/40 dark:bg-black dark:hover:bg-black">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </label>
  );
}

interface SegmentedProps<T extends string> {
  label: string;
  value: T;
  options: Option<T>[];
  onChange: (value: T) => void;
}

function Segmented<T extends string>({ label, value, options, onChange }: SegmentedProps<T>) {
  return (
    <fieldset className="flex min-w-0 flex-col gap-2">
      <legend className="mb-2 text-xs uppercase tracking-[0.25em] text-zinc-500">{label}</legend>
      <div className="grid h-11 grid-cols-3 rounded-full border border-white/15 p-1">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            aria-pressed={option.value === value}
            onClick={() => onChange(option.value)}
            className={cn(
              "rounded-full px-3 text-sm text-zinc-400 transition-all duration-200 ease-in-out hover:text-white",
              option.value === value && "bg-white text-black hover:text-black",
              focusRing,
            )}
          >
            {option.label}
          </button>
        ))}
      </div>
    </fieldset>
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

export function Inventory({ vehicles }: { vehicles: Vehicle[] }) {
  const [filters, setFilters] = useState<InventoryFilters>(DEFAULT_FILTERS);
  const results = applyFilters(vehicles, filters);
  const isFiltered = JSON.stringify(filters) !== JSON.stringify(DEFAULT_FILTERS);

  function update<K extends keyof InventoryFilters>(key: K, value: InventoryFilters[K]) {
    setFilters((current) => ({ ...current, [key]: value }));
  }

  const reset = () => setFilters(DEFAULT_FILTERS);

  return (
    <>
      <div className="mt-14 grid gap-5 border-y border-white/10 py-6 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.2fr_1fr]">
        <FilterSelect label="Marca" value={filters.brand} options={brandOptions(vehicles)} onChange={(value) => update("brand", value)} />
        <FilterSelect label="Preço" value={filters.price} options={PRICE_RANGES} onChange={(value) => update("price", value)} />
        <Segmented label="Câmbio" value={filters.transmission} options={TRANSMISSION_OPTIONS} onChange={(value) => update("transmission", value)} />
        <FilterSelect label="Ordenar por" value={filters.sort} options={SORT_OPTIONS} onChange={(value) => update("sort", value)} />
      </div>

      <div className="mt-6 flex min-h-11 items-center justify-between gap-4">
        <p aria-live="polite" className="text-sm text-zinc-400">
          <span className="font-semibold text-white">{results.length}</span> {results.length === 1 ? "veículo encontrado" : "veículos encontrados"}
        </p>
        {isFiltered && <ResetButton onReset={reset} />}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {results.length === 0 && <EmptyState onReset={reset} />}
        {results.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
    </>
  );
}
