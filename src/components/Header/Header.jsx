import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

const Header = () => (
  <div className="header">
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </div>
);

export default Header;
