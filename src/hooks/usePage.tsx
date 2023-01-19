import { createContext, useContext } from 'react'

export const PageContext = createContext(null)

export const PageContextProvider = ({ children, value }: any) => {
    return <PageContext.Provider value={value}>{children}</PageContext.Provider>
}

export function usepage() {
    const page = useContext(PageContext) as any

    return page
}
