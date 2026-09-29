import Image from "next/image";

import { cn } from "@/lib/utils";
import { focusRing } from "./cta-link";

export function Logo({ className }: { className?: string }) {
  return (
    <a
      href="#inicio"
      aria-label="Charles Veículos e Locadora, voltar ao início"
      className={cn("inline-flex rounded-md transition-all duration-200 ease-in-out hover:opacity-80", focusRing, className)}
    >
      <Image src="/logo-charles.png" alt="Charles Veículos e Locadora" width={591} height={362} priority className="h-full w-auto" />
    </a>
  );
}
