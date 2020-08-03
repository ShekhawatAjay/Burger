import React, { Component } from "react";
import Auxx from "../../../hoc/Auxx";
import Button from "../../UI/Button/Button";
class OrderSummary extends Component {
  // componentDidUpdate() {
  //   console.log("[order summary] will updare");
  // }
  render() {
    const ingrediantsSummary = Object.keys(this.props.ingredients).map(
      (igkey) => {
        return (
          <li key={igkey}>
            <span style={{ textTransform: "capitalize" }}> {igkey}</span>:
            {this.props.ingredients[igkey]}
          </li>
        );
      }
    );
    return (
      <Auxx>
        <h3>Your Order</h3>
        <p>A delicious birger with following ingrediants:</p>
        <ul>{ingrediantsSummary}</ul>
        <p>
          <strong>Total price:{this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to CheckOut</p>
        <Button clicked={this.props.closeBackdrop} type="Danger">
          CANCLE
        </Button>
        <Button type="Success" clicked={this.props.PurchaseContinue}>
          CONTINUE
        </Button>
      </Auxx>
    );
  }
}
export default OrderSummary;
