import { useRef } from "react";

function Counter() {
    let count = useRef(0)
    function CounterInc() {
        count.current += 1;
        console.log(count.current)
        document.getElementById('display').innerText = `count = ${count.current}`
    }
  return (
    <>
    <div>Counter_useRef</div>
    <h3 id='display'>
        count = {count.current}
    </h3>
    <button onClick={CounterInc}>Increce</button>
    </>
  )
}

export default Counter