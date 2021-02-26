import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import "./MainPage.scss";
import { data } from "../data";

const MainPage = () => {
  const [page, setPage] = useState("1");

  return (
    <>
      <div id="main-page">
        <div className="container">
          {data.map((x) => {
            return (
              <Card
                url={x.url}
                id={x.id}
                name={x.name}
                date={x.date}
                designer={x.designer}
              />
            );
          })}
        </div>
      </div>
      {/* <div className="page-nav">
        <div>
          <Link to="first">1</Link>
          <Link to="first">2</Link>
          <Link to="first">3</Link>
        </div>
      </div> */}
    </>
  );
};

export default MainPage;
