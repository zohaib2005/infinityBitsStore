import React from 'react';
import './App.css';
import store from './store';
import Navbar from './components/Navbar/Navbar';
import { Provider } from 'react-redux';
import FrontHomeContent from './components/Home/Home'
import FrameText from './components/TextFrames/FrameText';
import ItemsList from './components/ItemsList/ItemsList';
import ProductsText from './components/TextFrames/ProductsText'
import ImagesList from './components/ImagesList/ImagesList';
import FramingSteps from './components/TextFrames/FramingSteps'
import WhyChoose from './components/WhyChoose/WhyChoose';
import FrameBoss from './components/FrameBoss/FrameBoss';
import ClientText from './components/TextFrames/ClientsText';
import ClientsSection from './components/ClientsSection/ClientsSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Provider store={store}>
      <div className='grid-container'>
          <Navbar />
        <main>
          <div className="home-page-padding">
             <FrontHomeContent />
             <FrameText />
             <ItemsList />
             <ProductsText />
             <ImagesList />
             <FramingSteps />
             <WhyChoose />
            <FrameBoss />
            <ClientText />
            <ClientsSection />
          </div>
          <footer>
            <Footer />
          </footer>
        </main>
      </div>
    </Provider>
  );
}

export default App;
