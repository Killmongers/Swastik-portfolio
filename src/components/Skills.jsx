import React from 'react';
import { 
  SiReact, 
  SiNodedotjs, 
  SiPython, 
  SiPostgresql, 
  SiDocker, 
  SiLangchain 
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { LuBrainCircuit } from 'react-icons/lu';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'React',      icon: <SiReact size={26} />, color: '#00D8FF', bg: 'rgba(0, 216, 255, 0.12)', glow: 'rgba(0, 216, 255, 0.3)' },
    { name: 'Node.js',    icon: <SiNodedotjs size={26} />, color: '#539E43', bg: 'rgba(83, 158, 67, 0.12)', glow: 'rgba(83, 158, 67, 0.3)' },
    { name: 'Python',     icon: <SiPython size={26} />, color: '#3776AB', bg: 'rgba(55, 118, 171, 0.12)', glow: 'rgba(55, 118, 171, 0.3)' },
    { name: 'PostgreSQL', icon: <SiPostgresql size={26} />, color: '#336791', bg: 'rgba(51, 103, 145, 0.12)', glow: 'rgba(51, 103, 145, 0.3)' },
    { name: 'Docker',     icon: <SiDocker size={26} />, color: '#2496ED', bg: 'rgba(36, 150, 237, 0.12)', glow: 'rgba(36, 150, 237, 0.3)' },
    { name: 'AWS',        icon: <FaAws size={26} />, color: '#FF9900', bg: 'rgba(255, 153, 0, 0.12)', glow: 'rgba(255, 153, 0, 0.3)' },
    { name: 'LangChain',  icon: <SiLangchain size={26} />, color: '#10B981', bg: 'rgba(16, 185, 129, 0.12)', glow: 'rgba(16, 185, 129, 0.3)' },
    { name: 'AI / LLM',   icon: <LuBrainCircuit size={26} />, color: '#6366F1', bg: 'rgba(99, 102, 241, 0.12)', glow: 'rgba(99, 102, 241, 0.3)' },
  ];

  return (
    <section id="skills" className="section-container skills-section">
      <div className="section-header animate-on-scroll">
        <div className="section-dot"></div>
        <h2 className="section-title">Skills &amp; Technologies</h2>
      </div>

      {/* Full-bleed infinite marquee */}
      <div className="skills-marquee-outer">
        <div className="skills-marquee-track">
          {[...skills, ...skills].map((skill, index) => (
            <div key={index} className="skill-card">
              <div 
                className="skill-icon-wrapper"
                style={{ 
                  backgroundColor: skill.bg, 
                  color: skill.color,
                  '--hover-glow': skill.glow
                }}
              >
                {skill.icon}
              </div>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
