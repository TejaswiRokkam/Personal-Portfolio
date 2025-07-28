import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Float, Text3D, Center, PerspectiveCamera } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Floating geometric shapes
function FloatingGeometry({ position, geometry, color }: any) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        {geometry}
        <meshStandardMaterial 
          color={color} 
          emissive={color} 
          emissiveIntensity={0.2}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}

// Animated particles system
function ParticleField() {
  const points = useMemo(() => {
    const temp = new THREE.Vector3();
    const positions = new Float32Array(2000 * 3);
    
    for (let i = 0; i < 2000; i++) {
      temp.set(
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 50
      );
      temp.toArray(positions, i * 3);
    }
    return positions;
  }, []);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.05;
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length / 3}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#a855f7"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export default function ThreeScene() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas gl={{ antialias: true, alpha: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#a855f7" />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ec4899" />
        
        {/* Stars background */}
        <Stars radius={50} depth={50} count={5000} factor={4} saturation={0} fade />
        
        {/* Particle field */}
        <ParticleField />
        
        {/* Floating geometric shapes */}
        <FloatingGeometry 
          position={[-8, 3, -5]} 
          geometry={<icosahedronGeometry args={[0.8, 0]} />}
          color="#a855f7"
        />
        <FloatingGeometry 
          position={[8, -2, -3]} 
          geometry={<octahedronGeometry args={[1, 0]} />}
          color="#ec4899"
        />
        <FloatingGeometry 
          position={[-6, -4, -8]} 
          geometry={<dodecahedronGeometry args={[0.6, 0]} />}
          color="#06b6d4"
        />
        <FloatingGeometry 
          position={[6, 4, -6]} 
          geometry={<tetrahedronGeometry args={[1.2, 0]} />}
          color="#8b5cf6"
        />
        
        {/* Interactive controls */}
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI - Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}