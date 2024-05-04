import React from 'react';
import { Canvas } from "@react-three/fiber";
import { ExhaustFire } from '../models';

const Test = () => {
    return (
        <section className='w-full h-screen relative'>
            <Canvas
        className={`w-full h-screen bg-transparent `}
        camera={{ near: 0.1, far: 1000 }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <ExhaustFire position={[0, 0, 0]} />
      </Canvas>
        </section>
    );
};

export default Test;