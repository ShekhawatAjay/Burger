import React,{Component} from 'react';
import {connect} from 'react-redux'
import CheckOutSummary from '../../comopents/Order/CheckOutSummary/CheckOutSummary'
import ContactData from './Contact-data/ContactData'

import {Route,Redirect} from 'react-router-dom';
class CheckOut extends Component{
   
    // componentWillMount(){
    //     const query=new URLSearchParams(this.props.location.search);
    // //     console.log(this.props.location.search);
    // //     console.log(query);
        
    //     let ingredients={};
    //     let totalPrice=null;
    //     for(let param of query.entries()){
    //         if(param[0]==='price'){
    //             totalPrice=+param[1]
    //         }
    //         else{
    //         ingredients[param[0]]=+param[1];
    //         }
    //     }
    //     this.setState({ ingredients:ingredients,totalPrice:totalPrice});
       
    // }
    // componentDidMount() {
    //     const query = new URLSearchParams(
    //         this.props.location.search
    //     );

    //     let data= {};

    //     for (let params of query.entries()) {
    //         data[params[0]] = +params[1];
    //     }
    //     this.setState({ ingredients: data});
    // }
    CheckOutCancleHandler=()=>{
        this.props.history.goBack();
    }
    CheckOutContinueHandler=()=>{
        this.props.history.push('/checkout/userdata');
    }
    render(){
        let jjjj=<Redirect to='/'/>
        if(this.props.ing){
      jjjj=(<div>

        <CheckOutSummary ingredients={this.props.ing}
       
       CheckOutCancle={this.CheckOutCancleHandler}
        CheckOutContinue={this.CheckOutContinueHandler}/>
       <Route path={this.props.match.path +'/userdata'} render={()=>(<ContactData {...this.props}/>)} />
    </div>)}
        return (
            <div>
                {jjjj}
            </div>
        )
     
           
        
    
    }
}
const mapStateToProps=state=>{
    return {
        ing:state.burgerReducer.ingredients,
        
    }
}
export default connect(mapStateToProps)(CheckOut);