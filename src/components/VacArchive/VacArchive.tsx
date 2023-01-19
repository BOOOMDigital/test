import { useState } from 'react'
import VacItem, { VacatureProps } from './VacItem'
import VacSidebar from './VacSidebar'

export type VacArchiveProps = {
    vacatures: {
        items: {
            current_page: number
            data: Array<VacatureProps>
            from: number
            last_page: number
            next_page_url: string | null
            prev_page_url: string | null
            per_page: number
            to: number
            total: number
        }
        filter: {
            target_audience: Array<any>
            vac_sector: Array<any>
            tags: Array<any>
        }
    }
}

const VacArchive = ({ vacatures }: VacArchiveProps) => {
    const initialVacatureData = vacatures || []
    const [filteredVacatures, setFilteredVacatures] = useState(vacatures || [])

    return (
        <section className="py-16">
            <div className="container flex gap-4">
                <VacSidebar
                    setFilteredVacatures={setFilteredVacatures}
                    vacatures={initialVacatureData}
                />
                <div className="flex-1">
                    <h2 className="text-orange mb-12">
                        {filteredVacatures?.items?.total} Vacatures beschikbaar
                    </h2>
                    {filteredVacatures?.items?.data?.map((vacature, index) => (
                        <VacItem key={index} {...vacature} />
                    ))}
                </div>
            </div>
        </section>
    )
}
export default VacArchive
