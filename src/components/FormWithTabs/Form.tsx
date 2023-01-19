import { BlockProps } from '@/hooks/useBlockData'
import { useState } from 'react'
import NavButton from './NavButton'
import Tab1 from './Tab1'
import Tab2 from './Tab2'
import Tab3 from './Tab3'

const Form = ({ content }: BlockProps) => {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <div className="max-w-[890px]">
            <nav className="grid grid-cols-3 gap-4">
                <NavButton
                    color={content?.color}
                    onClick={() => setActiveIndex(0)}
                    active={activeIndex === 0}>
                    {content?.tab_title}
                </NavButton>
                <NavButton
                    color={content?.color}
                    onClick={() => setActiveIndex(1)}
                    active={activeIndex === 1}>
                    Whatsapp
                </NavButton>
                <NavButton
                    color={content?.color}
                    onClick={() => setActiveIndex(2)}
                    active={activeIndex === 2}>
                    Bel mij terug
                </NavButton>
            </nav>
            <div className="bg-white px-16 py-12 rounded-b-md min-h-[633px]">
                {activeIndex === 0 && (
                    <Tab1
                        type={content?.type}
                        color={content?.color}
                        title={content?.title}
                    />
                )}
                {activeIndex === 1 && (
                    <Tab2 color={content?.color} title={'Whatsapp WIL Groep'} />
                )}
                {activeIndex === 2 && (
                    <Tab3 color={content?.color} title={'Terugbelverzoek'} />
                )}
            </div>
        </div>
    )
}
export default Form
