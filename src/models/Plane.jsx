import { a } from "@react-spring/three";
import { useEffect, useRef } from "react";
import { useGLTF, useAnimations  } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import planeScene from "../assets/3d/spacecraft.glb";
import { ExhaustFire } from "./";

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
    if (meshRef.current) {
      meshRef.current.position.y = spacecraftRef.current.position.y;
    }
});

const getSpaceCraftPosition = () => {
  let screenPosition;

  if (window.innerWidth < 768) {
    screenPosition =[props.position[0] - 0.75, props.position[1] + 0.98, props.position[2] - 0.2];
  } else {
    screenPosition = [props.position[0] - 1.4, props.position[1] + 1, props.position[2] + 0.1];
  }

  return screenPosition;
}

  
  return (
    <a.group>
      <mesh {...props} ref={spacecraftRef}>
        // use the primitive element when you want to directly embed a complex 3D
        model or scene
        <primitive object={scene} />
      </mesh>
      <ExhaustFire ref={meshRef} position={getSpaceCraftPosition()} isSmallScreen={window.innerWidth < 768}/>
    </a.group>
  );
}
