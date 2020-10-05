import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import Zoom from 'react-reveal/Zoom';
import { removeFromCart } from '../actions/cartActions';
import { clearOrder } from '../actions/orderActions';

function Cart(props) {
  const [state, setState] = useState({
    name: '',
    email: '',
    address: '',
    showCheckout: false,
  });

  const closeModal = () => {
    props.clearOrder();
  };
  const { cartItems, order } = props;
  return (
    <div>
      {cartItems.length === 0 ? (
        <div className='cart cart-header'>Cart is empty</div>
      ) : (
        <div className='cart cart-header'>
          You have {cartItems.length} Items in the cart{' '}
        </div>
      )}

      {order && (
        <Modal isOpen={true} onRequestClose={closeModal}>
          <Zoom>
            <button className='close-modal' onClick={closeModal}>
              x
            </button>
            <div className='order-details'>
              <h3 className='success-message'>Your order has been placed.</h3>
              <h2>Order {order._id}</h2>
              <ul>
                <li>
                  <div>Name:</div>
                  <div>{order.name}</div>
                </li>
                <li>
                  <div>Email:</div>
                  <div>{order.email}</div>
                </li>
                <li>
                  <div>Address:</div>
                  <div>{order.address}</div>
                </li>
                <li>
                  <div>Date:</div>
                  <div>{order.createdAt}</div>
                </li>
                <li>
                  <div>Total:</div>
                  <div>
                    {'$' +
                      Number(order.total.toFixed(1)).toLocaleString() +
                      ' '}
                  </div>
                </li>
                <li>
                  <div>Cart Items:</div>
                  <div>
                    {order.cartItems.map((x) => (
                      <div>
                        {x.count} {' x '} {x.title}
                      </div>
                    ))}
                  </div>
                </li>
              </ul>
            </div>
          </Zoom>
        </Modal>
      )}
      <div>
        <div className='cart'>
          <Fade left cascade>
            <ul className='cart-items'>
              {cartItems.map((item) => (
                <li key={item._id}>
                  <div>
                    <img src={item.image} alt={item.title}></img>
                  </div>
                  <div>
                    <div>{item.title}</div>
                    <div className='right'>
                      {'$' +
                        Number(item.price.toFixed(1)).toLocaleString() +
                        ' ' * item.count}
                      <button
                        className='button'
                        onClick={() => props.removeFromCart(item)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </Fade>
        </div>
        {cartItems.length !== 0 && (
          <div>
            <div className='cart'>
              <div className='total'>
                <div>
                  Total:{' '}
                  {'$' +
                    Number(
                      cartItems
                        .reduce((a, c) => a + c.price * c.count, 0)
                        .toFixed(1)
                    ).toLocaleString() +
                    ' '}
                </div>
                <button
                  onClick={() => {
                    setState({ showCheckout: true });
                  }}
                  className='button primary'
                >
                  CheckOut
                </button>
              </div>
            </div>
            {state.showCheckout && (
              <Fade right cascade>
                <div className='cart'>
                  <p>{`You have bought ${cartItems.length} Items `}</p>
                </div>
              </Fade>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default connect(
  (state) => ({
    order: state.order.order,
    cartItems: state.cart.cartItems,
  }),
  { removeFromCart, clearOrder }
)(Cart);
