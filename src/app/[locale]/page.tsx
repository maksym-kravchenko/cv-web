import { setRequestLocale } from 'next-intl/server'
import { Hero } from '@/components/Hero'
import { Contacts } from '@/components/Contacts'
import { ExperienceSection } from '@/components/ExperienceSection'
import { EducationSection } from '@/components/EducationSection'
import { SkillsSection } from '@/components/SkillsSection'
import { SoftAndLanguages } from '@/components/SoftAndLanguages'
import { LocaleSwitcher } from '@/components/LocaleSwitcher'

type PageProps = {
  params: Promise<{ locale: string }>
}

export default async function Home({ params }: PageProps) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <main className="mx-auto max-w-5xl px-5 py-8 md:my-5 md:px-10 md:py-15">
      <div className="mb-8 flex justify-end">
        <LocaleSwitcher />
      </div>
      <Hero />
      <Contacts />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <SoftAndLanguages />
    </main>
  )
}
