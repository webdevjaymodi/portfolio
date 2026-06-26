'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { navLinks as portfolioNavLinks } from '../data/portfolio';

const navLinks = portfolioNavLinks || [];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    const saved = window.localStorage.getItem('theme');
    if (saved === 'light') {
      setIsDarkTheme(false);
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = isDarkTheme ? 'dark' : 'light';
    document.body.dataset.theme = isDarkTheme ? 'dark' : 'light';
    window.localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
  }, [isDarkTheme]);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <a href="#home" onClick={closeMenu}>
            <Image
              src="/img/jm-logo.jpg"
              alt="Jay's Portfolio Logo"
              width={140}
              height={50}
              priority
              style={{ borderRadius: '8px' }}
            />
          </a>
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`} id="primary-navigation">
          {navLinks.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="theme-toggle-btn"
          type="button"
          aria-label="Toggle dark mode"
          onClick={() => setIsDarkTheme((current) => !current)}
        >
          {isDarkTheme ? '☀️' : '🌙'}
        </button>
        <button
          className={`menu-btn ${isMenuOpen ? 'active' : ''}`}
          type="button"
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          &#9776;
        </button>
      </nav>
    </header>
  );
}
