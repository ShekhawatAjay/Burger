import React, { Component } from "react";
import Auxx from "../../hoc/Auxx";
import styles from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/Sidedrawer";
class Layout extends Component {
  state = {
    showSideDrawer: false,
  };
  SideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };
  SideBrawerOpenHandler = (prevState) => {
    this.setState({ showSideDrawer: !prevState.showSideDrawer });
  };
  render() {
    return (
      <Auxx>
        <div>
          <Toolbar ShowSideDrawer={this.SideBrawerOpenHandler} />
          <SideDrawer
            open={this.state.showSideDrawer}
            closed={this.SideDrawerClosedHandler}
          />
        </div>
        <main className={styles.Content}>{this.props.children}</main>
      </Auxx>
    );
  }
}
export default Layout;
