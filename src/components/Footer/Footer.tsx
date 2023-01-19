import Image from 'next/image'
import Link from '../presets/Link'

const Footer = () => {
    return (
        <footer>
            <div className="bg-darktone text-white pt-24 md:pt-36 pb-3">
                <div className="container">
                    <div className="flex flex-row flex-wrap lg:flex-nowrap justify-between leading-[30px]">
                        <div className="logo pt-10">
                            <div className="relative">
                                <Image
                                    src="/wilwit.png"
                                    alt="logo"
                                    width="252"
                                    height="60"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col pt-10 w-full sm:w-1/2 lg:w-[206px]">
                            <h4 className="text-[26px] mb-5">Snel naar</h4>
                            <Link href="/">WIL Groep</Link>
                            <Link href={'/'} className="font-nromal">
                                WIL Werken
                            </Link>
                            <Link href={'/'}>WIL Werving & Selectie</Link>
                            <Link href={'/'}>WIL Bouwbanen</Link>
                            <Link href={'/'}>Over WIL Groep</Link>
                            <Link href={'/'}>Contact</Link>
                        </div>
                        <div className="flex flex-col pt-10 w-full sm:w-1/2 lg:w-[206px]">
                            <h4 className="text-[26px] mb-5">Contact</h4>
                            <Link href="tel:024-7820992">024-7820992</Link>
                            <Link href="mailto:info@wilgroep.nl">
                                info@wilgroep.nl
                            </Link>
                        </div>
                        <div className="flex flex-col pt-10 w-full sm:w-1/2 lg:w-[206px]">
                            <h4 className="text-[26px] mb-5">Adres</h4>
                            <p className="mb-0">St. Hubertusstraat 10c</p>
                            <p className="mb-0">6531LB Nijmegen</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between text-[12px] pt-24 md:pt-44">
                        <p>
                            &copy; 2022 WIL Groep • KvK 00000000 •{' '}
                            <Link href="https://www.booomdigital.nl">
                                Website: BOOOM digital
                            </Link>
                        </p>
                        <p>
                            <Link href={'/'}>Privacy voorwaarden</Link> •{' '}
                            <Link href={'/'}>Algemene voorwaarden</Link>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer
