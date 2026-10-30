"use client";

import { MoonIcon, SunIcon } from "@/components/ui/Icons";

/**
 * Dark is the default; this flips to light and remembers the choice.
 * Icons are swapped with CSS (see globals.css), so the server and client
 * markup are identical — no hydration mismatch.
 */
export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage unavailable — theme still applies for this visit */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light/dark theme / Ganti tema terang/gelap"
      title="Toggle light/dark theme / Ganti tema terang/gelap"
      className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text)] transition-colors duration-[var(--duration-fast)] hover:border-[var(--color-border-strong)] hover:text-[var(--color-accent)]"
    >
      <MoonIcon className="theme-icon-moon" />
      <SunIcon className="theme-icon-sun" />
    </button>
  );
}
