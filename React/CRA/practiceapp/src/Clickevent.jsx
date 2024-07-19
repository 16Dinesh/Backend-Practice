import React from 'react'
import { useState } from 'react'

const Clickevent = () => {
    const [number, setNumber] = useState(0);

    const increment = () => {
        setNumber(number + 1)
    }

    const decriment = () => {
        if(number>0 ) {
        setNumber(number - 1)
        }
    }

    const reset = () => {
        setNumber(0)
    }

  return (
    <div>
        <h1>{number}</h1>
        <button onClick={increment}>Up</button> &nbsp;
        <button onClick={decriment}>Down</button> &nbsp;
        <button onClick={reset}>Reset</button>

    </div>
  )
}

export default Clickevent