const VacFilterOptions = ({ options, title, name, state }: any) => {
    return (
        <div className="mb-12">
            <h3 className="font-regular">{title}</h3>
            {options.map((option: any, index: number) => {
                return (
                    <div key={index}>
                        <input
                            type="checkbox"
                            id={option}
                            name={name}
                            value={option}
                            onChange={(e) => {
                                if (
                                    !state.filterState[name].includes(
                                        e.target.value,
                                    )
                                ) {
                                    state.setFilterState({
                                        ...state.filterState,
                                        [name]: [
                                            ...state.filterState[name],
                                            e.target.value,
                                        ],
                                    })
                                } else {
                                    state.setFilterState({
                                        ...state.filterState,
                                        [name]: state.filterState[name].filter(
                                            (item: any) =>
                                                item !== e.target.value,
                                        ),
                                    })
                                }
                            }}
                        />
                        <label htmlFor={option} className="ml-2">
                            {option}
                        </label>
                    </div>
                )
            })}
        </div>
    )
}
export default VacFilterOptions
