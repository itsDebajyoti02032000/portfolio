import { ThemeProvider } from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Awards from './components/Awards'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticlesBackground from './components/ParticlesBackground'
import { useState, useEffect } from 'react'

function App() {
  const [showParticles, setShowParticles] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('particlesEnabled')
    if (saved !== null) {
      setShowParticles(JSON.parse(saved))
    }
  }, [])

  const toggleParticles = () => {
    const newValue = !showParticles
    setShowParticles(newValue)
    localStorage.setItem('particlesEnabled', JSON.stringify(newValue))
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen w-full relative bg-white dark:bg-[#0a0a1f] text-gray-900 dark:text-gray-100">
        {showParticles && <ParticlesBackground />}
        <Navbar onToggleParticles={toggleParticles} particlesEnabled={showParticles} />
        <main className="relative z-10 w-full">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Awards />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
