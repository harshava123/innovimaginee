import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

gsap.registerPlugin(ScrollTrigger);

function RotatingModel() {
  const modelRef = useRef();
  const { scene } = useGLTF("/models/space_boi.glb");

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.002; // Smooth auto-rotation
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={[0.8, 0.8, 0.8]} // Adjusted scale
      position={[0, -1.5, 0]} // Centered model
    />
  );
}

// Preload the model for better performance
useGLTF.preload("/models/space_boi.glb");

function Herosection() {
  const headingRef = useRef(null);
  const subtextRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      subtextRef.current,
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: subtextRef.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* 3D Model Background */}
      <div
        className="fixed top-0 left-0 w-full h-full z-[-1] bg-black"
      >
        <Canvas
          camera={{ position: [0, 2, 10], fov: 45, near: 0.1, far: 100 }}
        >
          <ambientLight intensity={0.3} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <spotLight position={[0, 5, 5]} intensity={1.5} angle={Math.PI / 6} penumbra={1} />
          <RotatingModel />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 text-gray-200 min-h-screen flex flex-col justify-center items-center text-center px-4">
        <h1
          ref={headingRef}
          className="text-4xl font-serif sm:text-5xl font-bold text-gray-100 mb-4"
        >
          INNOVIMAGINE
        </h1>
        <p ref={subtextRef} className="text-gray-400 text-lg sm:text-xl mb-6">
          Innovative Solutions for Unparalleled Digital Experiences
        </p>
      </div>
    </div>
  );
}

export default Herosection;
