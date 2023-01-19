import '@/assets/styles/globals.scss'
import PageTransition from '@/components/PageTransition'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <PageTransition>
            <Component {...pageProps} />
        </PageTransition>
    )
}
