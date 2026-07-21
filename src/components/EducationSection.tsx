import { useTranslations } from 'next-intl'
import { GraduationCap } from 'lucide-react'
import { educationKeys } from '@/data/cv'
import { richTags } from '@/utils/rich'
import cm from '@/utils/cm'
import { SectionHeader } from './SectionHeader'

export function EducationSection() {
  const t = useTranslations('education')

  return (
    <section className="mt-12">
      <SectionHeader icon={GraduationCap} eyebrow={t('eyebrow')}>
        {t.rich('title', richTags)}
      </SectionHeader>
      <div className="rounded-2xl border border-line bg-card px-5.5 py-2 shadow-[0_1px_2px_rgba(20,20,20,0.03)]">
        {educationKeys.map((key, i) => (
          <div
            key={key}
            className={cm(
              'grid grid-cols-1 items-baseline gap-1.5 py-3.5 md:grid-cols-[30mm_1fr] md:gap-10',
              i > 0 && 'border-t border-line-soft',
            )}
          >
            <div className="font-mono text-xs text-sub">{t(`items.${key}.when`)}</div>
            <div>
              <div className="text-[15px] font-semibold">{t(`items.${key}.school`)}</div>
              <div className="mt-0.5 text-[13px] text-mute">{t(`items.${key}.degree`)}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
