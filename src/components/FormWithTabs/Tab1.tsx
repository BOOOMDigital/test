import FormFields from './FormFields'

const Tab1 = ({ title, type, color }: any) => {
    return (
        <div>
            <h2
                style={{
                    color,
                }}
                className="mb-8">
                {title}
            </h2>
            <FormFields type={type} />
        </div>
    )
}
export default Tab1
