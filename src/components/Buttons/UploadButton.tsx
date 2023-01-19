import React from 'react'
import Link from '../presets/Link'
import UploadIcon from '../svgs/UploadIcon'

const UploadButton = ({ className, link, textColor, children }: any) => {
    return (
        <Link href={link}>
            <button
                style={{
                    color: textColor,
                }}
                className={`${className} shadow-lg`}>
                <span>{children}</span>
                <UploadIcon className="inline-block" />
            </button>
        </Link>
    )
}

export default UploadButton
