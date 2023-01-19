import { BlockProps } from '@/hooks/useBlockData'
import { COLORS } from '@/lib/consts'
import gsap from 'gsap'
import { useRef, useState } from 'react'

const FaqItem = (faq: BlockProps) => {
    const titleRef = useRef(null) as any
    const answerRef = useRef(null) as any

    const { answer, question } = faq?.content

    const activeTitleClasses = [
        '!bg-white',
        '!text-blue',
        '[&>svg]:rotate-180',
        '[&>svg]:invert-0',
        '[&>svg]:brightness-100',
    ]

    const toggle = () => {
        if (titleRef.current.classList.contains('!bg-white')) {
            gsap.to(answerRef.current, {
                duration: 0.5,
                maxHeight: 0,
                ease: 'power3.out',
            })
            titleRef.current.classList.remove(...activeTitleClasses)

            return
        }

        gsap.to(answerRef.current, {
            duration: 0.5,
            maxHeight: answerRef.current.scrollHeight,
            ease: 'power3.out',
        })
        titleRef.current.classList.add(...activeTitleClasses)
    }

    return (
        <div className="max-w-[789px] mb-6">
            <h3
                ref={titleRef}
                onClick={toggle}
                className={
                    'mb-0 text-base transition-all duration-300 text-white font-semibold w-full flex justify-between items-center px-10 py-3 select-none hover:cursor-pointer bg-blue border border-blue rounded-md '
                }>
                {question}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13.885"
                    height="8.357"
                    viewBox="0 0 13.885 8.357"
                    className="brightness-0 invert translate-x-4">
                    <path
                        id="Path_2013"
                        data-name="Path 2013"
                        d="M1069.873,6479l5.529,5.529-5.529,5.528"
                        transform="translate(6491.471 -1068.458) rotate(90)"
                        fill="none"
                        stroke={COLORS.blue}
                        strokeLinecap="round"
                        strokeWidth="2"
                    />
                </svg>
            </h3>
            <div ref={answerRef} className={' max-h-0 overflow-hidden'}>
                <div
                    className="px-10 py-6"
                    dangerouslySetInnerHTML={{ __html: answer }}
                />
            </div>
        </div>
    )
}
export default FaqItem
