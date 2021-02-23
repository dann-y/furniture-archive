import React from "react";
import "./DetailPage.scss";
import DetailCanvas from "../components/DetailCanvas";

const DetailPage = () => {
  return (
    <>
      <div className="back-button">go back</div>
      <div id="detail-page">
        <div className="container">
          <div className="canvas-container">
            {" "}
            <DetailCanvas url={"/wirechair.gltf"} />
          </div>
          <div className="item-detail">
            <h1>Wassily Chair</h1>
            <h3>By Marcel Breuer</h3>
            <p>
              Revolutions in design are most often driven by advancements in
              material and technology. The famous Wassily Chair by Marcel Breuer
              is precisely one of these, the first ever chair to feature a
              bent-steel frame. While it was first created in 1926, it marked
              the beginning of a new era in modern furniture with a design that
              maintains a progressive look even today. <br /> <br /> The Wassily
              Chair was first built by Marcel Breuer at the Bauhaus institution
              in Dessau, Germany. Breuer found his inspiration for the chair in
              the bent form of a bicycle handlebar, available for the first time
              in steel due to a development in technology. The German steel
              manufacturer Mannesmann had developed a process to produce
              seamless steel tubing, the first to allow tubes to be bent without
              breaking at the seam. Breuer’s Adler bicycle featured such tubing,
              which inspired the designer to employ this material in furniture.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
