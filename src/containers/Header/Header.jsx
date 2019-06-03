import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../../actions';

class Header extends Component {
  handleChange = (e) => {
    this.props.setFilter(e.target.value);
  }

  render() {
    const parties = this.props.presidents.reduce((acc, pres) => {
      !acc.includes(pres.party) && acc.push(pres.party);
      return acc;
    }, []);
    const partyOptions = parties.map(party => 
      <option value={party}>{party}</option>)
    return (
      <header>
        <h1>Presidents and Assholes</h1>
        <select id="party" onChange={this.handleChange}>
          <option value=''>All</option>
          {partyOptions}
        </select>
      </header>
    );
  }
}

export const mapStateToProps = (state) => ({
  presidents: state.presidents
});

export const mapDispatchToProps = (dispatch) => ({
  setFilter: (party) => dispatch(setFilter(party))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);