import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Header from '../Header/Header';
import { fetchPresData } from '../../api/fetchPresData';
import { setPresidents, setIsLoading, setHasErrored } from '../../actions';

export class App extends Component {
  componentDidMount() {
    this.props.setIsLoading();
    fetchPresData()
      .then(data => this.props.setPresidents(data))
      .catch(error => this.props.setHasErrored(error))
  }
  
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  } 
}

export const mapDispatchToProps = (dispatch) => ({
  setPresidents: (presidents) => dispatch(setPresidents(presidents)),
  setIsLoading: () => dispatch(setIsLoading()),
  setHasErrored: (error) => dispatch(setHasErrored(error))
})

export default connect(null, mapDispatchToProps)(App);
