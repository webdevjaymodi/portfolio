'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { stats as portfolioStats, typedWords as portfolioTypedWords } from '../data/portfolio';

const stats = portfolioStats || [];
const typedWords = portfolioTypedWords || ['QA Tester'];

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = typedWords[wordIndex];
    const delay = isDeleting ? 55 : 110;
    const pause = !isDeleting && typedText === currentWord ? 1200 : delay;
    const timer = window.setTimeout(() => {
      if (!isDeleting && typedText === currentWord) {
        setIsDeleting(true);
        return;
      }
      if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setWordIndex((current) => (current + 1) % typedWords.length);
        return;
      }
      setTypedText((current) =>
        isDeleting
          ? currentWord.slice(0, Math.max(current.length - 1, 0))
          : currentWord.slice(0, current.length + 1),
      );
    }, pause);
    return () => window.clearTimeout(timer);
  }, [isDeleting, typedText, wordIndex]);

  return (
    <section id="home" className="hero-section">
      <div className="home-content">
        <div className="home-text">
          <p className="hero-kicker">QA Tester • Software Support Engineer</p>
          <h1>Jay Modi</h1>
          <h2>
            Focused on <span id="element">{typedText}</span>
          </h2>
          <p className="hero-copy">
            QA-focused Software Support Engineer from Ahmedabad, Gujarat with knowledge of manual
            testing, software testing, technical support, requirement understanding, SQL, web testing,
            database testing, API testing, and basic web development.
          </p>
          <div className="social-links">
            <a href="#experience">View Experience</a>
            <a href="https://drive.google.com/file/d/1vEZaegPyb2rUV_1pmDj2_KbG1LLEnEmo/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              Download CV
            </a>
            <a href="#contact">Contact Me</a>
          </div>
        </div>
        <div className="home-img" aria-label="Jay Modi profile highlight">
          <Image src="/img/my.jpg" alt="Jay Modi - QA Tester and Software Support Engineer" width={390} height={390} className="floating-img" priority />
        </div>
      </div>
      <div className="stats-grid">
        {stats.map((item) => (
          <div className="stat-card interactive-card" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
