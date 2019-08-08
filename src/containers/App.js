import React from 'react';
import './App.module.scss';
import Layout from '../hoc/Layout/Layout';
import Carousel from '../components/Carousel/Carousel'

import Categories from '../components/Categories/Categories';
import Branches from '../components/Branches/Branches';
import HotDeals from '../components/HotDeals/HotDeals';
import ProductsCollections from '../components/ProductsCollections/ProductsCollections';
import Isotope from '../components/Isotope/Isotope';
import * as Data from '../Data'
import Footer from '../components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Layout>
        <Carousel />
        <Categories />
        <Branches />
        <Isotope componentTitle="hot deals" componentSubtitle="new hot deals now" Data={Data.HotDeals}/>
        <ProductsCollections />
        <Isotope componentTitle="our products" componentSubtitle="Browse our fascinating sections!" Data={Data.HotDeals}/>

      </Layout>
    </div>
  );
}

export default App;
