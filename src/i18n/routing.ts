import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['en', 'de', 'ua'],
  defaultLocale: 'en',
  localeCookie: {
    name: 'locale',
    maxAge: 60 * 60 * 24 * 365, //1 year
  },
  pathnames: {
    '/': '/',
  },
})

export type Locale = (typeof routing.locales)[number]
