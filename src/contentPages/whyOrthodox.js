import React from "react";
import Title from "../Title";
import Bugs from "../Bugs";
import ReactPlayer from "react-player";

export default function whyOrthodox() {
  return (
    <div>
      <Title />
      <h1 style={{ textAlign: "center" }}>Why Orthodox?</h1>
      <div
        style={{
          flex: 1,
          justifyContent: "space-around",
          alignItems: "center",
          display: "flex",
        }}
      >
        <ReactPlayer
          url="https://www.youtube.com/watch?v=Aa58goQ_498&list=PLAtPg3PapQ3CXI6LcrhN75qKHk9_AewXD"
          width={640}
          height={430}
          controls={true}
        />
      </div>
      <Bugs />
    </div>
  );
}
