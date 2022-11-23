import React, { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import Styles from "../profile/_profile.module.css";

const ProfileMainBlock = () => {
  return (
    <div className={Styles.mainProfileBlock}>
      <Outlet />
    </div>
  );
};

export default ProfileMainBlock;
