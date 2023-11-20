import React, { useState } from "react";
import jsonData from "./../data";
import { useSelector } from "react-redux";

const useTicketList = () => {
  const [tickets, setTickets] = useState([]);
  const groupingChoice = useSelector((state) => state.grouping.groupingChoice);
  const sortChoice = useSelector((state) => state.grouping.sortChoice);
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

  // Return the necessary state and functions
  return {
    tickets,
    groupingChoice,
    sortChoice,
    groupedTickets,
    sortTickets,
  };
};

export default useTicketList;
