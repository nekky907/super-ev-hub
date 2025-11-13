import React, { useEffect } from 'react';
import './styles/App.css';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import Features from './components/Features';
import HowToCharge from './components/HowToCharge';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Add scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all animatable elements
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="App">
      <Hero />
      <InfoSection />
      <Features />
      <HowToCharge />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
