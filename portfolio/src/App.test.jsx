// Temporary test file to check if React is rendering
import { ThemeProvider } from './contexts/ThemeContext'

function TestApp() {
  return (
    <ThemeProvider>
      <div style={{ padding: '50px', backgroundColor: '#fff', color: '#000', minHeight: '100vh' }}>
        <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Test - React is Working!</h1>
        <p style={{ fontSize: '24px' }}>If you can see this, React is rendering correctly.</p>
        <p style={{ fontSize: '18px', marginTop: '20px' }}>Now let's check the full app...</p>
      </div>
    </ThemeProvider>
  )
}

export default TestApp

