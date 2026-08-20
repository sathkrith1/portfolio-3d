'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const clickSound = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
  </svg>
`;

const muteSound = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
    <line x1="23" y1="9" x2="17" y2="15"></line>
    <line x1="17" y1="9" x2="23" y2="15"></line>
  </svg>
`;

export function SoundToggle() {
  const [enabled, setEnabled] = useState(true);
  const [hovered, setHovered] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(
      'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQcAAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA='
    );
    audioRef.current.volume = 0.15;
    audioRef.current.preload = 'auto';
  }, []);

  const playClick = () => {
    if (enabled && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
  };

  const toggle = () => {
    const newEnabled = !enabled;
    setEnabled(newEnabled);
    if (newEnabled) playClick();
  };

  return (
    <button
      onClick={toggle}
      onMouseEnter={() => { setHovered(true); playClick(); }}
      onMouseLeave={() => setHovered(false)}
      className={`relative flex items-center justify-center w-10 h-10 rounded-lg border transition-all duration-200 ${
        enabled
          ? 'border-sound-on/30 text-sound-on hover:bg-sound-on/10'
          : 'border-sound-off/30 text-sound-off hover:bg-sound-off/10'
      }`}
      aria-label={enabled ? 'Sound on' : 'Sound off'}
      aria-pressed={enabled}
    >
      <AnimatePresence mode="wait">
        {enabled ? (
          <motion.div
            key="on"
            initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="w-5 h-5"
            dangerouslySetInnerHTML={{ __html: clickSound }}
          />
        ) : (
          <motion.div
            key="off"
            initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="w-5 h-5"
            dangerouslySetInnerHTML={{ __html: muteSound }}
          />
        )}
      </AnimatePresence>
      {hovered && enabled && (
        <motion.div
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="absolute inset-0 rounded-lg border border-current"
        />
      )}
    </button>
  );
}

import { AnimatePresence } from 'framer-motion';