import { motion } from 'framer-motion'
import { personalInfo, education, experience } from '../config/portfolio'

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

          {/* Education Section */}
          <motion.div
            variants={itemVariants}
            className="mt-12"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu) => (
                <motion.div
                  key={edu.id}
                  variants={itemVariants}
                  className="glass-card"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300 font-medium mb-1">
                        {edu.institution}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {edu.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">
                        {edu.period}
                      </p>
                      {edu.cgpa && (
                        <p className="text-gray-700 dark:text-gray-300 font-medium">
                          {edu.cgpa}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            variants={itemVariants}
            className="mt-12"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">
              Experience
            </h3>
            <div className="space-y-6">
              {experience.map((exp) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className="glass-card"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-1">
                        {exp.position}
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300 font-medium mb-1">
                        {exp.company}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {exp.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {exp.period}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

