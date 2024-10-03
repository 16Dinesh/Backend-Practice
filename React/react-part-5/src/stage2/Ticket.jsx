import TicketNum from "./TicketNum";
import "../stage-1/lottry.css"

export default function Ticket({ticket}) {
    return (
        <div className="ticket">
            <p>Tickets</p>
            {ticket.map((num, idx) => (
            <span><TicketNum num={num} key={idx}/></span>
        ))}
        </div>
    )
}