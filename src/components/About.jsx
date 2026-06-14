import React from 'react';
import './About.css';
import swastikImg from '../assets/swastik.jpg';

const About = () => {
  return (
    <section id="about" className="section-container about-section">
      <h2 className="section-title">About Me</h2>
      
      <div className="about-content">
        {/* Left Column: Visual Profile Display */}
        <div className="profile-container animate-on-scroll">
          <div className="profile-card glass-effect hover-float">
            <div className="avatar-wrapper">
              <div className="rotating-glow-ring"></div>
              <img src={swastikImg} alt="Swastik Moolya" className="avatar-img" />
            </div>
            
            <div className="profile-badge">
              <span className="badge-dot"></span>
              <span className="badge-label">Shipping Production AI Systems</span>
            </div>

            <div className="profile-meta">
              <h3>Swastik Moolya</h3>
              <p>Full-Stack & AI Engineer</p>
              <div className="meta-info">
                <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"/><circle cx="12" cy="10" r="3"/></svg> Ahmedabad, Gujarat</span>
                <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg> Currently Employed · Open to Opportunities</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Bio Details, Stats, and Education */}
        <div className="about-details">
          {/* Card 1: Bio Summary & Stats */}
          <div className="about-text glass-effect animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
            <h3>Professional Profile</h3>
            <p>
              I engineer production-grade AI systems and robust backends that solve real business bottlenecks. From deploying conversational agents to architecting secure medical platforms, my focus is always on delivering measurable value.
            </p>
            <p>
              Whether it's automating manual operations, reducing overhead, or scaling infrastructure to meet user demand, I take projects from zero to production across the entire stack.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">1.5+</span>
                <span className="stat-text">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-text">Cloud Deploys</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">25+</span>
                <span className="stat-text">APIs Integrated</span>
              </div>
            </div>
            
            <div style={{ marginTop: '2rem' }}>
              <a href="#contact" className="btn btn-primary glow-btn">Let's Talk</a>
            </div>
          </div>
          
          {/* Card 2: Education & Credentials */}
          <div className="about-education glass-effect animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
            <h3>Education & Credentials</h3>
            <ul className="edu-list">
              <li>
                <strong>Bachelor of Technology in Computer Science & Engineering</strong>
                <span className="edu-meta">Parul Institute of Engineering & Technology, Vadodara (2022 – 2025)</span>
              </li>
              <li>
                <strong>Diploma in Computer Engineering</strong>
                <span className="edu-meta">LJ University, Ahmedabad (2019 – 2022)</span>
              </li>
            </ul>
            
            <h4 className="cert-heading">Professional Certifications</h4>
            <div className="cert-tags">
              <span className="cert-tag">AWS Cloud Quest: Cloud Practitioner</span>
              <span className="cert-tag">Azure DevOps (Microsoft)</span>
              <span className="cert-tag">Python & Flask Complete Course</span>
              <span className="cert-tag">Cisco Cybersecurity</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
