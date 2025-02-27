import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
      <hr />
      <div className="footer-bottom">
        <div className="footer-logo">
          <span>AMSAN</span>
        </div>

        <div className="footer-bottom-left">
          <p>© 2025 Amsan Naheswarn. All rights reserved.</p>
          <p>Terms of Service | Privacy Policy | Connect With Me</p>
        </div>

        <div className="footer-social">
          <a href="https://github.com/Amsan5941" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/amsan-naheswaran-243407231/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:amsan5941@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
