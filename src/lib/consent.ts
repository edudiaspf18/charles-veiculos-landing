"use client";

import { useSyncExternalStore } from "react";

export type ConsentState = "granted" | "denied" | "unset" | "loading";

const STORAGE_KEY = "cookie-consent";
const listeners = new Set<() => void>();

function readStorage(): ConsentState {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "granted" || value === "denied" ? value : "unset";
  } catch {
    return "unset";
  }
}

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

export function setConsent(value: "granted" | "denied" | "unset"): void {
  try {
    if (value === "unset") window.localStorage.removeItem(STORAGE_KEY);
    else window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // Storage bloqueado: a escolha vale só até recarregar a página.
  }
  listeners.forEach((listener) => listener());
}

/** "loading" no servidor e na hidratação, para não piscar o banner. */
export function useConsent(): ConsentState {
  return useSyncExternalStore(subscribe, readStorage, () => "loading");
}
