import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';

import './Header.scss';

const Header = () => (
  <div className="header">
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item as={Link} to="/">
          Home
        </Menu.Item>
        <Menu.Item as={Link} to="/about">
          About
        </Menu.Item>
      </Container>
    </Menu>
  </div>
);

export default Header;
