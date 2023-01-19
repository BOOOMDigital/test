import { BlockProps } from '@/hooks/useBlockData'
import { fadeInUp } from '@/lib/consts'
import { motion } from 'framer-motion'
import Image from 'next/image'
import FaqItem from '../FaqItem/FaqItem'
import LinkedTextItem from './LinkedTextItem'

const TextOverflow = ({ content, children, medias }: BlockProps) => {
    return (
        <motion.section
            variants={fadeInUp}
            className="-mt-[40px] lg:-mt-[140px] relative pb-12">
            <div className="absolute inset-0 bg-highlight -z-10 top-[40px] lg:top-[140px]" />
            <div className="container ">
                <div className="bg-white rounded py-12 px-6 sm:px-24">
                    {content?.text && (
                        <div
                            className=" leading-[30px] [&>p:first-of-type]:mb-0 [&>h2:first-of-type]:mb-11  "
                            dangerouslySetInnerHTML={{ __html: content.text }}
                        />
                    )}
                    {children?.faq && (
                        <div className="faq py-12">
                            {children?.faq?.map((faq, index) => (
                                <FaqItem {...faq} key={index} />
                            ))}
                        </div>
                    )}

                    {children?.['linked-text'] && (
                        <div className="linked-text py-4">
                            {children?.['linked-text']?.map((text, index) => {
                                if (!text?.content?.text) return null
                                return (
                                    <LinkedTextItem
                                        text={text?.content?.text}
                                        last={
                                            index ===
                                            children?.['linked-text'].length - 1
                                        }
                                    />
                                )
                            })}
                        </div>
                    )}
                    {medias && (
                        <div className="">
                            <p className="px-8 text-xl">
                                {medias[0].metadatas?.caption}
                            </p>
                            <Image
                                src={medias[0].url}
                                alt={medias[0].alt}
                                width={medias[0].width}
                                height={medias[0].height}
                                className="object-contain w-full h-auto"
                            />
                        </div>
                    )}
                </div>
            </div>
        </motion.section>
    )
}

export default TextOverflow
