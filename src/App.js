import React from 'react';
import './App.css';
import { getJokes } from './actions';

function App() {
  getJokes();
  return (
    <div className="App">
      Async Redux Project
    </div>
  );
}

export default App;