import React from 'react';
import { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default  class Header extends Component {

  render () {
    return (
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/counter">Counter</Link>
        </nav>
      </header>
    )
  }
}
