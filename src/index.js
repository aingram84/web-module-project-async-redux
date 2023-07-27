import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import jokeReducer from './reducers/jokeReducer';
import { Provider } from 'react-redux';
import { configureStore} from '@reduxjs/toolkit';

import App from './App';
import './index.css';
const store = configureStore({
  reducer: {
    joke: jokeReducer
  }
})


ReactDOM.render(
  <Provider store = {store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
