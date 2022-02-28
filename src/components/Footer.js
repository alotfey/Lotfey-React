import React from 'react';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="container footer mt-auto py-3 bg-light">
      <span className="text-muted">
        <ul>
          <li>
            <FaGithub />
          </li>
          <li>
            <FaLinkedin />
          </li>
          <li>
            <FaStackOverflow />
          </li>
        </ul>
      </span>
    </footer>
  );
} 

export default Footer;
