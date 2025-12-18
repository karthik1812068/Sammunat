"use client";

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { MeshDistortMaterial, Float, Sphere, MeshWobbleMaterial, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const ParticleField = ({ count = 2000 }) => {
  const points = useRef<THREE.Points>(null!);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    const { clock } = state;
    if (points.current) {
      points.current.rotation.y = clock.getElapsedTime() * 0.05;
      points.current.rotation.x = clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
          args={[particlesPosition, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#60a5fa"
        sizeAttenuation
        transparent
        opacity={0.3}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const FloatingShape = ({ position, color, speed, distort }: any) => {
  const mesh = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.rotation.x = Math.sin(time / 4);
      mesh.current.rotation.y = Math.cos(time / 4);
    }
  });

  return (
    <Float speed={speed} rotationIntensity={2} floatIntensity={2}>
      <Sphere ref={mesh} args={[1, 64, 64]} position={position} scale={1.5}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={speed}
          roughness={0}
          metalness={1}
          transparent
          opacity={0.6}
        />
      </Sphere>
    </Float>
  );
};

const MouseFollower = () => {
  const { viewport } = useThree();
  const light = useRef<THREE.PointLight>(null!);
  
  useFrame((state) => {
    const x = (state.mouse.x * viewport.width) / 2;
    const y = (state.mouse.y * viewport.height) / 2;
    if (light.current) {
      light.current.position.set(x, y, 2);
    }
  });

  return <pointLight ref={light} intensity={10} color="#3b82f6" />;
};

const Background3D = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none bg-white">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={75} />
        
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
        <pointLight position={[-10, -10, -10]} color="#f472b6" intensity={1} />
        
        <MouseFollower />
        <ParticleField count={3000} />
        
        <FloatingShape 
          position={[4, 2, -2]} 
          color="#3b82f6" 
          speed={2} 
          distort={0.4} 
        />
        <FloatingShape 
          position={[-4, -2, -1]} 
          color="#8b5cf6" 
          speed={1.5} 
          distort={0.5} 
        />
        
        <fog attach="fog" args={['#ffffff', 5, 20]} />
      </Canvas>
    </div>
  );
};

export default Background3D;
