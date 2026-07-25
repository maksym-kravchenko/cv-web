import { useTranslations } from 'next-intl'
import pkg from '../../package.json'

const APP_VERSION = `v${pkg.version}`

export function Footer() {
  const t = useTranslations('footer')
  const year = new Date().getFullYear()

  return (
    <footer className="mt-16 border-t border-line pt-6">
      <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
        <p className="text-[13px] text-sub">
          © {year}{' '}
          <a
            href="https://kravix.ch"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-mute transition-colors hover:text-accent-strong"
          >
            Kravix Solutions
          </a>
          . {t('rights')}
          <span> {APP_VERSION}</span>
        </p>
        <nav className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.12em] text-sub">
          <a
            href="https://kravix.ch/imprint"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-accent-strong"
          >
            {t('imprint')}
          </a>
          <a
            href="https://kravix.ch/privacy"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-accent-strong"
          >
            {t('privacy')}
          </a>
        </nav>
      </div>
    </footer>
  )
}
