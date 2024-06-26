import React, { useRef, useMemo, forwardRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export const ExhaustFire = forwardRef(function (
  { position, isSmallScreen },
  ref
) {
  //const ref = useRef();
  const count = 1500; // Increase the number of particles for a denser effect
  const vertex = (isSmallScreen ? 0.1 : 0.25 )
  const vertexA = new THREE.Vector3(
    position[0],
    position[1] - vertex,
    position[2]
  );
  const vertexB = new THREE.Vector3(
    position[0],
    position[1] + vertex,
    position[2]
  );
  const vertexC = new THREE.Vector3(
    position[0] + (isSmallScreen ? 0.5 : 0.8),
    position[1],
    position[2] + (isSmallScreen ? 0.2 : 0.8) // Modify the position of the cone's tip
  );

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const color = new THREE.Color();

    for (let i = 0; i < count; i++) {
      const r1 = Math.random();
      const r2 = Math.random();
      const sqrtR1 = Math.sqrt(r1);

      const baryA = 1 - sqrtR1;
      const baryB = sqrtR1 * (1 - r2);
      const baryC = r2 * sqrtR1;

      const point = vertexA
        .clone()
        .multiplyScalar(baryA)
        .add(vertexB.clone().multiplyScalar(baryB))
        .add(vertexC.clone().multiplyScalar(baryC));

      positions.set([point.x, point.y, point.z], i * 3);

      velocities[i * 3 + 0] = -0.2 - Math.random() * 0.1;
      velocities[i * 3 + 1] = (Math.random() * 2 - 1) * 0.02;
      velocities[i * 3 + 2] = (Math.random() * 2 - 1) * 0.02;


      // Adjust these ranges as needed
      const middleRange = 0.05; // Range considered as 'middle' (40% of max height)

      // Assigning red in the middle range and blue otherwise
      if (point.x > 0.5 - middleRange / 2 && point.x < 0.5 + middleRange / 2) {
        color.setHSL(0.0, 1.0, 0.5); // Red, full saturation
      } else {
        color.setHSL(0.58, 1.0, 0.5); // Blue, full saturation
      }

      colors.set([color.r, color.g, color.b], i * 3);
    }

    return { positions, velocities, colors };
  }, [count]);

  useFrame(() => {
    if (ref?.current?.geometry === null) return;
    const positions = ref.current.geometry.attributes.position.array;

    for (let i = 0; i < count; i++) {
      positions[i * 3 + 0] += particles.velocities[i * 3 + 0];
      positions[i * 3 + 1] += particles.velocities[i * 3 + 1];
      positions[i * 3 + 2] += particles.velocities[i * 3 + 2];
      // position[0] - (isSmallScreen ? 0.001 : 0.001)
      if (positions[i * 3 + 0] < position[0] - ( isSmallScreen ? 0.2 : 0.5)) {
        const r1 = Math.random();
        const r2 = Math.random();
        const sqrtR1 = Math.sqrt(r1);
        const baryA = 1 - sqrtR1;
        const baryB = sqrtR1 * (1 - r2);
        const baryC = r2 * sqrtR1;

        const point = vertexA
          .clone()
          .multiplyScalar(baryA)
          .add(vertexB.clone().multiplyScalar(baryB))
          .add(vertexC.clone().multiplyScalar(baryC));

        positions[i * 3] = point.x;
        positions[i * 3 + 1] = point.y;
        positions[i * 3 + 2] = point.z;
      }
    }

    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        size={0.05}
        sizeAttenuation={true}
        vertexColors={true}
        transparent={true}
        alphaTest={0.5}
        opacity={0.75}
      />
    </points>
  );
});
