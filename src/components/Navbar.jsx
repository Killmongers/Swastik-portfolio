import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'projects', 'experience', 'skills', 'contact'];
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
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-inner">
        {/* Brand */}
        <a href="#home" className="navbar-brand">
          <div className="brand-logo">SM</div>
          <span className="brand-name">Swastik</span>
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

        {/* Right CTA */}
        <div className="navbar-right">
          <a href="#contact" className="btn btn-primary nav-cta">
            Let's Talk
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
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
          Let's Talk →
        </a>
      </div>
    </header>
  );
};

export default Navbar;
