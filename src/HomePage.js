import React from 'react';
import Count from './components/Count';
import Products from './components/Products';
import Cart from './components/Cart';

export default function HomePage() {
  return (
    <div>
      <div style={{ display: 'flex' }} className='content'>
        <div style={{ width: '45rem' }} className='main'>
          <Count></Count>
          <Products></Products>
        </div>
        <hr></hr>
        <div style={{ width: '32rem' }} className='sidebar'>
          <Cart />
        </div>
      </div>
    </div>
  );
}
