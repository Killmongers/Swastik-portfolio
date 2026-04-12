import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Software Engineer',
      company: 'Asambhav',
      duration: 'Sep 2025 - Present',
      location: 'Ahmedabad, Gujarat',
      details: [
        'Built JavaScript API wrapper services integrating Google Gemini and Oracle Hospitality (OHIP) REST APIs.',
        'Developed WhatsApp chatbot backend supporting hotel booking check-in and check-out workflows.',
        'Engineered a prompt-to-PDF service that converts AI responses into structured documents.',
        'Integrated hospitality APIs to process real-time hotel inventory and reservation data.'
      ]
    },
    {
      id: 2,
      role: 'Python Developer',
      company: 'FlyAnyTrip.com',
      duration: 'Dec 2024 - Jun 2025',
      location: 'Vadodara, Gujarat',
      details: [
        'Developed backend services for real-time train tracking using railway APIs.',
        'Built scalable REST APIs using Python frameworks (Django/FastAPI) for travel-related services.',
        'Self-managed live application "tripeasy.in" deployment on AWS Lightsail using Nginx, PM2, and Let\'s Encrypt.',
        'Developed WhatsApp bots for train tracking and PNR status checking.',
        'Maintained Android app CI/CD and managed Linux environments using Bash automation.'
      ]
    },
    {
      id: 3,
      role: 'Software Engineering Intern',
      company: 'byteXL',
      duration: 'May 2024 - Jun 2024',
      location: 'Parul University, Vadodara',
      details: [
        'Developed Python automation scripts and structured data extraction scrapers.',
        'Built foundational backend APIs connected to diverse application workflows.',
        'Implemented clean code testing and applied source control with Git.'
      ]
    }
  ];

  return (
    <section id="experience" className="section-container">
      <h2 className="section-title">Professional Experience</h2>
      
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="timeline-item animate-on-scroll" style={{ animationDelay: `${index * 0.2}s` }}>
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
