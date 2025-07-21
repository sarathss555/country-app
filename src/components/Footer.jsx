// components/Footer.jsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import '../styles/Footer.scss';

const Footer = () => {
  return (
    <footer className="text-center py-4 border-top">
      <div className="mb-2">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mx-2">
          <FaFacebookF className="border rounded-circle p-2" size={32} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mx-2">
          <FaTwitter className="border rounded-circle p-2" size={32} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="mx-2">
          <FaLinkedinIn className="border rounded-circle p-2" size={32} />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="mx-2">
          <FaYoutube className="border rounded-circle p-2" size={32} />
        </a>
      </div>
      <div className="mb-1">example@email.com</div>
      <div>&copy; {new Date().getFullYear()} Country App. All rights reserved.</div>
    </footer>
  );
};

export default Footer