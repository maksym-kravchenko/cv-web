import type { ReactNode } from 'react'

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-sub">
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      {children}
    </div>
  )
}
