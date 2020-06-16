import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 700,
    margin: 10,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Slides
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            This collection of slides are an accumulation of all the notes
            neatly presented in slides format. They go through all the topics
            presented in any Basic Theological course but are more viewed from
            the standpoint of the Orthodox faith. The slides were revised,
            edited, and were carefully thought out by a servant in the St.
            Mary's Coptic Orthodox Church of Chicago.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <Link to="/tableofcontents">TO SLIDES</Link>
        </Button>
      </CardActions>
    </Card>
  );
}
