const InputLabel = ({ children, className, ...rest }: any) => {
    return (
        <label
            {...rest}
            className={
                className +
                ' absolute left-3 top-px text-[10px] color-[#20303E] font-light'
            }>
            {children}
        </label>
    )
}
export default InputLabel
