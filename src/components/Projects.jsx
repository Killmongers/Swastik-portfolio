import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'WhatsApp AI Skin Care Bot',
      description: 'An AI-powered WhatsApp chatbot built in Rust. Leverages Ollama (llama3) as the conversational brain with a custom system prompt to provide expert skin care routines and advice. Integrates seamlessly with OpenWA via webhooks for instant WhatsApp messaging.',
      tags: ['Rust', 'Axum', 'Ollama', 'Llama 3', 'OpenWA'],
      youtubeId: 'ePu4Ss0ge8o',
      github: 'https://github.com/Killmongers/whatsapp-skincare-bot'
    },
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

  const featuredProject = projects[0];
  const otherProjects = projects.slice(1);

  return (
    <section id="projects" className="section-container projects-section">
      <h2 className="section-title">Spotlight Project</h2>
      
      <div className="featured-project glass-effect animate-on-scroll">
        <div className="browser-mockup">
          <div className="browser-header">
            <div className="browser-dots">
              <span className="dot close"></span>
              <span className="dot minimize"></span>
              <span className="dot expand"></span>
            </div>
            <div className="browser-url">whatsapp-ai-bot.local</div>
          </div>
          <div className="featured-video-container">
            <iframe
              src={`https://www.youtube.com/embed/${featuredProject.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${featuredProject.youtubeId}&controls=0&modestbranding=1&rel=0&disablekb=1`}
              title="WhatsApp AI Skin Care Bot Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="featured-content">
          <h3 className="project-title" style={{ fontSize: '2rem', marginBottom: '1rem', background: 'linear-gradient(90deg, #fff, var(--accent-primary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            {featuredProject.title}
          </h3>
          <p className="project-description" style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            {featuredProject.description}
          </p>
          <div className="project-tags" style={{ marginBottom: '2rem' }}>
            {featuredProject.tags.map((tag, idx) => (
              <span key={idx} className="project-tag spotlight-tag">{tag}</span>
            ))}
          </div>
          {featuredProject.github && (
            <a href={featuredProject.github} target="_blank" rel="noreferrer" className="project-link github-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: "10px"}}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              View Source Code
            </a>
          )}
        </div>
      </div>

      <h2 className="section-title" style={{ marginTop: '5rem' }}>Other Work</h2>

      <div className="projects-grid">
        {otherProjects.map((project, index) => (
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
