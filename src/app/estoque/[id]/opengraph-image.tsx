import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

import { VEHICLES, getVehicle, vehicleName } from "@/data/vehicles";
import { currency } from "@/lib/whatsapp";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return VEHICLES.map((vehicle) => ({ id: vehicle.id }));
}

export default async function Image({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const vehicle = getVehicle(id);
  if (!vehicle) return new Response("Not found", { status: 404 });

  const photo = await readFile(join(process.cwd(), "public", vehicle.image), "base64");

  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: "#000", position: "relative" }}>
        <img src={`data:image/jpeg;base64,${photo}`} alt="" width={1200} height={630} style={{ position: "absolute", top: 0, left: 0, objectFit: "cover", width: 1200, height: 630 }} />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1200,
            height: 630,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: 56,
            background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0) 75%)",
          }}
        >
          <div style={{ display: "flex", color: "#a1a1aa", fontSize: 28, letterSpacing: 6, textTransform: "uppercase" }}>
            Charles Veículos · Anápolis - GO
          </div>
          <div style={{ display: "flex", color: "#fff", fontSize: 60, fontWeight: 700, marginTop: 12 }}>{vehicleName(vehicle)}</div>
          <div style={{ display: "flex", color: "#ef4444", fontSize: 72, fontWeight: 700, marginTop: 8 }}>
            {currency.format(vehicle.price)}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
