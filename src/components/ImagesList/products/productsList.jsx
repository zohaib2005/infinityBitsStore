import React from 'react';
import './productsList.scss';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';

function ProductsList() {
  return (
      <>
      <div className="container-main">
           <div className="item-collection">
             <div className="product1"><button className="button"><a>Cart +</a></button> <span className="iconDiv"></span><FavoriteBorderOutlinedIcon className="heartIcon" /></div>
             
             <div className="collection-footer">
             <span className="name">Dover</span>
             </div>
            
           </div>
           <div className="item-collection">
             <div className="product2"><button className="button"><a>Cart +</a></button></div>
             <div className="collection-footer">
             <span className="name">Marquette</span>
             </div>
           </div>
           <div className="item-collection">
             <div className="product3"><button className="button"><a>Cart +</a></button></div>
             <div className="footer-collection">
             <span className="name">Wren</span>
             </div>
           </div>
           
      </div>

      <div className="container-main">
           <div className="item-collection">
             <div className="product4"> <button className="button"><a>Cart +</a></button></div>
             <div className="collection-footer">
             <span className="name">Mercer</span>
             </div>
           </div>
           <div className="item-collection">
             <div className="product5"><button className="button"><a>Cart +</a></button></div>
             <div className="collection-footer">
             <span className="name">Everett</span>
             </div>
           </div>
           <div className="item-collection">
             <div className="product6"><button className="button"><a>Cart +</a></button></div>
             <div className="footer-collection">
             <span className="name">Mandalay</span>
             </div>
           </div>
           
      </div>
      </>
  )
  
}

export default ProductsList;
