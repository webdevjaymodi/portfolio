'use client';

import { useEffect, useRef, useState } from 'react';

export default function MouseTracker() {
  const [mounted, setMounted] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const smoothRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);
  const [mapTransform, setMapTransform] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const animate = () => {
      smoothRef.current = {
        x: smoothRef.current.x + (targetRef.current.x - smoothRef.current.x) * 0.06,
        y: smoothRef.current.y + (targetRef.current.y - smoothRef.current.y) * 0.06,
      };
      const mx = (smoothRef.current.x - window.innerWidth / 2) / 30;
      const my = (smoothRef.current.y - window.innerHeight / 2) / 30;
      setMapTransform({ x: mx, y: my });
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* Parallax world map — only rendered client-side to avoid hydration mismatch */}
      <div
        className="world-map-layer"
        style={mounted ? {
          transform: `translate3d(${mapTransform.x}px, ${mapTransform.y}px, 0) scale(1.08)`,
        } : undefined}
      />

      {/* Floating ambient particles */}
      <div className="ambient-particles" aria-hidden="true">
        <div className="particle p1" />
        <div className="particle p2" />
        <div className="particle p3" />
        <div className="particle p4" />
        <div className="particle p5" />
        <div className="particle p6" />
      </div>

      {/* Mouse glow tracker */}
      <div
        className="mouse-tracker"
        style={{
          '--mouse-x': `${position.x}px`,
          '--mouse-y': `${position.y}px`,
        }}
      />
    </>
  );
}
