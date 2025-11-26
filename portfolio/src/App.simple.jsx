// SIMPLIFIED VERSION FOR TESTING - Uncomment this in main.jsx if needed
import { ThemeProvider } from './contexts/ThemeContext'

function SimpleApp() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#ffffff', 
      color: '#000000',
      padding: '50px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Portfolio Test</h1>
      <p style={{ fontSize: '24px' }}>If you see this, React is working!</p>
      <p style={{ fontSize: '18px', marginTop: '20px' }}>
        Name: Debajyoti Das<br/>
        Profession: AI & Software Engineer<br/>
        Location: India
      </p>
      <ThemeProvider>
        <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '10px' }}>
          <p>Theme Provider is working!</p>
        </div>
      </ThemeProvider>
    </div>
  )
}

export default SimpleApp

