import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// Replaces the header HTML + these lines from script.js:
//   menu.onclick = () => { menu.classList.toggle('fa-times'); navbar.classList.toggle('active') }
//   window.onscroll = () => { menu.classList.remove('fa-times'); navbar.classList.remove('active') }

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // Close navbar on scroll — same as window.onscroll in script.js
  useEffect(() => {
    const closeOnScroll = () => setIsOpen(false)
    window.addEventListener('scroll', closeOnScroll)
    return () => window.removeEventListener('scroll', closeOnScroll)
  }, [])

  return (
    <header>
      <Link to="/" className="logo">Smart<span>Study</span></Link>

      {/* icon switches between fa-bars and fa-times based on isOpen */}
      <div
        id="menu"
        className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}
        onClick={() => setIsOpen(prev => !prev)}
      ></div>

      {/* "active" class is added when isOpen is true */}
      <nav className={`navbar ${isOpen ? 'active' : ''}`}>
        <Link to="/"        onClick={() => setIsOpen(false)}>home</Link>
        <Link to="/course"  onClick={() => setIsOpen(false)}>course</Link>
        <Link to="/teacher" onClick={() => setIsOpen(false)}>teacher</Link>
        <Link to="/price"   onClick={() => setIsOpen(false)}>price</Link>
        <Link to="/review"  onClick={() => setIsOpen(false)}>review</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>contact</Link>
      </nav>
    </header>
  )
}

export default Navbar
