"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/components/providers/ThemeProvider";

export function AboutSection() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <section
      id="about"
      className="relative py-24 px-8"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent text-sm font-medium rounded-full border border-accent/20">
            About
          </span>
          <h2 id="about-heading" className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-fg-primary mt-6 mb-8 leading-[1.05]">
            BACKGROUND
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          <motion.p className="text-fg-secondary text-lg md:text-xl leading-relaxed">
            Game developer with a focus on Unreal Engine 5. Building gameplay systems, AI architectures, combat mechanics, and animation pipelines that feel responsive and alive.
          </motion.p>

          <motion.p className="text-fg-tertiary text-base md:text-lg leading-relaxed">
            Started with C++ and engine architecture, moved into gameplay programming and AI systems. Every project is an experiment in making digital worlds feel more responsive, more believable, more worth exploring.
          </motion.p>

          <motion.div className="flex flex-wrap justify-center gap-3 mt-10">
            {["2023–2026", "UNREAL ENGINE 5", "C++ / BLUEPRINTS", "GAMEPLAY / AI / ANIMATION"].map((item) => (
              <motion.span
                key={item}
                className="px-4 py-2 text-sm font-medium rounded-full border transition-colors hover:border-accent hover:text-accent"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--fg-tertiary)",
                }}
              >
                {item}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-20 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            { label: "YEARS EXPERIENCE", value: "3+" },
            { label: "PROJECTS SHIPPED", value: "5" },
            { label: "LINES OF CODE", value: "100K+" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="text-center p-8 rounded-2xl border bg-card-bg"
              style={{
                borderColor: "var(--card-border)",
                background: "var(--card-bg)",
              }}
            >
              <motion.div
                className="font-display font-bold text-4xl md:text-6xl text-accent mb-2"
              >
                {stat.value}
              </motion.div>
              <div className="text-fg-tertiary text-sm font-mono uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}