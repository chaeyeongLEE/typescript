import React from 'react';
import logo from './logo.svg';
import './App.css';
import Join from './components/Login';
import Login from './components/Join';
import { createStore } from 'redux';

function App() {
  const store = createStore(rootReducer);
  return (
    <div className="App">
      <Join />
      <Login />
    </div>
  );
}

export default App;
