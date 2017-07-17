import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoadingPage from './container/LoadingPage/LoadingPage';
import MainPage from './container/MainPage/MainPage';

class App extends Component {
  render() {
    return (
      <MainPage />
    );
  }
}

export default App;
