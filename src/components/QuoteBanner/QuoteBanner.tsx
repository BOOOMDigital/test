import { BlockProps } from '@/hooks/useBlockData'
import { COLORS } from '@/lib/consts'
import Image from 'next/image'
import React from 'react'
import Link from '../presets/Link'

const QuoteBanner = ({ content, medias }: BlockProps) => {
    const isGrey = content?.color === '#57636E'

    return (
        <div
            className=" text-white w-full mb-12"
            style={{
                backgroundColor: content?.color || '#57636e',
            }}>
            <div className="container pt-32 sm:pt-28 pb-24 sm:pb-14 relative">
                {medias && (
                    <div className="rounded-full overflow-hidden w-[110px] h-[110px] md:w-[150px] md:h-[150px] xl:w-[189px] xl:h-[189px] object-cover absolute right-2 -top-[45px] sm:-top-[65px] xl:-right-[24px] ">
                        <Image
                            src={medias[0]?.url}
                            alt={medias[0]?.alt}
                            priority
                            fill
                            className="object-cover"
                        />
                    </div>
                )}
                <div className="lg:px-inner-container sm:mr-[6rem]">
                    <div className="absolute -top-[44px]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="61.4"
                            height="53.6"
                            viewBox="0 0 61.4 53.6">
                            <path
                                id="Path_2173"
                                data-name="Path 2173"
                                d="M23.9,111.4c6.2,0,10.6-4.2,10.6-11,0-6.6-5.2-10.2-10.6-10.2a5.537,5.537,0,0,0-1.8.2c0-11.2,5-18.2,15.2-24.8l-4.8-7.8c-13.8,8-21.2,19.6-21.2,35.6C11.3,105,15.9,111.4,23.9,111.4Zm35.4,0c6.2,0,10.6-4.2,10.6-11,0-6.6-5.2-10.2-10.6-10.2a5.537,5.537,0,0,0-1.8.2c0-11.2,5-18.2,15.2-24.8l-4.8-7.8c-13.8,8-21.2,19.6-21.2,35.6C46.7,105,51.3,111.4,59.3,111.4Z"
                                transform="translate(-11.3 -57.8)"
                                fill={isGrey ? COLORS.orange : COLORS.grey}
                            />
                        </svg>
                    </div>
                    {content?.quote && (
                        <h3 className="font-bold">{content?.quote}</h3>
                    )}
                    {content?.name && (
                        <p className="font-bold mb-0 mt-12">{content?.name}</p>
                    )}
                    {content?.role && <p className="mb-0">{content?.role}</p>}
                </div>
                {content?.link && (
                    <Link
                        href={content?.link}
                        className="absolute right-4 bottom-8 rounded-full ml-auto bg-white w-[53px] h-[53px] flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="13.348"
                            height="19.129"
                            viewBox="0 0 13.348 19.129">
                            <path
                                id="Path_2172"
                                d="M-9861.841,7950.23l10.385,8.734-9.01,7.578"
                                transform="translate(9863.25 -7948.821)"
                                fill="none"
                                stroke={isGrey ? COLORS.orange : content?.color}
                                strokeLinecap="round"
                                strokeWidth="2"
                            />
                        </svg>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default QuoteBanner
