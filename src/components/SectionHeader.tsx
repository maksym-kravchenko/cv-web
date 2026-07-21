import type { ComponentType, ReactNode } from 'react'
import type { LucideProps } from 'lucide-react'
import { Eyebrow } from './Eyebrow'

export function SectionHeader({
  icon: Icon,
  eyebrow,
  children,
}: {
  icon: ComponentType<LucideProps>
  eyebrow: ReactNode
  children: ReactNode
}) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent-strong">
        <Icon className="h-5 w-5" strokeWidth={2} />
      </span>
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-0.5 text-2xl font-bold leading-none tracking-[-0.01em]">{children}</h2>
      </div>
    </div>
  )
}
