import React from 'react';
import './footer.css';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-container">
        <p>© 2025 Mada Walabu Construction PLC. All rights reserved.</p>
        <ul className="social-links">
          <li>
            <a href="https://www.facebook.com/madawalabuconstruction" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/mada-walabu-construction-plc" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
