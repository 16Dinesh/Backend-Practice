import { useState } from "react";
import Ticket from "./Ticket";
import {genTicket , sum} from "../stage-1/helper.js"
import Button from "./Button.jsx";

//Lyting State Up
export default function Lottrey({n =3, winningCon}) {
    const [ticket, setTicket] = useState(genTicket(n))
    const isWinning = winningCon(ticket);

    let buyTicket = () => {
      setTicket(genTicket(n))
    }
  return (
    <div>
        <h1>Lottery Game</h1>
            <Ticket ticket={ticket}/>
        <h3>{isWinning && "Congratulations, you won!"}</h3>
        <Button action={buyTicket}/>
    </div>
  )
}