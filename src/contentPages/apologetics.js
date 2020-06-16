import React from "react";
import Title from "../Title";
import Bugs from "../Bugs";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Button } from "react-bootstrap";

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

const openApologetics = () => {
  window.open("https://en.wikipedia.org/wiki/Apologetics");
};

export default function Apologetics() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      <Title />
      <h1 style={{ textAlign: "center" }}>Apologetics</h1>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            a{bull}pol{bull}o{bull}get{bull}ics
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            noun
          </Typography>
          <Typography variant="body2" component="p">
            the religious discipline of defending religious doctrines through
            systematic argumentation and discourse. Early Christian writers who
            defended their beliefs against critics and recommended their faith
            to outsiders were called Christian apologists.
            <br />
            {'"free market apologetics"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={openApologetics} variant="outline-info">
            Learn More
          </Button>
        </CardActions>
      </Card>
      <Bugs />
    </div>
  );
}
