import React, { useState } from "react";
import jsonData from "./../data";
import TicketCard from "./../components/TicketCard";
const TicketList = () => {
  const [tickets, setTickets] = useState([]);
  const [groupingChoice, setGroupingChoice] = useState("user");
  const [sortChoice, setSortChoice] = useState("priority");

  // Sort tickets before grouping
  const sortTickets = () => {
    switch (sortChoice) {
      case "priority":
        tickets.sort((a, b) => b.priority - a.priority);
        break;
      case "title":
        tickets.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        console.error("Invalid sorting choice:", sortChoice);
    }
  };

  const groupTickets = () => {
    let ticketGroups = {};

    switch (groupingChoice) {
      case "user":
        ticketGroups = groupTicketsByUser();
        break;
      case "status":
        ticketGroups = groupTicketsByStatus();
        break;
      case "priority":
        ticketGroups = groupTicketsByPriority();
        break;
      default:
        console.error("Invalid grouping choice:", groupingChoice);
    }

    return ticketGroups;
  };

  const groupTicketsByUser = () => {
    const ticketGroups = {};

    for (const ticket of tickets) {
      if (!ticketGroups.hasOwnProperty(ticket.userId)) {
        ticketGroups[ticket.userId] = [];
      }

      ticketGroups[ticket.userId].push(ticket);
    }

    return ticketGroups;
  };

  const groupTicketsByStatus = () => {
    const ticketGroups = {};

    for (const ticket of tickets) {
      if (!ticketGroups.hasOwnProperty(ticket.status)) {
        ticketGroups[ticket.status] = [];
      }

      ticketGroups[ticket.status].push(ticket);
    }

    return ticketGroups;
  };

  const groupTicketsByPriority = () => {
    const ticketGroups = {};

    for (const ticket of tickets) {
      switch (ticket.priority) {
        case 4:
          if (!ticketGroups.hasOwnProperty("Urgent")) {
            ticketGroups["Urgent"] = [];
          }
          ticketGroups["Urgent"].push(ticket);
          break;
        case 3:
          if (!ticketGroups.hasOwnProperty("High")) {
            ticketGroups["High"] = [];
          }
          ticketGroups["High"].push(ticket);
          break;
        case 2:
          if (!ticketGroups.hasOwnProperty("Medium")) {
            ticketGroups["Medium"] = [];
          }
          ticketGroups["Medium"].push(ticket);
          break;
        case 1:
          if (!ticketGroups.hasOwnProperty("Low")) {
            ticketGroups["Low"] = [];
          }
          ticketGroups["Low"].push(ticket);
          break;
        default:
          if (!ticketGroups.hasOwnProperty("No priority")) {
            ticketGroups["No priority"] = [];
          }
          ticketGroups["No priority"].push(ticket);
          break;
      }
    }
    console.log(ticketGroups);
    return ticketGroups;
  };

  // Set the tickets state with the provided data
  React.useEffect(() => {
    setTickets(jsonData.tickets);
  }, []);

  sortTickets(); // Sort tickets before grouping

  const groupedTickets = groupTickets();

  return (
    <div className="ticket-list">
      <div>
        <label>Grouping Choice:</label>
        <select
          value={groupingChoice}
          onChange={(event) => setGroupingChoice(event.target.value)}
        >
          <option value="user">User</option>
          <option value="status">Status</option>
          <option value="priority">Priority</option>
        </select>
        &nbsp;&nbsp;
        <label>Sorting Choice:</label>
        <select
          value={sortChoice}
          onChange={(event) => setSortChoice(event.target.value)}
        >
          <option value="priority">Priority (Descending)</option>
          <option value="title">Title (Ascending)</option>
        </select>
      </div>
      <div>
        {Object.keys(groupedTickets).map((groupKey) => {
          let groupHeader = groupKey;
          let ticketListItems = groupedTickets[groupKey].map((ticket) => {
            // Find the corresponding user object using the ticket's user ID
            const user = jsonData.users.find(
              (user) => user.id === ticket.userId
            );

            groupHeader = user.name;
            return (
              <>
                <TicketCard
                  id={ticket.id}
                  title={ticket.title}
                  tag={[ticket.tag]}
                />
              </>
            );
          });

          if (groupingChoice === "status") {
            groupHeader = "Status: " + groupKey;
          } else if (groupingChoice === "priority") {
            switch (groupKey) {
              case "4":
                groupHeader = "Urgent";
                break;
              case "3":
                groupHeader = "High";
                break;
              case "2":
                groupHeader = "Medium";
                break;
              case "1":
                groupHeader = "Low";
                break;
              default:
                groupHeader = "No priority";
                break;
            }
          }

          return (
            <div className="priority-group" key={groupKey}>
              <h2 className="priority-header">{groupHeader}</h2>
              <ul className="ticket-list-items">{ticketListItems}</ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TicketList;
