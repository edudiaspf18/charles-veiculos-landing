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

interface YearRange extends Option {
  min: number;
  max: number;
}

export const YEAR_RANGES: YearRange[] = [
  { value: ALL, label: "Qualquer ano", min: 0, max: Infinity },
  { value: "2023-mais", label: "2023 ou mais novo", min: 2023, max: Infinity },
  { value: "2020-2022", label: "2020 a 2022", min: 2020, max: 2022 },
  { value: "2015-2019", label: "2015 a 2019", min: 2015, max: 2019 },
  { value: "ate-2014", label: "2014 ou mais antigo", min: 0, max: 2014 },
];

export interface InventoryFilters {
  brand: string;
  transmission: TransmissionKey;
  year: string;
  sort: SortKey;
}

export const DEFAULT_FILTERS: InventoryFilters = {
  brand: ALL,
  transmission: ALL,
  year: ALL,
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

/** Ano-modelo: "2023/24" vira 2024. */
function modelYear(vehicle: Vehicle): number {
  const [build, model] = vehicle.year.split("/");
  if (!model) return Number(build);
  return Number(build.slice(0, 4 - model.length) + model);
}

function matchesYear(vehicle: Vehicle, year: string): boolean {
  const range = YEAR_RANGES.find((option) => option.value === year);
  if (!range) return true;
  const value = modelYear(vehicle);
  return value >= range.min && value <= range.max;
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
      matchesYear(vehicle, filters.year),
  );
  const comparator = COMPARATORS[filters.sort];
  return comparator ? result.toSorted(comparator) : result;
}
