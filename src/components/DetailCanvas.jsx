import React, { Suspense } from "react";
import "./Card.scss";
import { Canvas } from "react-three-fiber";
import { OrbitControls, Plane, OrthographicCamera } from "@react-three/drei";
import GLTFLoader from "../components/GLTFLoader";

const DetailCanvas = ({ url }) => {
  return (
    <>
      <div className="canvas-container">
        <Canvas
          colorManagement
          shadowMap
          camera={{ position: [0, 0, 1], far: 40 }}
        >
          <OrthographicCamera />
          <OrbitControls
            autoRotate
            autoRotateSpeed={4}
            enablePan={false}
            minDistance={0.5}
            maxDistance={1.5}
          />
          <ambientLight intensity={0.4} />
          <directionalLight
            castShadow
            position={[-8, 16, -8]}
            intensity={1}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
          <pointLight castShadow position={[0, 50, 0]} intensity={2} />
          <Suspense castShadow fallback={null}>
            <GLTFLoader scenePath={url} />
          </Suspense>
          {/* <Plane
              receiveShadow
              rotation={[-Math.PI / 2, 0, 0]}
              position={[0, -0.4, 0]}
              args={[1000, 1000]}
            >
              <meshStandardMaterial
                attach="material"
                color="white"
                opacity={0}
              />
            </Plane> */}
        </Canvas>
      </div>
    </>
  );
};

export default DetailCanvas;
