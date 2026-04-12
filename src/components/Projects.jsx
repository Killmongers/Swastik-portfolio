import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'tripeasy.in Backend',
      description: 'Built scalable REST APIs and managed the live full-stack application deployment on AWS Lightsail using Nginx and PM2.',
      tags: ['Python', 'AWS', 'Nginx', 'Node.js'],
      link: 'https://www.tripeasy.in/'
    },
    {
      title: 'AI Hospitality Chatbot',
      description: 'Integrated Google Gemini API and OHIP REST APIs to build an enterprise-scale hotel booking and check-in/out WhatsApp chatbot.',
      tags: ['Node.js', 'Google Gemini API', 'WhatsApp API'],
      link: '#'
    },
    {
      title: 'Real-time Train Tracker Bot',
      description: 'Developed backend services and WhatsApp bots for real-time live train tracking and PNR status checking using railway APIs.',
      tags: ['Python', 'REST APIs', 'Automation'],
      link: '#'
    },
    {
      title: 'Prompt-to-PDF Engine',
      description: 'Developed a Node.js-based backend service that transforms structured AI inputs into well-formatted PDF documents. Implemented custom layout rendering using drawing tools to enhance visual presentation and readability.',
      tags: ['Node.js', 'JavaScript', 'PDF Generation', 'API Design'],
      link: '#'
    }
  ];

  return (
    <section id="projects" className="section-container projects-section">
      <h2 className="section-title">Featured Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card glass-effect animate-on-scroll" style={{ animationDelay: `${index * 0.15}s` }}>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
            <div className="project-links">
              <a href={project.link} className="project-link" aria-label={`View ${project.title}`}>
                View Details →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
