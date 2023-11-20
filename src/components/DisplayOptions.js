import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGroupingChoice, setSortChoice } from "../store/todoSlice";
function DisplayOptions() {
  const groupingChoice = useSelector((state) => state.grouping.groupingChoice);
  const sortChoice = useSelector((state) => state.grouping.sortChoice);
  const dispatch = useDispatch();

  return (
    <>
      <div className="display-options">
        <div className="display-option-item ">
          <label>Grouping</label>
          <select
            value={groupingChoice}
            onChange={(event) =>
              dispatch(setGroupingChoice(event.target.value))
            }
            style={{ padding: "7px" }}
          >
            <option value="user">User</option>
            <option value="status">Status</option>
            <option value="priority">Priority</option>
          </select>
        </div>
        <div className="display-option-item ">
          <label>Sorting</label>
          <select
            value={sortChoice}
            onChange={(event) => dispatch(setSortChoice(event.target.value))}
            style={{ padding: "7px" }}
          >
            <option value="priority">Priority</option>
            <option value="title">Title </option>
          </select>
        </div>
      </div>
    </>
  );
}

export default DisplayOptions;
