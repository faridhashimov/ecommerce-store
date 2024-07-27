import { createSlice } from "@reduxjs/toolkit";
import { Product } from "./types/product";

interface WishlistState {
  products: Product[];
}

const initialState: WishlistState = {
  products: JSON.parse(localStorage.getItem("wishlist") || "[]"),
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, { payload }) => {
      state.products.push(payload);
    },
    deleteFromWishlist: (state, { payload }) => {
      state.products = state.products.filter(
        (item) => item.productId !== payload
      );
    },
  },
});

export const { addToWishlist, deleteFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
