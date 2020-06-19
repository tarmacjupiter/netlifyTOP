import React from "react";
import Title from "../Title";
import Bugs from "../Bugs";
import ReactPlayer from "react-player";

export default function fallenNature() {
  return (
    <div>
      <Title />
      <h1 style={{ textAlign: "center" }}>Fallen Nature</h1>
      <div
        style={{
          flex: 1,
          justifyContent: "space-around",
          alignItems: "center",
          display: "flex",
        }}
      >
        <ReactPlayer
          url="https://www.youtube.com/watch?v=Irhdwu7G_A8"
          width={640}
          height={430}
          controls={true}
        />
      </div>
      <Bugs />
    </div>
  );
}
