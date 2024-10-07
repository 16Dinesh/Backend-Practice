import { useEffect, useState } from "react"

export default function Counter() {
    let [count, setCountInc] = useState(0);
    let [county, setCountDec] = useState(100);
    useEffect(()=> console.log(`COUNT : ${count}`),[count])

    let Increc = () => {
        setCountInc(count+1)
    }

    let Decre = () => {
        setCountDec(county -1);
    }

    return (
    <div>
        <h4>Count = {count}</h4>
        <button onClick={Increc}>Inc</button>
        <h4>Count = {county}</h4>
        <button onClick={Decre}>Decre</button>
    </div>
    )
}