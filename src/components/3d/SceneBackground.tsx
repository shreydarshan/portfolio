"use client";

import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Preload } from "@react-three/drei";
import { Particles } from "./Particles";

export function SceneBackground() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  if (!isClient) return null;

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-[#050505]">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.2} />
        {/* Subtle colored point lights for the spatial feel */}
        <pointLight position={[10, 10, 10]} color="#4f46e5" intensity={2} distance={50} />
        <pointLight position={[-10, -10, -10]} color="#818cf8" intensity={1} distance={50} />
        
        <Particles reducedMotion={reducedMotion} />
        
        <Environment preset="city" />
        <Preload all />
      </Canvas>
    </div>
  );
}
