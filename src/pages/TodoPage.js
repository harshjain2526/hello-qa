import React, { useState } from "react";
import "./../assets/css/todoPage.css";
import Navbar from "../components/Navbar";
import TicketDisplay from "../components/TicketDisplay";
import jsonData from "../data";
import TicketCard from "../components/TicketCard";
import useTicketList from "../hooks/getTicketsData";
import { useSelector } from "react-redux";

function TicketListHeader(groupKey, groupingChoice) {
  let headerText = groupKey;

  if (groupingChoice === "user") {
    // Find the corresponding user object using the groupKey (user ID)
    const user = jsonData.users.find((user) => user.id === groupKey);

    if (user) {
      headerText = user.name;
    } else {
      console.error("Invalid user ID:", groupKey);
      headerText = "Unknown User";
    }
  } else if (groupingChoice === "status") {
    headerText = groupKey;
  } else if (groupingChoice === "priority") {
    switch (groupKey) {
      case "Urgent":
        headerText = "Urgent";
        break;
      case "High":
        headerText = "High";
        break;
      case "Medium":
        headerText = "Medium";
        break;
      case "Low":
        headerText = "Low";
        break;
      default:
        headerText = "No priority";
        break;
    }
  }

  return headerText;
}

function Todo() {
  const groupingChoice = useSelector((state) => state.grouping.groupingChoice);
  const sortChoice = useSelector((state) => state.grouping.sortChoice);
  const { groupedTickets } = useTicketList(groupingChoice, sortChoice);

  console.log("groupedTickets:", groupedTickets); // Check if groupedTickets is defined

  return (
    <div className="main-body">
      <Navbar />
      <div className="body">
        <div className="display-grouping">
          {Object.keys(groupedTickets).map((groupKey) => {
            const tickets = groupedTickets[groupKey];
            console.log("groupKey:", groupKey); // Check if groupKey is valid
            console.log("tickets:", tickets); // Check if tickets is defined

            const header = TicketListHeader(groupKey, groupingChoice);
            return (
              <div key={groupKey}>
                <TicketDisplay
                  status={header}
                  amount={tickets.length}
                  tickets={tickets}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Todo;
