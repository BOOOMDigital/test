import { BlockProps } from '@/hooks/useBlockData'
import Image from 'next/image'

const TextLogos = ({ content, medias }: BlockProps) => {
    return (
        <section
            className="py-12"
            style={{
                backgroundColor: content?.color || '#fff',
            }}>
            <div className="container lg:px-inner-container">
                {content?.text && (
                    <div
                        className="max-w-[890px] mb-12"
                        dangerouslySetInnerHTML={{ __html: content?.text }}
                    />
                )}
            </div>
            {medias && (
                <div className="container grid grid-cols-4 gap-6">
                    {medias.map((media, index) => (
                        <div className="relative " key={index}>
                            <Image
                                src={media?.url}
                                alt={media.alt}
                                width={media.width}
                                height={media.height}
                                className="object-contain h-auto w-full max-h-[100px]"
                            />
                        </div>
                    ))}
                </div>
            )}
        </section>
    )
}
export default TextLogos
