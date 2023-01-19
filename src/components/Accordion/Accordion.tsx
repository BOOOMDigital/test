import React from 'react'
import AccordionItem from './AccordionItem'

type AccordionProps = {
    accordionItems: Array<any>
}

const Accordion = ({ accordionItems }: AccordionProps) => {
    return (
        <div className="flex flex-col gap-7 mb-20 sm:w-3/4">
            {accordionItems.map((item, index) => {
                return (
                    <div key={index}>
                        <AccordionItem accordionContent={item} />
                    </div>
                )
            })}
        </div>
    )
}

export default Accordion
