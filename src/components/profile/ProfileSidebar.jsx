import React from "react";
import { NavLink } from "react-router-dom";
import Styles from "../profile/_profile.module.css";

const ProfileSidebar = () => {
  return (
    <div className={Styles.sidebarProfile}>
      <nav>
        <ul>
          <li>
            <NavLink to="/profile" activeClassname="active">
              My Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/upload-profile photo" activeClassname="active">
              Update profile photo
            </NavLink>
          </li>
          <li>
            <NavLink to="/upload-phone" activeClassname="active">
              Update phone number
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ProfileSidebar;
