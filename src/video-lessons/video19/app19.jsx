import jokeData from "./joke-data";
import Joke from "./joke";

/*
Challenge: See if you can correctly pass the necessary props to the 
Joke component in the .map() (and render the jokeElements array) so 
the jokes show up on the page again
*/

export default function App19() {
    const jokeElements = jokeData.map(joke => {
        return (
            <Joke
                key={joke.key}
                setup={joke.setup}
                punchline={joke.punchline}
                />
                )
    })

    return (
        <>
            video19
            {jokeElements}
        </>
    )
}