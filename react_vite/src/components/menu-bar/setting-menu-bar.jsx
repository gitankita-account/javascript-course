import React from "react";
import { Link, Outlet } from "react-router-dom";

const SettingMenuBar = () => {
  return (
    <>
      <div className="menu-bar-component setting">
        <ul className="menu-bar-ul setting-ul">
          <Link to={"/settings/change-password"}>
            <li>Change Password</li>
          </Link>
          <Link to={"/settings/view-profile"}>
            <li>View Profile</li>
          </Link>

          <Link to={"/hooks/usestate"}>
            <li>Redirect to Hooks</li>
          </Link>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default SettingMenuBar;
