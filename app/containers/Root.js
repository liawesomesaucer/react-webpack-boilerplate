import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class Root extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };

  render() {
    const { ads, location: { pathname }, children } = this.props;
    return (
      <div className="lol-container">
        <Header currentPath={pathname} />
          <div className="lol-transition">
            {children ? children : null}
          </div>
        <Footer />
      </div>
    );
  }
}

export default connect()(Root);
