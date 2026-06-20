import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  // Trigger scroll-reveal animations via IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    const els = document.querySelectorAll('.animate-on-scroll');
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Decorative organic background blobs */}
      <div className="teal-blob" aria-hidden="true" />
      <div className="amber-blob" aria-hidden="true" />

      <div className="app-container">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Projects />
          <Experience />
          <Skills />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
