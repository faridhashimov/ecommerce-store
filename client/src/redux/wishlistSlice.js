import { createSlice } from '@reduxjs/toolkit'

export const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: {
        added: false,
        products: [],
    },
    reducers: {
        addToWishlist: (state, action) => {
            state.added = true
            state.products.push(action.payload)
        },
        deleteFromWishlist: (state, action) => {
            state.added = false
            state.products = state.products.filter(
                (item) => item._id !== action.payload
            )
        },
    },
})

export const { addToWishlist, deleteFromWishlist } = wishlistSlice.actions
export default wishlistSlice.reducer
