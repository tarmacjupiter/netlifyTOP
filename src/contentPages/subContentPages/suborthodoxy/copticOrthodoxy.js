import React from "react";
import Title from "../../../Title";
import Bugs from "../../../Bugs";
import "./greekOrthodoxy.css";
import { Button } from "react-bootstrap";

const openCopticOrthodoxyWiki = () => {
  window.open(
    "https://en.wikipedia.org/wiki/Coptic_Orthodox_Church_of_Alexandria"
  );
};

export default function copticOrthodoxy() {
  return (
    <div>
      <Title />
      <div style={{ textAlign: "center" }}>
        <h1>Coptic Orthodoxy</h1>
      </div>
      <div className="center">
        <Button
          variant="outline-info"
          size="small"
          style={{ marginTop: 10, marginBottom: 20 }}
          onClick={openCopticOrthodoxyWiki}
        >
          Learn More
        </Button>
      </div>
      <p style={{ marginLeft: 40, marginRight: 40 }}>
        The Egyptian Church is traditionally believed to be founded by St Mark
        at around AD 42,[8] and regards itself as the subject of many prophecies
        in the Old Testament. Isaiah the prophet, in Chapter 19, Verse 19 says
        "In that day there will be an altar to the LORD in the midst of the land
        of Egypt, and a pillar to the LORD at its border". The first Christians
        in Egypt were common people who spoke Egyptian Coptic.[10] There were
        also Alexandrian Jewish people such as Theophilus, whom Saint Luke the
        Evangelist addresses in the introductory chapter of his gospel. When the
        church was founded by Saint Mark during the reign of the Roman emperor
        Nero, a great multitude of native Egyptians (as opposed to Greeks or
        Jews) embraced the Christian faith.[10][11] Christianity spread
        throughout Egypt within half a century of Saint Mark's arrival in
        Alexandria, as is clear from the New Testament writings found in
        Bahnasa, in Middle Egypt, which date around the year AD 200, and a
        fragment of the Gospel of John, written in Coptic, which was found in
        Upper Egypt and can be dated to the first half of the 2nd century. In
        the 2nd century, Christianity began to spread to the rural areas, and
        scriptures were translated into the local languages, namely Coptic.
      </p>
      <Bugs />
    </div>
  );
}
