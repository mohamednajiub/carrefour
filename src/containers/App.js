import React from 'react';
import './App.module.scss';
import Layout from '../hoc/Layout/Layout';
import Carousel from '../components/Carousel/Carousel'

import Categories from '../components/Categories/Categories';
import Branches from '../components/Branches/Branches';
import HotDeals from '../components/HotDeals/HotDeals';
import ProductsCollections from '../components/ProductsCollections/ProductsCollections'

function App() {
  return (
    <div className="App">
      <Layout>
        <Carousel />
        <Categories />
        <Branches />
        <HotDeals />
        <ProductsCollections />
      </Layout>
    </div>
  );
}

export default App;
