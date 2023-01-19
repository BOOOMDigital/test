import { BlockProps } from '@/hooks/useBlockData'
import Form from './Form'

const FormWithTabs = (props: BlockProps) => {
    return (
        <section className="py-12 relative">
            <div className="absolute inset-0 bg-highlight -z-10 " />
            <div className="container">
                <Form {...props} />
            </div>
        </section>
    )
}
export default FormWithTabs
