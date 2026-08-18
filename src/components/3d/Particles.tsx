import { useRef, useMemo, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function Particles({ reducedMotion }: { reducedMotion: boolean }) {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const mouse = useRef(new THREE.Vector2(0, 0));
  const targetMouse = useRef(new THREE.Vector2(0, 0));
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    
    const handleMouseMove = (event: MouseEvent) => {
      targetMouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      targetMouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const particleCount = reducedMotion ? (isMobile ? 30 : 60) : (isMobile ? 60 : 150);
  const maxDistance = 4.0; // Distance for drawing connecting lines

  // Initialize particle positions and velocities
  const { positions, velocities } = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const vel = [];
    const pseudoRandom = (seed: number) => {
      const x = Math.sin(seed * 13.37) * 10000;
      return x - Math.floor(x);
    };

    for (let i = 0; i < particleCount; i++) {
      // Spread across a wide, deep volume
      pos[i * 3] = (pseudoRandom(i) - 0.5) * 40;     // x
      pos[i * 3 + 1] = (pseudoRandom(i + 1) - 0.5) * 40; // y
      pos[i * 3 + 2] = (pseudoRandom(i + 2) - 0.5) * 20 - 5; // z (slightly pushed back)

      vel.push(new THREE.Vector3(
        (pseudoRandom(i + 3) - 0.5) * 0.02,
        (pseudoRandom(i + 4) - 0.5) * 0.02,
        (pseudoRandom(i + 5) - 0.5) * 0.01
      ));
    }
    return { positions: pos, velocities: vel };
  }, [particleCount]);

  // Pre-allocate arrays for lines to avoid GC during animation
  const maxLines = particleCount * 5; 
  const linePositions = useMemo(() => new Float32Array(maxLines * 6), [maxLines]);
  const lineColors = useMemo(() => new Float32Array(maxLines * 6), [maxLines]);

  useFrame(() => {
    if (!pointsRef.current || !linesRef.current) return;

    const positionsAttr = pointsRef.current.geometry.attributes.position as THREE.BufferAttribute;
    const posArray = positionsAttr.array as Float32Array;
    
    // Smooth mouse interpolation
    mouse.current.lerp(targetMouse.current, 0.05);

    // Update particle positions
    for (let i = 0; i < particleCount; i++) {
      let x = posArray[i * 3];
      let y = posArray[i * 3 + 1];
      let z = posArray[i * 3 + 2];
      
      const vel = velocities[i];

      // Add velocity
      if (!reducedMotion) {
        x += vel.x;
        y += vel.y;
        z += vel.z;
      }

      // Mouse repulsion/attraction (subtle)
      const dx = mouse.current.x * 20 - x;
      const dy = mouse.current.y * 20 - y;
      const distToMouse = Math.sqrt(dx * dx + dy * dy);
      
      if (distToMouse < 8 && !reducedMotion) {
        const force = (8 - distToMouse) * 0.002;
        x -= dx * force; // Repel
        y -= dy * force;
      }

      // Boundary check to keep particles in view
      if (x > 25) x = -25;
      if (x < -25) x = 25;
      if (y > 25) y = -25;
      if (y < -25) y = 25;
      if (z > 5) vel.z *= -1;
      if (z < -25) vel.z *= -1;

      posArray[i * 3] = x;
      posArray[i * 3 + 1] = y;
      posArray[i * 3 + 2] = z;
    }
    positionsAttr.needsUpdate = true;

    // Calculate connections
    let lineIndex = 0;
    
    if (!reducedMotion) {
      for (let i = 0; i < particleCount; i++) {
        const x1 = posArray[i * 3];
        const y1 = posArray[i * 3 + 1];
        const z1 = posArray[i * 3 + 2];

        for (let j = i + 1; j < particleCount; j++) {
          if (lineIndex >= maxLines) break;

          const x2 = posArray[j * 3];
          const y2 = posArray[j * 3 + 1];
          const z2 = posArray[j * 3 + 2];

          const dx = x1 - x2;
          const dy = y1 - y2;
          const dz = z1 - z2;
          const distSq = dx * dx + dy * dy + dz * dz;

          if (distSq < maxDistance * maxDistance) {
            const dist = Math.sqrt(distSq);
            // Alpha based on distance
            const alpha = 1.0 - dist / maxDistance;
            
            // Add line positions
            linePositions[lineIndex * 6] = x1;
            linePositions[lineIndex * 6 + 1] = y1;
            linePositions[lineIndex * 6 + 2] = z1;
            
            linePositions[lineIndex * 6 + 3] = x2;
            linePositions[lineIndex * 6 + 4] = y2;
            linePositions[lineIndex * 6 + 5] = z2;

            // Base color is a subtle violet/blue rgb(99, 102, 241)
            const r = 0.38, g = 0.40, b = 0.94;
            
            // Apply color and alpha to vertices
            for (let c = 0; c < 2; c++) {
              lineColors[lineIndex * 6 + c * 3] = r * alpha;
              lineColors[lineIndex * 6 + c * 3 + 1] = g * alpha;
              lineColors[lineIndex * 6 + c * 3 + 2] = b * alpha;
            }

            lineIndex++;
          }
        }
      }
    }

    const linesPosAttr = linesRef.current.geometry.attributes.position as THREE.BufferAttribute;
    const linesColAttr = linesRef.current.geometry.attributes.color as THREE.BufferAttribute;
    
    // Update line geometry
    linesPosAttr.array = linePositions;
    linesColAttr.array = lineColors;
    
    linesRef.current.geometry.setDrawRange(0, lineIndex * 2);
    linesPosAttr.needsUpdate = true;
    linesColAttr.needsUpdate = true;
    
    // Group parallax based on mouse
    const motionScale = reducedMotion ? 0.05 : 0.15;
    pointsRef.current.position.x = mouse.current.x * 2 * motionScale;
    pointsRef.current.position.y = mouse.current.y * 2 * motionScale;
    linesRef.current.position.x = mouse.current.x * 2 * motionScale;
    linesRef.current.position.y = mouse.current.y * 2 * motionScale;
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.15}
          color="#818cf8"
          transparent
          opacity={0.8}
          sizeAttenuation={true}
        />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[lineColors, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          vertexColors
          transparent
          opacity={0.4}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>
    </group>
  );
}
