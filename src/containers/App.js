import React from 'react';
import './App.module.scss';
import Layout from '../hoc/Layout/Layout';
import Home from '../Pages/Home';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Route path="/" component={Home} exact/>
      </Layout>
    </div>
  );
}

export default App;
