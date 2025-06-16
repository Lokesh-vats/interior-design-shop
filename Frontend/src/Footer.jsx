import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './Footer.css'; // import custom CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* About Us */}
        <div className="footer-section">
          <h3>About Us</h3>
          <p>InteriorShop offers the best furniture and decor to make your house a dream home. Quality & style guaranteed.</p>
        </div>

        {/* Help */}
        <div className="footer-section">
          <h3>Help</h3>
          <ul>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Order Status</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li>Phone: +91 9876543210</li>
            <li>Email: info@interiorshop.com</li>
            <li>Address: New Delhi, India</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} InteriorShop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
