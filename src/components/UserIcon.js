import React from "react";
import user_icon from "./../assets/icons/user_dp.jpeg";
import "./../assets/css/userIcon.css";
function UserIcon() {
  return (
    <div>
      <img src={user_icon} className="user-icon" alt="user-icon" />
      <div className="active-status"></div>
    </div>
  );
}

export default UserIcon;
