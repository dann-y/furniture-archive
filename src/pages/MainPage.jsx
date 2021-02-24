import React from "react";
import { Link } from "react-router-dom";
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
        <div>
          <Link to="first">1</Link>
          <Link to="first">2</Link>
          <Link to="first">3</Link>
        </div>
      </div>
    </>
  );
};

export default MainPage;
