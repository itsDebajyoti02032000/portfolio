import { motion } from 'framer-motion'
import { FiArrowDown, FiArrowRight, FiMail, FiMapPin, FiBriefcase, FiDownload } from 'react-icons/fi'
import { personalInfo } from '../config/portfolio'

const Hero = () => {
  const scrollToSection = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const floatingIcons = [
    { icon: '</>', position: 'top-4 left-4', delay: 0 },
    { icon: '⚙', position: 'top-4 right-4', delay: 0.2 },
    { icon: '✱', position: 'bottom-16 left-4', delay: 0.4 },
    { icon: '☁', position: 'bottom-16 right-4', delay: 0.6 },
  ]

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-24 pb-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col space-y-8 order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-gray-300 dark:border-white/10 bg-gray-100 dark:bg-white/5 w-fit"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300 tracking-wider uppercase">AI & Software Engineer</span>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
                Building Intelligent{' '}
                <span className="text-gradient">Systems.</span>
                <br />
                Solving Real Problems.
              </h1>
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-6"></div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg"
            >
              I build AI-powered solutions and scalable backend systems
              that drive impact. Specialized in{' '}
              <span className="text-cyan-600 dark:text-cyan-400 font-medium">Generative AI, LLMs</span>,
              and <span className="text-cyan-600 dark:text-cyan-400 font-medium">cloud-native</span> architectures.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#projects"
                onClick={(e) => { e.preventDefault(); scrollToSection('#projects') }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 btn-purple text-base"
              >
                <span>View My Work</span>
                <FiArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollToSection('#contact') }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white font-semibold hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
              >
                <span>Get In Touch</span>
                <FiMail className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="/assets/Debajyoti_Resume.pdf"
                download="Debajyoti_Das_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full border border-cyan-500/50 text-cyan-600 dark:text-cyan-400 font-semibold hover:bg-cyan-50 dark:hover:bg-cyan-500/10 transition-colors"
              >
                <span>Resume</span>
                <FiDownload className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Section - Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative p-8 rounded-2xl border border-cyan-500/30 bg-gray-100 dark:bg-[#0f0f2e]/80 backdrop-blur-sm card-glow w-full max-w-md">
              {/* Floating Icons */}
              {floatingIcons.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + item.delay, type: 'spring' }}
                  className={`absolute ${item.position} w-10 h-10 rounded-full bg-cyan-100 dark:bg-[#1a1a4e] border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 text-sm font-mono animate-float`}
                  style={{ animationDelay: `${item.delay * 2}s` }}
                >
                  {item.icon}
                </motion.div>
              ))}

              {/* Profile Photo */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                className="flex justify-center mb-6"
              >
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 rounded-full animate-glow-pulse"></div>
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full border-4 border-[#0f0f2e] object-cover object-center"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/200?text=DD'
                    }}
                  />
                </div>
              </motion.div>

              {/* Name & Role */}
              <div className="text-center space-y-2 mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{personalInfo.name}</h2>
                <p className="text-cyan-400 font-medium">{personalInfo.profession}</p>
              </div>

              {/* Divider */}
              <div className="w-3/4 mx-auto h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mb-6"></div>

              {/* Location & Experience */}
              <div className="flex items-center justify-center gap-6 text-sm">
                <div className="flex items-center space-x-2 text-gray-400">
                  <FiMapPin className="w-4 h-4 text-cyan-400" />
                  <div>
                    <p className="text-gray-900 dark:text-white font-medium">{personalInfo.location}</p>
                    <p className="text-gray-500 dark:text-gray-500">Onsite</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <FiBriefcase className="w-4 h-4 text-cyan-400" />
                  <div>
                    <p className="text-gray-900 dark:text-white font-medium">{personalInfo.totalExperience}</p>
                    <p className="text-gray-500 dark:text-gray-500">Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col items-center mt-16 cursor-pointer"
          onClick={() => scrollToSection('#about')}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="flex flex-col items-center space-y-2"
          >
            <div className="w-8 h-8 rounded-full border border-gray-300 dark:border-white/20 flex items-center justify-center">
              <FiArrowDown className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-500 tracking-wider">Scroll to explore</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
