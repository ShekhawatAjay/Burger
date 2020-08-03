import React from 'react';
import styles from './Order.module.css'
const Order=(props)=>{
    let Ingredients=[];
    
    // console.log(props.ingredients)
    for(let ing in props.ingredients){
Ingredients.push(
    {
        name:ing,
        amount:props.ingredients[ing]
    }

);

    }
    // console.log(Ingredients)
    let ShowIngredients=Ingredients.map(ing=>{
    return <span key={ing.name}
     style={{textTransform:'capitalize',
    display:'inline-block',
margin:'0px 8px ',
border:'1px solid #ddd',
padding:'5px'}}
    >{ing.name}({ing.amount})</span>
    })
    return (
        <div className={styles.Order}>Ingredients:
         {ShowIngredients}
    <p>Price <strong>{props.price}</strong> <span style={{fontSize:'20px',fontFamily:'arial'}} >&#8377;</span></p>
    <p>Orderd By:<span style={{textTransform:'capitalize',marginLeft:'5px'}} >{props.contact.name}</span></p>  
        </div>
    )
}
export default Order;