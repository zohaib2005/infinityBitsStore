import React from 'react';
// import './App.css';
import Typography from '@material-ui/core/Typography';
import './ProductsText.scss';

function ProductsText() {
  return (
    <div className="mainContainer">
        <div className="textContainer">
          <Typography className="textColor" component="h5" variant="h4">
                Our Featured Products
          </Typography>
          <Typography className="smallTextColor" variant="h6">
             Browse Through Our Range Of Featured Products
          </Typography>
        </div>
    </div>
  );
}

export default ProductsText;
