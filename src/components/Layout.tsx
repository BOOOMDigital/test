import { PageContextProvider } from '@/hooks/usePage'
import Footer from './Footer/Footer'
import Header from './Header/Header'

type LayoutProps = {
    children?: React.ReactNode
    [key: string]: any
}
const Layout = ({ children, ...rest }: LayoutProps) => {
    return (
        <PageContextProvider value={rest}>
            <Header />
            <main>{children}</main>
            <Footer />
        </PageContextProvider>
    )
}
export default Layout
