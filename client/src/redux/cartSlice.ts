import { createSlice } from "@reduxjs/toolkit";
import { Product } from "./types/product";

export interface CartState {
  products: Product[];
}

const initialState: CartState = {
  products: JSON.parse(localStorage.getItem("wishlist") || "[]"),
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      if (
        state.products.some(
          (product) =>
            product.productId === payload.id &&
            product.productColor === payload.productColor &&
            product.productSize === payload.productSize
        )
      ) {
        state.products.map((product) =>
          product.productId === payload.id &&
          product.productColor === payload.productColor &&
          product.productSize === payload.productSize
            ? (product.quantity += payload.quantity)
            : product
        );
      } else {
        state.products.push(payload);
      }
    },
    deleteFromCart: (state, { payload: { id, productColor, productSize } }) => {
      state.products = state.products.filter(
        (product) =>
          product.productId !== id ||
          product.productColor !== productColor ||
          product.productSize !== productSize
      );
    },
    increaseQt: (state, { payload: { id, productColor, productSize } }) => {
      state.products.forEach((product) =>
        product.productId === id &&
        product.productColor === productColor &&
        product.productSize === productSize
          ? (product.quantity += 1)
          : product
      );
    },
    decreaseQt: (state, { payload: { id, productColor, productSize } }) => {
      state.products.forEach((product) =>
        product.productId === id &&
        product.productColor === productColor &&
        product.productSize === productSize
          ? (product.quantity -= 1)
          : product
      );
    },
    resetCart: (state) => {
      state.products = [];
    },
  },
});

export const { addToCart, deleteFromCart, increaseQt, decreaseQt, resetCart } =
  cartSlice.actions;
export default cartSlice.reducer;
