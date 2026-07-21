import {useTranslations} from 'next-intl'
import {Briefcase, CalendarDays, SquareArrowOutUpRight} from 'lucide-react'
import {projects} from '@/data/cv'
import {richTags} from '@/utils/rich'
import {beatBucherStacks} from '@/data/cv'
import type {Stack} from '@/data/cv'
import {SectionHeader} from './SectionHeader'
import {StackBlock} from './StackBlock'
import cm from "@/utils/cm";

const teaserProjects: { title: string; desc: string; stacks: Stack[] }[] = [
    {
        title: 'Some Placeholder Project',
        desc: 'This is a placeholder project. So, if you can read this, you\'re most likely a bot or some curious developer who deleted my blur',
        stacks: [
            {labelKey: 'frontend', tech: ['react', 'typescript', 'tailwindcss']},
            {labelKey: 'backend', tech: ['dotnet', 'csharp', 'sqlserver', 'swagger']},
        ],
    },
    {
        title: 'Another Project',
        desc: 'One again: this is a placeholder project. So, please leave it be.',
        stacks: [
            {labelKey: 'frontend', tech: ['nextdotjs', 'react', 'tailwindcss']},
            {labelKey: 'backend', tech: ['laravel', 'php', 'mysql', 'docker']},
        ],
    },
]

function PeriodPill({period}: { period: string }) {
    return (
        <span
            className="inline-flex w-fit items-center gap-1.5 whitespace-nowrap rounded-full border border-[#bfe9f5] bg-accent-soft px-2.5 py-1 font-mono text-xs font-medium text-accent-ink">
      <CalendarDays className="h-4 w-4" strokeWidth={2}/>
            {period}
    </span>
    )
}

function JobHead({role, at, company, period}: { role: string; at: string; company: string; period: string }) {
    return (
        <div className="flex flex-col gap-1 md:flex-row md:flex-wrap md:items-baseline md:justify-between md:gap-3.5">
            <div className="leading-snug">
                <span className="text-lg font-bold">{role}</span> <span className="text-mute">{at}</span>{' '}
                <span className="text-sm font-semibold text-accent-strong">{company}</span>
            </div>
            <PeriodPill period={period}/>
        </div>
    )
}

function JobCard({children}: { children: React.ReactNode }) {
    return (
        <div
            className="mb-3.5 rounded-2xl border border-line bg-card px-5.5 py-5 shadow-[0_1px_2px_rgba(20,20,20,0.03)]">
            {children}
        </div>
    )
}

export function ExperienceSection() {
    const t = useTranslations('experience')
    const bullets = t.raw('beatBucher.bullets') as string[]

    return (
        <section className="mt-12">
            <SectionHeader icon={Briefcase} eyebrow={t('eyebrow')}>
                {t.rich('title', richTags)}
            </SectionHeader>

            <JobCard>
                <JobHead
                    role={t('beatBucher.role')}
                    at={t('at')}
                    company={t('beatBucher.company')}
                    period={t('beatBucher.period')}
                />
                <ul className="mt-2.5 space-y-1">
                    {bullets.map((bullet, i) => (
                        <li
                            key={i}
                            className="relative pl-4 text-mute before:absolute before:left-0.5 before:top-[7px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent before:content-['']"
                        >
                            {bullet}
                        </li>
                    ))}
                </ul>
                {beatBucherStacks.map((stack) => (
                    <StackBlock key={stack.labelKey} stack={stack}/>
                ))}
            </JobCard>

            <JobCard>
                <JobHead
                    role={t('kravix.role')}
                    at={t('at')}
                    company={t('kravix.company')}
                    period={t('kravix.period')}
                />
                <p className="mb-0.5 mt-2 text-mute">{t('kravix.lead')}</p>
                <div className="mt-3 grid gap-2.5">
                    {projects.map((project) => (
                        <div key={project.key}
                             className="rounded-xl border border-line-soft bg-bg px-4 py-3.5">
                            <span
                                className="text-sm font-semibold">{t(`kravix.projects.${project.key}.title`)}</span>
                            <p className="mb-2 mt-1.5 text-sm text-mute">
                                {t.rich(`kravix.projects.${project.key}.desc`, richTags)}
                            </p>
                            {project.stacks.map((stack, i) => (
                                <StackBlock key={stack.labelKey ?? i} stack={stack}/>
                            ))}
                        </div>
                    ))}
                </div>
                <div className="relative mt-2.5 overflow-hidden rounded-xl border border-line-soft">
                    <div aria-hidden className="pointer-events-none select-none space-y-2.5 blur-[4px]">
                        {teaserProjects.map((project, i) => (
                            <div key={i}
                                 className={cm("rounded-xl border border-line-soft bg-bg px-4 py-3.5", i > 0 && "hidden md:block")}>
                                <span className="text-sm font-semibold">{project.title}</span>
                                <p className="mb-2 mt-1.5 text-sm text-mute">{project.desc}</p>
                                {project.stacks.map((stack, j) => (
                                    <StackBlock key={j} stack={stack}/>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-b from-card/25 via-card/60 to-card/85 px-4 text-center">
                        <p className="text-base font-medium text-mute">{t.rich('kravix.more', richTags)}</p>
                        <a
                            href="https://kravix.ch"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cm("inline-flex items-center gap-2 rounded-xl border border-[#bfe9f5] bg-accent-soft px-4 py-2.5 text-sm font-medium"
                                , "cursor-pointer transition-all duration-400 ease-out hover:border-accent"
                                , "hover:bg-white hover:shadow-md")}
                        >
                            <span>{t('kravix.cta')}</span>
                            <SquareArrowOutUpRight className="h-4 w-4" />
                        </a>
                    </div>
                </div>
            </JobCard>
        </section>
    )
}
