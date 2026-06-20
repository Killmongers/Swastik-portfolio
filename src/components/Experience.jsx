import React from 'react';
import './Experience.css';

const ExperienceCard = ({ exp, index }) => {
  const isCurrent = exp.duration.toLowerCase().includes('present');

  return (
    <div 
      className={`exp-card animate-on-scroll ${isCurrent ? 'exp-current' : ''}`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      <div className="exp-left">
        <div className="exp-company-logo">
          {exp.company.charAt(0)}
        </div>
        <div className="exp-company-info">
          <h3 className="exp-company-name">{exp.company}</h3>
          <h4 className="exp-role">{exp.role}</h4>
          <span className="exp-duration">{exp.duration}</span>
        </div>
      </div>
      
      <div className="exp-right">
        <ul className="exp-details">
          {exp.details.map((detail, idx) => (
            <li key={idx}>
              <span className="bullet-point"></span>
              <p>{detail}</p>
            </li>
          ))}
        </ul>
      </div>
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
        'Built LeadBot — a WhatsApp lead generation agent using LangChain JS with RAG-based similarity search over client documents; auto-persists structured leads to PostgreSQL.',
        'Developed a multi-turn hotel booking WhatsApp bot integrated with Oracle Hospitality (OHIP) API for live inventory management.',
        'Built a full-stack clinic management platform with Google Vertex AI-assisted medical image analysis, GCS bucket storage, and time-limited signed URL access.',
        'Integrated Google ADK with ChatGPT and Gemini across multiple client projects; implemented LLM guardrails for safe, on-topic responses.'
      ]
    },
    {
      id: 2,
      role: 'Python Developer',
      company: 'Travel Tech Startup',
      duration: 'Dec 2024 - Aug 2025',
      location: 'Vadodara, Gujarat',
      details: [
        'Built a Core PHP travel booking platform with third-party flight and train API integrations; developed a Calendar API for real-time pricing.',
        'Developed a multi-turn WhatsApp chatbot using Flask and Python with in-memory session management for conversation context retention.',
        'Deployed Node.js backend on AWS EC2 with Nginx reverse proxy; configured CNAME records and provisioned SSL certificates.'
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
    <section id="experience" className="section-container experience-section">
      <div className="section-header">
        <div className="section-dot"></div>
        <h2 className="section-title">Work Experience</h2>
      </div>
      
      <div className="exp-list">
        {experiences.map((exp, index) => (
          <ExperienceCard key={exp.id} exp={exp} index={index} />
        ))}
      </div>
      
    </section>
  );
};

export default Experience;