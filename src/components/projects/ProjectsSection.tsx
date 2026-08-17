"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { projects } from "@/data/projects";
import { useTheme } from "@/components/providers/ThemeProvider";

export function ProjectsSection() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const hoveredProject = useMotionValue<string | null>(null);

  return (
    <section
      id="projects"
      className="relative py-24 px-8"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-20"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent text-sm font-medium rounded-full border border-accent/20">
                Selected Work
              </span>
              <h2 id="projects-heading" className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-fg-primary mt-6 leading-[1.05]">
                PROJECTS
              </h2>
            </div>
            <span className="text-fg-tertiary text-sm font-mono">
              {projects.length} PROJECTS
            </span>
          </div>
        </motion.div>

        <div className="relative">
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="space-y-1" role="list" aria-label="Projects">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  index={index}
                  isHovered={hoveredProject}
                  setHoveredProject={hoveredProject}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            className="absolute inset-0 z-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <ProjectPreview projectSlug={hoveredProject} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  isHovered,
  setHoveredProject,
}: {
  project: typeof projects[0];
  index: number;
  isHovered: any;
  setHoveredProject: any;
}) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const x = useSpring(isHovered.get() === project.slug ? 20 : 0, {
    stiffness: 300,
    damping: 30,
  });
  const scale = useSpring(isHovered.get() === project.slug ? 1.02 : 1, {
    stiffness: 300,
    damping: 30,
  });
  const borderColor = useTransform(
    isHovered,
    (v) => (v === project.slug ? "var(--accent)" : "var(--card-border)")
  );

  const handleMouseEnter = () => setHoveredProject.set(project.slug);
  const handleMouseLeave = () => setHoveredProject.set(null);

  return (
    <motion.article
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        x,
        scale,
        borderColor,
        background: "var(--card-bg)",
      }}
      className="group relative flex items-center gap-8 p-6 rounded-2xl border bg-card-bg cursor-pointer transition-all duration-500"
      role="listitem"
      data-cursor-text="VIEW"
    >
      <motion.div
        className="flex-shrink-0 w-12 h-12 flex items-center justify-center text-2xl font-display font-bold text-fg-tertiary group-hover:text-accent transition-colors"
      >
        {project.number}
      </motion.div>

      <motion.div className="flex-1 min-w-0">
        <motion.h3
          className="font-display font-semibold text-2xl text-fg-primary group-hover:text-accent transition-colors"
        >
          {project.title}
        </motion.h3>
        <motion.p className="text-fg-tertiary text-sm mt-1 font-mono uppercase tracking-wider">
          {project.category}
        </motion.p>
        <motion.p className="text-fg-secondary text-sm mt-2 font-mono">
          {project.year}
        </motion.p>
      </motion.div>

      <motion.div
        className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-bg-primary transition-all duration-300"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </motion.div>
    </motion.article>
  );
}

function ProjectPreview({ projectSlug }: { projectSlug: any }) {
  const slug = projectSlug.get();
  const project = slug ? projects.find((p) => p.slug === slug) : null;

  if (!project) return null;

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-3xl text-center">
        <motion.div
          className="p-8 rounded-2xl border bg-card-bg/95 backdrop-blur"
          style={{
            borderColor: "var(--card-border)",
            background: "rgba(var(--card-bg-rgb), 0.95)",
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <span className="text-fg-tertiary text-xs font-mono uppercase tracking-widest">
            {project.category}
          </span>
          <motion.h3 className="font-display font-bold text-3xl md:text-4xl text-fg-primary mt-4 mb-4">
            {project.title}
          </motion.h3>
          <motion.p className="text-fg-secondary leading-relaxed">
            {project.description}
          </motion.p>
          <motion.div className="flex flex-wrap justify-center gap-2 mt-6">
            {project.technologies.slice(0, 5).map((tech) => (
              <motion.span
                key={tech}
                className="px-3 py-1 text-xs font-medium rounded-full border"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--fg-tertiary)",
                }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}