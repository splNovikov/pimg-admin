import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import Header from '../Header';
import routes from '../../routes';
import './App.scss';

const App = () => (
  <Router>
    <div className="app">
      <Header />

      <Container text className="content">
        {routes}
      </Container>
    </div>
  </Router>
);

export default App;
