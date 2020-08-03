import * as actionType from '../action/actionType';

const initState={
    order:[],
    loading:false,
    count:0,
}
const reducer=(state=initState,action)=>{
    switch(action.type){
        case actionType.PURCHASE_BURGER_START:
            return {
                ...state,
                loading:true
            }
        case actionType.PURCHASE_BURGER_SUCCESS:
            const newOrder={
                ...action.orderData,
                id:action.orderId,

            }
            return{
                ...state,
                order:state.order.concat(newOrder),
                loading:false,
                

            }
        case actionType.PURCHASE_BURGER_FAIL:
            return{
                 ...state,
                 loading:false,
            }
        case actionType.FETCH_ORDERS_START:
            return {
                ...state,
                loading:true,
            }
        case actionType.FETCH_ORDERS_SUCCESS:
        
            return {
                ...state,
                order:action.order,
                loading:false,
            }
        case actionType.FETCH_ORDERS_FAIL:
            return{
                ...state,
                loading:false,
            }
       
    }
    return state;
}
export default reducer;