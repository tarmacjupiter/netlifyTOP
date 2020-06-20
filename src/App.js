import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

//PAGES
import MainPage from "./MainPage";
import NotFoundPage from "./404";
import TableOfContents from "./TableOfContents";
import Orthodox from "./contentPages/orthodox";
import Theology from "./contentPages/theology";
import Apologetics from "./contentPages/apologetics";
import copticOrthodoxy from "./contentPages/subContentPages/suborthodoxy/copticOrthodoxy";
import greekOrthodoxy from "./contentPages/subContentPages/suborthodoxy/greekOrthodoxy";
import abrahamicReligions from "./contentPages/subContentPages/subtheology/abrahamicRel";
import indianReligions from "./contentPages/subContentPages/subtheology/indianRel";
import VideosPage from "./VideosPage";
import EasterEgg from "./EasterEgg";
import evidenceOfChrist from "./contentPages/evidenceOfChrist";
import whyOrthodox from "./contentPages/whyOrthodox";
import criticalDoctrines from "./contentPages/8criticalDoctrines";
import fallenNature from "./contentPages/fallenNature";
import haveDream from "./contentPages/haveDream";
import apoloTableOfContents from "./contentPages/Apolo Series/apoloTableOfContents";
import apoloPartOne from "./contentPages/Apolo Series/apoloPartOne";
import apoloPartTwo from "./contentPages/Apolo Series/apoloPartTwo";
import apoloPartThree from "./contentPages/Apolo Series/apoloPartThree";

//ROUTES
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route
          exact
          path="/thisisanextremelylongsentencehopeyoudontmessitup"
          component={EasterEgg}
        />
        <Route exact path="/tableofcontents" component={TableOfContents} />
        <Route exact path="/videos" component={VideosPage} />
        <Route exact path="/videos/whyorthodox" component={whyOrthodox} />
        <Route
          exact
          path="/videos/8criticaldoctrines"
          component={criticalDoctrines}
        />
        <Route exact path="/videos/fallennature" component={fallenNature} />
        <Route exact path="/tableofcontents/orthodoxy" component={Orthodox} />
        <Route exact path="/tabelofcontents/theology" component={Theology} />
        <Route
          exact
          path="/tableofcontents/apologetics"
          component={Apologetics}
        />
        <Route
          exact
          path="/tableofcontents/evidenceofchrist"
          component={evidenceOfChrist}
        />
        <Route
          exact
          path="/tableofcontents/ihaveadream"
          component={haveDream}
        />
        <Route
          exact
          path="/tableofcontents/apolotalkseries"
          component={apoloTableOfContents}
        />
        {/* APOLO SERIES START */}
        <Route
          exact
          path="/tableofcontents/apolotalkseries/apolotalkpart1"
          component={apoloPartOne}
        />
        <Route
          exact
          path="/tableofcontents/apolotalkseries/apolotalkpart2"
          component={apoloPartTwo}
        />
        <Route
          exact
          path="/tableofcontents/apolotalkseries/apolotalkpart3"
          component={apoloPartThree}
        />
        {/* APOLO SERIES END */}
        <Route
          exact
          path="/tableofcontents/orthodoxy/copticorthodoxy"
          component={copticOrthodoxy}
        />
        <Route
          exact
          path="/tableofcontents/orthodoxy/greekorthodoxy"
          component={greekOrthodoxy}
        />
        <Route
          exact
          path="/tableofcontents/theology/abrahamicreligions"
          component={abrahamicReligions}
        />
        <Route
          exact
          path="/tableofcontents/theology/indianreligions"
          component={indianReligions}
        />

        <Route exact path="/404" component={NotFoundPage} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}
export default App;
