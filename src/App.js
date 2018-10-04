import React, { Component } from 'react';
import { Provider, combineReducers } from 'react-redux';
import { store } from './store';
import PurchaseSummary from './PurchaseSummary';
import './reset.css';
import './App.css';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <PurchaseSummary />
        </div>            
      </Provider>
    );
  }
}

export default App;
