import React from "react";
import Title from "../Title";
import Bugs from "../Bugs";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Button } from "react-bootstrap";
import Typography from "@material-ui/core/Typography";
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

function openOrthodoxy() {
  window.open(
    "https://en.wikipedia.org/wiki/Orthodoxy#:~:text=Orthodoxy%20(from%20Greek%20%E1%BD%80%CF%81%CE%B8%CE%BF%CE%B4%CE%BF%CE%BE%CE%AF%CE%B1%20orthodox%C3%ADa,accepted%20creeds%2C%20especially%20in%20religion."
  );
}

export default function Orthodox() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      <Title />
      <h1 style={{ textAlign: "center" }}>Orthodoxy</h1>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            or{bull}tho{bull}dox{bull}y
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            noun
          </Typography>
          <Typography variant="body2" component="p">
            is adherence to correct or accepted creeds, especially in religion.
            In the Christian sense the term means "conforming to the Christian
            faith as represented in the creeds of the early Church." The first
            seven ecumenical councils were held between the years of 325 and 787
            with the aim of formalizing accepted
            <br />
            {'"monetarist orthodoxy"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="outline-info" size="small" onClick={openOrthodoxy}>
            Learn More
          </Button>
        </CardActions>
      </Card>
      <div className="buttonContainer">
        <Button variant="danger" size="lg" block>
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to="/tableofcontents/orthodoxy/copticorthodoxy"
          >
            Coptic Orthodoxy
          </Link>
        </Button>
        <Button variant="danger" size="lg" block>
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to="/tableofcontents/orthodoxy/greekorthodoxy"
          >
            Greek Orthodoxy
          </Link>
        </Button>
      </div>

      <Bugs />
    </div>
  );
}
