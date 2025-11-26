import { motion } from 'framer-motion'
import { skills } from '../config/portfolio'

const Skills = () => {
  const skillCategories = [
    { title: 'Programming Languages', items: skills.programming, color: 'from-blue-500 to-cyan-500' },
    { title: 'Backend Technologies', items: skills.backend, color: 'from-purple-500 to-pink-500' },
    { title: 'Data & AI', items: skills.dataAI, color: 'from-green-500 to-emerald-500' },
    { title: 'Tools & Platforms', items: skills.tools, color: 'from-orange-500 to-red-500' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient" style={{ color: '#2563eb' }}>Skills & Technologies</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="glass-card"
            >
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r bg-white/50 dark:bg-gray-800/50 rounded-full border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                  >
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

