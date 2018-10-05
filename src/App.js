import React, { Component } from 'react';
import { Provider, combineReducers, connect } from 'react-redux';
import { store } from './store';
import PurchaseSummary from './PurchaseSummary';
import './reset.css';
import './App.css';


class App extends Component {
  render() {
    return (
    <div className="App">
    	<PurchaseSummary />
    </div>
    );
  }
}

export default connect()(App)
