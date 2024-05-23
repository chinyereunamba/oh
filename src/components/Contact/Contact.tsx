import "../../assets/styles/contact.css"
import { AnimatePresence, motion } from "framer-motion"

export default function Contact() {
    return (
        <section className="contact">
            <AnimatePresence>
                <motion.div className="contact__contact_content">
                    <motion.h1>Let's work together.</motion.h1>
                    <motion.h1>
                        <a href="mailto:cunamba2@gmail.com">Get in touch.</a>
                    </motion.h1>
                </motion.div>
            </AnimatePresence>
        </section>
    )
}
