import React from "react";
import "./Title.css";
import { Link } from "react-router-dom";
import Logo from "./images/TOPLOGO5.svg";

function Title() {
  return (
    <div className="Title">
      <header>
        <div>
          <Link to="/">
            <img
              src={Logo}
              alt="Logo"
              style={{ width: "69%", height: "69%" }}
            />
          </Link>
          <h3 style={{ marginTop: 20 }}>The Orthodox Project</h3>
        </div>
      </header>
    </div>
  );
}

export default Title;
