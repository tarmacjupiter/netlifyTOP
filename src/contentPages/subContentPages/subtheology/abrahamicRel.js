import React from "react";
import Title from "../../../Title";
import Bugs from "../../../Bugs";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Button } from "react-bootstrap";

function abrahamicReligionsLink() {
  window.open("https://en.wikipedia.org/wiki/Abrahamic_religions");
}

export default function abrahamicReligions() {
  return (
    <div>
      <Title />
      <h1 style={{ textAlign: "center", marginBottom: 20 }}>
        Abrahamic Religions
      </h1>
      <div>
        <Card style={{ marginLeft: 50, marginRight: 50 }}>
          <CardContent>
            <Typography variant="h5" component="h2">
              abrahamic religions
            </Typography>
            <Typography variant="body2" component="p">
              The Abrahamic religions, also referred to collectively as
              Abrahamism, are a group of Semitic-originated religious
              communities of faith that claim descent from the Judaism of the
              ancient Israelites and the worship of the God of Abraham. The
              Abrahamic religions are monotheistic, with the term deriving from
              the patriarch Abraham (a major biblical figure from the Old
              Testament, who is recognized by Jews, Christians, Muslims, and
              others).
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              variant="outline-info"
              onClick={abrahamicReligionsLink}
            >
              Learn More
            </Button>
          </CardActions>
        </Card>
      </div>
      <Bugs />
    </div>
  );
}
