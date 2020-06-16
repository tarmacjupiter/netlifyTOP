import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";

function newTab() {
  window.open(
    "https://docs.google.com/forms/d/e/1FAIpQLSdcgnC878u0Um6eFqtKPIEh2vDde4kuXlQgFEmJjeh2n2ah9w/viewform?usp=sf_link"
  );
}

export default function Bugs() {
  return (
    <div className="bottomContainer">
      <p>Any Bugs? Report them here:</p>
      <Button variant="info" className="bugsButton" onClick={newTab}>
        Bugs
      </Button>
    </div>
  );
}
