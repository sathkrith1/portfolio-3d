"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Project } from "@/data/projects";
import { useTheme } from "@/components/providers/ThemeProvider";

interface ProjectDetailClientProps {
  project: Project;
}

export function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const sections = [
    { id: "overview", label: "OVERVIEW", icon: "📋" },
    { id: "problem", label: "THE PROBLEM", icon: "❓" },
    { id: "approach", label: "THE APPROACH", icon: "💡" },
    { id: "technical", label: "TECHNICAL IMPLEMENTATION", icon: "⚙️" },
    { id: "visual", label: "VISUAL DEMONSTRATION", icon: "🎮" },
    { id: "result", label: "RESULT", icon: "✅" },
    { id: "lessons", label: "LESSONS LEARNED", icon: "📚" },
  ];

  return (
    <div className="min-h-screen bg-bg-primary">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 px-8 py-6 bg-bg-primary/80 backdrop-blur border-b border-border"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="font-display font-bold text-xl text-fg-primary hover:text-accent transition-colors"
          >
            SATHKRITH GAUR
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {sections.map((section) => (
              <motion.a
                key={section.id}
                href={`#${section.id}`}
                className="text-fg-tertiary text-sm font-medium hover:text-accent transition-colors"
              >
                {section.label}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      <main className="pt-24 pb-24 px-8">
        <div className="max-w-5xl mx-auto">
          <motion.header
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="font-display font-bold text-3xl text-fg-tertiary">{project.number}</span>
              <span className="w-24 h-px bg-gradient-to-r from-accent to-transparent" />
              <span className="text-fg-tertiary text-sm font-mono uppercase tracking-widest">{project.category}</span>
            </div>
            <motion.h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-fg-primary leading-[1.05] mb-6">
              {project.title}
            </motion.h1>
            <motion.div className="flex flex-wrap items-center gap-6 text-fg-secondary text-sm font-mono">
              <span>{project.year}</span>
              <span className="w-px h-4 bg-border" />
              <span>UNREAL ENGINE 5</span>
              <span className="w-px h-4 bg-border" />
              <span>C++ / BLUEPRINTS</span>
            </motion.div>
          </motion.header>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="grid lg:grid-cols-3 gap-8 mb-16"
          >
            <div className="lg:col-span-2 space-y-6">
              <motion.div className="aspect-video rounded-2xl bg-bg-tertiary border overflow-hidden relative"
                style={{ borderColor: "var(--card-border)" }}>
                <div className="absolute inset-0 flex items-center justify-center text-fg-tertiary">
                  <span className="text-lg font-mono">HERO VIDEO / IMAGE PLACEHOLDER</span>
                </div>
              </motion.div>

              {project.gallery && project.gallery.length > 0 && (
                <motion.div className="grid grid-cols-3 gap-4 mt-6">
                  {project.gallery.map((img, i) => (
                    <motion.div key={i} className="aspect-square rounded-xl bg-bg-tertiary border overflow-hidden"
                      style={{ borderColor: "var(--card-border)" }}>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>

            <motion.div className="space-y-6 p-6 rounded-2xl border bg-card-bg sticky top-28"
              style={{ borderColor: "var(--card-border)", background: "var(--card-bg)" }}>
              <h3 className="font-display font-semibold text-xl text-fg-primary mb-4">DISCIPLINES</h3>
              <div className="flex flex-wrap gap-2">
                {project.disciplines.map((d) => (
                  <span key={d} className="px-3 py-1.5 text-sm font-medium rounded-full border"
                    style={{ borderColor: "var(--border)", color: "var(--fg-secondary)" }}>
                    {d}
                  </span>
                ))}
              </div>

              <h3 className="font-display font-semibold text-xl text-fg-primary mt-8 mb-4">TECHNOLOGIES</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span key={t} className="px-3 py-1.5 text-sm font-medium rounded-full border"
                    style={{ borderColor: "var(--border)", color: "var(--fg-secondary)" }}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.4 }}
          className="space-y-24"
        >
          {[
            {
              id: "overview",
              title: "PROJECT OVERVIEW",
              content: project.longDescription || project.description,
            },
            {
              id: "problem",
              title: "THE PROBLEM",
              content: `Creating a ${project.category.toLowerCase()} experience that feels responsive, intelligent, and engaging requires solving several interconnected challenges:`,
            },
            {
              id: "approach",
              title: "THE APPROACH",
              content: `The solution centers on a modular, data-driven architecture where systems communicate through well-defined interfaces rather than tight coupling.`,
            },
            {
              id: "technical",
              title: "TECHNICAL IMPLEMENTATION",
              content: project.technicalDetails
                ? Object.entries(project.technicalDetails)
                    .map(([key, value]) => `## ${key.toUpperCase()}\n${value}`)
                    .join("\n\n")
                : "Technical details to be documented.",
            },
            {
              id: "visual",
              title: "VISUAL DEMONSTRATION",
              content: "Interactive demonstration of the systems in action. This section would contain embedded gameplay footage, GIFs, or real-time WebGL visualizations.",
            },
            {
              id: "result",
              title: "RESULT",
              content: "A production-ready prototype demonstrating the core systems with clean architecture, comprehensive documentation, and extensibility for future features.",
            },
            {
              id: "lessons",
              title: "LESSONS LEARNED",
              content: [
                "Modular system design pays dividends when iterating on gameplay",
                "Animation-driven gameplay requires close collaboration between tech and art",
                "AI perception systems benefit greatly from visual debugging tools",
                "Data-driven workflows enable rapid iteration without code changes",
                "Performance profiling should be integrated from day one",
              ].map((lesson) => `• ${lesson}`).join("\n"),
            },
          ].map((section, index) => (
            <motion.section
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="pt-8"
            >
              <div className="flex items-baseline gap-4 mb-8">
                <span className="font-display font-bold text-3xl text-fg-tertiary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="w-32 h-px bg-gradient-to-r from-accent to-transparent" />
                <h2 className="font-display font-bold text-3xl md:text-4xl text-fg-primary">
                  {section.title}
                </h2>
              </div>
              <div className="prose prose-invert max-w-none text-fg-secondary leading-relaxed">
                {section.content.split("\n").map((paragraph, i) => (
                  <motion.p key={i} className="mb-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}>
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </motion.section>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-24 pt-16 border-t border-border"
        >
          <motion.a
            href="/#projects"
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-bg-primary font-medium rounded-xl hover:bg-accent-hover transition-colors"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>BACK TO PROJECTS</span>
          </motion.a>
        </motion.div>
      </main>
    </div>
  );
}