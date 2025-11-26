import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  // Initialize theme - default to light for better visibility
  const getInitialTheme = () => {
    if (typeof window === 'undefined') return 'light'
    
    try {
      const savedTheme = localStorage.getItem('theme')
      if (savedTheme === 'dark' || savedTheme === 'light') {
        return savedTheme
      }
    } catch (e) {
      console.warn('Could not access localStorage:', e)
    }
    
    // Default to light theme for better initial visibility
    return 'light'
  }

  const [theme, setTheme] = useState(() => {
    const initialTheme = getInitialTheme()
    // Apply theme immediately
    if (typeof document !== 'undefined') {
      const html = document.documentElement
      if (initialTheme === 'dark') {
        html.classList.add('dark')
        html.style.backgroundColor = '#111827'
      } else {
        html.classList.remove('dark')
        html.style.backgroundColor = '#ffffff'
      }
    }
    return initialTheme
  })

  useEffect(() => {
    // Apply theme to document whenever it changes
    if (typeof document !== 'undefined') {
      const html = document.documentElement
      if (theme === 'dark') {
        html.classList.add('dark')
        html.style.backgroundColor = '#111827'
      } else {
        html.classList.remove('dark')
        html.style.backgroundColor = '#ffffff'
      }
      
      try {
        localStorage.setItem('theme', theme)
      } catch (e) {
        console.warn('Could not save theme to localStorage:', e)
      }
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

