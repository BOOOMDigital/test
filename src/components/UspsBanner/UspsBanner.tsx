import metaal from '@/assets/images/metaal.jpg'
import { BlockProps } from '@/hooks/useBlockData'
import Image from 'next/image'
import ArrowButton from '../Buttons/ArrowButton'
import CheckIcon from '../svgs/CheckIcon'

const UspsBanner = ({ content, medias, children }: BlockProps) => {
    return (
        <section
            className="py-12"
            style={{
                backgroundColor: content?.color || '#fff',
            }}>
            <div className="text-white relative mx-auto max-w-[2200px]">
                <div className="container flex justify-end pt-[268px] md:pt-0">
                    <div className="absolute inset-y-0 left-0 h-[300px] md:h-full w-full md:w-1/2">
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
                    <div className="bg-darktone  w-full md:w-1/2 pt-12 md:pt-20 px-8 md:px-14 pb-8 rounded-b sm:rounded-bl-none sm:rounded-r leading-[30px]">
                        {content?.text && (
                            <div
                                className="[&>h2]:text-[30px] md:[&>h2]:text-[35px] font-bold mb-10 md:mb-6"
                                dangerouslySetInnerHTML={{
                                    __html: content?.text,
                                }}
                            />
                        )}
                        {children?.input &&
                            children?.input?.map((item, index) => {
                                const { input } = item?.content
                                return (
                                    <div
                                        key={index}
                                        className="flex items-center mt-3.5">
                                        <CheckIcon />
                                        <p className="mb-0 ml-5">{input}</p>
                                    </div>
                                )
                            })}

                        <div className="w-full flex justify-end">
                            <div className="w-full md:w-[183px] mt-14">
                                <ArrowButton
                                    className="w-full border-[1px] rounded flex justify-between"
                                    textColor={'#FFF'}
                                    link={'/'}>
                                    Lees meer
                                </ArrowButton>
                            </div>
                        </div>

                        {/* <div className="border border-white rounded w-full md:w-[183px] ml-auto px-5 py-1.5 mt-14">
                        <a href="/">
                            <div className="flex justify-between items-center">
                                <p className="mb-0">Lees meer</p>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="8.357"
                                    height="13.885"
                                    viewBox="0 0 8.357 13.885">
                                    <path
                                        id="Path_2011"
                                        data-name="Path 2011"
                                        d="M1069.873,6479l5.529,5.529-5.529,5.528"
                                        transform="translate(-1068.458 -6477.586)"
                                        fill="none"
                                        stroke="#fff"
                                        strokeLinecap="round"
                                        strokeWidth="2"
                                    />
                                </svg>
                            </div>
                        </a>
                    </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default UspsBanner
