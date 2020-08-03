import React, { Component } from "react";
import {connect} from 'react-redux'
import * as actionType from '../../store/action/actionType';
import * as BurgerBuilderAction from '../../store/action/index'
import Auxx from "../../hoc/Auxx";
import Burger from "../../comopents/Burger/Burger";
import BuildControls from "../../comopents/Burger/BuildControls/BuildControls";
import Modal from "../../comopents/UI/modal/Modal";
import OrderSummary from "../../comopents/Burger/OrderSummary/OrderSummary";


import Spinner from '../../comopents/UI/Spinner/Spinner'
// import withErrorHandler from '../../hoc/WithErrorHandler/withErrorHandler'
import axios from '../../hoc/axios-order'



class BurgerBuilder extends Component {
  state = {
    purchasable: false,
    purchasing: false,
   
    
  };

  componentDidMount(){
    // console.log(this.props)
    this.props.initIngreduents();
  }
  UpdatePurchasable = (ingredient) => {
    const sum = Object.keys(ingredient)
      .map((igkeys) => {
        return ingredient[igkeys];
      })
      .reduce((sum, el) => {
        return sum + el;
      });
    return sum > 0 
  };
  
  
  PurchaseHandler = () => {
    this.setState({ purchasing: true });
  };
  CloseBackdrop = () => {
    this.setState({ purchasing: false });
  };
  //////////////////////////////////
  PurchaseContinueHandler = () => {
 
  this.props.history.push( '/checkout');
  }
   ///////////////////////////
  render() {
    const disabledInfo = { ...this.props.ing };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    
    

      // console.log(this.props.ing)
    
    let Burger1=this.props.error?<p>sprry</p>:<Spinner/>
    let OrderSum=<Spinner/>
      if(this.props.ing){ Burger1=(<Auxx>
      <Burger ingredients={this.props.ing} />
      <BuildControls
        ingredientAddes={this.props.onIngredientAdded}
        ingredientdecrs={this.props.onIngredientRemoved}
        disabledInfo={disabledInfo}
        price={this.props.price}
        purchasable={this.UpdatePurchasable(this.props.ing)}
        purchaseHandler={this.PurchaseHandler}
      />
      </Auxx>)
      OrderSum=<OrderSummary
      ingredients={this.props.ing}
      closeBackdrop={this.CloseBackdrop}
      PurchaseContinue={this.PurchaseContinueHandler}
      price={this.props.price}
    />
      }
     
    return (
      <Auxx>
        <Modal show={this.state.purchasing} closeBackdrop={this.CloseBackdrop}>
          {OrderSum}
        </Modal>
        {Burger1}
      </Auxx>
    );
  }
}
const mapStateToProps=state=>{
   return {
       ing:state.burgerReducer.ingredients,
       price:state.burgerReducer.totalPrice,
       error:state.burgerReducer.error,
   }
}
const mapDispatchToProps=dispatch=>{
   return {
    onIngredientAdded:(ingredient)=>dispatch(BurgerBuilderAction.addIngredient(ingredient)),
    onIngredientRemoved:(ingredient)=>dispatch(BurgerBuilderAction.removeIngredient(ingredient)),
    initIngreduents:()=>dispatch(BurgerBuilderAction.initIngredients())
   }
}
export default connect(mapStateToProps,mapDispatchToProps)(BurgerBuilder);
