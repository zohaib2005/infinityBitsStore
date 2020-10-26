import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import "./home.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "700px",
    width: "100%",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: "50px",
    width: "50%",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: "50%",
  },
}));

export default function FrontHomeContent() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={require("./cartimage.jpeg")}
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <div className="sideTextContainer">
          <Typography className="textColor" component="h5" variant="h4">
            CUSTOM FRAMES TO TELL YOUR UNIQUE STORY
          </Typography>

          <div className="lineAndText">
            <div className="verticalLine" />
            <Typography className="smallTextColor" variant="subtitle1">
              We Make It Simple Hassle-Free And Affordable For You To Share Your
              Story With Custom Frames!
            </Typography>
          </div>
          <button type="submit" className="outline">
            START FRAMING
          </button>
        </div>
      </div>
    </div>
  );
}
