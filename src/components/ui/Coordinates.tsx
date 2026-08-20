'use client';

import { useMousePosition, useReducedMotion } from '@/hooks/useClock';
import { motion } from 'framer-motion';

export function Coordinates() {
  const { x, y } = useMousePosition();
  const reducedMotion = useReducedMotion();

  const formatCoord = (val: number) => String(Math.round(val)).padStart(4, '0');

  return (
    <div className="flex items-center gap-2 font-mono text-xs text-fg-tertiary">
      <div className="flex items-center gap-1">
        <span className="w-10 text-right tabular-nums">
          <motion.span
            key={x}
            initial={false}
            animate={{ x: reducedMotion ? 0 : (x % 10) * 0.5 }}
            transition={{ duration: 0.1 }}
            className="inline-block"
          >
            {formatCoord(x)}
          </motion.span>
        </span>
        <span className="text-fg-tertiary/40">X</span>
      </div>
      <div className="flex items-center gap-1">
        <span className="w-10 text-right tabular-nums">
          <motion.span
            key={y}
            initial={false}
            animate={{ x: reducedMotion ? 0 : (y % 10) * 0.5 }}
            transition={{ duration: 0.1 }}
            className="inline-block"
          >
            {formatCoord(y)}
          </motion.span>
        </span>
        <span className="text-fg-tertiary/40">Y</span>
      </div>
    </div>
  );
}