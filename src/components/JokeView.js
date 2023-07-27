import React from "react";
import { connect } from "react-redux";
import { getJokes } from "../actions";
import AllJokes from "./AllJokes";

const JokeView = ({ getJokes, isFetching, error, dynamic, displayJokes }) => {
    return (<div>
        {dynamic ?
            <div>
                {dynamic && <AllJokes />}</div> : <div><p>{error}</p> <button onClick={() => getJokes()}></button></div>}</div>)
}
const mapStateToProps = state => {
    return {
        isFetching: state.joke.isFetching,
        error: state.joke.error,
        dynamic: state.joke.dynamic,
        displayJokes: state.joke.displayJokes
    }
}

export default connect(mapStateToProps, {getJokes})(JokeView);