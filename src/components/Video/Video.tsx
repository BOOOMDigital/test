import { BlockProps } from '@/hooks/useBlockData'
import { COLORS } from '@/lib/consts'

const Video = ({ content }: BlockProps) => {
    return (
        <section className="bg-highlight py-20">
            <div className="container">
                {content?.label && (
                    <div className="pl-inner-container">
                        <p
                            style={{
                                backgroundColor: content?.color || COLORS.grey,
                            }}
                            className=" block w-max m-0 py-4 px-6 text-white rounded-t-md">
                            {content.label}
                        </p>
                    </div>
                )}
                {content?.url && (
                    <iframe
                        width="100%"
                        className="aspect-video border-none"
                        src={content.url}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
                )}
            </div>
        </section>
    )
}
export default Video
