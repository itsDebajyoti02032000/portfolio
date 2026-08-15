import { motion } from 'framer-motion'
import { FiBriefcase, FiMapPin, FiClock } from 'react-icons/fi'
import { experience } from '../config/portfolio'

const Experience = () => {
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
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold text-center mb-12"
          >
            <span className="text-gradient">Experience</span>
          </motion.h2>

          <div className="space-y-8">
            {experience.map((exp) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="glass-card"
              >
                {/* Company Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                      {exp.company}
                    </h3>
                    {exp.location && (
                      <div className="flex items-center space-x-2 mt-1">
                        <FiMapPin className="w-4 h-4 text-cyan-500" />
                        <span className="text-gray-600 dark:text-gray-400 text-sm">{exp.location}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    <FiClock className="w-4 h-4 text-cyan-500" />
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{exp.totalDuration}</span>
                  </div>
                </div>

                {/* Roles Timeline */}
                <div className="relative pl-6 border-l-2 border-cyan-500/30 space-y-6">
                  {exp.roles.map((role, index) => (
                    <div key={index} className="relative">
                      {/* Timeline dot */}
                      <div className="absolute -left-[25px] top-1 w-3 h-3 rounded-full bg-cyan-500 border-2 border-[#0f0f2e] dark:border-[#0f0f2e]"></div>

                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                            {role.position}
                          </h4>
                          <div className="flex flex-wrap items-center gap-2 mt-1">
                            <span className="px-2 py-0.5 text-xs font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full">
                              {role.type}
                            </span>
                            {role.mode && (
                              <span className="px-2 py-0.5 text-xs font-medium bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full">
                                {role.mode}
                              </span>
                            )}
                            {role.domain && (
                              <span className="px-2 py-0.5 text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full">
                                {role.domain}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="text-right mt-1 sm:mt-0">
                          <p className="text-sm text-gray-600 dark:text-gray-400">{role.period}</p>
                          <p className="text-xs text-gray-500">{role.duration}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
