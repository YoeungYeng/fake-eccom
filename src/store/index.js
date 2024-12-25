import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import productReducer from "./proudctSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer
  },
});

export default store;
