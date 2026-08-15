import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiLinkedin, FiGithub, FiSend, FiPhone } from 'react-icons/fi'
import { personalInfo, emailConfig } from '../config/portfolio'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      if (emailConfig.serviceId && emailConfig.templateId && emailConfig.publicKey &&
          emailConfig.serviceId !== 'your_service_id') {
        await emailjs.send(
          emailConfig.serviceId,
          emailConfig.templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            message: `From: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
            to_email: personalInfo.email,
          },
          emailConfig.publicKey
        )
        setSubmitStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' })
        setFormData({ name: '', email: '', message: '' })
      } else {
        const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`)
        const body = encodeURIComponent(`Hi Debajyoti,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)
        const mailtoLink = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`

        const link = document.createElement('a')
        link.href = mailtoLink
        link.target = '_blank'
        link.rel = 'noopener noreferrer'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)

        setSubmitStatus({ type: 'success', message: 'Your email client should open now. Please send the message from there!' })
        setFormData({ name: '', email: '', message: '' })
      }
    } catch (error) {
      console.error('Error sending email:', error)
      const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`)
      const body = encodeURIComponent(`Hi Debajyoti,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)
      const mailtoLink = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`

      const link = document.createElement('a')
      link.href = mailtoLink
      link.target = '_blank'
      link.rel = 'noopener noreferrer'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      setSubmitStatus({ type: 'success', message: 'Your email client should open now. Please send the message from there!' })
      setFormData({ name: '', email: '', message: '' })
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  const socialLinks = [
    { icon: FiMail, href: `mailto:${personalInfo.email}`, label: personalInfo.email },
    { icon: FiPhone, href: `tel:${personalInfo.phone}`, label: personalInfo.phone },
    { icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: FiGithub, href: personalInfo.github, label: 'GitHub' },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-[#0f0f2e]/50">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Have a project in mind? Let's collaborate and build something amazing together!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-[#0f0f2e]/80 border border-gray-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors text-gray-900 dark:text-gray-100"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-[#0f0f2e]/80 border border-gray-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors text-gray-900 dark:text-gray-100"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              {submitStatus && (
                <div
                  className={`p-3 rounded-lg ${
                    submitStatus.type === 'success'
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
                      : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white rounded-lg font-semibold shadow-lg shadow-purple-500/25 hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <FiSend className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-card">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
                Let's Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, x: 5 }}
                    className="flex items-center space-x-4 p-4 glass hover:bg-white/20 dark:hover:bg-gray-700/20 rounded-lg transition-colors group"
                  >
                    <div className="p-3 bg-gradient-to-r from-purple-600 to-violet-600 rounded-lg group-hover:scale-110 transition-transform">
                      <social.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-medium text-gray-700 dark:text-gray-300">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

