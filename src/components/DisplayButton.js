import React, { useState } from "react";
import "./../assets/css/displayButton.css";
import control from "./../assets/icons/control.png";
import arrow from "./../assets/icons/down-arrow.png";
import DisplayOptions from "./DisplayOptions";

function DisplayButton() {
  const [display, setDisplay] = useState(false);
  return (
    <>
      <div className="">
        <button
          className="display-button"
          onClick={() => (display ? setDisplay(false) : setDisplay(true))}
        >
          <img className="control-img" alt="icon" src={control} />
          Display
          <img className="control-img" alt="icon" src={arrow} />
        </button>
        {display && <DisplayOptions />}
      </div>
    </>
  );
}

export default DisplayButton;
