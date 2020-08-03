import React from "react";
import styles from "./sideDrawerToggler.module.css";
const SideDrawerToggler = (props) => {
  return (
    <div onClick={props.clicked} className={styles.DrawerToggle}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
export default SideDrawerToggler;
