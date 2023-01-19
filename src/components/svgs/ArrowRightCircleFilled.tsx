import React from 'react'

interface ArrowRightCircleFilledProps {
    circleColor: string
}

const ArrowRightCircleFilled = ({
    circleColor,
}: ArrowRightCircleFilledProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34.708"
            height="34.706"
            viewBox="0 0 34.708 34.706">
            <path
                id="iconmonstr-arrow-right-circle-filled"
                d="M19.363,2A17.353,17.353,0,1,0,36.717,19.354,17.362,17.362,0,0,0,19.363,2Zm2.644,10.779s2.607,2.612,5.65,5.657a1.3,1.3,0,0,1,0,1.842c-3.043,3.044-5.648,5.655-5.648,5.655a1.285,1.285,0,0,1-.913.377,1.3,1.3,0,0,1-.927-2.218L23.6,20.659H11.983a1.3,1.3,0,0,1,0-2.6H23.6l-3.433-3.435a1.292,1.292,0,0,1,.01-1.829,1.308,1.308,0,0,1,.92-.385,1.281,1.281,0,0,1,.91.373Z"
                transform="translate(-2.009 -2)"
                fill={`${circleColor ? circleColor : '#57636e'}`}
            />
        </svg>
    )
}

export default ArrowRightCircleFilled
