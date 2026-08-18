import { useRef, useMemo, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// The FINAL SYSTEM ORBIT - DENSE ORGANIC AI NETWORK
// Deep space + Neural clusters + Atmospheric radial glows + Thin connections.

export function Particles({ reducedMotion }: { reducedMotion: boolean }) {
  const deepSpaceRef = useRef<THREE.Points>(null);
  const midSpaceRef = useRef<THREE.Points>(null);
  const networkNodesRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const dataParticlesRef = useRef<THREE.Points>(null);
  const atmosphereRef = useRef<THREE.Group>(null);
  
  const mouse = useRef(new THREE.Vector2(0, 0));
  const targetMouse = useRef(new THREE.Vector2(0, 0));
  
  // Responsiveness checks
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const particleMultiplier = isMobile || reducedMotion ? 0.3 : 1;
  
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      targetMouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      targetMouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // ================= 1. DEEP SPACE ================= //
  const deepCount = Math.floor(1500 * particleMultiplier);
  const deepPositions = useMemo(() => {
    const pos = new Float32Array(deepCount * 3);
    for (let i = 0; i < deepCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 80;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 80;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20 - 15; // Z: -15 to -35
    }
    return pos;
  }, [deepCount]);

  // ================= 2. MID SPACE ================= //
  const midCount = Math.floor(600 * particleMultiplier);
  const { midPositions, midColors } = useMemo(() => {
    const pos = new Float32Array(midCount * 3);
    const cols = new Float32Array(midCount * 3);
    const colorChoices = [
      new THREE.Color("#4f46e5"), // Indigo
      new THREE.Color("#818cf8"), // Light Indigo
      new THREE.Color("#a5b4fc"), // Very Light Blue/Violet
      new THREE.Color("#ffffff")  // White
    ];
    for (let i = 0; i < midCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 60;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 60;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10 - 5; // Z: -5 to -15
      
      const color = colorChoices[Math.floor(Math.random() * colorChoices.length)];
      cols[i * 3] = color.r;
      cols[i * 3 + 1] = color.g;
      cols[i * 3 + 2] = color.b;
    }
    return { midPositions: pos, midColors: cols };
  }, [midCount]);

  // ================= 3. ORGANIC NETWORK CLUSTERS ================= //
  const { nodes, edges, lineGeometry } = useMemo(() => {
    const clusters = [
      { center: new THREE.Vector3(-15, 10, -5), radius: 8, count: 12 }, // Top left
      { center: new THREE.Vector3(12, -8, -2), radius: 10, count: 15 }, // Bottom right
      { center: new THREE.Vector3(-10, -12, -8), radius: 7, count: 10 }, // Bottom left
      { center: new THREE.Vector3(15, 12, -6), radius: 9, count: 14 },  // Top right
      { center: new THREE.Vector3(0, 0, -12), radius: 15, count: 20 },  // Center background
    ];

    const allNodes: { pos: THREE.Vector3, isCore: boolean, size: number, color: THREE.Color }[] = [];
    
    // Generate nodes around clusters
    clusters.forEach((cluster) => {
      // Add core node
      allNodes.push({
        pos: cluster.center,
        isCore: true,
        size: 0.05,
        color: new THREE.Color("#6366f1")
      });
      
      // Add cluster satellites
      const satelliteCount = Math.floor(cluster.count * particleMultiplier);
      for (let i = 0; i < satelliteCount; i++) {
        const offset = new THREE.Vector3(
          (Math.random() - 0.5) * cluster.radius,
          (Math.random() - 0.5) * cluster.radius,
          (Math.random() - 0.5) * (cluster.radius / 2)
        );
        allNodes.push({
          pos: cluster.center.clone().add(offset),
          isCore: Math.random() > 0.8, // Occasional mini-core
          size: Math.random() * 0.02 + 0.01,
          color: new THREE.Color(Math.random() > 0.7 ? "#ffffff" : "#a5b4fc")
        });
      }
    });

    // Generate edges based on distance threshold
    const edgesArray: [number, number][] = [];
    const points: THREE.Vector3[] = [];
    const threshold = 6.0;

    for (let i = 0; i < allNodes.length; i++) {
      let connections = 0;
      for (let j = i + 1; j < allNodes.length; j++) {
        const dist = allNodes[i].pos.distanceTo(allNodes[j].pos);
        if (dist < threshold && connections < 4) { // Max 4 connections per node
          edgesArray.push([i, j]);
          points.push(allNodes[i].pos, allNodes[j].pos);
          connections++;
        }
      }
    }

    const lineGeo = new THREE.BufferGeometry().setFromPoints(points);

    return { nodes: allNodes, edges: edgesArray, lineGeometry: lineGeo };
  }, [particleMultiplier]);

  // Buffer attributes for network nodes
  const { nodePositions, nodeColors, nodeSizes } = useMemo(() => {
    const pos = new Float32Array(nodes.length * 3);
    const cols = new Float32Array(nodes.length * 3);
    const sizes = new Float32Array(nodes.length);
    nodes.forEach((n, i) => {
      pos[i * 3] = n.pos.x; pos[i * 3 + 1] = n.pos.y; pos[i * 3 + 2] = n.pos.z;
      cols[i * 3] = n.color.r; cols[i * 3 + 1] = n.color.g; cols[i * 3 + 2] = n.color.b;
      sizes[i] = n.size;
    });
    return { nodePositions: pos, nodeColors: cols, nodeSizes: sizes };
  }, [nodes]);

  // ================= 4. DATA PARTICLES ================= //
  const dataParticleCount = Math.floor(edges.length * 0.3); // 30% of edges have data
  const { particlePositions, particleData } = useMemo(() => {
    const pos = new Float32Array(dataParticleCount * 3);
    const pData = [];
    for (let i = 0; i < dataParticleCount; i++) {
      const edge = edges[Math.floor(Math.random() * edges.length)];
      pData.push({ 
        edge, 
        progress: Math.random(), 
        speed: (Math.random() * 0.001 + 0.0005) * (Math.random() > 0.5 ? 1 : -1) 
      });
      pos[i * 3] = 0; pos[i * 3 + 1] = 0; pos[i * 3 + 2] = 0;
    }
    return { particlePositions: pos, particleData: pData };
  }, [dataParticleCount, edges]);

  // ================= ANIMATION LOOP ================= //
  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    // Smooth Parallax
    mouse.current.lerp(targetMouse.current, 0.03);
    const parallaxX = mouse.current.x * 2.0;
    const parallaxY = mouse.current.y * 1.5;
    
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, parallaxX, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, parallaxY, 0.05);
    state.camera.lookAt(mouse.current.x * 0.2, mouse.current.y * 0.2, 0);

    if (!reducedMotion) {
      if (deepSpaceRef.current) {
        deepSpaceRef.current.rotation.y = time * 0.0005;
        deepSpaceRef.current.rotation.z = time * 0.0002;
      }
      
      if (midSpaceRef.current) {
        midSpaceRef.current.rotation.y = time * 0.001;
        const mat = midSpaceRef.current.material as THREE.PointsMaterial;
        mat.opacity = 0.4 + Math.sin(time * 0.8) * 0.15; 
      }

      if (networkNodesRef.current) {
        networkNodesRef.current.position.y = Math.sin(time * 0.2) * 0.5;
      }

      if (linesRef.current) {
        linesRef.current.position.y = Math.sin(time * 0.2) * 0.5;
        const mat = linesRef.current.material as THREE.LineBasicMaterial;
        mat.opacity = 0.1 + Math.sin(time * 0.5) * 0.05; 
      }

      if (atmosphereRef.current) {
        atmosphereRef.current.position.y = Math.sin(time * 0.2) * 0.5;
      }
      
      // Data Flow
      if (dataParticlesRef.current) {
        dataParticlesRef.current.position.y = Math.sin(time * 0.2) * 0.5;
        const posAttr = dataParticlesRef.current.geometry.attributes.position as THREE.BufferAttribute;
        const posArray = posAttr.array as Float32Array;
        
        for (let i = 0; i < dataParticleCount; i++) {
          const data = particleData[i];
          data.progress += data.speed;
          if (data.progress > 1) data.progress = 0;
          if (data.progress < 0) data.progress = 1;
          
          const startNode = nodes[data.edge[0]].pos;
          const endNode = nodes[data.edge[1]].pos;
          const currentPos = new THREE.Vector3().copy(startNode).lerp(endNode, data.progress);
          
          posArray[i * 3] = currentPos.x;
          posArray[i * 3 + 1] = currentPos.y;
          posArray[i * 3 + 2] = currentPos.z;
        }
        posAttr.needsUpdate = true;
      }
    }
  });

  return (
    <group position={[0, 0, 0]}>
      
      {/* 1. Deep Space Dust */}
      <points ref={deepSpaceRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[deepPositions, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.02} color="#ffffff" transparent opacity={0.3} depthWrite={false} blending={THREE.AdditiveBlending} />
      </points>

      {/* 2. Mid Space Neural Atmosphere */}
      <points ref={midSpaceRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[midPositions, 3]} />
          <bufferAttribute attach="attributes-color" args={[midColors, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.035} vertexColors transparent opacity={0.6} blending={THREE.AdditiveBlending} depthWrite={false} />
      </points>

      {/* 3. Subtle Atmospheric Glows (Radial light) */}
      <group ref={atmosphereRef}>
        {[
          { pos: [-15, 10, -10], color: "#4f46e5", size: 25 },
          { pos: [15, -10, -10], color: "#3730a3", size: 30 },
          { pos: [0, -20, -15], color: "#1e1b4b", size: 40 },
        ].map((glow, i) => (
          <mesh key={`glow-${i}`} position={glow.pos as [number, number, number]}>
            <circleGeometry args={[glow.size, 32]} />
            <meshBasicMaterial 
              color={glow.color} 
              transparent 
              opacity={0.04} 
              blending={THREE.AdditiveBlending} 
              depthWrite={false}
              fog={false}
            />
          </mesh>
        ))}
      </group>

      {/* 4. Organic Network Nodes */}
      <points ref={networkNodesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[nodePositions, 3]} />
          <bufferAttribute attach="attributes-color" args={[nodeColors, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.06} vertexColors transparent opacity={0.9} blending={THREE.AdditiveBlending} depthWrite={false} />
      </points>

      {/* Core Glowing Halos */}
      {nodes.filter(n => n.isCore).map((node, i) => (
        <mesh key={`halo-${i}`} position={node.pos}>
          <circleGeometry args={[0.5, 16]} />
          <meshBasicMaterial color={node.color} transparent opacity={0.15} blending={THREE.AdditiveBlending} depthWrite={false} />
        </mesh>
      ))}

      {/* 5. Thin Network Lines */}
      <lineSegments ref={linesRef}>
        <bufferGeometry attach="geometry" {...lineGeometry} />
        <lineBasicMaterial color="#6366f1" transparent opacity={0.15} depthWrite={false} blending={THREE.AdditiveBlending} />
      </lineSegments>

      {/* 6. Moving Data Particles */}
      <points ref={dataParticlesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[particlePositions, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.05} color="#ffffff" transparent opacity={0.9} blending={THREE.AdditiveBlending} depthWrite={false} />
      </points>

    </group>
  );
}
