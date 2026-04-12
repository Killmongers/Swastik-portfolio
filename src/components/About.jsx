import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section-container about-section">
      <h2 className="section-title">About Me</h2>
      
      <div className="about-content">
        <div className="about-text glass-effect animate-on-scroll">
          <p>
            I am a Software Engineer based in Ahmedabad, Gujarat, passionate about building robust backend systems, 
            intelligent AI integrations, and cloud-native applications. With a strong foundation in Database Management 
            and server hardening, I enjoy tackling complex deployment and integration challenges.
          </p>
          <p>
            My recent wok involves architecting scalable AI chatbot solutions using the Google Gemini API, 
            optimizing RESTful APIs in Node.js and Python, and streamlining full-stack AWS Lightsail deployments 
            for live applications.
          </p>
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">2+</span>
              <span className="stat-text">Years Dev Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-text">Cloud Deployments</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-text">APIs Integrated</span>
            </div>
          </div>
        </div>
        
        <div className="about-education glass-effect animate-on-scroll" style={{ animationDelay: '0.2s' }}>
          <h3>Education & Certifications</h3>
          <ul className="edu-list">
            <li>
              <strong>B.Tech in Computer Science & Engineering</strong>
              <span>Parul Institute of Engineering & Technology, Vadodara (2022 – 2025)</span>
            </li>
            <li>
              <strong>Diploma in Computer Engineering</strong>
              <span>LJ University, Ahmedabad (2019 – 2022)</span>
            </li>
          </ul>
          
          <h4 className="cert-heading">Certifications</h4>
          <div className="cert-tags">
            <span className="cert-tag">AWS Cloud Quest: Cloud Practitioner</span>
            <span className="cert-tag">Azure DevOps (Infosys)</span>
            <span className="cert-tag">Cisco Data Analytics</span>
            <span className="cert-tag">Python & Flask Complete Course</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
