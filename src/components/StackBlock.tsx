import { useTranslations } from 'next-intl'
import type { Stack } from '@/data/cv'
import { TechPills } from './Pill'

export function StackBlock({ stack }: { stack: Stack }) {
  const t = useTranslations('stackLabels')

  return (
    <div>
      {stack.labelKey && (
        <span className="mb-1.5 mt-2.5 block font-mono text-[9px] uppercase tracking-[0.14em] text-sub">
          {t(stack.labelKey)}
        </span>
      )}
      <TechPills tech={stack.tech} />
    </div>
  )
}
