import React, { Component } from 'react';
import { Link } from 'react-router';

class Menu extends Component {
  render() {
    return (
      <nav>
        <Link activeOnlyWhenExact activeClassName="active" to="/">Home</Link>
        <Link activeOnlyWhenExact activeClassName="active" to="/about">About</Link>
      </nav>
    );
  }
}

export default Menu;
