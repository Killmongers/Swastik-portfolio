import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Simple scroll spy behavior
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

  return (
    <>
      {/* Top Corners Framing */}
      <div className="top-edge-framing">
        <div className="top-brand text-xl font-bold">
          Swastik<span className="brand-accent">.dev</span>
        </div>
        <div className="top-status">
          <span className="status-dot"></span>
          <span className="status-text hidden-mobile">Available for work</span>
        </div>
      </div>

      <div className={`dock-container ${scrolled ? 'dock-scrolled' : ''}`}>
      <nav className="dock-nav">
        
        {/* Abstract Logo */}
        <a href="#home" className="dock-logo" title="Home">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="4 17 10 11 4 5"></polyline>
            <line x1="12" y1="19" x2="20" y2="19"></line>
          </svg>
        </a>

        {/* Separator */}
        <div className="dock-separator"></div>

        {/* Dock Items */}
        <div className="dock-links">
          <a href="#about" className={`dock-item ${activeSection === 'about' ? 'active' : ''}`} title="About">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
            <span className="dock-tooltip">About</span>
          </a>
          
          <a href="#experience" className={`dock-item ${activeSection === 'experience' ? 'active' : ''}`} title="Experience">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
            <span className="dock-tooltip">Journey</span>
          </a>
          
          <a href="#skills" className={`dock-item ${activeSection === 'skills' ? 'active' : ''}`} title="Skills">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
            <span className="dock-tooltip">Stack</span>
          </a>

          <a href="#projects" className={`dock-item ${activeSection === 'projects' ? 'active' : ''}`} title="Projects">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            <span className="dock-tooltip">Projects</span>
          </a>
        </div>

        {/* Separator */}
        <div className="dock-separator"></div>

        {/* CTA */}
        <a href="#contact" className="dock-cta">
          Connect
        </a>

      </nav>
    </div>
    </>
  );
};

export default Navbar;
