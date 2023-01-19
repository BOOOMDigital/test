import Blocks from '@/components/Blocks/Blocks'
import Layout from '@/components/Layout'
import { getPageBySlug, getPageSlugs } from '@/lib/api/pages'
import { GetStaticPaths, GetStaticProps } from 'next'

export default function Home({ page }: any) {
    return (
        <Layout {...page}>
            <Blocks vacatures={page?.vacatures} blocks={page?.blocks} />
        </Layout>
    )
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
    const page = await getPageBySlug(params?.slug as any)

    return {
        props: {
            page,
        },
        revalidate: 5,
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const pathsWithoutPrefix = await getPageSlugs()

    const paths = pathsWithoutPrefix.map((path: string) => '/' + path)

    return {
        paths: paths,
        fallback: true,
    }
}
