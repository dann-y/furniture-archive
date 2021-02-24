import React from "react";
import Card from "../components/Card";
import "./MainPage.scss";

const MainPage = () => {
  return (
    <>
      <div id="main-page">
        <div className="container">
          <Card url={"/wirechair.gltf"} />
          {/* <Card url={"wirechair.glb"} />
          <Card url={"wirechair.glb"} />
          <Card url={"/wirechair.glb"} />
          <Card url={"wirechair.glb"} />
          <Card url={"wirechair.glb"} /> */}
        </div>
      </div>
      <div className="page-nav">
        <h1>1</h1>
        <h1>2</h1>
        <h1>3</h1>
      </div>
    </>
  );
};

export default MainPage;
