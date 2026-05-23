import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Software Engineer',
      company: 'Asambhav Solutions',
      duration: 'Sep 2025 - Present',
      location: 'Ahmedabad, Gujarat',
      details: [
        'Built AutoLead — a WhatsApp lead generation agent using LangChain JS with RAG-based similarity search over client documents; automatically extracts contact details and captures leads directly into PostgreSQL.',
        'Developed a multi-turn hotel booking WhatsApp bot integrated with Oracle Hospitality (OHIP) API for live, real-time inventory management and secure reservation processing.',
        'Built full-stack IVF clinic management platform (React + Node.js + Prisma + PostgreSQL) with Google Vertex AI-assisted medical image analysis, GCS bucket storage, and secure signed URL generation.',
        'Integrated Google ADK with ChatGPT and Gemini wrappers; implemented core LLM guardrails to enforce secure, safe, on-topic responses, and added idle session conversation expiry.',
        'Created an AI-powered bank document parser utilizing OCR and Gemini APIs to extract structured KYC datasets from bank statements, Aadhaar, and PAN cards.',
        'Developed internal Discord productivity bot for automated standup reminders and missing update notification flags.',
        'Designed prompt-to-PDF dynamic document layout engine using Next.js and Gemini API integrations.'
      ]
    },
    {
      id: 2,
      role: 'Python Developer',
      company: 'FlyAnyTrip.com',
      duration: 'Dec 2024 - Aug 2025',
      location: 'Vadodara, Gujarat',
      details: [
        'Developed a core travel booking platform in Core PHP integrated with third-party flight and train APIs; built a Calendar API for real-time pricing and dynamic date pickers.',
        'Built conversational multi-turn WhatsApp chatbot using Flask and Python with in-memory session stores for context retention.',
        'Managed production deployments of Node.js servers on AWS EC2 behind Nginx reverse proxies, managing CNAME records and Let\'s Encrypt SSL provisions.',
        'Resolved critical cross-origin request handling (CORS) bugs across microservice environments.'
      ]
    },
    {
      id: 3,
      role: 'Summer Intern',
      company: 'byteXL, Parul University',
      duration: 'May 2024 - June 2024',
      location: 'Vadodara, Gujarat',
      details: [
        'Created custom Python automation scripts, scrapers, and REST API endpoints connected with frontend client interfaces.'
      ]
    }
  ];

  return (
    <section id="experience" className="section-container">
      <h2 className="section-title">Professional Journey</h2>
      
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="timeline-item animate-on-scroll" style={{ transitionDelay: `${index * 0.15}s` }}>
            <div className="timeline-dot"></div>
            <div className="timeline-content glass-effect">
              <div className="timeline-header">
                <h3>{exp.role} <span>@ {exp.company}</span></h3>
                <span className="timeline-date">{exp.duration}</span>
              </div>
              <span className="timeline-location">{exp.location}</span>
              <ul className="timeline-details">
                {exp.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
