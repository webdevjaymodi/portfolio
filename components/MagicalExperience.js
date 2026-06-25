'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

const spells = [
  {
    name: 'Expecto Patronum',
    type: 'Guardian Charm',
    description:
      'Casts a shimmering, silvery-white animal guardian that shields the page with a hopeful protective glow.',
    effect: 'patronus',
  },
  {
    name: 'Accio',
    type: 'Summoning Charm',
    description: 'Summons floating objects toward the cursor in a quick, magical pull.',
    effect: 'accio',
  },
  {
    name: 'Alohomora',
    type: 'Unlocking Charm',
    description: 'Unlocks hidden sparkles across the world-map background.',
    effect: 'alohomora',
  },
  {
    name: 'Bubble-Head Charm',
    type: 'Utility Charm',
    description: 'Wraps the page in soft bubbles as if you can breathe underwater.',
    effect: 'bubble',
  },
  {
    name: 'Expelliarmus',
    type: 'Defensive Magic',
    description: 'Harry’s signature disarming spell, shown as a red dueling flash.',
    effect: 'expelliarmus',
  },
  {
    name: 'Protego',
    type: 'Shield Charm',
    description: 'Raises a bright shield that deflects curses, jinxes, and attacks.',
    effect: 'protego',
  },
  {
    name: 'Stupefy',
    type: 'Stunning Spell',
    description: 'Blasts a red pulse that stuns the screen for a dramatic moment.',
    effect: 'stupefy',
  },
  {
    name: 'Fidelius Charm',
    type: 'Secret Magic',
    description: 'Hides a secret inside a trusted keeper with a mysterious fog effect.',
    effect: 'fidelius',
  },
  {
    name: 'Legilimens',
    type: 'Mind Magic',
    description: 'Reveals thought-like rings and memories around the pointer.',
    effect: 'legilimens',
  },
  {
    name: 'Sectumsempra',
    type: 'Dark Curse',
    description: 'Creates a sharp crimson slash; displayed only as a visual portfolio effect.',
    effect: 'sectumsempra',
  },
  {
    name: 'Waddiwassi',
    type: 'Everyday Jinx',
    description: 'Launches tiny comic sparks like small objects flying through the air.',
    effect: 'waddiwassi',
  },
  {
    name: 'Bat-Bogey Hex',
    type: 'Fun Hex',
    description: 'Releases playful bat silhouettes that flutter across the interface.',
    effect: 'bats',
  },
];

export default function MagicalExperience() {
  const [activeSpell, setActiveSpell] = useState(spells[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [isMusicOn, setIsMusicOn] = useState(false);
  const [burstKey, setBurstKey] = useState(0);
  const audioRef = useRef(null);
  const gainRef = useRef(null);
  const rafRef = useRef(null);

  const particles = useMemo(() => Array.from({ length: 18 }, (_, index) => index), []);

  useEffect(() => {
    function updatePointer(event) {
      if (rafRef.current) return;
      rafRef.current = window.requestAnimationFrame(() => {
        document.documentElement.style.setProperty('--pointer-x', `${event.clientX}px`);
        document.documentElement.style.setProperty('--pointer-y', `${event.clientY}px`);
        rafRef.current = null;
      });
    }

    window.addEventListener('pointermove', updatePointer, { passive: true });
    return () => {
      window.removeEventListener('pointermove', updatePointer);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (audioRef.current) audioRef.current.close();
    };
  }, []);

  function castSpell(spell = spells[(spells.findIndex((item) => item.name === activeSpell.name) + 1) % spells.length]) {
    setActiveSpell(spell);
    setBurstKey((current) => current + 1);
    document.body.dataset.spell = spell.effect;
    window.setTimeout(() => {
      if (document.body.dataset.spell === spell.effect) delete document.body.dataset.spell;
    }, 2200);
  }

  function toggleMusic() {
    if (isMusicOn) {
      gainRef.current?.gain.setTargetAtTime(0.0001, audioRef.current.currentTime, 0.08);
      setIsMusicOn(false);
      return;
    }

    if (!audioRef.current) {
      const audio = new window.AudioContext();
      const gain = audio.createGain();
      gain.gain.value = 0.0001;
      gain.connect(audio.destination);
      [261.63, 329.63, 392, 493.88].forEach((frequency, index) => {
        const oscillator = audio.createOscillator();
        const localGain = audio.createGain();
        oscillator.type = index % 2 ? 'triangle' : 'sine';
        oscillator.frequency.value = frequency / (index === 3 ? 2 : 1);
        localGain.gain.value = 0.045 / (index + 1);
        oscillator.connect(localGain).connect(gain);
        oscillator.start();
      });
      audioRef.current = audio;
      gainRef.current = gain;
    }

    audioRef.current.resume();
    gainRef.current.gain.setTargetAtTime(0.16, audioRef.current.currentTime, 0.12);
    setIsMusicOn(true);
  }

  return (
    <>
      <div className="world-map-layer" aria-hidden="true" />
      <div className="magic-pointer-glow" aria-hidden="true" />
      <div className={`spell-burst spell-${activeSpell.effect}`} key={burstKey} aria-hidden="true">
        {particles.map((particle) => (
          <span key={particle} style={{ '--spark-index': particle }} />
        ))}
      </div>
      <aside className={`spell-panel ${isOpen ? 'is-open' : ''}`} aria-label="Interactive magic controls">
        <button className="spell-tab" type="button" onClick={() => setIsOpen((current) => !current)}>
          🪄 Spells
        </button>
        <div className="spell-panel-card">
          <p className="spell-eyebrow">Wizard mode</p>
          <h2>{activeSpell.name}</h2>
          <strong>{activeSpell.type}</strong>
          <p>{activeSpell.description}</p>
          <div className="spell-actions">
            <button type="button" onClick={() => castSpell()}>
              Cast Spell
            </button>
            <button type="button" onClick={toggleMusic} aria-pressed={isMusicOn}>
              {isMusicOn ? 'Pause Magic Music' : 'Play Magic Music'}
            </button>
          </div>
          <div className="spell-list" aria-label="Choose a spell">
            {spells.map((spell) => (
              <button
                className={spell.name === activeSpell.name ? 'active' : ''}
                type="button"
                key={spell.name}
                onClick={() => castSpell(spell)}
              >
                {spell.name}
              </button>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
