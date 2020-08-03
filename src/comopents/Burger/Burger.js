import React from "react";
import styles from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
const Burger = (props) => {
  let TransformIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => (
        <BurgerIngredient key={igKey + i} type={igKey} />
      ));
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (TransformIngredients.length === 0) {
    TransformIngredients = <p>Please start adding Ingredients</p>;
  }

  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top" />
      {TransformIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};
export default Burger;
