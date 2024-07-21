import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0)

    function incCount() {
        setCount(count+1)
    }
    
  return (
    <div>
        <h3>Count = {count}</h3>
        <button onClick={incCount}>UP</button> 
    </div>
  )
}

export default Counter