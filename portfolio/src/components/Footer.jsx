import { motion } from 'framer-motion'
import { personalInfo } from '../config/portfolio'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-600 dark:text-gray-400">
            © {currentYear} <span className="font-semibold text-gradient" style={{ color: '#2563eb' }}>{personalInfo.name}</span>. Built with React, TailwindCSS & Framer Motion.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

