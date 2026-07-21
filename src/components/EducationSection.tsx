import { useTranslations } from 'next-intl'
import { GraduationCap, Award, SquareArrowOutUpRight } from 'lucide-react'
import { educationKeys, certificates } from '@/data/cv'
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
        {educationKeys.map((key, i) => {
          const certs = certificates[key]
          return (
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
                {certs?.length ? (
                  <ul className="mt-3 space-y-1.5">
                    {certs.map((cert) => {
                      const label = cert.label ? t(`certificates.${cert.label}`) : t('certificate')
                      return (
                        <li key={cert.file}>
                          <a
                            href={`/certificates/${cert.file}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={label}
                            aria-label={label}
                            className={cm(
                              'group flex items-center gap-2.5 rounded-lg border border-line-soft bg-bg px-2.5 py-2',
                              'cursor-pointer transition-all duration-200 ease-out hover:border-accent hover:bg-card hover:shadow-[0_1px_3px_rgba(20,20,20,0.06)]',
                            )}
                          >
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-accent-soft text-accent-strong">
                              <Award className="h-3.5 w-3.5" strokeWidth={2} />
                            </span>
                            <span className="min-w-0 flex-1 text-[13px] font-medium leading-snug text-fg">
                              {label}
                            </span>
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
                    })}
                  </ul>
                ) : null}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
