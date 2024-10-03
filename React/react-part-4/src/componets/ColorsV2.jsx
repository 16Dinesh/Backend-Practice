import { useState } from "react"

export default function ColorsV2() {
    const [moves, setMoves] = useState({blue:0,yellow:0,green:0,red:0})
    const [arr, setArr] = useState(['No Move!']);

    const updateMove = (color) => {
        setMoves((prevMoves) => ({
            ...prevMoves,
            [color]: prevMoves[color] + 1
        }));

        setArr((prevArr) => [...prevArr, `${color.charAt(0).toUpperCase() + color.slice(1)} Move`]);
    };

    return(
        <div className="board">
            <p>Object and Array in states efficent</p>
            <p>{arr.join(', ')}</p>
            <div>Blue move = {moves.blue}</div>
            <button style={{backgroundColor : "blue"}} onClick={() => updateMove('blue')}>+1</button>
            <div>Yellow move = {moves.yellow}</div>
            <button style={{backgroundColor : "yellow", color: "black"}} onClick={() => updateMove('yellow')}>+1</button>
            <div>Green move = {moves.green}</div>
            <button style={{backgroundColor : "green"}} onClick={() => updateMove('green')}>+1</button>
            <div>Red move = {moves.red}</div>
            <button style={{backgroundColor : "red"}} onClick={() => updateMove('red')}>+1</button>
        </div>
    )
}