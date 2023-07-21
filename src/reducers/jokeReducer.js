import { GET_JOKES_START, GET_JOKES_ALL, GET_JOKES_SUCCESS, GET_JOKES_FAILURE, LOAD_JOKES_ALL, SET_CURRENT_JOKE } from "../actions"

export const initialState = {
    jokes: [],
    isFetching: false,
    error: '',
    dynamic: false,
    displayJokes: [],
    currentJoke: {}
}

const jokeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_JOKES_START:
            return {
                ...state, isFetching: true, error: ''
            }
        case GET_JOKES_SUCCESS:
            return {
                ...state, isFetching: false, joke: action.payload, dynamic: true
            }
        case GET_JOKES_FAILURE:
            return {
                ...state, isFetching: false, error: action.payload
            }
        case GET_JOKES_ALL:
            return {
                ...state, displayJokes: action.payload
            }
        case SET_CURRENT_JOKE:
            return {
                ...state, currentJoke: action.payload
            }
        default:
            return state;
    }

}

export default jokeReducer;