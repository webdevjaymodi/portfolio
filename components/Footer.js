'use client';

import Image from 'next/image';
import { navLinks as portfolioNavLinks, socialLinks as portfolioSocialLinks } from '../data/portfolio';

const navLinks = portfolioNavLinks || [];
const socialLinks = portfolioSocialLinks || [];

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="premium-footer">
      <div className="footer-glow-border" />
      <div className="footer-inner">
        {/* Brand column */}
        <div className="footer-brand-col">
          <a href="#home" onClick={scrollToTop} className="footer-brand-link" aria-label="Back to top">
            <Image
              src="/img/jm-logo.jpg"
              alt="Jay Modi Logo"
              width={130}
              height={45}
              style={{ borderRadius: '10px' }}
            />
          </a>
          <p className="footer-tagline">
            QA Tester & Software Support Engineer crafting quality digital experiences from Ahmedabad, India.
          </p>
          <div className="footer-social-row">
            {socialLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label={item.label}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick links column */}
        <div className="footer-nav-col">
          <h4 className="footer-col-title">Quick Links</h4>
          <ul className="footer-nav-list">
            {navLinks.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact column */}
        <div className="footer-contact-col">
          <h4 className="footer-col-title">Get in Touch</h4>
          <ul className="footer-nav-list">
            <li>
              <a href="mailto:jaymodi993@gmail.com">📧 jaymodi993@gmail.com</a>
            </li>
            <li>
              <a href="https://wa.me/+918490093530" target="_blank" rel="noopener noreferrer">📱 +91 8490093530</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/jay-modi-60965519a/" target="_blank" rel="noopener noreferrer">💼 LinkedIn Profile</a>
            </li>
            <li>
              <a href="https://github.com/jaymodi993" target="_blank" rel="noopener noreferrer">💻 GitHub Profile</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Jay Modi. Built with ❤️ in Ahmedabad, India</p>
        <button onClick={scrollToTop} className="back-to-top" aria-label="Back to top">
          ↑
        </button>
      </div>
    </footer>
  );
}
