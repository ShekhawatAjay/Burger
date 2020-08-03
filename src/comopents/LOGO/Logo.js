import React from "react";

import BurgerLogo from "../../assets/Image/original.png";
import styles from "./logo.module.css";
const logo = (props) => {
  return (
    <div className={styles.Logo}>
      <img src={BurgerLogo} alt="my-burger" />
    </div>
  );
};
export default logo;
