import React, { useState } from 'react';
import './Contact.css';

/* ── Inline SVG icons ─────────────────────── */
const IconWhatsApp = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
  </svg>
);

const IconPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.13 12 19.79 19.79 0 0 1 1.06 3.37 2 2 0 0 1 3.04 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const IconMail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const IconLinkedIn = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const IconYouTube = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 11.75a29 29 0 0 0-.46-5.33z"/>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
  </svg>
);

const IconSend = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"/>
    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
);

const IconCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

/* ── Contact channels data ───────────────── */
const channels = [
  {
    href: 'https://wa.me/919327973365',
    Icon: IconWhatsApp,
    label: 'Quick Chat',
    value: 'WhatsApp',
    className: 'whatsapp-method',
    external: true,
  },
  {
    href: 'tel:+919327973365',
    Icon: IconPhone,
    label: 'Direct Line',
    value: '+91 93279 73365',
    className: 'call-method',
    external: false,
  },
  {
    href: 'mailto:moolyaswastik48@gmail.com',
    Icon: IconMail,
    label: 'Send Email',
    value: 'moolyaswastik48@gmail.com',
    className: 'email-method',
    external: false,
  },
  {
    href: 'https://www.linkedin.com/in/swastik-software-developer',
    Icon: IconLinkedIn,
    label: 'Professional Connect',
    value: 'LinkedIn',
    className: 'linkedin-method',
    external: true,
  },
  {
    href: 'https://www.youtube.com/@SwastikDev.ai429',
    Icon: IconYouTube,
    label: 'Watch Tutorials',
    value: 'YouTube Channel',
    className: 'youtube-method',
    external: true,
  },
];

/* ── Component ───────────────────────────── */
const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setStatus('loading');

    try {
      if (import.meta.env.DEV) {
        // Vite local dev: Directly hit the Discord webhook (since Vite doesn't run the Vercel /api folder)
        const webhookUrl = import.meta.env.VITE_DISCORD_WEBHOOK_URL;
        const payload = {
          content: `**[LOCAL DEV] New Contact Form Submission!**\n\n**Name:** ${formData.name}\n**Email:** ${formData.email}\n**Message:**\n${formData.message}`,
        };
        const res = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        if (res.ok) {
          setStatus('success');
          setFormData({ name: '', email: '', message: '' });
        } else {
          setStatus('error');
        }
      } else {
        // Production: Hit the Vercel serverless function
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        const data = await res.json();

        if (res.ok && data.ok) {
          setStatus('success');
          setFormData({ name: '', email: '', message: '' });
        } else {
          setStatus('error');
        }
      }
    } catch {
      setStatus('error');
    } finally {
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <section id="contact" className="section-container contact-section">
      <h2 className="section-title">Get In Touch</h2>

      <div className="contact-card glass-effect animate-on-scroll">
        <div className="contact-header">
          <h3>Let's build something great together</h3>
          <p>
            Open to engineering robust backend architectures, intelligent AI agents, and scalable cloud environments.
            Reach out directly or drop a message below.
          </p>
        </div>

        <div className="contact-content-wrapper">
          {/* ── Form ── */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="What's on your mind?"
                rows="5"
              />
            </div>

            <button
              type="submit"
              className={`submit-btn ${status}`}
              disabled={status === 'loading'}
            >
              {status === 'loading' && <span className="btn-spinner" />}
              {status === 'success' && <IconCheck />}
              {status !== 'loading' && status !== 'success' && <IconSend />}
              <span>
                {status === 'loading'
                  ? 'Sending…'
                  : status === 'success'
                  ? 'Message Sent!'
                  : status === 'error'
                  ? 'Failed — Try Again'
                  : 'Send Message'}
              </span>
            </button>
          </form>

          <div className="contact-divider">
            <span>OR</span>
          </div>

          {/* ── Channels ── */}
          <div className="contact-methods vertical">
            {channels.map(({ href, Icon, label, value, className, external }) => (
              <a
                key={href}
                href={href}
                className={`contact-method ${className}`}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <span className="icon-wrapper">
                  <Icon />
                </span>
                <div className="method-text">
                  <span className="method-label">{label}</span>
                  <span className="method-value">{value}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>&copy; 2024 Swastik Moolya. Engineered with React, Vite & absolute dedication.</p>
      </footer>
    </section>
  );
};

export default Contact;
