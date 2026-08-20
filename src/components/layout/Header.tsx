'use client';

import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { SoundToggle } from '@/components/ui/SoundToggle';
import { Clock } from '@/components/ui/Clock';
import { Coordinates } from '@/components/ui/Coordinates';
import { motion } from 'framer-motion';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4"
        >
          <span className="font-display font-bold text-xl text-fg-primary">
            HAOQI<span className="text-accent">©</span>
          </span>
          <nav className="hidden md:flex items-center gap-6 text-sm text-fg-secondary">
            <a href="/" className="hover:text-fg-primary transition-colors">Work</a>
            <a href="/contact" className="hover:text-fg-primary transition-colors">Contact</a>
          </nav>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-3"
        >
          <ThemeToggle />
          <SoundToggle />
          <Clock />
          <Coordinates />
        </motion.div>
      </div>
    </header>
  );
}