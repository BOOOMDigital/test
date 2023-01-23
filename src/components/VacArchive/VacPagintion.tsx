import ArrowButton from '../Buttons/ArrowButton'

const VacPagintion = ({
    filteredVacatures,
    filterState,
    setFilterState,
}: any) => {
    if (
        !filteredVacatures?.items?.next_page_url &&
        !filteredVacatures?.items?.prev_page_url
    ) {
        return null
    }

    const totalPages = Math.ceil(
        filteredVacatures.items?.total / filteredVacatures.items?.per_page,
    )

    const currentPage = filteredVacatures.items?.current_page

    const allPages = Array.from({ length: totalPages }, (_, i) => i + 1)

    const handleSetPage = (page: number) => {
        setFilterState({
            ...filterState,
            page: page,
        })
        // scroll to element vacarchive
        const element = document.getElementById('vacarchive')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const activePageClasses = 'bg-orange text-white border-orange'

    return (
        <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-8">
                <p className="m-0">
                    Pagina <strong>{currentPage}</strong> van {totalPages}
                </p>

                <div className="flex items-center gap-2">
                    {allPages.map((page, index) => {
                        const activePage =
                            page === currentPage ? activePageClasses : ''
                        return (
                            <button
                                key={index}
                                className={
                                    'rounded-full aspect-square border-grey border w-[24px] h-[24px] flex items-center justify-center ' +
                                    activePage
                                }
                                onClick={() => handleSetPage(page)}>
                                {page}
                            </button>
                        )
                    })}
                </div>
            </div>
            {totalPages !== currentPage && (
                <ArrowButton
                    noLink
                    className="bg-orange gap-4 text-white rounded-md"
                    onClick={() => handleSetPage(currentPage + 1)}>
                    Volgende
                </ArrowButton>
            )}
        </div>
    )
}
export default VacPagintion
