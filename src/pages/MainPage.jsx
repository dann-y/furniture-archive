import React from "react";
import Card from "../components/Card";
import "./MainPage.scss";

const MainPage = () => {
  return (
    <>
      <div id="main-page">
        <div className="container">
          <Card url={"/wirechair.gltf"} />
          <Card url={"wirechair.glb"} />
        </div>
      </div>
    </>
  );
};

export default MainPage;
