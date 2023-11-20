import React from "react";
import UserIcon from "./UserIcon";
import "./../assets/css/DisplayTickets.css";
import plus from "./../assets/icons/menu.png";
import menu from "./../assets/icons/plus.png";
import TicketCard from "./TicketCard";

function TicketDisplay({ id, status, amount, tickets }) {
  return (
    <>
      <div className="main-display">
        <div className="header">
          <div className="header-list-1">
            <UserIcon />
            <div>{status}</div>
            <div style={{ marginLeft: "3px" }}>{amount}</div>
          </div>
          <div className="header-list-2">
            <button>
              <img className="control-img" alt="icon" src={menu} />
            </button>
            <button>
              <img className="control-img" alt="icon" src={plus} />
            </button>
          </div>
        </div>
        {tickets.map((ticket) => (
          <TicketCard
            key={ticket.id}
            id={ticket.id}
            title={ticket.title}
            tag={[ticket.tag]}
          />
        ))}
      </div>
    </>
  );
}

export default TicketDisplay;
