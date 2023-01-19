import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'

const PageTransition = ({ children, ...rest }: any) => {
    const router = useRouter()
    return (
        <AnimatePresence mode="wait" {...rest}>
            <motion.div
                key={router.asPath}
                transition={{
                    duration: 0.3,
                }}
                exit={{ opacity: 0 }}
                initial="initial"
                animate="animate">
                {children}
            </motion.div>
        </AnimatePresence>
    )
}
export default PageTransition
