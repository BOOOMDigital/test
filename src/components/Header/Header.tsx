import { fadeInUp, stagger } from '@/lib/consts'
import { Bars3BottomRightIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Logo from '../../../public/wilstandard.png'
import Link from '../presets/Link'
import MobileMenu from './MobileMenu'

const placeholderNavlinks = [
    {
        navlink: {
            title: 'WIL groep',
            url: '/',
        },
    },
    {
        navlink: {
            title: 'WIL werken',
            url: '/wil-werken',
        },
    },
    {
        navlink: {
            title: 'WIL Werving & Selectie',
            url: '/wil-werving-selectie',
        },
    },
    {
        navlink: {
            title: 'WIL Bouwbanen',
            url: '/wil-bouwbanen',
        },
    },
    {
        navlink: {
            title: 'Over WIL Groep',
            url: '/over-ons',
        },
    },
]

const Header = () => {
    const router = useRouter()
    const [mobileMenu, setMobileMenu] = useState(false)

    return (
        <header className="h-[80px] md:h-[109px] w-full overflow-hidden">
            <motion.div
                variants={stagger}
                className="w-full h-full container flex justify-between items-center">
                <Link
                    href={'/'}
                    className="relative w-[150px] md:w-[190px] h-[45px] block">
                    <motion.div
                        variants={fadeInUp}
                        className="relative w-full h-full">
                        <Image
                            src={Logo}
                            alt="Logo"
                            fill
                            sizes="(max-width: 768px) 100vw,
                                (max-width: 1200px) 50vw,
                                33vw"
                            priority
                            className="object-contain"
                        />
                    </motion.div>
                </Link>

                <div className="navigation_ hidden xl:block h-full">
                    <nav className="w-full h-full flex items-center gap-6 text-[15px]">
                        {placeholderNavlinks?.map((item, index) => {
                            return (
                                <motion.div variants={fadeInUp} key={index}>
                                    <Link
                                        href={item?.navlink?.url}
                                        className={`relative group font-bold`}>
                                        {item?.navlink?.title}
                                        <div
                                            className={`absolute -bottom-.5 bg-black ${
                                                router.asPath ===
                                                    item?.navlink?.url ||
                                                router.pathname ===
                                                    item?.navlink?.url
                                                    ? 'w-full'
                                                    : 'w-0'
                                            } group-hover:w-full transition-all duration-200 h-[2px] left-1/2 -translate-x-1/2`}></div>
                                    </Link>
                                </motion.div>
                            )
                        })}
                        <Link href={'/contact'}>
                            <motion.button
                                variants={fadeInUp}
                                className="bg-darktone px-3.5 py-[3px] font-bold shadow-xl rounded-lg text-white">
                                Contact
                            </motion.button>
                        </Link>

                        {/* <div
                            className="w-[30px] h-[30px]"
                            onClick={() => console.log('Search icon clicked')}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30.564"
                                height="30.564"
                                viewBox="0 0 30.564 30.564">
                                <path
                                    id="search"
                                    d="M29.616,26.008l-7.24-6.158a3.235,3.235,0,0,0-2.2-.953A11.462,11.462,0,1,0,18.9,20.18a3.235,3.235,0,0,0,.953,2.2l6.158,7.24a2.568,2.568,0,1,0,3.607-3.607ZM11.461,19.1A7.641,7.641,0,1,1,19.1,11.461,7.641,7.641,0,0,1,11.461,19.1Z"
                                    transform="translate(0.001 0.001)"
                                    fill="#20303e"
                                />
                            </svg>
                        </div> */}
                    </nav>
                </div>
                <div
                    className="hamburger_menu_icon_ flex items-center xl:hidden w-[40px] h-[40px] justify-center"
                    onClick={() => setMobileMenu(true)}>
                    <Bars3BottomRightIcon className="w-full h-full -mr-2" />
                </div>
            </motion.div>
            {mobileMenu && (
                <MobileMenu
                    navlinks={placeholderNavlinks}
                    onClose={() => setMobileMenu(false)}
                />
            )}
        </header>
    )
}

export default Header
