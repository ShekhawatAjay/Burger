import React from "react";
import styles from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";
const controls = [
  {
    lable: "Salad",
    type: "salad",
  },
  {
    lable: "Bacon",
    type: "bacon",
  },
  {
    lable: "Cheese",
    type: "cheese",
  },
  {
    lable: "Meat",
    type: "meat",
  },
];
const buildcontrols = (props) => (
  <div className={styles.BuildControls}>
    <p>
      Total Price:<strong>{props.price}</strong>
    </p>
    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.lable}
        lable={ctrl.lable}
        added={() => props.ingredientAddes(ctrl.type)}
        removes={() => props.ingredientdecrs(ctrl.type)}
        disabled={props.disabledInfo[ctrl.type]}
        purchasable={props.purchasable}
      />
    ))}
    <button
      className={styles.OrderButton}
      disabled={!props.purchasable}
      onClick={props.purchaseHandler}
    >
      ORDER NOW
    </button>
  </div>
);

export default buildcontrols;
