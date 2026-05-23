import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Stack' },
    { id: 'projects', label: 'Projects' },
  ];

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-inner">
        {/* Brand */}
        <a href="#home" className="navbar-brand">
          Swastik<span className="brand-accent">.dev</span>
        </a>

        {/* Desktop Links */}
        <nav className="navbar-links">
          {navLinks.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`nav-link ${activeSection === id ? 'active' : ''}`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right — status + CTA */}
        <div className="navbar-right">
          <div className="status-pill">
            <span className="status-dot"></span>
            <span className="status-text">Available</span>
          </div>
          <a href="#contact" className="nav-cta">
            Hire Me
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div className={`mobile-menu ${menuOpen ? 'mobile-menu-open' : ''}`}>
        {navLinks.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`mobile-nav-link ${activeSection === id ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </a>
        ))}
        <a href="#contact" className="mobile-nav-cta" onClick={() => setMenuOpen(false)}>
          Hire Me →
        </a>
      </div>
    </header>
  );
};

export default Navbar;
