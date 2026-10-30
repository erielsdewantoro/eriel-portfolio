import type { ReactNode } from "react";

/** Both translations are rendered as small spans; CSS shows the selected one. */
export function LocalizedText({ en, id }: { en: ReactNode; id: ReactNode }) {
  return (
    <>
      <span className="language-en" lang="en">{en}</span>
      <span className="language-id" lang="id">{id}</span>
    </>
  );
}
