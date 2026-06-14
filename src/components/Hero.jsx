import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [roleText, setRoleText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(95);

  const roles = [
    'Scale With AI',
    'Automate Your Ops',
    'Ship Faster',
    'Reduce Manual Work',
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      if (isDeleting) {
        setRoleText(fullText.substring(0, roleText.length - 1));
        setTypingSpeed(45);
      } else {
        setRoleText(fullText.substring(0, roleText.length + 1));
        setTypingSpeed(95);
      }

      if (!isDeleting && roleText === fullText) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && roleText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(350);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [roleText, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="home" className="hero-section">
      <div className="hero-bg-clip" aria-hidden="true">
        <div className="hero-blobs">
          <div className="blob blob-1" />
          <div className="blob blob-2" />
          <div className="blob blob-3" />
        </div>
        <div className="cube-wrapper">
          <div className="cube cube-1" />
          <div className="cube cube-2" />
          <div className="cube cube-3" />
        </div>
      </div>

      <div className="hero-content">

        {/* ── Left: Typography ── */}
        <div className="hero-text">

          <div className="hero-badge">
            {/* Lightning bolt icon */}
            <svg className="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
            <span>Available for new opportunities</span>
          </div>

          <h1 className="hero-name">Swastik<br />Moolya</h1>

          <h2 className="hero-role">
            <span className="role-typing">{roleText}</span>
            <span className="cursor">|</span>
          </h2>

          <p className="hero-tagline">
            I build AI systems and robust backends that automate your operations, reduce manual workload, and scale seamlessly with your business needs.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary glow-btn">Let's Talk</a>
            <a href="#projects" className="btn btn-outline">View My Work</a>
          </div>

          <div className="social-proof-strip-inline animate-on-scroll">
            <div className="proof-item">
              <svg className="proof-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              <span className="proof-text">5+ Production Systems Shipped</span>
            </div>
            <div className="proof-divider" />
            <div className="proof-item">
              <svg className="proof-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
              </svg>
              <span className="proof-text">Healthcare, Hospitality & Retail</span>
            </div>
            <div className="proof-divider" />
            <div className="proof-item">
              <svg className="proof-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"/>
                <polyline points="8 6 2 12 8 18"/>
              </svg>
              <span className="proof-text">End-to-End Delivery</span>
            </div>
          </div>

          <div className="hero-tech-row">
            <span className="tech-row-label">Tech I work with</span>
            <div className="tech-badges">
              {['LangChain', 'Node.js', 'React', 'Python', 'PostgreSQL', 'AWS', 'GCP'].map(t => (
                <span key={t} className="tech-badge">{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Right: IDE Window ── */}
        <div className="hero-visual">
          <div className="ide-window">
            <div className="ide-titlebar">
              <div className="ide-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <span className="ide-filename">agent.py</span>
              <span className="ide-lang">Python</span>
            </div>

            <div className="ide-body">
              <pre className="code-pre"><code>
<span className="ln">1 </span><span className="kw">from</span> <span className="mod">langchain.agents</span> <span className="kw">import</span> <span className="fn">AgentExecutor</span>{'\n'}
<span className="ln">2 </span><span className="kw">from</span> <span className="mod">langchain_google_genai</span> <span className="kw">import</span> <span className="fn">ChatGoogleGenerativeAI</span>{'\n'}
<span className="ln">3 </span><span className="kw">from</span> <span className="mod">app.db</span> <span className="kw">import</span> <span className="fn">LeadsDB</span>{'\n'}
<span className="ln">4 </span>{'\n'}
<span className="ln">5 </span><span className="kw">class</span> <span className="cls">AILeadAgent</span>:{'\n'}
<span className="ln">6 </span>    <span className="kw">def</span> <span className="fn">__init__</span>(<span className="va">self</span>):{'\n'}
<span className="ln">7 </span>        <span className="va">self</span>.llm = <span className="fn">ChatGoogleGenerativeAI</span>({'\n'}
<span className="ln">8 </span>            model=<span className="st">"gemini-1.5-pro"</span>{'\n'}
<span className="ln">9 </span>        ){'\n'}
<span className="ln">10</span>        <span className="va">self</span>.rag  = <span className="fn">RAGSimilarity</span>(){'\n'}
<span className="ln">11</span>        <span className="va">self</span>.db   = <span className="fn">LeadsDB</span>(){'\n'}
<span className="ln">12</span>{'\n'}
<span className="ln">13</span>    <span className="kw">def</span> <span className="fn">handle_whatsapp</span>(<span className="va">self</span>, <span className="va">msg</span>):{'\n'}
<span className="ln">14</span>        ctx = <span className="va">self</span>.rag.<span className="fn">query</span>(<span className="va">msg</span>.text){'\n'}
<span className="ln">15</span>        res = <span className="va">self</span>.llm.<span className="fn">reply</span>(<span className="va">msg</span>.text, ctx){'\n'}
<span className="ln">16</span>        <span className="va">self</span>.db.<span className="fn">save</span>(<span className="va">msg</span>.sender, res.lead){'\n'}
<span className="ln">17</span>        <span className="kw">return</span> <span className="va">msg</span>.<span className="fn">reply</span>(res.text)
              </code></pre>
            </div>

            <div className="ide-statusbar">
              <span className="status-item status-green">● Running</span>
              <span className="status-item">WhatsApp Agent</span>
              <span className="status-item status-dim">Ln 17, Col 1</span>
            </div>
          </div>

          {/* Floating stat chips */}
          <div className="stat-chip chip-top">
            <svg className="chip-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
            <div>
              <div className="chip-value">5+ Systems</div>
              <div className="chip-sub">Shipped to Production</div>
            </div>
          </div>

          <div className="stat-chip chip-bottom">
            <svg className="chip-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
            </svg>
            <div>
              <div className="chip-value">API to Production</div>
              <div className="chip-sub">End-to-End Delivery</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
