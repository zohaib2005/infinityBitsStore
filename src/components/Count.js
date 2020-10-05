import React from 'react';
import { connect } from 'react-redux';

function Count(props) {
  return !props.Products ? (
    <div>Loading...</div>
  ) : (
    <div>
      <div>{props.Products.length} Products Are Available</div>
    </div>
  );
}
export default connect((state) => ({
  Products: state.products.productsArray.products,
}))(Count);
