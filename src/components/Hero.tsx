'use client'

import Image from 'next/image'
import {useState} from 'react'
import type {Swiper as SwiperClass} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'
import {A11y, Autoplay} from 'swiper/modules'
import {ChevronLeft, ChevronRight} from 'lucide-react'
import 'swiper/css'

import {useTranslations} from 'next-intl'
import {richTags} from '@/utils/rich'
import cm from '@/utils/cm'
import {Eyebrow} from './Eyebrow'

const photos = ['/photo.jpg', '/photo1.jpg', '/photo2.jpg']

export function Hero() {
    const t = useTranslations('hero')
    const [swiper, setSwiper] = useState<SwiperClass | null>(null)
    const [activeIndex, setActiveIndex] = useState(0)

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
            <div className="sm:max-w-xs md:max-w-none">
                <Swiper
                    modules={[Autoplay, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    loop
                    autoplay={{delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true}}
                    onSwiper={setSwiper}
                    onSlideChange={(s) => setActiveIndex(s.realIndex)}
                >
                    {photos.map((src, i) => (
                        <SwiperSlide key={src}>
                            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-line bg-bg-soft md:aspect-[3/3.5]">
                                <Image
                                    src={src}
                                    alt={`Maksym Kravchenko / ${i}`}
                                    fill
                                    priority
                                    sizes="(max-width: 768px) 300px, 700px"
                                    className="object-cover"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="mt-4 flex items-center justify-between print:hidden">
                    <button
                        type="button"
                        aria-label="Previous photo"
                        onClick={() => swiper?.slidePrev()}
                        className={cm("flex size-8 items-center justify-center rounded-full border"
                            , "border-line bg-card text-fg transition-colors"
                            , "hover:border-accent hover:bg-accent-soft hover:text-accent-strong"
                            , "active:border-accent active:bg-accent-soft active:text-accent-strong")}
                    >
                        <ChevronLeft className="size-4" strokeWidth={2.25} />
                    </button>

                    <div className="flex items-center gap-1.5">
                        {photos.map((src, i) => (
                            <button
                                key={src}
                                type="button"
                                aria-label={`Go to photo ${i + 1}`}
                                aria-current={activeIndex === i}
                                onClick={() => swiper?.slideToLoop(i)}
                                className={cm(
                                    'h-1.5 rounded-full transition-all duration-300',
                                    activeIndex === i ? 'w-5 bg-accent' : 'w-1.5 bg-line hover:bg-sub',
                                )}
                            />
                        ))}
                    </div>

                    <button
                        type="button"
                        aria-label="Next photo"
                        onClick={() => swiper?.slideNext()}
                        className={cm("flex size-8 items-center justify-center rounded-full border"
                            , "border-line bg-card text-fg transition-colors"
                            , "hover:border-accent hover:bg-accent-soft hover:text-accent-strong"
                            , "active:border-accent active:bg-accent-soft active:text-accent-strong")}
                    >
                        <ChevronRight className="size-4" strokeWidth={2.25} />
                    </button>
                </div>
            </div>
        </header>
    )
}
