import React from "react";
import styles from "./toolbar.module.css";
import Logo from "../../LOGO/Logo";
import Navigation from "../NavigationItems/NavigationItems";
import SideDrawerToggler from "./SideDrawerToggler/SideDrawerToggler";
const toolbar = (props) => {
  return (
    <header className={styles.Toolbar}>
      <SideDrawerToggler clicked={props.ShowSideDrawer} />
      <div className={styles.Logo}>
        <Logo />
      </div>
      <div className={styles.DesktopOnly}>
        <Navigation />
      </div>
    </header>
  );
};
export default toolbar;
