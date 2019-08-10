import React from 'react';
import Carousel from '../components/Carousel/Carousel'
import Categories from '../components/Categories/Categories';
import Branches from '../components/Branches/Branches';
import ProductsCollections from '../components/ProductsCollections/ProductsCollections';
import Isotope from '../components/Isotope/Isotope';
import * as Data from '../Data'

const home = () => {
  return (
    <div>
        <Carousel />
        <Categories />
        <Branches />
        <Isotope componentTitle="hot deals" componentSubtitle="new hot deals now" Data={Data.HotDeals}/>
        <ProductsCollections />
        <Isotope style={{backgroundColor: '#f6f8f9', marginTop: '50px', paddingTop: '20px'}} componentTitle="our products" componentSubtitle="Browse our fascinating sections!" Data={Data.HotDeals}/>
    </div>
  );
}

export default home;
