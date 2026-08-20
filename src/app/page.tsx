'use client';

import { Canvas3D } from '@/components/canvas/Canvas3D';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Reunimos™',
    description: 'Building the next generation of design collaboration tools. A platform that bridges the gap between design and engineering workflows.',
    year: '2024-2026',
    type: 'coding' as const,
    link: '/reunimos',
    tags: ['React', 'TypeScript', 'Canvas', 'Real-time'],
  },
  {
    title: 'Inspire Mono',
    description: 'A variable monospace font family designed for code and technical documentation. Features multiple weights and optical sizes.',
    year: '2025',
    type: 'coding' as const,
    link: '/inspire-mono',
    tags: ['Typography', 'Variable Fonts', 'Font Engineering'],
  },
  {
    title: 'Wasm Design Utils',
    description: 'High-performance design utilities compiled to WebAssembly. Color manipulation, layout algorithms, and geometry operations.',
    year: '2025',
    type: 'coding' as const,
    link: '/wasm-design-utils',
    tags: ['Rust', 'WebAssembly', 'Performance'],
  },
  {
    title: 'VectorSymbols',
    description: 'Figma plugin for managing and syncing vector symbol libraries across teams. 10k+ downloads.',
    year: '2023',
    type: 'tools' as const,
    external: true,
    link: 'https://www.figma.com/community/plugin/1255914175202017737/vectorsymbols',
    tags: ['Figma Plugin', 'TypeScript', 'Design Systems'],
  },
  {
    title: 'DarkSide',
    description: 'Figma plugin for instant dark mode conversion of designs. Automatically generates dark variants.',
    year: '2021',
    type: 'tools' as const,
    external: true,
    link: 'https://www.figma.com/community/plugin/986289377230504703/darkside',
    tags: ['Figma Plugin', 'Color Theory', 'Automation'],
  },
  {
    title: 'aDrive 阿里云盘',
    description: 'Led design engineering for Alibaba\'s cloud storage product. 100M+ users, cross-platform desktop and mobile.',
    year: '2020-2022',
    type: 'coding' as const,
    link: '/adrive',
    tags: ['React Native', 'Electron', 'Design Systems'],
  },
  {
    title: 'Shore Icon',
    description: 'Open-source icon system with 500+ icons. Designed for consistency across platforms and sizes.',
    year: '2022',
    type: 'tools' as const,
    link: '/shore-icon',
    tags: ['Icon Design', 'Design Systems', 'Open Source'],
  },
  {
    title: 'Teambition',
    description: 'Project management and collaboration platform. Acquired by Alibaba. Designed core workflows and design system.',
    year: '2018-2020',
    type: 'coding' as const,
    link: '/teambition',
    tags: ['React', 'Design Systems', 'SaaS'],
  },
];

export default function Home() {
  return (
    <>
      <Canvas3D />
      <Header />
      <main className="flex-1 pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-24"
          >
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-8"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent text-sm font-medium rounded-full border border-accent/20">
                  Design & Engineering
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-fg-primary mb-8"
              >
                Thinking in systems.<br />
                <span className="text-accent">Designing</span> with care.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg md:text-xl text-fg-secondary max-w-2xl leading-relaxed mb-10"
              >
                I&apos;m Haoqi Wen, leading Design Engineering and AI exploration at scale.
                Outside work, I build design tools for team efficiency.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap gap-4 text-sm text-fg-tertiary"
              >
                <span>Previously: <strong className="text-fg-secondary">Alibaba aDrive</strong>, <strong className="text-fg-secondary">Teambition</strong>, <strong className="text-fg-secondary">100offer</strong></span>
                <span>Building: <strong className="text-fg-secondary"><a href="https://reunimos.cc" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">reunimos™</a></strong></span>
              </motion.div>
            </div>
          </motion.section>

          {/* Craft & Taste Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-24"
          >
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-fg-primary mb-6">
                  I bring <span className="text-accent">craft & taste</span> to digital work
                </h2>
                <p className="text-fg-secondary text-lg leading-relaxed mb-6">
                  I explore how to shape AI-era workflows with craft and taste, building the next generation of digital products.
                </p>
                <p className="text-fg-tertiary leading-relaxed">
                  Design engineering sits at the intersection of design, engineering, and product thinking. It's about translating
                  design intent into production-ready code, building tools that amplify creativity, and maintaining the highest
                  standards of quality across the entire product lifecycle.
                </p>
              </div>
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="p-6 bg-card-bg border border-card-border rounded-xl hover:border-accent/50 transition-colors"
                >
                  <h3 className="font-display font-semibold text-fg-primary mb-2">Design Systems at Scale</h3>
                  <p className="text-fg-secondary text-sm">Building and maintaining design systems that serve 100M+ users across multiple platforms.</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="p-6 bg-card-bg border border-card-border rounded-xl hover:border-accent/50 transition-colors"
                >
                  <h3 className="font-display font-semibold text-fg-primary mb-2">AI-Augmented Workflows</h3>
                  <p className="text-fg-secondary text-sm">Exploring how LLMs and generative AI can enhance design and engineering workflows.</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="p-6 bg-card-bg border border-card-border rounded-xl hover:border-accent/50 transition-colors"
                >
                  <h3 className="font-display font-semibold text-fg-primary mb-2">Tool Building</h3>
                  <p className="text-fg-secondary text-sm">Creating tools that bridge the gap between design and engineering — Figma plugins, CLI tools, and more.</p>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Projects Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-between mb-10">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-fg-primary">
                Selected Work
              </h2>
              <span className="text-fg-tertiary text-sm font-mono">8 Projects</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </motion.section>
        </div>
      </main>
      <Footer />
    </>
  );
}