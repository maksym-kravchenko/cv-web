import { useTranslations } from 'next-intl'
import { CodeXml } from 'lucide-react'
import { skillGroups } from '@/data/cv'
import { richTags } from '@/utils/rich'
import { SectionHeader } from './SectionHeader'
import { TechPills } from './Pill'

export function SkillsSection() {
  const t = useTranslations('skills')

  return (
    <section className="mt-12">
      <SectionHeader icon={CodeXml} eyebrow={t('eyebrow')}>
        {t.rich('title', richTags)}
      </SectionHeader>
      <div className="grid gap-3">
        {skillGroups.map((group) => (
          <div key={group.key} className="grid grid-cols-1 items-start gap-1.5 md:grid-cols-[34mm_1fr] md:gap-8">
            <div className="pt-1 font-mono text-xs uppercase tracking-[0.08em] text-mute">
              {t(`categories.${group.key}`)}
            </div>
            <TechPills tech={group.tech} />
          </div>
        ))}
      </div>
    </section>
  )
}
