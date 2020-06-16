import React from "react";
import Title from "./Title";
import Bugs from "./Bugs";
import { Button } from "react-bootstrap";
import ReactPlayer from "react-player";

function video1() {
  window.open("https://photos.app.goo.gl/vDAvdYe4YrBq2icz8");
}

function video2() {
  window.open("https://photos.app.goo.gl/HnXFm7CwRDW4NYPB9");
}

function video3() {
  window.open("https://photos.app.goo.gl/wV3tGzN9B1maZmhL6");
}

export default function VideosPage() {
  return (
    <div>
      <Title />
      <h1 style={{ textAlign: "center" }}>Below Are Some of the Videos</h1>
      <div className="buttonContainer">
        <Button variant="danger" size="lg" block onClick={video1}>
          Video 1
        </Button>
        <Button variant="danger" size="lg" block onClick={video2}>
          Video 2
        </Button>
        <Button variant="danger" size="lg" block onClick={video3}>
          Video 3
        </Button>
      </div>
      <Bugs />
    </div>
  );
}
