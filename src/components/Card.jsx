import React from "react";
import "./Card.scss";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";

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
          <Canvas>
            <OrbitControls />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 15, 10]} angle={0.3} />
            <Box />
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
