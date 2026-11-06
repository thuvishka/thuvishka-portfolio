 "use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, TorusKnot } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";

function Orb() {
  const ref = useRef<Mesh>(null);
  useFrame((_, delta) => { if (ref.current) { ref.current.rotation.x += delta * .12; ref.current.rotation.y += delta * .2; } });
  return <Float speed={1.25} rotationIntensity={.5} floatIntensity={1.1}>
    <TorusKnot ref={ref} args={[1.02, .28, 180, 24, 2, 5]} scale={1.15}>
      <MeshDistortMaterial color="#a78bfa" roughness={.16} metalness={.72} distort={.22} speed={1.6}/>
    </TorusKnot>
  </Float>;
}
export default function Scene() {
  return <div className="scene"><Canvas camera={{position:[0,0,5.2], fov:42}} dpr={[1,1.7]}>
    <ambientLight intensity={1.5}/><pointLight position={[4,3,4]} intensity={35} color="#c4b5fd"/>
    <pointLight position={[-4,-2,1]} intensity={16} color="#7c3aed"/><Orb/>
  </Canvas></div>;
}