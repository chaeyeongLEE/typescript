import React from 'react';
import './App.css';
import Join from './components/Login';
import Login from './components/Join';
import { createStore } from 'redux';
import rootReducer from './store/rootReducer';
import { Provider } from 'react-redux';
import LoginTwo from './components/LoginTwo';
import LoginForm from './components/LoginForm';
import SignForm from './components/SignForm';

function App() {
  const store = createStore(rootReducer);
  return (
    <Provider store={store}>
      {/* <Join />
      <Login /> 
      <LoginForm />
      <hr />
      <SignForm />*/}
 
      <LoginTwo />

    </Provider>
  );
}

export default App;
