import React from "react";
import Title from "./Title";
import Bugs from "./Bugs";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function VideosPage() {
  return (
    <div>
      <Title />
      <h1 style={{ textAlign: "center" }}>Below Are Some of the Videos</h1>
      <div className="buttonContainer">
        <Button variant="danger" size="lg" block>
          <Link
            to="/videos/whyorthodox"
            style={{ color: "white", textDecoration: "none" }}
          >
            Why Orthodox?
          </Link>
        </Button>
        <Button variant="danger" size="lg" block>
          <Link
            to="/videos/8criticaldoctrines"
            style={{ color: "white", textDecoration: "none" }}
          >
            8 Critical Doctrines
          </Link>
        </Button>
        <Button variant="danger" size="lg" block>
          <Link
            to="videos/fallennature"
            style={{ color: "white", textDecoration: "none" }}
          >
            Fallen Nature
          </Link>
        </Button>
      </div>
      <Bugs />
    </div>
  );
}
