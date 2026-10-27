"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type GalleryImage = { src: string; alt: string };

export function ExperienceGallery({ images }: { images: GalleryImage[] }) {
  const [index, setIndex] = useState(0);
  const [turning, setTurning] = useState(false);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [resetting, setResetting] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const paused = userPaused || hovering || focused;
  const nextIndex = (index + direction + images.length) % images.length;

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(preference.matches);
    updatePreference();
    preference.addEventListener("change", updatePreference);
    return () => preference.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (paused || images.length < 2) return;
    const timer = window.setInterval(() => {
      if (reducedMotion) {
        setIndex((current) => (current + 1) % images.length);
      } else if (!turning) {
        setDirection(1);
        setTurning(true);
      }
    }, 5000);
    return () => window.clearInterval(timer);
  }, [images.length, paused, reducedMotion, turning]);

  function turnCard(step: 1 | -1) {
    if (turning || images.length < 2) return;
    if (reducedMotion) {
      setIndex((current) => (current + step + images.length) % images.length);
      return;
    }
    setDirection(step);
    setTurning(true);
  }

  function finishTurn(event: React.TransitionEvent<HTMLDivElement>) {
    if (event.target !== event.currentTarget || event.propertyName !== "transform" || !turning) return;
    setIndex(nextIndex);
    setTurning(false);
    setResetting(true);
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setResetting(false));
    });
  }

  return (
    <div
      className="flex h-full flex-col justify-center bg-[var(--color-surface-subtle)] p-4 md:w-[40%] md:shrink-0"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setFocused(false);
      }}
    >
      <div className="[perspective:1200px]">
        <div
          className={`relative aspect-[4/3] overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg)] ${
            resetting ? "[transition:none]" : "transition-transform duration-700 [transition-timing-function:cubic-bezier(0.2,0.75,0.25,1)]"
          } [transform-style:preserve-3d]`}
          style={{ transform: `rotateY(${turning ? direction * 180 : 0}deg)` }}
          onTransitionEnd={finishTurn}
          aria-label={`Experience photo ${index + 1} of ${images.length}`}
        >
          <div className="absolute inset-0 [backface-visibility:hidden]">
            <Image src={images[index].src} alt={images[index].alt} fill sizes="(min-width: 768px) 400px, 100vw" className="object-contain p-2" />
          </div>
          <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]" aria-hidden="true">
            <Image src={images[nextIndex].src} alt="" fill sizes="(min-width: 768px) 400px, 100vw" className="object-contain p-2" />
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between gap-2 text-[12px] text-[var(--color-text-muted)]">
        <button type="button" onClick={() => turnCard(-1)} className="focus-ring rounded px-2 py-1 hover:text-[var(--color-accent)]" aria-label="Show previous experience photo">
          Previous
        </button>
        <span aria-live="polite">{index + 1} / {images.length}</span>
        <button type="button" onClick={() => turnCard(1)} className="focus-ring rounded px-2 py-1 hover:text-[var(--color-accent)]" aria-label="Show next experience photo">
          Next
        </button>
        <button
          type="button"
          onClick={() => setUserPaused((value) => !value)}
          className="focus-ring rounded px-2 py-1 hover:text-[var(--color-accent)]"
          aria-label={userPaused ? "Resume automatic photo slideshow" : "Pause automatic photo slideshow"}
          aria-pressed={userPaused}
        >
          {userPaused ? "Play" : "Pause"}
        </button>
      </div>
    </div>
  );
}
