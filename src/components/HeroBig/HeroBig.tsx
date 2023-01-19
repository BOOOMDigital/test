import { BlockProps } from '@/hooks/useBlockData'
import { COLORS, fadeInLeft, stagger } from '@/lib/consts'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import logoblauw from '../../../public/wilblauw.png'
import logogroen from '../../../public/wilgroen.png'
import logo_oranje from '../../../public/wiloranje.png'
import HeroCard from './HeroCard'

const placeholderCards = [
    {
        card: {
            image: logoblauw,
            buttonText: 'Ik zoek',
            buttonTextBold: 'werk',
            url: '/werk',
            buttonBGcolor: 'bg-blue',
        },
    },
    {
        card: {
            image: logogroen,
            buttonText: 'Ik zoek',
            buttonTextBold: 'personeel',
            url: '/personeel',
            buttonBGcolor: 'bg-green',
        },
    },
    {
        card: {
            image: logo_oranje,
            buttonText: 'Ik zoek',
            buttonTextBold: 'bouwbanen',
            url: '/bouwbanen',
            buttonBGcolor: 'bg-orange',
        },
    },
]

const HeroBig = ({ content, children, medias }: BlockProps) => {
    const [playVideo, setPlayVideo] = useState(false)

    return (
        <section
            className={`relative h-full lg:h-[730px] flex flex-col items-center justify-center`}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute -z-10 w-full h-full overflow-hidden">
                {content?.video_url && (
                    <iframe
                        src={`${content.video_url}&background=1${
                            playVideo ? '&autoplay=1&muted=1&loop=1' : ''
                        }`}
                        className="w-[100vw] h-[56.25vw] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 min-h-[250vh] lg:min-h-[100vh] min-w-[500vw] lg:min-w-[177.77vh]"
                    />
                )}
                {!playVideo && medias && (
                    <Image
                        src={medias[0].url}
                        alt={medias[0].alt}
                        fill
                        priority
                        className="object-cover"
                    />
                )}
            </motion.div>
            <div
                className="w-full h-full lg:absolute inset-0 z-10 flex items-start justify-start"
                onClick={() => content?.video_url && setPlayVideo(!playVideo)}>
                <div className="container flex pt-[2rem] lg:pt-[168px] z-10 pointer-events-none">
                    <div className="text-white max-w-[225px] md:max-w-[500px] pointer-events-none">
                        {content?.label && (
                            <p className="text-[20px] mb-2 font-semibold">
                                {content.label}
                            </p>
                        )}
                        {content?.title && (
                            <h1 className="mb-6 pointer-events-none">
                                {content.title}
                            </h1>
                        )}
                    </div>
                </div>
            </div>

            {content?.video_url && (
                <svg
                    onClick={() => setPlayVideo(!playVideo)}
                    id="playButton"
                    className={`z-20 ${
                        !playVideo ? 'opacity-60' : 'opacity-0'
                    } scale-75 md:scale-100 w-full flex items-center justify-center`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="77.5"
                    height="89.041"
                    viewBox="0 0 77.5 89.041">
                    <path
                        id="Polygon_2"
                        data-name="Polygon 2"
                        d="M44.52,0l44.52,77.5H0Z"
                        transform="translate(77.5) rotate(90)"
                        fill="#fff"
                        opacity="0.61"
                    />
                </svg>
            )}

            <div className="h-auto lg:absolute -mb-20 lg:-mb-0 -bottom-20 w-full z-10 container">
                {content?.blocks_label && (
                    <div className="text-[20px] pb-7 font-bold text-white">
                        {content?.blocks_label}
                    </div>
                )}
                <motion.div
                    variants={stagger}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {children?.['hero-card'] &&
                        children?.['hero-card']?.map((item, index) => {
                            const { link_text, link_url, color } = item?.content
                            const imageUrl = item?.medias
                                ? item?.medias[0]?.url
                                : null

                            return (
                                <HeroCard
                                    key={index}
                                    image={imageUrl}
                                    text={link_text}
                                    link={link_url}
                                    className={'max-w-[385px]'}
                                    buttonBGcolor={color}
                                />
                            )
                        })}
                </motion.div>
            </div>
        </section>
    )
}

export default HeroBig
