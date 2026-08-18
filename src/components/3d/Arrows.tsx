"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function Arrows({ reducedMotion }: { reducedMotion: boolean }) {
  const group = useRef<THREE.Group>(null);

  // Generate deterministic pseudo-random positions and rotations for the arrows
  const arrows = useMemo(() => {
    const arr = [];
    const pseudoRandom = (seed: number) => {
      const x = Math.sin(seed * 13.37) * 10000;
      return x - Math.floor(x);
    };

    for (let i = 0; i < (reducedMotion ? 5 : 15); i++) {
      const position = new THREE.Vector3(
        (pseudoRandom(i + 1) - 0.5) * 20,
        (pseudoRandom(i + 2) - 0.5) * 20,
        (pseudoRandom(i + 3) - 0.5) * 10 - 5
      );
      const rotation = new THREE.Euler(
        pseudoRandom(i + 4) * Math.PI,
        pseudoRandom(i + 5) * Math.PI,
        pseudoRandom(i + 6) * Math.PI
      );
      const scale = pseudoRandom(i + 7) * 0.5 + 0.5;
      
      // Speed multiplier
      const speed = pseudoRandom(i + 8) * 0.01 + 0.005;
      
      arr.push({ position, rotation, scale, speed });
    }
    return arr;
  }, [reducedMotion]);

  useFrame((state) => {
    if (reducedMotion) return; // Minimal to no movement in reduced motion
    
    if (group.current) {
      group.current.children.forEach((child, i) => {
        const arrow = arrows[i];
        if (arrow) {
          child.rotation.y += arrow.speed;
          child.rotation.x += arrow.speed * 0.5;
          // Subtle floating up and down
          child.position.y = arrow.position.y + Math.sin(state.clock.elapsedTime * arrow.speed * 50) * 0.5;
        }
      });
      
      // Slight group parallax based on mouse
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, (state.pointer.y * Math.PI) / 20, 0.05);
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, (state.pointer.x * Math.PI) / 20, 0.05);
    }
  });

  // Create an elegant, thin 3D arrow geometry
  const arrowGeometry = useMemo(() => {
    const shape = new THREE.Shape();
    // A sleek, minimal arrow shape
    shape.moveTo(0, 0.5);
    shape.lineTo(0.2, 0);
    shape.lineTo(0.05, 0);
    shape.lineTo(0.05, -1);
    shape.lineTo(-0.05, -1);
    shape.lineTo(-0.05, 0);
    shape.lineTo(-0.2, 0);
    shape.lineTo(0, 0.5);

    const extrudeSettings = {
      depth: 0.1,
      bevelEnabled: true,
      bevelSegments: 2,
      steps: 1,
      bevelSize: 0.02,
      bevelThickness: 0.02,
    };
    
    const geom = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geom.center(); // Center the geometry
    return geom;
  }, []);

  return (
    <group ref={group}>
      {arrows.map((props, i) => (
        <mesh
          key={i}
          position={props.position}
          rotation={props.rotation}
          scale={[props.scale, props.scale, props.scale]}
          geometry={arrowGeometry}
        >
          <meshStandardMaterial
            color="#4f46e5"
            opacity={0.6}
            transparent
            metalness={0.8}
            roughness={0.2}
            envMapIntensity={1}
          />
        </mesh>
      ))}
    </group>
  );
}
