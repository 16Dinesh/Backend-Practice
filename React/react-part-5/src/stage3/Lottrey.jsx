import { useState, useEffect } from "react";
import Ticket from "../stage2/Ticket.jsx";
import { genTicket, sum } from "../stage-1/helper.js";
import Button from "../stage2/Button.jsx";

//Lifting State Up
export default function Lottrey({ n = 3, winningCon }) {
    // Initialize the ticket state to null and generate the ticket in useEffect to prevent re-generation on each render
    const [ticket, setTicket] = useState(null);
    const [isWinning, setIsWinning] = useState(false);
  
    useEffect(() => {
      if (!ticket) {
        const initialTicket = genTicket(n);
        setTicket(initialTicket);
        setIsWinning(winningCon(initialTicket));
      }
    }, [ticket, n, winningCon]);
  
    const buyTicket = () => {
      const newTicket = genTicket(n); // Generate a new ticket
      setTicket(newTicket); // Update ticket state
      setIsWinning(winningCon(newTicket)); // Update winning status
    };
  
    return (
      <div>
        <h1>Lottery Game</h1>
        {ticket && <Ticket ticket={ticket} />}
        <h3>{isWinning ? "Congratulations, you won!" : "Try again!"}</h3>
        <Button action={buyTicket} />
      </div>
    );
  }