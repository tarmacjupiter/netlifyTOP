import React from "react";
import Title from "../../../Title";
import Bugs from "../../../Bugs";
import "./greekOrthodoxy.css";
import { Button } from "react-bootstrap";

function openGreekOrthodoxyWiki() {
  window.open("https://en.wikipedia.org/wiki/Greek_Orthodox_Church");
}

export default function greekOrthodoxy() {
  return (
    <div>
      <Title />
      <div style={{ textAlign: "center" }}>
        <h1>Greek Orthodoxy</h1>
      </div>
      <div className="center">
        <Button
          variant="outline-info"
          size="small"
          style={{ marginTop: 10, marginBottom: 20 }}
          onClick={openGreekOrthodoxyWiki}
        >
          Learn More
        </Button>
      </div>

      <p style={{ marginLeft: 40, marginRight: 40 }}>
        The Greek Orthodox churches are descended from churches which the
        Apostles founded in the Balkans and the Middle East during the first
        century A.D., and they maintain many traditions practiced in the ancient
        Church. Orthodox Churches, unlike the Catholic Church, have no single
        Supreme Pontiff, or Bishop (see also: Pontifex maximus), and hold the
        belief that Christ is the head of the Church. However, they are each
        governed by a committee of Bishops, called the Holy Synod, with one
        central Bishop holding the honorary title of "first among equals". Greek
        Orthodox Churches are united in communion with each other, as well as
        with the other Eastern Orthodox Churches. The Orthodox hold a common
        doctrine and a common form of worship, and they see themselves not as
        separate Churches but as administrative units of one single Church. They
        are notable for their extensive tradition of iconography (see also:
        Byzantine art), for their veneration of the Mother of God and the
        Saints, and for their use of the Divine Liturgy on Sundays, which is a
        standardized worship service dating back to the fourth century A.D. in
        its current form. The most commonly used Divine Liturgy of the Orthodox
        Church was written by Saint John Chrysostom (347–407 A.D.). Others are
        attributed to St. Basil the Great, St. James, the Brother of God and St.
        Gregory the Dialogist. The current territory of the Greek Orthodox
        Churches more or less covers the areas in the Balkans, Anatolia, and the
        Eastern Mediterranean that used to be a part of the Byzantine Empire.
        The majority of Greek Orthodox Christians live within Greece and
        elsewhere in the southern Balkans including Albania, but also in Jordan,
        the Palestinian territories, Iraq, Syria, Lebanon, Cyprus, Anatolia,
        European Turkey, and the South Caucasus. In addition, due to the large
        Greek diaspora, there are many Greek Orthodox Christians who live in
        North America and Australia. Orthodox Christians in Finland, who compose
        about 1% of the population, are also under the jurisdiction of a Greek
        Orthodox Church (the Ecumenical Patriarchate). There are also many Greek
        Orthodox Christians, with origins dating back to the Byzantine and
        Ottoman periods, who are of Arabic-speaking or mixed Greek and
        Arabic-speaking ancestry and live in southern Turkey, Israel, Palestine,
        Iraq, Syria, Lebanon, Jordan, and Egypt. They attend churches which
        conduct their services in Arabic, the common language of most Greek
        Orthodox believers in the Levant, while at the same time maintaining
        elements of the Byzantine Greek cultural tradition. Ethnic Greeks in
        Russia and Greeks in Ukraine, as well as Pontic Greeks and Caucasus
        Greeks from the former Russian Transcaucasus, often consider themselves
        both Greek Orthodox and Russian Orthodox, which is consistent with the
        Orthodox faith (since Orthodoxy is the same across ethnic boundaries).
        Thus, they may attend services held in Old Russian and Old Church
        Slavonic, without this in any way undermining their Orthodox faith or
        distinct Greek ethnic identity. Over the centuries, these Pontic
        Greek-speaking Greek Orthodox communities have mixed through
        intermarriage in varying degrees with ethnic Russians and other Orthodox
        Christians from mainly Southern Russia, where most of them settled
        between the Middle Ages and early 19th century.
      </p>

      <Bugs />
    </div>
  );
}
