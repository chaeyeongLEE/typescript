import React from 'react';
import './App.css';
import Join from './components/Login';
import Login from './components/Join';
import { createStore } from 'redux';
import rootReducer from './store/rootReducer';
import { Provider } from 'react-redux';

function App() {
  const store = createStore(rootReducer);
  return (
    <Provider store={store}>
      <Join />
      <Login />
    </Provider>
  );
}

export default App;
