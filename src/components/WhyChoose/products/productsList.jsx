import React from 'react';
import './productsList.scss';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';

function ProductsList() {
  return (
      <>
      <div className="container-Main">
           <div className="items-collection">
             <div className="whyUs1Img"></div>   
           </div>
           <div className="item-collection">
             <div className="whyChooseUs2"></div>
           </div>
      </div>
      <div className="container-main">
           <div className="item-collection">
             <div className="whyChooseUs3"> </div>
           </div>    
      </div>
      </>
  )
}

export default ProductsList;
