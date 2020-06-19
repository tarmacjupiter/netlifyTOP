import React from "react";
import Title from "../Title";
import Bugs from "../Bugs";
import ReactPlayer from "react-player";
import ReactGoogleSlides from "react-google-slides";

export default function haveDream() {
  return (
    <div>
      <Title />
      <h1 style={{ textAlign: "center" }}>I Have a Dream</h1>
      <div
        style={{
          flex: 1,
          justifyContent: "space-around",
          alignItems: "center",
          display: "flex",
        }}
      >
        <ReactGoogleSlides
          width={640}
          height={430}
          slidesLink="https://docs.google.com/presentation/d/1Dtwu8FxQCYbR6V1yYDXBsbDS4M9wx8pVaNnh06GWs7U/edit?usp=sharing"
          showControls
          slideDuration={999999}
        />
        <ReactPlayer
          url="https://www.youtube.com/watch?v=l_WSRSUvw2s"
          style={{ marginRight: 10 }}
          width={640}
          height={430}
          controls={true}
        />
      </div>
      <Bugs />
    </div>
  );
}
