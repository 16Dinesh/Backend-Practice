import { useEffect, useState } from "react";

export default function RandomJoke() {
    let [useJoke, SetJoke] = useState({})

    const getNewJoke = async() => {
        let res = await fetch("https://official-joke-api.appspot.com/random_joke");
        let jsonRes = await res.json()
       SetJoke({
        setup: jsonRes.setup,
        punchline: jsonRes.punchline
       })
    }

    useEffect(() => {
        async function getNewJoke(){
            let res = await fetch("https://official-joke-api.appspot.com/random_joke");
            let jsonRes = await res.json()
            SetJoke({
                setup: jsonRes.setup,
                punchline: jsonRes.punchline
               })
        }
        getNewJoke();
    },[])  


    

    return(
        <>
        <h3>Random Jokes  </h3> <br/><br/><br/>
        <h1>SetUp: {useJoke.setup}</h1><br/><br/><br/>
        <h1>punchline: {useJoke.punchline}</h1><br/><br/><br/>
        <button onClick={getNewJoke}> New Joke</button> 
        </>
    )
}