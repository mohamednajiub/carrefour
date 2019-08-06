import React from 'react';
import './App.module.scss';
import Layout from '../hoc/Layout/Layout';
import Carousel from '../components/Carousel/Carousel'
import SliderComponent from '../components/Slider/Slider';

function App() {
  return (
    <div className="App">
      <Layout>
        <Carousel />
        <SliderComponent />
      </Layout>
    </div>
  );
}

export default App;
