'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  year: string;
  type: 'coding' | 'tools' | 'event';
  link?: string;
  external?: boolean;
  image?: string;
  tags?: string[];
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative bg-card-bg border border-card-border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-bg-tertiary">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent/10 to-accent/5">
            <svg className="w-12 h-12 text-accent/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
          </div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6"
        >
          <div className="w-full">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-white/10 backdrop-blur rounded-full text-white mb-2">
              {project.type.charAt(0).toUpperCase() + project.type.slice(1)} Project
            </span>
            <h3 className="text-xl font-display font-semibold text-white mb-1">{project.title}</h3>
            <p className="text-white/80 text-sm">{project.year}</p>
          </div>
        </motion.div>
      </div>

      <div className="p-6">
        <p className="text-fg-secondary text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-xs font-medium bg-bg-tertiary text-fg-tertiary rounded border border-border hover:border-accent hover:text-accent transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {(project.link || project.external) && (
          <motion.a
            href={project.link || '#'}
            target={project.external ? '_blank' : undefined}
            rel={project.external ? 'noopener noreferrer' : undefined}
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
          >
            {project.external ? 'View Project →' : 'View Details →'}
          </motion.a>
        )}
      </div>
    </motion.article>
  );
}

import { useState } from 'react';