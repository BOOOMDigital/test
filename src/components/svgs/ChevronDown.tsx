import React from 'react'

const ArrowDown = ({ className, chevronColor }: any) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13.885"
            height="8.357"
            viewBox="0 0 13.885 8.357"
            className={className}>
            <path
                id="Path_2013"
                data-name="Path 2013"
                d="M1069.873,6479l5.529,5.529-5.529,5.528"
                transform="translate(6491.471 -1068.458) rotate(90)"
                fill="none"
                stroke={chevronColor ? chevronColor : '#000'}
                stroke-linecap="round"
                stroke-width="2"
            />
        </svg>
    )
}

export default ArrowDown
