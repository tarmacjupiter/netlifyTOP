import React from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
import "../src/TableOfContents.css";
import "../src/App.css";
import { Button } from "react-bootstrap";
import Bugs from "./Bugs";

export default function TableOfContents() {
  return (
    <div>
      <Title />
      <div>
        <h2 className="headerText">
          Below Are Some of the General Subjects Covered
        </h2>
      </div>
      <div className="buttonContainer">
        <Button variant="danger" size="lg" block>
          <Link
            style={{ color: "black", textDecoration: "none" }}
            to="/tableofcontents/orthodoxy/"
          >
            Orthodoxy
          </Link>
        </Button>
        <Button variant="danger" size="lg" block>
          <Link
            style={{ color: "black", textDecoration: "none" }}
            to="/tabelofcontents/theology"
            className="linkText"
          >
            Theology
          </Link>
        </Button>
        <Button variant="danger" size="lg" block>
          <Link
            style={{ color: "black", textDecoration: "none" }}
            to="/tableofcontents/apologetics"
            className="linkText"
          >
            Apologetics
          </Link>
        </Button>
      </div>

      <Bugs />
    </div>
  );
}
