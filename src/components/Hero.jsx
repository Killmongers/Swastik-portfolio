import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [roleText, setRoleText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    'Full-Stack & AI Engineer',
    'LLM Integration Specialist',
    'Backend Architect',
    'RAG Pipeline Builder',
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
      {/* Background decorative layer — overflow clipped independently to avoid clipping text content */}
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
            <span className="badge-icon">⚡</span>
            <span>Open to new opportunities</span>
          </div>

          <h1 className="hero-name">Swastik<br />Moolya</h1>

          <h2 className="hero-role">
            <span className="role-typing">{roleText}</span>
            <span className="cursor">|</span>
          </h2>

          <p className="hero-tagline">
            Building production-grade AI systems — LangChain WhatsApp agents,
            RAG pipelines, full-stack medical platforms with Vertex AI, and
            automated AWS / GCP deployments.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary glow-btn">
              View Projects
            </a>
            <a
              href="#contact"
              className="btn btn-outline"
            >
              Get in Touch
            </a>
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
            <span className="chip-icon">🤖</span>
            <div>
              <div className="chip-value">4 AI Agents</div>
              <div className="chip-sub">In Production</div>
            </div>
          </div>

          <div className="stat-chip chip-bottom">
            <span className="chip-icon">☁️</span>
            <div>
              <div className="chip-value">AWS + GCP</div>
              <div className="chip-sub">Cloud Deployed</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
