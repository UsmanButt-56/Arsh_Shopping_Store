import { ActionType } from "../Constants/action-type";

const initialState = {
    items : [],
}

export const cartreducer = ( state = initialState , { type , payload }) => 
{
    switch(type) {
        case ActionType.ADD_CART :
        const ItemIndex = state.items.findIndex((item) => item.id === payload.id)
        if(ItemIndex >= 0)
        {
        //    state.carts[ItemIndex].qnty + 1
        state.items[ItemIndex].qnty+=1;
        state.items[ItemIndex].total = state.items[ItemIndex].qnty * state.items[ItemIndex].price ;
        }
        else
        {
            const temp = {...payload , qnty : 1 , total: payload.price}
            return {
             ...state,
             items : [ ...state.items ,temp ]
            }
        }
        case ActionType.DELETE_ITEM : 
        return {
            ...state,
            items : state.items.filter((item) => item.id !== payload )
        }
        case ActionType.DECREMENT : 
        const ItemIndex_Dec = state.items.findIndex((item) => item.id === payload.id)
        if(state.items[ItemIndex_Dec].qnty >= 1)
        {
            state.items[ItemIndex_Dec].qnty -=1
            state.items[ItemIndex_Dec].total = state.items[ItemIndex_Dec].qnty * state.items[ItemIndex_Dec].price;
        }
        return {
            ...state,
            items : [ ...state.items ,]
            }
        
        default : 
        return state;
    }
}