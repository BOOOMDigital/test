const VacFilterOptions = ({ options, title, name, state }: any) => {
    return (
        <div className="mb-8 checkboxwrapper">
            <h3 className="font-regular mb-6">{title}</h3>
            {options.map((option: any, index: number) => {
                return (
                    <div key={index} className="checkboxitem">
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
                                        page: null,
                                    })
                                } else {
                                    state.setFilterState({
                                        ...state.filterState,
                                        [name]: state.filterState[name].filter(
                                            (item: any) =>
                                                item !== e.target.value,
                                        ),
                                        page: null,
                                    })
                                }
                            }}
                        />
                        <label htmlFor={option}>{option}</label>
                    </div>
                )
            })}
        </div>
    )
}
export default VacFilterOptions
