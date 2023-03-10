import { configureStore } from "@reduxjs/toolkit";
import CartSlice from './redux/CartSlice';

const store = configureStore({
  reducer : {
    cart : CartSlice.reducer
  }
})

export default store;