import React, { Component } from 'react';
import '@tradeshift/tradeshift-ui';
import './App.css'
import Header from './components/Header'

import SideForm from './components/SideForm'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SideForm />
      </div>
    );
  }
}

export default App;
