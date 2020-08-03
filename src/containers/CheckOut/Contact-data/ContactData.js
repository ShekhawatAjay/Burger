import React,{Component} from 'react';
import {connect} from 'react-redux';
import  Button from '../../../comopents/UI/Button/Button'
import styles from './Contact.module.css'
import axios from '../../../hoc/axios-order'
import Spinner from '../../../comopents/UI/Spinner/Spinner'
import Input from '../../../comopents/UI/Input/Input'
import * as actions from '../../../store/action/index'


class ContactData extends Component{
    state={OrderForm:{
        name:{
            elementType:'input',
            elementConfig : {
                type:'text',
                placeholder:'Your Name',
            },
            value:'',
            validation:{
                required:true,
            },
            valid:false,
            touched:false,
            },
        street:{
            elementType:'input',
            elementConfig : {
                type:'text',
                placeholder:'Your Street',
            },
            value:'',
            validation:{
                required:true,
            },
            valid:false,
            touched:false,
            },
        pincode:{
            elementType:'input',
            elementConfig : {
                type:'text',
                placeholder:'Your Pin',
            },
            value:'',
            validation:{
                required:true,
            },
            valid:false,
            touched:false,
            },
        country:{
            elementType:'input',
            elementConfig : {
                type:'text',
                placeholder:'India',
            },
            value:'',
            validation:{
                required:true,
            },
            valid:false,
            touched:false,
            },
        email:{
            elementType:'input',
            elementConfig : {
                type:'email',
                placeholder:'Your Email',
            },
            value:'',
            validation:{
                required:true,
            },
            valid:false,
            touched:false,
            },
        mobile:{
            elementType:'input',
            elementConfig : {
                type:'text',
                placeholder:'Contact Number',
            },
            value:'',
            validation:{
                required:true,
            },
            valid:false,
            touched:false,
            },
        deliveryMode:{
            elementType:'select',
            elementConfig : {
                options:[{value:'faster',displayValue:'fastest'},
                {value:'Cheapest',displayValue:'Cheapest'},
            ]
            },
            value:'faster',
            validation:{
                required:true,
            },
            valid:true,
            },
        },
        formIsValid:false,
    }
    OrderHandler=(e)=>{
        // console.log(this.props)
        e.preventDefault();
        // console.log(this.props.ingredients)
        // console.log(this.props.totalPrice)

    
        let formData={}
        for(let element in this.state.OrderForm){
            formData[element]=this.state.OrderForm[element].value
        }
        // console.log(formData)
        let order={
           ingredient:this.props.ing,
           price:this.props.price,
           Customer:formData

         }
         this.props.placeBurgerOrder(order);
     
         
    }
    UserDataChangeHandler=(e,elementId)=>{
      let UpdatedOrderFrom={...this.state.OrderForm}
      let UpdatedElement={...UpdatedOrderFrom[elementId]}
      UpdatedElement.value=e.target.value;
      UpdatedElement.touched=true;
      UpdatedElement.valid=this.checkValidity(UpdatedElement.value,UpdatedElement.validation)
      UpdatedOrderFrom[elementId]=UpdatedElement;

      let formIsValid=true;
      for(let valid in UpdatedOrderFrom)
         formIsValid=UpdatedOrderFrom[valid].valid && formIsValid;

      this.setState({OrderForm:UpdatedOrderFrom,formIsValid:formIsValid})
    //   console.log(e.target.value,elementId)
    }
    /////
    checkValidity(value,rule){
        let isValid=true;
        if(rule.required ){
           isValid=value.trim()!=='' && isValid;
        }
        console.log(isValid)
        return isValid;
    }
    /////////////////////////
    render(){
        let OrderFromA=[];
        for(let key in this.state.OrderForm){
            OrderFromA.push({id:key,    config:this.state.OrderForm[key]})
        }
        
        /////
        let form= (<form onSubmit={this.OrderHandler}>

        
        {OrderFromA.map(formElement=>{
          return   <Input key={formElement.id} elementType={formElement.config.elementType} elementConfig={formElement.config.elementConfig}  value={formElement.config.value} invalid={!formElement.config.valid} touched={formElement.config.touched} changed={(e)=>this.UserDataChangeHandler(e,formElement.id)} />
        })}
       
        <Button type='Success' disabled={!this.state.formIsValid} >ORDER</Button>
    </form>)
        if(this.props.loading){
            form=<Spinner/>
        }
        
        return(
            <div className={styles.ContactData}>
            <h4>Enter Your Contact Data</h4>
           {form}
            </div>
        )
    }
}
const mapStateToProps=state=>{
    return {
        ing:state.burgerReducer.ingredients,
        price:state.burgerReducer.totalPrice,
        loading:state.orderReducer.loading
    }
}
const mapDispatchToProps=dispatch=>{
    return {
        placeBurgerOrder:(order)=>dispatch(actions.purchaseOrder(order)),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ContactData);