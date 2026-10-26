type Props = {
  label: string;
  note?: string;
};

export function Chip({ label, note }: Props) {
  return (
    <span className="inline-flex items-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-subtle)] px-3 py-1 text-[12.5px] font-medium text-[var(--color-text-secondary)]">
      {label}
      {note && <span className="ml-1 font-normal text-[var(--color-text-muted)]">· {note}</span>}
    </span>
  );
}
