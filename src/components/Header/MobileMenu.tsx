import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Link from '../presets/Link'
import { useRouter } from 'next/router'
import { XMarkIcon } from '@heroicons/react/24/solid'

interface MobileMenuProps {
    onClose: () => void
    navlinks: Array<any>
}

const MobileMenu = ({ onClose, navlinks }: MobileMenuProps) => {
    const bgRef = useRef(null)
    const timelineRef = useRef(null as any)
    const wrapperRef = useRef(null as any)

    useEffect(() => {
        gsap.context(() => {
            timelineRef.current = gsap
                .timeline()
                .fromTo(
                    '.mobile-bg',
                    {
                        opacity: 0,
                    },
                    {
                        opacity: 1,
                        duration: 0.6,
                        ease: 'power3.out',
                    },
                )
                .fromTo(
                    'ul li a span',
                    {
                        skewY: 10,
                        y: 150,
                    },
                    {
                        y: 0,
                        skewY: 0,
                        opacity: 1,
                        duration: 0.6,
                        ease: 'power3.out',
                        stagger: 0.05,
                    },
                    '-=0.4',
                )
                .fromTo(
                    '.close_button_',
                    {
                        opacity: 0,
                        scale: 0,
                    },
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 0.6,
                        ease: 'power3.out',
                    },
                    '-=0.5',
                )
                .fromTo(
                    '.copyright_',
                    {
                        opacity: 0,
                        y: 25,
                    },
                    {
                        y: 0,
                        opacity: 0.25,
                        duration: 0.6,
                        ease: 'power3.out',
                    },
                    '-=0.7',
                )
        }, wrapperRef)
    }, [])

    const onCloseHandler = () => {
        timelineRef.current.reverse().then(() => {
            onClose()
        })
    }

    return (
        <div
            ref={wrapperRef}
            className="fixed inset-0 z-50 flex items-center overflow-auto">
            {/* Menu background*/}
            <div
                ref={bgRef}
                onClick={onCloseHandler}
                className="bg-darktone bg-opacity-95 fixed inset-0 mobile-bg"
            />

            {/* Close icon */}
            <div className="absolute w-full h-full">
                <div className="relative w-full h-full container">
                    <button
                        className="close_button_ absolute right-2.5 top-3.5 md:top-6 w-[50px] sm:w-[60px] h-[50px] sm:h-[60px] bg-white rounded-full z-[2] flex items-center justify-center"
                        onClick={onCloseHandler}>
                        <XMarkIcon className="w-7 sm:w-9 h-7 sm:h-9 text-black" />
                    </button>
                    <div className="copyright_ absolute left-5 bottom-10 text-white">
                        <span className="font-semibold">
                            © {new Date().getFullYear()} WIL groep
                        </span>
                    </div>
                </div>
            </div>

            <nav className="relative z-10 container">
                <ul className="list-none flex flex-col gap-6">
                    {navlinks.map((item, index) => {
                        return (
                            <li key={index} className="overflow-hidden">
                                <Link href={item?.navlink?.url}>
                                    <span className="block text-white text-2xl sm:text-3xl font-bold relative">
                                        {item?.navlink?.title}
                                    </span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}

export default MobileMenu
