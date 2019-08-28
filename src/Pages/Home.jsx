import React from 'react';
import Carousel from '../components/Carousel/Carousel'
import Categories from '../components/Categories/Categories';
import Branches from '../components/Branches/Branches';
import ProductsCollections from '../components/ProductsCollections/ProductsCollections';
import Isotope from '../components/Isotope/Isotope';
import {HotDeals, Products} from '../Data'

const home = () => {
  return (
    <div>
      <Carousel />
      <Categories />
      <Branches />
      <Isotope componentTitle="hot deals" gridContainer="deals-container" componentSubtitle="new hot deals now" Data={HotDeals}/>
      <ProductsCollections />
      <Isotope style={{backgroundColor: '#f6f8f9', marginTop: '50px', paddingTop: '20px'}} gridContainer="products-container" componentTitle="our products" componentSubtitle="Browse our fascinating sections!" Data={Products}/>
    </div>
  );
}

export default home;
