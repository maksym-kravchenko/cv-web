import { useTranslations } from 'next-intl'
import { contacts, type Contact } from '@/data/cv'

function ContactChip({ contact }: { contact: Contact }) {
  const t = useTranslations('contacts')
  const Icon = contact.icon
  const value = contact.value ?? t('locationValue')

  return (
    <div className="flex items-center gap-3 rounded-xl border border-line bg-card px-3 py-2.5">
      <span className="flex h-8.5 w-8.5 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent-strong">
        <Icon className="h-4 w-4" strokeWidth={2} />
      </span>
      <div className="flex min-w-0 flex-col">
        <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-sub">{t(contact.key)}</span>
        {contact.href ? (
          <a
            href={contact.href}
            target={contact.href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
            className="truncate text-[13px] font-medium text-fg transition-colors hover:text-accent-strong"
          >
            {value}
          </a>
        ) : (
          <span className="truncate text-[13px] font-medium text-fg">{value}</span>
        )}
      </div>
    </div>
  )
}

export function Contacts() {
  return (
    <div className="mt-14 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
      {contacts.map((contact) => (
        <ContactChip key={contact.key} contact={contact} />
      ))}
    </div>
  )
}
