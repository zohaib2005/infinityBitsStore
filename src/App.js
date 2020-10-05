import React from 'react';
import './App.css';
import store from './store';
import HomePage from './HomePage';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className='grid-container'>
        <header>
          <h3>Islamabad Shopping Cart</h3>
        </header>
        <main>
          <HomePage />
        </main>
      </div>
    </Provider>
  );
}

export default App;
