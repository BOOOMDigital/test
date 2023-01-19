import CardSlider from '../CardSlider/CardSlider'
import Collaborations from '../Collaborations/Collaborations'
import FormWithTabs from '../FormWithTabs/FormWithTabs'
import HeroBig from '../HeroBig/HeroBig'
import HeroSmall from '../HeroSmall/HeroSmall'
import QuoteBanner from '../QuoteBanner/QuoteBanner'
import Spacer from '../Spacer/Spacer'
import TextBlockDark from '../TextBlockDark/TextBlockDark'
import TextImage from '../TextImage/TextImage'
import TextImageColored from '../TextImageColored/TextImageColored'
import TextLogos from '../TextLogos/TextLogos'
import TextOverflow from '../TextOverflow/TextOverflow'
import TextOverflowGrid from '../TextOverflowGrid/TextOverflowGrid'
import UspsBanner from '../UspsBanner/UspsBanner'
import VacArchive from '../VacArchive/VacArchive'
import Video from '../Video/Video'
import Wysiwyg from '../Wysiwyg/Wysiwyg'

const Blocks = ({ blocks, vacatures }: any) => {
    let blocksArray = [] as any

    blocks?.map((block: any, index: any) => {
        switch (block?.type) {
            case 'hero-big':
                blocksArray.push(<HeroBig key={index} {...block} />)
                break

            case 'hero-small':
                blocksArray.push(<HeroSmall key={index} {...block} />)
                break

            case 'text-image':
                blocksArray.push(<TextImage key={index} {...block} />)
                break

            case 'text-image-colored':
                blocksArray.push(<TextImageColored key={index} {...block} />)
                break

            case 'textblock-dark':
                blocksArray.push(<TextBlockDark key={index} {...block} />)
                break

            case 'quote-banner':
                blocksArray.push(<QuoteBanner key={index} {...block} />)
                break

            case 'card-slider':
                blocksArray.push(<CardSlider key={index} {...block} />)
                break

            case 'usps-banner':
                blocksArray.push(<UspsBanner key={index} {...block} />)
                break

            case 'collaborations':
                blocksArray.push(<Collaborations key={index} {...block} />)
                break

            case 'text-overflow':
                blocksArray.push(<TextOverflow key={index} {...block} />)
                break

            case 'text-overflow-grid':
                blocksArray.push(<TextOverflowGrid key={index} {...block} />)
                break

            case 'spacer':
                blocksArray.push(<Spacer key={index} {...block} />)
                break

            case 'text':
                blocksArray.push(<Wysiwyg key={index} {...block} />)
                break

            case 'form-with-tabs':
                blocksArray.push(<FormWithTabs key={index} {...block} />)
                break

            case 'video':
                blocksArray.push(<Video key={index} {...block} />)
                break

            case 'text-logos':
                blocksArray.push(<TextLogos key={index} {...block} />)
                break

            case 'vac_archive':
                blocksArray.push(
                    <VacArchive vacatures={vacatures} key={index} {...block} />,
                )
                break

            default:
                return null
        }
    })

    return <>{blocksArray.map((blockComponent: any) => blockComponent)}</>
}
export default Blocks
