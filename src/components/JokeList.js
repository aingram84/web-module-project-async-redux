import React from "react";
import Joke from "./Joke";
import { Link, useRouteMatch } from 'react-router-dom';
import { connect } from 'react-redux';

const JokeList = ({ joke }) => {
  const { url } = useRouteMatch();
  return (
    <div className="App">
      {joke && joke.map((j, index) => (
        <div key={index}>
          <Link to={`${url}/${j.id}`}>
            <Joke jokes={joke} />
          </Link>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    joke: state.joke.displayJokes
  };
};

export default connect(mapStateToProps)(JokeList);
