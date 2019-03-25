import React, { useEffect } from 'react';

import Tiger from './components/Tiger';
import Pasha from './components/Pasha';
import './Home.scss';
import * as httpClient from '../../services/httpClient';
import * as urls from '../../constants/urls';

const Home = () => {
  useEffect(() => {
    httpClient.default.get(urls.default.GET_IMAGES).then(resp => resp);
  });

  return (
    <div className="home">
      <h2>Home</h2>
      <Tiger />
      <Pasha />
    </div>
  );
};

export default Home;
