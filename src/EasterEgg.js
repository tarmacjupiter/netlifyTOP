import React from "react";
import ReactPlayer from "react-player";
import Title from "./Title";

export default function EasterEgg() {
  return (
    <div>
      <Title />
      <div style={{ textAlign: "center" }}>
        <h1>Wow, you found my secret...</h1>
        <h2 style={{ marginBottom: 20 }}>Enjoy the song you sicko</h2>
      </div>
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <ReactPlayer url="https://www.youtube.com/watch?v=iL7nX9W3aOU" />
      </div>
    </div>
  );
}
