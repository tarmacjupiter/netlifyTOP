import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./Card.css";
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
    <div className="cardContainer">
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Videos
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              This collection of videos shows the hard work of one of our
              servants from St. Mary's Coptic Orthodox Church in Chicago. He has
              put in countless hours annotating, researching, reading, studying,
              and presenting this material to the youth of this church. Making
              this information he has gathered and presented will benefit and
              inform others on the topics he wanted to share with us.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <Link to="/videos">To Videos</Link>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export { Card };
