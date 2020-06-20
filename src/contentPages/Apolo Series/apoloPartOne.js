import React from "react";
import Title from "../../Title";
import Bugs from "../../Bugs";
import ReactGoogleSlides from "react-google-slides";

export default function apoloPartOne() {
  return (
    <div>
      <Title />
      <h1 style={{ textAlign: "center" }}>Apolo Talk Part 1</h1>
      <div
        style={{
          flex: 1,
          justifyContent: "space-around",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          marginBottom: 10,
        }}
      >
        <h1>#1</h1>
        <ReactGoogleSlides
          width={640}
          height={430}
          slidesLink="https://docs.google.com/presentation/d/1fzlyO84JK_i6daH0YZw7yAWlGf1scv5mupFeI1Ir4Lc/edit"
          showControls
          slideDuration={999999}
        />
        <h1>#2</h1>
        <ReactGoogleSlides
          width={640}
          height={430}
          slidesLink="https://docs.google.com/presentation/d/1YsbpTXnEuhSgh7t79rSXAg3Y_hLcQSTLy5BQyBMua_g/edit"
          showControls
          slideDuration={999999}
        />
        <h1>#3</h1>
        <ReactGoogleSlides
          width={640}
          height={430}
          slidesLink="https://docs.google.com/presentation/d/1uJT5JVk0q4vrQq_Bzu9fPJcY2MQnlHfU8WRLw5TadmE/edit"
          showControls
          slideDuration={999999}
        />
      </div>
      <Bugs />
    </div>
  );
}
