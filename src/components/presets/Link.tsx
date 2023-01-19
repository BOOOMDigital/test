import DefaultLink, { LinkProps } from 'next/link'

type NewLinkProps = LinkProps & {
    children?: React.ReactNode
    [key: string]: any
}

// set scroll to false to prevent scroll to top on page change (when pagetransition is used)
const Link = ({ children, href, ...rest }: NewLinkProps) => {
    return (
        <DefaultLink {...rest} href={href || ''} scroll={rest.scroll || true}>
            {children}
        </DefaultLink>
    )
}
export default Link
