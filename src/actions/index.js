import axios from "axios";

export const getJokes = () => {
    axios.get("https://official-joke-api.appspot.com/jokes/ten")
        .then((data) => {
            console.log(`DATA: ${JSON.stringify(data)}`)
        })
        .catch(err => {
            console.error(`CATCH: ${err}`)
        })
}