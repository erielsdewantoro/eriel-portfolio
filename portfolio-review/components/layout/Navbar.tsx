"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageToggle } from "@/components/layout/LanguageToggle";
import { LocalizedText } from "@/components/ui/LocalizedText";

// "education" and "projects" are tracked too so the highlight clears when no nav item matches.
const SECTION_IDS = ["projects", "experience", "skills", "education", "about", "contact"];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>("");
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Header gets a stronger edge once the page scrolls.
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      if (window.scrollY < 240) setActiveId(""); // back at the hero: clear the highlight
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the home-page section currently in view.
  useEffect(() => {
    if (pathname !== "/") return; // isCurrent() ignores activeId off the home page
    const els = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );
    if (!els.length || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  // Mobile menu: Escape closes it, Tab stays inside, page scroll is locked.
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
        return;
      }
      if (e.key === "Tab" && menuRef.current) {
        const focusables = menuRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", onKeyDown);
    menuRef.current?.querySelector<HTMLElement>("a, button")?.focus();
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  function isCurrent(href: string): boolean {
    if (href === "/projects") return pathname.startsWith("/projects");
    if (href.startsWith("/#")) return pathname === "/" && activeId === href.slice(2);
    return false;
  }

  const first = site.name.split(" ")[0].toUpperCase();

  return (
    <>
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-[box-shadow,border-color] duration-[var(--duration-base)] ${
        scrolled ? "border-[var(--color-border-strong)] shadow-[var(--glow)]" : "border-[var(--color-border)]"
      }`}
      style={{ backgroundColor: "var(--color-nav)" }}
    >
      <div className="container-max flex h-[68px] items-center justify-between gap-4">
        <Link
          href="/"
          className="focus-ring text-[15px] font-extrabold tracking-[0.14em] text-[var(--color-accent)] [text-shadow:var(--text-glow)] sm:text-[17px]"
          onClick={() => setOpen(false)}
        >
          <span className="hidden lg:inline">{site.name.toUpperCase()}.</span>
          <span className="lg:hidden">{first}.</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {site.nav.map((item) => {
            const current = isCurrent(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current ? "page" : undefined}
                className={`focus-ring group relative text-[15px] font-medium transition-colors hover:text-[var(--color-accent)] ${
                  current ? "text-[var(--color-accent)]" : "text-[var(--color-text)]"
                }`}
              >
                <LocalizedText en={item.label} id={item.labelId} />
                <span
                  aria-hidden="true"
                  className={`absolute -bottom-1.5 left-0 h-[2px] bg-[var(--color-accent)] transition-all duration-[var(--duration-base)] ${
                    current ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
          <div className="flex items-center gap-1 pl-2">
            <a
              href={site.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile / Profil GitHub, opens in new tab / buka di tab baru"
              className="focus-ring flex h-11 w-11 items-center justify-center text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)]"
            >
              <GitHubIcon />
            </a>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile / Profil LinkedIn, opens in new tab / buka di tab baru"
              className="focus-ring flex h-11 w-11 items-center justify-center text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)]"
            >
              <LinkedInIcon size={18} />
            </a>
            <a
              href={site.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Eriel on WhatsApp / Hubungi Eriel melalui WhatsApp, opens in new tab / buka di tab baru"
              className="focus-ring flex h-11 w-11 items-center justify-center text-[var(--color-text-secondary)] transition-colors hover:text-[#25D366]"
            >
              <WhatsAppIcon size={19} />
            </a>
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle />
          <ThemeToggle />
          <button
            ref={menuButtonRef}
            type="button"
            className="focus-ring flex h-11 w-11 flex-col items-center justify-center gap-[5px]"
            aria-label={open ? "Close menu / Tutup menu" : "Open menu / Buka menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`h-[3px] w-6 rounded bg-[var(--color-accent)] transition-all duration-200 ${open ? "translate-y-[8px] rotate-45" : ""}`} />
            <span className={`h-[3px] w-6 rounded bg-[var(--color-accent)] transition-all duration-200 ${open ? "opacity-0" : ""}`} />
            <span className={`h-[3px] w-6 rounded bg-[var(--color-accent)] transition-all duration-200 ${open ? "-translate-y-[8px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

    </header>

      {open && (
        <div
          id="mobile-menu"
          ref={menuRef}
          className="fixed inset-x-0 bottom-0 top-[68px] z-40 overflow-y-auto backdrop-blur-2xl md:hidden"
          style={{ backgroundColor: "var(--color-bg)" }}
        >
          <nav aria-label="Mobile" className="container-max flex min-h-full flex-col justify-center gap-2 py-10">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="focus-ring block border-b border-[var(--color-border)] py-4 text-[24px] font-semibold text-[var(--color-text)] transition-colors hover:text-[var(--color-accent)]"
              >
                <LocalizedText en={item.label} id={item.labelId} />
              </Link>
            ))}
            <div className="mt-6 flex gap-4">
              <a
                href={site.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring flex items-center gap-2 rounded-[var(--radius-sm)] border border-[var(--color-border)] px-4 py-3 text-[15px] font-medium"
              >
                <GitHubIcon /> GitHub
              </a>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring flex items-center gap-2 rounded-[var(--radius-sm)] border border-[var(--color-border)] px-4 py-3 text-[15px] font-medium"
              >
                <LinkedInIcon size={18} /> LinkedIn
              </a>
              <a
                href={site.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Eriel on WhatsApp / Hubungi Eriel melalui WhatsApp, opens in new tab / buka di tab baru"
                className="focus-ring flex items-center justify-center rounded-[var(--radius-sm)] border border-[var(--color-border)] px-4 py-3 text-[#25D366]"
              >
                <WhatsAppIcon size={20} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
