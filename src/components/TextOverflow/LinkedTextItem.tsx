const LinkedTextItem = ({ text, last }: any) => {
    return (
        <div className="linked-text-item pb-8 pl-24 relative">
            <div
                className="[&>p:first-of-type]:mb-2 [&>p:first-of-type]:text-lg"
                dangerouslySetInnerHTML={{
                    __html: text,
                }}
            />
            <div className="absolute left-0 top-3 w-8 h-[5px] bg-orange rounded-r-full" />
            {!last && (
                <div className="absolute left-0 top-3 w-[5px] h-full bg-orange" />
            )}
        </div>
    )
}
export default LinkedTextItem
