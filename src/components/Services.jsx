import React from 'react';
import './Services.css';

const IconChatbot = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    <line x1="9" y1="10" x2="9" y2="10"/>
    <line x1="12" y1="10" x2="12" y2="10"/>
    <line x1="15" y1="10" x2="15" y2="10"/>
  </svg>
);

const IconAutomation = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/>
    <polyline points="8 6 2 12 8 18"/>
  </svg>
);

const IconAPI = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
    <line x1="6" y1="6" x2="6.01" y2="6"/>
    <line x1="6" y1="18" x2="6.01" y2="18"/>
  </svg>
);

const IconDocument = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="9" y1="13" x2="15" y2="13"/>
    <line x1="9" y1="17" x2="13" y2="17"/>
  </svg>
);

const services = [
  {
    Icon: IconChatbot,
    title: 'AI Chatbots',
    outcome: 'Replace human support with 24/7 expert conversational agents.',
  },
  {
    Icon: IconAutomation,
    title: 'Automation Pipelines',
    outcome: 'Eliminate repetitive tasks and streamline your data flow end-to-end.',
  },
  {
    Icon: IconAPI,
    title: 'Intelligent Backend APIs',
    outcome: 'Robust architectures that scale seamlessly with your user base.',
  },
  {
    Icon: IconDocument,
    title: 'Document Processing',
    outcome: 'Automate KYC and data extraction with high-fidelity OCR & AI.',
  },
];

const Services = () => (
  <section id="services" className="section-container services-section">
    <h2 className="section-title">What I Can Build For You</h2>

    <div className="services-grid">
      {services.map(({ Icon, title, outcome }, index) => (
        <div
          key={title}
          className="service-card glass-effect animate-on-scroll"
          style={{ transitionDelay: `${index * 0.1}s` }}
        >
          <div className="service-icon-wrap">
            <Icon />
          </div>
          <h3 className="service-title">{title}</h3>
          <p className="service-outcome">{outcome}</p>
        </div>
      ))}
    </div>

    <div className="services-cta animate-on-scroll">
      <a href="#contact" className="btn btn-primary glow-btn">
        Let's Talk About Your Project
      </a>
    </div>
  </section>
);

export default Services;
