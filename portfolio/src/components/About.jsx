import { motion } from 'framer-motion'
import { personalInfo } from '../config/portfolio'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold text-center mb-4"
          >
            <span className="text-gradient" style={{ color: '#2563eb' }}>About Me</span>
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="glass-card mt-8"
          >
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              {personalInfo.bio}
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
          >
            <div className="glass-card text-center">
              <div className="text-3xl mb-2">🎯</div>
              <h3 className="font-semibold text-lg mb-2">Focus</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Generative AI & Backend Development
              </p>
            </div>
            <div className="glass-card text-center">
              <div className="text-3xl mb-2">🚀</div>
              <h3 className="font-semibold text-lg mb-2">Passion</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Building Intelligent Systems
              </p>
            </div>
            <div className="glass-card text-center">
              <div className="text-3xl mb-2">💡</div>
              <h3 className="font-semibold text-lg mb-2">Approach</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Innovation & Best Practices
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

