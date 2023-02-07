import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name : 'cart',
  initialState : {
    cartProductIds : []
  },
  reducers : {
    addToCart(state,action){
      state.cartProductIds = [action.payload,...state.cartProductIds];
    },
    removeFromCart(state,action){
      const indexOfId = state.cartProductIds.indexOf(action.payload);
      state.cartProductIds.splice(indexOfId,1);
    },
    clearAllItems(state){
      state.cartProductIds = [];
    }
  }
})

// addToCart:()=>{} 축약해서 위에처럼 들어감

export let { addToCart, removeFromCart, clearAllItems} = CartSlice.actions;

export default CartSlice;