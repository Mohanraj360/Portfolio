// import { OrbitControls } from "@react-three/drei";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { useMemo, useRef } from "react";
// import * as THREE from "three";

// const CustomGeometryParticles = (props: any) => {
//   const { count, shape } = props;

//   // This reference gives us direct access to our points
//   const points = useRef(null);

//   // Generate our positions attributes array
//   const particlesPosition = useMemo(() => {
//     const positions = new Float32Array(count * 3);

//     if (shape === "sphere") {
//       const distance = 1;

//       for (let i = 0; i < count; i++) {
//         const theta = THREE.MathUtils.randFloatSpread(360);
//         const phi = THREE.MathUtils.randFloatSpread(360);

//         let x = distance * Math.sin(theta) * Math.cos(phi);
//         let y = distance * Math.sin(theta) * Math.sin(phi);
//         let z = distance * Math.cos(theta);

//         positions.set([x, y, z], i * 3);
//       }
//     }

//     return positions;
//   }, [count, shape]);

//   return (
//     <points ref={points}>
//       <bufferGeometry>
//         <bufferAttribute
//           attach="attributes-position"
//           count={particlesPosition.length / 3}
//           array={particlesPosition}
//           itemSize={3}
//         />
//       </bufferGeometry>
//       <pointsMaterial size={0.0075} color="#5786F5" sizeAttenuation depthWrite={false} />
//     </points>
//   );
// };

// const Scene = () => {
//   return (
//     <Canvas camera={{ position: [1, 1, 1] }}>
//       <ambientLight intensity={0.5} />
//       {/* Try to change the shape prop to "box" and hit reload! */}
//       <CustomGeometryParticles count={1000} shape="sphere" />
//       <OrbitControls autoRotate />
//     </Canvas>
//   );
// };

// export default Scene;
