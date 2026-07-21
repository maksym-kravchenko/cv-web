import type { ReactNode } from 'react'

export const richTags = {
  accent: (chunks: ReactNode) => <span className="text-accent">{chunks}</span>,
  accentStrong: (chunks: ReactNode) => <span className="text-accent-strong">{chunks}</span>,
  b: (chunks: ReactNode) => <b className="font-semibold text-fg">{chunks}</b>,
}
