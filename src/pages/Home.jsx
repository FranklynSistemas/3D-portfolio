import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";

import majestic from "../assets/majestic-voyage.mp3";
import { HomeInfo, Loader } from "../components";
import { soundoff, soundon } from "../assets/icons";
import { Plane, Sky, Spaceship, Planet } from "../models";

const Home = () => {
  const audioRef = useRef(new Audio(majestic));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  const adjustSpacecraftForScreenSize = () => {
    let screenScale, screenPosition;

    // If screen width is less than 768px, adjust the scale and position
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1, 0];
    } else {
      screenScale = [5, 5, 5];
        // x, y, z
      screenPosition = [0, -1, -2];
    }

    return [screenScale, screenPosition];
  };

  const adjustPlanetForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [15, 15, 15];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [18, 18, 18];
      // x, y, z
      screenPosition = [0, 0, -30];
    }

    return [screenScale, screenPosition];
  };

  const [biplaneScale, biplanePosition] = adjustSpacecraftForScreenSize();
  const [islandScale, islandPosition] = adjustPlanetForScreenSize();

  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[0, 10, 0]} intensity={5} />
          <ambientLight intensity={0.5} />
          
          <hemisphereLight
            skyColor='#b1e1ff'
            groundColor='#000000'
            intensity={3}
          />
          <Spaceship />
          <Sky isRotating={isRotating} />
          <Planet
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={islandPosition}
            scale={islandScale}
            rotation={[0, 0, 0]}
          />
          <Plane
            isRotating={isRotating}
            position={biplanePosition}
            rotation={[0, 20.1, 0]}
            scale={biplaneScale}
          />
        </Suspense>
      </Canvas>

      <div className='absolute bottom-2 left-2'>
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt='jukebox'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className='w-10 h-10 cursor-pointer object-contain'
        />
      </div>
    </section>
  );
};

export default Home;
