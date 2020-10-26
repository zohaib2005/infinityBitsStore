import React from 'react';
// import './App.css';
import Typography from '@material-ui/core/Typography';
import './FrameText.scss';

function FrameText() {
  return (
    <div className="mainContainer">
        <div className="textContainer">
          <Typography className="textColor" component="h5" variant="h4">
             What You Wish To Frame?
          </Typography>
          <Typography className="smallTextColor" variant="h6">
             Customize Your Frame To Fit Artworks, Photos, And Many More!
          </Typography>
        </div>
    </div>
  );
}

export default FrameText;
