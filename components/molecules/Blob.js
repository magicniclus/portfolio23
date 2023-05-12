import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { MathUtils } from "three";

import vertexShader from "../shader/vertexShader";
import fragmentShader from "../shader/fragmentShader";

const Blob = () => {
  const mesh = useRef();
  const hover = useRef(false);

  const uniforms = useMemo(
    () => ({
      u_intensity: {
        value: 0.3,
      },
      u_time: {
        value: 0.0,
      },
    }),
    []
  );

  useFrame((state) => {
    const { clock } = state;
    mesh.current.material.uniforms.u_time.value = 0.4 * clock.getElapsedTime();

    mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
      mesh.current.material.uniforms.u_intensity.value,
      hover.current ? 0.85 : 0.15,
      0.02
    );
  });

  return (
    <Canvas>
      <mesh
        ref={mesh}
        position={[0, 0, 0]}
        scale={1.5}
        onPointerOver={() => (hover.current = true)}
        onPointerOut={() => (hover.current = false)}
      >
        <icosahedronGeometry args={[2, 20]} />
        <shaderMaterial
          fragmentShader={fragmentShader}
          vertexShader={vertexShader}
          uniforms={uniforms}
          wireframe={false}
        />
      </mesh>

      <axesHelper />
      <OrbitControls />
    </Canvas>
  );
};

export default Blob;
