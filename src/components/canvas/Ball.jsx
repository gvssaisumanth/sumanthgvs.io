import React, { Suspense, useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import Loader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={2.5} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color="#400c55"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon, inView }) => {
  return inView ? (
    <Canvas frameloop="always" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<Loader />}>
        <OrbitControls enableZoom={false} position0={0} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  ) : null;
};

const BallCanvasWithObserver = ({ icon }) => {
  const [inView, setInView] = useState(false);
  const ballCanvasRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ballCanvasRef.current) {
      observer.observe(ballCanvasRef.current);
    }

    return () => {
      if (ballCanvasRef.current) {
        observer.unobserve(ballCanvasRef.current);
      }
    };
  }, []);

  return (
    <div ref={ballCanvasRef}>
      <BallCanvas icon={icon} inView={inView} />
    </div>
  );
};

export default BallCanvasWithObserver;
