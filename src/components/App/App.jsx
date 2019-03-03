import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from '../Header';
import routes from '../../routes';
import './App.scss';

const App = () => (
  <Router>
    <div className="app">
      <Header />
      {routes}
    </div>
  </Router>
);

export default App;
