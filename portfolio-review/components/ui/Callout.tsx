import { ReactNode } from "react";
import { LocalizedText } from "@/components/ui/LocalizedText";

type Props = {
  variant: "info" | "note";
  label: string;
  labelId?: string;
  children: ReactNode;
};

export function Callout({ variant, label, labelId, children }: Props) {
  const isNote = variant === "note";
  return (
    <div
      className="rounded-[var(--radius-md)] p-6"
      style={{
        backgroundColor: isNote ? "var(--color-note-bg)" : "var(--color-info-bg)",
        borderLeft: `3px solid ${isNote ? "var(--color-note-border)" : "var(--color-info-border)"}`,
      }}
    >
      <p
        className="mb-2 text-[13px] font-semibold uppercase tracking-[0.06em]"
        style={{ color: isNote ? "var(--color-note-label)" : "var(--color-accent)" }}
      >
        {isNote ? "⚠ " : "ⓘ "}<LocalizedText en={label} id={labelId ?? label} />
      </p>
      <div className="text-[15px] leading-[1.6] text-[var(--color-text)]">{children}</div>
    </div>
  );
}
