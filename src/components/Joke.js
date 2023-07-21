import React from "react";
import { useParams, useHistory } from "react-router-dom";

const Joke = (props) => {
    const { jokes } = props;
    const { jokeID } = useParams();
    const joke = jokes.find(joke => joke.id === parseInt(jokeID));
    const history = useHistory()
    if (!joke) {
        history.push('/')
    }
    return (<div className="App">
        {joke ?
            <div>
                <h2>
                    {joke.type}
                </h2>
                {joke.setup ?
                    <p>
                        joke.setup
                    </p> : <p></p>
                }
                <h3>
                    {joke.punchline}
                </h3>
            </div> : <h1>
                Error Message Here
            </h1>
    }
    </div>);
}



export default Joke;