import React from "react";
import Typography from "@material-ui/core/Typography";
import "./FramingSteps.scss";

function FramingSteps() {
  return (
    <>
      <div className="mainContainer">
        <div className="textContainer">
          <Typography className="textColor" component="h5" variant="h4">
            Custom Framing Steps
          </Typography>
          <Typography className="smallTextColor" variant="h6">
            True Custom Framing Made Truly Simple
          </Typography>
        </div>
      </div>
      <div className="buttonDiv">
        <button type="submit" className="outline">
          START FRAMING
        </button>
      </div>
    </>
  );
}

export default FramingSteps;
