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
        <h2 className="headerText">Some Basics to Review</h2>
      </div>
      <div className="buttonContainer">
        <Button variant="danger" size="lg" block>
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to="/tableofcontents/orthodoxy/"
          >
            Orthodoxy
          </Link>
        </Button>
        <Button variant="danger" size="lg" block>
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to="/tabelofcontents/theology"
            className="linkText"
          >
            Theology
          </Link>
        </Button>
        <Button variant="danger" size="lg" block>
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to="/tableofcontents/apologetics"
            className="linkText"
          >
            Apologetics
          </Link>
        </Button>
        <h2 className="headerText" style={{ marginBottom: 30, marginTop: 30 }}>
          Google Slide Presentations
        </h2>
        <Button variant="danger" size="lg" block>
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to="/tableofcontents/evidenceofChrist"
            className="linkText"
          >
            Evidence of Christ
          </Link>
        </Button>
        <Button variant="danger" size="lg" block>
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to="/tableofcontents/ihaveadream"
            className="linkText"
          >
            I Have A Dream
          </Link>
        </Button>
        <Button variant="danger" size="lg" block>
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to="/tableofcontents/apolotalkseries"
            className="linkText"
          >
            Apolo Talk Series
          </Link>
        </Button>
      </div>

      <Bugs />
    </div>
  );
}
