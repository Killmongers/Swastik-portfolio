import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section-container contact-section">
      <h2 className="section-title">Get In Touch</h2>

      <div className="contact-card glass-effect animate-on-scroll">
        <div className="contact-header">
          <h3>Let's build something great together</h3>
          <p>
            I'm currently open for new opportunities to work on backend systems, AI integrations,
            and scalable cloud applications. Don't hesitate to reach out directly through any of the channels below!
          </p>
        </div>

        <div className="contact-methods">
          <a href="https://wa.me/+919327973365" target="_blank" rel="noopener noreferrer" className="contact-method whatsapp-method">
            <span className="icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </span>
            <div className="method-text">
              <span className="method-label">Chat with me</span>
              <span className="method-value">WhatsApp</span>
            </div>
          </a>

          <a href="tel:+919327973365" className="contact-method call-method">
            <span className="icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </span>
            <div className="method-text">
              <span className="method-label">Give me a ring</span>
              <span className="method-value">Call Me</span>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/swastik-software-developer//in/swastik-python-dev/" target="_blank" rel="noopener noreferrer" className="contact-method linkedin-method">
            <span className="icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </span>
            <div className="method-text">
              <span className="method-label">Connect professionally</span>
              <span className="method-value">LinkedIn</span>
            </div>
          </a>

          <a href="https://swastikmoolya.42web.io/" target="_blank" rel="noopener noreferrer" className="contact-method email-method">
            <span className="icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </span>
            <div className="method-text">
              <span className="method-label">View more work</span>
              <span className="method-value">My Portfolio</span>
            </div>
          </a>

          <a href="https://www.youtube.com/@SwastikDev.ai429" target="_blank" rel="noopener noreferrer" className="contact-method youtube-method">
            <span className="icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </span>
            <div className="method-text">
              <span className="method-label">Watch my tutorials</span>
              <span className="method-value">YouTube</span>
            </div>
          </a>
        </div>
      </div>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Swastik Moolya. Built with React & Vite.</p>
      </footer>
    </section>
  );
};

export default Contact;
