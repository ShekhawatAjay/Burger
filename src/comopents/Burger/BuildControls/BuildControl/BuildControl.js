import React from "react";
import styles from "./BuildControl.module.css";
const buildcontrol = (props) => (
  <div className={styles.BuildControl}>
    <div className={styles.Label}>{props.lable}</div>
    <button
      className={styles.Less}
      onClick={props.removes}
      disabled={props.disabled}
    >
      Less
    </button>
    <button className={styles.More} onClick={props.added}>
      More
    </button>
  </div>
);
export default buildcontrol;
