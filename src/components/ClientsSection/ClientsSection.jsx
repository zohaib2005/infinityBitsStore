import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import "./ClientsSection.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "50px",
    display: "flex",
    height: "550px",
    width: "100%",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: "50px",
    width: "80%",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    maxWidth: "100%",
    maxHeight: "100%",
    display: "block",
  },
}));

export default function FrontBoss() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <div className="clientCoverImage">
        <div className="clientCoverImage"></div>
      </div>
      <div className={classes.details}>
        <div className="sideTextDiv">
          <Typography className="colorOfText" variant="h6">
            JEREMY CROUSE
          </Typography>
          <Typography className="smallTextColor" variant="subtitle1">
            (Graphic Designer)
          </Typography>

          <blockquote>
            I must say that Frame Boss is the best framing service online. They
            are not only affordable but deliver the finest quality frames within
            a quick time frame. I ordered an oversized frame of an artwork that
            they delivered with professionalism and perfection. Highly
            recommended!
          </blockquote>

          <span></span>
        </div>
      </div>
    </div>
  );
}
