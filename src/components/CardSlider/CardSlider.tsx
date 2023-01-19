import jeanne from '@/assets/images/jeanne.jpg'
import man from '@/assets/images/man1.jpg'
import vrouw1 from '@/assets/images/vrouw1.jpg'
import vrouw2 from '@/assets/images/vrouw2.jpg'
import Image from 'next/image'
import Link from '../presets/Link'
import ArrowLeft from '../svgs/ArrowLeft'
import ArrowRight from '../svgs/ArrowRight'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import { BlockProps } from '@/hooks/useBlockData'
import { useCallback, useRef } from 'react'
import 'swiper/css'
import ArrowRightCircleFilled from '../svgs/ArrowRightCircleFilled'
import SmallW from '../svgs/SmallW'

const placeholderCards = [
    {
        card: {
            image: jeanne,
            fullName: 'Jeanne van de Klok',
            cardDescription:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
            title: 'WIL groep',
            url: '/',
        },
    },
    {
        card: {
            image: man,
            fullName: 'Naam en Achternaam',
            cardDescription:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
            title: 'WIL groep',
            url: '/',
        },
    },
    {
        card: {
            image: vrouw1,
            fullName: 'Naam en Achternaam',
            cardDescription:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
            title: 'WIL groep',
            url: '/',
        },
    },
    {
        card: {
            image: vrouw2,
            fullName: 'Naam en Achternaam',
            cardDescription:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
            title: 'WIL groep',
            url: '/',
        },
    },
    {
        card: {
            image: vrouw2,
            fullName: 'Naam en Achternaam',
            cardDescription:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
            title: 'WIL groep',
            url: '/',
        },
    },
    {
        card: {
            image: vrouw2,
            fullName: 'Naam en Achternaam',
            cardDescription:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
            title: 'WIL groep',
            url: '/',
        },
    },
]

const CardSlider = ({ content, children }: BlockProps) => {
    const sliderRef = useRef(null) as any

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return
        sliderRef.current.swiper.slidePrev()
    }, [])

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return
        sliderRef.current.swiper.slideNext()
    }, [])

    return (
        <section className="py-12">
            <div className="container">
                {content?.title && (
                    <p className="text-[20px] font-light">{content?.title}</p>
                )}
                <Swiper
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 50,
                        },
                        525: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1225: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                    }}
                    // onInit={(core: any) => {
                    //     sliderRef.current = core.el
                    // }}
                    className="mb-10 items-stretch">
                    {children?.['card-slider-item']?.map((item, index) => {
                        const image = item?.medias ? item?.medias[0] : null
                        const { name, description, link } = item?.content
                        return (
                            <SwiperSlide key={index} className="!h-auto">
                                <div className="h-full bg-highlight rounded-md overflow-hidden">
                                    <div className="relative aspect-square w-full">
                                        <SmallW className="absolute z-10 right-4 top-5" />

                                        {image && (
                                            <Image
                                                src={image?.url}
                                                alt={image?.alt}
                                                fill
                                                className="object-cover"
                                            />
                                        )}
                                    </div>
                                    <div className="px-7 pt-5 pb-8">
                                        {name && (
                                            <p className="text-[18px] font-bold">
                                                {name}
                                            </p>
                                        )}
                                        {description && (
                                            <p className="text-[12px] leading-6 pb-5">
                                                {description}
                                            </p>
                                        )}
                                        {link && (
                                            <div className="flex justify-end">
                                                <Link href={link}>
                                                    <ArrowRightCircleFilled
                                                        circleColor={''}
                                                    />
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                <div className="max-w-[400px] flex justify-between mx-auto px-6">
                    <ArrowLeft
                        onClick={() => handlePrev()}
                        className="cursor-pointer opacity-50 hover:opacity-100 transition duration-300"
                    />
                    <ArrowRight
                        onClick={() => handleNext()}
                        className="cursor-pointer opacity-50 hover:opacity-100 transition duration-300"
                    />
                </div>
            </div>
        </section>
    )
}

export default CardSlider
