import React from 'react';

import Tiger from './components/Tiger';
import Pasha from './components/Pasha';
import './Home.scss';

const Home = () => (
  <div className="home">
    <h2>Home</h2>
    <Tiger />
    <Pasha />
  </div>
);

export default Home;
