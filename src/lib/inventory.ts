import type { Vehicle } from "@/data/vehicles";

export const ALL = "all";

export type SortKey = "featured" | "price-asc" | "price-desc" | "year-desc" | "km-asc";
export type TransmissionKey = typeof ALL | "manual" | "automatic";

export interface Option<T extends string = string> {
  value: T;
  label: string;
}

export const SORT_OPTIONS: Option<SortKey>[] = [
  { value: "featured", label: "Destaques" },
  { value: "price-asc", label: "Menor preço" },
  { value: "price-desc", label: "Maior preço" },
  { value: "year-desc", label: "Mais novos" },
  { value: "km-asc", label: "Menor km" },
];

export const TRANSMISSION_OPTIONS: Option<TransmissionKey>[] = [
  { value: ALL, label: "Todos" },
  { value: "manual", label: "Manual" },
  { value: "automatic", label: "Automático" },
];

interface PriceRange extends Option {
  min: number;
  max: number;
}

export const PRICE_RANGES: PriceRange[] = [
  { value: ALL, label: "Qualquer preço", min: 0, max: Infinity },
  { value: "ate-50", label: "Até R$ 50 mil", min: 0, max: 50000 },
  { value: "50-80", label: "R$ 50 a 80 mil", min: 50000, max: 80000 },
  { value: "80-120", label: "R$ 80 a 120 mil", min: 80000, max: 120000 },
  { value: "acima-120", label: "Acima de R$ 120 mil", min: 120000, max: Infinity },
];

export interface InventoryFilters {
  brand: string;
  transmission: TransmissionKey;
  price: string;
  sort: SortKey;
}

export const DEFAULT_FILTERS: InventoryFilters = {
  brand: ALL,
  transmission: ALL,
  price: ALL,
  sort: "featured",
};

export function brandOptions(vehicles: Vehicle[]): Option[] {
  const brands = [...new Set(vehicles.map((vehicle) => vehicle.brand))].sort((a, b) => a.localeCompare(b, "pt-BR"));
  return [{ value: ALL, label: "Todas as marcas" }, ...brands.map((brand) => ({ value: brand, label: brand }))];
}

function isAutomatic(vehicle: Vehicle): boolean {
  return vehicle.transmission.startsWith("Automático");
}

function matchesTransmission(vehicle: Vehicle, transmission: TransmissionKey): boolean {
  if (transmission === ALL) return true;
  return transmission === "automatic" ? isAutomatic(vehicle) : !isAutomatic(vehicle);
}

function matchesPrice(vehicle: Vehicle, price: string): boolean {
  const range = PRICE_RANGES.find((option) => option.value === price);
  if (!range) return true;
  return vehicle.price >= range.min && vehicle.price < range.max;
}

/** Ano-modelo: "2023/24" vira 2024. */
function modelYear(vehicle: Vehicle): number {
  const [build, model] = vehicle.year.split("/");
  if (!model) return Number(build);
  return Number(build.slice(0, 4 - model.length) + model);
}

const COMPARATORS: Record<SortKey, ((a: Vehicle, b: Vehicle) => number) | null> = {
  featured: null,
  "price-asc": (a, b) => a.price - b.price,
  "price-desc": (a, b) => b.price - a.price,
  "year-desc": (a, b) => modelYear(b) - modelYear(a),
  "km-asc": (a, b) => (a.km ?? Infinity) - (b.km ?? Infinity),
};

export function applyFilters(vehicles: Vehicle[], filters: InventoryFilters): Vehicle[] {
  const result = vehicles.filter(
    (vehicle) =>
      (filters.brand === ALL || vehicle.brand === filters.brand) &&
      matchesTransmission(vehicle, filters.transmission) &&
      matchesPrice(vehicle, filters.price),
  );
  const comparator = COMPARATORS[filters.sort];
  return comparator ? result.toSorted(comparator) : result;
}
