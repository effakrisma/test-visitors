import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/home' 
import Contact from './pages/contact'

export default function App() {
  return (
    <>
      <nav style={{ padding: 16 }}>
        <Link to="/" style={{ marginRight: 12 }}>Home</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}