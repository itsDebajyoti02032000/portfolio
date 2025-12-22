import { motion } from 'framer-motion'
import { FiArrowDown } from 'react-icons/fi'
import { personalInfo } from '../config/portfolio'

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative pt-20 px-4 sm:px-6 lg:px-8"
      style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        paddingTop: '80px',
        backgroundColor: '#ffffff'
      }}
    >
      <div className="container mx-auto" style={{ width: '100%', maxWidth: '1200px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          {/* Left Section: About Me Paragraph + CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col space-y-6 order-2 lg:order-1"
          >
            {/* About Me Paragraph */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-card"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gradient">
                About Me
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                {personalInfo.bio}
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow text-center flex items-center justify-center"
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 glass-card font-semibold hover:bg-white/20 dark:hover:bg-gray-700/20 transition-colors text-center flex items-center justify-center"
              >
                View My Work
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Section: Profile Pic, Name, Role, Total Experience */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center lg:items-end space-y-6 order-1 lg:order-2 w-full lg:w-auto"
          >
            {/* Profile Image */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="relative w-40 h-40 sm:w-52 sm:h-52 lg:w-64 lg:h-64 rounded-full border-4 border-white dark:border-gray-800 shadow-2xl object-cover object-center"
                  style={{ objectPosition: 'center' }}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/200?text=DD'
                  }}
                />
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center lg:text-right text-gradient leading-tight break-words overflow-visible"
              style={{ lineHeight: '1.2', wordBreak: 'break-word' }}
            >
              {personalInfo.name}
            </motion.h1>

            {/* Profession */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl sm:text-2xl lg:text-3xl font-medium text-center lg:text-right"
              style={{ color: '#4b5563' }}
            >
              {personalInfo.profession}
            </motion.p>

            {/* Total Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-2 text-center lg:text-right"
            >
              <span className="text-2xl">💼</span>
              <p className="text-lg font-semibold" style={{ color: '#6b7280' }}>
                Total Experience: <span className="text-gradient">{personalInfo.totalExperience}</span>
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, repeat: Infinity, repeatType: 'reverse', duration: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToAbout}
        >
          <FiArrowDown className="w-6 h-6 text-gray-400 animate-bounce" />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

