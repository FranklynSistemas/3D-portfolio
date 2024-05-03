import { a } from "@react-spring/three";
import { useEffect, useRef } from "react";
import { useGLTF, useAnimations  } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import planeScene from "../assets/3d/spacecraft.glb";

// 3D Model from: https://sketchfab.com/3d-models/stylized-ww1-plane-c4edeb0e410f46e8a4db320879f0a1db
export function Plane({ isRotating, ...props }) {
  const spacecraftRef = useRef();
  const meshRef = useRef();
  // Load the 3D model and its animations
  const { scene, animations } = useGLTF(planeScene);
  // Get animation actions associated with the plane
  const { actions } = useAnimations(animations, spacecraftRef);

  // Use an effect to control the plane's animation based on 'isRotating'
  // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted.
  useEffect(() => {
    if (isRotating) {
      actions["Animation"].play();
    } else {
      actions["Animation"].stop();
    }
  }, [actions, isRotating]);

  useFrame((state, delta) => {
    // Time factor
    const time = state.clock.getElapsedTime();
    // Amplitude of the oscillation
    const amplitude = .2; // Adjust amplitude to your liking

    // Frequency of the oscillation
    const frequency = 1; // Adjust frequency to your liking

    // Updating the Y position with a sine wave based on time
    spacecraftRef.current.position.y = props.position[1] + amplitude * Math.sin(frequency * time);
    meshRef.current.position.y = spacecraftRef.current.position.y;

    // Flickering effect
    const scale = Math.sin(state.clock.elapsedTime * 10) * 0.5 + 1.5;
    meshRef.current.scale.set(scale, scale, scale);
    meshRef.current.position.y -= delta * 2; // Motion effect
});

  
  return (
    <a.group>
      <mesh {...props} ref={spacecraftRef}>
        // use the primitive element when you want to directly embed a complex 3D
        model or scene
        <primitive object={scene} />
      </mesh>
      <mesh ref={meshRef} position={[-.7, 0, 0]} rotation={[5, 3, 2]}>
        <coneGeometry args={[0.1, 0.5, 10]} />
        <meshBasicMaterial color="red" transparent opacity={0.6} />
      </mesh>
    </a.group>
  );
}
