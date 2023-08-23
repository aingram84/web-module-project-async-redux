import React, { useEffect } from "react";
import { connect } from "react-redux";
import { GET_JOKES_ALL } from "../actions";
import JokeList from "./JokeList";
import { useSelector } from "react-redux";

const AllJokes = ({ jokes, allJokes }) => {
  const displayJokes = useSelector((state) => state.joke.displayJokes);
  console.log(displayJokes);
  // console.log(jokes)
  // const newJokes = (jokesArray) => {
  //     const newJokes = [...jokesArray];
  //     return newJokes.sort();
  // }
  // if (displayJokes.length === 0) {
  //     useEffect(() => {
  //         return allJokes(newJokes(displayJokes))
  //     }, [])
  // }
  // console.log(`DISPLAY JOKE LOG ${displayJokes}`)
  return (
    <div>
      {displayJokes &&
        displayJokes.map((joke, idx) => (
          <div>
            <p>{joke.setup}</p>
            <p>{joke.punchline}</p>
          </div>
        ))}

      <button onClick={() => allJokes(newJokes(jokes))}>
        Button Text Yaaay
      </button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    jokes: state.joke.jokes,
    displayJokes: state.joke.jokes,
  };
};

export default connect(mapStateToProps)(AllJokes);