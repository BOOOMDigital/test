import { COLORS } from '@/lib/consts'
import ArrowButton from '../Buttons/ArrowButton'

export type VacatureProps = {
    title: string
    slug: string
    text: string
    location: {
        latlng: string
        address: string
    }
    location_text: string
    target_audience: string
    vac_sector: string
    contract: string
    salary: string
    tags: Array<any>
}

const VacItem = ({
    title,
    slug,
    text,
    location,
    location_text,
    target_audience,
    vac_sector,
    salary,
    contract,
    tags,
}: VacatureProps) => {
    return (
        <article className="rounded-md shadow-md p-6 mb-8">
            <h3 className="font-semibold mb-0">{title}</h3>

            <ul className="flex flex-wrap gap-x-12 gap-y-2 py-4 orangelist">
                {vac_sector && <li>{vac_sector}</li>}
                {target_audience && <li>{target_audience}</li>}
                {salary && <li>{salary}</li>}
                {contract && <li>{contract}</li>}
                {location_text && <li>{location_text}</li>}
            </ul>

            {text && (
                <div
                    className="linelimit3"
                    dangerouslySetInnerHTML={{ __html: text }}
                />
            )}

            {slug && (
                <ArrowButton
                    href={`/vacatures/${slug}`}
                    className="mt-4 border-darktone border rounded-md gap-6"
                    textColor={COLORS.darktone}>
                    Bekijk vacature
                </ArrowButton>
            )}
        </article>
    )
}
export default VacItem
