import WILwerkenBanner from '@/assets/images/metaal.jpg'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

//Components
import ArrowButton from '@/components/Buttons/ArrowButton'
import { BlockProps } from '@/hooks/useBlockData'
import { COLORS, fadeInLeft } from '@/lib/consts'

const HeroSmall = ({ content, medias, children }: BlockProps) => {
    const color = content?.color || COLORS.grey

    return (
        <section className="heroSmall relative h-auto lg:h-[619px] flex items-end overflow-hidden py-20 lg:py-0">
            <div className="absolute inset-0 -z-10">
                <motion.div
                    className="absolute inset-0 "
                    style={{
                        backgroundColor: color,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.75 }}
                />
                {medias && (
                    <motion.div
                        className="absolute inset-0 -z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}>
                        <Image
                            src={medias[0].url}
                            alt={medias[0].alt}
                            fill
                            sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
                            priority
                            className="object-cover object-top"
                        />
                    </motion.div>
                )}
            </div>

            <div className="container flex flex-col gap-12 lg:flex-row lg:justify-between lg:items-end lg:pb-[214px]">
                {/* <div className="text-white z-[2] pr-6 sm:pr-12 xl:pr-28">
                    <p className="text-[20px] mb-2 font-semibold">Welkom bij</p>
                    <h1 className="mb-6">WIL werken</h1>
                    <p className="font-semibold">
                        Wij bieden op het gebied van dienstverlening maatwerk
                        voor zowel de werkzoekende als opdrachtgever. Zo zijn
                        wij er als WIL Groep van overtuigd dat we met onze
                        aanpak voortijdige uitval van mensen voorkomen.
                    </p>
                </div> */}
                {content?.text && (
                    <div
                        className="text-white z-[2] pr-6 sm:pr-12 xl:pr-28  [&>p:first-of-type]:text-[20px] [&>p:first-of-type]:mb-2 [&>p:first-of-type]:font-normal [&>h1]:mb-6 [&>p]:font-semibold "
                        dangerouslySetInnerHTML={{ __html: content?.text }}
                    />
                )}

                <motion.div
                    variants={fadeInLeft}
                    className="w-[250px] max-w-[90%] sm:w-[380px] pl-0 pr-7 lg:pr-0 lg:pl-7 pt-8 pb-10 shrink-0 relative">
                    <div className="bg-white absolute inset-y-0 right-0 lg:left-0 w-screen h-full -z-10 rounded-lg overflow-hidden" />
                    <p className="text-[20px] mb-4">Ga snel naar</p>
                    <div className="flex flex-col gap-4 text-white">
                        {children?.button &&
                            children?.button?.map((button, index) => {
                                const { content } = button
                                return (
                                    <ArrowButton
                                        textColor={'#FFF'}
                                        className={
                                            'w-full px-5 py-3.5 rounded-lg'
                                        }
                                        style={{
                                            backgroundColor: content?.color,
                                        }}
                                        key={index}
                                        link={content?.link_url}>
                                        <div
                                            className="flex gap-1"
                                            dangerouslySetInnerHTML={{
                                                __html: content?.link_text,
                                            }}
                                        />
                                    </ArrowButton>
                                )
                            })}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default HeroSmall
