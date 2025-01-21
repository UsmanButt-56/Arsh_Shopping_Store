import { ActionType } from "../Constants/action-type";

export const CART = (item) =>
{
    return {
        type : ActionType.ADD_CART,
        payload : item
    };
};

export const Delete = (id) =>
{
    return {
        type : ActionType.DELETE_ITEM,
        payload : id
    }
}

export const DECREMENT = (item) =>
{
    return {
        type : ActionType.DECREMENT,
        payload : item
    }
}