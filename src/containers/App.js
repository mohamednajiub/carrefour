import React from 'react';
import './App.module.scss';
import Layout from '../hoc/Layout/Layout';
import Carousel from '../components/Carousel/Carousel'

import Categories from '../components/Categories/Categories';

function App() {
  return (
    <div className="App">
      <Layout>
        <Carousel />
        <Categories />
      </Layout>
    </div>
  );
}

export default App;
