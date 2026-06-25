'use client';

import { useEffect, useState } from 'react';
import { skills } from '@/data/portfolio';
import SectionHeading from './SectionHeading';

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const skillSection = document.getElementById('skill');
    if (!skillSection) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(skillSection);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skill">
      <SectionHeading eyebrow="What I Know" title="My Skill" />
      <div className="skill-content">
        {skills.map((skill) => (
          <div className="skill-bar" key={skill.name}>
            <span>{skill.name}</span>
            <div className="bar">
              <div
                className="skill-fill"
                style={{ width: isVisible ? skill.level : 0, opacity: isVisible ? 1 : 0 }}
              >
                {skill.level}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
