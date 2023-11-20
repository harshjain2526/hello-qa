import jsonData from "../data";

export default function TicketListHeader(groupKey, groupingChoice) {
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
    headerText = `Status: ${groupKey}`;
  } else if (groupingChoice === "priority") {
    switch (groupKey) {
      case "4":
        headerText = "Urgent";
        break;
      case "3":
        headerText = "High";
        break;
      case "2":
        headerText = "Medium";
        break;
      case "1":
        headerText = "Low";
        break;
      default:
        headerText = "No priority";
        break;
    }
  }

  return headerText;
}
