'use client';

import { useTheme } from '@/context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme, toggleTheme } = useTheme();

  const themes = [
    { value: 'light' as const, label: '☀️', title: 'Light' },
    { value: 'dark' as const, label: '🌙', title: 'Dark' },
    { value: 'auto' as const, label: '🖥️', title: 'Auto' },
  ];

  return (
    <div className="relative inline-flex items-center gap-1 bg-bg-tertiary rounded-lg p-1 border border-border">
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          className="absolute inset-0.5 bg-accent rounded-md shadow-sm"
          style={{
            width: '33.33%',
            transform: `translateX(${themes.findIndex(t => t.value === theme) * 100}%)`,
          }}
          initial={false}
          animate={{ transform: `translateX(${themes.findIndex(t => t.value === theme) * 100}%)` }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />
      </AnimatePresence>
      {themes.map((t) => (
        <button
          key={t.value}
          onClick={() => setTheme(t.value)}
          className={`relative z-10 px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
            theme === t.value
              ? 'text-white'
              : 'text-fg-secondary hover:text-fg-primary'
          }`}
          title={t.title}
          aria-label={t.title}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}