import React from 'react'

const ChevronRight = ({ className, chevronColor }: any) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8.357"
            height="13.885"
            viewBox="0 0 8.357 13.885"
            className={className}>
            <path
                id="Path_2011"
                data-name="Path 2011"
                d="M1069.873,6479l5.529,5.529-5.529,5.528"
                transform="translate(-1068.458 -6477.586)"
                fill="none"
                stroke={chevronColor ? chevronColor : '#000'}
                strokeLinecap="round"
                strokeWidth="2"
            />
        </svg>
    )
}

export default ChevronRight
