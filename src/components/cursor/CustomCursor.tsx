"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/providers/ThemeProvider";
import { useReducedMotion } from "@/hooks";

export function CustomCursor() {
  const { resolvedTheme } = useTheme();
  const prefersReducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const followerPos = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (prefersReducedMotion) return;

    const updateMousePos = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const animate = () => {
      const dx = mousePos.current.x - followerPos.current.x;
      const dy = mousePos.current.y - followerPos.current.y;

      followerPos.current.x += dx * 0.15;
      followerPos.current.y += dy * 0.15;

      if (followerRef.current) {
        followerRef.current.style.transform = `translate(${followerPos.current.x}px, ${followerPos.current.y}px) translate(-50%, -50%)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", updateMousePos);
    animate();

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], .project-card, [data-cursor-text]'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        setIsHovering(true);
        const text = el.getAttribute("data-cursor-text") || "";
        if (text) setCursorText(text);
      });
      el.addEventListener("mouseleave", () => {
        setIsHovering(false);
        setCursorText("");
      });
    });

    return () => {
      document.removeEventListener("mousemove", updateMousePos);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);

      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", () => {});
        el.removeEventListener("mouseleave", () => {});
      });
    };
  }, [isVisible, prefersReducedMotion]);

  const isDark = resolvedTheme === "dark";
  const cursorColor = isDark ? "rgba(0, 212, 170, 0.8)" : "rgba(0, 184, 107, 0.8)";
  const followerColor = isDark ? "rgba(0, 212, 170, 0.3)" : "rgba(0, 184, 107, 0.3)";
  const textColor = isDark ? "#00d4aa" : "#00b86b";

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] w-2 h-2 rounded-full mix-blend-difference"
        style={{
          background: cursorColor,
          transform: `translate(${mousePos.current.x}px, ${mousePos.current.y}px) translate(-50%, -50%)`,
        }}
        animate={{ scale: isHovering ? 2.5 : 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      />
      <motion.div
        ref={followerRef}
        className="fixed pointer-events-none z-[9998] w-8 h-8 rounded-full mix-blend-difference"
        style={{
          background: followerColor,
          border: `1px solid ${isDark ? "rgba(0, 212, 170, 0.2)" : "rgba(0, 184, 107, 0.2)"}`,
        }}
        animate={{
          scale: isHovering ? 2 : 1,
          borderRadius: isHovering ? "12px" : "50%",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
      <AnimatePresence mode="wait">
        {cursorText && (
          <motion.div
            className="fixed pointer-events-none z-[9997] px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap"
            style={{
              color: textColor,
              background: isDark ? "rgba(10, 10, 10, 0.9)" : "rgba(250, 250, 250, 0.9)",
              border: `1px solid ${textColor}40`,
              backdropFilter: "blur(8px)",
              transform: `translate(${mousePos.current.x + 20}px, ${mousePos.current.y - 10}px)`,
            }}
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -10 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          >
            {cursorText}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default CustomCursor;