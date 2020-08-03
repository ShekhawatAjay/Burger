import * as actionType from '../action/actionType';

const INGREDIENT_PRICES = {
    salad: 4,
    cheese: 7,
    meat: 10,
    bacon: 8,
  };

const initialState={
    ingredients: null,
    totalPrice: 40,
    loading:false,
    error:false,
}
const reducer = (state=initialState,action)=>{
    switch(action.type){
        case actionType.ADD_INGREDIENT:
       
            return{
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.Ingredient]:state.ingredients[action.Ingredient]+1
                },
                totalPrice:state.totalPrice+INGREDIENT_PRICES[action.Ingredient]
            }
        
        case actionType.REMOVE_INGREDIENT:
            return{
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.Ingredient]:state.ingredients[action.Ingredient]-1
                },
                totalPrice:state.totalPrice-INGREDIENT_PRICES[action.Ingredient]

           }

           case actionType.SET_INGREDIENTS:
               return{
                   ...state,
                   ingredients:action.ingredients,
                   error:false,
                   
               }

            case actionType.FETCH_INGREDIENTS_FAILS:
                return {
                    ...state,
                    error:true,
                    
                }
        
        // default :
        // return{
        //     state,
        // }
    }
return state;

}
export default reducer;