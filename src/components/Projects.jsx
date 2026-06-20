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
      category: 'AI / WhatsApp',
      description: 'Replaced a human support agent for a skincare brand — customers get instant expert advice 24/7 on WhatsApp. Powered by a custom conversational AI brain.',
      tags: ['Rust', 'Axum', 'Ollama', 'Llama 3', 'OpenWA'],
      youtubeId: 'ePu4Ss0ge8o',
      github: 'https://github.com/Killmongers/whatsapp-skincare-bot',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Automated Lead Capture System',
      category: 'CRM Automation',
      description: 'Eliminated manual lead qualification by deploying an automated system that securely captures and stores structured client data via WhatsApp.',
      tags: ['LangChain JS', 'Node.js', 'PostgreSQL', 'RAG'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Healthcare Management Platform',
      category: 'AI / Healthcare',
      description: 'Streamlined clinic operations and secured patient data with an end-to-end platform. Features automated AI-assisted image analysis.',
      tags: ['React.js', 'Node.js', 'Prisma', 'Google Vertex AI'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'KYC & Document Extraction Engine',
      category: 'Fintech Tools',
      description: 'Reduced manual document processing time by extracting and parsing high-fidelity structured datasets from bank statements and IDs.',
      tags: ['Python', 'FastAPI', 'LLM Prompt Engineering', 'OCR'],
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Conversational Booking Assistant',
      category: 'Travel Tech',
      description: 'Increased reservation efficiency by allowing users to complete end-to-end hotel and travel bookings directly within active WhatsApp threads.',
      tags: ['LangChain JS', 'Node.js', 'Oracle OHIP API'],
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const featuredProject = projects.find(p => p.youtubeId);
  const otherProjects = projects.filter(p => !p.youtubeId);

  return (
    <section id="projects" className="section-container projects-section">
      <div className="section-header projects-header">
        <div className="section-title-wrap">
          <div className="section-dot"></div>
          <h2 className="section-title">Featured Projects</h2>
        </div>
      </div>
      
      {featuredProject && (
        <div className="featured-project-card glass-card animate-on-scroll">
          <div className="featured-project-visual">
            <div className="featured-video-container">
              <iframe
                ref={iframeRef}
                src={`https://www.youtube.com/embed/${featuredProject.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${featuredProject.youtubeId}&controls=0&modestbranding=1&rel=0&disablekb=1&enablejsapi=1`}
                title={featuredProject.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="featured-project-content">
            <span className="project-category-badge">{featuredProject.category}</span>
            <h3 className="project-title">{featuredProject.title}</h3>
            <p className="project-description">{featuredProject.description}</p>
            <div className="project-tags">
              {featuredProject.tags.map((tag, idx) => (
                <span key={idx} className="project-tag">{tag}</span>
              ))}
            </div>
            {featuredProject.github && (
              <a href={featuredProject.github} target="_blank" rel="noreferrer" className="btn btn-outline featured-btn">
                View Source Code
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            )}
          </div>
        </div>
      )}

      <div className="projects-grid">
        {otherProjects.map((project, index) => (
          <div key={index} className="project-card glass-card animate-on-scroll" style={{ transitionDelay: `${index * 0.1}s` }}>
            
            <div className="project-visual">
              <div className="project-placeholder" style={{ backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="placeholder-pattern" style={{ background: 'rgba(0,0,0,0.2)' }}></div>
              </div>
              <span className="project-category-badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '6px', verticalAlign: '-1px'}}>
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                Company Project
              </span>
            </div>

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
