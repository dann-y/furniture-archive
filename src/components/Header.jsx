import React from "react";
import "./Header.scss";

export default function Header() {
  return (
    <div className="sticky">
      <header>
        <div className="header-inner">
          <div className="logo">furniture archive</div>
          <nav>
            <ul>
              <li>
                <p>archive</p>
              </li>
              <li>
                <p>about</p>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
