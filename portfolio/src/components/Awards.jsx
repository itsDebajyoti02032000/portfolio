import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiAward, FiCalendar, FiX, FiDownload } from 'react-icons/fi'
import { awards } from '../config/portfolio'

const Awards = () => {
  const [selectedImage, setSelectedImage] = useState(null)

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
    <section id="awards" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-gradient">Rewards & Recognition</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Milestones and achievements along my professional journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awards.map((award) => (
              <motion.div
                key={award.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="glass-card group relative overflow-hidden"
              >
                {/* Decorative gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500"></div>

                <div className="flex flex-col h-full">
                  {/* Award Icon & Date */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500">
                        <FiAward className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                          {award.title}
                        </h3>
                        <p className="text-sm text-cyan-600 dark:text-cyan-400 font-medium">
                          {award.organization}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Date */}
                  <div className="flex items-center space-x-2 mb-4">
                    <FiCalendar className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{award.date}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5 flex-1">
                    {award.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3">
                    {award.image && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedImage({ src: award.image, title: award.title })}
                        className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-sm font-medium hover:bg-cyan-50 dark:hover:bg-cyan-500/10 transition-colors"
                      >
                        <span>View Award</span>
                      </motion.button>
                    )}
                    {award.certificate && (
                      <motion.a
                        href={award.certificate}
                        download
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-purple-500/30 text-purple-600 dark:text-purple-400 text-sm font-medium hover:bg-purple-50 dark:hover:bg-purple-500/10 transition-colors"
                      >
                        <FiDownload className="w-4 h-4" />
                        <span>Certificate</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
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
              className="relative max-w-2xl max-h-[90vh] w-full"
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

export default Awards
