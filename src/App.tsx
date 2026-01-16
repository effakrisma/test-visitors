import { Routes, Route, Link, Navigate } from 'react-router-dom'
import Home from './pages/home'
import Contact from './pages/contact'

export default function App() {
  return (
    <>
      <nav style={{ padding: 16 }}>
        <Link to="/">Home</Link> |{' '}
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />

        {/* fallback agar tidak blank */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}