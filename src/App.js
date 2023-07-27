import React from 'react';
import './App.css';
import { getJokes } from './actions';
import JokeView from './components/JokeView';
import axios from 'axios';
import Joke from './components/joke';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

function App(props) {
  getJokes();
  return (
    <div className="App">
      Async Redux Project
      <JokeList />
      <Switch>
        <Route exact path="/jokes">
        <JokeView />
        </Route>
        <Route path = "/jokes/:jokeID" element = {<Joke />}>
        <Joke jokes = {props.displayJokes} />
        </Route>
      </Switch>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    displayJokes: state.joke.displayJokes
  }
}

export default connect(mapStateToProps, {})(App)