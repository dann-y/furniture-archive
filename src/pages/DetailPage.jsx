import React from "react";
import { useParams, Link } from "react-router-dom";
import DetailCanvas from "../components/DetailCanvas";
import { data } from "../data";
import "./DetailPage.scss";

const DetailPage = () => {
  const { id } = useParams();

  const doesExist = data.some((el) => el.id === id);

  const isItem = (item) => {
    return item.id === id;
  };

  const { name, designer, description1, description2, url } = data.find(isItem);

  return (
    <>
      <div className="back-button">go back</div>
      <div id="detail-page">
        <div className="container">
          <div className="canvas-container">
            {" "}
            <DetailCanvas url={url} />
          </div>
          <div className="item-detail">
            <h1>{name}</h1>
            <h3>By {designer}</h3>
            <p>
              {description1}
              <br /> <br /> {description2}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
