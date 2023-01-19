import companylogo from '@/assets/images/collaborationslogo.png'
import Link from '@/components/presets/Link'
import { BlockProps } from '@/hooks/useBlockData'
import Image from 'next/image'
import React from 'react'
import MediumW from '../svgs/MediumW'

const companies = [
    {
        logo: companylogo,
        website: '/',
    },
    {
        logo: companylogo,
        website: '/',
    },
    {
        logo: companylogo,
        website: '/',
    },
    {
        logo: companylogo,
        website: '/',
    },
]

const Collaborations = ({ content, medias }: BlockProps) => {
    return (
        <div className="container text-center flex flex-col items-center justify-center mb-16">
            <MediumW className="mb-9" />
            {content?.title && (
                <h2 className="text-md sm:text-[45px] text-center text-[#20303E] mb-20">
                    {content?.title}
                </h2>
            )}
            <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-8">
                {medias?.map((image, index) => {
                    const caption = image?.metadatas?.caption
                    return (
                        <Link
                            href={caption}
                            key={index}
                            className="relative w-full h-[70px]">
                            <Image
                                src={image?.url}
                                alt="Logo"
                                fill
                                priority
                                className="object-contain"
                            />
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Collaborations
