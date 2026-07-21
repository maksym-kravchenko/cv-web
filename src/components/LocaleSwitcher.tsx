'use client'

import {useLocale, useTranslations} from 'next-intl'
import {usePathname, useRouter} from '@/i18n/navigation'
import {routing} from '@/i18n/routing'
import cm from '@/utils/cm'

const labels: Record<string, string> = {en: 'EN', de: 'DE', ua: 'UA'}

export function LocaleSwitcher() {
    const locale = useLocale()
    const router = useRouter()
    const pathname = usePathname()
    const t = useTranslations('localeSwitcher')

    return (
        <div
            role="group"
            aria-label={t('label')}
            className="box-border inline-flex h-9 items-stretch gap-0.5 rounded-full border border-line bg-card p-1"
        >
            {routing.locales.map((loc) => (
                <button
                    key={loc}
                    type="button"
                    onClick={() => router.replace(pathname, {locale: loc})}
                    aria-current={loc === locale}
                    className={cm(
                        'inline-flex min-w-8 items-center justify-center rounded-full px-3 font-mono text-xs font-semibold leading-none tracking-[0.08em] transition-colors disabled:cursor-default',
                        loc === locale
                            ? 'bg-accent text-accent-ink'
                            : 'text-sub hover:text-fg hover:bg-accent-soft',
                    )}
                >
                    {labels[loc]}
                </button>
            ))}
        </div>
    )
}
