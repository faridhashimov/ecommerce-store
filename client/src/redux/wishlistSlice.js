import { createSlice } from '@reduxjs/toolkit'

export const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: {
        products: JSON.parse(localStorage.getItem('wishlist')) || [],
    },
    reducers: {
        addToWishlist: (state, { payload }) => {
            state.products.push(payload)
        },
        deleteFromWishlist: (state, { payload }) => {
            state.products = state.products.filter(
                (item) => item._id !== payload
            )
        },
    },
})

export const { addToWishlist, deleteFromWishlist } = wishlistSlice.actions
export default wishlistSlice.reducer
