import Image from 'next/image'
import {useTranslations} from 'next-intl'
import {richTags} from '@/utils/rich'
import {Eyebrow} from './Eyebrow'

export function Hero() {
    const t = useTranslations('hero')

    return (
        <header className="grid grid-cols-1 gap-5 md:grid-cols-[1fr_62mm] md:items-start md:gap-8">
            <div>
                <Eyebrow>{t('eyebrow')}</Eyebrow>
                <h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                    {t.rich('name', richTags)}
                </h1>
                <div className="mt-4 text-lg font-medium text-mute">
                    {t('role')}
                </div>

                <p className="mt-5 max-w-[56ch] text-mute">
                    {t.rich('intro', richTags)}
                </p>
            </div>
            <div className="max-w-xs md:max-w-none">
                <div
                    className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-line bg-bg-soft md:aspect-[3/3.5]">
                    <Image
                        src="/photo.jpg"
                        alt="Maksym Kravchenko"
                        fill
                        priority
                        sizes="(max-width: 768px) 300px, 700px"
                        className="object-cover"
                    />
                </div>
            </div>
        </header>
    )
}
