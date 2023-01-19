import { Autocomplete, useJsApiLoader } from '@react-google-maps/api'
import { useEffect, useRef } from 'react'
import { useGeolocated } from 'react-geolocated'
import ArrowButton from '../Buttons/ArrowButton'

const GeoSelect = ({ handleSearch }: any) => {
    const autocompleteRef = useRef(null) as any
    const radiusRef = useRef(null) as any
    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 10000,
        })

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
        libraries: ['places'],
    })

    // google maps get coords from autocomplete value
    const getCoords = (value: any) => {
        if (value === '') {
            alert('Voer een locatie of postcode in')
            return
        }
        const geocoder = new google.maps.Geocoder()
        geocoder.geocode({ address: value }, (results: any, status) => {
            if (status === 'OK') {
                const lat = results[0].geometry.location.lat()
                const lng = results[0].geometry.location.lng()
                console.log({ lat, lng, rad: Number(radiusRef.current.value) })
                handleSearch({ lat, lng, rad: Number(radiusRef.current.value) })
            } else {
                console.error(
                    'Geocode was not successful for the following reason: ' +
                        status,
                )
                alert('Geen resultaten, probeer een andere locatie of postcode')
            }
        })
    }

    return (
        <>
            {isLoaded && (
                <div className="max-w-[284px]">
                    <div className="grid grid-cols-2  rounded-xl shadow-input-shadow mb-6">
                        <Autocomplete className="w-[200%]">
                            <input
                                className="px-4 py-3 w-full pr-[50%] border-transparent focus:border-transparent focus:!ring-0 !outline-none"
                                type="text"
                                ref={autocompleteRef}
                                placeholder="Locatie"
                            />
                        </Autocomplete>
                        <select
                            className="px-4 py-3"
                            name="radius"
                            id="radius"
                            ref={radiusRef}>
                            <option value="10">10 km</option>
                            <option value="20">20 km</option>
                            <option value="30">30 km</option>
                            <option value="50">50 km</option>
                            <option value="100">100 km</option>
                        </select>
                    </div>
                    <ArrowButton
                        noLink
                        onClick={() =>
                            getCoords(autocompleteRef.current.value || '')
                        }
                        className="bg-grey rounded-md gap-6 mb-6">
                        Zoeken
                    </ArrowButton>
                </div>
            )}
        </>
    )
}

export default GeoSelect
