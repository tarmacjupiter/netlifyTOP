import React from "react";
import Title from "../Title";
import Bugs from "../Bugs";
import ReactGoogleSlides from "react-google-slides";
import ReactPlayer from "react-player";

export default function evidenceOfChrist() {
  return (
    <div>
      <Title />
      <h1 style={{ textAlign: "center" }}>Evidence Of Christ</h1>
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
          slidesLink="https://docs.google.com/presentation/d/1-a4C-HahR-jydxzfhc9wTAJjNMyDGPSmB7VyE4Ojhq0/edit?usp=sharing"
          showControls
          slideDuration={999999}
        />
        <ReactPlayer
          url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          style={{ marginRight: 10 }}
          width={640}
          height={430}
        />
      </div>
      <Bugs />
    </div>
  );
}
