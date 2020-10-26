import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import "./FrameBoss.scss";

const useStyles = makeStyles(() => ({
  root: {
    marginTop: "50px",
    display: "flex",
    height: "550px",
    width: "100%",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
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
      <div className={classes.details}>
        <div className="sideTextDivBoss">
          <Typography className="colorOfText" component="h5" variant="h4">
            Why Choose Frame Boss
          </Typography>
          <div className="lineAndText">
            {/* <div className="verticalLine" /> */}
            <Typography className="smallTextColor" variant="subtitle1">
              We Promise To Provide You With The Simplest And Most Affordable
              Way To Design Custom Frames With Care!
            </Typography>
          </div>
          <div className="boxesContainer">
            <div className="boxesWidth">
              <div className="boxImage1"></div>
              <div className="textContainerDiv">
                {" "}
                <Typography className="colorOfText" variant="h6">
                  Ready To Use
                </Typography>
                <Typography className="grayTextColor" variant="body2">
                  We deliver ready to use frames build by hard shipped for free
                  at your doorstep
                </Typography>
              </div>
            </div>
            <div className="boxesWidth">
              <div className="boxImage2"></div>
              <div className="textContainerDiv">
                {" "}
                <Typography className="colorOfText" variant="h6">
                  Enjoy Free Advice
                </Typography>
                <Typography className="grayTextColor" variant="body2">
                  Enjoy free online design advice from our creative team for
                  custom framing
                </Typography>
              </div>
            </div>
            <div className="boxesWidth">
              <div className="boxImage3"></div>
              <div className="textContainerDiv">
                {" "}
                <Typography className="colorOfText" variant="h6">
                  Lowest Price Guarantee
                </Typography>
                <Typography className="grayTextColor" variant="body2">
                  We guarantee to give you the lowest price for high-quality,
                  unique framing
                </Typography>
              </div>
            </div>
            <div className="boxesWidth">
              <div className="boxImage4"></div>
              <div className="textContainerDiv">
                {" "}
                <Typography className="colorOfText" variant="h6">
                  Free Returns
                </Typography>
                <Typography className="grayTextColor" variant="body2">
                  Don't like your custom frame? We offer free returns and make
                  frame that satisfies you!
                </Typography>
              </div>
            </div>
          </div>
          <span>
            <button type="submit" className="buttonStyleBoss outline">
              START FRAMING
            </button>
          </span>
        </div>
      </div>
      <div className="bossFrameCover">
        <div
          className="bossFrameCover"
          image={require("./images/bossFrameCover.jpeg")}
        ></div>
      </div>
    </div>
  );
}
