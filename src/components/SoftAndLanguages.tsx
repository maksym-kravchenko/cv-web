import { useTranslations } from 'next-intl'
import { Languages, UserRound } from 'lucide-react'
import { languageKeys } from '@/data/cv'
import { richTags } from '@/utils/rich'
import { SectionHeader } from './SectionHeader'
import { Pill } from './Pill'

export function SoftAndLanguages() {
  const t = useTranslations()
  const soft = t.raw('soft.items') as string[]

  return (
    <section className="mt-12">
      <div className="grid grid-cols-1 gap-9 md:grid-cols-2 md:items-start md:gap-11">
        <div>
          <SectionHeader icon={UserRound} eyebrow={t('soft.eyebrow')}>
            {t.rich('soft.title', richTags)}
          </SectionHeader>
          <div className="flex flex-wrap gap-1.5">
            {soft.map((skill) => (
              <Pill key={skill} className="border-transparent bg-accent-soft text-accent-ink">
                {skill}
              </Pill>
            ))}
          </div>
        </div>

        <div>
          <SectionHeader icon={Languages} eyebrow={t('languages.eyebrow')}>
            {t.rich('languages.title', richTags)}
          </SectionHeader>
          <div className="grid grid-cols-1 gap-2.5">
            {languageKeys.map((key) => (
              <div
                key={key}
                className="flex items-center justify-between gap-2.5 rounded-xl border border-line bg-card px-3.5 py-3"
              >
                <span className="text-[15px] font-semibold">{t(`languages.items.${key}.name`)}</span>
                <span className="whitespace-nowrap rounded-full bg-accent-soft px-2.5 py-1 font-mono text-[11px] text-accent-ink">
                  {t(`languages.items.${key}.level`)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
