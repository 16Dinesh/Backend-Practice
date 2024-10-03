import { useState } from "react"


const Counter_states = () => {
    const [count , setCount] = useState(0)
    function incCount() {
        setCount((cuur) => {
          return cuur +1;
        })  
        setCount((cuur) => {
          return cuur +1;   // call back to work syncronously 
        })  
    }
  return (
    <>
    <div>Counter_states</div>
    <h3>count = {count}</h3>
    <button onClick={incCount}>Add</button>
    </>
  )
}

export default Counter_states