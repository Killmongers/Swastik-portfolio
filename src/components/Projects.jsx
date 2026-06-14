import React, { useRef, useEffect } from 'react';
import './Projects.css';

const Projects = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    // Attempt to set playback rate to 2x (fast) by polling for the first few seconds
    const interval = setInterval(() => {
      if (iframeRef.current && iframeRef.current.contentWindow) {
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({ event: 'command', func: 'setPlaybackRate', args: [2.0] }),
          '*'
        );
      }
    }, 1000);
    
    // Stop trying after 5 seconds
    setTimeout(() => clearInterval(interval), 5000);
    
    return () => clearInterval(interval);
  }, []);

  const projects = [
    {
      title: 'Automated Customer Support Agent',
      description: 'Replaced a human support agent for a skincare brand — customers get instant expert advice 24/7 on WhatsApp. Powered by a custom conversational AI brain for accurate product recommendations.',
      tags: ['Rust', 'Axum', 'Ollama', 'Llama 3', 'OpenWA'],
      youtubeId: 'ePu4Ss0ge8o',
      github: 'https://github.com/Killmongers/whatsapp-skincare-bot'
    },
    {
      title: 'Automated Lead Capture System',
      description: 'Eliminated manual lead qualification by deploying an automated system that securely captures and stores structured client data via WhatsApp, integrating seamlessly with existing business documentation.',
      tags: ['LangChain JS', 'Node.js', 'PostgreSQL', 'RAG', 'WhatsApp API']
    },
    {
      title: 'Secure Healthcare Management Platform',
      description: 'Streamlined clinic operations and secured patient data with an end-to-end platform. Features automated AI-assisted image analysis to speed up medical evaluations and reporting.',
      tags: ['React.js', 'Node.js', 'Prisma', 'Google Vertex AI', 'GCS', 'PostgreSQL']
    },
    {
      title: 'KYC & Document Extraction Engine',
      description: 'Reduced manual document processing time by extracting and parsing high-fidelity structured datasets from bank statements and IDs with advanced OCR and AI.',
      tags: ['Python', 'FastAPI', 'LLM Prompt Engineering', 'OCR', 'KYC Automation']
    },
    {
      title: 'Conversational Booking Assistant',
      description: 'Increased reservation efficiency by allowing users to complete end-to-end hotel and travel bookings directly within active WhatsApp threads, connected to live inventory APIs.',
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
              ref={iframeRef}
              src={`https://www.youtube.com/embed/${featuredProject.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${featuredProject.youtubeId}&controls=0&modestbranding=1&rel=0&disablekb=1&enablejsapi=1`}
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

      <div style={{ marginTop: '4rem', textAlign: 'center' }} className="animate-on-scroll">
        <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Need something similar built?</h3>
        <a href="#contact" className="btn btn-primary glow-btn">Let's Talk</a>
      </div>
    </section>
  );
};

export default Projects;
