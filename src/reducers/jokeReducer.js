import { GET_JOKES_START, GET_JOKES_ALL, GET_JOKES_SUCCESS, GET_JOKES_FAILURE, LOAD_JOKES_ALL, SET_CURRENT_JOKE } from "../actions"

const initialState = {
    jokes: {
        setup: "",
        punchline: "",
        id: 0,
        type: ""
    },
    isFetching: false,
    error: '',
    dynamic: false,
    displayJokes: [],
    currentJoke: {}
}

const jokeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_JOKES_START:
            console.log("Reducer - GET_JOKES_START:", action.payload);
            return {
                ...state,
                isFetching: true
            }
        case GET_JOKES_SUCCESS:
            console.log("Reducer - GET_JOKES_SUCCESS:", action.payload);
            return {
                ...state, isFetching: false, jokes: action.payload, dynamic: true
            }
        case GET_JOKES_FAILURE:
            console.log("Reducer - GET_JOKES_FAILURE:", action.payload);
            return {
                ...state, isFetching: false, error: action.payload
            }
        // case GET_JOKES_ALL:
        //     console.log("Reducer - GET_JOKES_ALL:", action.payload);
        //     return {
        //         ...state, displayJokes: action.payload
        //     }
        // case SET_CURRENT_JOKE:
        //     console.log("Reducer - SET_CURRENT_JOKE:", action.payload);
        //     return {
        //         ...state, currentJoke: action.payload
        //     }
        default:
            return state;
    }

}

export default jokeReducer;