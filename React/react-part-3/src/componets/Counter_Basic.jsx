import Counter from "./Counter_ref"

const Counter_Basic = () => {
    let count1 = 0 
    function inc() {
    let incr = count1 +=1
    document.getElementById('display').innerText=`count = ${incr}`
    }
  return (
    <>
    <div>Counter_Basic</div>
    <h3 id="display">Count = {count1}</h3>
    <button onClick={inc}>Increcment</button>
    </>
  )
}

export default Counter_Basic