import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend & Cloud',
      skills: ['Python', 'Node.js', 'PHP', 'Django', 'FastAPI', 'AWS Lightsail', 'Nginx', 'Docker']
    },
    {
      title: 'Database & Data Structures',
      skills: ['MySQL', 'PostgreSQL', 'Data Structures (DSA)', 'Algorithms']
    },
    {
      title: 'Tools & Integrations',
      skills: ['Linux / Arch Linux', 'Google Gemini API', 'WhatsApp Bots', 'REST APIs', 'Git', 'Bash Scripting', 'PM2']
    },
    {
      title: 'Frontend & Others',
      skills: ['React', 'JavaScript', 'Testing', 'Android Deployment']
    }
  ];

  return (
    <section id="skills" className="section-container skills-section">
      <h2 className="section-title">Technical Skills</h2>
      
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-card glass-effect animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
            <h3 className="skill-category-title">{category.title}</h3>
            <div className="skill-tags">
              {category.skills.map((skill, idx) => (
                <span key={idx} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
