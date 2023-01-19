import { BlockProps } from '@/hooks/useBlockData'
import React from 'react'
import ArrowButton from '../Buttons/ArrowButton'
import BigW from '../svgs/BigW'

const TextBlockDark = ({ content }: BlockProps) => {
    return (
        <div className="bg-darktone py-[9rem] sm:py-[10rem] text-white">
            <div className="relative container flex">
                <div className="w-full lg:w-3/5 pr-0 md:pr-12">
                    {content?.label && (
                        <p className="text-[20px] mb-2 font-light">
                            {content.label}
                        </p>
                    )}
                    {content?.text && (
                        <div
                            dangerouslySetInnerHTML={{ __html: content.text }}
                            className="[&>h2]:text-[45px] [&>h2]:mb-10 [&>p]:font-light"
                        />
                    )}

                    {content?.link_url && (
                        <ArrowButton
                            link={content?.link_url}
                            textColor={'#000'}
                            className={
                                'py-3.5 gap-8 px-5 max-w-[200px] bg-highlight rounded-md mt-2 sm:mt-8'
                            }>
                            {content?.link_text}
                        </ArrowButton>
                    )}
                </div>
                <div className="w-2/5 hidden lg:flex items-center justify-end">
                    <BigW className="opacity-10 lg:opacity-60" />
                </div>
            </div>
        </div>
    )
}

export default TextBlockDark
