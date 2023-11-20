import React from "react";
import DisplayButton from "./DisplayButton";
import "./../assets/css/navBar.css";
function Navbar() {
  return (
    <>
      <div className="nav">
        <ul className="nav-list">
          <li className="nav-list-item">
            <DisplayButton />
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
