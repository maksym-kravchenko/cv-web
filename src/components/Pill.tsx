import type { ReactNode } from 'react'
import cm from '@/utils/cm'
import { TechIcon, techLabel, type TechId } from './icons/TechIcon'

export function Pill({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cm(
        'inline-flex items-center gap-1.5 rounded-full border border-line bg-card px-2.5 py-1 text-xs font-medium text-fg',
        className,
      )}
    >
      {children}
    </span>
  )
}

export function TechPill({ id }: { id: TechId }) {
  return (
    <Pill>
      <TechIcon id={id} />
      {techLabel(id)}
    </Pill>
  )
}

export function TechPills({ tech }: { tech: TechId[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {tech.map((id) => (
        <TechPill key={id} id={id} />
      ))}
    </div>
  )
}
