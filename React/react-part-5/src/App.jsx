import './App.css'
import Lottrey from './stage3/Lottrey'




function App() {
  
  let winningCon = (ticket) =>  {
    return ticket[0] === 0 //ticket.every((num) => num === ticket[0]); 
  }

  return (
   <div>
    <Lottrey  winningCon={winningCon}/>
   </div>
  )
}

export default App
