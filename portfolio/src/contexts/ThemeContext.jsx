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
  const getInitialTheme = () => {
    if (typeof window === 'undefined') return 'dark'

    try {
      const themeVersion = localStorage.getItem('theme-version')
      if (themeVersion !== '2') {
        localStorage.setItem('theme', 'dark')
        localStorage.setItem('theme-version', '2')
        return 'dark'
      }
      const savedTheme = localStorage.getItem('theme')
      if (savedTheme === 'dark' || savedTheme === 'light') {
        return savedTheme
      }
    } catch (e) {
      console.warn('Could not access localStorage:', e)
    }

    return 'dark'
  }

  const [theme, setTheme] = useState(() => {
    const initialTheme = getInitialTheme()
    if (typeof document !== 'undefined') {
      const html = document.documentElement
      if (initialTheme === 'dark') {
        html.classList.add('dark')
        html.style.backgroundColor = '#0a0a1f'
      } else {
        html.classList.remove('dark')
        html.style.backgroundColor = '#ffffff'
      }
    }
    return initialTheme
  })

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const html = document.documentElement
      if (theme === 'dark') {
        html.classList.add('dark')
        html.style.backgroundColor = '#0a0a1f'
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

