import React, { useEffect } from "react";
import { connect } from "react-redux";
import { GET_JOKES_ALL } from "../actions";
import JokeList from "./jokelist";

const AllJokes = ({ jokes, displayJokes, allJokes }) => {
    const newJokes = (jokesArray) => {
        const newJokes = [...jokesArray];
        return newJokes.sort();
    }
    if (displayJokes.length === 0) {
        useEffect(() => {
            return allJokes(newJokes(jokes))
        }, [])
    }
    return (
        <div>
            {displayJokes && displayJokes.map((joke, idx) => {
                <JokeList joke={[{ joke }]} key={idx} />
            })}
            <button onClick={() => 
                allJokes(newJokes(jokes))
                }>Button Text Yaaay</button>
        </div>
    );
}
const mapStateToProps = state => {
    return {
        jokes: state.joke.jokes,
        displayJokes: state.joke.displayJokes
    }
}

export default connect(mapStateToProps, {AllJokes})(AllJokes);