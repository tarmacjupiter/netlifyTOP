import React from "react";
import Title from "../Title";
import Bugs from "../Bugs";
import ReactPlayer from "react-player";

export default function criticalDoctrines() {
  return (
    <div>
      <Title />
      <h1 style={{ textAlign: "center" }}>8 Critical Doctrines</h1>
      <div
        style={{
          flex: 1,
          justifyContent: "space-around",
          alignItems: "center",
          display: "flex",
        }}
      >
        <ReactPlayer
          url="https://www.youtube.com/watch?v=5fvQ5L6XL_I"
          width={640}
          height={430}
          controls={true}
        />
      </div>
      <Bugs />
    </div>
  );
}
