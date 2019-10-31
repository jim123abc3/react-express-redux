import React from 'react';
import logo from './logo.svg';
import './App.css';
import Images from './components/images/images'
import {Provider} from 'react-redux'
import store from './store/index'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Images />
    </div>
    </Provider>
  );
}

export default App;