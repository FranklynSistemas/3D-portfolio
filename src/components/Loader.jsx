import React, { useEffect, useRef } from 'react';
import { Html } from "@react-three/drei";


const Loader = () => {
  const loaderRef = useRef();
  const updateParent = () => {
    const parentElement = loaderRef.current.parentNode;
    if (parentElement) {
      parentElement.classList.add('flex', 'justify-center', 'items-center');
    }
  };
  useEffect(() => {
   setTimeout(() => {
      updateParent();
    }, 0);
}, []);
  return (
    <Html ref={loaderRef} className="flex justify-center items-center">
      <div className="w-20 h-20 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </Html>
  );
};

export default Loader;
