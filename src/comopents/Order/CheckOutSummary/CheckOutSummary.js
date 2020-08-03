import React from 'react';
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import styles from './CheckOutSummary.module.css'
// import CheckOut from '../../../containers/CheckOut/CheckOut';
const CheckOutSummary =(props)=>{
return(
    <div className={styles.CheckOutSummary}>
        <h1>We Hope Your Enjoyed Your Burger</h1>
        <div style={{height:'100%',width:'100%',margin:'auto'}}>
            <Burger ingredients={props.ingredients}/>
        </div>
        <Button type='Danger' clicked={props.CheckOutCancle}>Cancle</Button>
        <Button type='Success' clicked={props.CheckOutContinue} >Continue</Button>

    </div>
)
}
export default CheckOutSummary;