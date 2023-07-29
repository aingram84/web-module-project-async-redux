import axios from "axios";

export const GET_JOKES_START = 'GET_JOKES_START';
export const GET_JOKES_SUCCESS = 'GET_JOKES_SUCCESS';
export const GET_JOKES_FAILURE = 'GET_JOKES_FAILURE';
export const GET_JOKES_ALL = 'GET_JOKES_ALL';
export const LOAD_JOKES_ALL = 'LOAD_JOKES_ALL';
export const SET_CURRENT_JOKE = 'SET_CURRENT_JOKE';

export const getJokes = () => {
  return (dispatch) => {
    dispatch({ type: GET_JOKES_START });

    axios.get("https://official-joke-api.appspot.com/jokes/ten")
      .then((data) => {
        console.log(`DATA: ${JSON.stringify(data)}`);
        dispatch({
          type: GET_JOKES_SUCCESS,
          payload: data.data
        });
      })
      .catch(err => {
        console.error(`CATCH: ${err}`);
        dispatch({
          type: GET_JOKES_FAILURE,
          payload: 'Mistakes were made'
        });
      });
  };
};

export const allJokes = (jokeArray) => {
  return {
    type: GET_JOKES_ALL,
    payload: jokeArray
  };
};

export const setCurrentJoke = (obj) => {
  return {
    type: SET_CURRENT_JOKE,
    payload: obj
  };
};
