import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        © {currentYear} <span className="brand">SUPER EV HUB</span>
      </p>
    </footer>
  );
};

export default Footer;
