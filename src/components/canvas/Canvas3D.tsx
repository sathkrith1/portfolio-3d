'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html, Stars } from '@react-three/drei';
import { useTheme } from '@/context/ThemeContext';
import { useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function ParticleSystem() {
  const { resolvedTheme } = useTheme();
  const pointsRef = useRef<THREE.Points>(null);
  const timeRef = useRef(0);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const count = 2000;
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const alphas = new Float32Array(count);
    const speeds = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const radius = 10 + Math.random() * 40;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      sizes[i] = 0.5 + Math.random() * 1.5;
      alphas[i] = 0.1 + Math.random() * 0.4;
      speeds[i] = 0.0001 + Math.random() * 0.0005;
    }

    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
    geo.setAttribute('aAlpha', new THREE.BufferAttribute(alphas, 1));
    geo.setAttribute('aSpeed', new THREE.BufferAttribute(speeds, 1));

    return geo;
  }, []);

  const material = useMemo(() => {
    const isDark = resolvedTheme === 'dark';
    return new THREE.PointsMaterial({
      size: 1,
      vertexColors: false,
      transparent: true,
      opacity: 0.6,
      color: isDark ? 0x4d9fff : 0x0066ff,
      sizeAttenuation: true,
    });
  }, [resolvedTheme]);

  useFrame((_, delta) => {
    timeRef.current += delta;
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0001;
      pointsRef.current.rotation.x += 0.00005;

      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
      const speeds = pointsRef.current.geometry.attributes.aSpeed.array as Float32Array;

      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(timeRef.current * speeds[i / 3] * 1000) * 0.002;
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef} geometry={geometry} material={material} />
  );
}

function GridLines() {
  const { resolvedTheme } = useTheme();
  const gridRef = useRef<THREE.LineSegments>(null);
  const timeRef = useRef(0);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const size = 100;
    const divisions = 50;
    const step = size / divisions;
    const positions: number[] = [];

    for (let i = -divisions / 2; i <= divisions / 2; i++) {
      const pos = i * step;
      positions.push(-size / 2, 0, pos, size / 2, 0, pos);
      positions.push(pos, 0, -size / 2, pos, 0, size / 2);
    }

    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    return geo;
  }, []);

  const material = useMemo(() => {
    const isDark = resolvedTheme === 'dark';
    return new THREE.LineBasicMaterial({
      color: isDark ? 0x2a2a2a : 0xe8e8e8,
      transparent: true,
      opacity: 0.3,
    });
  }, [resolvedTheme]);

  useFrame((_, delta) => {
    timeRef.current += delta;
    if (gridRef.current) {
      const mat = gridRef.current.material as THREE.LineBasicMaterial;
      mat.opacity = 0.15 + Math.sin(timeRef.current * 0.5) * 0.1;
    }
  });

  return <lineSegments ref={gridRef} geometry={geometry} material={material} />;
}

function FloatingShapes() {
  const { resolvedTheme } = useTheme();
  const meshesRef = useRef<THREE.Mesh[]>([]);
  const timeRef = useRef(0);

  const geometries = useMemo(() => [
    new THREE.IcosahedronGeometry(1, 0),
    new THREE.OctahedronGeometry(1, 0),
    new THREE.TetrahedronGeometry(1, 0),
  ], []);

  const materials = useMemo(() => {
    const isDark = resolvedTheme === 'dark';
    return geometries.map((_, i) => new THREE.MeshBasicMaterial({
      color: isDark ? 0x1a1a2e : 0xf0f0f0,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    }));
  }, [resolvedTheme]);

  if (meshesRef.current.length === 0) {
    for (let i = 0; i < 5; i++) {
      const geo = geometries[i % geometries.length];
      const mat = materials[i % materials.length];
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 60 - 20
      );
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      mesh.scale.setScalar(0.5 + Math.random() * 2);
      mesh.userData = {
        speed: 0.1 + Math.random() * 0.3,
        axis: new THREE.Vector3(
          Math.random() - 0.5,
          Math.random() - 0.5,
          Math.random() - 0.5
        ).normalize(),
      };
      meshesRef.current.push(mesh);
    }
  }

  useFrame((_, delta) => {
    timeRef.current += delta;
    meshesRef.current.forEach((mesh, i) => {
      mesh.rotation.x += delta * mesh.userData.speed * 0.5;
      mesh.rotation.y += delta * mesh.userData.speed;
      mesh.position.y += Math.sin(timeRef.current * mesh.userData.speed + i) * 0.02;
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

export function Canvas3D() {
  const { resolvedTheme } = useTheme();
  const bgColor = resolvedTheme === 'dark' ? '#0a0a0a' : '#fafafa';

  return (
    <Canvas
      camera={{ position: [0, 0, 50], fov: 40 }}
      style={{ position: 'fixed', inset: 0, zIndex: 0 }}
      gl={{ preserveDrawingBuffer: true, alpha: true }}
      onCreated={({ gl }) => {
        gl.setClearColor(bgColor, 0);
      }}
    >
      <fog attach="fog" args={[bgColor, 30, 100]} />

      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 20, 10]} intensity={0.5} />

      <ParticleSystem />
      <GridLines />
      <FloatingShapes />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        autoRotate={true}
        autoRotateSpeed={0.2}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI * 2 / 3}
      />
    </Canvas>
  );
}