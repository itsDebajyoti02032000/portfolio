import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiX, FiBriefcase, FiUser } from 'react-icons/fi'
import { projects } from '../config/portfolio'

const ImageCarousel = ({ images, title, onImageClick }) => {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const intervalRef = useRef(null)

  useEffect(() => {
    if (paused) return
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(intervalRef.current)
  }, [paused, images.length])

  return (
    <div
      className="relative w-full h-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {images.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`${title} - ${idx + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            idx === current ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => onImageClick(src)}
          onError={(e) => {
            e.target.src = `https://via.placeholder.com/400x300?text=${encodeURIComponent(title)}`
          }}
        />
      ))}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => {
              e.stopPropagation()
              setCurrent(idx)
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === current
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeTab, setActiveTab] = useState('org')

  const filteredProjects = projects.filter((p) => p.category === activeTab)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-[#0f0f2e]/50">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">My Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            A collection of projects I've built with passion and dedication
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-full p-1 bg-gray-100 dark:bg-[#1a1a3e] border border-gray-200 dark:border-white/10">
            <button
              onClick={() => setActiveTab('org')}
              className={`inline-flex items-center space-x-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === 'org'
                  ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-lg shadow-purple-500/25'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <FiBriefcase className="w-4 h-4" />
              <span>Organization</span>
            </button>
            <button
              onClick={() => setActiveTab('personal')}
              className={`inline-flex items-center space-x-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === 'personal'
                  ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-lg shadow-purple-500/25'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <FiUser className="w-4 h-4" />
              <span>Personal</span>
            </button>
          </div>
        </div>

        {/* Personal Projects Notice */}
        <AnimatePresence mode="wait">
          {activeTab === 'personal' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-center mb-8"
            >
              <div className="inline-flex items-center space-x-2 px-5 py-3 rounded-lg bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-500/20">
                <span className="text-amber-600 dark:text-amber-400 text-sm font-medium">
                  This section is currently being curated. Additional personal projects and live deployments will be available shortly.
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Project Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover={{ scale: 1.03, y: -8 }}
                className="glass-card group cursor-pointer overflow-hidden"
              >
                {/* Project Image */}
                <div
                  className="relative h-48 overflow-hidden rounded-lg mb-4 cursor-zoom-in"
                  onClick={(e) => {
                    e.stopPropagation()
                    const src = project.images ? project.images[0] : project.image
                    setSelectedImage({ src, title: project.title, images: project.images })
                  }}
                >
                  {project.images ? (
                    <ImageCarousel
                      images={project.images}
                      title={project.title}
                      onImageClick={(src) => setSelectedImage({ src, title: project.title, images: project.images })}
                    />
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/400x300?text=${encodeURIComponent(project.title)}`
                      }}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4 space-x-2 pointer-events-none">
                    {project.github !== '#' && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors pointer-events-auto"
                      >
                        <FiGithub className="w-5 h-5 text-white" />
                      </a>
                    )}
                    {project.link !== '#' && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors pointer-events-auto"
                      >
                        <FiExternalLink className="w-5 h-5 text-white" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                {(project.link !== '#' || project.github !== '#') && (
                  <div className="flex items-center gap-3 pt-2 border-t border-gray-200 dark:border-white/10">
                    {project.link !== '#' && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-violet-600 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                      >
                        <FiExternalLink className="w-3.5 h-3.5" />
                        Live Demo
                      </a>
                    )}
                    {project.github !== '#' && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-white/10 rounded-full hover:bg-gray-200 dark:hover:bg-white/20 transition-all duration-300"
                      >
                        <FiGithub className="w-3.5 h-3.5" />
                        Source Code
                      </a>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 p-2 text-white hover:text-gray-300 transition-colors"
              >
                <FiX className="w-8 h-8" />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
              {selectedImage.images && (
                <div className="flex justify-center gap-2 mt-4">
                  {selectedImage.images.map((src, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage({ ...selectedImage, src })}
                      className={`w-16 h-12 rounded overflow-hidden border-2 transition-all ${
                        src === selectedImage.src
                          ? 'border-purple-500 scale-110'
                          : 'border-white/30 hover:border-white/60'
                      }`}
                    >
                      <img src={src} alt={`${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
              <p className="text-center text-white mt-4 text-lg font-medium">
                {selectedImage.title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
