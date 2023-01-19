import { COLORS } from '@/lib/consts'
import ArrowButton from '../Buttons/ArrowButton'

const Tab3 = ({ title, color }: any) => {
    return (
        <div>
            <h2
                style={{
                    color,
                }}
                className="mb-8">
                {title}
            </h2>
            <p>
                Bij het sturen van een whatsapp bericht, is het belangrijk om
                het onderwerp en/of jou vraag duidelijk te vermelden. Zo kunnen
                we samen de communicatie spoedig laten verlopen.
            </p>
            <ArrowButton
                className="rounded-md gap-6"
                style={{
                    backgroundColor: COLORS.grey,
                }}>
                Bel ons
            </ArrowButton>
        </div>
    )
}
export default Tab3
