'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { typedWords } from '../data/portfolio';

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
    <section id="home">
      <div className="home-content">
        <div className="home-text">
          <h3>Hi, My Name is</h3>
          <h1>Jay Modi</h1>
          <h2>
            and I am a <span id="element">{typedText}</span>
          </h2>
          <div className="social-links">
            <a href="https://github.com/jaymodi993" target="_blank" rel="noopener noreferrer">
              Visit Github
            </a>
            <a
              href="https://drive.google.com/file/d/1vEZaegPyb2rUV_1pmDj2_KbG1LLEnEmo/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="home-img">
          <Image
            src="/img/my.jpg"
            alt="Jay Modi - Web Developer"
            width={350}
            height={350}
            className="floating-img"
            priority
          />
        </div>
      </div>
    </section>
  );
}
