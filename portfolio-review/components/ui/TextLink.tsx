import Link from "next/link";
import { ReactNode } from "react";
import { ExternalIcon } from "@/components/ui/Icons";

type Props = {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
};

export function TextLink({ href, children, external, className = "" }: Props) {
  const base =
    "focus-ring font-medium underline decoration-1 underline-offset-4 text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent-hover)]";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${className}`}>
        {children}
        <ExternalIcon className="ml-1 inline-block" />
        <span className="sr-only">(opens in new tab)</span>
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${className}`}>
      {children}
    </Link>
  );
}
