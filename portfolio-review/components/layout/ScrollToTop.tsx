"use client";

import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@/components/ui/Icons";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      tabIndex={visible ? 0 : -1}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`focus-ring fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-accent)] text-[var(--color-on-accent)] shadow-[var(--glow)] transition-all duration-[var(--duration-base)] hover:-translate-y-1 ${
        visible ? "opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ArrowUpIcon />
    </button>
  );
}
