import React from "react";
import { useParams, useHistory } from "react-router-dom";

const Joke = ({ jokes }) => {
  const { jokeID } = useParams();
  const joke = jokes.find(j => j.id === parseInt(jokeID));
  const history = useHistory();

  if (!joke) {
    history.push('/');
    return null;
  }

  return (
    <div className="App">
      <div>
        <h2>{joke.type}</h2>
        {joke.setup ? <p>{joke.setup}</p> : null}
        <h3>{joke.punchline}</h3>
      </div>
    </div>
  );
};

export default Joke;
