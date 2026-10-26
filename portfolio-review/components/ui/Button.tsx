import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "outline";

type Props = {
  href: string;
  variant?: Variant;
  children: ReactNode;
  external?: boolean;
  className?: string;
};

export function Button({ href, variant = "primary", children, external, className = "" }: Props) {
  const base =
    "focus-ring inline-flex min-h-[48px] items-center justify-center gap-2 rounded-[var(--radius-sm)] px-6 py-3 text-[15px] font-semibold transition-all duration-[var(--duration-fast)]";
  const styles =
    variant === "primary"
      ? "bg-[var(--color-accent)] text-[var(--color-on-accent)] hover:-translate-y-0.5 hover:bg-[var(--color-accent-hover)] hover:shadow-[var(--glow)]"
      : "border border-[var(--color-border-strong)] bg-transparent text-[var(--color-text)] hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:shadow-[var(--glow)]";

  const content = (
    <>
      {children}
      {external && <span className="sr-only">(opens in new tab)</span>}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${styles} ${className}`}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {content}
    </Link>
  );
}
