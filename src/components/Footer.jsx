import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer fade-in">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>Rohit Bhardwaj</h3>
          <p>MERN Stack Developer</p>
        </div>
        <div className="footer-social">
          <a href="https://github.com/rohitbhxrdwaj" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub size={24} />
          </a>
          <a href="#" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:bhardwajrohit9294@gmail.com" aria-label="Email">
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Rohit Bhardwaj. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
