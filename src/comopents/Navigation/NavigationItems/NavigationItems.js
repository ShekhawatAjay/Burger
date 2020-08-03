import React from "react";
import styles from "./navigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";
const nevigationItems = () => {
  return (
    <ul className={styles.NavigationItems}>
      <NavigationItem  link="/" exact>
        Burger Builder
      </NavigationItem>
      <NavigationItem link="/checkout">CheckOut</NavigationItem>
      <NavigationItem link="/orders">Your Orders</NavigationItem>
    </ul>
  );
};
export default nevigationItems;
