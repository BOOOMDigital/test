import ArrowButton from '@/components/Buttons/ArrowButton'
import { COLORS, fadeInLeft, fadeInUp } from '@/lib/consts'
import { motion } from 'framer-motion'
import Image, { ImageProps } from 'next/image'
import { LinkProps } from 'next/link'
import React from 'react'
import logoblauw from '../../../public/wilblauw.png'
interface HeroCardProps {
    image: any
    text: string
    className: string
    link: string
    // link: LinkProps;
    buttonBGcolor: string
}

const HeroCard = ({
    image,
    text,
    className,
    link,
    buttonBGcolor,
}: HeroCardProps) => {
    return (
        <motion.div
            variants={fadeInUp}
            className={`${className} flex flex-col gap-6 lg:gap-12 px-4 sm:px-7 pt-7 sm:pt-12 pb-7 sm:pb-8 bg-white rounded-lg`}>
            <div className="relative w-full h-[50px] sm:h-[68px]">
                {image && (
                    <Image
                        src={image}
                        alt={'logo'}
                        fill
                        priority
                        sizes="(max-width: 768px) 75vw,
                    (max-width: 1200px) 50vw,
                    33vw"
                        className="object-contain object-left"
                    />
                )}
            </div>

            <ArrowButton
                className={`w-full px-3 sm:px-5 py-2.5 sm:py-3.5 text-white rounded-lg`}
                link={link}
                textColor={'#FFF'}
                style={{
                    backgroundColor: buttonBGcolor,
                }}>
                <div className="text flex gap-1">
                    <span dangerouslySetInnerHTML={{ __html: text }} />
                </div>
            </ArrowButton>
        </motion.div>
    )
}

export default HeroCard
