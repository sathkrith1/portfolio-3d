"use client";

import { useEffect, ReactNode } from "react";

export function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    import("lenis").then((module) => {
      const lenis = new module.default({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      window.addEventListener("scroll", () => lenis.resize(), { passive: true });

      return () => {
        lenis.destroy();
      };
    });
  }, []);

  return <>{children}</>;
}

export default LenisProvider;