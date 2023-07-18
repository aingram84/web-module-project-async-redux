import React from 'react';
import './App.css';
import { getJokes } from './actions';
import JokeList from './components/JokeList';

function App() {
  getJokes();
  return (
    <div className="App">
      Async Redux Project
      <JokeList />
    </div>
  );
}

export default App;