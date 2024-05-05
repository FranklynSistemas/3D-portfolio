import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

import spaceshipScene from "../assets/3d/spaceship_with_fusion_core.glb";

const initialPosition = [-5, 3, 2];

// 3D Model from: https://sketchfab.com/3d-models/spaceship-with-fusion-core-45aebadf02474c77a3d7069c3176e442
export function Spaceship() {
  const spaceshipRef = useRef();

  // Load the 3D model and animations from the provided GLTF file
  const { scene, animations } = useGLTF(spaceshipScene);

  // Get access to the animations for the spaceship
  const { actions } = useAnimations(animations, spaceshipRef);

  // Play the "rotating" animation when the component mounts
  // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted.
  useEffect(() => {
    actions["rotating"].play();
  }, []);

  useFrame(({ camera }) => {

    // Check if the spaceship reached a certain endpoint relative to the camera
    if (spaceshipRef.current.position.x > camera.position.x + 40) {
      // Change direction to backward and rotate the spaceship 180 degrees on the y-axis
      spaceshipRef.current.position.x = initialPosition[0];
      spaceshipRef.current.position.y = initialPosition[1];
      spaceshipRef.current.position.z = initialPosition[2];
    } 

    // Update the X and Z positions based on the direction
    spaceshipRef.current.position.x += 0.02;
    spaceshipRef.current.position.z -= 0.02;
  });

  return (
    // to create and display 3D objects
    <mesh ref={spaceshipRef} position={initialPosition} scale={[1, 1, 1]} rotation={[0.3, 5.5, 0]}>
      // use the primitive element when you want to directly embed a complex 3D
      model or scene
      <primitive object={scene} />
    </mesh>
  );
}
