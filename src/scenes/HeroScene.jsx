import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Stars } from "@react-three/drei";

function Sphere() {
  return (
    <Float speed={2} rotationIntensity={1.2} floatIntensity={2}>
      <mesh position={[2, 0, 0]}>
        <sphereGeometry args={[1.4, 64, 64]} />

        <meshStandardMaterial
          color="#00ffff"
          emissive="#00ffff"
          emissiveIntensity={2}
          metalness={0.4}
          roughness={0.1}
        />
      </mesh>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 6] }}>

      <ambientLight intensity={1} />

      <directionalLight position={[2, 2, 2]} />

      <Stars
        radius={100}
        depth={50}
        count={4000}
        factor={4}
        fade
        speed={1}
      />

      <Sphere />

      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={1}
      />

    </Canvas>
  );
}