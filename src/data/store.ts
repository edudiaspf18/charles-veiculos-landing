export const STORE_ADDRESS = "Av. 10, Qd. 05, Lt. 14, Nº 205, Jardim Progresso, Anápolis - GO, 75063-330";

const MAP_QUERY = encodeURIComponent("Charles Veículos, Av. 10, 205, Jardim Progresso, Anápolis - GO, 75063-330");
export const MAP_EMBED_URL = `https://www.google.com/maps?q=${MAP_QUERY}&z=16&output=embed`;
export const MAP_URL = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;

export const STORE_TIME_ZONE = "America/Sao_Paulo";

export interface OpeningPeriod {
  label: string;
  /** 0 = domingo ... 6 = sábado */
  days: number[];
  /** Minutos desde 00:00. */
  opens: number;
  closes: number;
}

export const OPENING_HOURS: OpeningPeriod[] = [
  { label: "Segunda a sexta", days: [1, 2, 3, 4, 5], opens: 8 * 60, closes: 18 * 60 },
  { label: "Sábado", days: [6], opens: 8 * 60, closes: 13 * 60 },
];

export const CLOSED_LABEL = "Domingo";

export function formatMinutes(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  return rest === 0 ? `${hours}h` : `${hours}h${String(rest).padStart(2, "0")}`;
}

interface StoreClock {
  day: number;
  minutes: number;
}

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function storeClock(date: Date): StoreClock {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: STORE_TIME_ZONE,
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(date);
  const part = (type: string) => parts.find((p) => p.type === type)?.value ?? "";

  return {
    day: WEEKDAYS.indexOf(part("weekday")),
    minutes: Number(part("hour")) * 60 + Number(part("minute")),
  };
}

export type OpenStatus = "open" | "closing-soon" | "closed";

const CLOSING_SOON_MINUTES = 60;

export function openStatus(date: Date): OpenStatus {
  const { day, minutes } = storeClock(date);
  const period = OPENING_HOURS.find((p) => p.days.includes(day) && minutes >= p.opens && minutes < p.closes);

  if (!period) return "closed";
  if (period.closes - minutes <= CLOSING_SOON_MINUTES) return "closing-soon";
  return "open";
}
