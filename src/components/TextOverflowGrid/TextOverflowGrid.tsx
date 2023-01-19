import { BlockProps } from '@/hooks/useBlockData'
import Image from 'next/image'

const TextOverflowGrid = ({ content, children }: BlockProps) => {
    return (
        <section className="-mt-[40px] lg:-mt-[140px] relative pb-12">
            <div className="absolute inset-0 bg-highlight -z-10 top-[40px] lg:top-[140px]" />
            <div className="container ">
                <div className="bg-white rounded py-12 px-6 sm:px-24 grid grid-cols-4 gap-4">
                    {content?.text_1 && (
                        <div
                            className=" leading-[30px] [&>p]:mb-0 [&>h2:first-of-type]:mb-11  "
                            dangerouslySetInnerHTML={{ __html: content.text_1 }}
                        />
                    )}
                    {content?.text_2 && (
                        <div
                            className=" leading-[30px] [&>p]:mb-0 [&>h2:first-of-type]:mb-11  "
                            dangerouslySetInnerHTML={{ __html: content.text_2 }}
                        />
                    )}
                    {content?.text_3 && (
                        <div
                            className=" leading-[30px] [&>p]:mb-0 [&>h2:first-of-type]:mb-11  "
                            dangerouslySetInnerHTML={{ __html: content.text_3 }}
                        />
                    )}
                    {content?.text_4 && (
                        <div
                            className=" leading-[30px] [&>p]:mb-0 [&>h2:first-of-type]:mb-11  "
                            dangerouslySetInnerHTML={{ __html: content.text_4 }}
                        />
                    )}
                </div>
            </div>
        </section>
    )
}

export default TextOverflowGrid
