import * as actionType from './actionType';
import axios from '../../hoc/axios-order'
export const addIngredient=(ingredient)=>{
    return {
        type:actionType.ADD_INGREDIENT,
        Ingredient:ingredient,
    }
}
export const removeIngredient=(ingredient)=>{
    return {
        type:actionType.REMOVE_INGREDIENT,
        Ingredient:ingredient,
    }
}

export const setIngredients =(ingredients)=>{
    return {
        type:actionType.SET_INGREDIENTS,
        ingredients:ingredients,
    }
}

export const fetchIngredientsFails=()=>{
    return{ 
        type:actionType.FETCH_INGREDIENTS_FAILS
    }
}
export const initIngredients=()=>{
    return  dispatch =>{
        axios.get('ingredients.json')
        .then(res=>{
          dispatch(setIngredients(res.data))
        })
        .catch(re=>{
          dispatch(fetchIngredientsFails())
        })
    }
        
    
}
