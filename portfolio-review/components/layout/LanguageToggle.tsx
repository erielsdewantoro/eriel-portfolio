"use client";

import { useSyncExternalStore } from "react";

type Language = "en" | "id";

function subscribe(callback: () => void) {
  window.addEventListener("portfolio-language-change", callback);
  return () => window.removeEventListener("portfolio-language-change", callback);
}

function getLanguage(): Language {
  return document.documentElement.dataset.language === "id" ? "id" : "en";
}

function applyLanguage(language: Language) {
  document.documentElement.dataset.language = language;
  document.documentElement.lang = language;
  try {
    localStorage.setItem("language", language);
  } catch {
    // The language still changes for this visit if storage is unavailable.
  }
  window.dispatchEvent(new CustomEvent("portfolio-language-change", { detail: language }));
}

export function LanguageToggle() {
  const language = useSyncExternalStore(subscribe, getLanguage, () => "en");

  function select(language: Language) {
    applyLanguage(language);
  }

  return (
    <div role="group" aria-label="Choose language / Pilih bahasa" className="flex h-11 items-center gap-1 rounded-full border border-[var(--color-border)] px-1 text-[12px] font-semibold">
      <button
        type="button"
        onClick={() => select("en")}
        aria-pressed={language === "en"}
        className={`focus-ring rounded-full px-2.5 py-1.5 transition-colors ${language === "en" ? "bg-[var(--color-accent)] text-[var(--color-on-accent)]" : "text-[var(--color-text-secondary)] hover:text-[var(--color-accent)]"}`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => select("id")}
        aria-pressed={language === "id"}
        className={`focus-ring rounded-full px-2.5 py-1.5 transition-colors ${language === "id" ? "bg-[var(--color-accent)] text-[var(--color-on-accent)]" : "text-[var(--color-text-secondary)] hover:text-[var(--color-accent)]"}`}
      >
        ID
      </button>
    </div>
  );
}
