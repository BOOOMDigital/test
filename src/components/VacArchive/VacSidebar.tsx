import { usepage } from '@/hooks/usePage'
import { getFilteredVacatures } from '@/lib/api/vacatures'
import { useEffect, useState } from 'react'
import { useGeolocated } from 'react-geolocated'
import GeoSelect from './GeoSelect'
import { VacArchiveProps } from './VacArchive'
import VacFilterOptions from './VacFilterOptions'

// type VacSidebarProps = {
//     vacatures: VacArchiveProps['vacatures']
//     setFilteredVacatures: (vacatures: any) => void
// }

const VacSidebar = ({ vacatures, setFilteredVacatures }: any) => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [filterState, setFilterState] = useState({
        target_audience: [],
        vac_sector: [],
        tags: [],
        sector_ids: [],
        coords: null,
    })

    // Get sectors from page
    const page = usepage()
    const sectorIds =
        page?.sectors?.length > 0
            ? page?.sectors.map((sector: any) => sector.id)
            : null

    // get filter options from backend
    const { filter } = vacatures

    useEffect(() => {
        setIsLoaded(true)
        if (!isLoaded) return

        // fetch new vacatures
        const fetchData = async () => {
            const data = await getFilteredVacatures({
                ...filterState,
                sector_ids: sectorIds,
            })
            return data
        }

        fetchData()
            .then((res) => {
                console.log(res)
                setFilteredVacatures(res)
            })
            .catch((err) => {
                console.error('failed to fetch', err)
            })
    }, [filterState])

    const handleSearch = (coords: any) => {
        setFilterState({
            ...filterState,
            coords: coords || null,
        })
    }

    return (
        <aside className="w-[350px] shrink-0">
            <GeoSelect handleSearch={handleSearch} />
            {filter?.target_audience?.length > 0 && (
                <VacFilterOptions
                    title="Doelgroep"
                    name="target_audience"
                    options={filter?.target_audience}
                    state={{ filterState, setFilterState }}
                />
            )}
            {filter?.vac_sector?.length > 0 && (
                <VacFilterOptions
                    title="Sector"
                    name="vac_sector"
                    options={filter?.vac_sector}
                    state={{ filterState, setFilterState }}
                />
            )}
            {filter?.tags?.length > 0 && (
                <VacFilterOptions
                    title="Functie"
                    name="tags"
                    options={filter?.tags}
                    state={{ filterState, setFilterState }}
                />
            )}
        </aside>
    )
}
export default VacSidebar
