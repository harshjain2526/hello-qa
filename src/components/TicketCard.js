import React from "react";
import "./../assets/css/ticket-card.css";
import signal from "./../assets/icons/signal.png";
import UserIcon from "./UserIcon";
function TicketCard({ id, title, tag }) {
  return (
    <>
      <div className="main">
        <div className="header">
          <h3>{id}</h3>
          <UserIcon />
        </div>
        <div className="ticket">
          <p>{title}</p>
        </div>
        <div className="footer">
          <div className="signal">
            <img src={signal} alt="icon" />
          </div>

          {tag.map((tag) => {
            return (
              <div className="tag">
                <div className="tag-point"></div>
                <div>{tag}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default TicketCard;
