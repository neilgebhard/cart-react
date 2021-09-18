import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { cart: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cart.push({
        cartId: Math.random(),
        ...action.payload
      });
    },
    removeFromCart(state, action) {
      state.cart = state.cart.filter(product => product.cartId !== action.payload.cartId);
    },
    clearCart(state) {
      state.cart = [];
    }
  },
});

const store = configureStore({
  reducer: cartSlice.reducer,
});

export const cartActions = cartSlice.actions;

export default store;
