const NavButton = ({ children, active, color, ...rest }: any) => {
    const activeClasses = '!bg-white text-black'
    return (
        <div
            {...rest}
            style={{
                backgroundColor: color,
            }}
            className={
                'py-2 px-4 text-center text-white rounded-t-md select-none hover:cursor-pointer ' +
                (active && activeClasses)
            }>
            {children}
        </div>
    )
}
export default NavButton
