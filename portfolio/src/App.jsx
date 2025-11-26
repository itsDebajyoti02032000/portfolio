import { ThemeProvider } from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticlesBackground from './components/ParticlesBackground'
import { useState, useEffect } from 'react'

function App() {
  const [showParticles, setShowParticles] = useState(false) // Disable particles initially to reduce complexity

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
      <div 
        style={{ 
          minHeight: '100vh',
          width: '100%',
          backgroundColor: '#ffffff',
          color: '#000000',
          position: 'relative',
          display: 'block'
        }}
        className="bg-white dark:bg-gray-900"
      >
        {showParticles && <ParticlesBackground />}
        <Navbar onToggleParticles={toggleParticles} particlesEnabled={showParticles} />
        <main style={{ position: 'relative', zIndex: 10, width: '100%' }}>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
