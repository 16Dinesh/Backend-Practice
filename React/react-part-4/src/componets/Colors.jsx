import { useState } from "react"

export default function Colors() {
    const [moves, setMoves] = useState({blue:0,yellow:0,green:0,red:0})
    const [arr, setArr] = useState(['No Move!'])

    let updateBlue = () => {
        setMoves((prevV) => {
           return {...prevV, blue:prevV.blue +1}
        })

        setArr((preA) => {return [...preA, "Blue Move"]})
    }

    let updateYellow = () => {
        setMoves((prevV) => {
           return {...prevV, yellow:prevV.yellow +1}
        })
        setArr((preA) => {return [...preA, "yellow Move"]})
    }

    let updateGreen = () => {
        setMoves((prevV) => {
           return {...prevV, green:prevV.green +1}
        })
        setArr((preA) => {return [...preA, "green Move"]})
    }

    let updateRed = () => {
        setMoves((prevV) => {
           return {...prevV, red:prevV.red +1}
        })
        setArr((preA) => {return [...preA, "red Move"]})
    }

    return(
        <div className="board">
            <p>Object & Arrays in States</p>
            <p>{arr}</p>
            <div>Blue move = {moves.blue}</div>
            <button style={{backgroundColor : "blue"}} onClick={updateBlue}>+1</button>
            <div>Yellow move = {moves.yellow}</div>
            <button style={{backgroundColor : "yellow", color: "black"}} onClick={updateYellow}>+1</button>
            <div>Green move = {moves.green}</div>
            <button style={{backgroundColor : "green"}} onClick={updateGreen}>+1</button>
            <div>Red move = {moves.red}</div>
            <button style={{backgroundColor : "red"}} onClick={updateRed}>+1</button>
        </div>
    )
}