import type { MetadataRoute } from "next";

import { vehiclePath } from "@/components/landing/vehicle-card";
import { VEHICLES } from "@/data/vehicles";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/privacidade`, changeFrequency: "yearly", priority: 0.2 },
    ...VEHICLES.map((vehicle) => ({
      url: `${SITE_URL}${vehiclePath(vehicle)}`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
