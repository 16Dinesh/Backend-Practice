import { cloneElement } from 'react'
import './App.css'
import Counter from './componets/Counter_ref';
import Counter_Basic from './componets/Counter_Basic';
import Counter_states from './componets/Counter_states';
import Like_button from './componets/Like_button';

function App() {
  function dosome() {
    console.log("Printed")
  }

  function nonClic() {
    console.log('test');
    
  }

  function test(e) {
    e.preventDefault()
    console.log('e.prvent-default')
  }

  return (
    <>
      <h2>Handling click events</h2>
      <button onClick={dosome}>Click me </button>
      <hr></hr>
      <h2>Handling non-click events</h2>
      <button onMouseOver={nonClic}>kill me</button>
      <hr></hr>
      <h2>
        Event Object
      </h2>
      <form onSubmit={test}>
        <input placeholder='test'></input>
        <button>Done!</button>
      </form>
      <hr></hr>
      <h2>Handling states in using useRef</h2>
      {/* <Counter></Counter> */}
      <hr></hr>
      <h2>Handling states in using Regular JS</h2>
      {/* <Counter_Basic/> */}
      <hr></hr>
      <h2>Handling states in Using States</h2>
      <Counter_states/>
      <hr></hr>
      <h2>like button</h2>
      <Like_button/>
      <hr/>
    </>
  )
}

export default App
