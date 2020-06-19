import React from "react";
import "./App.css";
import Title from "./Title";
import Card from "./Card";
import Slides from "./Slides";
import { Button } from "react-bootstrap";

function newFormTab() {
  window.open(
    "https://docs.google.com/forms/d/e/1FAIpQLSdcgnC878u0Um6eFqtKPIEh2vDde4kuXlQgFEmJjeh2n2ah9w/viewform?usp=sf_link"
  );
}

export default function MainPage() {
  return (
    <div>
      <Title />
      <h4 style={{ textAlign: "center", marginBottom: 10 }}>
        Press the TOP Logo to Navigate Home
      </h4>
      <div className="Card">
        <Card />
      </div>
      <br />
      <div className="Card">
        <Slides />
      </div>
      <div className="bottomContainer">
        <p>Any Bugs? Report them here:</p>
        <Button variant="info" className="bugsButton" onClick={newFormTab}>
          Bugs
        </Button>
      </div>
    </div>
  );
}
