import React, { useEffect } from 'react';
import './App.css';
import { getJokes } from './actions';
import JokeView from './components/JokeView';
import axios from 'axios';
import Joke from './components/Joke';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import JokeList from './components/JokeList';

function App(props) {
  console.log(`Props Log: ${JSON.stringify(props)}`)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJokes());
  }, []);

    return (
    <div className="App">
      Async Redux Project
      {/* {props.displayJokes} */}
      <Switch>
        <Route exact path="/jokes">
          <JokeView />
        </Route>
        <Route path="/jokes/:jokeID" element={<Joke />}>
          <Joke jokes={props.displayJokes} />
        </Route>
      </Switch>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    displayJokes: state.joke.jokes
  };
};

export default connect(mapStateToProps)(App);
