import { BlockProps } from '@/hooks/useBlockData'

const Wysiwyg = ({ content }: BlockProps) => {
    return (
        <section
            style={{
                backgroundColor: content?.color || '#fff',
            }}>
            {content?.text && (
                <div
                    className={content?.container ? 'container' : ''}
                    dangerouslySetInnerHTML={{ __html: content.text }}
                />
            )}
        </section>
    )
}
export default Wysiwyg
