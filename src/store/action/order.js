import * as actionTypes from './actionType';
import axios from '../../hoc/axios-order'
import { fetchIngredientsFails } from './BurgerBuilder';

export const purcheaseBurgerSuccess=(id,orderData)=>{
    return {
        type:actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId:id,
        orderData:orderData,
    }
}

export const purchaseOrderFail=(error)=>{
    return {
        type:actionTypes.PURCHASE_BURGER_FAIL,
        error:error,
    }
}

export const purcheaseBurgerStart=()=>{
    return {
        type:actionTypes.PURCHASE_BURGER_START,
    }
}

export const purchaseOrder=(order)=>{
    
    return dispatch=>{
        
        dispatch(purcheaseBurgerStart());
        axios.post('order.json',order)
         .then(res=>{console.log(res.data.name)
             dispatch(purcheaseBurgerSuccess(res.data,order))
            })
          .catch(er=>{dispatch(purchaseOrderFail(er))})
    }
}

export const fetchOrdersSuccess=(order)=>{

    return { type:actionTypes.FETCH_ORDERS_SUCCESS,
            order:order,
    }
}

export const fetchOrderFails=(error)=>{
    return {
        type:actionTypes.PURCHASE_BURGER_FAIL,
        error:error,
    }
}
export const fetchOrderStart=()=>{
    return {
        type:actionTypes.PURCHASE_BURGER_START,
    }
}

export const fetchOrders=()=>{
    return dispatch=>{
        axios.get('/order.json')
        .then(res=>{
            let Data=res.data;
            // console.log(Data)
        let fetchData=[]
        for(let key in Data){
            fetchData.push(
                {
                    ...Data[key],
                    id:key,
                }
            )
        }   
        // console.log(fetchData)
        dispatch(fetchOrdersSuccess(fetchData));

        })
        .catch(err=>{
           dispatch(fetchIngredientsFails(err))
        })
                        }
}