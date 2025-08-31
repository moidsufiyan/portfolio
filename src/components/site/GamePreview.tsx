import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";

const Player: React.FC = () => {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.position.y = 0.1 + Math.sin(t * 2) * 0.08;
      ref.current.rotation.z = Math.sin(t * 1.5) * 0.05;
    }
  });
  return (
    <mesh ref={ref} position={[0, 0.35, 0.2]}>
      <boxGeometry args={[0.5, 0.6, 0.2]} />
      <meshStandardMaterial>
        <primitive object={new THREE.Color("#b11226")} attach="color" />
      </meshStandardMaterial>
    </mesh>
  );
};

const Ground: React.FC = () => (
  <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.05, 0]}>
    <planeGeometry args={[4, 2]} />
    <meshStandardMaterial>
      <primitive object={new THREE.Color("#0f2a57")} attach="color" />
    </meshStandardMaterial>
  </mesh>
);

export const GamePreview: React.FC = () => {
  return (
    <div className="relative h-48 w-full overflow-hidden bg-card">
      <Canvas orthographic camera={{ zoom: 120, position: [0, 0.8, 5] }} dpr={[1, 2]}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 4, 5]} intensity={0.6} />
        <Ground />
        <Player />
        {/* Coins */}
        <mesh position={[-0.9, 0.5, 0]}>
          <circleGeometry args={[0.08, 32]} />
          <meshStandardMaterial>
            <primitive object={new THREE.Color("#ffd166")} attach="color" />
            <primitive object={new THREE.Color("#ffd166")} attach="emissive" />
          </meshStandardMaterial>
        </mesh>
        <mesh position={[-0.5, 0.9, 0]}>
          <circleGeometry args={[0.08, 32]} />
          <meshStandardMaterial>
            <primitive object={new THREE.Color("#ffd166")} attach="color" />
            <primitive object={new THREE.Color("#ffd166")} attach="emissive" />
          </meshStandardMaterial>
        </mesh>
        <mesh position={[0.8, 0.7, 0]}>
          <circleGeometry args={[0.08, 32]} />
          <meshStandardMaterial>
            <primitive object={new THREE.Color("#ffd166")} attach="color" />
            <primitive object={new THREE.Color("#ffd166")} attach="emissive" />
          </meshStandardMaterial>
        </mesh>
      </Canvas>
    </div>
  );
};

export default GamePreview;