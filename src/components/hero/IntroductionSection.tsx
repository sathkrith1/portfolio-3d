"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/components/providers/ThemeProvider";

export function IntroductionSection() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <section
      id="introduction"
      className="relative py-24 px-8"
      aria-labelledby="intro-heading"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-16 text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent text-sm font-medium rounded-full border border-accent/20">
            Introduction
          </span>
          <h2 id="intro-heading" className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-fg-primary mt-6 mb-8 leading-[1.05]">
            I BUILD
            <br />
            <span className="text-accent">SYSTEMS</span>
            <br />
            THAT FEEL
            <br />
            ALIVE.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto text-center lg:text-left"
        >
          <div className="space-y-6">
            <motion.p
              className="text-fg-secondary text-lg md:text-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              I'm a game developer focused on Unreal Engine 5, specializing in gameplay systems, AI architecture, combat mechanics, and animation systems.
            </motion.p>
            <motion.p
              className="text-fg-tertiary text-base md:text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              My work explores the intersection of technical implementation and player experience — building systems that respond intelligently, animate fluidly, and create emergent gameplay moments.
            </motion.p>
          </div>

          <div className="space-y-6">
            <motion.div
              className="p-6 rounded-2xl border bg-card-bg"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                borderColor: "var(--card-border)",
                background: "var(--card-bg)",
              }}
            >
              <h3 className="font-display font-semibold text-fg-primary mb-3">PRIMARY STACK</h3>
              <div className="flex flex-wrap gap-3">
                {["Unreal Engine 5", "C++", "Blueprints", "Niagara", "UMG", "GAS", "Chaos Physics"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-sm font-medium rounded-full border transition-colors hover:border-accent hover:text-accent"
                    style={{
                      borderColor: "var(--border)",
                      color: "var(--fg-secondary)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="p-6 rounded-2xl border bg-card-bg"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                borderColor: "var(--card-border)",
                background: "var(--card-bg)",
              }}
            >
              <h3 className="font-display font-semibold text-fg-primary mb-3">DISCIPLINES</h3>
              <div className="flex flex-wrap gap-3">
                {["Gameplay Programming", "AI Systems", "Combat Design", "Animation Systems", "Vehicle Physics", "Tools Development"].map((disc) => (
                  <span
                    key={disc}
                    className="px-3 py-1.5 text-sm font-medium rounded-full border transition-colors hover:border-accent hover:text-accent"
                    style={{
                      borderColor: "var(--border)",
                      color: "var(--fg-secondary)",
                    }}
                  >
                    {disc}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}