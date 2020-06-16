import React from "react";
import Title from "../Title";
import Bugs from "../Bugs";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function openTheology() {
  window.open("https://en.wikipedia.org/wiki/Theology");
}

export default function Theology() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      <Title />
      <h1 style={{ textAlign: "center" }}>Theology</h1>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            the{bull}ol{bull}o{bull}gy
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            noun
          </Typography>
          <Typography variant="body2" component="p">
            the systematic study of the nature of the Divine and, more broadly,
            of religious belief. It is taught as an academic discipline,
            typically in universities and seminaries.
            <br />
            {'"He has an interest in theology and pastoral work."'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="outline-info" size="small" onClick={openTheology}>
            Learn More
          </Button>
        </CardActions>
      </Card>
      <div className="buttonContainer">
        <Button variant="danger" size="lg" block>
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to="/tableofcontents/theology/abrahamicreligions"
          >
            Abrahamic Religions
          </Link>
        </Button>
        <Button variant="danger" size="lg" block>
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to="/tableofcontents/theology/indianreligions"
          >
            Indian Religions
          </Link>
        </Button>
      </div>
      <Bugs />
    </div>
  );
}
