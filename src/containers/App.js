import React from 'react';
import './App.module.scss';
import Layout from '../hoc/Layout/Layout';
import Carousel from '../components/Carousel/Carousel'

function App() {
  return (
    <div className="App">
      <Layout>
        <Carousel />
      </Layout>
    </div>
  );
}

export default App;
