import { BlockProps } from '@/hooks/useBlockData'

const Spacer = ({ content }: BlockProps) => {
    if (!content?.height) return null
    return (
        <div
            className="spacer"
            style={{
                height: content.height + 'px',
                backgroundColor: content?.color || 'transparent',
            }}
        />
    )
}
export default Spacer
