import React, { useEffect, useState } from 'react';
import '../styles/Hero.css';
import bannerImage from '../assets/SuperEVHub-archive-Banner.webp';
import logoImage from '../assets/superEVHubLogorez.webp';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="hero">
      {/* Background Image */}
      <div className="hero-background">
        <img src={bannerImage} alt="SUPER EV HUB Charging Stations" />
        <div className="hero-overlay"></div>
      </div>

      {/* Content Container */}
      <div className="hero-content">
        {/* Logo */}
        <div className="hero-logo">
          <img src={logoImage} alt="SUPER EV HUB" />
        </div>

        {/* Main Title Section */}
        <div className={`hero-title-container ${isLoaded ? 'animate-in' : ''}`}>
          <div className="hero-subtitle">สถานีชาร์จรถไฟฟ้า</div>
          <h1 className="hero-title">
            <span className="title-super">SUPER</span>
            <span className="title-ev">EV</span>
            <span className="title-hub">HUB</span>
          </h1>
        </div>

        {/* Tagline */}
        <div className={`hero-tagline ${isLoaded ? 'animate-in-delay' : ''}`}>
          <span className="tagline-text">เร็วกว่า</span>
          <span className="tagline-highlight">แรงกว่า</span>
          <span className="tagline-text">สะดวกกว่า</span>
        </div>
      </div>
    </section>  
  );
};

export default Hero;