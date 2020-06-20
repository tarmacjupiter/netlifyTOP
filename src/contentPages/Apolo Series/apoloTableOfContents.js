import React from "react";
import Title from "../../Title";
import Bugs from "../../Bugs";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../TableOfContents.css";

export default function apoloTableOfContents() {
  return (
    <div>
      <Title />
      <h1 style={{ textAlign: "center" }}>Apolo Talk Series</h1>
      <h3 style={{ textAlign: "center" }}>
        The "Apolo Talk Series" is a series of many slide show presentations
      </h3>
      <div className="buttonContainer">
        <Button variant="danger" size="lg" block>
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to="/tableofcontents/apolotalkseries/apolotalkpart1"
            className="linkText"
          >
            Apolo Talk Part 1
          </Link>
        </Button>
        <Button variant="danger" size="lg" block>
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to="/tableofcontents/apolotalkseries/apolotalkpart2"
            className="linkText"
          >
            Apolo Talk Part 2
          </Link>
        </Button>
        <Button variant="danger" size="lg" block>
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to="/tableofcontents/apolotalkseries/apolotalkpart3"
            className="linkText"
          >
            Apolo Talk Part 3
          </Link>
        </Button>
      </div>

      <Bugs />
    </div>
  );
}
