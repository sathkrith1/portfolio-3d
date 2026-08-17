export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  year: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  disciplines: string[];
  heroImage?: string;
  heroVideo?: string;
  model?: string;
  previewImage?: string;
  technicalDetails?: {
    ai?: string;
    combat?: string;
    animation?: string;
    physics?: string;
    systems?: string;
  };
  gallery?: string[];
};

export const projects: Project[] = [
  {
    slug: "dread",
    number: "01",
    title: "DREAD",
    category: "SURVIVAL HORROR / AI / GAMEPLAY",
    year: "2025–2026",
    description: "A survival horror prototype featuring advanced enemy AI perception, stealth mechanics, and atmospheric horror systems built in Unreal Engine 5.",
    longDescription: "DREAD explores the intersection of AI-driven horror and player agency. The project implements a comprehensive perception system where enemies react to sight, sound, and player behavior, creating emergent horror encounters.",
    technologies: ["Unreal Engine 5", "C++", "Blueprints", "Niagara", "UMG"],
    disciplines: ["AI Programming", "Gameplay Systems", "Animation Systems", "Horror Design"],
    previewImage: "/images/dread-preview.jpg",
    technicalDetails: {
      ai: "Implemented a modular perception system with sight cones, hearing radius, and memory. Enemies track last known position, search patterns, and escalate alert states.",
      combat: "Weight-based combat system with dodge, block, and stamina management. Enemy attacks telegraph with animation montages.",
      animation: "Animation Blueprint with state machine, montage blending, and procedural layers for injury/limping.",
      systems: "Inventory, health, sanity, save/checkpoint, and progression systems. Data-driven via DataTables.",
    },
    gallery: ["/images/dread-1.jpg", "/images/dread-2.jpg", "/images/dread-3.jpg"],
  },
  {
    slug: "edge",
    number: "02",
    title: "EDGE",
    category: "COMBAT SYSTEM / ANIMATION",
    year: "2025",
    description: "A precision combat prototype showcasing animation-driven gameplay, state machines, and responsive sword mechanics.",
    longDescription: "EDGE demonstrates a combat system where every frame matters. Built on animation montages, gameplay tags, and a custom state machine for fluid transitions between attack, defense, and movement.",
    technologies: ["Unreal Engine 5", "C++", "Blueprints", "Gameplay Ability System"],
    disciplines: ["Combat Design", "Animation Programming", "Gameplay Systems"],
    previewImage: "/images/edge-preview.jpg",
    technicalDetails: {
      combat: "Animation-rooted combat with 4-directional attacks, perfect parry windows, combo chains, and cancel windows. Hit reaction system with directional knockback.",
      animation: "Animation Blueprint with layered state machine, sync groups for feet IK, and procedural blade trailing via Niagara.",
      systems: "Gameplay Ability System integration for modular abilities, cooldowns, and input buffering.",
    },
    gallery: ["/images/edge-1.jpg", "/images/edge-2.jpg", "/images/edge-3.jpg"],
  },
  {
    slug: "hunt",
    number: "03",
    title: "HUNT",
    category: "ENEMY AI / NAVIGATION",
    year: "2026",
    description: "An AI showcase featuring NavMesh navigation, perception systems, behavior trees, and technical visualization modes.",
    longDescription: "HUNT is a technical demonstration of enemy AI architecture. Features a dual-mode system: experience the AI naturally, or switch to Technical Mode to visualize perception cones, NavMesh paths, behavior tree states, and detection metrics in real-time.",
    technologies: ["Unreal Engine 5", "C++", "Blueprints", "Navigation System", "Behavior Trees", "EQS"],
    disciplines: ["AI Programming", "Navigation", "Systems Architecture"],
    previewImage: "/images/hunt-preview.jpg",
    technicalDetails: {
      ai: "Behavior Tree with 12+ tasks and decorators. Environment Query System for tactical positioning. Dynamic NavMesh updates for destructible environments.",
      systems: "Perception component with sight, hearing, and damage stimuli. Team coordination via blackboard communication.",
    },
    gallery: ["/images/hunt-1.jpg", "/images/hunt-2.jpg", "/images/hunt-3.jpg"],
  },
  {
    slug: "drift",
    number: "04",
    title: "DRIFT",
    category: "VEHICLE PHYSICS / GAMEPLAY",
    year: "2025",
    description: "A vehicle physics prototype with arcade-style drifting, weight transfer, and responsive camera behavior.",
    longDescription: "DRIFT explores the feel of arcade vehicle handling. Custom Chaos Vehicle setup with drift angle calculation, counter-steering assist, and a dynamic camera rig that enhances the sensation of speed and slide.",
    technologies: ["Unreal Engine 5", "C++", "Blueprints", "Chaos Physics"],
    disciplines: ["Vehicle Physics", "Gameplay Programming", "Camera Systems"],
    previewImage: "/images/drift-preview.jpg",
    technicalDetails: {
      physics: "Custom tire friction curves, differential simulation, handbrake drift initiation, and angular velocity clamping for controllable slides.",
      systems: "Input buffering, drift scoring, ghost replay system, and time trial mode with sector splits.",
    },
    gallery: ["/images/drift-1.jpg", "/images/drift-2.jpg", "/images/drift-3.jpg"],
  },
  {
    slug: "motion",
    number: "05",
    title: "MOTION",
    category: "ANIMATION SYSTEM / TOOLS",
    year: "2025",
    description: "A modular animation framework featuring motion matching, procedural layers, and editor tools for rapid iteration.",
    longDescription: "MOTION is a reusable animation system built for production. Features motion matching for locomotion, procedural IK for foot placement, dynamic bone modifiers for impacts, and editor utilities for state machine visualization.",
    technologies: ["Unreal Engine 5", "C++", "Animation Blueprint", "Editor Utilities"],
    disciplines: ["Animation Programming", "Tools Development", "Runtime Systems"],
    previewImage: "/images/motion-preview.jpg",
    technicalDetails: {
      animation: "Motion matching database with 200+ clips. Procedural foot IK with raycast prediction. Dynamic bone modifiers for hit reactions and environmental interaction.",
      systems: "Animation graph debugger, state machine visualizer, and clip analysis tools built as Editor Utility Widgets.",
    },
    gallery: ["/images/motion-1.jpg", "/images/motion-2.jpg", "/images/motion-3.jpg"],
  },
];

export const skills = [
  { name: "Unreal Engine 5", category: "Engine", level: "Expert" },
  { name: "C++", category: "Language", level: "Expert" },
  { name: "Blueprints", category: "Visual Scripting", level: "Expert" },
  { name: "Gameplay Programming", category: "Systems", level: "Expert" },
  { name: "AI Systems", category: "AI", level: "Expert" },
  { name: "Enemy AI", category: "AI", level: "Expert" },
  { name: "Animation Systems", category: "Animation", level: "Advanced" },
  { name: "Combat Systems", category: "Systems", level: "Expert" },
  { name: "Niagara VFX", category: "VFX", level: "Advanced" },
  { name: "UMG / UI", category: "UI", level: "Advanced" },
  { name: "Navigation / NavMesh", category: "AI", level: "Advanced" },
  { name: "Gameplay Ability System", category: "Systems", level: "Advanced" },
  { name: "Chaos Physics", category: "Physics", level: "Intermediate" },
  { name: "Git / GitHub", category: "Tools", level: "Expert" },
];

export const navigation = [
  { label: "WORK", href: "#projects" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTACT", href: "#contact" },
];

export const footerLinks = [
  { name: "GitHub", href: "https://github.com/sathkrithgaur", external: true },
  { name: "LinkedIn", href: "https://linkedin.com/in/sathkrithgaur", external: true },
  { name: "Email", href: "mailto:sathkrith.gaur@example.com", external: false },
];