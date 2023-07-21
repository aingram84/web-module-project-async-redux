import React from "react";
import Joke from "./joke";
import { Link, useRouteMatch } from 'react-router-dom'

const JokeList = (joke, key) => {
    const { url } = useRouteMatch();
    return (
        <div className="App" key={key}>
            <Link to={`${url}/${joke.joke[0].joke.id}`}>
                <Joke />
            </Link>
        </div>);
}



export default JokeList;