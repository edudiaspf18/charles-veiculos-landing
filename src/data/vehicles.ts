export interface Vehicle {
  id: string;
  brand: string;
  model: string;
  year: string;
  km?: number;
  engine: string;
  transmission: string;
  price: number;
  /** Foto de capa, usada no card e na imagem de compartilhamento. */
  image: string;
  /** Fotos extras exibidas na galeria da página do veículo. */
  gallery?: string[];
  tag?: string;
}

export const VEHICLES: Vehicle[] = [
  { id: "creta-limited", brand: "Hyundai", model: "Creta Limited", year: "2023/24", km: 39000, engine: "1.0 Turbo", transmission: "Automático", price: 122900, image: "/cars/creta-limited.jpg" },
  { id: "discovery-hse", brand: "Land Rover", model: "Discovery TD6 HSE Blindada", year: "2019/20", km: 98631, engine: "3.0 Diesel", transmission: "Automático", price: 279900, image: "/cars/discovery-hse.jpg", tag: "Blindada" },
  { id: "argo-drive-2024", brand: "Fiat", model: "Argo Drive 1.0", year: "2024/25", km: 52398, engine: "1.0 Flex", transmission: "Manual", price: 72900, image: "/cars/argo-drive-2024.jpg" },
  { id: "creta-comfort", brand: "Hyundai", model: "Creta Comfort", year: "2023/24", km: 69440, engine: "1.0 Turbo", transmission: "Automático", price: 112900, image: "/cars/creta-comfort.jpg" },
  { id: "nivus-highline", brand: "Volkswagen", model: "Nivus Highline TSI", year: "2022/22", km: 70369, engine: "1.0 Turbo TSI", transmission: "Automático", price: 109900, image: "/cars/nivus-highline.jpg" },
  { id: "f1000-s-mwm", brand: "Ford", model: "F1000 S MWM Diesel", year: "1991/91", engine: "3.9 MWM Diesel", transmission: "Manual", price: 89900, image: "/cars/f1000-s-mwm.jpg", tag: "Clássico" },
  { id: "argo-drive", brand: "Fiat", model: "Argo Drive 1.0", year: "2025/26", km: 43057, engine: "1.0 Flex", transmission: "Manual", price: 80900, image: "/cars/argo-drive.jpg" },
  { id: "celta-lt", brand: "Chevrolet", model: "Celta LT 1.0", year: "2014/15", km: 110196, engine: "1.0 Flex", transmission: "Manual", price: 40900, image: "/cars/celta-lt.jpg" },
  { id: "toro-freedom", brand: "Fiat", model: "Toro Freedom 4x4", year: "2017/17", km: 103224, engine: "2.0 Turbo Diesel", transmission: "Manual", price: 79900, image: "/cars/toro-freedom.jpg" },
  { id: "hb20-comfort", brand: "Hyundai", model: "HB20 Comfort 1.0", year: "2019/19", km: 90817, engine: "1.0 Flex", transmission: "Manual", price: 59900, image: "/cars/hb20-comfort.jpg" },
  { id: "mobi-like-2023", brand: "Fiat", model: "Mobi Like 1.0", year: "2023/24", km: 61779, engine: "1.0 Flex", transmission: "Manual", price: 55900, image: "/cars/mobi-like-2023.jpg" },
  { id: "onix-lt2", brand: "Chevrolet", model: "Onix LT2 1.0", year: "2025/25", km: 35955, engine: "1.0 Flex", transmission: "Manual", price: 72900, image: "/cars/onix-lt2.jpg" },
  { id: "gol-special", brand: "Volkswagen", model: "Gol Special MB 1.0", year: "2015/16", km: 133265, engine: "1.0 Flex", transmission: "Manual", price: 42900, image: "/cars/gol-special.jpg" },
  { id: "mobi-like-2024", brand: "Fiat", model: "Mobi Like 1.0", year: "2024/25", km: 30292, engine: "1.0 Flex", transmission: "Manual", price: 61900, image: "/cars/mobi-like-2024.jpg" },
  { id: "tiggo-5x", brand: "Caoa Chery", model: "Tiggo 5X T", year: "2020/21", km: 134043, engine: "1.5 Turbo Flex", transmission: "Automático CVT", price: 82900, image: "/cars/tiggo-5x.jpg" },
  { id: "fox-comfort", brand: "Volkswagen", model: "Fox 1.6 Comfort", year: "2016/16", km: 128964, engine: "1.6 Flex", transmission: "Manual", price: 49900, image: "/cars/fox-comfort.jpg" },
  { id: "kicks-sv", brand: "Nissan", model: "Kicks SV CVT 1.6", year: "2017/18", km: 110482, engine: "1.6 Flex", transmission: "Automático CVT", price: 78900, image: "/cars/kicks-sv.jpg" },
  { id: "ka-se", brand: "Ford", model: "Ka SE 1.0", year: "2018/19", km: 127642, engine: "1.0 Flex", transmission: "Manual", price: 44900, image: "/cars/ka-se.jpg" },
  { id: "toro-freedom-2022", brand: "Fiat", model: "Toro Freedom Turbo AT6", year: "2022/22", km: 105096, engine: "1.3 Turbo Flex", transmission: "Automático", price: 102900, image: "/cars/toro-freedom-2022.jpg" },
  { id: "etios-cross", brand: "Toyota", model: "Etios HB Cross 1.5", year: "2013/14", km: 192512, engine: "1.5 Flex", transmission: "Manual", price: 47900, image: "/cars/etios-cross.jpg" },
  { id: "argo-drive-fipe", brand: "Fiat", model: "Argo Drive 1.0", year: "2025/26", km: 56828, engine: "1.0 Flex", transmission: "Manual", price: 70900, image: "/cars/argo-drive-fipe.jpg", tag: "R$ 10 mil abaixo da FIPE" },
  { id: "bmw-x1-s20i", brand: "BMW", model: "X1 S20i ActiveFlex", year: "2018/18", km: 79781, engine: "2.0 Turbo Flex", transmission: "Automático", price: 109900, image: "/cars/bmw-x1-s20i.jpg" },
  { id: "miura-1-8", brand: "Miura", model: "1.8 AP 5 Marchas", year: "1984/84", engine: "1.8 Gasolina", transmission: "Manual", price: 111900, image: "/cars/miura-1-8.jpg", tag: "Relíquia" },
  { id: "mobi-trekking", brand: "Fiat", model: "Mobi Trekking 1.0", year: "2024/25", km: 46849, engine: "1.0 Flex", transmission: "Manual", price: 66900, image: "/cars/mobi-trekking.jpg" },
  { id: "onix-ltz", brand: "Chevrolet", model: "Onix LTZ 1.4", year: "2019/19", km: 78847, engine: "1.4 Flex", transmission: "Automático", price: 69900, image: "/cars/onix-ltz.jpg" },
  { id: "strada-endurance", brand: "Fiat", model: "Strada Endurance CS 1.4", year: "2022/23", engine: "1.4 Flex", transmission: "Manual", price: 74900, image: "/cars/strada-endurance.jpg" },
  { id: "sportage-ex", brand: "Kia", model: "Sportage EX 2.0", year: "2014/14", km: 152992, engine: "2.0 Flex", transmission: "Automático", price: 78900, image: "/cars/sportage-ex.jpg" },
  { id: "fiorino-endurance", brand: "Fiat", model: "Fiorino Endurance 1.4", year: "2023/24", km: 109109, engine: "1.4 Flex", transmission: "Manual", price: 89900, image: "/cars/fiorino-endurance.jpg" },
];

export function getVehicle(id: string): Vehicle | undefined {
  return VEHICLES.find((vehicle) => vehicle.id === id);
}

export function vehicleName(vehicle: Vehicle): string {
  return `${vehicle.brand} ${vehicle.model} ${vehicle.year}`;
}

export function vehicleImages(vehicle: Vehicle): string[] {
  return [vehicle.image, ...(vehicle.gallery ?? [])];
}

export function vehicleMessage(vehicle: Vehicle, price: string): string {
  return `Olá! Vim pelo site e tenho interesse no ${vehicle.brand} ${vehicle.model} ${vehicle.year} anunciado por ${price}. Ainda está disponível?`;
}
