import React from 'react';
import './App.module.scss';
import Layout from '../hoc/Layout/Layout';
import Slider from '../components/Slider/Slider'

function App() {
  return (
    <div className="App">
      <Layout>
        <Slider />
      </Layout>
    </div>
  );
}

export default App;
