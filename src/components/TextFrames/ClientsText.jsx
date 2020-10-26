import React from "react";
import Typography from "@material-ui/core/Typography";
import "./FrameText.scss";

function ClientsText() {
  return (
    <div className="mainContainer">
      <div className="textContainer">
        <Typography className="textColor" component="h5" variant="h4">
          That's Why Our Clients Love Us
        </Typography>
        <Typography className="smallTextColor" variant="h6">
          Read What Our Clients Have To Say About Our Frames
        </Typography>
      </div>
    </div>
  );
}

export default ClientsText;
