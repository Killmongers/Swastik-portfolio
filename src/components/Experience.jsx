import React, { useState } from 'react';
import './Experience.css';

const ExperienceCard = ({ exp, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isCurrent = exp.duration.toLowerCase().includes('present');
  const MAX_VISIBLE = 4;
  const hasMore = exp.details.length > MAX_VISIBLE;
  const visibleDetails = isExpanded ? exp.details : exp.details.slice(0, MAX_VISIBLE);

  return (
    <div 
      className={`exp-card glass-effect animate-on-scroll ${isCurrent ? 'exp-current' : ''}`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      {isCurrent && (
        <div className="exp-live-badge">
          <span className="live-dot"></span>
          Live
        </div>
      )}
      
      <div className="exp-header">
        <h3 className="exp-role">{exp.role}</h3>
        <span className="exp-date">{exp.duration}</span>
      </div>
      
      <div className="exp-company">{exp.company}</div>
      <div className="exp-location">{exp.location}</div>
      
      <div className="exp-divider"></div>
      
      <div className={`exp-details-wrapper ${isExpanded ? 'expanded' : ''}`}>
        <ul className="exp-details">
          {visibleDetails.map((detail, idx) => (
            <li key={idx}>{detail}</li>
          ))}
        </ul>
      </div>

      {hasMore && (
        <button 
          className="exp-toggle-btn" 
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Show Less' : `+ Show ${exp.details.length - MAX_VISIBLE} More`}
        </button>
      )}
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Software Engineer',
      company: 'Current Role',
      duration: 'Sep 2025 - Present',
      location: 'Ahmedabad, Gujarat',
      details: [
        'Built LeadBot — a WhatsApp lead generation agent using LangChain JS with RAG-based similarity search over client documents; auto-persists structured leads to PostgreSQL with LLM guardrails and session lifecycle management.',
        'Developed a multi-turn hotel booking WhatsApp bot integrated with Oracle Hospitality (OHIP) API for live inventory management and secure reservation processing.',
        'Built a full-stack clinic management platform (React + Node.js + Prisma + PostgreSQL) with Google Vertex AI-assisted medical image analysis, GCS bucket storage, and time-limited signed URL access.',
        'Integrated Google ADK with ChatGPT and Gemini across multiple client projects; implemented LLM guardrails for safe, on-topic responses and idle session expiry.',
        'Created an AI-powered bank document parser using OCR and Gemini APIs to extract structured KYC datasets from bank statements, Aadhaar, and PAN cards.',
        'Built internal Discord productivity bot for daily standup reminders and automated end-of-day update tracking.',
        'Designed a prompt-to-PDF dynamic document layout engine using Next.js and Gemini API.'
      ]
    },
    {
      id: 2,
      role: 'Python Developer',
      company: 'Travel Tech Startup',
      duration: 'Dec 2024 - Aug 2025',
      location: 'Vadodara, Gujarat',
      details: [
        'Built a Core PHP travel booking platform with third-party flight and train API integrations; developed a Calendar API for real-time pricing and dynamic date pickers.',
        'Developed a multi-turn WhatsApp chatbot using Flask and Python with in-memory session management for conversation context retention.',
        'Deployed Node.js backend on AWS EC2 with Nginx reverse proxy; configured CNAME records and provisioned SSL certificates.',
        'Resolved critical cross-origin request handling (CORS) issues across microservice environments.'
      ]
    },
    {
      id: 3,
      role: 'Summer Intern',
      company: 'EdTech Platform',
      duration: 'May 2024 - Jun 2024',
      location: 'Vadodara, Gujarat',
      details: [
        'Completed structured training in Data Structures & Algorithms, core programming fundamentals, and database basics.'
      ]
    }
  ];

  return (
    <section id="experience" className="section-container">
      <h2 className="section-title">Professional Journey</h2>
      
      <div className="exp-stack">
        {experiences.map((exp, index) => (
          <ExperienceCard key={exp.id} exp={exp} index={index} />
        ))}
      </div>
      
      <div style={{ marginTop: '4rem', textAlign: 'center' }} className="animate-on-scroll">
        <a href="#contact" className="btn btn-primary glow-btn">Let's Talk</a>
      </div>
    </section>
  );
};

export default Experience;