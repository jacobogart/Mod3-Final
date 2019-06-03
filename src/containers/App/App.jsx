import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Header from '../Header/Header';
import { fetchPresData } from '../../api/fetchPresData';
import { setPresidents } from '../../actions';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      error: ''
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetchPresData()
      .then(data => this.props.setPresidents(data))
      .catch(error => this.setState({ error, isLoading: false }))
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
  setPresidents: (presidents) => dispatch(setPresidents(presidents))
})

export default connect(null, mapDispatchToProps)(App);
