import Image from 'next/image';
import { navLinks, socialLinks } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <a href="#home" aria-label="Back to top">
            <Image
              src="/img/Jay's Portfolio_transparent.png"
              alt="Jay Modi Portfolio Logo"
              width={180}
              height={70}
            />
          </a>
        </div>
        <div className="footer-links-wrapper">
          <ul className="footer-list">
            {navLinks.slice(0, 4).map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <ul className="footer-list">
            {socialLinks.map((item) => (
              <li key={item.href}>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  <span className="footer-icon" aria-hidden="true">
                    {item.icon}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="copyright-text">
        <p>copyright © jaymodi-portfolio.netlify.app | All right reserved</p>
      </div>
    </footer>
  );
}
