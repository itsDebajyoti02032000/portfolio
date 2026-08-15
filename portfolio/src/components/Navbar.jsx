import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'
import { FiSun, FiMoon, FiMenu, FiX, FiArrowRight } from 'react-icons/fi'

const Navbar = ({ onToggleParticles, particlesEnabled }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const sections = ['home', 'education', 'experience', 'projects', 'skills', 'contact']
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 left-0 right-0 z-50 w-[95%] max-w-6xl mx-auto"
    >
      <div className={`flex items-center justify-between px-6 py-3 rounded-full border transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-[#0a0a1f]/90 backdrop-blur-xl border-gray-200 dark:border-white/10 shadow-lg shadow-black/10 dark:shadow-black/20'
          : 'bg-white/70 dark:bg-[#0a0a1f]/70 backdrop-blur-md border-gray-200 dark:border-white/10'
      }`}>
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => scrollToSection('#home')}
        >
          <span className="text-2xl font-bold text-gradient-purple">DD</span>
          <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 hidden sm:inline">Debajyoti Das</span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(item.href)
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {item.name}
              {activeSection === item.href.slice(1) && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-400 rounded-full"
                />
              )}
            </motion.a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-3">
          {/* Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <FiSun className="w-4 h-4 text-yellow-400" />
            ) : (
              <FiMoon className="w-4 h-4 text-gray-700" />
            )}
          </motion.button>

          {/* Let's Connect Button */}
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('#contact')
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center space-x-2 px-5 py-2 btn-purple text-sm rounded-full"
          >
            <span>Let's Connect</span>
            <FiArrowRight className="w-4 h-4" />
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <FiX className="w-6 h-6 text-white" />
            ) : (
              <FiMenu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden mt-2 p-4 rounded-2xl bg-[#0a0a1f]/95 backdrop-blur-xl border border-white/10"
        >
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href)
                }}
                className="text-gray-300 hover:text-white transition-colors font-medium py-2 px-3 rounded-lg hover:bg-white/5"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('#contact')
              }}
              className="flex items-center justify-center space-x-2 px-5 py-2.5 btn-purple text-sm rounded-full mt-2"
            >
              <span>Let's Connect</span>
              <FiArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar
