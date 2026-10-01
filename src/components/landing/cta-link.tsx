import type { ReactNode } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";

import { trackAttributes } from "@/lib/analytics";
import { whatsappUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black";

interface CtaLinkProps {
  children: ReactNode;
  message?: string;
  variant?: "primary" | "outline";
  className?: string;
  /** Origem do clique enviada ao GA4 (ex.: "hero", "location"). */
  trackSource: string;
  vehicleId?: string;
}

export function CtaLink({ children, message, variant = "primary", className, trackSource, vehicleId }: CtaLinkProps) {
  const isPrimary = variant === "primary";

  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      {...trackAttributes(trackSource, vehicleId)}
      className={cn(
        "group inline-flex h-12 items-center gap-3 rounded-full pl-1.5 pr-6 text-sm font-medium transition-all duration-200 ease-in-out",
        isPrimary
          ? "border border-red-600 bg-red-600 text-white hover:border-red-500 hover:bg-red-500"
          : "border border-white/20 text-white hover:border-white/50 hover:bg-white/5",
        focusRing,
        className,
      )}
    >
      <span
        className={cn(
          "flex size-9 shrink-0 items-center justify-center rounded-full transition-all duration-200 ease-in-out",
          isPrimary ? "bg-black/25" : "bg-white/10 group-hover:bg-red-600",
        )}
      >
        {isPrimary ? <MessageCircle className="size-4" aria-hidden /> : <ArrowRight className="size-4" aria-hidden />}
      </span>
      {children}
    </a>
  );
}
