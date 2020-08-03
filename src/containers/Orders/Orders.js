import React,{ Component } from "react";
import Order from '../../comopents/Order/Order/Order';
import axios from '../../hoc/axios-order'
import {connect} from 'react-redux'
import * as actions from '../../store/action/index'
class Orders extends Component{
   
    componentDidMount(){
        this.props.onFetchOrder();
    }
    render(){
        
        return(
            <div>
            { this.props.orders.map(order=>{
              return  <Order key={order.id}
              ingredients={order.ingredient}
              contact={order.Customer}
              price={order.price}/>

            }) }

            </div>
        )
            
        
        
    }
}
const mapStateToProps=state=>{
    return {
        orders:state.orderReducer.order,
        loading:state.orderReducer.loading,
    }
}
const mapDispatchToProps=dispatch=>{
    return {
    onFetchOrder:()=>dispatch(actions.fetchOrders())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Orders) ;