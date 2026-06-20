import React from 'react';
import './Hero.css';
import swastikImg from '../assets/Swastik.png';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">

        {/* ── Left: Typography ── */}
        <div className="hero-content-left animate-on-scroll">
          <div className="hero-greeting">
            <span className="handwriting">Hello, I'm</span>
            <svg width="60" height="25" viewBox="0 0 60 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="greeting-arrow">
              <path d="M5 20 Q 25 5 55 15 M 55 15 L 48 8 M 55 15 L 45 20" stroke="var(--text-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <h1 className="hero-name">Swastik Moolya</h1>

          <div className="hero-subtitle">COMPUTER ENGINEER</div>

          <h2 className="hero-role">
            Full Stack Developer & AI Builder
          </h2>

          <p className="hero-tagline">
            I build scalable web applications, AI-powered solutions and digital products that solve real-world problems.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Hire Me
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="19" x2="19" y2="5"></line>
                <polyline points="9 5 19 5 19 15"></polyline>
              </svg>
            </a>
            <a href="#projects" className="btn btn-outline">
              View My Work
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-icon-wrapper">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span className="stat-number">1+</span>
              </div>
              <span className="stat-label">Years of Experience</span>
            </div>

            <div className="stat-divider"></div>

            <div className="stat-item">
              <div className="stat-icon-wrapper">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
                <span className="stat-number">5+</span>
              </div>
              <span className="stat-label">Projects Completed</span>
            </div>

            <div className="stat-divider"></div>

            <div className="stat-item">
              <div className="stat-icon-wrapper">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
                <span className="stat-number">10+</span>
              </div>
              <span className="stat-label">Systems Shipped</span>
            </div>

            <div className="stat-divider"></div>

            <div className="stat-item">
              <div className="stat-icon-wrapper">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                <span className="stat-number">100%</span>
              </div>
              <span className="stat-label">Client Satisfaction</span>
            </div>
          </div>
        </div>

        {/* ── Right: Visual ── */}
        <div className="hero-visual animate-on-scroll" style={{ transitionDelay: '0.2s' }}>

          <div className="visual-backgrounds">
            <div className="bg-shape bg-shape-orange"></div>
            <div className="bg-shape bg-shape-teal"></div>
            <div className="bg-pattern"></div>
          </div>

          <img src={swastikImg} alt="Swastik Moolya" className="hero-image" />

          {/* Floating Badge Top */}
          <div className="floating-badge badge-top glass-card">
            <span className="status-dot"></span>
            <span className="badge-text">Available for<br />Freelance & Full-time</span>
          </div>

          {/* Floating Code Snippet */}
          <div className="floating-code-card">
            <div className="code-header">
              <span className="code-icon">&lt;/&gt;</span>
              <span className="code-title">I love turning ideas into<br />scalable code.</span>
            </div>
            <div className="code-footer">
              <span className="code-comment">clean code, smart solutions.</span>
              <svg width="40" height="6" viewBox="0 0 40 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5C3 1 7 1 9 5C11 1 15 1 17 5C19 1 23 1 25 5C27 1 31 1 33 5C35 1 39 1 40 5" stroke="var(--accent-primary)" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
