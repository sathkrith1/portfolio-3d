"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/components/providers/ThemeProvider";
import { navigation } from "@/data/projects";

export function Navigation() {
  const { resolvedTheme, toggleTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed top-0 left-0 right-0 z-50 px-8 py-6"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.span
          className="font-display font-bold text-xl text-fg-primary"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          SATHKRITH GAUR
        </motion.span>

        <motion.div
          className="hidden md:flex items-center gap-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {navigation.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="text-fg-tertiary text-sm font-medium hover:text-accent transition-colors relative"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              whileHover={{ color: "var(--accent)" }}
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300" />
            </motion.a>
          ))}
        </motion.div>

        <motion.button
          onClick={toggleTheme}
          className="flex items-center justify-center w-10 h-10 rounded-lg border border-border hover:bg-bg-tertiary transition-colors"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDark ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" strokeWidth={1.5} strokeLinecap="round" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" strokeWidth={1.5} strokeLinecap="round" />
            </svg>
          )}
        </motion.button>
      </div>
    </motion.nav>
  );
}