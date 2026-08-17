"use client";

import { motion } from "framer-motion";

export function ScrollIndicator() {
  return (
    <motion.div
      className="fixed bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: [0, 10, 0] }}
      transition={{
        opacity: { duration: 1, delay: 1.2 },
        y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
      }}
      aria-hidden="true"
    >
      <span className="text-fg-tertiary text-xs font-mono tracking-widest uppercase">
        Scroll
      </span>
      <svg className="w-6 h-6 text-fg-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </motion.div>
  );
}