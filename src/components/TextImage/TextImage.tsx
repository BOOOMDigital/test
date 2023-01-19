import { BlockProps } from '@/hooks/useBlockData'
import { COLORS } from '@/lib/consts'
import Image from 'next/image'
import ArrowButton from '../Buttons/ArrowButton'

const TextImage = ({ content, medias, children }: BlockProps) => {
    const directionClasses = content?.image_right
        ? 'flex-row-reverse justify-end'
        : 'flex-row justify-end'

    const locationClasses = content?.image_right ? 'right-0' : 'left-0'
    return (
        <section
            style={{
                backgroundColor: content?.color || '#fff',
            }}
            className={`relative mx-auto max-w-[2200px] h-max pt-[348px] pb-12 md:pb-0 md:pt-0`}>
            <div className="hidden md:h-small md:h-medium md:h-large" />
            <div className={`container flex gap-12 ${directionClasses}`}>
                <div className={`hidden md:block h-${content?.image_height}`} />
                <div
                    className={`absolute inset-y-0 w-full h-[300px] md:w-[44%] md:h-${content?.image_height} ${locationClasses}`}>
                    {medias && (
                        <Image
                            className="object-cover"
                            src={medias[0]?.url}
                            alt={medias[0]?.alt}
                            priority
                            fill
                        />
                    )}
                </div>
                <div className="w-full md:w-[calc(56%_-_4rem)]">
                    {content?.text && (
                        <div
                            className="mb-8"
                            dangerouslySetInnerHTML={{ __html: content?.text }}
                        />
                    )}
                    <div className="flex gap-3 flex-wrap">
                        {children?.button &&
                            children?.button?.map((item, index) => {
                                const { content } = item

                                const textColor =
                                    content?.color === '#ffffff'
                                        ? COLORS.grey
                                        : '#fff'

                                const borderColor =
                                    content?.color === '#ffffff'
                                        ? COLORS.grey
                                        : content?.color

                                return (
                                    <ArrowButton
                                        key={index}
                                        textColor={textColor}
                                        link={content?.link_url}
                                        className="gap-5 rounded-md border"
                                        style={{
                                            backgroundColor: content?.color,
                                            borderColor,
                                        }}>
                                        {content?.link_text}
                                    </ArrowButton>
                                )
                            })}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default TextImage
