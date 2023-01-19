import { BlockProps } from '@/hooks/useBlockData'
import { COLORS } from '@/lib/consts'
import Image from 'next/image'
import ArrowButton from '../Buttons/ArrowButton'

const TextImageColored = ({ content, medias }: BlockProps) => {
    return (
        <section className="py-24">
            <div className="relative pt-[252px] lg:pt-0 ">
                {medias && (
                    <div className="absolute right-0 top-0 bottom-0 -z-10 w-full h-[300px] lg:h-full lg:w-[calc((100%_-_992px)_/_2_+_(992px_*_.45))] xl:w-[calc((100%_-_1193px)_/_2_+_(1193px_*_.45))]">
                        <Image
                            className="object-cover"
                            src={medias[0]?.url}
                            alt={medias[0]?.alt}
                            priority
                            fill
                        />
                    </div>
                )}
                <div className="container">
                    <div
                        className="w-full lg:w-[55%] p-8 lg:p-16"
                        style={{
                            backgroundColor: content?.color || COLORS.orange,
                        }}>
                        {content?.text && (
                            <div
                                className="mb-8 text-white"
                                dangerouslySetInnerHTML={{
                                    __html: content?.text,
                                }}
                            />
                        )}
                        {content?.link_url && (
                            <div className="flex justify-end">
                                <ArrowButton
                                    link={content?.link_url}
                                    className="gap-8 bg-darktone rounded-md">
                                    {content?.link_text}
                                </ArrowButton>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default TextImageColored
