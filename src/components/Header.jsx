import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  const [checked, setChecked] = useState(false);

  const collapseNavbar = () => {
    setChecked(false);
  };
  return (
    <div className="sticky">
      <div className="nav">
        <input
          type="checkbox"
          id="nav-check"
          checked={checked}
          onClick={() => setChecked(!checked)}
        ></input>
        <div className="nav-header">
          <div className="nav-title">
            <Link onClick={collapseNavbar} to="/">
              furniture archive
            </Link>
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
          <Link to="/" onClick={collapseNavbar}>
            archive
          </Link>
          <Link to="/about" onClick={collapseNavbar}>
            about
          </Link>
        </div>
      </div>
    </div>
  );
}
