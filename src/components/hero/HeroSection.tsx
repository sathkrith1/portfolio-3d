"use client";

import { Canvas } from "@react-three/fiber";
import { HeroCanvas } from "@/components/3d/scenes/HeroCanvas";
import { Navigation } from "@/components/layout/Navigation";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { motion } from "framer-motion";
import { useTheme } from "@/components/providers/ThemeProvider";

export function HeroSection() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden"
      aria-label="Hero"
    >
      <div className="fixed inset-0 z-0" aria-hidden="true">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          style={{ width: "100%", height: "100%" }}
          gl={{ preserveDrawingBuffer: true, antialias: true, alpha: true }}
          dpr={[1, 2]}
          frameloop="demand"
          onCreated={({ gl }) => {
            gl.setClearColor(isDark ? 0x0a0a0a : 0xfafafa, 1);
            gl.outputColorSpace = "srgb";
            gl.toneMapping = 1;
            gl.toneMappingExposure = 1;
          }}
        >
          <HeroCanvas />
        </Canvas>
      </div>

      <Navigation />

      <div className="relative z-10 flex flex-col items-start justify-center min-h-screen px-8 pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-16 max-w-5xl"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-fg-tertiary text-sm font-mono tracking-widest uppercase">
              Game Developer
            </span>
            <span className="w-16 h-px bg-accent" />
          </div>

          <div className="flex flex-col leading-[0.95]">
            <motion.h1
              className="font-display font-bold text-7xl md:text-9xl lg:text-[10rem] text-fg-primary"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              SATHKRITH
            </motion.h1>
            <motion.h1
              className="font-display font-bold text-7xl md:text-9xl lg:text-[10rem] text-fg-primary"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              GAUR
            </motion.h1>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-wrap items-center gap-8 text-fg-secondary text-sm font-mono max-w-5xl"
        >
          <span>UNREAL ENGINE 5</span>
          <span className="w-px h-4 bg-border" />
          <span>C++ / BLUEPRINTS</span>
          <span className="w-px h-4 bg-border" />
          <span>GAMEPLAY / AI / COMBAT</span>
          <span className="w-px h-4 bg-border" />
          <span>ANIMATION / VFX</span>
          <span className="w-px h-4 bg-border" />
          <span>INDIA</span>
          <span className="w-px h-4 bg-border" />
          <span>2026</span>
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  );
}

export default HeroSection;