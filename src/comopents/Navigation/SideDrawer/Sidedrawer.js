import React from "react";
import Logo from "../../LOGO/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import styles from "./SideDrawer.module.css";
import BackDrop from "../../UI/Backdrop/Backdrop";
import Auxx from "../../../hoc/Auxx";
const sideDrawer = (props) => {
  let attachedClass = [styles.SideDrawer, styles.Close];
  if (props.open) {
    attachedClass = [styles.SideDrawer, styles.Open];
  }
  return (
    <Auxx>
      <BackDrop show={props.open} clicked={props.closed} />
      <div className={attachedClass.join(" ")}>
        <div className={styles.Logo}>
          <Logo />
        </div>

        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Auxx>
  );
};
export default sideDrawer;
