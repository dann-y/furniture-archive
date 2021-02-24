import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  return (
    // <div className="sticky">
    //   <header>
    //     <div className="header-inner">
    //       <div className="logo">furniture archive</div>
    //       <nav>
    //         <ul>
    //           <li>
    //             <p>archive</p>
    //           </li>
    //           <li>
    //             <p>about</p>
    //           </li>
    //         </ul>
    //       </nav>
    //     </div>
    //   </header>
    // </div>

    <div className="sticky">
      <div className="nav">
        <input type="checkbox" id="nav-check"></input>
        <div className="nav-header">
          <div className="nav-title">
            <Link to="/">furniture archive</Link>
          </div>
        </div>
        <div className="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className="nav-links">
          <a href="//github.io/jo_geek" target="_blank">
            archive
          </a>
          <a href="http://stackoverflow.com/users/4084003/" target="_blank">
            about
          </a>
        </div>
      </div>
    </div>
  );
}
