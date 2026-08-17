"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/components/providers/ThemeProvider";

const principles = [
  {
    number: "01",
    title: "SYSTEMS OVER SCRIPTS",
    description: "Build modular, data-driven systems that interact emergently rather than hardcoding bespoke behaviors for every scenario.",
  },
  {
    number: "02",
    title: "ANIMATION DRIVES GAMEPLAY",
    description: "Animation is not decoration — it's the communication layer between the game and the player. Every frame carries intent.",
  },
  {
    number: "03",
    title: "AI THAT FEELS ALIVE",
    description: "Enemies should perceive, decide, and react — not just patrol and chase. Believability emerges from layered perception and memory.",
  },
  {
    number: "04",
    title: "TECHNICAL ARTISTRY",
    description: "The best tools disappear. Build pipelines and editor utilities that amplify creativity rather than constrain it.",
  },
];

export function PhilosophySection() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <section
      id="philosophy"
      className="relative py-24 px-8"
      aria-labelledby="philosophy-heading"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-20 text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent text-sm font-medium rounded-full border border-accent/20">
            Philosophy
          </span>
          <h2 id="philosophy-heading" className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-fg-primary mt-6 mb-6 leading-[1.05]">
            HOW I
            <br />
            <span className="text-accent">THINK</span>
            <br />
            ABOUT
            <br />
            BUILDING
          </h2>
          <p className="text-fg-secondary text-lg max-w-2xl mx-auto leading-relaxed">
            Principles that guide every system, every line of code, every design decision.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((principle, index) => (
            <motion.article
              key={principle.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group relative p-8 rounded-2xl border bg-card-bg hover:border-accent/50 transition-all duration-500"
              style={{
                borderColor: "var(--card-border)",
                background: "var(--card-bg)",
              }}
            >
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-display font-bold text-4xl text-fg-tertiary group-hover:text-accent transition-colors">
                  {principle.number}
                </span>
                <span className="w-24 h-px bg-gradient-to-r from-accent to-transparent" />
              </div>
              <h3 className="font-display font-semibold text-xl text-fg-primary mb-4 group-hover:text-accent transition-colors">
                {principle.title}
              </h3>
              <p className="text-fg-secondary leading-relaxed">
                {principle.description}
              </p>
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}