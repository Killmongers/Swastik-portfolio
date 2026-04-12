import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [roleText, setRoleText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    "Software Engineer", 
    "Backend Developer", 
    "Python Developer",
    "Arch Linux User"
  ];

  useEffect(() => {
    let timer = setTimeout(() => {
      handleTyping();
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [roleText, isDeleting, loopNum]);

  const handleTyping = () => {
    const i = loopNum % roles.length;
    const fullText = roles[i];

    if (isDeleting) {
      setRoleText(fullText.substring(0, roleText.length - 1));
      setTypingSpeed(50);
    } else {
      setRoleText(fullText.substring(0, roleText.length + 1));
      setTypingSpeed(100);
    }

    if (!isDeleting && roleText === fullText) {
      setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && roleText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(400);
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Dynamic Background Elements */}
      <div className="cube-wrapper">
        <div className="cube cube-1"></div>
        <div className="cube cube-2"></div>
        <div className="cube cube-3"></div>
      </div>

      <div className="hero-content">
        
        {/* Left Typography Section */}
        <div className="hero-text animate-on-scroll">
          <div className="greeting-badge">
            <span className="terminal-prompt" style={{ display: 'inline-flex', alignItems: 'center' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
            </span> 
            Initialize environment...
          </div>
          <h1 className="name">Swastik Moolya</h1>
          <h2 className="role-container">
            I am a <span className="role-typing">{roleText}</span><span className="cursor">|</span>
          </h2>
          <p className="tagline">
            Architecting scalable APIs, building intelligent AI chatbots, and automating cloud deployments. 
            Currently leveraging Python, Node.js, and AWS to power robust production applications.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary glow-btn">
              Explore Projects
            </a>
            <a href="https://www.linkedin.com/in/swastik-python-dev/" target="_blank" rel="noopener noreferrer" className="btn btn-outline hover-glow">
              Connect on LinkedIn
            </a>
          </div>
          
          <div className="tech-stack-preview" style={{ marginTop: '2rem' }}>
            <span style={{ fontSize: '0.875rem', color: '#9ca3af', display: 'block', marginBottom: '0.5rem', fontFamily: 'monospace' }}>Tech Stack</span>
            <div style={{ display: 'flex', gap: '1.25rem', opacity: '0.8', alignItems: 'center' }}>
              <div className="tech-icon" title="Python / Code">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              </div>
              <div className="tech-icon" title="Node.js / API">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
              </div>
              <div className="tech-icon" title="AWS / Cloud">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>
              </div>
              <div className="tech-icon" title="Linux / Terminal">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Visual Section (Terminal UI) */}
        <div className="hero-visual animate-on-scroll" style={{ animationDelay: '0.3s' }}>
          <div className="ide-window glass-effect-strong hover-float">
            
            <div className="ide-header">
              <div className="ide-controls">
                <span className="control close"></span>
                <span className="control minimize"></span>
                <span className="control expand"></span>
              </div>
              <div className="ide-title">~/swastik/portfolio/developer.py</div>
            </div>

            <div className="ide-body">
              <div className="code-block">
                <pre>
                  <code>
                  <div className="code-line"><span className="line-num">1</span> <span className="keyword">class</span> <span className="entity">BackendDeveloper</span>:</div>
                  <div className="code-line"><span className="line-num">2</span>     <span className="keyword">def</span> <span className="function">__init__</span>(<span className="variable">self</span>):</div>
                  <div className="code-line"><span className="line-num">3</span>         <span className="variable">self</span>.name = <span className="string">"Swastik"</span></div>
                  <div className="code-line"><span className="line-num">4</span>         <span className="variable">self</span>.base = <span className="string">"Ahmedabad, India"</span></div>
                  <div className="code-line"><span className="line-num">5</span>         <span className="variable">self</span>.stack = {"{"}</div>
                  <div className="code-line"><span className="line-num">6</span>             <span className="string">"languages"</span>: [<span className="string">"Python"</span>, <span className="string">"JavaScript"</span>, <span className="string">"PHP"</span>],</div>
                  <div className="code-line"><span className="line-num">7</span>             <span className="string">"deployment"</span>: [<span className="string">"Arch Linux"</span>, <span className="string">"AWS"</span>, <span className="string">"Nginx"</span>]</div>
                  <div className="code-line"><span className="line-num">8</span>         {"}"}</div>
                  <div className="code-line"><span className="line-num">9</span> </div>
                  <div className="code-line"><span className="line-num">10</span>    <span className="keyword">def</span> <span className="function">execute_mission</span>(<span className="variable">self</span>):</div>
                  <div className="code-line"><span className="line-num">11</span>        <span className="keyword">while</span> <span className="keyword">True</span>:</div>
                  <div className="code-line"><span className="line-num">12</span>            <span className="variable">self</span>.code.write()</div>
                  <div className="code-line"><span className="line-num">13</span>            <span className="variable">self</span>.deploy()</div>
                  <div className="code-line"><span className="line-num">14</span>            <span className="variable">self</span>.optimize()</div>
                  <div className="code-line"><span className="line-num">15</span> </div>
                  <div className="code-line"><span className="line-num">16</span> <span className="comment"># Output: Scaling systems effortlessly [OK]</span></div>
                  </code>
                </pre>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      {/* Background blobs for depth */}
      <div className="background-decorations">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>
    </section>
  );
};

export default Hero;
