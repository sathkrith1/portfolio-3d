'use client';

import { useClock } from '@/hooks/useClock';
import { motion } from 'framer-motion';

export function Clock() {
  const { time, date } = useClock('Asia/Shanghai');

  return (
    <div className="flex flex-col items-end gap-0.5 font-mono text-xs">
      <motion.span
        key={time}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-fg-primary font-medium tabular-nums"
      >
        {time}
      </motion.span>
      <span className="text-fg-tertiary">{date}</span>
      <span className="text-fg-tertiary/60">GMT+8</span>
    </div>
  );
}