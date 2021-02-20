import React, { Suspense } from "react";
import "./Card.scss";
import { Canvas } from "react-three-fiber";
import { OrbitControls, Plane } from "@react-three/drei";
import Model from "./Three/Untitled";
import { BoxBufferGeometry } from "three";

function Box() {
  return (
    <mesh position={[0, 0, 0]}>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  );
}

const Card = () => {
  return (
    <>
      <div className="card-container">
        <div className="canvas-container">
          <Canvas colorManagement shadowMap>
            <OrbitControls
              autoRotate
              autoRotateSpeed={4}

              // minPolarAngle={Math.PI / 2.5}
              // maxPolarAngle={Math.PI / 1.7}
            />
            <ambientLight intensity={0.4} />
            <directionalLight
              castShadow
              position={[-8, 16, -8]}
              intensity={0}
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
              shadow-camera-far={50}
              shadow-camera-left={-10}
              shadow-camera-right={10}
              shadow-camera-top={10}
              shadow-camera-bottom={-10}
            />
            <pointLight position={[0, 50, 0]} intensity={2} />
            <Suspense fallback={null}>
              <Model />
            </Suspense>
            {/* <Plane
              receiveShadow
              rotation={[-Math.PI / 2, 0, 0]}
              position={[0, -1, 0]}
              args={[1000, 1000]}
            >
              <meshStandardMaterial
                attach="material"
                color="white"
                opacity={0.9}
              />
            </Plane> */}
          </Canvas>
        </div>
        <div>
          <h1>Chair</h1>
          <p>by Marcel Breuer</p>
        </div>
      </div>
    </>
  );
};

export default Card;
