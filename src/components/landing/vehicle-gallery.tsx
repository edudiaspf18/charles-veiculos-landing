"use client";

import { useState } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { focusRing } from "./cta-link";

interface VehicleGalleryProps {
  images: string[];
  alt: string;
}

export function VehicleGallery({ images, alt }: VehicleGalleryProps) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="relative aspect-[5/4] overflow-hidden rounded-2xl border border-white/10 bg-zinc-950">
        <Image
          key={images[active]}
          src={images[active]}
          alt={`${alt}, foto ${active + 1} de ${images.length}`}
          fill
          priority
          sizes="(min-width: 1024px) 58vw, 100vw"
          className="object-cover"
        />
      </div>
      {images.length > 1 && (
        <ul className="mt-4 grid grid-cols-5 gap-3 sm:grid-cols-6">
          {images.map((src, index) => (
            <li key={src}>
              <button
                type="button"
                aria-label={`Ver foto ${index + 1}`}
                aria-current={index === active}
                onClick={() => setActive(index)}
                className={cn(
                  "relative block aspect-[5/4] w-full overflow-hidden rounded-lg border transition-all duration-200 ease-in-out",
                  index === active ? "border-red-600" : "border-white/10 opacity-60 hover:opacity-100",
                  focusRing,
                )}
              >
                <Image src={src} alt="" fill sizes="120px" className="object-cover" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
