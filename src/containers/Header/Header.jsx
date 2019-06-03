import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Presidents and Assholes</h1>
        <input type="select"/>
      </header>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({

})

export default connect(null, mapDispatchToProps)(Header);