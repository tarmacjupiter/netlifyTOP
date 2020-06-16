import React from "react";
import Title from "../../../Title";
import Bugs from "../../../Bugs";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Button } from "react-bootstrap";

const indianReligionsLink = () => {
  window.open("https://en.wikipedia.org/wiki/Indian_religions");
};

export default function indianReligions() {
  return (
    <div>
      <Title />
      <h1 style={{ textAlign: "center", marginBottom: 20 }}>
        Indian Religions
      </h1>
      <div>
        <Card style={{ marginLeft: 50, marginRight: 50 }}>
          <CardContent>
            <Typography variant="h5" component="h2">
              indian religions
            </Typography>
            <Typography variant="body2" component="p">
              Indian religions, sometimes also termed Dharmic religions or Indic
              religions, are the religions that originated in the Indian
              subcontinent; namely Hinduism, Jainism, Buddhism, and
              Sikhism.These religions are also all classified as Eastern
              religions. Although Indian religions are connected through the
              history of India, they constitute a wide range of religious
              communities, and are not confined to the Indian subcontinent.
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              variant="outline-info"
              onClick={indianReligionsLink}
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
