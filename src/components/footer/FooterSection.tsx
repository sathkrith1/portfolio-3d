"use client";

import { motion } from "framer-motion";
import { footerLinks } from "@/data/projects";
import { useTheme } from "@/components/providers/ThemeProvider";

export function FooterSection() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <footer
      id="contact"
      className="relative py-24 px-8"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent text-sm font-medium rounded-full border border-accent/20">
            Contact
          </span>
          <h2 id="contact-heading" className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-fg-primary mt-6 mb-8 leading-[1.05]">
            LET'S BUILD
            <br />
            <span className="text-accent">SOMETHING</span>
            <br />
            WORTH PLAYING
          </h2>
          <p className="text-fg-secondary text-lg max-w-xl mx-auto leading-relaxed mt-6">
            Open to opportunities, collaborations, and interesting problems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16"
        >
          <motion.a
            href="mailto:sathkrith.gaur@example.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-bg-primary font-medium rounded-xl hover:bg-accent-hover transition-colors"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>GET IN TOUCH</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          </motion.a>

          {footerLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="flex items-center gap-2 px-5 py-3 rounded-xl border bg-card-bg text-fg-secondary hover:text-accent hover:border-accent/50 transition-all duration-300"
              style={{
                borderColor: "var(--card-border)",
                background: "var(--card-bg)",
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
            >
              {link.name}
              {link.external && (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              )}
            </motion.a>
          ))}
        </motion.div>

        <div className="border-t border-border pt-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <p className="text-fg-tertiary text-sm">
              © 2026 Sathkrith Gaur. All rights reserved.
            </p>
            <p className="text-fg-tertiary text-sm font-mono">
              Built with Unreal Engine • Three.js • Next.js
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}