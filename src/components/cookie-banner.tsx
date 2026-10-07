"use client";

import Link from "next/link";

import { setConsent, useConsent } from "@/lib/consent";
import { cn } from "@/lib/utils";
import { focusRing } from "./landing/cta-link";

const buttonBase =
  "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 ease-in-out";

export function CookieBanner() {
  const consent = useConsent();
  if (consent !== "unset") return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className="fixed inset-x-4 bottom-4 z-[60] max-w-md rounded-2xl border border-white/10 bg-zinc-950 p-5 shadow-sm sm:right-auto sm:left-6 sm:bottom-6"
    >
      <p className="text-sm leading-relaxed text-zinc-400">
        Usamos cookies de análise (Google Analytics) para entender como o site é usado. Só ativamos com a sua permissão.{" "}
        <Link href="/privacidade" className={cn("rounded-sm text-zinc-200 underline underline-offset-4 hover:text-white", focusRing)}>
          Saiba mais
        </Link>
      </p>
      <div className="mt-4 flex gap-3">
        <button
          type="button"
          onClick={() => setConsent("granted")}
          className={cn(buttonBase, "bg-red-600 text-white hover:bg-red-500", focusRing)}
        >
          Aceitar
        </button>
        <button
          type="button"
          onClick={() => setConsent("denied")}
          className={cn(buttonBase, "border border-white/20 text-white hover:border-white/50", focusRing)}
        >
          Recusar
        </button>
      </div>
    </div>
  );
}

/** Reabre o banner para o visitante mudar a escolha. */
export function CookiePreferencesButton() {
  const consent = useConsent();
  if (consent === "loading") return null;

  return (
    <button
      type="button"
      onClick={() => setConsent("unset")}
      className={cn(
        "mt-4 rounded-sm text-sm text-zinc-200 underline underline-offset-4 transition-all duration-200 ease-in-out hover:text-white",
        focusRing,
      )}
    >
      Alterar preferência de cookies
    </button>
  );
}
