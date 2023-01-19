import { COLORS } from '@/lib/consts'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import ChevronDown from '../svgs/ChevronDown'

type AccordionItemProps = {
    accordionContent: {
        accordionItemTitle: string
        accordionItemDescription: string
    }
}

const AccordionItem = ({ accordionContent }: AccordionItemProps) => {
    const [accordionItemOpen, setAccordionItemOpen] = useState(false)

    const accordionItemDescriptionAnimation = {
        initial: { opacity: 0, y: -10 },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.3,
                ease: 'linear',
            },
        },
        exit: {
            opacity: 0,
            y: -10,
            transition: {
                delay: 0.1,
                duration: 0.3,
                ease: 'linear',
            },
        },
    }

    return (
        <div
            className={`${
                accordionItemOpen ? 'max-h-[1000px]' : 'max-h-[49px]'
            } transition-all duration-500 ease-in-out`}>
            <button
                className={`relative w-full h-[49px] z-10 px-5 sm:pl-9 sm:pr-7 rounded-md flex justify-between items-center border-[1px] border-blue transition-colors duration-500 ease-in-out ${
                    accordionItemOpen
                        ? 'bg-white text-blue'
                        : 'bg-blue text-white'
                }`}
                onClick={() => {
                    setAccordionItemOpen(!accordionItemOpen)
                }}>
                <span className="font-bold text-[16px]">
                    {accordionContent.accordionItemTitle}
                </span>
                <ChevronDown
                    className={`${
                        accordionItemOpen ? 'rotate-180 ' : ''
                    } transition-all duration-500 ease-in-out`}
                    chevronColor={accordionItemOpen ? COLORS.blue : '#FFF'}
                />
            </button>
            <AnimatePresence>
                {accordionItemOpen && (
                    <motion.div
                        className="px-5 sm:pl-9 sm:pr-7 pt-8 pb-5 z-[1]"
                        dangerouslySetInnerHTML={{
                            __html: accordionContent.accordionItemDescription,
                        }}
                        variants={accordionItemDescriptionAnimation}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    />
                )}
            </AnimatePresence>
        </div>
    )
}

export default AccordionItem
