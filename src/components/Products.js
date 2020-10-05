import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import Modal from 'react-modal';
import Zoom from 'react-reveal/Zoom';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';

function Products(props) {
  const [state, setState] = useState({ product: null });
  const openModal = (product) => {
    setState({ product });
  };
  const closeModal = () => {
    setState({ product: null });
  };
  const { product } = state;
  return (
    <div>
      <Fade bottom cascade>
        {!props.products ? (
          <div>Loading...</div>
        ) : (
          <ul className='products'>
            {props.products.map((product) => (
              <li key={product._id}>
                <div className='product'>
                  <a
                    href={'#' + product._id}
                    onClick={() => openModal(product)}
                  >
                    <img src={product.image} alt={product.title}></img>
                    <p>{product.title}</p>
                  </a>
                  <div className='product-price'>
                    <div>
                      {'$' +
                        Number(product.price.toFixed(1)).toLocaleString() +
                        ' '}
                    </div>
                    <button
                      onClick={() => props.addToCart(product)}
                      className='button primary'
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </Fade>
      {product && (
        <Modal isOpen={true} onRequestClose={closeModal}>
          <Zoom>
            <button className='close-modal' onClick={closeModal}>
              x
            </button>
            <div className='product-details'>
              <img src={product.image} alt={product.title}></img>
              <div className='product-details-description'>
                <p>
                  <strong>{product.title}</strong>
                </p>
                <p>{product.description}</p>
                <div className='product-price'>
                  <div>
                    {'$' +
                      Number(product.price.toFixed(1)).toLocaleString() +
                      ' '}
                  </div>
                  <button
                    className='button primary'
                    onClick={() => {
                      props.addToCart(product);
                      closeModal();
                    }}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </Zoom>
        </Modal>
      )}
    </div>
  );
}
export default connect(
  (state) => ({ products: state.products.productsArray.products }),
  {
    addToCart,
  }
)(Products);
