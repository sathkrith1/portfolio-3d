import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const easings = {
  expo: "expo.inOut",
  circ: "circ.inOut",
  power2: "power2.inOut",
  power3: "power3.inOut",
  power4: "power4.inOut",
  elastic: "elastic.out(1, 0.5)",
  back: "back.out(1.2)",
};

export const durations = {
  fast: 0.4,
  normal: 0.8,
  slow: 1.2,
  slower: 1.6,
};

export function animateHeroIn() {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline({ defaults: { ease: easings.expo, duration: durations.normal } });

    tl.from(".hero-title-line", {
      yPercent: 100,
      opacity: 0,
      stagger: 0.08,
    })
      .from(
        ".hero-meta",
        { y: 30, opacity: 0 },
        "-=0.4"
      )
      .from(
        ".hero-nav",
        { y: 20, opacity: 0 },
        "-=0.3"
      )
      .from(
        ".scroll-indicator",
        { y: 20, opacity: 0 },
        "-=0.2"
      );

    return tl;
  });

  return () => ctx.revert();
}

export function animateTextReveal(selector: string, options: {
  stagger?: number;
  delay?: number;
  duration?: number;
  ease?: string;
} = {}) {
  const {
    stagger = 0.05,
    delay = 0,
    duration = durations.normal,
    ease = easings.expo,
  } = options;

  const ctx = gsap.context(() => {
    gsap.from(selector, {
      yPercent: 100,
      opacity: 0,
      stagger,
      delay,
      duration,
      ease,
    });
  });

  return () => ctx.revert();
}

export function animateProjectHover(
  projectElement: HTMLElement,
  isEntering: boolean
) {
  const image = projectElement.querySelector(".project-image") as HTMLElement;
  const content = projectElement.querySelector(".project-content") as HTMLElement;

  if (isEntering) {
    gsap.to(image, { scale: 1.05, duration: 0.6, ease: easings.expo });
    gsap.to(content, { x: 20, duration: 0.4, ease: easings.expo });
  } else {
    gsap.to(image, { scale: 1, duration: 0.8, ease: easings.expo });
    gsap.to(content, { x: 0, duration: 0.6, ease: easings.expo });
  }
}

export function animateSectionEnter(selector: string) {
  const ctx = gsap.context(() => {
    gsap.from(selector, {
      scrollTrigger: {
        trigger: selector,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
      y: 60,
      opacity: 0,
      duration: durations.slow,
      ease: easings.expo,
      stagger: 0.1,
    });
  });

  return () => ctx.revert();
}

export function animateCounter(
  element: HTMLElement,
  endValue: number,
  duration: number = 2
) {
  const obj = { value: 0 };
  gsap.to(obj, {
    value: endValue,
    duration,
    ease: "power2.out",
    onUpdate: () => {
      element.textContent = Math.round(obj.value).toLocaleString();
    },
  });
}

export function createScrollTrigger(config: {
  trigger: string | Element;
  start?: string;
  end?: string;
  scrub?: number | boolean;
  onUpdate?: (self: ScrollTrigger) => void;
  onEnter?: () => void;
  onLeave?: () => void;
  onEnterBack?: () => void;
  onLeaveBack?: () => void;
}) {
  return ScrollTrigger.create({
    trigger: config.trigger,
    start: config.start || "top 80%",
    end: config.end || "bottom 20%",
    scrub: config.scrub || false,
    onUpdate: config.onUpdate,
    onEnter: config.onEnter,
    onLeave: config.onLeave,
    onEnterBack: config.onEnterBack,
    onLeaveBack: config.onLeaveBack,
  });
}

export function animateCameraTo(
  camera: THREE.Camera,
  target: { x: number; y: number; z: number },
  lookAt: { x: number; y: number; z: number },
  duration: number = 2
) {
  const position = camera.position;
  gsap.to(position, {
    x: target.x,
    y: target.y,
    z: target.z,
    duration,
    ease: easings.expo,
    onUpdate: () => {
      camera.lookAt(lookAt.x, lookAt.y, lookAt.z);
    },
  });
}

import * as THREE from "three";

export function setupScrollAnimations() {
  const ctx = gsap.context(() => {
    gsap.utils.toArray<HTMLElement>("[data-scroll-reveal]").forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: easings.expo,
      });
    });
  });

  return () => ctx.revert();
}