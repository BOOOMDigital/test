import Blocks from '@/components/Blocks/Blocks'
import Layout from '@/components/Layout'
import { getPageBySlug } from '@/lib/api/pages'
import { GetStaticProps } from 'next'

export default function Home({ page }: any) {
    return (
        <Layout {...page}>
            <Blocks vacatures={page?.vacatures} blocks={page?.blocks} />
        </Layout>
    )
}
export const getStaticProps: GetStaticProps = async () => {
    const page = await getPageBySlug('home')

    return {
        props: {
            page,
        },
        revalidate: 5,
    }
}
