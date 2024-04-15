import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useEffect, useMemo, useRef } from "react";

function MovingCube(props: any) {
  const { camera } = useThree();
  const particlesSize = useRef(0.0025);
  const ref = useRef<THREE.Points | any>();
  const bufferGeometryRef = useRef<THREE.BufferGeometry>(null);
  const dampingFactor = useRef(0.025);
  const rotationAngle = useRef({
    raX: 0.5,
    raY: 0.5
  });
  const targetY = useRef<number[]>([]);
  const particlesNum = useRef(200);

  const coordinates = useMemo(() => {
    const coords = [];

    for (let i = 0; i < particlesNum.current; i++) {
      const x = Math.random() * 2 - 1;
      const y = Math.random() - 0.5;
      const z = Math.random() - 0.5;
      const destinationY = Math.random();
      if (targetY.current) {
        targetY.current.push(destinationY as number);
      }
      coords.push(x, y, z);
    }
    return coords;
  }, []);

  const motion = () => {
    const SPEED = 0.0025;

    for (let j = 0; j < particlesNum.current; j++) {
      const currentY = coordinates[j * 3 + 1];
      const step = (0.5 - targetY.current[j] - currentY) * SPEED;
      coordinates[j * 3 + 1] += step;

      if (Math.abs(0.5 - targetY.current[j] - coordinates[j * 3 + 1]) < 0.01) {
        targetY.current[j] = Math.random();
      }
    }

    bufferGeometryRef.current?.setAttribute("position", new THREE.Float32BufferAttribute(coordinates, 3));
  };

  useEffect(() => {
    camera.position.z = 0.5;

    if (bufferGeometryRef.current) {
      bufferGeometryRef.current.setAttribute("position", new THREE.Float32BufferAttribute(coordinates, 3));
    }

    const ROTATION_ANGLE = 0.125;

    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = ((e.clientX * 4.5) / window.innerWidth) * 2 - 1;
      const mouseY = ((e.clientY * 4.5) / window.innerHeight) * 2 - 1;

      rotationAngle.current.raX = (0.25 - mouseX * ROTATION_ANGLE) as any;
      rotationAngle.current.raY = (0.25 - mouseY * ROTATION_ANGLE) as any;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [camera, coordinates]);

  useFrame(() => {
    motion();

    const dx = rotationAngle.current.raX - ref.current.rotation.x;
    const dy = rotationAngle.current.raY - ref.current.rotation.y;

    ref.current.rotation.x += dx * dampingFactor.current;
    ref.current.rotation.y += dy * dampingFactor.current;
  });

  return (
    <points ref={ref}>
      <bufferGeometry ref={bufferGeometryRef} />
      <pointsMaterial size={particlesSize.current} color="#fa96ff" />
    </points>
  );
}

export default function HomeParticles() {
  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <MovingCube />
    </Canvas>
  );
}
