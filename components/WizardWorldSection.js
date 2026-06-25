'use client';

import { useEffect, useRef, useState } from 'react';
import SectionHeading from './SectionHeading';

const storyBeats = [
  {
    title: '3D Hogwarts-style landscape',
    text: 'A layered CSS 3D castle scene gives the portfolio a magical destination without downloading heavy 3D models.',
  },
  {
    title: 'Floating wand and Golden Snitch',
    text: 'Interactive props hover, rotate, and respond to pointer movement to make the page feel alive.',
  },
  {
    title: 'Scroll-triggered spell cards',
    text: 'Cards reveal as visitors scroll, creating a magical longread effect with no extra animation library.',
  },
  {
    title: 'Lightweight WebGL-style magic',
    text: 'Shader-like gradients, particles, and glowing ink effects simulate spell energy while keeping load time fast.',
  },
];

export default function WizardWorldSection() {
  const sectionRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('.spell-story-card');
    if (!cards?.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.28 },
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  function handlePointerMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 18;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * -14;
    setTilt({ x, y });
  }

  function resetTilt() {
    setTilt({ x: 0, y: 0 });
  }

  return (
    <section id="wizard-world" className="wizard-world-section" ref={sectionRef}>
      <SectionHeading
        title="Wizard World"
        heading="Interactive 3D magic for the portfolio"
        subtitle="A lightweight Harry-Potter-inspired experience with a 3D castle scene, floating wand, golden snitch, spell particles, and scroll-revealed story cards."
      />

      <div className="wizard-world-layout">
        <div
          className="hogwarts-stage"
          onPointerMove={handlePointerMove}
          onPointerLeave={resetTilt}
          style={{ '--tilt-x': `${tilt.x}deg`, '--tilt-y': `${tilt.y}deg` }}
          aria-label="Interactive 3D magical castle scene"
        >
          <div className="moon" />
          <div className="magic-fog fog-one" />
          <div className="magic-fog fog-two" />
          <div className="golden-snitch" aria-hidden="true">
            <span className="snitch-wing left" />
            <span className="snitch-body" />
            <span className="snitch-wing right" />
          </div>
          <div className="floating-wand" aria-hidden="true">
            <span className="wand-tip" />
          </div>
          <div className="castle-scene">
            <div className="castle-base" />
            <div className="castle-tower tower-left">
              <span />
            </div>
            <div className="castle-tower tower-mid">
              <span />
            </div>
            <div className="castle-tower tower-right">
              <span />
            </div>
            <div className="castle-window window-one" />
            <div className="castle-window window-two" />
            <div className="castle-window window-three" />
          </div>
          <div className="spell-ring ring-one" />
          <div className="spell-ring ring-two" />
        </div>

        <div className="spell-story-list">
          {storyBeats.map((beat, index) => (
            <article className="spell-story-card interactive-card" key={beat.title} style={{ '--reveal-delay': `${index * 90}ms` }}>
              <span>0{index + 1}</span>
              <h3>{beat.title}</h3>
              <p>{beat.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
