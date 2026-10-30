type Props = {
  label: string;
  labelId?: string;
  note?: string;
  noteId?: string;
};

export function Chip({ label, labelId, note, noteId }: Props) {
  return (
    <span className="inline-flex items-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-subtle)] px-3 py-1 text-[12.5px] font-medium text-[var(--color-text-secondary)]">
      <span className="language-en" lang="en">{label}</span><span className="language-id" lang="id">{labelId ?? label}</span>
      {note && <span className="ml-1 font-normal text-[var(--color-text-muted)]">· <span className="language-en" lang="en">{note}</span><span className="language-id" lang="id">{noteId ?? note}</span></span>}
    </span>
  );
}
