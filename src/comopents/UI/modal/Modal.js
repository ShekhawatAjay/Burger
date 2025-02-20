import React, { Component } from "react";
import styles from "./modal.module.css";
import Auxx from "../../../hoc/Auxx";
import Backdrop from "../Backdrop/Backdrop";
class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show||nextProps.children!==this.props.children;
  }
  // componentDidUpdate() {
  //   console.log("[modal] will update");
  // }
  render() {
    return (
      <Auxx>
        <Backdrop show={this.props.show} clicked={this.props.closeBackdrop} />
        <div
          className={styles.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0",
          }}
        >
          {this.props.children}
        </div>
      </Auxx>
    );
  }
}
export default Modal;
