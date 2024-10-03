import { useState } from "react"
import "./lottry.css"
import { genTicket, sum } from "./stage-1/helper"


const Lottrey1 = () => {
    const [ticket, setTicket] = useState(genTicket(3))
    const isWinning = sum(ticket) === 15;

    let buyTicket = () => {
      setTicket(genTicket(3))
    }
  return (
    <div>
        <h1>Lottery Game</h1>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
        <h3>{isWinning && "Congratulations, you won!"}</h3>
        <button onClick={buyTicket}>Buy New Ticket </button>
    </div>
  )
}

export default Lottrey1