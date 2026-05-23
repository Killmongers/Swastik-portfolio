import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'AutoLead WhatsApp Chatbot',
      description: 'Automated lead capture system utilizing WhatsApp API and LangChain JS agents. Operates via RAG similarity search over business documentation to deliver context-aware, secure replies. Implemented strict safety guardrails and idle session lifecycle enforcers, persisting structured leads directly to a PostgreSQL database.',
      tags: ['LangChain JS', 'Node.js', 'PostgreSQL', 'RAG', 'WhatsApp API']
    },
    {
      title: 'IVF Clinic Management Platform',
      description: 'A full-stack medical platform featuring secure JWT role authorization and SendGrid notifications. Integrates AI-assisted IVF image analysis powered by Google Vertex AI. Employs Prisma and GCS bucket structures for secure file hosting, generating time-limited signed URLs to protect sensitive patient documents.',
      tags: ['React.js', 'Node.js', 'Prisma', 'Google Vertex AI', 'GCS', 'PostgreSQL']
    },
    {
      title: 'AI Bank Document Analyzer',
      description: 'KYC automation backend designed to extract and parse high-fidelity structured datasets from bank statements, Aadhaar cards, and PAN cards. Utilizes advanced OCR utilities and customized LLM prompts to analyze document authentications efficiently.',
      tags: ['Python', 'FastAPI', 'LLM Prompt Engineering', 'OCR', 'KYC Automation']
    },
    {
      title: 'Hotel Booking WhatsApp Bot',
      description: 'Conversational booking assistant integrated directly with Oracle Hospitality (OHIP) REST APIs. Retrieves live train/hotel listings, tracks real-time inventory management, and handles complete end-to-end reservation processing within active WhatsApp threads.',
      tags: ['LangChain JS', 'Node.js', 'Oracle OHIP API', 'Conversational AI']
    }
  ];

  return (
    <section id="projects" className="section-container projects-section">
      <h2 className="section-title">Featured Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card glass-effect animate-on-scroll" style={{ transitionDelay: `${index * 0.1}s` }}>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
