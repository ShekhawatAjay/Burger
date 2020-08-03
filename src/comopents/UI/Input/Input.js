import React from 'react';
import styles from './Input.module.css'

const Input=(props)=>{
    let InputElement=null;
    const inputClasses=[styles.InputElement]
    if(props.invalid && props.touched){
        inputClasses.push(styles.Invalid)
    }
    switch(props.elementType){
        case ('input'): 
        InputElement=<input className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed}/>
        break;
        case ('textarea'):
        InputElement=<textarea className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed} />
        break;
        case('select'):
        InputElement=<select className={inputClasses.join(' ')}  value={props.value} onChange={props.changed}>
           
        {props.elementConfig.options.map(opt=>{ return <option key={opt.value} value={opt.value}>{opt.displayValue}</option>})} 
            </select> 
            break;
        default:
            InputElement=<input className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed} />
        
    }
return(
    <div className={styles.Input}>
        <label className={styles.Label}>{props.label}</label>
        {InputElement}
    </div>
)
}
export default Input;