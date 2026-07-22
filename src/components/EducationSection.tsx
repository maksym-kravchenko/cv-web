import type { ComponentType } from 'react'
import { useTranslations } from 'next-intl'
import { GraduationCap, Trophy, Languages, SquareArrowOutUpRight } from 'lucide-react'
import type { LucideProps } from 'lucide-react'
import { educationKeys, certificates, certificateGroupKeys } from '@/data/cv'
import type { Certificate, CertificateGroup } from '@/data/cv'
import { richTags } from '@/utils/rich'
import { Eyebrow } from './Eyebrow'
import { SectionHeader } from './SectionHeader'

const groupIcons: Record<CertificateGroup, ComponentType<LucideProps>> = {
  competitions: Trophy,
  languages: Languages,
}

function CertificateRow({
  cert,
  Icon,
  title,
  subtitle,
  highlight,
}: {
  cert: Certificate
  Icon: ComponentType<LucideProps>
  title: string
  subtitle?: string
  highlight?: string
}) {
  return (
    <li className="last:rounded-b-xl first:rounded-t-xl overflow-hidden">
      <a
        href={`/certificates/${cert.file}`}
        target="_blank"
        rel="noopener noreferrer"
        title={title}
        aria-label={title}
        className="group flex items-center gap-3 ps-3 pe-5 py-2.5  transition-colors duration-200 hover:bg-bg"
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent-strong transition-colors duration-200 group-hover:bg-accent group-hover:text-white">
          <Icon className="h-4.5 w-4.5" strokeWidth={2} />
        </span>

        <span className="min-w-0 flex-1">
          <span className="block text-sm font-semibold leading-snug text-fg">{title}</span>
          {subtitle || highlight ? (
            <span className="mt-0.5 block text-[12.5px] leading-snug text-mute">
              {subtitle}
              {highlight ? (
                <>
                  {subtitle ? ' · ' : ''}
                  <span className="font-medium text-accent-strong">{highlight}</span>
                </>
              ) : null}
            </span>
          ) : null}
        </span>

        {cert.date ? (
          <span className="shrink-0 font-mono text-xs text-sub">{cert.date}</span>
        ) : null}

        {cert.locale ? (
            <span className="shrink-0 rounded-full border border-line bg-card px-2 py-1 font-mono text-[10px] font-semibold uppercase leading-none tracking-wide text-sub">
                              {cert.locale}
                            </span>
        ) : null}
        <SquareArrowOutUpRight
            className="h-3.5 w-3.5 shrink-0 text-mute transition-colors group-hover:text-accent-strong"
            strokeWidth={2}
        />
      </a>
    </li>
  )
}

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
            className={
              i > 0
                ? 'grid grid-cols-1 items-baseline gap-1.5 border-t border-line-soft py-3.5 md:grid-cols-[30mm_1fr] md:gap-10'
                : 'grid grid-cols-1 items-baseline gap-1.5 py-3.5 md:grid-cols-[30mm_1fr] md:gap-10'
            }
          >
            <div className="font-mono text-xs text-sub">{t(`items.${key}.when`)}</div>
            <div>
              <div className="text-[15px] font-semibold">{t(`items.${key}.school`)}</div>
              <div className="mt-0.5 text-[13px] text-mute">{t(`items.${key}.degree`)}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-2xl border border-line bg-card px-5.5 py-4 shadow-[0_1px_2px_rgba(20,20,20,0.03)]">
        <Eyebrow>{t('certificatesTitle')}</Eyebrow>
        <div className="mt-4 space-y-5">
          {certificateGroupKeys.map((group) => {
            const groupCerts = certificates.filter((cert) => cert.group === group)
            if (!groupCerts.length) return null
            const Icon = groupIcons[group]
            return (
              <div key={group}>
                <div className="mb-1 font-mono text-[11px] uppercase tracking-[0.15em] text-sub">
                  {t(`certificateGroups.${group}`)}
                </div>
                <ul className="divide-y divide-line-soft">
                  {groupCerts.map((cert) => {
                    const base = cert.label ? `certificates.${cert.label}` : null
                    return (
                      <CertificateRow
                        key={cert.file}
                        cert={cert}
                        Icon={Icon}
                        title={base ? t(`${base}.title`) : t('certificate')}
                        subtitle={base && t.has(`${base}.subtitle`) ? t(`${base}.subtitle`) : undefined}
                        highlight={base && t.has(`${base}.highlight`) ? t(`${base}.highlight`) : undefined}
                      />
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
