'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { navLinks } from '../data/portfolio';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    setIsDarkTheme(window.localStorage.getItem('theme') === 'dark');
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = isDarkTheme ? 'dark' : '';
    document.body.dataset.theme = isDarkTheme ? 'dark' : '';

    if (isDarkTheme) {
      window.localStorage.setItem('theme', 'dark');
    } else {
      window.localStorage.removeItem('theme');
      delete document.documentElement.dataset.theme;
      delete document.body.dataset.theme;
    }
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
              src="/img/Jay's Portfolio_transparent.png"
              alt="Jay's Portfolio Logo"
              width={170}
              height={60}
              priority
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
