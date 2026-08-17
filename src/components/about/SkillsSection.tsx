"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/projects";
import { useTheme } from "@/components/providers/ThemeProvider";

export function SkillsSection() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const categories = [
    "Engine",
    "Language",
    "Visual Scripting",
    "Systems",
    "AI",
    "Animation",
    "VFX",
    "UI",
    "Physics",
    "Tools",
  ];

  return (
    <section
      id="skills"
      className="relative py-24 px-8"
      aria-labelledby="skills-heading"
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
            Technical Skills
          </span>
          <h2 id="skills-heading" className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-fg-primary mt-6 mb-6 leading-[1.05]">
            EXPERTISE
          </h2>
          <p className="text-fg-secondary text-lg max-w-2xl mx-auto leading-relaxed">
            Deep technical knowledge across the game development stack — from engine internals to player-facing systems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="space-y-16"
        >
          {categories.map((category, catIndex) => {
            const categorySkills = skills.filter((s) => s.category === category);
            if (categorySkills.length === 0) return null;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: catIndex * 0.08 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <span className="font-display font-bold text-2xl text-fg-tertiary">
                    {String(catIndex + 1).padStart(2, "0")}
                  </span>
                  <span className="w-32 h-px bg-gradient-to-r from-accent to-transparent" />
                  <h3 className="font-display font-semibold text-xl text-fg-primary uppercase tracking-wider">
                    {category.toUpperCase()}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {categorySkills.map((skill, skillIndex) => (
                    <motion.button
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: catIndex * 0.08 + skillIndex * 0.03 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-5 py-3 rounded-xl border bg-card-bg text-left min-w-[200px] transition-all duration-300 hover:border-accent/50 hover:shadow-lg focus-visible-ring"
                      style={{
                        borderColor: "var(--card-border)",
                        background: "var(--card-bg)",
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-fg-primary">
                          {skill.name}
                        </span>
                        <span className="text-xs font-mono text-accent px-2 py-0.5 rounded-full bg-accent/10">
                          {skill.level}
                        </span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}