import React from "react";
import "./Title.css";
import { Link } from "react-router-dom";
import Logo from "./images/TOPLOGO.svg";

function Title() {
  return (
    <div className="Title">
      <header>
        <div>
          <Link to="/">
            <img
              src={Logo}
              alt="Logo"
              style={{ width: "65%", height: "65%" }}
            />
          </Link>
          <h3 style={{ marginTop: 20 }}>The Orthodox Project</h3>
        </div>
      </header>
    </div>
  );
}

export default Title;
