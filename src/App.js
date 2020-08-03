import React, { Component } from "react";
import Layout from "./comopents/Layout/Layout";
import BurgerBuilder from "./containers/BuegerBuilder/BurgerBuilder";
import CheckOut from './containers/CheckOut/CheckOut';
import  { Route,Switch } from 'react-router-dom';
import Orders from './containers/Orders/Orders'
// import CheckOutSummary from "./comopents/Order/CheckOutSummary/CheckOutSummary";
export class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
          < Route path='/checkout'  component={CheckOut}/>
          < Route path='/' exact component={ BurgerBuilder} />
          < Route path='/orders' exact component={ Orders} />
        

          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
