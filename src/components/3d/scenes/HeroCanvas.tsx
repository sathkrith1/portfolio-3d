"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useMemo, useEffect } from "react";
import * as THREE from "three";

export function HeroCanvas() {
  const { scene, camera, gl } = useThree();
  const timeRef = useRef(0);
  const mouseRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const environmentRef = { current: null as THREE.Group | null };
  const particlesRef = useRef<THREE.Points>(null);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const count = 15000;
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const alphas = new Float32Array(count);
    const colors = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const radius = 2 + Math.random() * 8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi) - 3;

      sizes[i] = 0.02 + Math.random() * 0.08;
      alphas[i] = 0.1 + Math.random() * 0.4;

      const colorChoice = Math.random();
      if (colorChoice < 0.4) {
        colors[i * 3] = 0.0;
        colors[i * 3 + 1] = 0.83;
        colors[i * 3 + 2] = 0.67;
      } else if (colorChoice < 0.7) {
        colors[i * 3] = 0.2;
        colors[i * 3 + 1] = 0.4;
        colors[i * 3 + 2] = 1.0;
      } else {
        colors[i * 3] = 0.1;
        colors[i * 3 + 1] = 1.0;
        colors[i * 3 + 2] = 0.8;
      }

      velocities[i * 3] = (Math.random() - 0.5) * 0.0005;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.0005;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.0005;
    }

    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));
    geo.setAttribute("aAlpha", new THREE.BufferAttribute(alphas, 1));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geo.setAttribute("aVelocity", new THREE.BufferAttribute(velocities, 3));

    return geo;
  }, []);

  const material = useMemo(() => {
    return new THREE.PointsMaterial({
      size: 1,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
  }, []);

  useEffect(() => {
    const fog = new THREE.Fog(0x0a0a0a, 2, 15);
    scene.fog = fog;

    const envGroup = new THREE.Group();
    environmentRef.current = envGroup;
    scene.add(envGroup);

    return () => {
      scene.remove(envGroup);
      if (geometry) geometry.dispose();
      if (material) material.dispose();
    };
  }, [scene]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((_, delta) => {
    timeRef.current += delta;

    targetRef.current.x += (mouseRef.current.x * 0.5 - targetRef.current.x) * 0.02;
    targetRef.current.y += (mouseRef.current.y * 0.5 - targetRef.current.y) * 0.02;

    camera.position.x += (targetRef.current.x - camera.position.x) * 0.02;
    camera.position.y += (targetRef.current.y - camera.position.y) * 0.02;
    camera.lookAt(0, -1, -5);

    if (environmentRef.current) {
      environmentRef.current.rotation.y += delta * 0.02;
      environmentRef.current.rotation.x = Math.sin(timeRef.current * 0.1) * 0.05;
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.01;
      particlesRef.current.rotation.x += delta * 0.005;

      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
      const velocities = particlesRef.current.geometry.attributes.aVelocity.array as Float32Array;
      const alphas = particlesRef.current.geometry.attributes.aAlpha.array as Float32Array;

      for (let i = 0; i < positions.length; i += 3) {
        const idx = i / 3;
        positions[i] += velocities[i];
        positions[i + 1] += velocities[i + 1];
        positions[i + 2] += velocities[i + 2];

        if (positions[i + 2] > 5) positions[i + 2] = -10;
        if (positions[i + 2] < -10) positions[i + 2] = 5;

        alphas[idx] = 0.1 + Math.sin(timeRef.current * 2 + idx * 0.1) * 0.2;
      }

      particlesRef.current.geometry.attributes.position.needsUpdate = true;
      particlesRef.current.geometry.attributes.aAlpha.needsUpdate = true;
    }
  });

  return (
    <>
      <points ref={particlesRef} geometry={geometry} material={material} />
      <group ref={environmentRef}>
        <EnvironmentGeometry />
      </group>
    </>
  );
}

function EnvironmentGeometry() {
  const meshesRef = useRef<THREE.Mesh[]>([]);

  useEffect(() => {
    const geometries = [
      new THREE.BoxGeometry(2, 4, 2, 2, 2, 2),
      new THREE.CylinderGeometry(0.8, 0.8, 3, 8, 2),
      new THREE.OctahedronGeometry(1.2, 0),
      new THREE.TorusGeometry(1, 0.3, 8, 16),
    ];

    const materials = geometries.map(() =>
      new THREE.MeshPhysicalMaterial({
        color: 0x1a1a2e,
        metalness: 0.3,
        roughness: 0.6,
        transmission: 0.1,
        thickness: 0.5,
        wireframe: true,
        transparent: true,
        opacity: 0.15,
      })
    );

    for (let i = 0; i < 12; i++) {
      const geo = geometries[i % geometries.length];
      const mat = materials[i % materials.length];
      const mesh = new THREE.Mesh(geo, mat);

      mesh.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10 - 2,
        (Math.random() - 0.5) * 20 - 5
      );
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      mesh.scale.setScalar(0.5 + Math.random() * 1.5);
      mesh.userData = {
        speed: 0.05 + Math.random() * 0.15,
        axis: new THREE.Vector3(
          Math.random() - 0.5,
          Math.random() - 0.5,
          Math.random() - 0.5
        ).normalize(),
      };
      meshesRef.current.push(mesh);
    }

    return () => {
      meshesRef.current.forEach((m) => {
        if (m.geometry) m.geometry.dispose();
        if (m.material) {
          if (Array.isArray(m.material)) m.material.forEach((mat) => mat.dispose());
          else m.material.dispose();
        }
      });
    };
  }, []);

  useFrame((_, delta) => {
    meshesRef.current.forEach((mesh) => {
      mesh.rotation.x += delta * mesh.userData.speed * 0.5;
      mesh.rotation.y += delta * mesh.userData.speed;
      mesh.position.y += Math.sin(performance.now() * 0.001 * mesh.userData.speed + mesh.position.x) * 0.005;
    });
  });

  return (
    <>
      {meshesRef.current.map((mesh, i) => (
        <primitive key={i} object={mesh} />
      ))}
    </>
  );
}