import React from 'react'
import Link from '../presets/Link'
import ChevronRight from '../svgs/ChevronRight'

const ArrowButton = ({
    className,
    link,
    noLink,
    textColor,
    children,
    style,
    onClick,
    ...rest
}: any) => {
    return (
        <>
            {noLink ? (
                <button
                    className={`${className} px-5 py-3.5 flex items-center justify-between shadow-lg`}
                    style={{
                        color: textColor || '#fff',
                        ...style,
                    }}
                    onClick={onClick}
                    {...rest}>
                    <span> {children}</span>
                    <ChevronRight chevronColor={textColor || '#fff'} />
                </button>
            ) : (
                <Link href={link} {...rest}>
                    <button
                        className={`${className} px-5 py-3.5 flex items-center justify-between shadow-lg`}
                        style={{
                            color: textColor || '#fff',
                            ...style,
                        }}>
                        <span> {children}</span>
                        <ChevronRight chevronColor={textColor || '#fff'} />
                    </button>
                </Link>
            )}
        </>
    )
}

export default ArrowButton
